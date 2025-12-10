const fs = require('fs');
const path = require('path');

const articlesDir = path.join(process.cwd(), 'content', 'articles');

// Pages the user listed that must be included in the related-articles pool
const targetPages = [
  { title: 'Health Insurance Subsidies', url: '/articles/health-insurance-subsidies/', excerpt: 'How subsidies and tax credits lower your health insurance premiums and out-of-pocket costs.' },
  { title: 'How Much Does Medicare Cost', url: '/articles/how-much-does-medicare-cost/', excerpt: 'Breakdown of Medicare costs including premiums, deductibles, and out-of-pocket limits.' },
  { title: 'Life Insurance Strategies to Increase Income', url: '/articles/lower-your-taxes-and-increase-your-income-using-life-insurance-strategies/', excerpt: 'Strategies using life insurance to create tax-advantaged income and grow wealth.' },
  { title: 'Medicaid, Medicare, and Other Government Programs', url: '/articles/medicaid-medicare/', excerpt: 'Overview of government health programs and how they interact with private insurance.' },
  { title: 'Medicare At The Right Time', url: '/articles/medicare-at-the-right-time/', excerpt: 'Timing your Medicare enrollment to avoid penalties and gaps in coverage.' },
  { title: 'Medicare Health Plans 2021', url: '/articles/medicare-health-plans-2021/', excerpt: 'Review of Medicare plan options and what changed in 2021.' },
  { title: 'Insurance & Financial Articles', url: '/articles/overview/', excerpt: 'Collection of insurance and financial articles and resources from Amerus Financial.' },
  { title: 'Qualifying For Medicare With Disabilities', url: '/articles/qualifying-for-medicare-with-disabilities/', excerpt: 'Rules and timelines for getting Medicare when you qualify through a disability.' },
  { title: 'Lowering Medicare Out-of-Pocket Expenses', url: '/articles/reducing-expenses-in-medicare/', excerpt: 'Tips and benefits that reduce what you pay out of pocket under Medicare.' },
  { title: 'Signing Up for Medicare', url: '/articles/signing-up-for-medicare/', excerpt: 'When and how to enroll in Medicare and avoid penalties.' },
  { title: "The ABC’s (and D) of Medicare", url: '/articles/the-abcs-and-d-of-medicare/', excerpt: 'Simple guide to Parts A, B, C and D of Medicare and what each covers.' },
  { title: 'What Is Final Expense Insurance', url: '/articles/what-is-final-expense-insurance/', excerpt: 'What final expense insurance covers and when it may make sense.' },
  { title: 'What is universal life insurance', url: '/articles/what-is-universal-life-insurance/', excerpt: 'How universal life insurance works and key features to consider.' }
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
          // strip surrounding quotes
          if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
          fm[key] = val;
        }
      }
    }

    // derive slug if not present
    let slug = fm.slug || '';
    if (!slug) {
      // filename may start with number and dot
      const name = file.replace(/^[0-9]+\./, '');
      slug = name.replace(/\.md$/, '').replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
    }

    // excerpt: use description frontmatter or first paragraph after frontmatter
    let excerpt = fm.description || '';
    if (!excerpt) {
      // get content after frontmatter
      const after = raw.replace(/^---[\s\S]*?---/, '').trim();
      const firstPara = after.split(/\n\n/).find(p => p.trim().length > 0) || '';
      excerpt = firstPara.replace(/\n/g, ' ').slice(0, 200);
    }

    const subject = fm.subject || '';
    const title = fm.title || (slug.replace(/-/g, ' '));
    const url = `/articles/${slug}/`;

    articles.push({ file, filePath, title, excerpt, url, slug, subject, raw });
  }

  return articles;
}

function createRelatedFor(article, articles) {
  // pick up to 3 same-subject articles
  const same = articles.filter(a => a.slug !== article.slug && a.subject && a.subject === article.subject);
  const related = [];

  for (const s of same) {
    if (related.length >= 3) break;
    related.push({ title: s.title, url: s.url, excerpt: s.excerpt });
  }

  // fill from targetPages ensuring no duplicates
  for (const t of targetPages) {
    if (related.length >= 3) break;
    if (t.url === article.url) continue;
    if (!related.some(r => r.url === t.url)) related.push(t);
  }

  // final fallback: use other articles
  for (const o of articles) {
    if (related.length >= 3) break;
    if (o.slug === article.slug) continue;
    if (!related.some(r => r.url === o.url)) related.push({ title: o.title, url: o.url, excerpt: o.excerpt });
  }

  return related.slice(0,3);
}

function buildRelatedBlock(related) {
  const items = related.map(r => `\t{"title":"${escapeForJSON(r.title)}","url":"${r.url}","excerpt":"${escapeForJSON(r.excerpt)}"}`).join(',\n');
  return `<RelatedArticles :related-articles='[\n${items}\n]' />`;
}

