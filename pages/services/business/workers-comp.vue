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
            <CTA :cta="cta" />
          </div>

          <!-- Sidebar -->
          <div class="w-full md:w-1/3">
            <BusinessSidebar />
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
useResourceHints(['/images/workers-compensation.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Workers\' Compensation Insurance — Amerus Financial',
  description: 'Protect your employees and business with comprehensive workers\' compensation insurance covering medical expenses and lost wages from workplace injuries.',
  image: '/images/workers-compensation.jpg',
  url: 'https://www.amerusfinancial.com/services/business/workers-comp',
  type: 'website'
})

useSeoMeta({
  title: 'Workers\' Compensation Insurance',
  ogTitle: 'Workers\' Compensation Insurance — Amerus',
  description:
    'Protect your employees and business with comprehensive workers\' compensation insurance covering medical expenses and lost wages from workplace injuries',
  ogDescription:
    'Workers\' compensation insurance protecting employees from workplace injuries and employers from liability claims.',
  ogImage: '/images/workers-compensation.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/business/workers-comp',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Workers\' Compensation Insurance — Amerus',
  twitterDescription:
    'Workers\' compensation insurance protecting employees from workplace injuries and employers from liability claims.',
  twitterImage: '/images/workers-compensation.jpg',
  keywords: 'workers compensation insurance, workers comp, workplace injury insurance, employee protection, employer liability, workplace safety coverage'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/business/workers-comp/'
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
    author: 'David Martinez, Construction Owner',
    rating: 5,
    review: 'Essential coverage for our construction crew. Workers comp protected us when an employee was injured - covered all medical costs and wages.',
    date: '2024-10-15'
  },
  {
    author: 'Jennifer Brown, Restaurant Manager',
    rating: 5,
    review: 'Excellent workers compensation coverage for our restaurant staff. Claims process was smooth and handled everything professionally.',
    date: '2024-09-28'
  },
  {
    author: 'Mark Wilson, Manufacturing Owner',
    rating: 4,
    review: 'Comprehensive coverage for our factory workers. Good rates for manufacturing and excellent safety program support.',
    date: '2024-09-20'
  },
  {
    author: 'Rachel Davis, Office Manager',
    rating: 5,
    review: 'Even office workers need protection. Workers comp covered our employee\'s repetitive stress injury and return-to-work program.',
    date: '2024-08-10'
  },
  {
    author: 'Steve Thompson, Warehouse Supervisor',
    rating: 5,
    review: 'Outstanding workers compensation insurance. Quick claim resolution when warehouse worker injured his back lifting boxes.',
    date: '2024-07-22'
  }
], 4.8)

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Determine Coverage Needs',
    text: 'Assess your workforce size, job classifications, and workplace risks to determine appropriate workers compensation coverage.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Get Workers Comp Quote',
    text: 'Contact our business insurance specialists for a workers compensation quote based on your industry and payroll.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Submit the workers compensation application with employee counts, job descriptions, and safety program details.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Protection',
    text: 'Once approved, your workers compensation coverage protects employees and your business from workplace injury claims.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Get Workers Compensation Insurance', 'Step-by-step guide to securing workers compensation insurance for your business employees.', 'PT25M', '150.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Workers Compensation Insurance',
    provider: serviceProvider,
    description: 'Workers compensation insurance protecting employees from workplace injuries and employers from liability with coverage starting at $150.',
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
      description: 'Workers compensation insurance starting at $150 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Workers Compensation Insurance',
    description: 'Workers compensation insurance protecting employees from workplace injuries and employers from liability.',
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
        name: 'What does workers compensation insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Workers compensation covers medical expenses, lost wages, disability benefits, and rehabilitation costs for employees injured on the job. It also protects employers from lawsuits related to workplace injuries.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is workers compensation insurance required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most states require businesses with employees to carry workers compensation insurance. Requirements vary by state and industry, with some exempting very small businesses or certain worker types.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does workers compensation cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Workers compensation costs vary by industry risk level, payroll size, and claims history. Rates typically range from $150-$500+ per month depending on these factors and state requirements.'
        }
      },
      {
        '@type': 'Question',
        name: 'What happens if I don\'t have workers compensation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Operating without required workers compensation can result in state fines, lawsuits from injured employees, and potential business closure. The financial risk of workplace injuries makes coverage essential.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Business Insurance',
  title: 'Workers Compensation Insurance',
  description: 'Protect your employees and business with comprehensive workers compensation coverage for workplace injuries and employer liability.',
  image: '/images/workers-compensation-insurance-fall-at-work.jpg',
  imageAlt: 'workers compensation insurance',
  cta: { href: '/contact', label: 'Get Workers Comp Quote' }
}

const benefits = [
  'Workplace injury medical coverage',
  'Lost wage replacement for injured employees',
  'Disability benefits for serious injuries',
  'Employer liability protection',
  'Rehabilitation and return-to-work support',
  'Compliance with state requirements'
]

const info = [
  {
    title: 'Coverage Amount',
    text: 'Based on payroll and industry',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Workers Compensation Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Medical coverage for workplace injuries',
  'Lost wage replacement during recovery',
  'Disability benefits for serious injuries',
  'Vocational rehabilitation services',
  'Return-to-work program support',
  'Employer liability protection from lawsuits'
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