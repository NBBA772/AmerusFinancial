<template>
  <PatternSection>
  
    <main class="flex-grow">  
      <FixedAnnuityHero 
        backgroundImage="/images/european-woman-resting-rejoicing.png"
        subHeading=""
        heading="<strong>Safe. Secure. Guaranteed.</strong> Your Retirement Income Starts Here."
        description="<p><strong>FIXED & INDEXED ANNUITIES FOR RETIREMENT PEACE OF MIND</strong> At Amerus Financial Group, we specialize in helping individuals <strong>50 and older</strong> protect their savings, eliminate market risk, and secure guaranteed income for life.</p> <p>Whether you're preparing for retirement or already retired, the right annuity can provide <strong>safety, growth potential, and lifetime income you cannot outlive.</strong></p> <p>We work with <strong>top-rated carriers</strong>, shop multiple companies on your behalf, and help you find the annuity that fits your goals.</p>
"
        />
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          currentPageTitle="Auto Insurance"
          parentTitle="Services"
          parentUrl="/services"
        />
      </div>

      <CardGrid 
          title="Our Most Popular Annuity Solutions"
          :cards="annuityCards"
          :columns="2"
        />

      <!-- <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Hero :hero="hero" />
      </div> -->

        <TwoColumnContent 
          :content="twoColumnSection1"
          imagePosition="left"
          :showDivider="false"
          :showBackgroundPattern="true"
        />

        <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-center">We proudly work with many of the nation’s leading annuity providers: </h2>
        </div>

                <!-- Insurance Provider Logos Row -->
        <div class="w-full bg-[#F2F8FB] py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/aig.png"
                        alt="aig"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/athene.png"
                        alt="athene"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/lincoln.png"
                        alt="lincoln"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/allianz.png"
                        alt="allianz"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/american_equity.png"
                        alt="american equity"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/corebridge.png"
                        alt="corebridge"
                        class="h-12 w-auto object-contain"
                    />
                     <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/ameritass.png"
                        alt="ameritass"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/silac.png"
                        alt="silac"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/oxford.png"
                        alt="oxford"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/north_american.png"
                        alt="north american"
                        class="h-12 w-auto object-contain"
                    />
                     <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/national_western.png"
                        alt="national western"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/global_atlantic.png"
                        alt="global atlantic"
                        class="h-12 w-auto object-contain"
                    />

                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/FG.png"
                        alt="FG"
                        class="h-12 w-auto object-contain"
                    />
                </div>
            </div>
        </div>




      <CardGrid 
        title="What Our Clients Want Most.<br><strong>And how Amerus helps:</strong>"
        subheading=""
        :cards="[
            { title: '“I want income I can’t outlive.”', description: 'We offer lifetime income riders and guaranteed payout options.' },
            { title: '“I can’t afford to lose my retirement again.”', description: 'Every annuity we offer eliminates market losses.' },
            { title: 'I want stability, predictable returns, and safety.”', description: 'MYGAs and Fixed annuities give guaranteed rates for 3–10 years.' },

            { title: '“I want growth… but protected.”', description: 'Fixed Index Annuities give upside potential with no downside.' }
        ]"
        :columns="4"
        />

        <TwoColumnForm 
            :content="{
                title: '📞 Request <strong>Your Free Retirement</strong> Annuity Review. No-obligation. No pressure. <strong>Just clear and honest answers.</strong>',
                bullets: [
                '<strong>Call Us:</strong> 888-441-789',
                '<strong>Email:</strong> info@amerusfinancial.com',
                '<strong>Website:</strong> www.amerusfinancial.com'
                ]
            }"
            formPosition="right"
            formTitle="Request a Quote"
            submitButtonText="Get My Quote"
            backgroundColor="bg-[#F2F8FB]"
            />


      <div class="w-full mx-auto py-8 md:w-2/3">
        <!-- FAQ Section -->
        <FAQ 
          title="Frequently Asked Questions"
          :faqs="faqData"
        />
    </div>

     
      
    </main>

        <ReadyToProtectYourBusiness 
        title="Ready to <strong>Protect Your Retirement?</strong>"
        description="Amerus Financial Group is here to help you make the right decisions for a
        safe, comfortable, and secure future."
        backgroundImage="/images/senior-people-talking-to-each-other.png"
        :showForm="false"
        :button="{ label: 'Click here to get your free customized quote', href: '/contact' }"
        />
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
  title: 'Why Amerus Financial Group? <strong>Because you deserve:</strong>',
  description: 'At <strong>Amerus Financial Group</strong>, we know every business is different. Whether you\'re a one-truck operation, a growing contractor, or a multi-location company, we design coverage that fits your risks and budget.',
  image: '/images/mature-couple-doing-family-finances-at-home.png',
  imageAlt: 'Small business group benefits',
  bulletsHeading: '',
  bullets: [
    'A Real Person Your own licensed advisor—not a call center.',
    'Independent Access We shop <strong>multiple carriers</strong>, ensuring you get the best rate and features.',
    'Safe Retirement Guidance We specialize in clients <strong>50 and older</strong> who want stability.',
    'No Market Losses All annuities we offer have <strong>principal protection.</strong>',
    'Top-Rated Companies We only partner with trusted, reputable carriers.'
  ],
  postBulletContent: ''
}


