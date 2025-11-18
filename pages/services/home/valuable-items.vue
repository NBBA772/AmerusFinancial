<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Valuable Items Coverage"
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
useResourceHints(['/images/valuable-items-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Valuable Items Insurance — Amerus Financial',
  description: 'Specialized valuable items insurance protecting jewelry, art, collectibles, and high-value personal property with comprehensive coverage and appraisal support.',
  image: '/images/valuable-items-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/home/valuable-items',
  type: 'website'
})

useSeoMeta({
  title: 'Valuable Items Insurance Coverage',
  ogTitle: 'Valuable Items & Personal Property Coverage — Amerus',
  description:
    'Specialized valuable items insurance protecting jewelry, art, collectibles, and high-value personal property with comprehensive coverage and appraisal support.',
  ogDescription:
    'Protect your valuable possessions with specialized insurance coverage for jewelry, art, collectibles, and high-value items that exceed standard homeowners limits.',
  ogImage: '/images/valuable-items-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/home/valuable-items',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Valuable Items & Personal Property Coverage — Amerus',
  twitterDescription:
    'Protect your valuable possessions with specialized insurance coverage for jewelry, art, collectibles, and high-value items that exceed standard homeowners limits.',
  twitterImage: '/images/valuable-items-insurance.jpg',
  keywords: 'valuable items insurance, jewelry insurance, art insurance, collectibles coverage, personal property insurance, high-value items, scheduled property, appraisal coverage, antiques insurance'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/home/valuable-items/'
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
    review: 'Excellent valuable items coverage that protected my jewelry collection when it was stolen. The claims process was smooth and they covered the full appraised value.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great coverage for my art collection and antiques. The appraisal service helped establish proper values and the worldwide protection gives me peace of mind.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good valuable items insurance that covers my coin collection and electronics. Competitive rates for the comprehensive coverage they provide.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our insurance specialists for a personalized valuable items insurance quote based on your high-value possessions and collections.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Appraise Items',
    text: 'Get professional appraisals for your valuable items to establish proper coverage amounts and replacement values.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Schedule Coverage',
    text: 'Complete the application with detailed information about your valuable items including descriptions, values, and photos.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Protection',
    text: 'Once approved, your valuable items coverage will be activated and your possessions will be protected worldwide.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Insure Your Valuable Items', 'Step-by-step guide to getting valuable items insurance coverage with Amerus Financial.', 'PT20M', '45.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Valuable Items Insurance Coverage',
    provider: serviceProvider,
    description: 'Specialized valuable items insurance protecting jewelry, art, collectibles, and high-value personal property with comprehensive coverage starting at $45 monthly.',
    serviceType: 'Insurance',
    category: 'Personal Property Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '45.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Valuable items insurance coverage starting at $45 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Valuable Items Insurance Coverage',
    description: 'Specialized valuable items insurance protecting jewelry, art, collectibles, and high-value personal property.',
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
        name: 'What valuable items can be covered with this insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Valuable items insurance covers jewelry, fine art, collectibles, antiques, high-end electronics, musical instruments, furs, coin collections, stamps, sports memorabilia, and other high-value personal property that exceeds standard homeowners insurance limits.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does valuable items insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Valuable items insurance typically starts at $45 per month for basic coverage. The cost varies based on the total value of items being insured, their type, and the specific coverage options you choose.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need appraisals for my valuable items?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, professional appraisals are typically required for valuable items to establish proper coverage amounts and replacement values. We can help arrange qualified appraisal services for your possessions.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does valuable items insurance cover theft and loss worldwide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, valuable items insurance provides worldwide protection against theft, loss, and damage. This includes coverage for mysterious disappearance and accidental damage that may not be covered under standard homeowners policies.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Home Insurance',
  title: 'Valuable Items Coverage',
  description: 'Specialized protection for high-value possessions that exceed standard homeowners insurance limits, including jewelry, art, collectibles, and electronics.',
  image: '/images/valuable-items-coverage-jewelry-box.jpg',
  imageAlt: 'jewelry box with valuable items',
  cta: { href: '/contact', label: 'Protect Your Valuables' }
}
const benefits = [
  'Higher coverage limits for valuable possessions',
  'Protection against a broader range of perils',
  'Coverage for mysterious disappearance of items',
  'No deductible on many scheduled item policies',
  'Worldwide protection for your valuables',
  'Specified replacement value agreed upon in advance'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Customized to your valuable items',
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
  'Scheduled personal property endorsements for itemized coverage',
  'Blanket coverage options for collections',
  'Professional appraisal services available',
  'Coverage for fine art, jewelry, watches, and furs',
  'Protection for coin, stamp, and sports memorabilia collections',
  'Coverage for high-end electronics and musical instruments',
  'Antiques and heirloom protection',
  'Regular reappraisal services to ensure adequate coverage'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our home insurance specialists to find the right coverage for your property.',
  primary: {
    href: '/contact',
    label: 'Protect Your Valuables'
  }
}
</script>