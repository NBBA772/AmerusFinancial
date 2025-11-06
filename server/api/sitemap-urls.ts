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

    return {
      loc: `/articles/${article.slug}`,
      lastmod: article.date || new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8
    }
  }).filter(Boolean) // Remove any null entries

  // Add your static routes
  const staticUrls = [
    { loc: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
    { loc: '/about-us', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/contact', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/health', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/life', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/retirement', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: '/services/business', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: '/articles/overview', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 0.9 }
  ]

  // Combine and return all URLs
  return [...staticUrls, ...articleUrls]
})