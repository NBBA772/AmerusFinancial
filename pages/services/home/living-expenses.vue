<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Additional Living Expenses Coverage"
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
useResourceHints(['/images/additional-living-expenses.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Additional Living Expenses Coverage — Amerus Financial',
  description: 'Financial protection for temporary housing and extra costs when your home becomes uninhabitable. Get coverage for hotel costs, meals, and displacement expenses.',
  image: '/images/additional-living-expenses.jpg',
  url: 'https://www.amerusfinancial.com/services/home/living-expenses',
  type: 'website'
})

useSeoMeta({
  title: 'Additional Living Expenses Coverage',
  ogTitle: 'Additional Living Expenses Coverage — Amerus',
  description:
    'Financial protection for temporary housing and extra costs when your home becomes uninhabitable. Get coverage for hotel costs, meals, and displacement expenses.',
  ogDescription:
    'Additional living expenses coverage provides financial protection for temporary housing, meals, and other costs when your home is uninhabitable.',
  ogImage: '/images/additional-living-expenses.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/home/living-expenses',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Additional Living Expenses Coverage — Amerus',
  twitterDescription:
    'Additional living expenses coverage provides financial protection for temporary housing, meals, and other costs when your home is uninhabitable.',
  twitterImage: '/images/additional-living-expenses.jpg',
  keywords: 'additional living expenses, ALE coverage, temporary housing insurance, displacement coverage, hotel expense coverage, living expense protection'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/home/living-expenses/'
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
    review: 'Excellent additional living expenses coverage that saved us during the house fire. Hotel and meal costs were covered completely while our home was rebuilt.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great ALE coverage that provided peace of mind. When flooding made our home uninhabitable, the temporary housing coverage was invaluable.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good living expenses coverage that helped during our displacement. The claims process was smooth and covered our temporary housing needs.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our insurance specialists for a personalized additional living expenses coverage quote based on your home value.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Compare Plans',
    text: 'Review different ALE coverage options including coverage limits, duration, and what living expenses are covered.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the simple application form with your home and family information for living expenses coverage.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your additional living expenses coverage will be activated to protect against displacement costs.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Apply for Additional Living Expenses Coverage', 'Step-by-step guide to applying for additional living expenses coverage with Amerus Financial.', 'PT15M', '35.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Additional Living Expenses Coverage',
    provider: serviceProvider,
    description: 'Additional living expenses coverage providing financial protection for temporary housing and displacement costs with affordable monthly plans starting at $35.',
    serviceType: 'Insurance',
    category: 'Home Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '35.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Additional living expenses coverage starting at $35 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Additional Living Expenses Coverage',
    description: 'Additional living expenses coverage providing financial protection for temporary housing and displacement costs.',
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
        name: 'What does additional living expenses coverage cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Additional living expenses coverage pays for temporary housing, hotel costs, increased food expenses, laundry, transportation, and other necessary living costs that exceed your normal expenses when your home is uninhabitable due to a covered loss.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does additional living expenses coverage cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Additional living expenses coverage typically costs around $35 per month and is usually included as part of your homeowners insurance policy, representing about 20-30% of your dwelling coverage amount.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does ALE coverage last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ALE coverage typically lasts until your home is repaired or rebuilt, or until you reach your policy limit. Most policies provide coverage for the shortest time period to repair or replace your home or until you permanently relocate.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need receipts for additional living expenses claims?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While detailed receipts help, many insurers offer per diem payments for certain expenses like meals and lodging. However, keeping receipts for all additional expenses is recommended for accurate reimbursement.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Home Insurance',
  title: 'Additional Living Expenses Coverage',
  description: 'Financial protection for temporary housing and extra costs when your home becomes uninhabitable due to a covered loss, helping you maintain your standard of living.',
  image: '/images/additional-living-expenses-coverage-motel-room.jpg',
  imageAlt: 'senior woman life insurance',
  cta: { href: '/contact', label: 'Explore Living Expenses Coverage' }
}
const benefits = [
  'Covers hotel or rental housing costs if your home is uninhabitable',
  'Pays for additional food expenses above your normal spending',
  'Covers laundry and transportation costs during displacement',
  'Provides pet boarding expenses if temporary housing doesn\'t allow pets',
  'Covers moving and storage costs for your belongings',
  'Peace of mind knowing your lifestyle won\'t be disrupted by a disaster'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Typically 20-30% of dwelling coverage',
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
  'Coverage triggered by any covered peril in your homeowners policy',
  'Protection lasts until your home is repaired or rebuilt',
  'No need to provide receipts for every expense with per diem options',
  'Coverage limits typically 20-30% of your dwelling coverage',
  'No deductible typically applied to ALE claims',
  'Coverage for costs that exceed your normal living expenses',
  'Protection during mandatory evacuations in some policies'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our home insurance specialists to find the right coverage for your property.',
  primary: {
    href: '/contact',
    label: 'Explore Living Expenses Coverage'
  }
}
</script>