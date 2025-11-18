<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Private Health Insurance"
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
useResourceHints(['/images/private-health-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Private Health Insurance Plans — Amerus Financial',
  description: 'Secure private health insurance with flexible coverage options, premium networks, and comprehensive medical benefits.',
  image: '/images/private-health-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/health/private-health',
  type: 'website'
})

useSeoMeta({
  title: 'Private Health Insurance Plans',
  ogTitle: 'Private Health Insurance Plans — Amerus',
  description:
    'Secure private health insurance with flexible coverage options, premium networks, and comprehensive medical benefits.',
  ogDescription:
    'Private health insurance plans offering flexible coverage, premium provider networks, and comprehensive medical benefits for individuals and families.',
  ogImage: '/images/private-health-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/health/private-health',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Private Health Insurance Plans — Amerus',
  twitterDescription:
    'Private health insurance plans offering flexible coverage, premium provider networks, and comprehensive medical benefits for individuals and families.',
  twitterImage: '/images/private-health-insurance.jpg',
  keywords: 'private health insurance, premium health coverage, flexible health plans, private medical insurance, comprehensive health benefits'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/health/private-health/'
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
    review: 'Outstanding private health insurance coverage with excellent benefits. The flexibility and comprehensive care options are exactly what we needed.',
    date: '2024-01-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Premium private health coverage with access to top doctors and facilities. Worth every penny for the peace of mind.',
    date: '2024-01-10'
  },
  {
    author: 'Jessica Williams',
    rating: 4,
    review: 'Great private health insurance with fast approvals and comprehensive coverage. Excellent customer service support.',
    date: '2024-01-05'
  },
  {
    author: 'David Rodriguez',
    rating: 5,
    review: 'Top-tier private health insurance that covers everything we need. Professional service and quick claim processing.',
    date: '2023-12-28'
  }
], 'Amerus Financial Private Health Insurance', 4.7)

// Create how-to steps
const howToData = useHowToSchema([
  {
    name: 'Research Private Health Insurance Options',
    text: 'Compare different private health insurance plans including coverage options, provider networks, and premium levels.',
    url: '#research'
  },
  {
    name: 'Contact Our Insurance Specialists',
    text: 'Contact our insurance specialists for a personalized private health insurance quote based on your specific healthcare needs.',
    url: '#contact'
  },
  {
    name: 'Submit Application',
    text: 'Complete the private health insurance application and select your preferred coverage level and healthcare providers.',
    url: '#apply'
  },
  {
    name: 'Start Premium Coverage',
    text: 'Once approved, your private health insurance coverage will be activated and you can start accessing premium healthcare benefits.',
    url: '#activate'
  }
], 'How to Apply for Private Health Insurance', 'Step-by-step guide to applying for private health insurance coverage with Amerus Financial.', 'PT15M', '300.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Private Health Insurance Plans',
    provider: serviceProvider,
    description: 'Premium private health insurance coverage with comprehensive benefits and access to top healthcare providers starting at $300.',
    serviceType: 'Insurance',
    category: 'Private Health Insurance',
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
      description: 'Premium private health insurance plan starting at $300 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Private Health Insurance Plans',
    description: 'Premium private health insurance coverage with comprehensive benefits and access to top healthcare providers.',
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
        name: 'What does private health insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Private health insurance covers comprehensive medical care including specialist consultations, advanced diagnostic procedures, elective surgeries, private hospital rooms, and premium healthcare services with shorter waiting times.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does private health insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Private health insurance plans start at $300 per month for premium coverage. The cost varies based on the level of coverage, deductibles, and whether you choose individual or family plans.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there waiting periods for private health insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most private health insurance plans have minimal waiting periods for routine services and immediate coverage for emergency care. Premium plans often provide faster access to specialists and elective procedures.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I choose my healthcare provider with private health insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our private health insurance plans provide extensive flexibility in choosing healthcare providers including access to top specialists, private hospitals, and premium medical facilities with preferred rates.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToData
])

const hero = {
  eyebrow: 'Health Insurance',
  title: 'Private Health Insurance',
  description: 'Premium healthcare coverage with enhanced benefits and flexibility, giving you greater control over your healthcare choices.',
  image: '/images/private-health.jpg',
  imageAlt: 'private health insurance',
  cta: { href: '/contact', label: 'Get a Private Health Quote' }
}
const benefits = [
  "Personalized coverage tailored to your needs",
  "Access to a wide network of doctors and specialists",
  "Shorter wait times for procedures and treatments",
  "Additional coverage beyond what standard plans offer",
  "Freedom to choose your healthcare providers",
  "Coverage for treatments not included in many standard plans"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Premium varies by plan selection',
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
  'Comprehensive Plans with extensive medical coverage',
  'Hospital-Only Plans focused on inpatient care',
  'Supplemental Plans to enhance existing coverage',
  'High-Deductible Plans with HSA eligibility',
  'Access to premier healthcare facilities',
  'Direct physician access with reduced wait times'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Get a Private Health Quote'
  }
}
</script>