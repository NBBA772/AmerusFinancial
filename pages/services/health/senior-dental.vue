<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Senior Dental Solutions"
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
useResourceHints(['/images/senior-dental-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Senior Dental Insurance Plans — Amerus Financial',
  description: 'Specialized dental insurance for seniors with coverage for dentures, implants, and comprehensive oral care designed for older adults.',
  image: '/images/senior-dental-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/health/senior-dental',
  type: 'website'
})

useSeoMeta({
  title: 'Senior Dental Insurance Plans',
  ogTitle: 'Senior Dental Insurance Plans — Amerus',
  description:
    'Specialized dental insurance for seniors with coverage for dentures, implants, and comprehensive oral care designed for older adults.',
  ogDescription:
    'Senior dental insurance plans providing specialized coverage for dentures, implants, and comprehensive oral care for older adults.',
  ogImage: '/images/senior-dental-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/health/senior-dental',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Senior Dental Insurance Plans — Amerus',
  twitterDescription:
    'Senior dental insurance plans providing specialized coverage for dentures, implants, and comprehensive oral care for older adults.',
  twitterImage: '/images/senior-dental-insurance.jpg',
  keywords: 'senior dental insurance, denture coverage, dental implants for seniors, elderly dental care, senior oral health insurance'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/health/senior-dental/'
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
    review: 'Excellent senior dental coverage with comprehensive benefits for dentures and implants. The preventive care is completely covered and the network has quality dental specialists.',
    date: '2024-01-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Outstanding dental insurance for seniors with affordable rates and great coverage for major dental work. Perfect for our retirement years.',
    date: '2024-01-10'
  },
  {
    author: 'Jessica Williams',
    rating: 4,
    review: 'Good senior dental coverage that covers our specific needs. Easy to understand benefits and excellent support for older adults.',
    date: '2024-01-05'
  },
  {
    author: 'David Rodriguez',
    rating: 5,
    review: 'Comprehensive senior dental insurance with excellent customer support. Highly recommend for retirees and seniors.',
    date: '2023-12-28'
  }
], 'Amerus Financial Senior Dental Insurance', 4.7)

// Create how-to steps
const howToData = useHowToSchema([
  {
    name: 'Research Senior Dental Options',
    text: 'Review different senior dental insurance options including coverage for dentures, implants, and specialized dental care for older adults.',
    url: '#research'
  },
  {
    name: 'Contact Our Senior Specialists',
    text: 'Contact our insurance specialists for a personalized senior dental insurance quote based on your specific dental needs and age requirements.',
    url: '#contact'
  },
  {
    name: 'Submit Application',
    text: 'Complete the senior dental insurance application and choose your coverage level including denture and implant benefits.',
    url: '#apply'
  },
  {
    name: 'Start Senior Coverage',
    text: 'Once approved, your senior dental insurance coverage will be activated and you can start using specialized dental benefits.',
    url: '#activate'
  }
], 'How to Apply for Senior Dental Insurance', 'Step-by-step guide to applying for senior dental insurance coverage with Amerus Financial.', 'PT15M', '45.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Senior Dental Insurance Plans',
    provider: serviceProvider,
    description: 'Specialized dental insurance coverage for seniors including dentures, implants, and comprehensive oral care with affordable monthly plans starting at $45.',
    serviceType: 'Insurance',
    category: 'Senior Dental Insurance',
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
      description: 'Senior dental insurance plan starting at $45 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Senior Dental Insurance Plans',
    description: 'Specialized dental insurance coverage for seniors including dentures, implants, and comprehensive oral care.',
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
        name: 'What does senior dental insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Senior dental insurance covers preventive care like cleanings and exams, basic procedures such as fillings and extractions, major procedures including dentures, bridges, and implants, plus specialized care for age-related dental conditions.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does senior dental insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Senior dental insurance plans start at $45 per month for comprehensive coverage. The cost varies based on coverage level, deductibles, and specific benefits like denture and implant coverage.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does senior dental insurance coordinate with Medicare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our senior dental insurance plans are designed to coordinate with Medicare and fill gaps in coverage since Medicare typically does not cover routine dental care, dentures, or dental implants.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there age restrictions for senior dental insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, there are no age restrictions for our senior dental insurance plans. Coverage is specifically designed for older adults with no upper age limits and simplified enrollment processes.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToData
])

const hero = {
  eyebrow: 'Health Insurance',
  title: 'Senior Dental Solutions',
  description: 'Specialized dental coverage designed for seniors\' unique oral health needs with Medicare coordination.',
  image: '/images/senior-dental-insurance.jpg',
  imageAlt: 'dental insurance',
  cta: { href: '/contact', label: 'Speak with a Medicare Specialist' }
}
const benefits = [
  "Plans specifically designed for seniors' dental needs",
  "No waiting periods for many preventive services",
  "Coverage for dentures, crowns, and other restorative work",
  "Network discounts on a wide range of procedures",
  "Affordable premiums with flexible payment options",
  "Coordination with Medicare plans where applicable"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Starting at $35/month',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Senior Dental Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Preventive care with full coverage for routine cleanings',
  'Basic services for fillings and extractions',
  'Major restorative work including bridges and dentures',
  'Optional coverage for periodontal treatments',
  'Simple enrollment process with no age restrictions',
  'Plans designed to fill Medicare coverage gaps'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Speak with a Medicare Specialist'
  }
}
</script>