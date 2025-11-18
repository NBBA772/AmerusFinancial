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
            <CTA :cta="cta" button-class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-6 text-white" />
          </div>

          <!-- Sidebar -->
          <div class="w-full md:w-1/3">
            <HealthSidebar />
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
useResourceHints(['/images/individual-health-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Individual Health Insurance Plans — Amerus Financial',
  description: 'Find affordable individual health insurance plans with comprehensive medical coverage, preventive care, and prescription drug benefits.',
  image: '/images/individual-health-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/health/individual-health',
  type: 'website'
})

useSeoMeta({
  title: 'Individual Health Insurance Plans',
  ogTitle: 'Individual Health Insurance Plans — Amerus',
  description:
    'Find affordable individual health insurance plans with comprehensive medical coverage, preventive care, and prescription drug benefits.',
  ogDescription:
    'Individual health insurance plans providing comprehensive medical coverage, preventive care, and prescription drug benefits for individuals and families.',
  ogImage: '/images/individual-health-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/health/individual-health',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Individual Health Insurance Plans — Amerus',
  twitterDescription:
    'Individual health insurance plans providing comprehensive medical coverage, preventive care, and prescription drug benefits for individuals and families.',
  twitterImage: '/images/individual-health-insurance.jpg',
  keywords: 'individual health insurance, private health insurance, medical coverage, health insurance plans, preventive care, prescription drugs, healthcare coverage'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/health/individual-health/'
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
    author: 'Jennifer Martinez',
    rating: 5,
    review: 'Excellent individual health insurance with comprehensive coverage. The preventive care is fully covered and claims process is seamless.',
    date: '2024-10-15'
  },
  {
    author: 'David Thompson',
    rating: 5,
    review: 'Great value for individual health coverage. Prescription drug benefits are excellent and customer service is outstanding.',
    date: '2024-09-28'
  },
  {
    author: 'Sarah Williams',
    rating: 4,
    review: 'Solid health insurance plan with good network of doctors. Coverage is comprehensive and rates are competitive.',
    date: '2024-09-20'
  },
  {
    author: 'Robert Chen',
    rating: 5,
    review: 'Outstanding individual health plan. Emergency room coverage saved me thousands and the telehealth benefits are fantastic.',
    date: '2024-08-10'
  },
  {
    author: 'Amanda Davis',
    rating: 5,
    review: 'Perfect health insurance for self-employed individuals. Great coverage options and affordable monthly premiums.',
    date: '2024-07-22'
  }
], 4.8)

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Compare Health Plans',
    text: 'Review individual health insurance options including coverage levels, deductibles, and provider networks.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Get Health Quote',
    text: 'Contact our health insurance specialists for a personalized individual health insurance quote.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the health insurance application with your medical history and coverage preferences.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your individual health insurance coverage begins and you can start using benefits.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Get Individual Health Insurance', 'Step-by-step guide to applying for individual health insurance coverage.', 'PT20M', '300.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Individual Health Insurance',
    provider: serviceProvider,
    description: 'Individual health insurance plans providing comprehensive medical coverage, preventive care, and prescription drug benefits starting at $300.',
    serviceType: 'Insurance',
    category: 'Health Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '300.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Individual health insurance plan starting at $300 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Individual Health Insurance',
    description: 'Individual health insurance plans providing comprehensive medical coverage, preventive care, and prescription drug benefits.',
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
        name: 'What does individual health insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Individual health insurance covers doctor visits, hospital stays, emergency care, preventive services, prescription drugs, and specialist care. Coverage varies by plan type and deductible level.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does individual health insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Individual health insurance costs vary based on age, location, coverage level, and health status. Plans typically start around $300 per month with various deductible and coverage options available.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I get individual health insurance with pre-existing conditions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, ACA-compliant individual health insurance plans cannot deny coverage or charge more based on pre-existing conditions. All plans must provide essential health benefits regardless of health status.'
        }
      },
      {
        '@type': 'Question',
        name: 'When can I enroll in individual health insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can enroll during the annual Open Enrollment Period (November-January) or during a Special Enrollment Period if you have a qualifying life event like job loss or marriage.'
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
  image: '/images/couple-got-individual-health-insurance.jpg',
  imageAlt: 'individual health insurance coverage',
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
  'Bronze Plans for basic coverage at lower costs',
  'Silver Plans with moderate premiums and deductibles',
  'Gold Plans offering higher coverage with lower out-of-pocket costs',
  'Platinum Plans providing maximum coverage',
  'Preventive care coverage on all plans',
  'Prescription drug coverage options'
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