<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Split Dollar Life Insurance"
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
useResourceHints(['/images/split-dollar-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Split Dollar Life Insurance — Amerus Financial',
  description: 'Create a strategic partnership where both employer and employee share the benefits and costs of a life insurance policy as part of an executive benefit strategy.',
  image: '/images/split-dollar-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/life/split-dollar',
  type: 'website'
})

useSeoMeta({
  title: 'Split Dollar Life Insurance',
  ogTitle: 'Executive Split Dollar Life Insurance — Amerus',
  description:
    'Expert split dollar life insurance solutions sharing costs between employer & employee. Strategic executive benefits with tax advantages.',
  ogDescription:
    'Discover split dollar life insurance arrangements that allow employers and executives to share premium costs and benefits for strategic executive compensation and retention.',
  ogImage: '/images/split-dollar-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/life/split-dollar',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Executive Split Dollar Life Insurance — Amerus',
  twitterDescription:
    'Discover split dollar life insurance arrangements that allow employers and executives to share premium costs and benefits for strategic executive compensation and retention.',
  twitterImage: '/images/split-dollar-insurance.jpg',
  keywords: 'split dollar life insurance, executive benefits, employer shared premiums, executive compensation, split dollar arrangements, executive retention, business life insurance, executive life insurance'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/life/split-dollar/'
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
    review: 'Excellent split dollar arrangement that helped us attract and retain our top executive. The shared premium structure works perfectly for both our company and the employee.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great value for executive benefits. The split dollar life insurance provides significant life insurance coverage while allowing cost sharing between company and executive.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good split dollar program that enhanced our executive compensation package. The flexible arrangement structure met both our business objectives and executive needs.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Assess Executive Needs',
    text: 'Work with our specialists to evaluate your executive benefit objectives and determine if split dollar life insurance aligns with your compensation strategy.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Design Agreement',
    text: 'Create a customized split dollar arrangement specifying premium sharing, benefit allocation, and agreement terms between employer and executive.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Structure Policy',
    text: 'Establish the life insurance policy with appropriate ownership structure, whether endorsement method or collateral assignment approach.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Implement Program',
    text: 'Once approved, your split dollar life insurance arrangement will be activated providing executive benefits while sharing costs between parties.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Implement Split Dollar Life Insurance', 'Step-by-step guide to establishing split dollar life insurance arrangements for executive benefits with Amerus Financial.', 'PT30M', '200.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Split Dollar Life Insurance',
    provider: serviceProvider,
    description: 'Strategic split dollar life insurance arrangements for executive benefits where employers and employees share premium costs and policy benefits with customized programs starting at $200 monthly.',
    serviceType: 'Insurance',
    category: 'Executive Benefits',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '200.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Split dollar life insurance arrangements starting at $200 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Split Dollar Life Insurance',
    description: 'Strategic split dollar life insurance arrangements for executive benefits where employers and employees share premium costs and policy benefits.',
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
        name: 'What is split dollar life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Split dollar life insurance is an arrangement where an employer and employee share the costs and benefits of a life insurance policy. The employer typically pays part or all of the premiums while the employee receives life insurance coverage and may access policy benefits.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much do split dollar arrangements cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Split dollar life insurance arrangements typically start at $200 per month for executive-level coverage. Costs vary based on the executive\'s age, health, coverage amount, and the specific cost-sharing structure negotiated between employer and employee.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the benefits of split dollar life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Split dollar arrangements provide executive retention benefits, shared premium costs, potential tax advantages, flexible agreement structures, supplemental retirement benefits, and significant life insurance coverage for key employees.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who is eligible for split dollar life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Split dollar life insurance is typically offered to key executives, highly compensated employees, or business owners as part of an executive benefit strategy. Eligibility is determined by the employer and is often used for retention and compensation purposes.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Life Insurance',
  title: 'Split Dollar Life Insurance',
  description: 'Create a strategic partnership where both employer and employee share the benefits and costs of a life insurance policy as part of an executive benefit strategy.',
  image: '/images/employer-employee-split-dollar.jpg',
  imageAlt: 'employer employee split dollar life insurance',
  cta: { href: '/contact', label: 'Discuss Split Dollar Options' }
}
const benefits = [
  'Cost-sharing arrangement between employer and employee',
  'Selective benefit for key executives only',
  'Customizable to meet specific business objectives',
  'Potential for tax advantages for both parties',
  'Can help with executive retirement planning',
  'Powerful tool for executive retention',
  'Flexible agreement structures to suit your needs'
]
const info = [
  {
    title: 'Coverage Amount',
    text: 'Customized to your needs',
    icon: 'lucide:badge-dollar-sign'
  },
  {
    title: 'Protection Type',
    text: 'Life Insurance',
    icon: 'lucide:shield'
  },
  {
    title: 'Application Process',
    text: 'Simple 15-minute consultation',
    icon: 'lucide:clock'
  }
]
const features = [
  'Endorsement and collateral assignment methods available',
  'Permanent life insurance with cash value accumulation',
  'Ability to recover costs for the business',
  'Employee access to death benefit protection',
  'Custom vesting schedules can be established',
  'Potential supplemental retirement benefits',
  'Clear documentation and agreement templates',
  'Regular policy and agreement reviews'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Discuss Split Dollar Options'
  }
}
</script>