<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Multi-Vehicle Insurance"
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
useEnhancedMetaTags()
useResourceHints(['/images/multi-vehicle-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Multi-Vehicle Auto Insurance Discounts',
  description: 'Save money with multi-vehicle auto insurance discounts. Insure multiple cars, trucks, and motorcycles under one policy with Amerus.',
  image: '/images/multi-vehicle-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/auto/multi-vehicle',
  type: 'website'
})

useSeoMeta({
  title: 'Multi-Vehicle Auto Insurance Discounts',
  ogTitle: 'Multi-Vehicle Auto Insurance — Amerus',
  description:
    'Save money with multi-vehicle auto insurance discounts. Insure multiple cars, trucks, and motorcycles under one policy with Amerus.',
  ogDescription:
    'Multi-vehicle auto insurance with significant discounts for insuring multiple vehicles under one policy for families and businesses.',
  ogImage: '/images/multi-vehicle-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/auto/multi-vehicle',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Multi-Vehicle Auto Insurance — Amerus',
  twitterDescription:
    'Multi-vehicle auto insurance with significant discounts for insuring multiple vehicles under one policy for families and businesses.',
  twitterImage: '/images/multi-vehicle-insurance.jpg',
  keywords: 'multi vehicle insurance, multi car insurance, fleet insurance, family auto insurance, vehicle discounts, multiple car coverage, auto insurance savings'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/auto/multi-vehicle/'
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
    author: 'Family Driver Tom',
    rating: 5,
    review: 'Great multi-vehicle insurance with amazing discounts. Saved 20% by combining our three cars under one policy.',
    date: '2024-10-15'
  },
  {
    author: 'Parent Jessica',
    rating: 5,
    review: 'Perfect for our family with multiple vehicles. One bill, great savings, and excellent customer service.',
    date: '2024-09-28'
  },
  {
    author: 'Vehicle Owner Mark',
    rating: 4,
    review: 'Good multi-car coverage with solid discounts. Easy to manage all our vehicles under one policy.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Vehicle Inventory',
    text: 'List all vehicles you want to insure including make, model, year, and current coverage for each vehicle.',
    image: '/images/vehicle-inventory.jpg'
  },
  {
    name: 'Compare Savings',
    text: 'Review multi-vehicle discounts and compare savings versus individual policies for each vehicle.',
    image: '/images/multi-vehicle-savings.jpg'
  },
  {
    name: 'Customize Coverage',
    text: 'Choose coverage levels for each vehicle with the flexibility to have different deductibles and limits.',
    image: '/images/customize-coverage.jpg'
  },
  {
    name: 'Activate Policy',
    text: 'Complete your multi-vehicle policy setup and enjoy the convenience of one bill for all vehicles.',
    image: '/images/activate-multi-policy.jpg'
  }
], 'How to Get Multi-Vehicle Insurance', 'Step-by-step guide to getting multi-vehicle insurance discounts and coverage.', 'PT20M', '150.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Multi-Vehicle Auto Insurance',
    provider: serviceProvider,
    description: 'Multi-vehicle auto insurance with significant discounts for insuring multiple cars, trucks, and motorcycles under one convenient policy.',
    serviceType: 'Insurance',
    category: 'Multi-Vehicle Auto Insurance',
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
      description: 'Multi-vehicle auto insurance starting at $150 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Multi-Vehicle Auto Insurance',
    description: 'Multi-vehicle auto insurance with significant discounts for insuring multiple cars, trucks, and motorcycles under one policy.',
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
        name: 'What is multi-vehicle auto insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Multi-vehicle auto insurance allows you to insure multiple cars, trucks, SUVs, and motorcycles under one policy with significant discounts, typically saving 10-25% compared to separate policies.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much can I save with multi-vehicle insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Multi-vehicle insurance typically offers 10-25% discounts for each additional vehicle. The more vehicles you add, the greater your savings, plus you benefit from simplified billing and management.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I have different coverage for each vehicle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, multi-vehicle policies allow different coverage levels, deductibles, and limits for each vehicle based on their value, usage, and your specific needs for each car or truck.'
        }
      },
      {
        '@type': 'Question',
        name: 'What vehicles can be included in a multi-vehicle policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Multi-vehicle policies can include cars, SUVs, trucks, motorcycles, and recreational vehicles owned by household members or family members living at the same address.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Auto Insurance',
  title: 'Multi-Vehicle Insurance',
  description: 'Save money and simplify management by insuring multiple vehicles under one convenient policy with significant discounts.',
  image: '/images/family-with-multi-vehicle-insurance.jpg',
  imageAlt: 'multi-vehicle auto insurance family coverage',
  cta: { href: '/contact', label: 'Get Multi-Car Quote' }
}
const benefits = [
  "Significant discounts on multiple vehicles (10-25% savings)",
  "Convenient single policy management",
  "One bill and one renewal date for all vehicles",
  "Coverage for cars, SUVs, trucks, and motorcycles",
  "Shared deductibles between vehicles",
  "Easy addition or removal of vehicles"
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