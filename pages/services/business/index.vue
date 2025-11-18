<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs
              currentPageTitle="Business Insurance"
              parentTitle="Services"
              parentUrl="/services"
            />

            <Hero :hero="hero" />
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Main Content -->
          <div class="w-full md:w-2/3 flex flex-col gap-8">



            <!-- Business Insurance Services Grid -->
            <section class="grid md:grid-cols-2 gap-6">
              <ServiceCard
                title="General Liability Insurance"
                description="Essential business protection against third-party claims and lawsuits."
                link="/services/business/general-liability"
                icon="lucide:shield"
              />
              <ServiceCard
                title="Professional Liability Insurance"
                description="Errors & omissions coverage for professional services and consultants."
                link="/services/business/professional-liability"
                icon="lucide:briefcase"
              />
              <ServiceCard
                title="Workers Compensation"
                description="Mandatory coverage for employee injuries and workplace accidents."
                link="/services/business/workers-comp"
                icon="lucide:hard-hat"
              />
              <ServiceCard
                title="Commercial Property Insurance"
                description="Protection for your business property, equipment, and inventory."
                link="/services/business/commercial-property"
                icon="lucide:building-2"
              />
              <ServiceCard
                title="Commercial Auto Insurance"
                description="Vehicle coverage for business cars, trucks, and commercial fleets."
                link="/services/business/commercial-auto"
                icon="lucide:truck"
              />
            </section>

          </div>

          <!-- Sidebar -->
          <aside class="w-full md:w-1/3">
            <StillHaveQuestions />
          </aside>
        </div>
      </div>
    </main>
    <CallToAction />
  </PatternSection>
</template>

<script setup>
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/business-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Business Insurance Solutions — Amerus Financial',
  description: 'Comprehensive business insurance including general liability, workers comp, commercial property, and professional liability. Protect your business with Amerus.',
  image: '/images/business-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/business',
  type: 'website'
})

useSeoMeta({
  title: 'Business Insurance Solutions',
  ogTitle: 'Business Insurance Coverage — Amerus',
  description:
    'Comprehensive business insurance including general liability, workers comp, commercial property, and professional liability. Protect your business with Amerus.',
  ogDescription:
    'Complete business insurance solutions including liability protection, workers compensation, commercial property, and professional liability coverage.',
  ogImage: '/images/business-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/business',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Business Insurance Solutions — Amerus',
  twitterDescription:
    'Complete business insurance solutions including liability protection, workers compensation, commercial property, and professional liability coverage.',
  twitterImage: '/images/business-insurance.jpg',
  keywords: 'business insurance, commercial insurance, general liability, workers compensation, commercial property insurance, professional liability, business protection, commercial coverage'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/business/'
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
    author: 'Business Owner Patricia',
    rating: 5,
    review: 'Excellent business insurance package with comprehensive coverage. Great service team that understands our commercial needs.',
    date: '2024-10-15'
  },
  {
    author: 'Company Director Mark',
    rating: 5,
    review: 'Outstanding business insurance solutions. From general liability to workers comp, they have all our commercial coverage needs covered.',
    date: '2024-09-28'
  },
  {
    author: 'Small Business Owner Lisa',
    rating: 4,
    review: 'Reliable business insurance with good coverage options and competitive rates. Professional service throughout the process.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Business Assessment',
    text: 'Evaluate your business operations, industry risks, and insurance requirements to determine coverage needs.',
    image: '/images/business-assessment.jpg'
  },
  {
    name: 'Coverage Selection',
    text: 'Choose from general liability, workers comp, commercial property, and professional liability coverage options.',
    image: '/images/business-coverage-selection.jpg'
  },
  {
    name: 'Policy Customization',
    text: 'Customize your business insurance package with appropriate limits, deductibles, and additional protections.',
    image: '/images/business-policy-custom.jpg'
  },
  {
    name: 'Coverage Activation',
    text: 'Activate your comprehensive business insurance package for complete commercial protection.',
    image: '/images/business-coverage-activate.jpg'
  }
], 'How to Get Business Insurance', 'Step-by-step guide to getting comprehensive business insurance coverage.', 'PT25M', '250.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Business Insurance Solutions',
    provider: serviceProvider,
    description: 'Comprehensive business insurance including general liability, workers compensation, commercial property, and professional liability coverage.',
    serviceType: 'Insurance',
    category: 'Business Insurance',
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
      description: 'Business insurance package starting at $250 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Business Insurance Solutions',
    description: 'Comprehensive business insurance including general liability, workers compensation, commercial property, and professional liability.',
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
        name: 'What types of business insurance do I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most businesses need general liability insurance, and many also require workers compensation, commercial property, and professional liability coverage depending on their industry and operations.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does business insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Business insurance costs vary based on industry, business size, location, and coverage types. A basic package typically starts around $250 per month for small businesses.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is business insurance required by law?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Workers compensation is required in most states if you have employees. Other coverage types may be required by contracts, leases, or licensing authorities, and are recommended for business protection.'
        }
      },
      {
        '@type': 'Question',
        name: 'What does general liability insurance cover for businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'General liability insurance covers third-party claims for bodily injury, property damage, personal injury, and advertising injury that occur during business operations.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Insurance Services',
  title: 'Business Insurance Solutions',
  description: 'Protect your business with comprehensive commercial insurance coverage. From liability protection to workers compensation, secure your business against potential risks.',
  image: '/images/Business-Solutions.jpg',
  imageAlt: 'business insurance coverage',
  cta: { href: '/contact', label: 'Get Business Insurance Quote' }
}
</script>