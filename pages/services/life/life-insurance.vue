<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Life Insurance"
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
useResourceHints(['/images/life-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Life Insurance Coverage & Protection — Amerus Financial',
  description: 'Protecting your family\'s financial future with customized life insurance solutions that provide security and peace of mind for your loved ones.',
  image: 'https://www.amerusfinancial.com/images/life-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/life/life-insurance',
  type: 'website'
})

useSeoMeta({
  title: 'Life Insurance Coverage & Protection — Amerus Financial',
  ogTitle: 'Life Insurance Solutions for Families — Amerus',
  description:
    'Protecting your family\'s financial future with customized life insurance solutions that provide security and peace of mind for your loved ones.',
  ogDescription:
    'Secure your family\'s financial future with comprehensive life insurance coverage including term life, whole life, and universal life insurance options.',
  ogImage: 'https://www.amerusfinancial.com/images/life-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/life/life-insurance',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Life Insurance Solutions for Families — Amerus',
  twitterDescription:
    'Secure your family\'s financial future with comprehensive life insurance coverage including term life, whole life, and universal life insurance options.',
  twitterImage: 'https://www.amerusfinancial.com/images/life-insurance.jpg',
  keywords: 'life insurance, family protection, life insurance coverage, term life insurance, whole life insurance, universal life insurance, life insurance quotes, financial security, family financial planning'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/life/life-insurance'
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
    review: 'Excellent life insurance coverage that gives our family complete peace of mind. The application process was smooth and the rates are very competitive for the protection we get.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great value for comprehensive life insurance protection. The whole life policy provides both coverage and cash value growth, perfect for our long-term financial planning.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good life insurance options with flexible coverage amounts. The term life policy fits our budget and provides the financial security our family needs.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our life insurance specialists for a personalized life insurance quote based on your age, health, income, and family protection needs.',
    image: 'https://www.amerusfinancial.com/images/step-1-quote.jpg'
  },
  {
    name: 'Choose Coverage Type',
    text: 'Select the right life insurance type for your situation - term life for temporary needs or permanent life insurance for lifelong protection and cash value.',
    image: 'https://www.amerusfinancial.com/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the life insurance application with your personal information, health history, and undergo any required medical examinations.',
    image: 'https://www.amerusfinancial.com/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your life insurance policy will be activated and your beneficiaries will have the financial protection and security they need.',
    image: 'https://www.amerusfinancial.com/images/step-4-activate.jpg'
  }
], 'How to Get Life Insurance', 'Step-by-step guide to securing life insurance coverage for your family with Amerus Financial.', 'PT20M', '50.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Life Insurance Coverage & Protection',
    provider: serviceProvider,
    description: 'Comprehensive life insurance solutions including term life, whole life, and universal life insurance to protect your family\'s financial future with affordable monthly plans starting at $50.',
    serviceType: 'Insurance',
    category: 'Life Insurance',
    areaServed: 'United States',
    offers: {
      '@type': 'Offer',
      price: '50.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Life insurance coverage starting at $50 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Life Insurance Coverage & Protection',
    description: 'Comprehensive life insurance solutions including term life, whole life, and universal life insurance to protect your family\'s financial future.',
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
        name: 'What types of life insurance do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer comprehensive life insurance options including term life insurance for temporary coverage, whole life insurance for permanent protection with cash value, universal life insurance for flexible premiums, and final expense insurance for end-of-life costs.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does life insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Life insurance plans start at $50 per month for basic term life coverage. The cost varies based on your age, health status, coverage amount, lifestyle factors, and the type of life insurance you choose.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much life insurance coverage do I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Life insurance coverage typically ranges from 5-10 times your annual income. The right amount depends on your family\'s financial needs, outstanding debts, mortgage balance, children\'s education costs, and your family\'s lifestyle expenses.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a medical exam for life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medical exam requirements vary by coverage amount and policy type. Many policies require a medical exam for larger coverage amounts, while some simplified issue and guaranteed acceptance policies have minimal health requirements.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Life Insurance',
  title: 'Life Insurance',
  description: 'Protecting your family\'s financial future with customized life insurance solutions that provide security and peace of mind.',
  image: '/images/senior-woman-life-insurance.jpg',
  imageAlt: 'senior woman life insurance',
  cta: { href: '/contact', label: 'Find the Right Coverage' }
}
const benefits = [
  "Financial security for your loved ones",
  "Income replacement for your family",
  "Coverage for final expenses and funeral costs",
  "Help with debt payoff and mortgage protection",
  "Tax-free benefits for your beneficiaries",
  "Peace of mind knowing your family is protected"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Customized to your needs',
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
  'Term Life Insurance for affordable, temporary coverage',
  'Whole Life Insurance with permanent protection and cash value',
  'Universal Life Insurance offering flexible premiums and benefits',
  'Final Expense Insurance for end-of-life costs',
  'Key Person Insurance for business continuity',
  'Group Life Insurance for employee benefits packages'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Find the Right Coverage'
  }
}
</script>