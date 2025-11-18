<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Commercial Property Insurance"
              parentTitle="Services"
              parentUrl="/services"
            />


            <Hero :hero="hero" />
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Main Content -->
          <div class="w-full md:w-2/3 flex flex-col gap-8">
            


            <!-- Section with background and blue header -->
            <section
              class="rounded-2xl overflow-hidden shadow-sm border border-[#e0f1ff] bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] hover:shadow-md transition-all duration-300 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm"
            >
              <!-- Blue Header -->
                <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-6 px-6 flex items-center justify-between">
                <div>
                  <h2 class="text-2xl font-bold tracking-tight">Key Benefits</h2>
                  <p class="text-sm opacity-90">Discover what makes our coverage the right choice for you</p>
                </div>
                <Icon name="lucide:heart-pulse" size="50" class="text-white" />
              </div>

              <!-- Inner Content -->
              <div class="p-8">
                <Benefits :benefits="benefits"/>
                <div class="border-t border-[#d4ebff] my-8"></div>
                <InfoCards :info="info" />
              </div>
            </section>


            <CoverageFeatures :features="features" image="/images/preventive-care-coverage-banner.jpg" />
            <CTA :cta="cta" />
          </div>

          <!-- Sidebar -->
          <div class="w-full md:w-1/3">
            <BusinessSidebar />
          </div>
        </div>
      </div>
    </main>
    <CallToAction />
  </PatternSection>
</template>

<script setup>
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/commercial-property-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Commercial Property Insurance — Amerus Financial',
  description: 'Protect your business property and assets with comprehensive commercial property insurance covering buildings, equipment, and inventory.',
  image: '/images/commercial-property-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/business/commercial-property',
  type: 'website'
})

useSeoMeta({
  title: 'Commercial Property Insurance',
  ogTitle: 'Commercial Property Insurance — Amerus',
  description:
    'Protect your business property and assets with comprehensive commercial property insurance covering buildings, equipment, and inventory.',
  ogDescription:
    'Commercial property insurance protecting business buildings, equipment, inventory, and other physical assets from damage and loss.',
  ogImage: '/images/commercial-property-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/business/commercial-property',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Commercial Property Insurance — Amerus',
  twitterDescription:
    'Commercial property insurance protecting business buildings, equipment, inventory, and other physical assets from damage and loss.',
  twitterImage: '/images/commercial-property-insurance.jpg',
  keywords: 'commercial property insurance, business property coverage, building insurance, equipment insurance, inventory protection, commercial real estate insurance'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/business/commercial-property/'
    },
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
const reviewData = useReviewSchema([
  {
    author: 'Business Owner Rachel',
    rating: 5,
    review: 'Excellent commercial property insurance that covered everything when our warehouse was damaged by fire. Quick claims processing and fair settlement.',
    date: '2024-10-15'
  },
  {
    author: 'Restaurant Owner Mike',
    rating: 5,
    review: 'Great commercial property coverage for our restaurant. Protected our equipment and inventory when we had water damage.',
    date: '2024-09-28'
  },
  {
    author: 'Retail Store Owner Lisa',
    rating: 4,
    review: 'Reliable commercial property insurance with good coverage for our building and merchandise. Professional service team.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Property Assessment',
    text: 'Evaluate your business property including buildings, equipment, and inventory to determine coverage needs and values.',
    image: '/images/property-assessment.jpg'
  },
  {
    name: 'Coverage Analysis',
    text: 'Review commercial property coverage options including replacement cost, actual cash value, and business interruption protection.',
    image: '/images/coverage-analysis.jpg'
  },
  {
    name: 'Policy Customization',
    text: 'Customize your commercial property policy with appropriate limits, deductibles, and additional coverage endorsements.',
    image: '/images/policy-customization.jpg'
  },
  {
    name: 'Coverage Activation',
    text: 'Activate your commercial property insurance for immediate protection of your business assets and property.',
    image: '/images/coverage-activation.jpg'
  }
], 'How to Get Commercial Property Insurance', 'Step-by-step guide to getting commercial property insurance for your business.', 'PT20M', '300.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Commercial Property Insurance',
    provider: serviceProvider,
    description: 'Comprehensive commercial property insurance protecting business buildings, equipment, inventory, and contents from damage and loss.',
    serviceType: 'Insurance',
    category: 'Commercial Property Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '300.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Commercial property insurance starting at $300 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Commercial Property Insurance',
    description: 'Comprehensive commercial property insurance protecting business buildings, equipment, inventory, and contents.',
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
      {
        '@type': 'Question',
        name: 'What does commercial property insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commercial property insurance covers business buildings, equipment, inventory, furniture, and other business personal property against risks like fire, theft, vandalism, and natural disasters.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does commercial property insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commercial property insurance costs vary based on property value, location, business type, and coverage limits. Coverage typically starts around $300 per month for basic business property protection.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need commercial property insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commercial property insurance is essential for businesses that own or lease buildings, have equipment, or maintain inventory. It protects your business assets and helps ensure continuity after property damage.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between replacement cost and actual cash value?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Replacement cost coverage pays to replace damaged property with new items of similar quality. Actual cash value coverage pays replacement cost minus depreciation, resulting in lower payouts.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Business Insurance',
  title: 'Commercial Property Insurance',
  description: 'Comprehensive protection for your business buildings, equipment, inventory, and contents against fire, theft, and natural disasters.',
  image: '/images/commercial-property-insurance-strip-mall.jpg',
  imageAlt: 'commercial property insurance coverage',
  cta: { href: '/contact', label: 'Get a Business Quote' }
}
const benefits = [
  "Complete building and structure protection",
  "Equipment and machinery coverage",
  "Inventory and business personal property protection",
  "Business interruption income replacement",
  "Additional living expenses during repairs",
  "Protection against fire, theft, vandalism, and natural disasters"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Up to property value',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Commercial Property Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Property assessment and quote',
    icon: 'lucide:clock'
  }
]
const features = [
  'Building and structure protection coverage',
  'Business equipment and machinery insurance',
  'Inventory and stock protection',
  'Business interruption income replacement',
  'Additional living expenses coverage',
  'Protection against fire, theft, and natural disasters'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Get a Personalized Quote'
  }
}
</script>