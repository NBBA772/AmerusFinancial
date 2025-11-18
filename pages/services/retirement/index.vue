<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs
              currentPageTitle="Retirement Planning"
              parentTitle="Services"
              parentUrl="/services"
            />

            <Hero :hero="hero" />
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Main Content -->
          <div class="w-full md:w-2/3 flex flex-col gap-8">



            <!-- Retirement Planning Services Grid -->
            <section class="grid md:grid-cols-2 gap-6">
              <ServiceCard
                title="IRA Services"
                description="Individual Retirement Account options including traditional and Roth IRAs."
                link="/services/retirement/iras"
                icon="lucide:piggy-bank"
              />
              <ServiceCard
                title="401(k) Planning"
                description="401(k) rollovers, planning strategies, and retirement account management."
                link="/services/retirement/401k"
                icon="lucide:briefcase"
              />
              <ServiceCard
                title="Annuities"
                description="Fixed and variable annuities for guaranteed retirement income streams."
                link="/services/retirement/annuity"
                icon="lucide:repeat"
              />
              <ServiceCard
                title="Pension Planning"
                description="Pension maximization strategies and retirement benefit optimization."
                link="/services/retirement/pension-planning"
                icon="lucide:building-2"
              />
              <ServiceCard
                title="Long-Term Care"
                description="Long-term care insurance to protect against extended care costs."
                link="/services/retirement/long-term-care"
                icon="lucide:heart-pulse"
              />
              <ServiceCard
                title="Retirement Income Planning"
                description="Comprehensive retirement income strategies and distribution planning."
                link="/services/retirement/retirement-income"
                icon="lucide:trending-up"
              />
            </section>

          </div>

          <!-- Sidebar -->
          <aside class="w-full md:w-1/3">
            <StillHaveQuestions />
          </aside>
        </div>
      </div>
    </main>
    <CallToAction />
  </PatternSection>
</template>

<script setup>
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/retirement-planning.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Retirement Planning Services — Amerus Financial',
  description: 'Comprehensive retirement planning with 401(k), IRAs, annuities, and pension strategies. Build a secure financial future with expert retirement guidance.',
  image: '/images/retirement-planning.jpg',
  url: 'https://www.amerusfinancial.com/services/retirement',
  type: 'website'
})

useSeoMeta({
  title: 'Retirement Planning Services',
  ogTitle: 'Retirement Planning & Financial Services — Amerus',
  description:
    'Comprehensive retirement planning with 401(k), IRAs, annuities, and pension strategies. Build a secure financial future with expert retirement guidance.',
  ogDescription:
    'Explore retirement planning services including 401(k) management, IRA options, annuities, and comprehensive retirement income strategies.',
  ogImage: '/images/retirement-planning.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/retirement',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Retirement Planning & Financial Services — Amerus',
  twitterDescription:
    'Explore retirement planning services including 401(k) management, IRA options, annuities, and comprehensive retirement income strategies.',
  twitterImage: '/images/retirement-planning.jpg',
  keywords: 'retirement planning, 401k management, IRA services, annuities, pension planning, retirement income, financial planning, retirement strategies, retirement savings, retirement advisors'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/retirement/'
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
    author: 'Robert Martinez',
    rating: 5,
    review: 'Outstanding retirement planning services with comprehensive 401(k) and IRA guidance. The team helped me maximize my retirement savings and plan for a secure future.',
    date: '2024-10-15'
  },
  {
    author: 'Elizabeth Thompson',
    rating: 5,
    review: 'Excellent retirement planning consultation. The annuity and pension optimization strategies have significantly improved my retirement income projections.',
    date: '2024-09-28'
  },
  {
    author: 'James Wilson',
    rating: 5,
    review: 'Professional retirement planning with personalized strategies. The 401(k) rollover process was seamless and the long-term care planning was invaluable.',
    date: '2024-09-20'
  }
], 'Amerus Financial Retirement Planning', 4.8)

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Assess Retirement Goals',
    text: 'Evaluate your retirement timeline, income needs, and current savings to develop a comprehensive retirement planning strategy.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Review Retirement Options',
    text: 'Compare different retirement planning options including 401(k), IRAs, annuities, and pension optimization strategies.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Develop Strategy',
    text: 'Create a personalized retirement plan with investment allocations, contribution strategies, and income distribution planning.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Implement & Monitor',
    text: 'Execute your retirement plan and regularly review performance to ensure you stay on track for your retirement goals.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Plan for Retirement', 'Step-by-step guide to comprehensive retirement planning with Amerus Financial.', 'PT30M', '500.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Retirement Planning Services',
    provider: serviceProvider,
    description: 'Comprehensive retirement planning services including 401(k) management, IRAs, annuities, and pension strategies with expert financial guidance starting at $500.',
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
      description: 'Comprehensive retirement planning consultation starting at $500'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Retirement Planning Services',
    description: 'Comprehensive retirement planning services including 401(k) management, IRAs, annuities, and pension optimization strategies.',
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
        name: 'What retirement planning services do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer comprehensive retirement planning including 401(k) management, IRA services, annuities, pension optimization, long-term care planning, and retirement income distribution strategies.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much should I save for retirement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Financial experts generally recommend saving 10-15% of your income for retirement. The exact amount depends on your age, current savings, desired retirement lifestyle, and other income sources like Social Security or pensions.'
        }
      },
      {
        '@type': 'Question',
        name: 'When should I start retirement planning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best time to start retirement planning is as early as possible. Starting in your 20s or 30s allows compound interest to work in your favor, but it\'s never too late to begin planning for a secure retirement.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a 401(k) and an IRA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 401(k) is an employer-sponsored retirement plan with higher contribution limits and potential employer matching, while an IRA is an individual retirement account you open yourself with more investment flexibility but lower contribution limits.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])


const hero = {
  eyebrow: 'Financial Planning',
  title: 'Retirement Planning Solutions',
  description: 'Build a secure financial future with comprehensive retirement planning services. From IRAs to annuities, create the retirement income strategy that works for you.',
  image: '/images/retirement-calculator.jpg',
  imageAlt: 'retirement planning services',
  cta: { href: '/contact', label: 'Start Retirement Planning' }
}
</script>