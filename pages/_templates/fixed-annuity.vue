<template>
  <PatternSection>
  
    <main class="flex-grow">  
      <FixedAnnuityHero />
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


      <CardGrid 
        title="Commercial Coverages We Offer"
        subheading="Core Business Coverages"
        :cards="[
            { title: 'Commercial General Liability (CGL)', description: 'Protects your business from third-party claims of bodily injury, property damage, and personal/advertising injury.' },
            { title: 'Business Owners Policy (BOP)', description: 'Bundles general liability and property coverage for small to mid-sized businesses at a competitive rate.' },
            { title: 'Commercial Property Insurance', description: 'Covers your building, equipment, inventory, and business personal property from covered losses such as fire, theft, and certain weather events.' },
            { title: 'Commercial Auto Insurance', description: 'Protection for vehicles titled to your business—service trucks, sales vehicles, delivery vans, and more.' },
            { title: 'Workers’ Compensation', description: 'Required in most states; provides wage replacement and medical benefits to employees injured on the job.' },
            { title: 'Commercial Umbrella / Excess Liability', description: 'Adds an extra layer of liability protection above your underlying policies.' }
        ]"
        :columns="3"
        />


        <CardGrid 
          title="Transportation & Trucking"
          :cards="[
              { title: 'Truckers Liability & Physical Damage' },
              { title: 'Motor Carrier & Owner/Operator Coverage' },
              { title: 'Bobtail & Non-Trucking Liability' },
              { title: 'Cargo Coverage', description: 'Protects your clients’ freight while it’s in your care, custody, and control.' }
          ]"
          :columns="2"
        />

      <CardGrid 
        title="Specialty & Industry-Specific Coverages"
        :cards="[
            { title: 'Professional Liability / Errors & Omissions (E&O)' },
            { title: 'Directors & Officers (D&O) Liability' },
            { title: 'Employment Practices Liability (EPLI)' },
            { title: 'Cyber Liability & Data Breach Coverage' },
            { title: 'Garage & Dealer Insurance' },
            { title: 'Contractors & Artisan Trades Coverage' },
            { title: 'Hospitality & Restaurant Programs' },
            { title: 'Commercial Package Policies' },
            { title: 'Special Event & Short-Term Liability Policies' }
        ]"
        :columns="3"
        />

      <!-- Numbered Steps Section -->
      <NumberedSteps title="Industries We Serve" :steps="steps" />

      
      <TwoColumnContent 
        :content="twoColumnSection2"
        backgroundColor="bg-[#F2F8FB]"
        imagePosition="right"
        :showDivider="false"
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

      <div class="w-full mx-auto py-8 md:w-2/3">
        <!-- FAQ Section -->
        <FAQ 
          title="Frequently Asked Questions"
          :faqs="faqData"
        />
    </div>

     
      
    </main>
        <!-- Insurance Provider Logos Row -->
        <div class="w-full mt-12 bg-[#F2F8FB] py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/AmerusLogo.png"
                        alt="Amerus Financial"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/AetnaLogo.png"
                        alt="Aetna"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/UnitedHealthcareLogo.png"
                        alt="UnitedHealthcare"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/ManhattanLifeLogo.png"
                        alt="Manhattan Life"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/HumanaLogo.png"
                        alt="Humana"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/UnitedCondoriaLogo.png"
                        alt="United Condoria"
                        class="h-12 w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    <ReadyToProtectYourBusiness />
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
  title: 'Trusted Experience. <strong>Personalized Service</strong>. Multiple Carrier Options.',
  description: 'At <strong>Amerus Financial Group</strong>, we know every business is different. Whether you\'re a one-truck operation, a growing contractor, or a multi-location company, we design coverage that fits your risks and budget.',
  image: '/images/shot-of-a-group-of-businesspeople-in-a-meeting.png',
  imageAlt: 'Small business group benefits',
  bulletsHeading: 'Quick Highlights:',
  bullets: [
    '<strong>Access to multiple A-rated carriers</strong> so you don\'t overpay for coverage',
    '<strong>Custom policy design</strong> for your business size and industry',
    '<strong>Claims support & advocacy</strong> when you need it most',
    '<strong>Local service with nationwide reach</strong>'
  ],
  postBulletContent: 'One call to Amerus gives you access to multiple carriers and coverage options—without the hassle of shopping around.'
}

