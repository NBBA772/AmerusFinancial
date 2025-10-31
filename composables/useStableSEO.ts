/**
 * Stable Advanced SEO Composables without external dependencies
 * Provides enhanced SEO features using only built-in browser APIs
 */

/**
 * Enhanced meta tags for better search performance
 */
export const useEnhancedMetaTags = () => {
  useHead({
    meta: [
      // Enhanced crawling directives
      { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
      { name: 'googlebot', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
      { name: 'bingbot', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
      
      // Social media optimization
      { name: 'twitter:site', content: '@amerusfinancial' },
      { name: 'twitter:creator', content: '@amerusfinancial' },
      
      // Technical SEO
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#30BCFE' },
      
      // Security headers
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
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ]
  })
}

/**
 * Creates priority hints for critical resources
 */
export const useResourceHints = (criticalImages: string[] = []) => {
  const links: any[] = [
    // Preload critical fonts
    { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/inter-var.woff2', crossorigin: '' }
  ]
  
  // Add critical images
  criticalImages.forEach(image => {
    links.push({ rel: 'preload', as: 'image', href: image })
  })
  
  useHead({ link: links })
}

/**
 * Enhanced social meta for better sharing
 */
export const useSocialMeta = (data: {
  title: string
  description: string
  image: string
  url: string
  type?: string
}) => {
  useSeoMeta({
    // Enhanced Open Graph
    ogType: (data.type as any) || 'website',
    ogLocale: 'en_US',
    ogSiteName: 'Amerus Financial',
    
    // Enhanced Twitter
    twitterSite: '@amerusfinancial',
    twitterCreator: '@amerusfinancial',
    
    // Additional optimization
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
  })
}

/**
 * Creates Review/Rating schema for products/services
 */
export const useReviewSchema = (reviews: Array<{
  author: string
  rating: number
  review: string
  date: string
}>) => {
  const reviewSchemas = reviews.map(review => ({
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5'
    },
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewBody: review.review,
    datePublished: review.date
  }))

  const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating.toFixed(1),
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    review: reviewSchemas
  }
}

/**
 * Creates HowTo schema for step-by-step processes
 */
export const useHowToSchema = (steps: Array<{
  name: string
  text: string
  image?: string
}>, title: string, description: string, totalTime?: string, cost?: string) => {
  return {
    '@type': 'HowTo',
    name: title,
    description: description,
    totalTime: totalTime || 'PT15M',
    ...(cost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: cost
      }
    }),
    step: steps.map(step => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image })
    }))
  }
}

/**
 * Simple performance monitoring using native APIs
 */
export const usePerformanceMonitoring = () => {
  if (process.client) {
    // Monitor page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (perfData) {
          console.log('Page Load Performance:', {
            'DNS Lookup': perfData.domainLookupEnd - perfData.domainLookupStart,
            'TCP Connection': perfData.connectEnd - perfData.connectStart,
            'First Byte': perfData.responseStart - perfData.requestStart,
            'DOM Loading': perfData.domContentLoadedEventEnd - perfData.responseStart,
            'Total Load Time': perfData.loadEventEnd - perfData.fetchStart
          })
        }
      }, 100)
    })
  }
}

/**
 * Main composable that provides all stable SEO functionality
 * This is the primary export that matches the expected interface
 */
export const useStableSEO = () => {
  // Enhanced meta tags for better search performance
  const enhancedMetaTags = {
    meta: [
      // Enhanced crawling directives
      { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
      { name: 'googlebot', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
      { name: 'bingbot', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
      
      // Social media optimization
      { name: 'twitter:site', content: '@amerusfinancial' },
      { name: 'twitter:creator', content: '@amerusfinancial' },
      
      // Technical SEO
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#30BCFE' },
      
      // Security headers
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
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ]
  }

  // Creates priority hints for critical resources
  const resourceHints = (criticalImages: string[] = []) => {
    const links: any[] = [
      // Preload critical fonts
      { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/inter-var.woff2', crossorigin: '' }
    ]
    
    // Add critical images
    criticalImages.forEach(image => {
      links.push({ rel: 'preload', as: 'image', href: image })
    })
    
    return { link: links }
  }

  // Creates Review/Rating schema for products/services
  const reviewSchema = (name: string, description: string, reviews: Array<{
    author: string
    rating: number
    text: string
  }>) => {
    const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

    return {
      '@type': 'Service',
      name: name,
      description: description,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: avgRating.toFixed(1),
        reviewCount: reviews.length.toString(),
        bestRating: '5',
        worstRating: '1'
      },
      review: reviews.map(review => ({
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating.toString(),
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: review.author
        },
        reviewBody: review.text
      }))
    }
  }

  // Creates HowTo schema for step-by-step processes
  const howToSchema = (title: string, description: string, image: string, totalTime: number, steps: Array<{
    name: string
    text: string
  }>) => {
    return {
      '@type': 'HowTo',
      name: title,
      description: description,
      image: image,
      totalTime: `PT${totalTime}M`,
      step: steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text
      }))
    }
  }

  return {
    enhancedMetaTags,
    resourceHints,
    reviewSchema,
    howToSchema,
    usePerformanceMonitoring
  }
}