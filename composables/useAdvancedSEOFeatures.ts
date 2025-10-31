/**
 * SEO Performance and Analytics Composable
 * Provides advanced SEO monitoring and optimization features
 */

/**
 * Implements JSON-LD structure for better schema organization
 */
export const useStructuredDataGraph = (schemas: any[]) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': schemas
  }
  
  useSchemaOrg(structuredData)
}

/**
 * Advanced meta tags for better search performance
 */
export const useAdvancedMetaTags = () => {
  useHead({
    meta: [
      // Enhanced crawling directives
      { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
      { name: 'googlebot', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
      { name: 'bingbot', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
      
      // Social media optimization
      { name: 'twitter:site', content: '@amerusfinancial' },
      { name: 'twitter:creator', content: '@amerusfinancial' },
      { name: 'fb:app_id', content: 'your-facebook-app-id' },
      
      // Technical SEO
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#30BCFE' },
      { name: 'theme-color', content: '#30BCFE' },
      
      // Performance hints
      { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
      
      // Security
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-Frame-Options', content: 'SAMEORIGIN' },
      { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' }
    ],
    
    link: [
      // DNS prefetch for performance
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'dns-prefetch', href: '//connect.facebook.net' },
      
      // Preconnect for critical resources
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      
      // Apple touch icons
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  })
}

/**
 * Implements advanced hreflang for international SEO
 */
export const useHreflang = (alternates: { lang: string; url: string }[]) => {
  const hreflangLinks = alternates.map(alt => ({
    rel: 'alternate',
    hreflang: alt.lang,
    href: alt.url
  }))
  
  useHead({
    link: hreflangLinks
  })
}

/**
 * Creates priority hints for critical resources
 */
export const usePriorityHints = () => {
  useHead({
    link: [
      // High priority for above-the-fold images
      { rel: 'preload', as: 'image', href: '/images/hero-dental.jpg', importance: 'high' },
      
      // Preload critical CSS
      { rel: 'preload', as: 'style', href: '/css/critical.css' },
      
      // Preload critical fonts
      { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/inter-var.woff2', crossorigin: '' }
    ]
  })
}

/**
 * Implements Core Web Vitals monitoring using native browser APIs
 */
export const useCoreWebVitals = () => {
  if (process.client) {
    // Use native Performance Observer API for Core Web Vitals
    try {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
      }).observe({ type: 'largest-contentful-paint', buffered: true })

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime)
        }
      }).observe({ type: 'first-input', buffered: true })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            console.log('CLS:', clsValue)
          }
        }
      }).observe({ type: 'layout-shift', buffered: true })

    } catch (error) {
      console.log('Performance Observer not supported in this browser')
    }
  }
}

/**
 * Advanced analytics and tracking
 */
export const useAdvancedAnalytics = () => {
  useHead({
    script: [
      // Google Analytics 4
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
        async: true
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'service_category'
            }
          });
        `
      },
      
      // Microsoft Clarity
      {
        innerHTML: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
        `
      }
    ]
  })
}