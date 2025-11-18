<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Individual Retirement Accounts (IRAs)"
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
useResourceHints(['/images/ira-retirement-planning.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'IRA Retirement Planning — Amerus Financial',
  description: 'Comprehensive IRA retirement planning services including Traditional and Roth IRAs. Maximize your retirement savings with expert guidance and tax-advantaged strategies.',
  image: '/images/ira-retirement-planning.jpg',
  url: 'https://www.amerusfinancial.com/services/retirement/iras',
  type: 'website'
})

useSeoMeta({
  title: 'IRA Retirement Planning',
  ogTitle: 'IRA Investment & Retirement Strategies — Amerus',
  description:
    'Expert IRA planning with Traditional & Roth options. Maximize retirement savings through tax-advantaged strategies & personalized guidance.',
  ogDescription:
    'Build your retirement wealth with Traditional and Roth IRA strategies, contribution limits guidance, and tax-efficient retirement planning solutions.',
  ogImage: '/images/ira-retirement-planning.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/retirement/iras',
  twitterCard: 'summary_large_image',
  twitterTitle: 'IRA Investment & Retirement Strategies — Amerus',
  twitterDescription:
    'Build your retirement wealth with Traditional and Roth IRA strategies, contribution limits guidance, and tax-efficient retirement planning solutions.',
  twitterImage: '/images/ira-retirement-planning.jpg',
  keywords: 'IRA retirement planning, Traditional IRA, Roth IRA, retirement savings, IRA contributions, retirement investment, tax-advantaged retirement, IRA rollover, retirement strategy'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/retirement/iras/'
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
    author: 'Sarah Johnson',
    rating: 5,
    review: 'Excellent IRA retirement planning guidance that helped me maximize my contributions and understand the differences between Traditional and Roth IRAs. Professional advice that saved me money on taxes.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Outstanding IRA investment strategies and rollover assistance. The team helped me consolidate multiple retirement accounts and optimize my investment allocations for long-term growth.',
    date: '2024-09-28'
  },
  {
    author: 'Jessica Williams',
    rating: 4,
    review: 'Solid IRA planning services with clear explanations of contribution limits and tax implications. Great support in setting up my Roth IRA conversion strategy.',
    date: '2024-09-20'
  },
  {
    author: 'David Rodriguez',
    rating: 5,
    review: 'Top-quality retirement planning with comprehensive IRA strategies. Professional guidance on backdoor Roth conversions and tax-efficient withdrawal planning.',
    date: '2024-09-10'
  }
], 'Amerus Financial IRA Retirement Planning', 4.7)

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Assess IRA Eligibility',
    text: 'Determine your eligibility for Traditional and Roth IRAs based on income limits, employment status, and tax situation.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Choose IRA Type',
    text: 'Compare Traditional and Roth IRA options to select the best IRA type for your retirement goals and tax strategy.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Open IRA Account',
    text: 'Complete the IRA application process and set up your Individual Retirement Account with appropriate investment options.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Fund and Manage',
    text: 'Make contributions to your IRA within annual limits and manage your retirement investments for long-term growth.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Set Up Your IRA', 'Step-by-step guide to opening and managing Individual Retirement Accounts with Amerus Financial.', 'PT20M', '350.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'IRA Retirement Planning Services',
    provider: serviceProvider,
    description: 'Comprehensive Individual Retirement Account planning including Traditional and Roth IRAs with expert guidance for tax-advantaged retirement savings starting at $350.',
    serviceType: 'Financial Planning',
    category: 'IRA Planning',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '350.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'consultation'
      },
      description: 'IRA planning consultation starting at $350'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'IRA Retirement Planning Services',
    description: 'Comprehensive Individual Retirement Account planning including Traditional and Roth IRAs with expert guidance for tax-advantaged retirement savings.',
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
        name: 'What is the difference between Traditional and Roth IRAs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditional IRAs offer tax-deductible contributions and tax-deferred growth, with withdrawals taxed in retirement. Roth IRAs use after-tax contributions but provide tax-free withdrawals in retirement, including earnings.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the 2024 IRA contribution limits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For 2024, you can contribute up to $7,000 to an IRA annually. If you are 50 or older, you can make an additional catch-up contribution of $1,000, bringing the total to $8,000.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I have both a Traditional and Roth IRA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can have both Traditional and Roth IRAs, but your total contributions to all IRAs cannot exceed the annual contribution limit. You can split contributions between the two types as long as you stay within the limit.'
        }
      },
      {
        '@type': 'Question',
        name: 'When can I withdraw money from my IRA without penalties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally, you can withdraw from IRAs without penalties after age 59½. Roth IRA contributions can be withdrawn anytime without penalties, but earnings may be subject to penalties and taxes if withdrawn before age 59½ and the account is less than 5 years old.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Retirement Planning',
  title: 'Individual Retirement Accounts (IRAs)',
  description: 'Secure your financial future with tax-advantaged Individual Retirement Accounts that help you build wealth for retirement on your terms.',
  image: '/images/individual-retirement-accounts-iras.jpg',
  imageAlt: 'senior woman life insurance',
  cta: { href: '/contact', label: 'Start Your Retirement Plan' }
}
const benefits = [
  'Tax advantages help your money grow faster',
  'Multiple IRA types to match your financial situation',
  'Flexible contribution options',
  'Wide range of investment choices',
  'Ability to save independently of employer plans'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Contribute up to $6,500 annually (2025)',
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
  'Traditional IRAs offer tax-deductible contributions and tax-deferred growth',
  'Roth IRAs provide tax-free withdrawals in retirement',
  'SEP IRAs for self-employed individuals and small business owners',
  'SIMPLE IRAs for small businesses as an alternative to 401(k) plans',
  'Personalized investment strategies based on your retirement timeline',
  'Guidance on contribution limits and required minimum distributions'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Start Your Retirement Plan'
  }
}
</script>