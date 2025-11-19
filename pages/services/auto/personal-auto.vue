<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          currentPageTitle="Personal Auto Insurance"
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
            <CTA :cta="cta" button-class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-6 text-white" />
          </div>

          <!-- Sidebar -->
          <div class="w-full md:w-1/3">
            <AutoSidebar />
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
useResourceHints(['/images/personal-auto-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Personal Auto Insurance Coverage — Amerus Financial',
  description: 'Comprehensive personal auto insurance with liability, collision, and comprehensive coverage. Get competitive rates and protect your vehicle with Amerus.',
  image: '/images/personal-auto-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/auto/personal-auto',
  type: 'website'
})

useSeoMeta({
  title: 'Personal Auto Insurance Coverage',
  ogTitle: 'Personal Auto Insurance — Amerus',
  description:
    'Comprehensive personal auto insurance with liability, collision, and comprehensive coverage. Get competitive rates and protect your vehicle with Amerus.',
  ogDescription:
    'Personal auto insurance with full coverage options including liability, collision, comprehensive, and uninsured motorist protection.',
  ogImage: '/images/personal-auto-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/auto/personal-auto',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Personal Auto Insurance — Amerus',
  twitterDescription:
    'Personal auto insurance with full coverage options including liability, collision, comprehensive, and uninsured motorist protection.',
  twitterImage: '/images/personal-auto-insurance.jpg',
  keywords: 'personal auto insurance, car insurance, auto coverage, liability insurance, collision coverage, comprehensive coverage, auto insurance quotes, vehicle insurance, car insurance rates'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/auto/personal-auto/'
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
    author: 'David Martinez',
    rating: 5,
    review: 'Outstanding auto insurance coverage with excellent customer service. Claims were processed quickly and rates are very competitive.',
    date: '2024-10-10'
  },
  {
    author: 'Jennifer Wilson',
    rating: 5,
    review: 'Great personal auto insurance with comprehensive coverage options. Easy to work with and responsive when I needed help.',
    date: '2024-10-05'
  },
  {
    author: 'Robert Thompson',
    rating: 4,
    review: 'Reliable auto insurance with good coverage and fair pricing. Professional service and quick response times.',
    date: '2024-09-28'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Vehicle Information',
    text: 'Provide details about your vehicle including make, model, year, and current coverage to get an accurate quote.',
    image: '/images/vehicle-info.jpg'
  },
  {
    name: 'Coverage Selection',
    text: 'Choose your coverage levels for liability, collision, comprehensive, and additional protections based on your needs.',
    image: '/images/coverage-selection.jpg'
  },
  {
    name: 'Review & Compare',
    text: 'Review different auto insurance options with various deductibles and coverage limits to find the best value.',
    image: '/images/auto-compare.jpg'
  },
  {
    name: 'Finalize Policy',
    text: 'Complete your application and activate your personal auto insurance coverage with immediate protection.',
    image: '/images/policy-finalize.jpg'
  }
], 'How to Get Personal Auto Insurance', 'Step-by-step guide to getting personal auto insurance coverage with Amerus Financial.', 'PT20M', '100.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Personal Auto Insurance',
    provider: serviceProvider,
    description: 'Comprehensive personal auto insurance with liability, collision, comprehensive coverage, and competitive rates for vehicle protection.',
    serviceType: 'Insurance',
    category: 'Auto Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '100.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Personal auto insurance coverage starting at $100 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Personal Auto Insurance',
    description: 'Comprehensive personal auto insurance with liability, collision, comprehensive coverage, and competitive rates.',
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
        name: 'What does personal auto insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Personal auto insurance covers liability for bodily injury and property damage, collision coverage for vehicle damage, comprehensive coverage for theft and weather damage, and optional coverages like uninsured motorist protection.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does auto insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Auto insurance costs vary based on your vehicle, driving record, location, and coverage levels. Personal auto insurance typically starts around $100 per month for basic coverage with higher rates for comprehensive protection.'
        }
      },
      {
        '@type': 'Question',
        name: 'What factors affect auto insurance rates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Auto insurance rates are affected by your driving record, age, vehicle type, location, credit score, coverage levels, and deductibles. Safe drivers and newer safety features can help reduce premiums.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need full coverage auto insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Full coverage (liability, collision, and comprehensive) is recommended to protect your vehicle and finances. It\'s required if you have a car loan or lease, and provides the best protection against accidents and theft.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Auto Insurance',
  title: 'Personal Auto Insurance',
  description: 'Comprehensive auto insurance coverage to protect you, your vehicle, and your finances on the road.',
  image: '/images/man-driving-insured-car.jpg',
  imageAlt: 'personal auto insurance',
  cta: { href: '/contact', label: 'Get Auto Insurance Quote' }
}
const benefits = [
  "Liability coverage required by law in all states",
  "Collision coverage for vehicle damage protection",
  "Comprehensive coverage for theft and weather damage",
  "Uninsured and underinsured motorist protection",
  "Medical payments and personal injury protection",
  "Roadside assistance and rental car coverage"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Based on plan selection',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Personal Auto Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Liability coverage for bodily injury and property damage',
  'Collision coverage for vehicle damage from accidents',
  'Comprehensive coverage for theft, vandalism, and weather',
  'Uninsured and underinsured motorist protection',
  'Personal injury protection and medical payments',
  'Roadside assistance and rental car coverage options'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Get a Personalized Quote'
  }
}
</script>