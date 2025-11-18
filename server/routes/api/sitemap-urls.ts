import { serverQueryContent } from '#content/server'
import { defineEventHandler } from 'h3'

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export default defineEventHandler(async (event) => {
  // Get all content articles
  const articles = await serverQueryContent(event)
    .where({ _extension: 'md' })
    .find()
  
  // Static routes for services
  const staticRoutes = [
    '/services/health/dental',
    '/services/health/medicare',
    '/services/health/vision-coverage',
    '/services/health/individual-health',
    '/services/health/private-health',
    '/services/life/term-life',
    '/services/life/final-expense', 
    '/services/life/group-life-insurance',
    '/services/retirement/401k',
    '/services/retirement/iras'
  ]

  // Map articles to sitemap URLs
  const articleUrls: SitemapUrl[] = articles.map(article => ({
    loc: `/articles/${article.slug}/`,
    lastmod: article.date || new Date().toISOString(),
    priority: 0.8,
    changefreq: 'weekly'
  }))

  // Map static routes to sitemap URLs
  const staticUrls: SitemapUrl[] = staticRoutes.map(route => ({
    loc: route,
    lastmod: new Date().toISOString(),
    priority: 1.0,
    changefreq: 'weekly'
  }))

  // Combine all URLs
  return [...staticUrls, ...articleUrls]
})