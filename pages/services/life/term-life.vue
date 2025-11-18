<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Term Life Insurance"
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
            <LifeSidebar />
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
useResourceHints(['/images/term-life-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Term Life Insurance Plans — Amerus Financial',
  description: 'Affordable term life insurance providing temporary coverage and financial protection for your family with flexible coverage amounts.',
  image: '/images/term-life-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/life/term-life',
  type: 'website'
})

useSeoMeta({
  title: 'Term Life Insurance Plans',
  ogTitle: 'Term Life Insurance Plans — Amerus',
  description:
    'Affordable term life insurance providing temporary coverage and financial protection for your family with flexible coverage amounts.',
  ogDescription:
    'Term life insurance plans offering affordable temporary coverage and financial protection for your family during specific time periods.',
  ogImage: '/images/term-life-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/life/term-life',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Term Life Insurance Plans — Amerus',
  twitterDescription:
    'Term life insurance plans offering affordable temporary coverage and financial protection for your family during specific time periods.',
  twitterImage: '/images/term-life-insurance.jpg',
  keywords: 'term life insurance, affordable life insurance, temporary life coverage, family financial protection, life insurance quotes'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/life/term-life/'
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
    review: 'Excellent term life insurance that provides our family with affordable protection. The 20-year term gives us peace of mind while our children grow up.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great value for term life coverage. The premiums are very affordable and the application process was straightforward with competitive rates.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good term life insurance policy that fits our budget perfectly. The coverage amount protects our mortgage and provides financial security for our family.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our term life insurance specialists for a personalized quote based on your age, health, coverage needs, and preferred term length.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Choose Term Length',
    text: 'Select the right term period for your situation - 10, 15, 20, or 30 years based on your financial obligations and family protection needs.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the term life insurance application with your personal information, health history, and undergo any required medical examinations.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your term life insurance policy will be activated and your beneficiaries will have the affordable protection they need.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Get Term Life Insurance', 'Step-by-step guide to securing affordable term life insurance coverage for your family with Amerus Financial.', 'PT15M', '30.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Term Life Insurance Plans',
    provider: serviceProvider,
    description: 'Affordable term life insurance providing temporary coverage and financial protection for your family with flexible coverage amounts starting at $30 monthly.',
    serviceType: 'Insurance',
    category: 'Life Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '30.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Term life insurance starting at $30 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Term Life Insurance Plans',
    description: 'Affordable term life insurance providing temporary coverage and financial protection for your family with flexible coverage amounts.',
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
        name: 'What is term life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Term life insurance provides temporary life insurance coverage for a specific period (10, 15, 20, or 30 years) at affordable rates. It offers a death benefit to your beneficiaries if you pass away during the term period.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does term life insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Term life insurance plans start at $30 per month for basic coverage. The cost varies based on your age, health status, coverage amount, term length, and lifestyle factors like smoking.'
        }
      },
      {
        '@type': 'Question',
        name: 'What term length should I choose?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose a term length that covers your biggest financial obligations. Common choices are 20-30 years for mortgage protection, 15-20 years until children are independent, or 10 years for short-term debts.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I convert term life insurance to permanent coverage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many term life insurance policies include conversion options that allow you to convert to permanent life insurance (whole or universal life) without a medical exam, typically within the first 10-20 years of the policy.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Life Insurance',
  title: 'Term Life Insurance Coverage for Families',
  description: 'Maximum protection at affordable rates for a specified period, providing financial security for your loved ones when they need it most.',
  image: '/images/happy-family-term-life-insurance.jpg',
  imageAlt: 'happy family term life insurance',
  cta: { href: '/contact', label: 'Explore Term Life Options' }
}
const benefits = [
  "Affordable coverage with higher death benefits",
  "Fixed premiums for the entire term period",
  "Coverage for specific financial obligations (mortgage, college, etc.)",
  "Simple and straightforward to understand",
  "Ideal for young families on a budget",
  "Convertible options to permanent coverage"
]
const info = [
  {
    title: 'Coverage Amount',
    text: '$100,000 to $5 million+',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Life Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  '10-Year Term: For short-term financial obligations',
  '15-Year Term: Perfect for mortgage protection or education funding',
  '20-Year Term: Popular for families with young dependents',
  '30-Year Term: Maximum coverage period for long-term protection',
  'Level premiums that remain the same throughout the term',
  'Options to convert to permanent insurance without medical exam'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Explore Term Life Options'
  }
}
</script>