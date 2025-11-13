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
  // Provide Date object to sitemap builder to avoid invalid formatting
  const lastmod: Date = isNaN(parsed.getTime()) ? new Date() : parsed

    return {
      loc: `/articles/${article.slug}`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.8
    }
  }).filter(Boolean) // Remove any null entries

  // Add your static routes
  const nowDate = new Date()
  const staticUrls = [
    { loc: '/', lastmod: nowDate, changefreq: 'daily', priority: 1.0 },
    { loc: '/about-us', lastmod: nowDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/contact', lastmod: nowDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/health', lastmod: nowDate, changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/life', lastmod: nowDate, changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/retirement', lastmod: nowDate, changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/business', lastmod: nowDate, changefreq: 'weekly', priority: 0.9 },
    { loc: '/articles/overview', lastmod: nowDate, changefreq: 'daily', priority: 0.9 }
  ]

  // Combine and return all URLs
  return [...staticUrls, ...articleUrls]
})