<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="401(k) Retirement Plans"
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
useResourceHints(['/images/401k-retirement-planning.jpg'])
usePerformanceMonitoring()

// Enhanced Meta Tags
useEnhancedMetaTags({
  title: '401(k) Retirement Plans & Planning — Amerus Financial',
  description: 'Maximize your retirement savings with 401(k) plans featuring employer matching, tax advantages, and investment options. Expert retirement planning guidance from Amerus.',
  canonical: 'https://www.amerusfinancial.com/services/retirement/401k/',
  image: '/images/401k-retirement-planning.jpg',
  keywords: '401k plans, retirement planning, employer matching, tax-deferred savings, retirement contributions, 401k rollover, retirement benefits, investment options, retirement guidance, financial planning'
})

useSeoMeta({
  title: '401(k) Retirement Plans & Planning',
  ogTitle: '401(k) Retirement Plans & Investment Options — Amerus',
  description:
    'Expert 401(k) retirement planning with employer matching and tax advantages. Get personalized guidance for your retirement goals.',
  ogDescription:
    'Discover 401(k) retirement plans with employer matching, tax-deferred growth, and professional investment guidance.',
  ogImage: '/images/401k-retirement-planning.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/retirement/401k',
  twitterCard: 'summary_large_image',
  twitterTitle: '401(k) Retirement Plans & Investment Options — Amerus',
  twitterDescription:
    'Discover 401(k) retirement plans with employer matching, tax-deferred growth, and professional investment guidance.',
  twitterImage: '/images/401k-retirement-planning.jpg',
  keywords: '401k plans, retirement planning, employer matching, tax-deferred savings, retirement contributions, 401k rollover, retirement benefits, investment options, retirement guidance, financial planning'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/retirement/401k'
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
    author: 'Jennifer Martinez',
    rating: 5,
    review: 'Outstanding 401(k) plan setup and guidance. The employer matching options and investment choices exceeded my expectations for retirement planning.',
    date: '2024-10-15'
  },
  {
    author: 'David Thompson',
    rating: 5,
    review: 'Excellent retirement planning service. The 401(k) rollover process was seamless and the tax advantages are significant.',
    date: '2024-09-28'
  },
  {
    author: 'Rachel Kim',
    rating: 5,
    review: 'Professional 401(k) administration with great investment options. The automatic payroll deductions make saving effortless.',
    date: '2024-09-22'
  },
  {
    author: 'Mark Anderson',
    rating: 4,
    review: 'Solid 401(k) plan with competitive employer matching. Good variety of investment funds and helpful retirement planning tools.',
    date: '2024-09-10'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Assess Retirement Goals',
    text: 'Evaluate your retirement timeline, income needs, and risk tolerance to determine optimal 401(k) contribution strategies.',
    image: '/images/401k-assessment.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/401k#assessment'
  },
  {
    name: 'Review 401(k) Options',
    text: 'Compare different 401(k) plan features including employer matching, investment options, and vesting schedules.',
    image: '/images/401k-options.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/401k#options'
  },
  {
    name: 'Optimize Contributions',
    text: 'Set up automatic payroll deductions to maximize employer matching and take advantage of tax-deferred growth.',
    image: '/images/401k-contributions.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/401k#contributions'
  },
  {
    name: 'Monitor and Adjust',
    text: 'Regularly review your 401(k) performance and adjust investment allocations based on market conditions and life changes.',
    image: '/images/401k-monitoring.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/401k#monitoring'
  }
], 'How to Optimize Your 401(k) Plan', 'Step-by-step guide to maximizing your 401(k) retirement planning with Amerus Financial.', 'PT20M', '500.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: '401(k) Retirement Planning Services',
    provider: serviceProvider,
    description: 'Comprehensive 401(k) retirement planning with employer matching, tax advantages, and professional investment guidance starting at $500 consultation.',
    serviceType: 'Financial Planning',
    category: 'Retirement Planning',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '500.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'consultation'
      },
      description: 'Comprehensive 401(k) retirement planning consultation starting at $500'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: '401(k) Retirement Planning Services',
    description: 'Comprehensive 401(k) retirement planning with employer matching, tax-deferred growth, and professional investment guidance.',
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
        name: 'What is the 2024 401(k) contribution limit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For 2024, the 401(k) contribution limit is $23,000 annually. If you are 50 or older, you can make an additional catch-up contribution of $7,500, bringing the total to $30,500.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does employer matching work in 401(k) plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Employer matching is when your company contributes to your 401(k) based on your contributions. Common formulas include 50% of the first 6% you contribute or 100% of the first 3% you contribute. This is essentially free money for your retirement.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I roll over my 401(k) when I change jobs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can roll over your 401(k) to your new employer\'s plan, roll it into an IRA, or leave it with your former employer (if the balance is over $5,000). Rolling over helps maintain tax-deferred status and avoid penalties.'
        }
      },
      {
        '@type': 'Question',
        name: 'What investment options are available in 401(k) plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most 401(k) plans offer a variety of investment options including mutual funds, index funds, target-date funds, and sometimes company stock. The specific options depend on your employer\'s plan and provider.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Retirement Planning',
  title: '401(k) Retirement Plans',
  description: 'Building a secure financial future for you and your employees through tax-advantaged retirement savings plans.',
  image: '/images/senior-woman-life-insurance.jpg',
  imageAlt: 'senior woman life insurance',
  cta: { href: '/contact', label: 'Schedule a Consultation' }
}
const benefits = [
  'Tax-advantaged retirement savings',
  'Potential employer matching contributions',
  'Automatic payroll deductions for consistent saving',
  'Wide range of investment options',
  'Portability when changing jobs',
  'Loan provisions for financial emergencies'
]
const info = [
  {
    title: 'Coverage Amount',
    text: '$22,500 annual contribution limit (2025)',
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
    'Traditional 401(k) with pre-tax contributions',
    'Roth 401(k) for tax-free withdrawals in retirement',
    'Safe Harbor 401(k) for small businesses',
    'Individual 401(k) for self-employed individuals',
    'Comprehensive plan design and implementation',
    'Ongoing support and education for participants'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Schedule a Consultation'
  }
}
</script>