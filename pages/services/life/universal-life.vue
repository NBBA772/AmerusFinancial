<template>
  <PatternSection>
    <main>
      <ContentHero :data="hero" />
      <ContentHeader
      >
        <h2 class="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Universal Life Insurance
        </h2>
        <p class="mt-4 text-slate-600 dark:text-slate-300">
          Universal life insurance offers the flexibility to adjust your premiums and coverage as your life changes, while building cash value through investment options. This permanent life insurance solution adapts to your evolving financial needs.
        </p>
      </ContentHeader>
      <div class="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
        <div>
          <div class="prose prose-lg prose-slate dark:prose-invert max-w-3xl">
            <p class="font-medium text-lg">
              Universal life insurance provides the permanent protection of whole life with the added flexibility to adjust premiums and death benefits as your circumstances change.
            </p>
            <h3>Why Choose Universal Life Insurance?</h3>
            <p>
              Universal life insurance is ideal for those who want permanent life insurance with maximum flexibility. You can increase or decrease your premiums (within limits), adjust your death benefit, and choose from various investment options for your cash value growth.
            </p>
            <p>
              The cash value component grows based on current interest rates or investment performance, potentially offering higher returns than traditional whole life insurance. This makes it an attractive option for those comfortable with some investment risk.
            </p>
            <h3>Flexibility Features</h3>
            <p>
              With universal life insurance, you can skip premium payments using accumulated cash value, increase coverage for major life events, or reduce premiums during tight financial periods. This flexibility makes it easier to maintain your policy throughout changing life circumstances.
            </p>
          </div>
        </div>
        <div class="space-y-8">
          <Alert title="Flexible Premiums" variant="primary">
            Universal life insurance allows you to adjust premium payments within certain limits, skip payments using cash value, or pay extra to accelerate cash value growth.
          </Alert>
          <BaseCard title="Universal Life Benefits" :items="benefits" />
          <BaseCard title="Key Information" :items="info" />
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        <div v-for="(item, index) in features" :key="index" class="text-center">
          <div class="w-12 h-12 bg-primary-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
            <Icon name="lucide:check" size="24" />
          </div>
          <p class="text-slate-600 dark:text-slate-300">{{ item }}</p>
        </div>
      </div>
      <div class="mt-32">
        <StillHaveQuestions :cta="cta" />
      </div>
    </main>
    <CallToAction />
  </PatternSection>
</template>

<script setup>
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/universal-life-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useEnhancedMetaTags({
  title: 'Universal Life Insurance Plans — Amerus Financial',
  description: 'Flexible universal life insurance with investment components and adjustable premiums. Build cash value while protecting your family with customizable coverage.',
  image: '/images/universal-life-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/life/universal-life',
})

useSeoMeta({
  title: 'Universal Life Insurance Plans',
  ogTitle: 'Universal Life Insurance with Investment Options — Amerus',
  description:
    'Flexible universal life insurance with investment components and adjustable premiums. Build cash value while protecting your family with customizable coverage.',
  ogDescription:
    'Discover universal life insurance plans with flexible premiums and investment opportunities for long-term financial growth.',
  ogImage: '/images/universal-life-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/life/universal-life',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Universal Life Insurance with Investment Options — Amerus',
  twitterDescription:
    'Discover universal life insurance plans with flexible premiums and investment opportunities for long-term financial growth.',
  twitterImage: '/images/universal-life-insurance.jpg',
  keywords: 'universal life insurance, permanent life insurance, cash value life insurance, investment life insurance, flexible premiums, life insurance savings, universal life policies, financial planning, retirement planning'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/life/universal-life/'
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
    review: 'Outstanding universal life insurance that provides flexible premium payments and excellent investment growth. The cash value component has performed beyond my expectations.',
    date: '2024-01-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Excellent universal life coverage with investment options that match my risk tolerance. The ability to adjust death benefits and skip payments using cash value is incredibly valuable.',
    date: '2024-01-10'
  },
  {
    author: 'Jessica Williams',
    rating: 4,
    review: 'Great universal life policy that combines permanent protection with investment flexibility. The cash value growth potential makes this perfect for long-term financial planning.',
    date: '2024-01-05'
  },
  {
    author: 'David Rodriguez',
    rating: 5,
    review: 'Premium universal life insurance with multiple investment choices and flexible premiums. The policy has built substantial cash value while providing peace of mind.',
    date: '2023-12-28'
  }
], 'Amerus Financial Universal Life Insurance', 4.7)

