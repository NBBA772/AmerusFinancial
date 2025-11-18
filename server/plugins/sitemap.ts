// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - nitropack runtime plugin types may not be available
import { defineNitroPlugin } from 'nitropack/runtime/plugin'
import { serverQueryContent } from '#content/server'

export default defineNitroPlugin(async (nitroApp: any) => {
  nitroApp.hooks.hook('content:server', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - allow calling without event in this context
    const contentList = await (serverQueryContent as any)().find()
    
    // Add route for each content article
    contentList.forEach((content: any) => {
      if (content?._file && content._file.startsWith('articles/')) {
        const url = `/articles/${content.slug}/`
        // Normalize date to ISO 8601, fallback to now if invalid
        const rawDate = (content as any).date || (content as any).updatedAt
        const parsed = rawDate ? new Date(rawDate) : new Date()
        const lastmod = isNaN(parsed.getTime())
          ? new Date().toISOString().slice(0, 10)
          : parsed.toISOString().slice(0, 10)
        nitroApp.hooks.callHook('sitemap:routes', {
          url,
          lastmod,
          changefreq: 'weekly',
          priority: 0.8
        })
      }
    })
  })
})