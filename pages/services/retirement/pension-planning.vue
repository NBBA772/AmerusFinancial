<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Pension Planning"
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
useResourceHints(['/images/pension-planning.jpg'])
usePerformanceMonitoring()

// Enhanced Meta Tags
useEnhancedMetaTags({
  title: 'Pension Planning & Retirement Benefits — Amerus Financial',
  description: 'Maximize your pension benefits with expert planning for defined benefit plans, pension rollovers, and retirement income optimization strategies.',
  canonical: 'https://www.amerusfinancial.com/services/retirement/pension-planning/',
  image: '/images/pension-planning.jpg',
  keywords: 'pension planning, defined benefit plans, pension rollover, retirement benefits, pension optimization, pension income, retirement planning, federal pension, state pension, corporate pension'
})

useSeoMeta({
  title: 'Pension Planning & Retirement Benefits',
  ogTitle: 'Pension Planning & Benefit Optimization — Amerus',
  description:
    'Maximize your pension benefits with expert planning for defined benefit plans, pension rollovers, and retirement income optimization strategies.',
  ogDescription:
    'Discover pension planning strategies for defined benefit plans, pension rollovers, and retirement income optimization with professional guidance.',
  ogImage: '/images/pension-planning.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/retirement/pension-planning',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Pension Planning & Benefit Optimization — Amerus',
  twitterDescription:
    'Discover pension planning strategies for defined benefit plans, pension rollovers, and retirement income optimization with professional guidance.',
  twitterImage: '/images/pension-planning.jpg',
  keywords: 'pension planning, defined benefit plans, pension rollover, retirement benefits, pension optimization, pension income, retirement planning, federal pension, state pension, corporate pension'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/retirement/pension-planning'
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
    author: 'Thomas Wilson',
    rating: 5,
    review: 'Excellent pension planning guidance. The expert analysis helped me optimize my federal pension benefits and maximize my retirement income.',
    date: '2024-10-15'
  },
  {
    author: 'Nancy Martinez',
    rating: 5,
    review: 'Outstanding pension consultation service. The rollover guidance saved me significant taxes and improved my overall retirement strategy.',
    date: '2024-09-28'
  },
  {
    author: 'Richard Brown',
    rating: 5,
    review: 'Professional pension planning with comprehensive analysis. The team helped me understand all my defined benefit options and timing strategies.',
    date: '2024-09-22'
  },
  {
    author: 'Sandra Davis',
    rating: 4,
    review: 'Solid pension planning service with detailed projections. Good expertise in corporate pensions and helpful retirement income planning.',
    date: '2024-09-10'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Analyze Current Benefits',
    text: 'Review your current pension plan details, vesting schedule, and projected benefits to understand your retirement income foundation.',
    image: '/images/pension-analysis.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/pension-planning#analysis'
  },
  {
    name: 'Evaluate Options',
    text: 'Compare pension payout options including lump sum vs. annuity payments, survivor benefits, and tax implications for each choice.',
    image: '/images/pension-options.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/pension-planning#options'
  },
  {
    name: 'Optimize Timing',
    text: 'Determine optimal retirement timing to maximize pension benefits while considering Social Security coordination and other income sources.',
    image: '/images/pension-timing.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/pension-planning#timing'
  },
  {
    name: 'Implement Strategy',
    text: 'Execute your pension strategy with proper documentation, beneficiary designations, and coordination with overall retirement plan.',
    image: '/images/pension-implementation.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/pension-planning#implementation'
  }
], 'How to Optimize Your Pension Plan', 'Step-by-step guide to pension planning and benefit optimization with Amerus Financial.', 'PT35M', '650.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Pension Planning Services',
    provider: serviceProvider,
    description: 'Comprehensive pension planning and benefit optimization for defined benefit plans, pension rollovers, and retirement income strategies starting at $650 consultation.',
    serviceType: 'Financial Planning',
    category: 'Pension Planning',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '650.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'consultation'
      },
      description: 'Comprehensive pension planning consultation starting at $650'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Pension Planning Services',
    description: 'Comprehensive pension planning and benefit optimization for defined benefit plans, pension rollovers, and retirement income strategies.',
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
        name: 'Should I take a lump sum or annuity from my pension?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The choice between lump sum and annuity depends on your health, financial situation, investment experience, and survivor benefit needs. Annuities provide guaranteed lifetime income, while lump sums offer investment control and legacy planning opportunities.'
        }
      },
      {
        '@type': 'Question',
        name: 'When should I start taking my pension benefits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Optimal pension timing depends on your plan\'s early retirement reductions, Social Security coordination, other income needs, and overall retirement timeline. Some plans penalize early retirement while others may offer incentives.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I roll my pension into an IRA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your pension offers a lump sum option, you may be able to roll it into an IRA or 401(k). This can provide investment control and tax deferral, but you lose the guaranteed income that pension annuities provide.'
        }
      },
      {
        '@type': 'Question',
        name: 'How are pension benefits taxed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pension benefits are typically taxed as ordinary income when received. The portion attributable to after-tax contributions may be tax-free. Lump sum distributions have special tax considerations and may qualify for income averaging.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Retirement Planning',
  title: 'Pension Planning & Retirement Benefit Optimization',
  description: 'Expert guidance to optimize your pension benefits and integrate them into your comprehensive retirement strategy for maximum financial security.',
  image: '/images/couple-pension-planning.jpg',
  imageAlt: 'senior woman pension insurance',
  cta: { href: '/contact', label: 'Start Your Pension Planning' }
}
const benefits = [
  'Professional analysis of pension benefit options',
  'Strategies to maximize your pension\'s value',
  'Integration with other retirement income sources',
  'Tax-efficient withdrawal planning',
  'Protection against inflation and market volatility',
  'Spousal benefit optimization'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Customized to your retirement needs',
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
  'Comprehensive evaluation of pension payout options (lump sum vs. annuity)',
  'Analysis of survivor benefit elections and their financial implications',
  'Strategies for early retirement pension maximization',
  'Pension buyout evaluation services',
  'Integration with Social Security claiming strategies',
  'Coordination with 401(k), IRA, and other retirement accounts',
  'Planning for healthcare costs alongside pension income'
]
const cta = {
  title: 'Ready to plan your future?',
  description: 'Speak with our retirement specialists to create a personalized plan.',
  primary: {
    href: '/contact',
    label: 'Start Your Pension Planning'
  }
}
</script>