const twoColumnSection2 = {
  title: 'How Our <strong>Process Works</strong>',
  image: '/images/business-people-working-with-financial-document.png',
  imageAlt: 'Two or more employees qualify for group benefits',
  bullets: [
    '<strong>Discovery Call –</strong> We learn about your operations, vehicles, employees, and current coverage.',
    '<strong>Market Comparison –</strong>  We shop our carrier partners to find coverage, limits, and pricing that match your needs.',
    '<strong>Coverage Review –</strong>  We walk you through your options in plain language—no jargon.',
    '<strong>Ongoing Support –</strong>  Need to add a vehicle, certificate of insurance, or file a claim? We’re just a phone call or email away.'
  ],
    cta: {
    href: '/contact',        // The link destination
    label: 'Schedule a Commercial Coverage Review'     // The button text
  }
}

const hero = {
  eyebrow: 'Auto Insurance',
  title: 'Protect Your Business. Empower Your Growth.',
  description: 'At Amerus Financial Group, we help small businesses access large-group benefits at a fraction of the cost. Our team of licensed advisors partners with top carriers to create customized benefit packages that fit your company\'s needs — without complicated paperwork or high administrative costs.',
  image: '/images/small-business.png',
  imageAlt: 'auto insurance coverage',
  cta: { href: '/contact', label: 'Get a Personalized Quote' }
}



const steps = [
  {
    icon: 'lucide:rocket',
    title: 'Small Businesses & Startups',
    description: ''
  },
  {
    icon: 'lucide:hard-hat',
    title: 'Contractors & Construction Trades',
    description: ''
  },
  {
    icon: 'lucide:truck',
    title: 'Truckers & Transportation Companies',
    description: ''
  },
  {
    icon: 'lucide:shopping-bag',
    title: 'Retail Stores & Boutiques',
    description: ''
  },
    {
    icon: 'lucide:utensils',
    title: 'Restaurants, Cafés & Food Service',
    description: ''
  },
    {
    icon: 'lucide:briefcase',
    title: 'Professional Offices (Medical, Legal, Financial, etc.)',
    description: ''
  },
    {
    icon: 'lucide:building-2',
    title: 'Property Owners & Real Estate Investors',
    description: ''
  },
    {
    icon: 'lucide:factory',
    title: 'Manufacturers & Wholesalers',
    description: ''
  },
]



const faqData = [
  {
    question: 'What is the difference between collision and comprehensive coverage?',
    answer: 'Collision coverage pays for damage to your vehicle from accidents with other vehicles or objects, regardless of fault. Comprehensive coverage protects against non-collision incidents like theft, vandalism, weather damage, and animal collisions.'
  },
  {
    question: 'Why did my premium increase when I haven\'t had any accidents or tickets?',
    answer: 'Premiums can increase due to factors beyond your control, such as rising claim costs in your area, increased vehicle repair costs, changes in insurance company policies, or adjustments based on updated risk assessments for your demographic or location.'
  },
  {
    question: 'How long do accidents and violations affect my insurance rates?',
    answer: 'Most accidents and moving violations affect your rates for 3-5 years. Minor violations like speeding tickets typically impact rates for 3 years, while major violations like DUI can affect rates for 5-10 years. The exact timeframe varies by state and insurance company.'
  },
  {
    question: 'Is it worth filing a claim for minor damage?',
    answer: 'Consider your deductible and potential rate increases. If repair costs are only slightly higher than your deductible, it may be better to pay out of pocket. Filing a claim can increase your rates for 3-5 years, so calculate the long-term cost impact before deciding.'
  },
  {
    question: 'Does auto insurance cover me when I drive someone else\'s car?',
    answer: 'Generally, auto insurance follows the car, not the driver. The car owner\'s insurance is primary coverage, and your insurance may provide secondary coverage. However, coverage can vary by state and policy terms, so check with your insurer about permissive use coverage.'
  }
]
</script>

<style scoped>
:deep(h2 strong, h3) {
  color: #30BCFE !important;
}
</style>