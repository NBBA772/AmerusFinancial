<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Commercial Auto Insurance"
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
                <Icon name="lucide:truck" size="50" class="text-white" />
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
useResourceHints(['/images/commercial-auto-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Commercial Auto Insurance for Business',
  description: 'Comprehensive commercial auto insurance for business vehicles, fleets, and company cars. Protect your business with competitive rates from Amerus.',
  image: '/images/commercial-auto-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/auto/commercial-auto',
  type: 'website'
})

useSeoMeta({
  title: 'Commercial Auto Insurance for Business',
  ogTitle: 'Commercial Auto Insurance — Amerus',
  description:
    'Comprehensive commercial auto insurance for business vehicles, fleets, and company cars. Protect your business with competitive rates from Amerus.',
  ogDescription:
    'Commercial auto insurance covering business vehicles, fleet coverage, and company car protection with liability and comprehensive options.',
  ogImage: '/images/commercial-auto-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/auto/commercial-auto',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Commercial Auto Insurance — Amerus',
  twitterDescription:
    'Commercial auto insurance for business vehicles and fleets. Liability, collision, and comprehensive coverage.',
  twitterImage: '/images/commercial-auto-insurance.jpg',
  keywords: 'commercial auto insurance, business vehicle insurance, fleet insurance, company car insurance, commercial vehicle coverage, business auto liability'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/auto/commercial-auto/'
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
    author: 'Business Owner Mike',
    rating: 5,
    review: 'Outstanding commercial auto insurance for our delivery fleet. Excellent coverage and competitive rates for business vehicles.',
    date: '2024-10-15'
  },
  {
    author: 'Fleet Manager Sarah',
    rating: 5,
    review: 'Great commercial vehicle coverage with responsive claims handling. Perfect for our business transportation needs.',
    date: '2024-09-28'
  },
  {
    author: 'Company Director John',
    rating: 4,
    review: 'Reliable commercial auto insurance with comprehensive business vehicle protection. Professional service team.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Business Assessment',
    text: 'Provide details about your business vehicles, usage, and current commercial auto insurance needs.',
    image: '/images/row-of-vans-needing-commercial-auto-insurance.jpg'
  },
  {
    name: 'Fleet Analysis',
    text: 'Review your vehicle fleet including types, values, and commercial usage patterns for accurate coverage.',
    image: '/images/row-of-vans-needing-commercial-auto-insurance.jpg'
  },
  {
    name: 'Coverage Design',
    text: 'Design commercial auto insurance coverage including liability, collision, and comprehensive protection.',
    image: '/images/row-of-vans-needing-commercial-auto-insurance.jpg'
  },
  {
    name: 'Policy Activation',
    text: 'Finalize your commercial auto insurance policy and activate coverage for your business vehicles.',
    image: '/images/row-of-vans-needing-commercial-auto-insurance.jpg'
  }
], 'How to Get Commercial Auto Insurance', 'Step-by-step guide to getting commercial auto insurance for your business vehicles.', 'PT25M', '200.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Commercial Auto Insurance',
    provider: serviceProvider,
    description: 'Comprehensive commercial auto insurance for business vehicles, fleets, and company cars with competitive rates and full protection.',
    serviceType: 'Insurance',
    category: 'Commercial Auto Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '200.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Commercial auto insurance starting at $200 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Commercial Auto Insurance',
    description: 'Comprehensive commercial auto insurance for business vehicles, fleets, and company cars.',
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
        name: 'What does commercial auto insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commercial auto insurance covers business vehicles with liability protection, collision coverage, comprehensive coverage, and additional protections for fleet operations and company cars.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does commercial auto insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commercial auto insurance costs vary based on vehicle types, business use, driving records, and coverage levels. Coverage typically starts around $200 per month for basic business vehicle protection.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need commercial auto insurance for my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, if you use vehicles for business purposes, commercial auto insurance is required. Personal auto insurance typically does not cover business use of vehicles.'
        }
      },
      {
        '@type': 'Question',
        name: 'What types of vehicles need commercial auto coverage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commercial auto insurance covers delivery trucks, company cars, fleet vehicles, service vans, and any vehicle used for business operations or commercial purposes.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Auto Insurance',
  title: 'Commercial Auto Insurance',
  description: 'Comprehensive commercial auto insurance for business vehicles, fleets, and company cars with competitive rates and full protection.',
  image: '/images/row-of-vans-needing-commercial-auto-insurance.jpg',
  imageAlt: 'commercial auto insurance',
  cta: { href: '/contact', label: 'Get Commercial Auto Quote' }
}
const benefits = [
  "Business liability protection for commercial vehicles",
  "Collision coverage for fleet and company cars",
  "Comprehensive coverage for theft and weather damage",
  "Coverage for hired and non-owned vehicles",
  "Medical payments for employees and passengers",
  "Protection for business equipment in vehicles"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Based on plan selection',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Commercial Auto Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Fleet vehicle coverage for multiple vehicles',
  'Delivery and service vehicle protection',
  'Company car insurance for employees',
  'Commercial liability and property damage',
  'Business interruption coverage options',
  'Customized coverage for industry-specific needs'
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