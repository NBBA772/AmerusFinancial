<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Property Protection Insurance"
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
useResourceHints(['/images/property-protection-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Property Protection Insurance — Amerus Financial',
  description: 'Comprehensive property protection insurance safeguarding your home and assets from unexpected events. Get complete coverage for your property investment.',
  image: '/images/property-protection-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/home/property-protection',
  type: 'website'
})

useSeoMeta({
  title: 'Property Protection Insurance',
  ogTitle: 'Property Protection & Security — Amerus',
  description:
    'Comprehensive property protection insurance safeguarding your home and assets from unexpected events. Get complete coverage for your property investment.',
  ogDescription:
    'Secure your property investment with comprehensive protection insurance covering your home and assets against various risks and damages.',
  ogImage: '/images/property-protection-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/home/property-protection',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Property Protection & Security — Amerus',
  twitterDescription:
    'Secure your property investment with comprehensive protection insurance covering your home and assets against various risks and damages.',
  twitterImage: '/images/property-protection-insurance.jpg',
  keywords: 'property protection, home protection insurance, property security, asset protection, property risk coverage, home asset insurance, property investment protection'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/home/property-protection/'
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
    review: 'Excellent property protection insurance that safeguarded our home during the hurricane. The comprehensive coverage protected our investment completely.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great property protection with comprehensive coverage for our home and belongings. Peace of mind knowing our assets are fully protected.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good property protection coverage that covers all our structures and belongings. Competitive rates for comprehensive home protection.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our insurance specialists for a personalized property protection insurance quote based on your home and asset values.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Compare Plans',
    text: 'Review different property protection options including coverage levels, deductibles, and specialized protections for your property.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the simple application form with your property details and asset information for comprehensive protection.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your property protection insurance will be activated and your home and assets will be fully protected.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Apply for Property Protection Insurance', 'Step-by-step guide to applying for property protection insurance with Amerus Financial.', 'PT15M', '115.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Property Protection Insurance',
    provider: serviceProvider,
    description: 'Comprehensive property protection insurance safeguarding your home and assets from unexpected events with affordable monthly plans starting at $115.',
    serviceType: 'Insurance',
    category: 'Property Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '115.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Property protection insurance starting at $115 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Property Protection Insurance',
    description: 'Comprehensive property protection insurance safeguarding your home and assets from unexpected events.',
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
        name: 'What does property protection insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property protection insurance covers your home structure, detached buildings, personal belongings, and assets against perils like fire, windstorms, theft, vandalism, and other covered damages. It provides comprehensive protection for your property investment.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does property protection insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property protection insurance plans start at $115 per month for comprehensive coverage. The cost varies based on your property value, location, coverage limits, and the specific protections you choose for your home and assets.'
        }
      },
      {
        '@type': 'Question',
        name: 'What\'s included in property protection coverage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property protection includes dwelling coverage for your home structure, coverage for detached structures like garages and sheds, personal property protection for belongings, and additional protections for high-value items and specialized risks.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need additional property protection beyond homeowners insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property protection insurance can enhance your homeowners coverage with specialized protections, higher coverage limits, and coverage for items that may have limited protection under standard policies, providing comprehensive asset protection.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Home Insurance',
  title: 'Property Protection Insurance',
  description: 'Comprehensive coverage for your home, belongings, and other structures against a wide range of perils, safeguarding your most valuable investments.',
  image: '/images/property-protection.jpg',
  imageAlt: 'senior woman life insurance',
  cta: { href: '/contact', label: 'Get a Property Protection Quote' }
}
const benefits = [
  'Protects the physical structure of your home against covered perils',
  'Covers detached structures like garages, sheds, and fences',
  'Safeguards your personal belongings and possessions',
  'Offers replacement cost options for maximum protection',
  'Specialized Florida coverage considerations including hurricane protection',
  'Additional coverage options for valuable items that exceed standard limits'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Up to full replacement value of your home',
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
  'Coverage for fire and smoke damage',
  'Protection against windstorms and hail',
  'Lightning strike coverage',
  'Vandalism and theft protection',
  'Water damage coverage from sudden and accidental sources',
  'Coverage for falling objects and weight of ice/snow',
  'Protection from sudden electrical current damage',
  'Options for hurricane and sinkhole coverage in Florida'
]
const cta = {
  title: 'Ready to protect your home?',
  description: 'Speak with our home insurance specialists to find the right coverage for your property.',
  primary: {
    href: '/contact',
    label: 'Get a Property Protection Quote'
  }
}
</script>