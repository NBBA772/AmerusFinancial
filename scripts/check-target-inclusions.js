const fs = require('fs');
const path = require('path');
const articlesDir = path.join(process.cwd(), 'content', 'articles');
const targetUrls = [
  '/articles/health-insurance-subsidies/',
  '/articles/how-much-does-medicare-cost/',
  '/articles/lower-your-taxes-and-increase-your-income-using-life-insurance-strategies/',
  '/articles/medicaid-medicare/',
  '/articles/medicare-at-the-right-time/',
  '/articles/medicare-health-plans-2021/',
  '/articles/overview/',
  '/articles/qualifying-for-medicare-with-disabilities/',
  '/articles/reducing-expenses-in-medicare/',
  '/articles/signing-up-for-medicare/',
  '/articles/the-abcs-and-d-of-medicare/',
  '/articles/what-is-final-expense-insurance/',
  '/articles/what-is-universal-life-insurance/'
];
const counts = {};
for (const u of targetUrls) counts[u] = 0;
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
for (const file of files) {
  const raw = fs.readFileSync(path.join(articlesDir, file), 'utf8');
  const match = raw.match(/<RelatedArticles[\s\S]*?\[([\s\S]*?)\][\s\S]*?\/>/m);
  if (match) {
    const arrText = '[' + match[1] + ']';
    try {
      const objs = JSON.parse(arrText.replace(/\n/g, ''));
      objs.forEach(o => {
        if (counts[o.url] !== undefined) counts[o.url]++;
      });
    } catch (e) {
      // ignore parse errors
    }
  }
}
console.log('Inclusion counts:');
for (const k of Object.keys(counts)) console.log(k, counts[k]);
