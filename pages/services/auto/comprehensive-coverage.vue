<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Comprehensive Auto Coverage"
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
                <Icon name="lucide:shield-check" size="50" class="text-white" />
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
useResourceHints(['/images/comprehensive-auto-coverage.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Comprehensive Auto Insurance Coverage — Amerus Financial',
  description: 'Protect your vehicle from theft, vandalism, and weather damage with comprehensive auto insurance coverage. Get competitive rates from Amerus.',
  image: '/images/comprehensive-auto-coverage.jpg',
  url: 'https://www.amerusfinancial.com/services/auto/comprehensive-coverage',
  type: 'website'
})

useSeoMeta({
  title: 'Comprehensive Auto Insurance Coverage',
  ogTitle: 'Comprehensive Auto Coverage — Amerus',
  description:
    'Protect your vehicle from theft, vandalism, and weather damage with comprehensive auto insurance coverage. Get competitive rates from Amerus.',
  ogDescription:
    'Comprehensive auto insurance covering theft, vandalism, weather damage, and other non-collision incidents for complete vehicle protection.',
  ogImage: '/images/comprehensive-auto-coverage.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/auto/comprehensive-coverage',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Comprehensive Auto Coverage — Amerus',
  twitterDescription:
    'Comprehensive auto insurance covering theft, vandalism, weather damage, and other non-collision incidents for complete vehicle protection.',
  twitterImage: '/images/comprehensive-auto-coverage.jpg',
  keywords: 'comprehensive auto insurance, comprehensive coverage, auto theft protection, vandalism coverage, weather damage insurance, comprehensive car insurance, vehicle protection, auto insurance coverage'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/auto/comprehensive-coverage/'
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
    author: 'Car Owner Jennifer',
    rating: 5,
    review: 'Comprehensive coverage saved me thousands when my car was stolen. Excellent protection against non-collision damage.',
    date: '2024-10-15'
  },
  {
    author: 'Driver Mark',
    rating: 5,
    review: 'Great comprehensive auto coverage for weather damage. Quick claims processing when hail damaged my vehicle.',
    date: '2024-09-28'
  },
  {
    author: 'Vehicle Owner Lisa',
    rating: 4,
    review: 'Reliable comprehensive coverage with good protection against theft and vandalism. Professional service team.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Coverage Assessment',
    text: 'Evaluate your vehicle value and comprehensive coverage needs for protection against non-collision damage.',
    image: '/images/coverage-assessment.jpg'
  },
  {
    name: 'Deductible Selection',
    text: 'Choose your comprehensive deductible amount to balance monthly premiums with out-of-pocket costs.',
    image: '/images/deductible-selection.jpg'
  },
  {
    name: 'Coverage Review',
    text: 'Review comprehensive coverage options including theft, vandalism, weather, and animal damage protection.',
    image: '/images/comprehensive-review.jpg'
  },
  {
    name: 'Policy Activation',
    text: 'Activate your comprehensive auto coverage for immediate protection against non-collision incidents.',
    image: '/images/comprehensive-activate.jpg'
  }
], 'How to Get Comprehensive Auto Coverage', 'Step-by-step guide to getting comprehensive auto insurance coverage.', 'PT15M', '75.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Comprehensive Auto Coverage',
    provider: serviceProvider,
    description: 'Comprehensive auto insurance coverage protecting against theft, vandalism, weather damage, and other non-collision incidents with affordable rates starting at $75.',
    serviceType: 'Insurance',
    category: 'Comprehensive Auto Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '75.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Comprehensive auto coverage starting at $75 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Comprehensive Auto Coverage',
    description: 'Comprehensive auto insurance coverage protecting against theft, vandalism, weather damage, and other non-collision incidents.',
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
        name: 'What does comprehensive auto coverage protect against?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Comprehensive auto coverage protects against theft, vandalism, weather damage (hail, flood, wind), fire, animal collisions, falling objects, and other non-collision incidents that could damage your vehicle.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does comprehensive auto coverage cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Comprehensive auto coverage typically starts at $75 per month. The cost varies based on your vehicle value, deductible amount, location, and coverage limits you choose.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is comprehensive coverage required by law?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Comprehensive coverage is not required by law, but it may be required by your lender if you have a car loan or lease. It provides valuable protection for your vehicle investment against non-collision damage.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between comprehensive and collision coverage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Comprehensive coverage protects against non-collision incidents like theft, weather, and vandalism. Collision coverage protects against damage from accidents with other vehicles or objects. Both work together for complete protection.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Auto Insurance',
  title: 'Comprehensive Auto Coverage',
  description: 'Protect your vehicle from theft, vandalism, weather damage, and other non-collision incidents with comprehensive coverage.',
  image: '/images/tree-fell-on-car-comprehensive-auto-coverage.jpg',
  imageAlt: 'comprehensive auto insurance coverage',
  cta: { href: '/contact', label: 'Get Comprehensive Quote' }
}
const benefits = [
  "Protection against theft and vandalism",
  "Coverage for weather-related damage (hail, flood, wind)",
  "Fire and explosion damage protection",
  "Animal collision coverage",
  "Falling object damage coverage",
  "Glass breakage and windshield protection"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Based on plan selection',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Comprehensive Auto Coverage',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Protection against theft and vandalism',
  'Weather damage coverage (hail, flood, wind)',
  'Fire and explosion damage protection',
  'Animal collision coverage included',
  'Falling object and debris damage coverage',
  'Windshield and glass damage protection'
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