const fs = require('fs');
const path = require('path');
const articlesDir = path.join(process.cwd(), 'content', 'articles');

const targets = [
  'Health Insurance Subsidies',
  'How Much Does Medicare Cost',
  'Life Insurance Strategies to Increase Income',
  'Medicaid, Medicare, and Other Government Programs',
  'Medicare At The Right Time',
  'Medicare Health Plans 2021',
  'Insurance & Financial Articles',
  'Qualifying For Medicare With Disabilities',
  'Lowering Medicare Out-of-Pocket Expenses',
  'Signing Up for Medicare',
  "The ABC’s (and D) of Medicare",
  'What Is Final Expense Insurance',
  'What is universal life insurance'
];

function readArticles() {
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
  const out = [];
  for (const file of files) {
    const filePath = path.join(articlesDir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    const fm = {};
    if (fmMatch) {
      fmMatch[1].split(/\n/).forEach(line => {
        const m = line.match(/^([a-zA-Z0-9_\-]+):\s*(.*)$/);
        if (m) {
          let val = m[2].trim();
          if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
          fm[m[1]] = val;
        }
      });
    }
    const slug = fm.slug || file.replace(/^[0-9]+\./, '').replace(/\.md$/, '').replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
    const title = (fm.title || slug.replace(/-/g, ' ')).trim();
    const subject = (fm.subject || '').toLowerCase();
    const url = `/articles/${slug}/`;
    out.push({ file, filePath, raw, title, subject, url });
  }
  return out;
}

function parseRelated(raw) {
  const match = raw.match(/<RelatedArticles[\s\S]*?\[([\s\S]*?)\][\s\S]*?\/>/m);
  if (!match) return [];
  try {
    const arrText = '[' + match[1] + ']';
    return JSON.parse(arrText.replace(/\n/g, ''));
  } catch (e) {
    return [];
  }
}

function buildBlock(objs) {
  const items = objs.map(r => `\t{"title":"${r.title.replace(/\\/g,'\\\\').replace(/"/g,'\\\"')}","url":"${r.url}","excerpt":"${(r.excerpt||'').replace(/\\/g,'\\\\').replace(/"/g,'\\\"')}"}`).join(',\n');
  return `\n<!-- Related articles: deterministic distribution -->\n<RelatedArticles :related-articles='[\n${items}\n]' />`;
}

function mapTargetsToUrls(site) {
  function norm(s) { return (s||'').toLowerCase().replace(/[^a-z0-9]/g, ''); }
  const mapping = {};
  for (const t of targets) {
    const nt = norm(t);
    const exact = site.find(a => norm(a.title) === nt);
    if (exact) { mapping[t] = exact.url; continue; }
    const contains = site.find(a => norm(a.title).includes(nt) || nt.includes(norm(a.title)) || norm(a.title).includes(nt.slice(0,8)));
    mapping[t] = contains ? contains.url : null;
  }
  return mapping;
}

function ensureDistribution() {
  const site = readArticles();
  const mapping = mapTargetsToUrls(site);

  // initial parse of existing related arrays
  const relatedMap = {};
  for (const a of site) {
    relatedMap[a.url] = parseRelated(a.raw).slice(0,3);
  }

  // set of target urls that must be included at least once
  const targetUrls = Object.values(mapping).filter(Boolean);

  // find which targets are already included
  const included = new Set();
  for (const u of targetUrls) {
    for (const rArr of Object.values(relatedMap)) {
      if (rArr.some(r => r.url === u)) { included.add(u); break; }
    }
  }

  const toPlace = targetUrls.filter(u => !included.has(u));

  // helper: find candidate articles by subject matching the target's slug or by keyword
  function candidatesFor(url) {
    // get last path segment
    const key = url.split('/').filter(Boolean).pop();
    const medicareKeywords = ['medicare','medicaid','signing','reducing','the-abc','when-medicare'];
    if (medicareKeywords.some(k => url.includes(k) || key.includes(k))) return site.filter(s => s.subject && s.subject.includes('medicare'));
    if (url.includes('final-expense') || url.includes('life') || url.includes('universal') || url.includes('term')) return site.filter(s => s.subject && s.subject.includes('life'));
    return site;
  }

  // Round-robin placement: try to place each target into a candidate article that doesn't already include it and has <3 items
  const placed = [];
  for (const u of toPlace) {
    let placedFlag = false;
    const cand = candidatesFor(u);
    // prefer candidates with <3 related items
    const pref = cand.filter(c => (relatedMap[c.url]||[]).length < 3 && !(relatedMap[c.url]||[]).some(r=>r.url===u));
    if (pref.length) {
      const pick = pref[0];
      relatedMap[pick.url] = (relatedMap[pick.url] || []).concat([{ title: findTitleByUrl(site, u) || u, url: u, excerpt: findTitleByUrl(site, u) || '' }]).slice(0,3);
      placed.push({ target: u, into: pick.url });
      placedFlag = true;
    } else {
      // try any candidate that doesn't include it
      const any = cand.find(c => !(relatedMap[c.url]||[]).some(r=>r.url===u));
      if (any) {
        // replace last item that is not one of the original targets if necessary
        let arr = relatedMap[any.url] || [];
        if (arr.length < 3) arr.push({ title: findTitleByUrl(site, u) || u, url: u, excerpt: findTitleByUrl(site, u) || '' });
        else {
          // replace last entry
          arr[arr.length-1] = { title: findTitleByUrl(site, u) || u, url: u, excerpt: findTitleByUrl(site, u) || '' };
        }
        relatedMap[any.url] = arr.slice(0,3);
        placed.push({ target: u, into: any.url });
        placedFlag = true;
      }
    }
    if (!placedFlag) {
      // as a last resort, put into the first article that doesn't already include it (may overwrite)
      const first = site[0];
      let arr = relatedMap[first.url] || [];
      if (!arr.some(r=>r.url===u)) {
        if (arr.length < 3) arr.push({ title: findTitleByUrl(site, u) || u, url: u, excerpt: findTitleByUrl(site, u) || '' });
        else arr[arr.length-1] = { title: findTitleByUrl(site, u) || u, url: u, excerpt: findTitleByUrl(site, u) || '' };
        relatedMap[first.url] = arr.slice(0,3);
        placed.push({ target: u, into: first.url });
      }
    }
  }

  // After placing targets, ensure every article has exactly 3 related items
  for (const a of site) {
    let arr = relatedMap[a.url] || [];
    // remove duplicates
    const seen = new Set();
    arr = arr.filter(r => { if (seen.has(r.url)) return false; seen.add(r.url); return true; });
    // fill if <3 using same-subject articles or from targetUrls
    if (arr.length < 3) {
      // same-subject pool
      const pool = site.filter(s => s.url !== a.url && s.subject && a.subject && s.subject === a.subject).map(s => ({ title: s.title, url: s.url, excerpt: '' }));
      // fallback to any article
      const fallback = site.filter(s => s.url !== a.url).map(s => ({ title: s.title, url: s.url, excerpt: '' }));
      let i = 0;
      while (arr.length < 3 && i < pool.length) {
        if (!arr.some(x => x.url === pool[i].url)) arr.push(pool[i]);
        i++;
      }
      i = 0;
      while (arr.length < 3 && i < fallback.length) {
        if (!arr.some(x => x.url === fallback[i].url)) arr.push(fallback[i]);
        i++;
      }
    }
    // trim to 3
    relatedMap[a.url] = (arr||[]).slice(0,3);
  }

  // Persist changes to files
  const changedFiles = [];
  for (const a of site) {
    const objs = relatedMap[a.url] || [];
    const block = buildBlock(objs);
    let newRaw;
    if (/<RelatedArticles[\s\S]*?\/>/m.test(a.raw)) {
      newRaw = a.raw.replace(/<RelatedArticles[\s\S]*?\/>/m, block);
    } else {
      newRaw = a.raw.trim() + '\n\n' + block + '\n';
    }
    if (newRaw !== a.raw) {
      fs.writeFileSync(a.filePath, newRaw, 'utf8');
      changedFiles.push(a.file);
    }
  }

  return { mapping, placed, changedFiles };
}

function findTitleByUrl(site, url) {
  const s = site.find(x => x.url === url);
  return s ? s.title : null;
}

function verifyMapping(mapping) {
  const site = readArticles();
  const counts = {};
  Object.values(mapping).filter(Boolean).forEach(u => counts[u] = 0);
  for (const a of site) {
    const arr = parseRelated(a.raw);
    for (const r of arr) {
      if (counts[r.url] !== undefined) counts[r.url]++;
    }
  }
  return counts;
}

// Run
const result = ensureDistribution();
console.log('Deterministic pass placed:', result.placed.length, 'items.');
console.log('Files changed:', result.changedFiles.length);
result.changedFiles.forEach(f => console.log(' -', f));

const verification = verifyMapping(result.mapping);
console.log('\nVerification counts for mapped targets:');
console.log(JSON.stringify(verification, null, 2));
