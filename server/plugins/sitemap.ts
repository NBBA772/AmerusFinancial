import { serverQueryContent } from '#content/server'
import { defineNitroPlugin } from 'nitropack/runtime/plugin'

export default defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook('content:server', async () => {
    const contentList = await serverQueryContent().find()
    
    // Add route for each content article
    contentList.forEach(content => {
      if (content._file.startsWith('articles/')) {
        const url = `/articles/${content.slug}`
        nitroApp.hooks.callHook('sitemap:routes', {
          url,
          lastmod: content.date || content.updatedAt,
          changefreq: 'weekly',
          priority: 0.8
        })
      }
    })
  })
})