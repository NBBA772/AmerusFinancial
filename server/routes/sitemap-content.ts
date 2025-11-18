import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find()
  const routes = docs.map(doc => ({
    loc: `/articles/${doc.slug}/`,
    lastmod: doc.date,
    priority: 0.8,
    changefreq: 'weekly'
  }))

  return routes
})