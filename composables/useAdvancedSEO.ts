/**
 * Advanced SEO Composable for Enhanced SERP Features
 * Provides additional schema types and SEO optimizations
 */

/**
 * Creates VideoObject schema for enhanced media SEO
 */
export const useVideoSchema = (videoData: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  contentUrl: string
}) => {
  return {
    '@type': 'VideoObject',
    name: videoData.name,
    description: videoData.description,
    thumbnailUrl: videoData.thumbnailUrl,
    uploadDate: videoData.uploadDate,
    duration: videoData.duration,
    contentUrl: videoData.contentUrl,
    embedUrl: videoData.contentUrl,
    publisher: useOrganizationSchema()
  }
}

/**
 * Creates Course schema for educational content
 */
export const useCourseSchema = (courseData: {
  name: string
  description: string
  provider: string
  courseCode?: string
}) => {
  return {
    '@type': 'Course',
    name: courseData.name,
    description: courseData.description,
    provider: {
      '@type': 'Organization',
      name: courseData.provider
    },
    courseCode: courseData.courseCode
  }
}

/**
 * Creates Event schema for webinars and seminars
 */
export const useEventSchema = (eventData: {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  organizer: string
}) => {
  return {
    '@type': 'Event',
    name: eventData.name,
    description: eventData.description,
    startDate: eventData.startDate,
    endDate: eventData.endDate,
    location: {
      '@type': 'Place',
      name: eventData.location
    },
    organizer: useOrganizationSchema()
  }
}

/**
 * Creates Article schema for blog posts and guides
 */
export const useArticleSchema = (articleData: {
  headline: string
  description: string
  datePublished: string
  dateModified: string
  author: string
  image: string
}) => {
  return {
    '@type': 'Article',
    headline: articleData.headline,
    description: articleData.description,
    datePublished: articleData.datePublished,
    dateModified: articleData.dateModified,
    author: {
      '@type': 'Person',
      name: articleData.author
    },
    publisher: useOrganizationSchema(),
    image: {
      '@type': 'ImageObject',
      url: articleData.image
    }
  }
}

/**
 * Creates FinancialService schema for specific financial products
 */
export const useFinancialServiceSchema = (serviceData: {
  name: string
  description: string
  category: string
  feesAndCommissionsSpecification?: string
}) => {
  return {
    '@type': 'FinancialService',
    name: serviceData.name,
    description: serviceData.description,
    category: serviceData.category,
    provider: useOrganizationSchema(),
    feesAndCommissionsSpecification: serviceData.feesAndCommissionsSpecification,
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    }
  }
}

/**
 * Creates enhanced meta tags for better social sharing
 */
export const useEnhancedSocialMeta = (data: {
  title: string
  description: string
  image: string
  url: string
  type?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_status' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other'
  locale?: string
}) => {
  // Set both Open Graph URL and canonical URL
  useHead({
    link: [
      {
        rel: 'canonical',
        href: data.url
      }
    ]
  })
  
  useSeoMeta({
    // Enhanced Open Graph
    ogType: data.type || 'website' as const,
    ogLocale: data.locale || 'en_US',
    ogSiteName: 'Amerus Financial',
    ogUrl: data.url,
    
    // Article specific tags
    ...(data.type === 'article' && {
      articlePublisher: 'https://www.facebook.com/amerusfinancial',
      articleAuthor: 'Amerus Financial Team'
    }),
    
    // Enhanced Twitter
    twitterSite: '@amerusfinancial',
    twitterCreator: '@amerusfinancial',
    
    // LinkedIn specific
    'og:profile:first_name': 'Amerus',
    'og:profile:last_name': 'Financial',
    
    // Additional meta tags
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    googlebot: 'index,follow',
    'format-detection': 'telephone=no',
    
    // Mobile optimization
    viewport: 'width=device-width,initial-scale=1,shrink-to-fit=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default'
  })
}