<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Whole Life Insurance"
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
useResourceHints(['/images/whole-life-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Whole Life Insurance Plans — Amerus Financial',
  description: 'Permanent whole life insurance with guaranteed cash value growth, lifetime coverage, and stable premiums for long-term financial security.',
  image: '/images/whole-life-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/life/whole-life',
  type: 'website'
})

useSeoMeta({
  title: 'Whole Life Insurance Plans',
  ogTitle: 'Whole Life Insurance Plans — Amerus',
  description:
    'Permanent whole life insurance with guaranteed cash value growth, lifetime coverage, and stable premiums for long-term financial security.',
  ogDescription:
    'Whole life insurance plans providing permanent coverage, guaranteed cash value growth, and lifetime financial protection for your family.',
  ogImage: '/images/whole-life-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/life/whole-life',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Whole Life Insurance Plans — Amerus',
  twitterDescription:
    'Whole life insurance plans providing permanent coverage, guaranteed cash value growth, and lifetime financial protection for your family.',
  twitterImage: '/images/whole-life-insurance.jpg',
  keywords: 'whole life insurance, permanent life insurance, cash value insurance, guaranteed life insurance, lifetime coverage'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/life/whole-life/'
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
    review: 'Outstanding whole life insurance with guaranteed cash value growth and fixed premiums. The lifetime coverage provides peace of mind for my family\'s financial security.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Excellent whole life policy that builds cash value while providing permanent protection. The guaranteed death benefit and stable premiums make this perfect for long-term planning.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Great whole life insurance with reliable cash value accumulation and lifetime coverage. The policy loans feature provides valuable financial flexibility.',
    date: '2024-09-20'
  }
], 'Amerus Financial Whole Life Insurance', 4.7)

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Assess Coverage Needs',
    text: 'Determine your whole life insurance needs based on income replacement, debt coverage, and long-term financial goals for permanent protection.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Compare Whole Life Plans',
    text: 'Review different whole life insurance options including death benefits, cash value growth rates, premium amounts, and dividend potential.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Submit your whole life insurance application with health information, beneficiary details, and undergo medical underwriting if required.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Whole Life Policy',
    text: 'Once approved, your whole life insurance coverage begins and you can start building cash value through guaranteed premium payments.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Get Whole Life Insurance', 'Step-by-step guide to applying for whole life insurance coverage with guaranteed cash value growth.', 'PT20M', '125.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Whole Life Insurance Plans',
    provider: serviceProvider,
    description: 'Permanent whole life insurance with guaranteed cash value growth, fixed premiums, and lifetime coverage providing financial security starting at $125.',
    serviceType: 'Insurance',
    category: 'Whole Life Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '125.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Whole life insurance policy with guaranteed cash value starting at $125 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Whole Life Insurance Plans',
    description: 'Permanent whole life insurance with guaranteed cash value growth, fixed premiums, and lifetime coverage.',
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
        name: 'What is whole life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Whole life insurance is permanent life insurance that provides guaranteed lifetime coverage with fixed premiums and a cash value component that grows over time, offering both protection and savings benefits.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does whole life insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Whole life insurance plans start at $125 per month. The cost depends on your age, health, coverage amount, and the specific policy features you choose.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does cash value work in whole life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Whole life insurance builds cash value through guaranteed growth over time. You can borrow against this cash value, make withdrawals, or let it continue growing tax-deferred to enhance your policy benefits.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are whole life insurance premiums fixed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, whole life insurance premiums are fixed and guaranteed never to increase. Once your policy is issued, your premium payments remain the same for the life of the policy as long as you continue paying.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Life Insurance',
  title: 'Whole Life Insurance',
  description: 'Permanent life insurance protection combined with a cash value component that grows over time, providing lifelong security and financial benefits.',
  image: '/images/family-whole-life-insurance.jpg',
  imageAlt: 'happy family whole life insurance',
  cta: { href: '/contact', label: 'Explore Whole Life Options' }
}
const benefits = [
  "Guaranteed lifetime coverage that never expires",
  "Cash value accumulation with tax-deferred growth",
  "Fixed premiums that never increase",
  "Potential dividend payments",
  "Borrow against your policy's cash value"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Starting at $100,000',
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
  'Permanent life insurance protection for your entire life',
  'Policy builds cash value over time that you can access',
  'Set premium payments that remain level for life',
  'Death benefit is guaranteed as long as premiums are paid',
  'Option to receive dividends that can increase your coverage',
  'Ability to customize with riders for additional protection'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Explore Whole Life Options'
  }
}
</script>