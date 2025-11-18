<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Flood Insurance"
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
useResourceHints(['/images/flood-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Flood Insurance Coverage — Amerus Financial',
  description: 'Comprehensive flood insurance protection for your home and belongings. Protect against flood damage with affordable NFIP and private flood coverage.',
  image: '/images/flood-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/home/flood-insurance',
  type: 'website'
})

useSeoMeta({
  title: 'Flood Insurance Coverage',
  ogTitle: 'Flood Insurance Protection — Amerus',
  description:
    'Comprehensive flood insurance protection for your home and belongings. Protect against flood damage with affordable NFIP and private flood coverage.',
  ogDescription:
    'Get essential flood insurance coverage to protect your home from water damage with comprehensive NFIP and private flood insurance options.',
  ogImage: '/images/flood-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/home/flood-insurance',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Flood Insurance Protection — Amerus',
  twitterDescription:
    'Get essential flood insurance coverage to protect your home from water damage with comprehensive NFIP and private flood insurance options.',
  twitterImage: '/images/flood-insurance.jpg',
  keywords: 'flood insurance, NFIP flood insurance, private flood insurance, flood coverage, water damage protection, flood zone insurance, home flood protection'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/home/flood-insurance/'
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
    review: 'Essential flood insurance that saved our home during the recent floods. The coverage was comprehensive and the claims process was handled professionally and quickly.',
    date: '2024-01-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Excellent flood insurance coverage that gives us peace of mind living in a flood-prone area. Great value and responsive customer service when we needed help.',
    date: '2024-01-10'
  },
  {
    author: 'Jessica Williams',
    rating: 4,
    review: 'Solid flood insurance protection with good coverage options. Easy application process and competitive rates for comprehensive flood protection.',
    date: '2024-01-05'
  },
  {
    author: 'David Rodriguez',
    rating: 5,
    review: 'Outstanding flood insurance that covers both our home and contents. Professional service and excellent protection against water damage.',
    date: '2023-12-28'
  }
], 'Amerus Financial Flood Insurance', 4.7)

// Create how-to steps
const howToData = useHowToSchema([
  {
    name: 'Assess Your Flood Risk',
    text: 'Determine your property\'s flood zone designation and assess your flood risk to understand the right flood insurance coverage levels needed.',
    url: '#assess'
  },
  {
    name: 'Compare Flood Insurance Options',
    text: 'Review NFIP and private flood insurance policies including coverage limits, deductibles, and protection for both structure and contents.',
    url: '#compare'
  },
  {
    name: 'Submit Application and Documentation',
    text: 'Complete the flood insurance application with property elevation details and receive quotes for comprehensive flood coverage.',
    url: '#apply'
  },
  {
    name: 'Activate Flood Protection',
    text: 'Once approved, your flood insurance policy will be activated and your home will be protected against flood damage and water-related losses.',
    url: '#activate'
  }
], 'How to Get Flood Insurance', 'Step-by-step guide to applying for comprehensive flood insurance coverage.', 'PT20M', '85.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Flood Insurance Coverage',
    provider: serviceProvider,
    description: 'Comprehensive flood insurance protection for your home and belongings with NFIP and private flood coverage options starting at $85.',
    serviceType: 'Insurance',
    category: 'Flood Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '85.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Comprehensive flood insurance plan starting at $85 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Flood Insurance Plans',
    description: 'Comprehensive flood insurance protection for your home and belongings with NFIP and private flood coverage options.',
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
        name: 'What does flood insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flood insurance covers direct physical damage to your home structure and personal belongings caused by flooding. This includes damage from storms, heavy rain, storm surge, and other water-related events as defined by your policy.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does flood insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flood insurance premiums start at $85 per month. The cost varies based on your flood zone, home elevation, coverage amounts, and whether you choose NFIP or private flood insurance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need flood insurance if I have homeowners insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, standard homeowners insurance does not cover flood damage. Flood insurance is a separate policy that specifically covers water damage from flooding, which is excluded from typical homeowners policies.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does it take for flood insurance to take effect?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NFIP flood insurance policies have a 30-day waiting period before coverage begins, except for certain circumstances like a mortgage requirement. Private flood insurance may have shorter waiting periods or immediate coverage options.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToData
])

const hero = {
  eyebrow: 'Home Insurance',
  title: 'Flood Insurance Coverage & Protection for Homes',
  description: 'Essential protection against flood damage that standard homeowners insurance doesn\'t cover, safeguarding your home and belongings from rising water disasters.',
  image: '/images/flood-insurance-house-flooded.jpg',
  imageAlt: 'house flooded with water',
  cta: { href: '/contact', label: 'Secure Flood Protection' }
}
const benefits = [
  'Coverage for damages caused by flooding',
  'Protection for your home\'s structure and foundation',
  'Coverage for personal belongings damaged by flood waters',
  'Peace of mind in flood-prone areas',
  'Coverage for electrical and plumbing systems',
  'Protection against both coastal flooding and heavy rainfall flooding'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Up to $250,000 for structure, $100,000 for contents',
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
  'Building property coverage up to $250,000',
  'Personal property coverage up to $100,000',
  'Coverage for appliances, carpeting, and built-in bookcases',
  'Protection for clothing, furniture, and electronic equipment',
  'Coverage for water heaters and air conditioners',
  'Protection for detachable items like curtains and window AC units',
  'Options available through the National Flood Insurance Program (NFIP)',
  'Private market options for coverage beyond NFIP limits'
]
const cta = {
  title: 'Ready to protect your home?',
  description: 'Speak with our home insurance specialists to find the right coverage for your property.',
  primary: {
    href: '/contact',
    label: 'Secure Flood Protection'
  }
}
</script>