<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Dental Solutions"
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
useResourceHints(['/images/dental-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Dental Insurance & Dental Plans — Amerus Financial',
  description: 'Find affordable dental insurance plans for preventive care, fillings, crowns, and orthodontics. Compare options and start a 15-minute consultation with Amerus today.',
  image: '/images/dental-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/health/dental',
  type: 'website'
})

useSeoMeta({
  title: 'Dental Insurance & Dental Plans',
  ogTitle: 'Dental Insurance Plans & Coverage — Amerus',
  description:
    'Affordable dental insurance covering preventive care, fillings & major procedures. Compare plans starting at $25/month.',
  ogDescription:
    'Explore dental insurance options covering preventive visits, basic and major procedures, and orthodontic care.',
  ogImage: '/images/dental-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/health/dental',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Dental Insurance Plans & Coverage — Amerus',
  twitterDescription:
    'Explore dental insurance options covering preventive visits, basic and major procedures, and orthodontic care.',
  twitterImage: '/images/dental-insurance.jpg',
  keywords: 'dental insurance, dental plans, dental coverage, preventive care, dental cleanings, fillings, crowns, root canals, orthodontics, dentist network, affordable dental insurance, dental benefits'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/health/dental/'
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
    review: 'Excellent dental coverage with fast claims processing. The preventive care is completely covered and the network has great dentists.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great value for money. No waiting periods for cleanings and the customer service team is very helpful.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good coverage and reasonable rates. Had to wait a bit for approval but overall satisfied with the service.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our insurance specialists for a personalized dental insurance quote based on your needs.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Compare Plans',
    text: 'Review different dental insurance options including coverage levels, deductibles, and network dentists.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the simple application form with your personal and health information.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your dental insurance coverage will be activated and you can start using benefits.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Apply for Dental Insurance', 'Step-by-step guide to applying for dental insurance coverage with Amerus Financial.', 'PT15M', '25.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Dental Insurance Plans',
    provider: serviceProvider,
    description: 'Comprehensive dental insurance coverage for preventive care, fillings, crowns, and orthodontics with affordable monthly plans starting at $25.',
    serviceType: 'Insurance',
    category: 'Dental Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '25.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Basic dental insurance plan starting at $25 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Dental Insurance Plans',
    description: 'Comprehensive dental insurance coverage for preventive care, fillings, crowns, and orthodontics.',
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
        name: 'What does dental insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dental insurance typically covers preventive care like cleanings and exams, basic procedures such as fillings and extractions, and major procedures including crowns and root canals. Many plans also offer orthodontic coverage options.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does dental insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dental insurance plans start at $25 per month for basic coverage. The cost varies based on the level of coverage, deductibles, and whether you choose individual or family plans.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there waiting periods for dental insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most dental insurance plans have low or no waiting periods for preventive services, with 100% coverage for preventive care on most plans. Waiting periods may apply to basic and major procedures.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I choose my own dentist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our dental insurance plans provide access to a network of quality dentists with negotiated rates. You can choose from in-network providers for maximum savings or visit out-of-network dentists with different coverage levels.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Health Insurance',
  title: 'Dental Insurance Plans & Coverage for Families',
  description: 'Comprehensive coverage for your oral health needs, from routine cleanings to major procedures.',
  image: '/images/dental-insurance.jpg',
  imageAlt: 'dental insurance',
  cta: { href: '/contact', label: 'Find Dental Coverage' }
}
const benefits = [
  "Coverage for preventive care like cleanings and exams",
  "Benefits for basic procedures such as fillings and extractions",
  "Coverage for major procedures including crowns and root canals",
  "Options for orthodontic coverage",
  "Access to network dentists with negotiated rates",
  "Promotes good oral health and preventive care"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Starting at $25/month',
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
  'Preventive & Basic Plans for essential dental care',
  'Comprehensive Plans covering a wide range of procedures',
  'Dental Savings Plans as alternatives to traditional insurance',
  'Group Dental Plans for businesses of all sizes',
  '100% coverage for preventive services on most plans',
  'Low or no waiting periods for preventive services'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Find Dental Coverage'
  }
}
</script>