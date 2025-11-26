<template>
  <PatternSection>
    <SmallBusinessHero />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          currentPageTitle="Auto Insurance"
          parentTitle="Services"
          parentUrl="/services"
        />
      </div>

      <!-- <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Hero :hero="hero" />
      </div> -->

    
        <TwoColumnContent 
          :content="twoColumnSection1"
          imagePosition="left"
          :showDivider="false"
          :showBackgroundPattern="true"
        />
      

      
      <TwoColumnContent 
        :content="twoColumnSection2"
        backgroundColor="bg-[#F2F8FB]"
        imagePosition="right"
        :showDivider="false"
      />


      <!-- Numbered Steps Section -->
      <NumberedSteps 
        title="Simple. Fast. Transparent." 
        :steps="steps" 
        :ctaButton="{ href: '/contact', label: 'Start My Quote' }"
      />

      <!-- <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <TwoColumnContent 
          :content="{
            title: 'Uninsured Motorist Insurance',
            description: 'Personalized healthcare coverage designed specifically for your unique medical needs and budget.',
            image: '/images/uninsured-motorist-in-car-accident.jpg'
          }"
          imagePosition="right"
          :showDivider="false"
        />
      </div> -->

     
      
    </main>
    <WeWorkForYou />
    <ReadyToSeeOptions />
  </PatternSection>
</template>

<script setup>
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/insured-cars-in-traffic.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Auto Insurance Coverage & Protection',
  description: 'Auto insurance with liability, collision, comprehensive, and uninsured motorist coverage. Get competitive rates and protect your vehicle with Amerus.',
  image: '/images/insured-cars-in-traffic.jpg',
  url: 'https://www.amerusfinancial.com/services/auto',
  type: 'website'
})

