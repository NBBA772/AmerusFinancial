<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Retirement Income Strategies"
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
useResourceHints(['/images/retirement-income.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Retirement Income Planning & Solutions — Amerus Financial',
  description: 'Create sustainable retirement income with annuities, pensions, and investment strategies. Plan your financial future with expert guidance from Amerus.',
  image: '/images/retirement-income.jpg',
  url: 'https://www.amerusfinancial.com/services/retirement/retirement-income',
  type: 'website'
})

useSeoMeta({
  title: 'Retirement Income Planning & Solutions',
  ogTitle: 'Retirement Income Planning — Amerus',
  description:
    'Create sustainable retirement income with annuities, pensions, and investment strategies. Plan your financial future with expert guidance from Amerus.',
  ogDescription:
    'Comprehensive retirement income planning including annuities, pension optimization, and withdrawal strategies for financial security.',
  ogImage: '/images/retirement-income.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/retirement/retirement-income',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Retirement Income Planning — Amerus',
  twitterDescription:
    'Comprehensive retirement income planning including annuities, pension optimization, and withdrawal strategies for financial security.',
  twitterImage: '/images/retirement-income.jpg',
  keywords: 'retirement income, retirement planning, annuities, pension planning, retirement withdrawal strategies, income for life, retirement income streams, guaranteed income, retirement financial planning, senior financial planning'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/retirement/retirement-income/'
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
    author: 'Robert Thompson',
    rating: 5,
    review: 'Outstanding retirement income planning service. They helped me create a guaranteed income stream that covers all my expenses in retirement.',
    date: '2024-10-12'
  },
  {
    author: 'Margaret Davis',
    rating: 5,
    review: 'Excellent guidance on retirement income strategies. The annuity recommendations provide peace of mind for my golden years.',
    date: '2024-10-08'
  },
  {
    author: 'James Wilson',
    rating: 4,
    review: 'Professional retirement income planning with comprehensive analysis. Very satisfied with the long-term income solutions.',
    date: '2024-09-25'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Retirement Assessment',
    text: 'Evaluate your current financial situation, retirement goals, and expected expenses to determine income needs.',
    image: '/images/retirement-assessment.jpg'
  },
  {
    name: 'Income Strategy Design',
    text: 'Develop a comprehensive retirement income strategy using annuities, pensions, and investment withdrawals.',
    image: '/images/income-strategy.jpg'
  },
  {
    name: 'Product Selection',
    text: 'Choose appropriate income products including immediate annuities, deferred annuities, and pension options.',
    image: '/images/product-selection.jpg'
  },
  {
    name: 'Implementation',
    text: 'Implement your retirement income plan with ongoing monitoring and adjustments as needed.',
    image: '/images/plan-implementation.jpg'
  }
], 'How to Plan Retirement Income', 'Step-by-step guide to creating sustainable retirement income with Amerus Financial.', 'PT45M', '1000.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Retirement Income Planning',
    provider: serviceProvider,
    description: 'Professional retirement income planning services including annuities, pension optimization, and withdrawal strategies for guaranteed lifetime income.',
    serviceType: 'Financial Services',
    category: 'Retirement Planning',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '1000.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'consultation'
      },
      description: 'Comprehensive retirement income planning consultation starting at $1,000'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Retirement Income Planning',
    description: 'Professional retirement income planning services with guaranteed income strategies and comprehensive financial guidance.',
    category: 'Financial Services',
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
        name: 'What is retirement income planning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Retirement income planning involves creating strategies to generate consistent income during retirement through annuities, pensions, investment withdrawals, and other income sources to maintain your lifestyle.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much retirement income do I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most experts recommend planning for 70-90% of your pre-retirement income. This varies based on your lifestyle, health care needs, and retirement goals. Our advisors help calculate your specific needs.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the best retirement income strategies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Effective strategies include immediate annuities for guaranteed income, deferred annuities for growth, systematic withdrawal plans, pension optimization, and diversified income portfolios to balance security and growth.'
        }
      },
      {
        '@type': 'Question',
        name: 'When should I start retirement income planning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ideally, start planning 5-10 years before retirement to optimize your strategy. However, it\'s never too late to create a plan that maximizes your available resources and income potential.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Retirement Planning',
  title: 'Retirement Income Strategies',
  description: 'Comprehensive planning to create reliable, sustainable income streams throughout your retirement years, ensuring financial security and preserving your lifestyle.',
  image: '/images/young-woman-planing-for-retirement.jpg',
  imageAlt: 'senior woman life insurance',
  cta: { href: '/contact', label: 'Create Your Income Strategy' }
}
const benefits = [
  'Predictable income throughout retirement',
  'Protection against outliving your savings',
  'Tax-efficient withdrawal strategies',
  'Portfolio designed to balance growth and income',
  'Protection against market volatility',
  'Adaptable plans that evolve with changing needs'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Customized to your retirement lifestyle',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'HRetirement Planning',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Personalized retirement income analysis based on your needs and assets',
  'Systematic withdrawal strategies from investment portfolios',
  'Annuity solutions for guaranteed lifetime income',
  'Strategic Social Security claiming strategies',
  'Required Minimum Distribution (RMD) planning',
  'Tax-efficient withdrawal sequencing from various accounts',
  'Legacy and estate planning integration',
  'Ongoing monitoring and plan adjustments'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our retirement specialists to create a personalized plan.',
  primary: {
    href: '/contact',
    label: 'Create Your Income Strategy'
  }
}
</script>