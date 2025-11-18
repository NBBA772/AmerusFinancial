<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Long-Term Care Insurance"
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
            <RetirementSidebar />
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
useResourceHints(['/images/long-term-care-planning.jpg'])
usePerformanceMonitoring()

// Enhanced Meta Tags
useEnhancedMetaTags({
  title: 'Long-Term Care Planning & Insurance — Amerus Financial',
  description: 'Protect your retirement with comprehensive long-term care insurance and planning. Coverage for home care, assisted living, and nursing facilities.',
  canonical: 'https://www.amerusfinancial.com/services/retirement/long-term-care/',
  image: '/images/long-term-care-planning.jpg',
  keywords: 'long-term care insurance, long-term care planning, nursing home insurance, home care coverage, assisted living insurance, elder care planning, retirement protection, healthcare costs'
})

useSeoMeta({
  title: 'Long-Term Care Planning & Insurance',
  ogTitle: 'Long-Term Care Insurance & Planning — Amerus',
  description:
    'Protect your retirement with comprehensive long-term care insurance and planning. Coverage for home care, assisted living, and nursing facilities.',
  ogDescription:
    'Discover long-term care insurance options covering home care, assisted living, and nursing facilities with comprehensive retirement protection.',
  ogImage: '/images/long-term-care-planning.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/retirement/long-term-care',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Long-Term Care Insurance & Planning — Amerus',
  twitterDescription:
    'Discover long-term care insurance options covering home care, assisted living, and nursing facilities with comprehensive retirement protection.',
  twitterImage: '/images/long-term-care-planning.jpg',
  keywords: 'long-term care insurance, long-term care planning, nursing home insurance, home care coverage, assisted living insurance, elder care planning, retirement protection, healthcare costs'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/retirement/long-term-care'
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
    author: 'Barbara Thompson',
    rating: 5,
    review: 'Excellent long-term care planning service. The comprehensive coverage options provide peace of mind for potential future care needs.',
    date: '2024-10-15'
  },
  {
    author: 'Charles Williams',
    rating: 5,
    review: 'Outstanding long-term care insurance guidance. The policy covers home care, assisted living, and nursing care with great benefits.',
    date: '2024-09-28'
  },
  {
    author: 'Margaret Davis',
    rating: 5,
    review: 'Professional long-term care planning with flexible options. The coverage protects my retirement savings from unexpected healthcare costs.',
    date: '2024-09-22'
  },
  {
    author: 'William Johnson',
    rating: 4,
    review: 'Solid long-term care insurance options with competitive premiums. Good coverage for various care settings and helpful planning guidance.',
    date: '2024-09-10'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Assess Care Needs',
    text: 'Evaluate potential long-term care needs, family history, and current health status to determine appropriate coverage levels.',
    image: '/images/ltc-assessment.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/long-term-care#assessment'
  },
  {
    name: 'Compare Coverage Options',
    text: 'Review different long-term care insurance policies including benefit periods, elimination periods, and care settings covered.',
    image: '/images/ltc-options.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/long-term-care#options'
  },
  {
    name: 'Apply for Coverage',
    text: 'Complete the application process including health underwriting and determine optimal premium structure for your budget.',
    image: '/images/ltc-application.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/long-term-care#application'
  },
  {
    name: 'Activate Benefits',
    text: 'When care is needed, file claims and coordinate with care providers to access your long-term care insurance benefits.',
    image: '/images/ltc-benefits.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/long-term-care#benefits'
  }
], 'How to Plan for Long-Term Care', 'Step-by-step guide to long-term care planning and insurance with Amerus Financial.', 'PT30M', '600.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Long-Term Care Planning Services',
    provider: serviceProvider,
    description: 'Comprehensive long-term care insurance and planning for retirement protection covering home care, assisted living, and nursing facilities starting at $600 consultation.',
    serviceType: 'Insurance Planning',
    category: 'Long-Term Care Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '600.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'consultation'
      },
      description: 'Comprehensive long-term care planning consultation starting at $600'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Long-Term Care Planning Services',
    description: 'Comprehensive long-term care insurance and planning for retirement protection covering home care, assisted living, and nursing facilities.',
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
        name: 'What does long-term care insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Long-term care insurance covers services like home health care, adult day care, assisted living facilities, and nursing home care. It helps pay for assistance with activities of daily living when you cannot perform them independently.'
        }
      },
      {
        '@type': 'Question',
        name: 'When should I buy long-term care insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best time to buy long-term care insurance is in your 50s or early 60s when you are still healthy and premiums are lower. Waiting too long may result in higher costs or health issues that make you uninsurable.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does long-term care insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Long-term care insurance costs vary based on age, health, coverage amount, and benefits period. Premiums typically range from $2,000 to $6,000 annually, but purchasing coverage early can significantly reduce costs.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the elimination period in long-term care insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The elimination period is like a deductible - the number of days you pay for care before insurance benefits begin. Common periods are 30, 60, 90, or 180 days. Longer elimination periods result in lower premiums.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Retirement Planning',
  title: 'Long-Term Care Insurance',
  description: 'Specialized coverage that helps pay for extended care services in nursing homes, assisted living facilities, or your own home when you\'re unable to perform daily activities independently.',
  image: '/images/couple-talking-long-term-care-insurance.jpg',
  imageAlt: 'couple discussing long-term care insurance',
  cta: { href: '/contact', label: 'Explore Long-Term Care Options' }
}
const benefits = [
  'Protection of retirement assets from high care costs',
  'Choice of care settings including home, assisted living, or nursing facilities',
  'Reduced financial burden on family members',
  'Tax-qualified policies may offer tax advantages',
  'Inflation protection options to maintain coverage value',
  'Peace of mind knowing care needs won\'t deplete savings'
]
const info = [
  {
    title: 'Coverage Amount',
    text: '$3,000 - $10,000 monthly benefit',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Retirement Planning',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Coverage for skilled, intermediate, and custodial care services',
  'Daily or monthly benefit amounts customized to your needs and budget',
  'Benefit periods ranging from 2 years to lifetime coverage',
  'Elimination periods (waiting periods) to control premium costs',
  'Home care benefits for services received in your residence',
  'Shared care options for couples',
  'Inflation protection to ensure benefits keep pace with rising healthcare costs'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our retirement specialists to create a personalized plan.',
  primary: {
    href: '/contact',
    label: 'Explore Long-Term Care Options'
  }
}
</script>