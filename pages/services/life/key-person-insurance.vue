<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Key Person Insurance"
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
            <LifeSidebar />
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
useResourceHints(['/images/key-person-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Key Person Insurance for Businesses — Amerus Financial',
  description: 'Protect your business from the financial impact of losing a key employee or executive with specialized coverage designed for business continuity and stability.',
  image: '/images/key-person-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/life/key-person-insurance',
  type: 'website'
})

useSeoMeta({
  title: 'Key Person Insurance for Businesses',
  ogTitle: 'Key Employee Life Insurance Protection — Amerus',
  description:
    'Protect your business from the financial impact of losing a key employee or executive with specialized coverage designed for business continuity and stability.',
  ogDescription:
    'Secure your business against the loss of key personnel with key person insurance that protects company value, maintains operations, and ensures business continuity.',
  ogImage: '/images/key-person-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/life/key-person-insurance',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Key Employee Life Insurance Protection — Amerus',
  twitterDescription:
    'Secure your business against the loss of key personnel with key person insurance that protects company value, maintains operations, and ensures business continuity.',
  twitterImage: '/images/key-person-insurance.jpg',
  keywords: 'key person insurance, key man insurance, business insurance, key employee insurance, business continuity insurance, executive insurance, key personnel protection, business life insurance'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/life/key-person-insurance/'
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
    review: 'Excellent key person insurance that protected our business when we lost our lead engineer. The coverage helped us maintain operations during the difficult transition period.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great value for protecting our business against key employee loss. The policy gave us peace of mind knowing our company value is protected if something happens to our CEO.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good key person coverage that fits our business needs. The underwriting process was thorough and the coverage amount reflects our key employee\'s value to the company.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Identify Key Personnel',
    text: 'Work with our specialists to identify key employees whose loss would significantly impact your business operations, revenue, or company value.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Assess Financial Impact',
    text: 'Calculate the financial value each key person brings to your business including revenue generation, specialized skills, and replacement costs.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Apply for Coverage',
    text: 'Complete the key person insurance application including business information, key employee details, and coverage amount requirements.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Protection',
    text: 'Once approved, your key person insurance policy will be activated and your business will be protected against the loss of critical personnel.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Get Key Person Insurance', 'Step-by-step guide to protecting your business with key person insurance coverage through Amerus Financial.', 'PT25M', '150.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Key Person Insurance for Businesses',
    provider: serviceProvider,
    description: 'Specialized key person insurance protecting businesses from the financial impact of losing critical employees or executives with customized coverage starting at $150 monthly.',
    serviceType: 'Insurance',
    category: 'Business Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '150.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Key person insurance coverage starting at $150 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Key Person Insurance for Businesses',
    description: 'Specialized key person insurance protecting businesses from the financial impact of losing critical employees or executives.',
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
        name: 'What is key person insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Key person insurance is a life insurance policy that a business purchases on the life of a key employee or executive whose death or disability would cause significant financial loss to the company. It helps maintain business operations and protects company value.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does key person insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Key person insurance typically starts at $150 per month for basic coverage. The cost varies based on the key employee\'s age, health, role in the company, and the coverage amount needed to protect your business.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who should be covered by key person insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Key person insurance should cover employees whose loss would significantly impact your business, including founders, top executives, key salespeople, specialized technical staff, or anyone whose skills, relationships, or knowledge are critical to operations.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much key person insurance coverage do I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Coverage amounts typically range from 5-10 times the key person\'s annual compensation, but should be based on their actual value to the business including revenue generation, replacement costs, and potential business disruption.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'life Insurance',
  title: 'Key Person Insurance',
  description: 'Protect your business from the financial impact of losing a key employee or executive with specialized coverage designed for business continuity.',
  image: '/images/mature-man-key-person-insurance.jpg',
  imageAlt: 'senior woman life insurance',
  cta: { href: '/contact', label: 'Get a Quote' }
}
const benefits = [
  'Financial protection for unexpected loss of critical personnel',
  'Coverage for costs related to replacing key employees',
  'Maintain business stability during transition periods',
  'Protect company value and investor confidence',
  'Customized coverage based on employee value to organization',
  'Tax-advantaged business protection strategy'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Customized to your needs',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Life Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Personalized assessment of key employee value',
  'Coverage options based on revenue impact of key personnel',
  'Easy application and underwriting process',
  'Benefit amounts tailored to business size and needs',
  'Flexible premium payment schedules',
  'Business-owned policy structure',
  'Options for additional coverage riders',
  'Regular policy reviews as business grows'
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