<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Medicare Solutions"
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
useResourceHints(['/images/medicare-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Medicare Insurance Plans & Supplements — Amerus Financial',
  description: 'Navigate Medicare with confidence. Find Medicare Advantage, Supplement, and Part D prescription drug plans with expert guidance.',
  image: '/images/medicare-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/health/medicare',
  type: 'website'
})

useSeoMeta({
  title: 'Medicare Insurance Plans & Supplements',
  ogTitle: 'Medicare Insurance Plans & Supplements — Amerus',
  description:
    'Navigate Medicare with confidence. Find Medicare Advantage, Supplement, and Part D prescription drug plans with expert guidance.',
  ogDescription:
    'Medicare insurance plans including Medicare Advantage, Medicare Supplement (Medigap), and Part D prescription drug coverage for seniors.',
  ogImage: '/images/medicare-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/health/medicare',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Medicare Insurance Plans & Supplements — Amerus',
  twitterDescription:
    'Medicare insurance plans including Medicare Advantage, Medicare Supplement (Medigap), and Part D prescription drug coverage for seniors.',
  twitterImage: '/images/medicare-insurance.jpg',
  keywords: 'medicare insurance, medicare advantage, medicare supplement, medigap, part D, prescription drug plans, senior health insurance, medicare guidance'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/health/medicare/'
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
    author: 'Robert Johnson, Age 67',
    rating: 5,
    review: 'Excellent Medicare guidance and support. They helped me choose the perfect Medicare Advantage plan with great benefits.',
    date: '2024-10-15'
  },
  {
    author: 'Mary Williams, Age 72',
    rating: 5,
    review: 'Outstanding Medicare supplement insurance. Fills the gaps in original Medicare perfectly and affordable monthly premiums.',
    date: '2024-09-28'
  },
  {
    author: 'James Davis, Age 69',
    rating: 4,
    review: 'Great Medicare Part D prescription coverage. Saves me hundreds on medications and excellent customer service.',
    date: '2024-09-20'
  },
  {
    author: 'Linda Thompson, Age 74',
    rating: 5,
    review: 'Professional Medicare enrollment assistance. Made the complex Medicare process simple and found the best plan for my needs.',
    date: '2024-08-10'
  },
  {
    author: 'Charles Rodriguez, Age 65',
    rating: 5,
    review: 'Perfect Medicare guidance for new retiree. They explained all options clearly and helped me enroll during my initial enrollment period.',
    date: '2024-07-22'
  }
], 4.8)

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Understand Medicare Basics',
    text: 'Learn about Medicare Parts A, B, C, and D, and determine which coverage options best meet your healthcare needs.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Compare Medicare Plans',
    text: 'Review Medicare Advantage, Medicare Supplement, and Part D plans available in your area with our specialists.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Enrollment',
    text: 'Enroll in your chosen Medicare plan during your enrollment period with guided assistance through the process.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Medicare Benefits',
    text: 'Once enrolled, your Medicare coverage begins and you can start using your healthcare benefits and prescription drug coverage.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Enroll in Medicare', 'Step-by-step guide to understanding and enrolling in Medicare insurance coverage.', 'PT30M', '150.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Medicare Insurance Plans',
    provider: serviceProvider,
    description: 'Medicare insurance plans including Medicare Advantage, Medicare Supplement, and Part D prescription drug coverage for seniors starting at $150.',
    serviceType: 'Insurance',
    category: 'Health Insurance',
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
      description: 'Medicare insurance plans starting at $150 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Medicare Insurance Plans',
    description: 'Medicare insurance plans including Medicare Advantage, Medicare Supplement, and Part D prescription drug coverage for seniors.',
    category: 'Insurance',
    brand: {
      '@type': 'Brand',
      name: 'Amerus Financial'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '5'
    },
    // Expand reviewData into review array with proper @type Review objects
    review: reviewData.reviews
  },
  
  // FAQ Schema for better SERP features
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between Medicare Advantage and Medicare Supplement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medicare Advantage (Part C) replaces Original Medicare with private insurance, while Medicare Supplement (Medigap) works alongside Original Medicare to cover gaps like deductibles and copayments.'
        }
      },
      {
        '@type': 'Question',
        name: 'When can I enroll in Medicare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can first enroll during your Initial Enrollment Period (3 months before to 3 months after turning 65). Annual Open Enrollment runs October 15 - December 7 for plan changes.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does Medicare cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medicare Part A is free for most people. Part B costs $174.70/month in 2024. Medicare Advantage and Supplement plans vary, typically ranging from $0-$400+ monthly depending on coverage.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need Medicare Part D prescription drug coverage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medicare Part D is optional but recommended if you take prescription medications. Delaying enrollment may result in late enrollment penalties unless you have creditable coverage.'
        }
      }
    ]
  },

  // HowTo Schema for enrollment process
  howToSteps
])


const hero = {
  eyebrow: 'Health Insurance',
  title: 'Medicare Insurance Plans & Supplements',
  description: 'Expert guidance for navigating your Medicare options with personalized support for your healthcare needs.',
  image: '/images/medicare-insurance.jpg',
  imageAlt: 'dental insurance',
  cta: { href: '/contact', label: 'Contact a Medicare Specialist' }
}
const benefits = [
  "Comprehensive coverage for hospital stays and doctor visits",
  "Help with prescription drug costs",
  "Coverage for preventive services and screenings",
  "Protection against high out-of-pocket medical expenses",
  "Options to fill gaps in Original Medicare coverage",
  "Access to a network of healthcare providers"
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
  'Medicare Advantage (Part C) plans with additional benefits',
  'Medicare Supplement (Medigap) options to reduce costs',
  'Prescription Drug Plans (Part D) for medication coverage',
  'Special Needs Plans for specific conditions',
  'Free enrollment assistance and consultation',
  'Year-round support for your Medicare questions'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Contact a Medicare Specialist'
  }
}
</script>