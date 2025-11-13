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
  // Always pass ISO 8601 string for sitemap lastmod (W3C Datetime)
  const lastmod = isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString()

    return {
      loc: `/articles/${article.slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.8
    }
  }).filter(Boolean) // Remove any null entries

  // Add your static routes
  const nowIso = new Date().toISOString()
  const staticUrls = [
    { loc: '/', lastmod: nowIso, changefreq: 'daily', priority: 1.0 },
    { loc: '/about-us', lastmod: nowIso, changefreq: 'monthly', priority: 0.8 },
    { loc: '/contact', lastmod: nowIso, changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/health', lastmod: nowIso, changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/life', lastmod: nowIso, changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/retirement', lastmod: nowIso, changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/business', lastmod: nowIso, changefreq: 'weekly', priority: 0.9 },
    { loc: '/articles/overview', lastmod: nowIso, changefreq: 'daily', priority: 0.9 }
  ]

  // Combine and return all URLs
  return [...staticUrls, ...articleUrls]
})