const annuityCards = ref([
  { 
    title: 'Fixed Index Annuities (FIAs)', 
    description: '<p>Growth tied to the performance of an index—<strong>without market losses, ever.</strong></p><p class="font-semibold mt-4">Perfect for:</p><ul class="list-none space-y-1 mt-2"><li>✔ Those who want upside potential</li><li>✔ Safety-minded investors</li><li>✔ People nearing retirement</li><li>✔ Tax-deferred growth</li></ul><p class="font-semibold mt-4">Benefits:</p><ul class="list-none space-y-1 mt-2"><li>✔ Never lose a penny due to market downturns</li><li>✔ Earn interest based on index performance</li><li>✔ Multiple crediting strategies</li><li>✔ Optional income riders (lifetime payouts)</li><li>✔ Great for rollovers, 401(k)s, IRAs, and transfers</li></ul>' 
  },
  { 
    title: 'Multi-Year Guaranteed Annuities (MYGAs)', 
    description: '<p>A tax-deferred, guaranteed rate—just like a CD, but better.</p><p class="font-semibold mt-4">Perfect for:</p><ul class="list-none space-y-1 mt-2"><li>✔ Safe, predictable growth</li><li>✔ People comparing annuities vs. CDs</li><li>✔ Short- to mid-term goals (3–10 years)</li><li>✔ Short-term and mid-term savings</li></ul><p class="font-semibold mt-4">Benefits:</p><ul class="list-none space-y-1 mt-2"><li>3-year, 5-year, 7-year guaranteed rates</li><li>✔ No market risk</li><li>✔ Tax-deferred growth</li><li>✔Guaranteed annual yield</li><li>✔ Higher rates than most banks</li></ul>' 
  },
  { 
    title: 'Bonus Annuities – Up to 20%', 
    description: '<p>Designed for clients who want <strong>an immediate boost to their retirement nest egg.</strong></p><p class="font-semibold mt-4">Perfect for:</p><ul class="list-none space-y-1 mt-2"><li>✔ Rollovers from 401(k)s or IRAs</li><li>✔ People seeking larger upfront value</li><li>✔ Those wanting income riders or enhanced benefits</li></ul><p class="font-semibold mt-4">Benefits:</p><ul class="list-none space-y-1 mt-2"><li>Up to 20% premium bonus on day one</li><li>✔ Guaranteed lifetime income options</li><li>✔ Market protection + growth potential</li><li>✔ Great for income-focused retirees</li></ul><p>(Bonus levels vary by carrier, age, and product.)</p>' 
  },
    { 
    title: 'Fixed Annuities', 
    description: '<p>A simple, safe, guaranteed solution for secure retirement savings.</p><p class="font-semibold mt-4">Benefits:</p><ul class="list-none space-y-1 mt-2"><li>✔ Guaranteed fixed interest rate</li><li>✔ No market volatility</li><li>✔ Tax-advantaged growth</li><li>✔ Option to convert to lifetime income</li></ul>' 
  },
])

const faqData = [
  {
    question: 'Is my money safe in an annuity?',
    answer: 'Yes. Fixed and indexed annuities are protected from market loss, backed by highly rated insurance companies, and regulated for consumer safety.'
  },
    {
    question: 'What age can I start an annuity?',
    answer: 'Most annuities allow new clients from age 0–85, but the strongest benefits are for ages 50–80, especially for income planning.'
  },
    {
    question: 'Can I lose money in a Fixed or Indexed Annuity?',
    answer: '<strong>No.</strong> You can never lose principal due to market downturns.'
  },
    {
    question: 'Are annuity returns taxable?',
    answer: 'Earnings grow <strong>tax-deferred</strong>, meaning you don’t pay taxes until you withdraw the money.'
  },
    {
    question: 'What’s the difference between a MYGA and a Fixed Index Annuity?',
    answer: '<ul class="space-y-3"><li class="flex items-start gap-3">MYGA: Guaranteed interest rate for a set number of years</li> <li class="flex items-start gap-3">FIA: Interest tied to a market index, with potential for higher returns</li></ul> <p>Both offer safety and principal protection.</p>'
  },
    {
    question: 'Why do some annuities offer a bonus? Is it real?',
    answer: 'Yes. Bonus annuities add a percentage (up to 20%) to your account immediately. These are ideal for income planning, longer surrender periods, or maximizing rollover value.'
  },
    {
    question: 'Can I access my money if needed?',
    answer: '<p>Most annuities offer:</p> <ul class="space-y-3"><li class="flex items-start gap-3">10% free withdrawals per year.</li> <li class="flex items-start gap-3">Waivers for nursing home or terminal illness.</li> <li class="flex items-start gap-3">Full access at the end of the term.</li></ul> <p>Your advisor will explain details for each carrier.</p>'
  },
    {
    question: 'What if I already have an annuity?',
    answer: '<p>We can review it for:</p><ul class="space-y-3"> <li class="flex items-start gap-3">Hidden fees.</li> <li class="flex items-start gap-3">Better rates.</li> <li class="flex items-start gap-3">Better income riders.</li> <li class="flex items-start gap-3">New bonus options.</li></ul> <p>Many clients upgrade to stronger modern products.</p>'
  }
]
</script>

<style scoped>
:deep(h2 strong, h3) {
  color: #30BCFE !important;
}
</style>