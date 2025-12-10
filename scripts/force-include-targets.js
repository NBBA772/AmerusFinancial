const fs = require('fs');
const path = require('path');
const articlesDir = path.join(process.cwd(), 'content', 'articles');

const targetPages = [
  { title: 'Medicaid, Medicare, and Other Government Programs', url: '/articles/medicaid-medicare/', excerpt: 'Overview of government health programs and how they interact with private insurance.' },
  { title: 'Medicare At The Right Time', url: '/articles/medicare-at-the-right-time/', excerpt: 'Timing your Medicare enrollment to avoid penalties and gaps in coverage.' },
  { title: 'Medicare Health Plans 2021', url: '/articles/medicare-health-plans-2021/', excerpt: 'Review of Medicare plan options and what changed in 2021.' },
  { title: 'Insurance & Financial Articles', url: '/articles/overview/', excerpt: 'Collection of insurance and financial articles and resources from Amerus Financial.' },
  { title: 'Qualifying For Medicare With Disabilities', url: '/articles/qualifying-for-medicare-with-disabilities/', excerpt: 'Rules and timelines for getting Medicare when you qualify through a disability.' },
  { title: 'Lowering Medicare Out-of-Pocket Expenses', url: '/articles/reducing-expenses-in-medicare/', excerpt: 'Tips and benefits that reduce what you pay out of pocket under Medicare.' },
  { title: "The ABC's (and D) of Medicare", url: '/articles/the-abcs-and-d-of-medicare/', excerpt: 'Simple guide to Parts A, B, C and D of Medicare and what each covers.' },
  { title: 'What Is Final Expense Insurance', url: '/articles/what-is-final-expense-insurance/', excerpt: 'What final expense insurance covers and when it may make sense.' }
];

function readArticles() {
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
  const articles = [];
  for (const file of files) {
    const filePath = path.join(articlesDir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    let fm = {};
    if (fmMatch) {
      const fmText = fmMatch[1];
      const lines = fmText.split(/\n/);
      for (const line of lines) {
        const m = line.match(/^([a-zA-Z0-9_\-]+):\s*(.*)$/);
        if (m) {
          const key = m[1].trim();
          let val = m[2].trim();
          if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
          fm[key] = val;
        }
      }
    }
    let slug = fm.slug || file.replace(/^[0-9]+\./, '').replace(/\.md$/, '').replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
    const title = fm.title || slug.replace(/-/g, ' ');
    const subject = (fm.subject || '').toLowerCase();
    const url = `/articles/${slug}/`;
    articles.push({ filePath, file, raw, title, subject, url });
  }
  return articles;
}

function buildRelatedBlock(related) {
  const items = related.map(r => `\t{"title":"${escapeForJSON(r.title)}","url":"${r.url}","excerpt":"${escapeForJSON(r.excerpt)}"}`).join(',\n');
  return `<RelatedArticles :related-articles='[\n${items}\n]' />`;
}
function escapeForJSON(s) { return (s||'').replace(/\\/g,'\\\\').replace(/"/g,'\\\"').replace(/\n/g,' '); }

function replaceRelatedBlock(raw, newBlock) {
  if (/<RelatedArticles[\s\S]*?\/>/m.test(raw)) {
    return raw.replace(/<RelatedArticles[\s\S]*?\/>/m, newBlock);
  }
  return raw.trim() + '\n\n' + newBlock + '\n';
}

function ensure() {
  const articles = readArticles();
  const medicareArticles = articles.filter(a => a.subject && a.subject.includes('medicare'));
  const lifeArticles = articles.filter(a => a.subject && a.subject.includes('life'));
  const others = articles;

  const changed = [];
  let medicareIdx = 0;
  let lifeIdx = 0;
  let otherIdx = 0;

  for (const t of targetPages) {
    // check if included anywhere
    let included = false;
    for (const a of articles) {
      const m = a.raw.match(/<RelatedArticles[\s\S]*?\[([\s\S]*?)\][\s\S]*?\/>/m);
      if (m) {
        try {
          const objs = JSON.parse('[' + m[1] + ']'.replace(/\n/g,''));
          if (objs.some(o => o.url === t.url)) { included = true; break; }
        } catch (e) {}
      }
    }
    if (included) continue;

    // choose candidate
    let candidate = null;
    if (t.url.includes('medicare') || t.url.includes('medicaid') || t.url.includes('signing-up') || t.url.includes('reducing-expenses') || t.url.includes('qualifying-for')) {
      if (medicareArticles.length > 0) {
        candidate = medicareArticles[medicareIdx % medicareArticles.length];
        medicareIdx++;
      }
    } else if (t.url.includes('final-expense') ) {
      if (lifeArticles.length > 0) { candidate = lifeArticles[lifeIdx % lifeArticles.length]; lifeIdx++; }
    }
    if (!candidate) { candidate = others[otherIdx % others.length]; otherIdx++; }

    if (!candidate) { console.log('No candidate to place', t.url); continue; }

    // parse existing
    const match = candidate.raw.match(/<RelatedArticles[\s\S]*?\[([\s\S]*?)\][\s\S]*?\/>/m);
    let objs = [];
    if (match) {
      try { objs = JSON.parse('[' + match[1] + ']'.replace(/\n/g,'')); } catch(e) { objs = []; }
    }
    if (!objs.some(o => o.url === t.url)) objs.push({ title: t.title, url: t.url, excerpt: t.excerpt });
    // keep first 3
    objs = objs.slice(0,3);
    const newBlock = '\n<!-- Related articles: updated by force-include script -->\n' + buildRelatedBlock(objs);
    const newRaw = replaceRelatedBlock(candidate.raw, newBlock);
    fs.writeFileSync(candidate.filePath, newRaw, 'utf8');
    changed.push(candidate.file);
  }

  console.log('Force-include changed files:', changed.length);
  changed.forEach(f => console.log(' -', f));
}

ensure();
