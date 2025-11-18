<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Group Health Insurance"
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
useResourceHints(['/images/group-health-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Group Health Insurance Plans — Amerus Financial',
  description: 'Affordable group health insurance for businesses and organizations. Comprehensive employee health benefits with competitive rates.',
  image: '/images/group-health-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/health/group-health',
  type: 'website'
})

useSeoMeta({
  title: 'Group Health Insurance Plans',
  ogTitle: 'Group Health Insurance Plans — Amerus',
  description:
    'Affordable group health insurance for businesses and organizations. Comprehensive employee health benefits with competitive rates.',
  ogDescription:
    'Group health insurance plans for businesses providing comprehensive employee health benefits, medical coverage, and wellness programs.',
  ogImage: '/images/group-health-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/health/group-health',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Group Health Insurance Plans — Amerus',
  twitterDescription:
    'Group health insurance plans for businesses providing comprehensive employee health benefits, medical coverage, and wellness programs.',
  twitterImage: '/images/group-health-insurance.jpg',
  keywords: 'group health insurance, employee health benefits, business health plans, employer health coverage, group medical insurance'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/health/group-health/'
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
    review: 'Excellent group health insurance that covers all our employees. The coverage is comprehensive and the claims process is efficient.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great value for our business. Comprehensive employee health benefits with excellent customer service and support.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good group coverage that helps us attract quality employees. Reasonable rates and comprehensive health benefits.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our insurance specialists for a personalized group health insurance quote based on your business needs.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Compare Plans',
    text: 'Review different group health insurance options including coverage levels, deductibles, and provider networks.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the simple application form with your business and employee information.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your group health insurance coverage will be activated and employees can start using benefits.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Apply for Group Health Insurance', 'Step-by-step guide to applying for group health insurance coverage with Amerus Financial.', 'PT15M', '500.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Group Health Insurance Plans',
    provider: serviceProvider,
    description: 'Comprehensive group health insurance coverage for businesses providing employee medical benefits with affordable monthly plans starting at $500.',
    serviceType: 'Insurance',
    category: 'Group Health Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '500.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Group health insurance plan starting at $500 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Group Health Insurance Plans',
    description: 'Comprehensive group health insurance coverage for businesses providing employee medical benefits.',
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
        name: 'What does group health insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Group health insurance covers medical care for employees including preventive services, doctor visits, emergency care, prescription drugs, and specialist consultations. Most plans also include mental health coverage and wellness programs.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does group health insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Group health insurance plans start at $500 per month for small businesses. The cost varies based on the number of employees, coverage level, deductibles, and whether you choose PPO or HMO plans.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there waiting periods for group health insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most group health insurance plans have minimal waiting periods for preventive services and routine care. Emergency services are typically covered immediately upon activation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can employees choose their own doctors with group health insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our group health insurance plans provide access to extensive networks of healthcare providers including primary care doctors, specialists, and hospitals. Employees can choose from in-network providers for maximum savings.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Health Insurance',
  title: 'Group Health Insurance',
  description: 'Comprehensive health benefits for your employees that attract and retain top talent while providing tax advantages for your business.',
  image: '/images/group-insurance.jpg',
  imageAlt: 'dental insurance',
  cta: { href: '/contact', label: 'Get a Group Health Quote' }
}
const benefits = [
  "Comprehensive health coverage for employees",
  "Attracts and retains top talent",
  "Tax advantages for employers",
  "Variety of plan options to suit your budget",
  "Improved employee morale and productivity",
  "Protection against catastrophic health care costs"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Based on group size and coverage selected',
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
  'PPO Plans offering flexibility in provider choice',
  'HMO Plans with cost-effective network care',
  'HSA-Compatible Plans for additional tax benefits',
  'Self-Funded Options for larger businesses',
  'Customizable benefits packages for your team',
  'Dedicated account management and employee support'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Get a Group Health Quote'
  }
}
</script>