<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Liability Coverage"
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
useResourceHints(['/images/liability-coverage-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Liability Coverage Insurance — Amerus Financial',
  description: 'Comprehensive liability coverage insurance protecting you from legal claims and lawsuits. Get personal liability protection for your home and family.',
  image: '/images/liability-coverage-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/home/liability-coverage',
  type: 'website'
})

useSeoMeta({
  title: 'Liability Coverage Insurance',
  ogTitle: 'Liability Coverage & Protection — Amerus',
  description:
    'Comprehensive liability coverage insurance protecting you from legal claims and lawsuits. Get personal liability protection for your home and family.',
  ogDescription:
    'Protect yourself from legal claims with comprehensive liability coverage insurance for your home and personal activities.',
  ogImage: '/images/liability-coverage-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/home/liability-coverage',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Liability Coverage & Protection — Amerus',
  twitterDescription:
    'Protect yourself from legal claims with comprehensive liability coverage insurance for your home and personal activities.',
  twitterImage: '/images/liability-coverage-insurance.jpg',
  keywords: 'liability coverage, personal liability insurance, liability protection, legal liability coverage, home liability insurance, personal injury protection, lawsuit protection'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/home/liability-coverage/'
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
    review: 'Excellent liability coverage that gives us peace of mind. The protection against lawsuits and legal claims is comprehensive and affordable.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great liability protection with excellent coverage limits. The legal defense coverage saved us thousands when we had a claim.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good liability coverage that protects our family from potential lawsuits. Easy to understand policy and competitive rates.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our insurance specialists for a personalized liability coverage quote based on your protection needs.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Compare Plans',
    text: 'Review different liability coverage options including coverage limits, personal liability protection, and umbrella policies.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the simple application form with your personal and property information for liability coverage.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your liability coverage will be activated and you will be protected against legal claims and lawsuits.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Apply for Liability Coverage', 'Step-by-step guide to applying for liability coverage insurance with Amerus Financial.', 'PT15M', '40.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Liability Coverage Insurance',
    provider: serviceProvider,
    description: 'Comprehensive liability coverage insurance protecting you from legal claims and lawsuits with affordable monthly plans starting at $40.',
    serviceType: 'Insurance',
    category: 'Liability Insurance',
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
      description: 'Liability coverage insurance starting at $40 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Liability Coverage Insurance',
    description: 'Comprehensive liability coverage insurance protecting you from legal claims and lawsuits.',
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
        name: 'What does liability coverage insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Liability coverage protects you from legal claims if you accidentally injure someone or damage their property. It covers legal defense costs, settlements, and judgments up to your policy limits, including incidents on your property or elsewhere.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does liability coverage cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Liability coverage plans start at $40 per month for basic protection. The cost varies based on coverage limits, your risk profile, and whether you add umbrella coverage for additional protection.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much liability coverage do I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most experts recommend liability coverage equal to your net worth, with a minimum of $300,000. Higher net worth individuals should consider umbrella policies for additional coverage beyond standard homeowners limits.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does liability coverage protect me everywhere?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, personal liability coverage typically protects you worldwide, not just on your property. This includes incidents involving your pets, accidental damage to others\' property, and personal injury claims.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Home Insurance',
  title: 'Liability Coverage Insurance & Legal Protection',
  description: 'Financial protection against lawsuits for injury or property damage that you or household members cause to others, including legal defense costs.',
  image: '/images/liability-coverage-car-accident.jpg',
  imageAlt: 'senior woman life insurance',
  cta: { href: '/contact', label: 'Get Liability Protection' }
}
const benefits = [
  'Protection against bodily injury and property damage claims',
  'Coverage for legal defense costs regardless of lawsuit outcome',
  'Protection anywhere in the world, not just at your home',
  'Coverage for incidents involving pets',
  'Protection for accidental damage to others\' property',
  'Peace of mind against potentially financially devastating claims'
]
const info = [
  {
    title: 'Coverage Amount',
    text: '$100,000 to $500,000 standard (more with umbrella)',
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
  'Personal liability coverage starting at $100,000',
  'Medical payments to others coverage',
  'No-fault medical coverage for guest injuries',
  'Coverage for dog bite liability in most cases',
  'Protection against claims from domestic workers',
  'Personal umbrella policies available for extended coverage',
  'Protection beyond standard homeowners liability limits',
  'Coverage for libel and slander claims in some policies'
]
const cta = {
  title: 'Ready to protect your home?',
  description: 'Speak with our home insurance specialists to find the right coverage for your property.',
  primary: {
    href: '/contact',
    label: 'Get Liability Protection'
  }
}
</script>