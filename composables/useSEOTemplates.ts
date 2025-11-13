/**
 * SEO Enhancement Template Generator
 * Creates the enhanced SEO code blocks for service pages
 */

export const generateSEOTemplate = (pageData: {
  title: string
  description: string
  image: string
  url: string
  serviceName: string
  serviceDescription: string
  category: string
  price: string
  priceDescription?: string
  reviews: Array<{
    author: string
    rating: number
    review: string
    date: string
  }>
  howToTitle: string
  howToDescription: string
  howToTime: string
  howToSteps: Array<{
    name: string
    text: string
    image: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}) => {
  return `
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['${pageData.image}'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: '${pageData.title}',
  description: '${pageData.description}',
  image: '${pageData.image}',
  url: '${pageData.url}',
  type: 'website'
})

// Enhanced meta tags and canonical
// Ensure URL consistency between OG and canonical
const url = pageData.url.toLowerCase()
useHead({
  link: [
    { rel: 'canonical', href: url },
    // DNS prefetch for performance
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    // Preconnect for critical resources
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ],
  meta: [
    // Enhanced crawling directives
    { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
    { name: 'googlebot', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
    // Social media optimization
    { name: 'twitter:site', content: '@amerusfinancial' },
    { name: 'twitter:creator', content: '@amerusfinancial' },
    // Technical SEO
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#30BCFE' }
  ]
})

// Structured Data - Service Schema with consistent organization
const serviceProvider = useServiceProvider()

// Create review data
const reviewData = useReviewSchema(${JSON.stringify(pageData.reviews, null, 2)})

// Create how-to steps
const howToSteps = useHowToSchema(${JSON.stringify(pageData.howToSteps, null, 2)}, '${pageData.howToTitle}', '${pageData.howToDescription}', '${pageData.howToTime}', '${pageData.price}')

useSchemaOrg([
  {
    '@type': 'Service',
    name: '${pageData.serviceName}',
    provider: serviceProvider,
    description: '${pageData.serviceDescription}',
    serviceType: 'Insurance',
    category: '${pageData.category}',
    areaServed: 'United States',
    offers: {
      '@type': 'Offer',
      price: '${pageData.price}',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      }${pageData.priceDescription ? `,
      description: '${pageData.priceDescription}'` : ''}
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: '${pageData.serviceName}',
    description: '${pageData.serviceDescription}',
    category: 'Insurance',
    brand: {
      '@type': 'Brand',
      name: 'Amerus Financial'
    },
    ...reviewData
  },
  
  // FAQ Schema for better SERP features
  {
    '@type': 'FAQPage',
    mainEntity: [
${pageData.faqs.map(faq => `      {
        '@type': 'Question',
        name: '${faq.question}',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '${faq.answer}'
        }
      }`).join(',\n')}
    ]
  },

  // HowTo Schema for application process
  howToSteps
])
  `
}

// Pre-defined data for common service types
export const serviceTemplates = {
  termLife: {
    category: 'Term Life Insurance',
    howToTitle: 'How to Apply for Term Life Insurance',
    howToDescription: 'Step-by-step guide to applying for term life insurance coverage.',
    howToTime: 'PT15M',
    howToSteps: [
      {
        name: 'Determine Coverage Needs',
        text: 'Calculate how much term life insurance you need based on income, debts, and family expenses.',
        image: '/images/term-life-step-1.jpg'
      },
      {
        name: 'Choose Term Length',
        text: 'Select the appropriate term length (10, 20, or 30 years) based on your financial obligations.',
        image: '/images/term-life-step-2.jpg'
      },
      {
        name: 'Complete Application',
        text: 'Fill out the application with health and lifestyle information, may require medical exam.',
        image: '/images/term-life-step-3.jpg'
      },
      {
        name: 'Policy Activation',
        text: 'Once approved, your term life insurance policy will be issued and coverage begins.',
        image: '/images/term-life-step-4.jpg'
      }
    ]
  }
}