<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mconst reviewData = useReviewSchema([
  {
    author: 'Sarah Johnson',
    rating: 5,
    review: 'Excellent homeowners insurance coverage with comprehensive protection for our home and belongings. The claims process was smooth and professional when we had storm damage.',
    date: '2024-01-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Outstanding homeowners insurance that gives us complete peace of mind. Great coverage options and very responsive customer service when we needed help.',
    date: '2024-01-10'
  },
  {
    author: 'Jessica Williams',
    rating: 4,
    review: 'Solid homeowners coverage that protects our family and home. Easy to understand policy details and competitive rates for comprehensive protection.',
    date: '2024-01-05'
  },
  {
    author: 'David Rodriguez',
    rating: 5,
    review: 'Top-quality homeowners insurance with excellent liability protection. Professional service and thorough coverage for all our home insurance needs.',
    date: '2023-12-28'
  }
], 'Amerus Financial Homeowners Insurance', 4.7):px-6 lg:px-8">
          <Breadcrumbs
              currentPageTitle="Homeowners Insurance"
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
useResourceHints(['/images/homeowners-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useEnhancedMetaTags({
  title: 'Homeowners Insurance Coverage — Amerus Financial',
  description: 'Comprehensive homeowners insurance protecting your home, belongings, and family from unexpected events. Get affordable coverage with excellent customer service.',
  image: '/images/homeowners-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/home/homeowners',
})

useSeoMeta({
  title: 'Homeowners Insurance Coverage',
  ogTitle: 'Homeowners Insurance Protection — Amerus',
  description:
    'Comprehensive homeowners insurance protecting your home, belongings, and family from unexpected events. Get affordable coverage with excellent customer service.',
  ogDescription:
    'Protect your home and family with comprehensive homeowners insurance covering dwelling, personal property, and liability protection.',
  ogImage: '/images/homeowners-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/home/homeowners',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Homeowners Insurance Protection — Amerus',
  twitterDescription:
    'Protect your home and family with comprehensive homeowners insurance covering dwelling, personal property, and liability protection.',
  twitterImage: '/images/homeowners-insurance.jpg',
  keywords: 'homeowners insurance, home insurance, dwelling coverage, personal property insurance, liability protection, home insurance quotes, property insurance, home protection'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/home/homeowners/'
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
    review: 'Excellent homeowners insurance coverage with comprehensive protection for our home and belongings. The claims process was smooth and professional when we had storm damage.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Outstanding homeowners insurance that gives us complete peace of mind. Great coverage options and very responsive customer service when we needed help.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Solid homeowners coverage that protects our family and home. Easy to understand policy details and competitive rates for comprehensive protection.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToData = useHowToSchema([
  {
    name: 'Assess Your Home Insurance Needs',
    text: 'Evaluate your home value, personal belongings, and liability risks to determine the right homeowners insurance coverage levels.',
    url: '#assess'
  },
  {
    name: 'Compare Homeowners Insurance Options',
    text: 'Review different homeowners insurance policies including coverage types, deductibles, and protection limits that fit your needs.',
    url: '#compare'
  },
  {
    name: 'Submit Application and Get Quotes',
    text: 'Complete the homeowners insurance application with property details and receive competitive quotes for your coverage.',
    url: '#apply'
  },
  {
    name: 'Activate Your Home Protection',
    text: 'Once approved, your homeowners insurance policy will be activated and your home and family will be protected against covered losses.',
    url: '#activate'
  }
], 'How to Get Homeowners Insurance', 'Step-by-step guide to applying for comprehensive homeowners insurance coverage.', 'PT20M', '120.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Homeowners Insurance Coverage',
    provider: serviceProvider,
    description: 'Comprehensive homeowners insurance protecting your home, belongings, and family from unexpected events with affordable monthly premiums starting at $120.',
    serviceType: 'Insurance',
    category: 'Homeowners Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '120.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Comprehensive homeowners insurance plan starting at $120 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Homeowners Insurance Plans',
    description: 'Comprehensive homeowners insurance protecting your home, belongings, and family from unexpected events.',
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
        name: 'What does homeowners insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Homeowners insurance covers your dwelling, personal belongings, liability protection, and additional living expenses. This includes protection against fire, theft, vandalism, and many natural disasters, plus liability coverage if someone is injured on your property.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does homeowners insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Homeowners insurance premiums start at $120 per month. The cost varies based on your home value, location, coverage amounts, deductible, and risk factors like proximity to fire stations.'
        }
      },
      {
        '@type': 'Question',
        name: 'What factors affect homeowners insurance rates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Homeowners insurance rates are affected by your home\'s age, construction materials, location, claims history, credit score, and chosen coverage limits. Homes in areas prone to natural disasters typically have higher premiums.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need homeowners insurance if I own my home outright?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While homeowners insurance isn\'t legally required if you own your home outright, it\'s highly recommended to protect your investment and provide liability coverage. Most financial advisors consider it essential protection.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToData
])

const hero = {
  eyebrow: 'Home Insurance',
  title: 'Homeowners Insurance',
  description: 'Comprehensive protection for your home and belongings, safeguarding your most valuable asset against disasters, theft, and liability claims.',
  image: '/images/homeowners-insurance.jpg',
  imageAlt: 'senior woman life insurance',
  cta: { href: '/contact', label: 'Get a Homeowners Quote' }
}
const benefits = [
 'Protection for your home against damage and disasters',
 'Coverage for personal belongings and valuables',
 'Liability protection for accidents on your property',
 'Additional living expenses if your home becomes uninhabitable',
 'Customizable coverage options for your unique needs',
 'Multi-policy discounts when bundled with auto insurance'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Customized to your home\'s value',
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
  'Dwelling Coverage protects the structure of your home',
  'Personal Property coverage for belongings inside and outside the home',
  'Liability Protection if someone is injured on your property',
  'Medical Payments coverage for minor injuries',
  'Scheduled personal property for high-value items',
  'Water backup coverage options',
  'Identity theft protection',
  'Equipment breakdown coverage'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our home insurance specialists to find the right coverage for your property.',
  primary: {
    href: '/contact',
    label: 'Get a Homeowners Quote'
  }
}
</script>