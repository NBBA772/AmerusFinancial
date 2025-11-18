<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Final Expense Insurance"
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
useResourceHints(['/images/final-expense-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useEnhancedMetaTags({
  title: 'Final Expense Life Insurance — Amerus Financial',
  description: 'Affordable final expense life insurance to cover funeral costs and end-of-life expenses. Guaranteed approval options available for seniors with simplified underwriting.',
  image: '/images/final-expense-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/life/final-expense',
})

useSeoMeta({
  title: 'Final Expense Life Insurance',
  ogTitle: 'Final Expense Insurance for End-of-Life Costs — Amerus',
  description:
    'Affordable final expense insurance covering funeral costs. Guaranteed approval with no medical exam starting at $35/month.',
  ogDescription:
    'Secure final expense insurance to ease the financial burden on your family with affordable coverage for funeral and burial costs.',
  ogImage: '/images/final-expense-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/life/final-expense',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Final Expense Insurance for End-of-Life Costs — Amerus',
  twitterDescription:
    'Secure final expense insurance to ease the financial burden on your family with affordable coverage for funeral and burial costs.',
  twitterImage: '/images/final-expense-insurance.jpg',
  keywords: 'final expense insurance, burial insurance, funeral insurance, end of life insurance, senior life insurance, guaranteed acceptance, final expense coverage, affordable burial insurance'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/life/final-expense/'
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
    review: 'Excellent final expense insurance that gave us peace of mind knowing funeral costs are covered. The application process was simple and approval was fast.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great value for final expense coverage. No medical exam required and the guaranteed acceptance option was perfect for my health situation.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good final expense policy that covers burial costs. Reasonable premiums and the customer service team was very helpful throughout the process.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our insurance specialists for a personalized final expense insurance quote based on your age, health, and coverage needs.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Choose Coverage',
    text: 'Select your final expense coverage amount from $5,000 to $25,000 and choose between simplified issue or guaranteed acceptance options.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the simple application with basic health questions. Most applicants require no medical exam for final expense coverage.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your final expense insurance will be activated and your beneficiaries will have coverage for funeral and burial costs.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Apply for Final Expense Insurance', 'Step-by-step guide to applying for final expense insurance coverage with Amerus Financial.', 'PT15M', '35.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Final Expense Life Insurance',
    provider: serviceProvider,
    description: 'Affordable final expense life insurance to cover funeral costs and end-of-life expenses with guaranteed approval options and simplified underwriting starting at $35 monthly.',
    serviceType: 'Insurance',
    category: 'Life Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '35.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Final expense insurance starting at $35 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Final Expense Life Insurance',
    description: 'Affordable final expense life insurance to cover funeral costs and end-of-life expenses with guaranteed approval options.',
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
        name: 'What does final expense insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Final expense insurance covers funeral costs, burial expenses, cremation fees, memorial services, outstanding medical bills, and other end-of-life expenses to ease the financial burden on your loved ones.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does final expense insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Final expense insurance typically starts at $35 per month for basic coverage. The cost varies based on your age, health status, coverage amount ($5,000-$25,000), and whether you choose simplified issue or guaranteed acceptance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a medical exam for final expense insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most final expense insurance policies require no medical exam. Simplified issue plans only require answering basic health questions, while guaranteed acceptance plans have no health questions at all.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who can apply for final expense insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Final expense insurance is typically available for adults aged 45-85. Guaranteed acceptance options are available for those with health issues who might not qualify for traditional life insurance.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'life Insurance',
  title: 'Final Expense Insurance',
  description: 'Providing peace of mind for you and your loved ones with coverage for funeral costs and end-of-life expenses.',
  image: '/images/seniors-final-expense.jpg',
  imageAlt: 'senior final expense insurance',
  cta: { href: '/contact', label: 'Speak with a Specialist' }
}
const benefits = [
  'Covers funeral costs and end-of-life expenses',
  'Simplified application process with minimal health questions',
  'Guaranteed acceptance options for those with health issues',
  'Fixed premiums that never increase over time',
  'Coverage that never expires as long as premiums are paid',
  'Peace of mind knowing your loved ones won\'t face financial burden'
]
const info = [
  {
    title: 'Coverage Amount',
    text: '$5,000 to $25,000',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'life Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
 'Simplified Issue Coverage with easy application process',
 'Guaranteed Issue Options regardless of health status',
 'Fast Approval Process with quick policy issuance',
 'Flexible Coverage Amounts from $5,000 to $25,000',
 'No medical exam for most applicants',
 'Funds can be used for any expenses your beneficiaries face'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'GSpeak with a Specialist'
  }
}
</script>