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
useResourceHints(['/images/general-liability-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'General Liability Insurance for Business — Amerus Financial',
  description: 'Protect your business from lawsuits and claims with comprehensive general liability insurance. Get coverage for bodily injury, property damage, and more.',
  image: '/images/general-liability-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/business/general-liability',
  type: 'website'
})

useSeoMeta({
  title: 'General Liability Insurance for Business',
  ogTitle: 'General Liability Insurance — Amerus',
  description:
    'Protect your business from lawsuits and claims with comprehensive general liability insurance. Get coverage for bodily injury, property damage, and more.',
  ogDescription:
    'Business general liability insurance covering bodily injury, property damage, personal injury, and advertising injury claims against your business.',
  ogImage: '/images/general-liability-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/business/general-liability',
  twitterCard: 'summary_large_image',
  twitterTitle: 'General Liability Insurance — Amerus',
  twitterDescription:
    'Business general liability insurance covering bodily injury, property damage, personal injury, and advertising injury claims against your business.',
  twitterImage: '/images/general-liability-insurance.jpg',
  keywords: 'general liability insurance, business liability, commercial liability, business insurance, liability coverage, bodily injury coverage, property damage insurance, business protection'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/business/general-liability/'
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
    author: 'Mark Stevens',
    rating: 5,
    review: 'Outstanding general liability coverage for our construction business. Claims were handled professionally and rates are very competitive.',
    date: '2024-10-08'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 5,
    review: 'Excellent business liability insurance with comprehensive coverage. Great customer service and quick response to our questions.',
    date: '2024-10-01'
  },
  {
    author: 'James Wilson',
    rating: 4,
    review: 'Reliable general liability protection for our retail business. Good coverage options and professional service throughout.',
    date: '2024-09-22'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Business Risk Assessment',
    text: 'Evaluate your business operations and identify potential liability risks to determine appropriate coverage needs.',
    image: '/images/business-risk-assessment.jpg'
  },
  {
    name: 'Coverage Selection',
    text: 'Choose general liability coverage limits for bodily injury, property damage, and personal injury protection.',
    image: '/images/liability-coverage-selection.jpg'
  },
  {
    name: 'Policy Review',
    text: 'Review your general liability policy terms, exclusions, and additional coverage options with our specialists.',
    image: '/images/liability-policy-review.jpg'
  },
  {
    name: 'Coverage Activation',
    text: 'Activate your general liability insurance for immediate protection against third-party claims and lawsuits.',
    image: '/images/liability-activation.jpg'
  }
], 'How to Get General Liability Insurance', 'Step-by-step guide to getting general liability insurance for your business.', 'PT20M', '150.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'General Liability Insurance',
    provider: serviceProvider,
    description: 'Comprehensive general liability insurance protecting businesses from third-party claims of bodily injury, property damage, and personal injury.',
    serviceType: 'Insurance',
    category: 'General Liability Insurance',
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
      description: 'General liability insurance starting at $150 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'General Liability Insurance',
    description: 'Comprehensive general liability insurance protecting businesses from third-party claims and lawsuits.',
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
        name: 'What does general liability insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'General liability insurance covers third-party claims for bodily injury, property damage, personal injury, and advertising injury. It protects your business from lawsuits and provides legal defense costs.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does general liability insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'General liability insurance costs vary based on business type, size, location, and coverage limits. Basic coverage typically starts around $150 per month for small businesses.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need general liability insurance for my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'General liability insurance is essential for most businesses. It protects against costly lawsuits and is often required by clients, landlords, and licensing authorities before doing business.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between general liability and professional liability?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'General liability covers bodily injury and property damage claims. Professional liability covers errors, omissions, and negligence in professional services. Many businesses need both types of coverage.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Business Insurance',
  title: 'General Liability Insurance',
  description: 'Essential protection for your business against third-party claims of bodily injury, property damage, and personal injury.',
  image: '/images/general-liability-insurance-slip-and-fall.jpg',
  imageAlt: 'slip and fall accident at a business',
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