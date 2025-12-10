const fs = require('fs');
const path = require('path');
const articlesDir = path.join(process.cwd(), 'content', 'articles');
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));

function readArticles() {
  const out = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(articlesDir, file), 'utf8');
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    const fm = {};
    if (fmMatch) {
      const fmText = fmMatch[1];
      const lines = fmText.split(/\n/);
      for (const line of lines) {
        const m = line.match(/^([a-zA-Z0-9_\-]+):\s*(.*)$/);
        if (m) { let val = m[2].trim(); if (val.startsWith('"')&&val.endsWith('"')) val = val.slice(1,-1); fm[m[1]] = val; }
      }
    }
    const slug = fm.slug || file.replace(/^[0-9]+\./,'').replace(/\.md$/,'').replace(/\s+/g,'-').replace(/[^a-zA-Z0-9\-]/g,'').toLowerCase();
    const title = (fm.title || slug.replace(/-/g,' ')).trim();
    const url = `/articles/${slug}/`;
    out.push({ file, title, url });
  }
  return out;
}

const site = readArticles();
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

function norm(s) { return s.toLowerCase().replace(/[^a-z0-9]/g,'').replace(/\s+/g,''); }

for (const t of targets) {
  const nt = norm(t);
  const matches = site.filter(a => norm(a.title).includes(nt) || nt.includes(norm(a.title)) || norm(a.title).includes(nt.slice(0,10)));
  console.log('Target:', t);
  if (matches.length === 0) {
    // try fuzzy substring
    const sub = site.filter(a => norm(a.title).indexOf(nt.slice(0,6)) !== -1);
    if (sub.length) {
      sub.forEach(s => console.log('  Candidate:', s.title, s.url));
    } else {
      console.log('  No match found');
    }
  } else {
    matches.forEach(m => console.log('  Matched:', m.title, m.url));
  }
}
