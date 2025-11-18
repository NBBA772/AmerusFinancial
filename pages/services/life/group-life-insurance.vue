<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <Breadcrumbs
              currentPageTitle="Group Life Insurance"
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
useResourceHints(['/images/group-life-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Group Life Insurance for Employers — Amerus Financial',
  description: 'Provide essential financial protection for your employees with cost-effective group life insurance that enhances your benefits package and attracts quality talent.',
  image: '/images/group-life-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/life/group-life-insurance',
  type: 'website'
})

useSeoMeta({
  title: 'Group Life Insurance for Employers',
  ogTitle: 'Employee Group Life Insurance Benefits — Amerus',
  description:
    'Cost-effective group life insurance for employees. Enhance benefits package with affordable coverage and attract top talent.',
  ogDescription:
    'Enhance your employee benefits package with group life insurance offering financial protection for your team and their families through affordable employer-sponsored coverage.',
  ogImage: '/images/group-life-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/life/group-life-insurance',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Employee Group Life Insurance Benefits — Amerus',
  twitterDescription:
    'Enhance your employee benefits package with group life insurance offering financial protection for your team and their families through affordable employer-sponsored coverage.',
  twitterImage: '/images/group-life-insurance.jpg',
  keywords: 'group life insurance, employee benefits, employer life insurance, group term life, employee life insurance, business insurance, group benefits, employer-sponsored insurance, employee protection'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/life/group-life-insurance/'
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
    review: 'Excellent group life insurance that helped us attract top talent. The enrollment process was smooth and our employees appreciate the comprehensive coverage for their families.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great value for our employee benefits package. The group rates are affordable and the coverage options allow us to offer different levels based on employee positions.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good group life insurance program that enhanced our benefits offering. Easy administration and our employees value the financial protection for their families.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our group insurance specialists for a customized group life insurance quote based on your company size, industry, and employee demographics.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Design Benefits',
    text: 'Work with our team to design a group life insurance program that fits your budget and meets your employees\' needs with flexible coverage options.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Implement Program',
    text: 'Complete the group application and enrollment process with our support team handling all administrative details and employee communications.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your group life insurance program will be activated and your employees will have immediate access to their life insurance benefits.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Implement Group Life Insurance', 'Step-by-step guide to implementing group life insurance for your employees with Amerus Financial.', 'PT20M', '75.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Group Life Insurance for Employers',
    provider: serviceProvider,
    description: 'Cost-effective group life insurance for employers to provide essential financial protection for employees and their families with customizable benefits packages starting at $75 monthly.',
    serviceType: 'Insurance',
    category: 'Life Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '75.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Group life insurance programs starting at $75 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Group Life Insurance for Employers',
    description: 'Cost-effective group life insurance for employers to provide essential financial protection for employees and their families.',
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
        name: 'What is group life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Group life insurance is employer-sponsored life insurance that provides financial protection for employees and their families. It offers term life coverage at group rates, making it more affordable than individual policies while enhancing your employee benefits package.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does group life insurance cost employers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Group life insurance programs typically start at $75 per month for small businesses. Costs vary based on company size, employee demographics, coverage amounts, and the specific benefits design you choose for your workforce.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the benefits of offering group life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Group life insurance helps attract and retain quality employees, enhances your benefits package, provides financial security for employees\' families, offers cost-effective coverage through group rates, and may provide tax advantages for your business.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much coverage can employees get through group life insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Group life insurance coverage typically ranges from 1-3 times an employee\'s annual salary for basic coverage, with options for supplemental coverage that employees can purchase. Coverage amounts can be customized based on employee position and company budget.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Life Insurance',
  title: 'Group Life Insurance',
  description: 'Provide essential financial protection for your employees\' families with cost-effective group life insurance that enhances your benefits package.',
  image: '/images/employees-families-group-life-insurance.jpg',
  imageAlt: 'employees families group life insurance',
  cta: { href: '/contact', label: 'Enhance Your Benefits Package' }
}
const benefits = [
  'Attract and retain quality employees',
  'Enhance your overall employee benefits package',
  'Provide financial security for employees\' families',
  'Cost-effective coverage through group rates',
  'Potential tax advantages for your business',
  'Easy administration and enrollment process',
  'Flexible coverage options for different employee levels'
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
  'Basic term life coverage for all eligible employees',
  'Optional supplemental coverage employees can purchase',
  'Accidental death and dismemberment options',
  'Waiver of premium during disability periods',
  'Convertibility to individual policies upon leaving',
  'Coverage for dependents available',
  'Multi-tiered benefit structures based on position',
  'Simplified underwriting requirements'
]
const cta = {
  title: 'Ready to get protected?',
  description: 'Speak with our insurance experts to find the right coverage for your needs.',
  primary: {
    href: '/contact',
    label: 'Enhance Your Benefits Package'
  }
}
</script>