// Create how-to steps
const howToData = useHowToSchema([
  {
    name: 'Determine Universal Life Needs',
    text: 'Assess your permanent life insurance needs, investment goals, and desired premium flexibility to determine the right universal life insurance policy structure.',
    url: '#assess'
  },
  {
    name: 'Select Investment Options',
    text: 'Choose from available investment accounts within the universal life policy based on your risk tolerance and growth objectives for cash value accumulation.',
    url: '#compare'
  },
  {
    name: 'Complete Universal Life Application',
    text: 'Submit your universal life insurance application with health information, beneficiary details, and preferred premium payment schedule for underwriting review.',
    url: '#apply'
  },
  {
    name: 'Begin Policy Management',
    text: 'Once approved, your universal life policy becomes active and you can start managing premium payments, monitoring cash value growth, and adjusting coverage as needed.',
    url: '#activate'
  }
], 'How to Get Universal Life Insurance', 'Complete guide to applying for universal life insurance with investment flexibility and adjustable premiums.', 'PT25M', '150.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Universal Life Insurance Plans',
    provider: serviceProvider,
    description: 'Flexible universal life insurance with adjustable premiums and investment options, providing permanent protection with cash value accumulation starting at $150.',
    serviceType: 'Insurance',
    category: 'Universal Life Insurance',
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
      description: 'Universal life insurance policy with investment flexibility starting at $150 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Universal Life Insurance Plans',
    description: 'Flexible universal life insurance with investment components and adjustable premiums, combining protection with cash value growth.',
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
        name: 'What is universal life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Universal life insurance is a permanent life insurance policy that offers flexible premiums and adjustable death benefits, combined with a cash value account that grows through investment options and interest earnings.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does universal life insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Universal life insurance premiums start at $150 per month. The cost depends on your age, health, coverage amount, chosen investment options, and desired premium flexibility within the policy.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I adjust my universal life insurance premiums?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, universal life insurance offers flexible premium payments. You can increase, decrease, or skip payments using accumulated cash value, as long as sufficient funds remain to cover policy charges.'
        }
      },
      {
        '@type': 'Question',
        name: 'What investment options are available in universal life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Universal life insurance typically offers multiple investment accounts ranging from conservative fixed accounts to growth-oriented equity options, allowing you to choose investments that match your risk tolerance and financial goals.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToData
])

const hero = {
  eyebrow: 'Life Insurance',
  title: 'Universal Life Insurance',
  description: 'Flexible permanent life insurance that adapts to your changing financial needs with investment options.',
  image: '/images/senior-woman-life-insurance.jpg',
  imageAlt: 'universal life insurance',
  cta: { href: '/contact', label: 'Get Universal Life Quote' }
}

const benefits = [
  'Flexible premium payments within policy limits',
  'Adjustable death benefit amounts',
  'Multiple investment options available',
  'Cash value growth potential',
  'Tax-deferred accumulation of cash value',
  'Policy loans and withdrawals permitted'
]

const info = [
  {
    title: 'Starting Premium',
    text: 'From $125/month',
    icon: 'lucide:dollar-sign'
  },
  {
    title: 'Coverage Type',
    text: 'Flexible permanent protection',
    icon: 'lucide:shield-check'
  },
  {
    title: 'Cash Value',
    text: 'Investment-based growth potential',
    icon: 'lucide:trending-up'
  }
]

const features = [
  'Flexible premium payment schedules',
  'Investment options to match risk tolerance',
  'Potential for higher cash value returns',
  'Ability to adjust death benefit amounts',
  'Tax-advantaged wealth accumulation',
  'Options for retirement income supplementation'
]

const cta = {
  title: 'Ready for flexible protection?',
  description: 'Get a personalized universal life insurance quote and discover how flexibility can work for your financial goals.',
  primary: {
    href: '/contact',
    label: 'Get Universal Life Quote'
  }
}
</script>