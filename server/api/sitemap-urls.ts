import { defineEventHandler } from 'h3'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  // Get all articles
  const articles = await serverQueryContent(event)
    .where({ _extension: 'md' })
    .find()

  // Transform articles into sitemap URLs
  const articleUrls = articles.map(article => {
    if (!article.slug) {
      console.warn(`Article found without slug: ${article._file}`)
      return null
    }

    // Normalize date to ISO 8601 for sitemap
    const rawDate = (article as any).date || (article as any).updatedAt
    const parsed = rawDate ? new Date(rawDate) : new Date()
    // Format as YYYY-MM-DD only (W3C Datetime date form)
    const lastmod = isNaN(parsed.getTime())
      ? new Date().toISOString().slice(0, 10)
      : parsed.toISOString().slice(0, 10)

    return {
      loc: `/articles/${article.slug}/`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.8
    }
  }).filter(Boolean) // Remove any null entries

  // Add your static routes
  const nowIsoDate = new Date().toISOString().slice(0, 10)
  const staticUrls = [
    { loc: '/', lastmod: nowIsoDate, changefreq: 'daily', priority: 1.0 },
    { loc: '/about-us', lastmod: nowIsoDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/contact', lastmod: nowIsoDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/health', lastmod: nowIsoDate, changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/life', lastmod: nowIsoDate, changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/retirement', lastmod: nowIsoDate, changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/business', lastmod: nowIsoDate, changefreq: 'weekly', priority: 0.9 },
    { loc: '/articles/overview', lastmod: nowIsoDate, changefreq: 'daily', priority: 0.9 }
  ]

  // Combine and return all URLs
  return [...staticUrls, ...articleUrls]
})