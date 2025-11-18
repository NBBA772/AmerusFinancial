<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs
              currentPageTitle="Home Insurance"
              parentTitle="Services"
              parentUrl="/services"
            />

            <Hero :hero="hero" />
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Main Content -->
          <div class="w-full md:w-2/3 flex flex-col gap-8">



            <!-- Home Insurance Services Grid -->
            <section class="grid md:grid-cols-2 gap-6">
              <ServiceCard
                title="Homeowners Insurance"
                description="Comprehensive protection for your home, property, and personal belongings."
                link="/services/home/homeowners"
                icon="lucide:home"
              />
              <ServiceCard
                title="Property Protection"
                description="Coverage for your home's structure against damage from covered perils."
                link="/services/home/property-protection"
                icon="lucide:shield-check"
              />
              <ServiceCard
                title="Additional Living Expenses"
                description="Temporary housing and living expenses when your home is uninhabitable."
                link="/services/home/living-expenses"
                icon="lucide:hotel"
              />
              <ServiceCard
                title="Valuable Items Coverage"
                description="Extra protection for jewelry, art, collectibles, and high-value items."
                link="/services/home/valuable-items"
                icon="lucide:gem"
              />
              <ServiceCard
                title="Property Coverage"
                description="Protection for your personal property and belongings inside your home."
                link="/services/home/property-coverage"
                icon="lucide:package"
              />
              <ServiceCard
                title="Liability Coverage"
                description="Personal liability protection for accidents that occur on your property."
                link="/services/home/liability-coverage"
                icon="lucide:user-shield"
              />
              <ServiceCard
                title="Flood Insurance"
                description="Specialized flood protection through the National Flood Insurance Program."
                link="/services/home/flood-insurance"
                icon="lucide:waves"
              />
            </section>

          </div>

          <!-- Sidebar -->
          <aside class="w-full md:w-1/3">
            <StillHaveQuestions />
          </aside>
        </div>
      </div>
    </main>
    <CallToAction />
  </PatternSection>
</template>

<script setup>
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/home-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Home Insurance Solutions & Coverage — Amerus Financial',
  description: 'Comprehensive home insurance solutions including homeowners, property protection, flood insurance, and liability coverage. Protect your most valuable asset.',
  image: '/images/home-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/home',
  type: 'website'
})

useSeoMeta({
  title: 'Home Insurance Solutions & Coverage',
  ogTitle: 'Home Insurance Solutions — Amerus',
  description:
    'Comprehensive home insurance solutions including homeowners, property protection, flood insurance, and liability coverage. Protect your most valuable asset.',
  ogDescription:
    'Explore home insurance options including homeowners insurance, property protection, flood coverage, liability protection, and valuable items coverage.',
  ogImage: '/images/home-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/home',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Home Insurance Solutions — Amerus',
  twitterDescription:
    'Explore home insurance options including homeowners insurance, property protection, flood coverage, liability protection, and valuable items coverage.',
  twitterImage: '/images/home-insurance.jpg',
  keywords: 'home insurance, homeowners insurance, property protection, flood insurance, liability coverage, valuable items coverage, home protection, property insurance'
})

// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/home/'
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
    review: 'Excellent home insurance coverage with comprehensive protection options. The variety of home insurance plans helped us find perfect coverage for our property.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great home insurance solutions and customer service. Found both homeowners and flood coverage that fits our needs and budget perfectly.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good selection of home insurance plans including property protection. Easy to compare options and get personalized quotes for home coverage.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our insurance specialists for a personalized home insurance quote based on your property protection needs.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Compare Plans',
    text: 'Review different home insurance options including homeowners, property protection, flood, and liability coverage plans.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the simple application form with your property and home information for your chosen plan.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your home insurance coverage will be activated and you can start protecting your property and belongings.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Apply for Home Insurance', 'Step-by-step guide to applying for home insurance coverage with Amerus Financial.', 'PT15M', '120.00')

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Home Insurance Solutions',
    provider: serviceProvider,
    description: 'Comprehensive home insurance coverage including homeowners, property protection, flood, liability, and valuable items coverage with affordable monthly options starting at $120.',
    serviceType: 'Insurance',
    category: 'Home Insurance',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    offers: {
      '@type': 'Offer',
      price: '120.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Home insurance plans starting at $120 per month'
    }
  },
  
  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Home Insurance Solutions',
    description: 'Comprehensive home insurance coverage including homeowners, property protection, flood, liability, and valuable items coverage.',
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
        name: 'What types of home insurance do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer comprehensive home insurance solutions including homeowners insurance, property protection, flood insurance, liability coverage, valuable items coverage, and additional living expenses coverage to meet all your home protection needs.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does home insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Home insurance plans start at $120 per month for homeowners coverage. The cost varies based on the type of coverage, property value, location, and whether you choose individual coverage or bundled home insurance packages.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I get a quote for multiple types of home insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our insurance specialists can provide personalized quotes for homeowners insurance, flood coverage, property protection, liability coverage, and valuable items insurance all in one consultation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you help with flood insurance options?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in flood insurance through the National Flood Insurance Program (NFIP) and private flood insurance options to protect your home from water damage and flooding risks.'
        }
      }
    ]
  },

  // HowTo Schema for application process
  howToSteps
])

const hero = {
  eyebrow: 'Insurance Services',
  title: 'Home Insurance Solutions',
  description: 'Protect your most valuable asset with comprehensive home insurance coverage. From basic homeowners protection to specialized flood insurance, secure your home and belongings.',
  image: '/images/homeowners-insurance.jpg',
  imageAlt: 'home insurance coverage',
  cta: { href: '/contact', label: 'Get Home Insurance Quote' }
}
</script>