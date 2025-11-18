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
            


            <!-- Section with background and blue header .-->
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
useResourceHints(['/images/professional-liability-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Professional Liability Insurance (E&O) — Amerus Financial',
  description: 'Protect your professional practice from errors and omissions claims with comprehensive professional liability insurance coverage.',
  image: '/images/professional-liability-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/business/professional-liability',
  type: 'website'
})

useSeoMeta({
  title: 'Professional Liability Insurance (E&O)',
  ogTitle: 'Professional Liability Insurance — Amerus',
  description:
    'Protect your professional practice from errors and omissions claims with comprehensive professional liability insurance coverage.',
  ogDescription:
    'Professional liability (E&O) insurance protecting professionals from claims of negligence, errors, and omissions in their services.',
  ogImage: '/images/professional-liability-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/business/professional-liability',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Professional Liability Insurance — Amerus',
  twitterDescription:
    'Professional liability (E&O) insurance protecting professionals from claims of negligence, errors, and omissions in their services.',
  twitterImage: '/images/professional-liability-insurance.jpg',
  keywords: 'professional liability insurance, errors and omissions insurance, E&O insurance, professional indemnity, malpractice insurance, professional coverage'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/business/professional-liability/'
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
    author: 'Dr. Amanda Mitchell',
    rating: 5,
    review: 'Essential protection for my medical practice. Professional liability coverage gives me peace of mind knowing I\'m protected against malpractice claims.',
    date: '2024-10-15'
  },
  {
    author: 'James Parker, CPA',
    rating: 5,
    review: 'Comprehensive E&O coverage for my accounting firm. Claims handling was professional and the coverage protected my business reputation.',
    date: '2024-09-28'
  },
  {
    author: 'Sarah Williams, Attorney',
    rating: 4,
    review: 'Solid professional liability coverage with competitive rates. The policy covers both negligence and errors in professional services.',
    date: '2024-09-20'
  },
  {
    author: 'Robert Davis, Consultant',
    rating: 5,
    review: 'Outstanding protection for my consulting business. The coverage includes legal defense costs which is crucial for professional services.',
    date: '2024-08-10'
  },
  {
    author: 'Lisa Thompson, Architect',
    rating: 5,
    review: 'Professional indemnity insurance that actually works. Had a claim and the insurance company handled everything professionally and quickly.',
    date: '2024-07-22'
  }
], 4.8)

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Assess Professional Risks',
    text: 'Evaluate your professional services and identify potential liability exposures specific to your industry.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Get Coverage Quote',
    text: 'Contact our business insurance specialists for a professional liability insurance quote tailored to your practice.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Submit Application',
    text: 'Complete the professional liability application with details about your services, revenue, and claims history.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Secure Protection',
    text: 'Once approved, your professional liability coverage protects against errors, omissions, and negligence claims.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Get Professional Liability Insurance', 'Step-by-step guide to securing professional liability (E&O) insurance coverage for your business.', 'PT20M', '200.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Professional Liability Insurance',
    provider: serviceProvider,
    description: 'Professional liability (E&O) insurance protecting businesses from claims of errors, omissions, and professional negligence with coverage starting at $200.',
    serviceType: 'Insurance',
    category: 'Business Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '200.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Professional liability insurance starting at $200 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Professional Liability Insurance',
    description: 'Professional liability (E&O) insurance protecting businesses from claims of errors, omissions, and professional negligence.',
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
        name: 'What does professional liability insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional liability insurance covers claims of errors, omissions, negligence, and mistakes in professional services. It includes legal defense costs, settlements, and judgments arising from professional practice.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who needs professional liability insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professionals providing services or advice need E&O coverage, including doctors, lawyers, accountants, consultants, architects, engineers, and other service providers who could face negligence claims.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does professional liability insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional liability insurance costs vary by profession and risk level, typically starting around $200 per month. Factors include industry, revenue, claims history, and coverage limits.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between E&O and general liability?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional liability (E&O) covers professional mistakes and negligence in services, while general liability covers bodily injury and property damage. Most businesses need both types of coverage.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Business Insurance',
  title: 'Professional Liability Insurance',
  description: 'Protect your professional services with comprehensive E&O coverage against negligence claims and service errors.',
  image: '/images/professional-liability-insurance.jpg',
  imageAlt: 'professional liability insurance',
  cta: { href: '/contact', label: 'Get E&O Quote' }
}

const benefits = [
  'Protection against professional negligence claims',
  'Coverage for errors and omissions in services',
  'Legal defense cost coverage',
  'Reputation and practice protection',
  'Regulatory compliance support',
  'Peace of mind for professional services'
]

const info = [
  {
    title: 'Coverage Amount',
    text: 'Customized professional limits',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Professional Liability Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Errors and omissions coverage for professional mistakes',
  'Legal defense cost protection included',
  'Professional negligence claims coverage',
  'Regulatory proceeding defense coverage',
  'Loss of documents and data restoration',
  'Prior acts coverage for retroactive protection'
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