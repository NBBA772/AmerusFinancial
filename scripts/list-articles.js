const fs = require('fs');
const path = require('path');
const articlesDir = path.join(process.cwd(), 'content', 'articles');
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
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
      if (m) {
        const key = m[1].trim();
        let val = m[2].trim();
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1,-1);
        fm[key] = val;
      }
    }
  }
  const slug = fm.slug || file.replace(/^[0-9]+\./,'').replace(/\.md$/,'').replace(/\s+/g,'-').replace(/[^a-zA-Z0-9\-]/g,'').toLowerCase();
  const title = fm.title || slug.replace(/-/g,' ');
  const excerpt = (fm.description || '').replace(/\n/g,' ');
  const url = `/articles/${slug}/`;
  out.push({ file, title, excerpt, url, subject: (fm.subject||'') });
}
console.log(JSON.stringify(out, null, 2));