useSeoMeta({
  title: 'Auto Insurance Coverage & Protection',
  ogTitle: 'Auto Insurance Coverage — Amerus',
  description:
    'Auto insurance with liability, collision, comprehensive, and uninsured motorist coverage. Get competitive rates and protect your vehicle with Amerus.',
  ogDescription:
    'Auto insurance with liability, collision, comprehensive, and uninsured motorist coverage. Get competitive rates and protect your vehicle with Amerus.',
  ogImage: '/images/insured-cars-in-traffic.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/auto',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Auto Insurance Coverage — Amerus',
  twitterDescription:
    'Auto insurance with liability, collision, comprehensive, and uninsured motorist coverage. Get competitive rates and protect your vehicle with Amerus.',
  twitterImage: '/images/insured-cars-in-traffic.jpg',
  keywords: 'auto insurance, car insurance, vehicle insurance, liability coverage, collision coverage, comprehensive coverage, auto insurance quotes, vehicle protection, auto insurance rates'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/auto/'
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
    author: 'David Martinez',
    rating: 5,
    review: 'Outstanding auto insurance coverage with excellent customer service. Claims were processed quickly and rates are very competitive.',
    date: '2024-10-15'
  },
  {
    author: 'Jennifer Wilson',
    rating: 5,
    review: 'Great auto insurance with comprehensive coverage options. Easy to work with and responsive when I needed help.',
    date: '2024-09-28'
  },
  {
    author: 'Robert Thompson',
    rating: 4,
    review: 'Reliable auto insurance with good coverage and fair pricing. Professional service and quick response times.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Vehicle Information',
    text: 'Provide details about your vehicle including make, model, year, and current coverage to get an accurate auto insurance quote.',
    image: '/images/vehicle-info.jpg'
  },
  {
    name: 'Coverage Selection',
    text: 'Choose your coverage levels for liability, collision, comprehensive, and additional protections based on your needs.',
    image: '/images/coverage-selection.jpg'
  },
  {
    name: 'Review & Compare',
    text: 'Review different auto insurance options with various deductibles and coverage limits to find the best value.',
    image: '/images/auto-compare.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Complete your application and activate your auto insurance coverage with immediate protection for your vehicle.',
    image: '/images/auto-activate.jpg'
  }
], 'How to Get Auto Insurance', 'Step-by-step guide to getting auto insurance coverage with Amerus Financial.', 'PT20M', '100.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Auto Insurance Coverage',
    provider: serviceProvider,
    description: 'Comprehensive auto insurance protection with liability, collision, comprehensive, and specialized coverage options for your vehicle.',
    serviceType: 'Insurance',
    category: 'Auto Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '100.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Auto insurance coverage starting at $100 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Auto Insurance Coverage',
    description: 'Comprehensive auto insurance with liability, collision, comprehensive, and specialized coverage options.',
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
        name: 'What does auto insurance cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Auto insurance covers liability for bodily injury and property damage, collision coverage for vehicle damage, comprehensive coverage for theft and weather damage, and optional coverages like uninsured motorist protection.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does auto insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Auto insurance costs vary based on your vehicle, driving record, location, and coverage levels. Basic auto insurance typically starts around $100 per month with higher rates for comprehensive protection.'
        }
      },
      {
        '@type': 'Question',
        name: 'What factors affect auto insurance rates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Auto insurance rates are affected by your driving record, age, vehicle type, location, credit score, coverage levels, and deductibles. Safe drivers and newer safety features can help reduce premiums.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need full coverage auto insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Full coverage (liability, collision, and comprehensive) is recommended to protect your vehicle and finances. It\'s required if you have a car loan or lease, and provides the best protection against accidents and theft.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

// Two Column Content Sections
const twoColumnSection1 = {
  title: 'The Smarter Way to Offer Benefits',
  description: 'At Amerus Financial Group, we help small businesses access large-group benefits at a fraction of the cost. Our team of licensed advisors partners with top carriers to create customized benefit packages that fit your company\'s needs without complicated paperwork or high administrative costs.',
  image: '/images/small-business.png',
  imageAlt: 'Small business group benefits',
  bulletsHeading: 'Quick Highlights:',
  bullets: [
    'Nationwide doctor and hospital access',
    'PPO, HSA, and level-funded options',
    'Dental, Vision, Life, and Disability add-ons',
    'No referrals or approvals required',
    'Local, dedicated support through Amerus Advisors'
  ]
}

const twoColumnSection2 = {
  title: 'If You Have Two or More Employees, You May Qualify',
  description: 'Many business owners don\'t realize how accessible group health coverage has become. Whether you\'re a startup, family business, or established company, you can enjoy nationwide network access and competitive pricing typically reserved for large corporations.',
  image: '/images/2-or-more-employees.png',
  imageAlt: 'Two or more employees qualify for group benefits',
  bulletsHeading: 'Eligible Businesses Include:',
  bullets: [
    'Small businesses with 2–100 employees',
    'Family-run or partnership-based companies',
    'Contractors and 1099 teams',
    'Nonprofits and ministries'
  ]
}

const hero = {
  eyebrow: 'Auto Insurance',
  title: 'The Smarter Way to Offer Benefits',
  description: 'At Amerus Financial Group, we help small businesses access large-group benefits at a fraction of the cost. Our team of licensed advisors partners with top carriers to create customized benefit packages that fit your company\'s needs — without complicated paperwork or high administrative costs.',
  image: '/images/small-business.png',
  imageAlt: 'auto insurance coverage',
  cta: { href: '/contact', label: 'Get a Personalized Quote' }
}
const benefits = [
  "Liability protection for bodily injury and property damage",
  "Collision coverage for vehicle damage from accidents",
  "Comprehensive coverage for theft, vandalism, and weather damage",
  "Protection against uninsured and underinsured motorists",
  "Medical payments coverage for you and your passengers",
  "Peace of mind knowing you're protected on the road"
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Based on plan selection',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Auto Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Liability coverage required by law',
  'Collision coverage for accidents and damage',
  'Comprehensive coverage for theft and weather',
  'Uninsured motorist protection',
  'Personal injury protection options',
  'Roadside assistance and rental coverage'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Get a Personalized Quote'
  }
}

const steps = [
  {
    icon: 'lucide:file-text',
    title: 'Step 1',
    description: 'Complete a short quote form - takes less than 2 minutes'
  },
  {
    icon: 'lucide:search',
    title: 'Step 2',
    description: 'Compare plan options - Aetna, UHC, Humana, and more'
  },
  {
    icon: 'lucide:check-circle',
    title: 'Step 3',
    description: 'Choose your coverage - tailored to your team\'s needs'
  },
  {
    icon: 'lucide:shield-check',
    title: 'Step 4',
    description: 'We handle the rest - setup, compliance, and renewals'
  }
]

const serviceCards = [
  {
    title: 'Health Insurance',
    description: 'Comprehensive health coverage with nationwide network access and competitive rates for your team.',
    link: '/services/health-insurance'
  },
  {
    title: 'Dental & Vision',
    description: 'Essential dental and vision benefits to keep your employees healthy and productive.',
    link: '/services/dental-vision'
  },
  {
    title: 'Life Insurance',
    description: 'Protect your employees and their families with flexible life insurance options.',
    link: '/services/life-insurance'
  }
]
</script>