function escapeForJSON(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\\"').replace(/\n/g, ' ');
}

function replaceRelatedBlock(raw, newBlock) {
  // find existing <RelatedArticles ... /> block
  if (/<RelatedArticles[\s\S]*?\/>/m.test(raw)) {
    return raw.replace(/<RelatedArticles[\s\S]*?\/>/m, newBlock);
  }

  // else append before end of file (after any closing html comment) or at end
  return raw.trim() + '\n\n' + newBlock + '\n';
}

function main() {
  const articles = readArticles();

  const changedFiles = [];
  const inclusionCounts = {};
  for (const t of targetPages) inclusionCounts[t.url] = 0;

  for (const art of articles) {
    const related = createRelatedFor(art, articles);
    related.forEach(r => { if (inclusionCounts[r.url] !== undefined) inclusionCounts[r.url]++; });

    const block = buildRelatedBlock(related);
    const newRaw = replaceRelatedBlock(art.raw, '\n<!-- Related articles: updated by script -->\n' + block);

    if (newRaw !== art.raw) {
      fs.writeFileSync(art.filePath, newRaw, 'utf8');
      changedFiles.push(art.file);
    }
  }

  console.log('Update complete. Files changed:', changedFiles.length);
  changedFiles.forEach(f => console.log(' -', f));

  console.log('\nTarget pages inclusion counts:');
  for (const k of Object.keys(inclusionCounts)) console.log(k, inclusionCounts[k]);

  // list articles with zero inclusion
  const zero = Object.keys(inclusionCounts).filter(k => inclusionCounts[k] === 0);
  if (zero.length > 0) {
    console.log('\nWarning: The following target pages were not included in any related-articles output (0 occurrences):');
    zero.forEach(z => console.log(' -', z));
  } else {
    console.log('\nAll target pages were included at least once.');
  }
}

// Second pass: ensure each target page is included at least once.
function ensureTargetsIncluded() {
  const articles = readArticles();
  // build map of file -> related urls
  const fileRelated = {};
  for (const art of articles) {
    const match = art.raw.match(/<RelatedArticles[\s\S]*?\[([\s\S]*?)\][\s\S]*?\/>/m);
    if (match) {
      const arrText = '[' + match[1] + ']';
      try {
        // arrText uses JSON object entries with double quotes; safe to parse
        const objs = JSON.parse(arrText.replace(/\n/g, ''));
        fileRelated[art.filePath] = objs.map(o => o.url);
      } catch (e) {
        fileRelated[art.filePath] = [];
      }
    } else {
      fileRelated[art.filePath] = [];
    }
  }

  const missing = [];
  for (const t of targetPages) {
    const includedSomewhere = Object.values(fileRelated).some(arr => arr.includes(t.url));
    if (!includedSomewhere) missing.push(t);
  }

  if (missing.length === 0) {
    console.log('\nAll target pages are included after pass 1.');
    return;
  }

  console.log('\nSecond pass: adding missing target pages to article related lists...');
  const changed = [];
  for (const t of missing) {
    // find first article file that doesn't already include it
    const candidates = articles.filter(a => a.url !== t.url);
    let placed = false;
    for (const cand of candidates) {
      const existing = fileRelated[cand.filePath] || [];
      if (!existing.includes(t.url)) {
        // parse current related block to get objects
        const match = cand.raw.match(/<RelatedArticles[\s\S]*?\[([\s\S]*?)\][\s\S]*?\/>/m);
        let objs = [];
        if (match) {
          const arrText = '[' + match[1] + ']';
          try { objs = JSON.parse(arrText.replace(/\n/g, '')); } catch (e) { objs = []; }
        }
        // append target
        objs.push({ title: t.title, url: t.url, excerpt: t.excerpt });
        // keep only last 3
        if (objs.length > 3) objs = objs.slice(0,3);
        const newBlock = '\n<!-- Related articles: updated by script (pass2) -->\n' + buildRelatedBlock(objs);
        const newRaw = replaceRelatedBlock(cand.raw, newBlock);
        fs.writeFileSync(cand.filePath, newRaw, 'utf8');
        changed.push(cand.file);
        // update fileRelated so we don't duplicate placements
        fileRelated[cand.filePath] = objs.map(o => o.url);
        placed = true;
        break;
      }
    }
    if (!placed) {
      console.log('Could not place target', t.url, '— no suitable candidate found');
    }
  }

  if (changed.length > 0) {
    console.log('Pass2 changed files:', changed.length);
    changed.forEach(f => console.log(' -', f));
  }
}

main();
ensureTargetsIncluded();
