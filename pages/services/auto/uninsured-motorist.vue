<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Individual Health Insurance"
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
useResourceHints(['/images/uninsured-motorist-coverage.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Uninsured Motorist Coverage — Amerus Financial',
  description: 'Protect yourself from uninsured and underinsured drivers with comprehensive uninsured motorist coverage. Get protection from Amerus.',
  image: '/images/uninsured-motorist-coverage.jpg',
  url: 'https://www.amerusfinancial.com/services/auto/uninsured-motorist',
  type: 'website'
})

useSeoMeta({
  title: 'Uninsured Motorist Coverage',
  ogTitle: 'Uninsured Motorist Coverage — Amerus',
  description:
    'Protect yourself from uninsured and underinsured drivers with comprehensive uninsured motorist coverage. Get protection from Amerus.',
  ogDescription:
    'Uninsured motorist coverage protecting you when hit by drivers without insurance or insufficient coverage limits.',
  ogImage: '/images/uninsured-motorist-coverage.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/auto/uninsured-motorist',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Uninsured Motorist Coverage — Amerus',
  twitterDescription:
    'Uninsured motorist coverage protecting you when hit by drivers without insurance or insufficient coverage limits.',
  twitterImage: '/images/uninsured-motorist-coverage.jpg',
  keywords: 'uninsured motorist coverage, underinsured motorist, hit and run protection, uninsured driver protection, auto insurance protection, motorist coverage'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/auto/uninsured-motorist/'
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
    author: 'Accident Victim David',
    rating: 5,
    review: 'Uninsured motorist coverage saved me when hit by an uninsured driver. Covered all my medical bills and car repairs.',
    date: '2024-10-15'
  },
  {
    author: 'Driver Jennifer',
    rating: 5,
    review: 'Great uninsured motorist protection. When an underinsured driver hit me, this coverage made up the difference.',
    date: '2024-09-28'
  },
  {
    author: 'Family Driver Tom',
    rating: 4,
    review: 'Reliable uninsured motorist coverage that provided peace of mind. Easy claims process when I needed it.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Coverage Assessment',
    text: 'Evaluate your state requirements and determine the uninsured motorist coverage limits you need for protection.',
    image: '/images/uninsured-assessment.jpg'
  },
  {
    name: 'Compare Options',
    text: 'Review uninsured and underinsured motorist coverage options including bodily injury and property damage limits.',
    image: '/images/uninsured-compare.jpg'
  },
  {
    name: 'Add to Policy',
    text: 'Add uninsured motorist coverage to your auto insurance policy with your selected coverage limits.',
    image: '/images/uninsured-add-policy.jpg'
  },
  {
    name: 'Activate Protection',
    text: 'Activate your uninsured motorist coverage for immediate protection against uninsured and underinsured drivers.',
    image: '/images/uninsured-activate.jpg'
  }
], 'How to Get Uninsured Motorist Coverage', 'Step-by-step guide to getting uninsured motorist protection for auto accidents.', 'PT15M', '40.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Uninsured Motorist Coverage',
    provider: serviceProvider,
    description: 'Uninsured motorist coverage protecting you from uninsured and underinsured drivers with comprehensive bodily injury and property damage protection.',
    serviceType: 'Insurance',
    category: 'Uninsured Motorist Coverage',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '40.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Uninsured motorist coverage starting at $40 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Uninsured Motorist Coverage',
    description: 'Uninsured motorist coverage protecting you from uninsured and underinsured drivers with comprehensive protection.',
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
        name: 'What does uninsured motorist coverage protect against?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Uninsured motorist coverage protects you when hit by drivers without insurance or with insufficient coverage limits. It covers bodily injury, property damage, and hit-and-run accidents.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is uninsured motorist coverage required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Uninsured motorist coverage is required in some states and optional in others. Even where not required, it\'s highly recommended due to the high number of uninsured drivers on the road.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does uninsured motorist coverage cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Uninsured motorist coverage typically costs $40-80 per month depending on coverage limits and your location. It\'s relatively inexpensive for the protection it provides.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between uninsured and underinsured motorist coverage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Uninsured motorist coverage protects against drivers with no insurance. Underinsured motorist coverage protects when the at-fault driver\'s insurance limits are too low to cover your damages.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Health Insurance',
  title: 'Individual Health Insurance',
  description: 'Personalized healthcare coverage designed specifically for your unique medical needs and budget.',
  image: '/images/uninsured-motorist-in-car-accident.jpg',
  imageAlt: 'uninsured motorist in car accident',
  cta: { href: '/contact', label: 'Get a Personalized Quote' }
}
const benefits = [
  "Personalized coverage for your specific needs",
  "Coverage for preventive care and wellness visits",
  "Access to a network of quality healthcare providers",
  "Protection against high medical costs",
  "Options for prescription drug coverage",
  "Peace of mind knowing you're protected"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Based on plan selection',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Health Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Bronze Plans with lower monthly premiums',
  'Silver Plans for balanced coverage and costs',
  'Gold Plans for those with frequent healthcare needs',
  'Platinum Plans offering comprehensive coverage',
  'Marketplace and private insurance options available',
  'Expert guidance for understanding complex plan options'
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