const fs = require('fs');
const path = require('path');
const articlesDir = path.join(process.cwd(), 'content', 'articles');
const files = fs.readdirSync(articlesDir).filter(f=>f.endsWith('.md'));

function readArticles(){
  const out=[];
  for(const file of files){
    const filePath=path.join(articlesDir,file);
    const raw=fs.readFileSync(filePath,'utf8');
    const fmMatch=raw.match(/^---\n([\s\S]*?)\n---/);
    const fm={};
    if(fmMatch){ fmMatch[1].split(/\n/).forEach(line=>{ const m=line.match(/^([a-zA-Z0-9_\-]+):\s*(.*)$/); if(m){ let val=m[2].trim(); if(val.startsWith('"')&&val.endsWith('"')) val=val.slice(1,-1); fm[m[1]]=val; } }); }
    const slug=fm.slug||file.replace(/^[0-9]+\./,'').replace(/\.md$/,'').replace(/\s+/g,'-').replace(/[^a-zA-Z0-9\-]/g,'').toLowerCase();
    const title=(fm.title||slug.replace(/-/g,' ')).trim();
    const url=`/articles/${slug}/`;
    out.push({file,filePath,raw,title,subject:(fm.subject||'').toLowerCase(),url});
  }
  return out;
}

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

const site=readArticles();
// build map target->site url
const mapping={};
for(const t of targets){ const nt=norm(t); const exact=site.find(a=>norm(a.title)===nt); if(exact){ mapping[t]=exact.url; continue;} const matches=site.filter(a=>norm(a.title).includes(nt) || nt.includes(norm(a.title)) || norm(a.title).includes(nt.slice(0,8))); mapping[t]=matches.length?matches[0].url:null; }

// count occurrences
const counts={}; for(const t of targets){ counts[t]=0; }
for(const a of site){ const m=a.raw.match(/<RelatedArticles[\s\S]*?\[([\s\S]*?)\][\s\S]*?\/>/m); if(m){ try{ const objs=JSON.parse('['+m[1]+']'.replace(/\n/g,'')); objs.forEach(o=>{ for(const t of targets){ if(mapping[t]===o.url) counts[t]++; } }); }catch(e){} }}

console.log('Current counts per target-title (mapped->site url):');
for(const t of targets){ console.log(t, '->', mapping[t], 'count:', counts[t]); }

// find targets with zero count and include them
const zero = targets.filter(t=>counts[t]===0 && mapping[t]);
if(zero.length===0){ console.log('All targets included.'); process.exit(0); }

console.log('\nIncluding missing targets into suitable articles...');
const changed=[];
let medicareIdx=0; let lifeIdx=0; let otherIdx=0;
const medicareArticles=site.filter(a=>a.subject && a.subject.includes('medicare'));
const lifeArticles=site.filter(a=>a.subject && a.subject.includes('life'));

for(const t of zero){ const url=mapping[t];
  // choose candidate
  let candidate=null;
  if(url.includes('medicare')||url.includes('medicaid')||t.toLowerCase().includes('medicare')){
    if(medicareArticles.length) { candidate=medicareArticles[medicareIdx%medicareArticles.length]; medicareIdx++; }
  } else if(t.toLowerCase().includes('life') || url.includes('final-expense')){
    if(lifeArticles.length){ candidate=lifeArticles[lifeIdx%lifeArticles.length]; lifeIdx++; }
  }
  if(!candidate){ candidate=site[otherIdx%site.length]; otherIdx++; }
  if(!candidate) continue;
  // parse existing
  const match=candidate.raw.match(/<RelatedArticles[\s\S]*?\[([\s\S]*?)\][\s\S]*?\/>/m);
  let objs=[];
  if(match){ try{ objs=JSON.parse('['+match[1]+']'.replace(/\n/g,'')); }catch(e){ objs=[]; } }
  if(!objs.some(o=>o.url===url)) objs.push({ title: t, url, excerpt: t });
  objs=objs.slice(0,3);
  const items = objs.map(r=>`\t{"title":"${r.title.replace(/\\/g,'\\\\').replace(/"/g,'\\\"')}","url":"${r.url}","excerpt":"${(r.excerpt||'').replace(/\\/g,'\\\\').replace(/"/g,'\\\"')}"}`).join(',\n');
  const newBlock = `\n<!-- Related articles: ensured inclusion -->\n<RelatedArticles :related-articles='[\n${items}\n]' />`;
  const newRaw = candidate.raw.replace(/<RelatedArticles[\s\S]*?\/>/m, newBlock);
  fs.writeFileSync(candidate.filePath, newRaw, 'utf8');
  changed.push(candidate.file);
}

console.log('Files changed:', changed.length);
changed.forEach(f=>console.log(' -', f));
