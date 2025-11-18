<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Vision Coverage"
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
useResourceHints(['/images/vision-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Vision Insurance Coverage — Amerus Financial',
  description: 'Affordable vision insurance plans covering eye exams, glasses, contact lenses, and frames with extensive provider networks.',
  image: '/images/vision-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/health/vision-coverage',
  type: 'website'
})

useSeoMeta({
  title: 'Vision Insurance Coverage',
  ogTitle: 'Vision Insurance Coverage — Amerus',
  description:
    'Affordable vision insurance plans covering eye exams, glasses, contact lenses, and frames with extensive provider networks.',
  ogDescription:
    'Vision insurance coverage providing eye exam benefits, glasses, contact lenses, and frames through quality vision care networks.',
  ogImage: '/images/vision-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/health/vision-coverage',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Vision Insurance Coverage — Amerus',
  twitterDescription:
    'Vision insurance coverage providing eye exam benefits, glasses, contact lenses, and frames through quality vision care networks.',
  twitterImage: '/images/vision-insurance.jpg',
  keywords: 'vision insurance, eye care coverage, glasses insurance, contact lens coverage, eye exam benefits, vision care plans'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/health/vision-coverage/'
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
    author: 'Jennifer Smith',
    rating: 5,
    review: 'Excellent vision insurance with comprehensive eye care coverage. Annual eye exams are fully covered and great selection of frames.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Johnson',
    rating: 5,
    review: 'Great value for vision coverage. No waiting periods for eye exams and the optometrist network is extensive.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Davis',
    rating: 4,
    review: 'Good vision insurance with reasonable rates. Contact lens coverage is excellent and claim process is smooth.',
    date: '2024-09-20'
  },
  {
    author: 'Robert Wilson',
    rating: 5,
    review: 'Outstanding vision coverage for the whole family. Kids\' eye exams and glasses are fully covered with great frame allowances.',
    date: '2024-08-10'
  },
  {
    author: 'Amanda Chen',
    rating: 5,
    review: 'Perfect vision insurance for my needs. Prescription glasses and contact lenses covered with fast reimbursement.',
    date: '2024-07-22'
  }
], 4.8)

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get Vision Quote',
    text: 'Contact our insurance specialists for a personalized vision insurance quote based on your eye care needs.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Compare Vision Plans',
    text: 'Review different vision insurance options including coverage for exams, glasses, contacts, and provider networks.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the simple vision insurance application with your personal information and coverage preferences.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your vision insurance coverage will be activated and you can start using eye care benefits.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Apply for Vision Insurance', 'Step-by-step guide to applying for vision insurance coverage with Amerus Financial.', 'PT15M', '30.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Vision Insurance Coverage',
    provider: serviceProvider,
    description: 'Vision insurance coverage providing eye exam benefits, glasses, contact lenses, and frames with affordable monthly plans starting at $30.',
    serviceType: 'Insurance',
    category: 'Vision Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '30.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Vision insurance plan starting at $30 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Vision Insurance Coverage',
    description: 'Vision insurance coverage providing eye exam benefits, glasses, contact lenses, and frames.',
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
        name: 'What does vision insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vision insurance typically covers annual eye exams, prescription glasses, contact lenses, and frames. Many plans also provide discounts on laser eye surgery and designer frames.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does vision insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vision insurance plans start at $30 per month for comprehensive coverage. The cost varies based on coverage level, frame allowances, and whether you choose individual or family plans.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there waiting periods for vision insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most vision insurance plans have no waiting periods for eye exams and basic services. Some plans may have short waiting periods for frames and contact lenses.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I choose my own eye doctor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our vision insurance plans provide access to a network of optometrists and ophthalmologists. You can choose from in-network providers for maximum savings or visit out-of-network doctors with different coverage levels.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Health Insurance',
  title: 'Vision Insurance Coverage for Eye Exams, Glasses, and Contacts',
  description: 'Protect your eye health with comprehensive vision insurance that covers exams, glasses, contacts, and more at affordable rates.',
  image: '/images/vision-insurance.jpg',
  imageAlt: 'vision coverage',
  cta: { href: '/contact', label: 'Check Your Vision Coverage Options' }
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
    text: 'Starting at $12/month',
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
  'Annual comprehensive eye exams',
  'Frame allowances - update your glasses regularly',
  'Contact lens fittings and supplies',
  'Discounts on lens enhancements (anti-glare, transitions, etc.)',
  'Additional pairs of glasses at reduced costs',
  'Savings on LASIK and PRK vision correction procedures'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Check Your Vision Coverage Options'
  }
}
</script>