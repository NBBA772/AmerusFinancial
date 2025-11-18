<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Property Coverage"
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
            <HomeSidebar />
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
useResourceHints(['/images/property-coverage-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useEnhancedMetaTags({
  title: 'Property Coverage Insurance — Amerus Financial',
  description: 'Comprehensive property coverage insurance protecting your home structure and belongings from fire, theft, vandalism, and natural disasters.',
  image: '/images/property-coverage-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/home/property-coverage',
})

useSeoMeta({
  title: 'Property Coverage Insurance',
  ogTitle: 'Property Coverage & Protection — Amerus',
  description:
    'Comprehensive property coverage insurance protecting your home structure and belongings from fire, theft, vandalism, and natural disasters.',
  ogDescription:
    'Secure property coverage insurance for your home and belongings with comprehensive protection against damage and loss.',
  ogImage: '/images/property-coverage-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/home/property-coverage',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Property Coverage & Protection — Amerus',
  twitterDescription:
    'Secure property coverage insurance for your home and belongings with comprehensive protection against damage and loss.',
  twitterImage: '/images/property-coverage-insurance.jpg',
  keywords: 'property coverage, home property insurance, dwelling coverage, personal property protection, property damage insurance, home contents insurance, property insurance coverage'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/home/property-coverage/'
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
    review: 'Excellent property coverage insurance that protected our home during a recent storm. The claims process was seamless and the coverage was comprehensive.',
    date: '2024-01-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Outstanding property coverage that gives us complete peace of mind. Great protection for both our home structure and personal belongings.',
    date: '2024-01-10'
  },
  {
    author: 'Jessica Williams',
    rating: 4,
    review: 'Solid property coverage insurance with good value for comprehensive protection. Easy to understand policy and responsive customer service.',
    date: '2024-01-05'
  },
  {
    author: 'David Rodriguez',
    rating: 5,
    review: 'Top-quality property coverage that covers everything we need. Professional service and excellent protection for our home investment.',
    date: '2023-12-28'
  }
], 'Amerus Financial Property Coverage Insurance', 4.7)

// Create how-to steps
const howToData = useHowToSchema([
  {
    name: 'Assess Your Property Value',
    text: 'Evaluate your home structure and personal belongings to determine the right property coverage limits for comprehensive protection.',
    url: '#assess'
  },
  {
    name: 'Compare Property Coverage Options',
    text: 'Review different property coverage insurance policies including dwelling coverage, personal property limits, and deductible options.',
    url: '#compare'
  },
  {
    name: 'Submit Application and Documentation',
    text: 'Complete the property coverage application with home details, property value information, and receive competitive quotes.',
    url: '#apply'
  },
  {
    name: 'Activate Property Protection',
    text: 'Once approved, your property coverage insurance will be activated and your home and belongings will be protected against covered losses.',
    url: '#activate'
  }
], 'How to Get Property Coverage Insurance', 'Step-by-step guide to applying for comprehensive property coverage insurance.', 'PT20M', '110.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Property Coverage Insurance',
    provider: serviceProvider,
    description: 'Comprehensive property coverage insurance protecting your home structure and belongings from fire, theft, vandalism, and natural disasters with affordable monthly plans starting at $110.',
    serviceType: 'Insurance',
    category: 'Property Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '110.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Property coverage insurance starting at $110 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Property Coverage Insurance',
    description: 'Comprehensive property coverage insurance protecting your home structure and belongings from fire, theft, vandalism, and natural disasters.',
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
        name: 'What does property coverage insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property coverage insurance protects your home structure (dwelling coverage) and personal belongings from covered perils including fire, theft, vandalism, windstorms, and other disasters. It also covers other structures on your property like garages and sheds.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does property coverage cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property coverage insurance plans start at $110 per month for comprehensive protection. The cost varies based on your home\'s value, location, coverage limits, deductible, and the level of personal property protection you choose.'
        }
      },
      {
        '@type': 'Question',
        name: 'What\'s the difference between dwelling and personal property coverage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dwelling coverage protects your home\'s structure including walls, roof, and built-in appliances. Personal property coverage protects your belongings like furniture, clothing, electronics, and other possessions inside your home.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need replacement cost or actual cash value coverage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Replacement cost coverage is generally recommended as it pays to replace your property with new items of similar quality without depreciation. Actual cash value coverage pays the depreciated value, which may not fully cover replacement costs.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToData
])

const hero = {
  eyebrow: 'Home Insurance',
  title: 'Property Coverage Insurance for Home & Belongings',
  description: 'Comprehensive protection for your home\'s structure and personal belongings against a wide range of perils, ensuring you\'re covered for unexpected damages and losses.',
  image: '/images/fire-damage-property-coverage.jpg',
  imageAlt: 'fire damage to property',
  cta: { href: '/contact', label: 'Get Property Coverage' }
}
const benefits = [
  'Protection for both the dwelling and personal property',
  'Coverage for other structures on your property',
  'Options for replacement cost value coverage',
  'Protection against most common perils',
  'Coverage for sudden and accidental water damage',
  'Additional living expenses if your home becomes uninhabitable'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Based on your home\'s replacement cost',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Home Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Dwelling coverage for your home\'s structure',
  'Personal property coverage for your belongings',
  'Coverage for detached structures like garages and sheds',
  'Additional living expenses coverage',
  'Extended replacement cost options available',
  'Special limits for high-value items',
  'Coverage for refrigerated products',
  'Debris removal coverage after a covered loss'
]
const cta = {
  title: 'Ready to protect your home?',
  description: 'Speak with our home insurance specialists to find the right coverage for your property.',
  primary: {
    href: '/contact',
    label: 'Get Property Coverage'
  }
}
</script>