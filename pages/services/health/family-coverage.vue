<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Family Coverage Options"
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
useResourceHints(['/images/family-health-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Family Health Insurance Plans — Amerus Financial',
  description: 'Protect your entire family with comprehensive health insurance coverage including medical, dental, and vision benefits for all family members.',
  image: '/images/family-health-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/health/family-coverage',
  type: 'website'
})

useSeoMeta({
  title: 'Family Health Insurance Plans',
  ogTitle: 'Family Health Insurance Plans — Amerus',
  description:
    'Protect your entire family with comprehensive health insurance coverage including medical, dental, and vision benefits for all family members.',
  ogDescription:
    'Family health insurance plans providing comprehensive medical coverage, preventive care, and benefits for parents, children, and dependents.',
  ogImage: '/images/family-health-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/health/family-coverage',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Family Health Insurance Plans — Amerus',
  twitterDescription:
    'Family health insurance plans providing comprehensive medical coverage, preventive care, and benefits for parents, children, and dependents.',
  twitterImage: '/images/family-health-insurance.jpg',
  keywords: 'family health insurance, family medical coverage, children health insurance, family health plans, dependent coverage, family healthcare'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/health/family-coverage/'
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
    review: 'Fantastic family health insurance coverage that covers everyone. The benefits are comprehensive and the claims process is smooth.',
    date: '2024-01-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Perfect solution for our growing family. Covers medical, preventive care, and specialist visits with excellent networks.',
    date: '2024-01-10'
  },
  {
    author: 'Jessica Williams',
    rating: 4,
    review: 'Great family coverage that gives us peace of mind. Easy to add new family members and comprehensive benefits.',
    date: '2024-01-05'
  },
  {
    author: 'David Rodriguez',
    rating: 5,
    review: 'Outstanding family health plan that covers all our medical needs. Great value for comprehensive family coverage.',
    date: '2023-12-28'
  }
], 'Amerus Financial Family Health Insurance', 4.7)

// Create how-to steps
const howToData = useHowToSchema([
  {
    name: 'Research Family Health Insurance Options',
    text: 'Compare different family health insurance plans including coverage options, deductibles, and family-specific benefits.',
    url: '#research'
  },
  {
    name: 'Contact Our Insurance Specialists',
    text: 'Contact our insurance specialists for a personalized family health insurance quote based on your family size and needs.',
    url: '#contact'
  },
  {
    name: 'Submit Application',
    text: 'Complete the family health insurance application with all family members information and select your coverage options.',
    url: '#apply'
  },
  {
    name: 'Start Family Coverage',
    text: 'Once approved, your family health insurance coverage will be activated and all family members can start using benefits.',
    url: '#activate'
  }
], 'How to Apply for Family Health Insurance', 'Step-by-step guide to applying for family health insurance coverage with Amerus Financial.', 'PT15M', '250.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Family Health Insurance Plans',
    provider: serviceProvider,
    description: 'Comprehensive family health insurance coverage for medical, preventive care, and specialist visits with affordable monthly plans starting at $250.',
    serviceType: 'Insurance',
    category: 'Family Health Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '250.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Comprehensive family health insurance plan starting at $250 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Family Health Insurance Plans',
    description: 'Comprehensive family health insurance coverage for medical, preventive care, and specialist visits.',
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
        name: 'What does family health insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Family health insurance covers medical care for all family members including preventive services, doctor visits, emergency care, prescription drugs, and specialist consultations. Most plans also include maternity coverage and pediatric services.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does family health insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Family health insurance plans start at $250 per month for basic coverage. The cost varies based on the number of family members, coverage level, deductibles, and whether you choose individual or group family plans.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there waiting periods for family health insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most family health insurance plans have minimal waiting periods for preventive services and routine care. Emergency services are typically covered immediately upon activation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I choose my family doctor with your health insurance plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our family health insurance plans provide access to a network of quality healthcare providers including family doctors, specialists, and hospitals. You can choose from in-network providers for maximum savings or visit out-of-network providers with different coverage levels.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToData
])

const hero = {
  eyebrow: 'Health Insurance',
  title: 'Family Coverage Options',
  description: 'Comprehensive health insurance solutions designed for families of all sizes, ensuring every member receives the care they need at rates you can afford.',
  image: '/images/healthcare-family.jpg',
  imageAlt: 'family healthcare',
  cta: { href: '/contact', label: 'Get a Quote' }
}
const benefits = [
  "Coverage for all family members under one policy",
  "Affordable premiums with family discounts",
  "Preventive care included at no additional cost",
  "Coverage for doctor visits, hospitalizations, and prescriptions",
  "Pediatric dental and vision options available"
]
const info = [
  {
    title: 'Coverage Amount',
    text: '$350/month for a family of four',
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
  'Flexible family plans that grow with your family\'s needs',
  'Low copays for primary care physician visits',
  'Access to extensive networks of doctors and hospitals',
  'Telehealth services available 24/7',
  'Maternity and newborn care',
  'Preventive services including annual check-ups, immunizations, and screenings'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Get a Quote'
  }
}
</script>