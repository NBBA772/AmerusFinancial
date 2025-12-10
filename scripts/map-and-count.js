const fs = require('fs');
const path = require('path');
const articlesDir = path.join(process.cwd(), 'content', 'articles');
const files = fs.readdirSync(articlesDir).filter(f=>f.endsWith('.md'));
function readArticles(){
  const out=[];
  for(const file of files){
    const raw=fs.readFileSync(path.join(articlesDir,file),'utf8');
    const fmMatch=raw.match(/^---\n([\s\S]*?)\n---/);
    const fm={};
    if(fmMatch){ fmMatch[1].split(/\n/).forEach(line=>{ const m=line.match(/^([a-zA-Z0-9_\-]+):\s*(.*)$/); if(m){ let val=m[2].trim(); if(val.startsWith('"')&&val.endsWith('"')) val=val.slice(1,-1); fm[m[1]]=val; } }); }
    const slug=fm.slug||file.replace(/^[0-9]+\./,'').replace(/\.md$/,'').replace(/\s+/g,'-').replace(/[^a-zA-Z0-9\-]/g,'').toLowerCase();
    const title=(fm.title||slug.replace(/-/g,' ')).trim();
    const url=`/articles/${slug}/`;
    out.push({file,title,url,raw});
  }
  return out;
}
const site=readArticles();
const targets=[
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
function norm(s){return s.toLowerCase().replace(/[^a-z0-9]/g,'');}

const mapping={};
for(const t of targets){
  const nt=norm(t);
    // prefer exact normalized title match
    const exact = site.find(a => norm(a.title) === nt);
    if (exact) { mapping[t] = exact.url; continue; }
    const matches = site.filter(a => norm(a.title).includes(nt) || nt.includes(norm(a.title)) || norm(a.title).includes(nt.slice(0,8)));
    if(matches.length) mapping[t]=matches[0].url;
    else mapping[t]=null;
}

console.log('Mapping (target title => site url):');
console.log(JSON.stringify(mapping,null,2));

// count occurrences for mapped urls
const counts={};
for(const t of targets){ const url=mapping[t]; counts[url||t]=0; }
for(const a of site){ const m=a.raw.match(/<RelatedArticles[\s\S]*?\[([\s\S]*?)\][\s\S]*?\/>/m); if(m){ try{ const objs=JSON.parse('['+m[1]+']'.replace(/\n/g,'')); objs.forEach(o=>{ if(counts[o.url]!==undefined) counts[o.url]++; }); }catch(e){} }}
console.log('\nCounts for mapped urls:');
console.log(JSON.stringify(counts,null,2));
