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
            <AutoSidebar />
          </div>
        </div>
      </div>
    </main>
    <CallToAction />
  </PatternSection>
</template>

<script setup>
// Enhanced SEO using stable composables
useResourceHints(['/images/personal-injury-protection.jpg'])
usePerformanceMonitoring()

// Define common values
const pageUrl = 'https://www.amerusfinancial.com/services/auto/personal-injury-protection'
const pageTitle = 'Personal Injury Protection Insurance — Amerus'
const pageDescription = 'Personal injury protection insurance covers medical expenses and lost wages after auto accidents, regardless of fault. Get PIP coverage from Amerus.'
const pageImage = 'https://www.amerusfinancial.com/images/personal-injury-protection.jpg'

// Set all meta tags in one place
useHead({
  title: 'Personal Injury Protection (PIP) Insurance — Amerus Financial',
  meta: [
    // Basic meta
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'personal injury protection, PIP insurance, no fault insurance, medical coverage auto, lost wages coverage, accident medical bills, auto injury insurance' },
    
    // Required Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:site_name', content: 'Amerus Financial' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:image', content: pageImage },
    { property: 'og:url', content: pageUrl },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: pageImage },
    { name: 'twitter:site', content: '@amerusfinancial' },
    { name: 'twitter:creator', content: '@amerusfinancial' },
    
    // Technical SEO
    { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
    { name: 'googlebot', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#30BCFE' }
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
    // Performance optimizations
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ]
})

// Structured Data - Service Schema with consistent organization
const serviceProvider = useServiceProvider()

// Create review data
const reviewData = useReviewSchema([
  {
    author: 'Accident Victim Tom',
    rating: 5,
    review: 'PIP insurance covered my medical bills and lost wages after my car accident. Quick processing and no-fault coverage was a lifesaver.',
    date: '2024-10-15'
  },
  {
    author: 'Driver Sarah',
    rating: 5,
    review: 'Great personal injury protection coverage. Paid for my hospital stay and rehabilitation after an auto accident.',
    date: '2024-09-28'
  },
  {
    author: 'Family Driver Mike',
    rating: 4,
    review: 'Reliable PIP coverage that helped with medical expenses. Easy claims process and good customer support.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Coverage Assessment',
    text: 'Evaluate your state requirements and determine the PIP coverage limits you need for medical and wage protection.',
    image: 'https://www.amerusfinancial.com/images/pip-assessment.jpg'
  },
  {
    name: 'Compare Options',
    text: 'Review different PIP coverage options including medical limits, lost wage percentages, and essential services coverage.',
    image: 'https://www.amerusfinancial.com/images/pip-compare.jpg'
  },
  {
    name: 'Add to Policy',
    text: 'Add personal injury protection to your auto insurance policy with your selected coverage limits and deductibles.',
    image: 'https://www.amerusfinancial.com/images/pip-add-policy.jpg'
  },
  {
    name: 'Activate Protection',
    text: 'Activate your PIP coverage for immediate no-fault medical and wage protection after auto accidents.',
    image: 'https://www.amerusfinancial.com/images/pip-activate.jpg'
  }
], 'How to Get Personal Injury Protection', 'Step-by-step guide to getting PIP insurance coverage for auto accidents.', 'PT15M', '50.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Personal Injury Protection Insurance',
    provider: serviceProvider,
    description: 'Personal injury protection (PIP) insurance covering medical expenses, lost wages, and essential services after auto accidents regardless of fault.',
    serviceType: 'Insurance',
    category: 'Personal Injury Protection',
    areaServed: 'United States',
    offers: {
      '@type': 'Offer',
      price: '50.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Personal injury protection insurance starting at $50 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Personal Injury Protection Insurance',
    description: 'Personal injury protection (PIP) insurance covering medical expenses, lost wages, and essential services after auto accidents.',
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
        name: 'What does personal injury protection (PIP) cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PIP insurance covers medical expenses, lost wages (typically 60-80%), essential services like childcare, and sometimes funeral expenses after auto accidents, regardless of who is at fault.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is personal injury protection required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PIP insurance is required in no-fault states including Florida, Hawaii, Kansas, Kentucky, Massachusetts, Michigan, Minnesota, New Jersey, New York, North Dakota, Pennsylvania, and Utah.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does PIP insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PIP insurance typically costs $50-100 per month depending on coverage limits, state requirements, and your driving record. Higher coverage limits increase the premium.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between PIP and medical payments coverage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PIP provides broader coverage including lost wages and essential services, while medical payments coverage only covers medical expenses. PIP is also no-fault coverage regardless of who caused the accident.'
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
  image: '/images/car-accident-personal-injury-protection.jpg',
  imageAlt: 'car accident personal injury protection',
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
  'Bronze Plans with lower monthly premiums',
  'Silver Plans for balanced coverage and costs',
  'Gold Plans for those with frequent healthcare needs',
  'Platinum Plans offering comprehensive coverage',
  'Marketplace and private insurance options available',
  'Expert guidance for understanding complex plan options'
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