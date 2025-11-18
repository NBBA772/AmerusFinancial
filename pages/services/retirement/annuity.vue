<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Annuities"
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
useResourceHints(['/images/annuity-retirement-planning.jpg'])
usePerformanceMonitoring()

// Enhanced Meta Tags
useEnhancedMetaTags({
  title: 'Annuity Planning & Retirement Income — Amerus Financial',
  description: 'Secure guaranteed retirement income with annuities. Fixed, variable, and immediate annuity options with professional guidance for lifetime income planning.',
  canonical: 'https://www.amerusfinancial.com/services/retirement/annuity/',
  image: '/images/annuity-retirement-planning.jpg',
  keywords: 'annuity planning, retirement income, guaranteed income, fixed annuities, variable annuities, immediate annuities, deferred annuities, lifetime income, retirement security, financial planning'
})

useSeoMeta({
  title: 'Annuity Planning & Retirement Income',
  ogTitle: 'Annuity Planning & Guaranteed Income — Amerus',
  description:
    'Secure guaranteed retirement income with annuities. Fixed, variable, and immediate annuity options with professional guidance for lifetime income planning.',
  ogDescription:
    'Discover annuity options for guaranteed retirement income including fixed, variable, and immediate annuities with lifetime income protection.',
  ogImage: '/images/annuity-retirement-planning.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/retirement/annuity',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Annuity Planning & Guaranteed Income — Amerus',
  twitterDescription:
    'Discover annuity options for guaranteed retirement income including fixed, variable, and immediate annuities with lifetime income protection.',
  twitterImage: '/images/annuity-retirement-planning.jpg',
  keywords: 'annuity planning, retirement income, guaranteed income, fixed annuities, variable annuities, immediate annuities, deferred annuities, lifetime income, retirement security, financial planning'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/retirement/annuity'
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
    author: 'Robert Williams',
    rating: 5,
    review: 'Excellent annuity planning service. The guaranteed income stream provides peace of mind for retirement, and the guidance helped me choose the right option.',
    date: '2024-10-15'
  },
  {
    author: 'Patricia Davis',
    rating: 5,
    review: 'Outstanding annuity consultation. The fixed annuity provides steady income and the team explained all options clearly.',
    date: '2024-09-28'
  },
  {
    author: 'James Brown',
    rating: 5,
    review: 'Professional annuity planning with great variable options. The lifetime income feature ensures financial security throughout retirement.',
    date: '2024-09-22'
  },
  {
    author: 'Linda Johnson',
    rating: 4,
    review: 'Solid annuity planning service with competitive rates. Good variety of annuity products and helpful retirement income projections.',
    date: '2024-09-10'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Assess Income Needs',
    text: 'Evaluate your retirement income requirements, expenses, and timeline to determine the optimal annuity strategy for guaranteed income.',
    image: '/images/annuity-assessment.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/annuity#assessment'
  },
  {
    name: 'Compare Annuity Types',
    text: 'Review fixed, variable, and immediate annuity options to find the best fit for your risk tolerance and income goals.',
    image: '/images/annuity-types.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/annuity#types'
  },
  {
    name: 'Plan Investment Amount',
    text: 'Determine optimal premium amounts and funding strategy for your annuity to maximize lifetime income benefits.',
    image: '/images/annuity-investment.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/annuity#investment'
  },
  {
    name: 'Monitor Performance',
    text: 'Track annuity performance and adjust withdrawal strategies to optimize income throughout your retirement years.',
    image: '/images/annuity-monitoring.jpg',
    url: 'https://www.amerusfinancial.com/services/retirement/annuity#monitoring'
  }
], 'How to Plan Your Annuity Strategy', 'Step-by-step guide to annuity planning for guaranteed retirement income with Amerus Financial.', 'PT25M', '750.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Annuity Planning Services',
    provider: serviceProvider,
    description: 'Comprehensive annuity planning for guaranteed retirement income with fixed, variable, and immediate annuity options starting at $750 consultation.',
    serviceType: 'Financial Planning',
    category: 'Retirement Planning',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '750.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'consultation'
      },
      description: 'Comprehensive annuity planning consultation starting at $750'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Annuity Planning Services',
    description: 'Comprehensive annuity planning for guaranteed retirement income with fixed, variable, and immediate annuity options.',
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
        name: 'What is an annuity and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An annuity is a financial product that provides guaranteed income payments for a specified period or for life. You make premium payments to an insurance company, and in return, receive regular income payments starting immediately or at a future date.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between fixed and variable annuities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fixed annuities provide guaranteed interest rates and predictable income payments, while variable annuities allow you to invest in sub-accounts with potential for higher returns but also market risk. Fixed annuities offer more security, while variable annuities offer growth potential.'
        }
      },
      {
        '@type': 'Question',
        name: 'When should I start receiving annuity payments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can choose immediate annuities that start payments right away, or deferred annuities that begin payments at a future date. The timing depends on your retirement plans, other income sources, and when you need guaranteed income to begin.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are annuity payments guaranteed for life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many annuities offer lifetime income options that guarantee payments for as long as you live, regardless of market conditions. You can also choose period certain options that pay for a specific number of years or joint life options for couples.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Retirement Planning',
  title: 'Annuities & Guaranteed Retirement Income Solutions',
  description: 'Secure, guaranteed income solutions that provide stability and predictability for your retirement years.',
  image: '/images/man-sigining-up-for-annuity-plan.jpg',
  imageAlt: 'senior woman life insurance',
  cta: { href: '/contact', label: 'Explore Annuity Options' }
}
const benefits = [
  'Guaranteed income streams for life',
  'Protection against market volatility',
  'Tax-deferred growth potential',
  'Optional death benefits for beneficiaries',
  'Inflation protection options',
  'No contribution limits unlike 401(k)s and IRAs'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Customized to your income needs',
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
    'Fixed annuities with guaranteed interest rates',
    'Variable annuities with market-based investment options',
    'Fixed indexed annuities that combine safety with growth potential',
    'Immediate annuities for income starting right away',
    'Deferred annuities for income starting in the future',
    'Optional riders for enhanced benefits',
    'Flexible premium payment options'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Explore Annuity Options'
  }
}
</script>