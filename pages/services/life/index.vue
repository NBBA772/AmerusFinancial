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



            <!-- Life Insurance Services Grid -->
            <section class="grid md:grid-cols-2 gap-6">
              <ServiceCard
                title="Term Life Insurance"
                description="Affordable temporary life insurance protection for specific time periods."
                link="/services/life/term-life"
                icon="lucide:calendar"
              />
              <ServiceCard
                title="Whole Life Insurance"
                description="Permanent life insurance with cash value and guaranteed coverage for life."
                link="/services/life/whole-life"
                icon="lucide:infinity"
              />
              <ServiceCard
                title="Universal Life Insurance"
                description="Flexible permanent life insurance with adjustable premiums and death benefits."
                link="/services/life/universal-life"
                icon="lucide:settings"
              />
              <ServiceCard
                title="Final Expense Insurance"
                description="Burial and funeral expense coverage to protect your family from financial burden."
                link="/services/life/final-expense"
                icon="lucide:heart-handshake"
              />
              <ServiceCard
                title="Key Person Insurance"
                description="Business protection against the loss of key employees or business owners."
                link="/services/life/key-person-insurance"
                icon="lucide:user-star"
              />
              <ServiceCard
                title="Group Life Insurance"
                description="Employee life insurance benefits and group coverage for businesses."
                link="/services/life/group-life-insurance"
                icon="lucide:users"
              />
              <ServiceCard
                title="Split Dollar Life Insurance"
                description="Shared premium life insurance arrangements between employers and employees."
                link="/services/life/split-dollar"
                icon="lucide:split"
              />
              <ServiceCard
                title="Life Insurance Overview"
                description="General life insurance information and comprehensive coverage options."
                link="/services/life/life-insurance"
                icon="lucide:shield-heart"
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
useResourceHints(['/images/life-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Life Insurance Solutions — Amerus Financial',
  description: 'Secure your family\'s financial future with comprehensive life insurance coverage. From term to permanent life insurance, find the protection that fits your needs.',
  image: '/images/life-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/life',
  type: 'website'
})

useSeoMeta({
  title: 'Life Insurance Solutions',
  ogTitle: 'Life Insurance Coverage & Protection — Amerus',
  description:
    'Find comprehensive life insurance coverage starting at $50/month. Compare term, whole & universal life options for your family\'s protection.',
  ogDescription:
    'Explore comprehensive life insurance options including term life, whole life, universal life, and final expense coverage to protect your family\'s financial future.',
  ogImage: '/images/life-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/life',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Life Insurance Coverage & Protection — Amerus',
  twitterDescription:
    'Explore comprehensive life insurance options including term life, whole life, universal life, and final expense coverage to protect your family\'s financial future.',
  twitterImage: '/images/life-insurance.jpg',
  keywords: 'life insurance, term life insurance, whole life insurance, universal life insurance, final expense insurance, life insurance quotes, family financial protection, life insurance coverage'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/life/'
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
    review: 'Excellent life insurance coverage that gives our family peace of mind. The application process was straightforward and the rates are very competitive.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great value for comprehensive life insurance protection. The term life policy fits our budget perfectly and provides the coverage our family needs.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good life insurance options with flexible coverage amounts. The whole life policy is building cash value as promised and the customer service is helpful.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our life insurance specialists for a personalized life insurance quote based on your age, health, and coverage needs.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Compare Options',
    text: 'Review different life insurance types including term, whole, and universal life insurance to find the best coverage for your family.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the life insurance application with your personal and health information, including any required medical exams.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your life insurance policy will be activated and your beneficiaries will have the financial protection they need.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Apply for Life Insurance', 'Step-by-step guide to applying for life insurance coverage with Amerus Financial.', 'PT20M', '50.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Life Insurance Solutions',
    provider: serviceProvider,
    description: 'Comprehensive life insurance coverage including term, whole, universal, and final expense insurance to secure your family\'s financial future with affordable monthly plans starting at $50.',
    serviceType: 'Insurance',
    category: 'Life Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
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
    name: 'Life Insurance Solutions',
    description: 'Comprehensive life insurance coverage including term, whole, universal, and final expense insurance to secure your family\'s financial future.',
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
        name: 'What types of life insurance are available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer comprehensive life insurance options including term life insurance for temporary needs, whole life insurance for permanent coverage with cash value, universal life insurance for flexible premiums, and final expense insurance for burial costs.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does life insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Life insurance plans start at $50 per month for basic term life coverage. The cost varies based on your age, health status, coverage amount, and the type of life insurance you choose.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a medical exam for life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medical exam requirements vary by coverage amount and type. Many policies require a medical exam, while some simplified issue and guaranteed acceptance policies have minimal or no health requirements.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much life insurance coverage do I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Life insurance coverage typically ranges from 5-10 times your annual income. The right amount depends on your debts, income replacement needs, future expenses like college tuition, and your family\'s financial goals.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Insurance Services',
  title: 'Life Insurance Solutions',
  description: 'Secure your family\'s financial future with comprehensive life insurance coverage. From term to permanent life insurance, find the protection that fits your needs.',
  image: '/images/happy-family-term-life-insurance.jpg',
  imageAlt: 'life insurance coverage',
  cta: { href: '/contact', label: 'Get Life Insurance Quote' }
}
</script>