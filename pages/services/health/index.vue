<template>
  <PatternSection>
    <HomepageHeroSection />
    <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs
              currentPageTitle="Health Insurance"
              parentTitle="Services"
              parentUrl="/services"
            />

            <Hero :hero="hero" />
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Main Content -->
          <div class="w-full md:w-2/3 flex flex-col gap-8">

            <!-- SEO Health Insurance Overview Section -->
<section class="flex flex-col gap-6">
  <h2 class="text-3xl font-bold text-gray-900">
    Affordable Health Insurance Plans for Every Need
  </h2>

  <p class="text-gray-700 leading-relaxed">
    At Amerus Financial, we help individuals, families, and businesses compare
    <strong>health insurance plans</strong> from top-rated 
    <strong>health insurance companies</strong>. Whether you're exploring
    options on the <strong>health insurance marketplace</strong> or looking
    for private coverage, our licensed advisors make it simple to find
    <strong>affordable health insurance</strong> that fits your medical needs
    and budget.
  </p>

  <p class="text-gray-700 leading-relaxed">
    Our experts guide you through individual health insurance, family
    coverage, Medicare, dental, vision, and group benefits—ensuring you have
    access to comprehensive healthcare protection, no matter your situation.
    Compare benefits, review premiums, and choose the right health insurance
    plan with confidence.
  </p>

  <ul class="list-disc pl-6 text-gray-700">
    <li>Explore marketplace and private <strong>health insurance plans</strong></li>
    <li>Compare multiple <strong>health insurance companies</strong></li>
    <li>Find budget-friendly and <strong>affordable health insurance</strong></li>
    <li>Get personalized quotes tailored to your coverage needs</li>
    <li>Access expert guidance for the <strong>health insurance marketplace</strong></li>
  </ul>
</section>


            <!-- Health Insurance Services Grid -->
            <section class="grid md:grid-cols-2 gap-6">
              <ServiceCard
                title="Individual Health Insurance"
                description="Personalized healthcare coverage designed for your unique medical needs and budget."
                link="/services/health/individual-health"
                icon="lucide:user"
              />
              <ServiceCard
                title="Family Health Coverage"
                description="Comprehensive health insurance plans to protect your entire family's health and financial security."
                link="/services/health/family-coverage"
                icon="lucide:users"
              />
              <ServiceCard
                title="Group Health Insurance"
                description="Employee health benefits and group coverage solutions for businesses of all sizes."
                link="/services/health/group-health"
                icon="lucide:building"
              />
              <ServiceCard
                title="Medicare Insurance"
                description="Medicare supplement and advantage plans to enhance your Medicare coverage."
                link="/services/health/medicare"
                icon="lucide:heart-pulse"
              />
              <ServiceCard
                title="Dental Insurance"
                description="Comprehensive dental coverage for preventive care, basic and major procedures."
                link="/services/health/dental"
                icon="lucide:smile"
              />
              <ServiceCard
                title="Vision Coverage"
                description="Vision insurance plans covering eye exams, glasses, contacts, and vision care."
                link="/services/health/vision-coverage"
                icon="lucide:eye"
              />
              <ServiceCard
                title="Senior Dental"
                description="Specialized dental insurance plans designed for seniors and Medicare beneficiaries."
                link="/services/health/senior-dental"
                icon="lucide:user-check"
              />
              <ServiceCard
                title="Private Health Insurance"
                description="Private health insurance alternatives to traditional employer-sponsored plans."
                link="/services/health/private-health"
                icon="lucide:shield-check"
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
// Enhanced SEO using stable composposables
useEnhancedMetaTags()
useResourceHints(['/images/health-insurance.jpg'])
usePerformanceMonitoring()

// Enhanced social sharing
useSocialMeta({
  title: 'Health Insurance Plans & Coverage — Amerus Financial',
  description: 'Comprehensive health insurance solutions including individual, family, group, Medicare, dental and vision coverage. Find the right health plan for your needs.',
  image: '/images/health-insurance.jpg',
  url: 'https://www.amerusfinancial.com/services/health',
  type: 'website'
})

useSeoMeta({
  title: 'Health Insurance Plans & Coverage',
  ogTitle: 'Health Insurance Solutions — Amerus',
  description:
    'Comprehensive health insurance solutions including individual, family, group, Medicare, dental and vision coverage. Find the right health plan for your needs.',
  ogDescription:
    'Explore health insurance options including individual plans, family coverage, group health, Medicare supplements, dental and vision insurance.',
  ogImage: '/images/health-insurance.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services/health',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Health Insurance Solutions — Amerus',
  twitterDescription:
    'Explore health insurance options including individual plans, family coverage, group health, Medicare supplements, dental and vision insurance.',
  twitterImage: '/images/health-insurance.jpg',
  keywords:
    'health insurance, health insurance plans, health insurance marketplace, health insurance companies, affordable health insurance, medical coverage, individual health plans, family health insurance, group health, Medicare, dental insurance, vision coverage, health benefits'
})


// 🔥 NEW — secondary semantic keywords
useHead({
  meta: [
    {
      name: 'keywords-secondary',
      content:
        'health insurance marketplace, ACA plans, affordable care coverage, health insurance quotes, compare health plans, private health insurance options, enrollment help'
    }
  ]
})


// optional — add canonical link and enhanced meta tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/health/'
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
    { name: 'theme-color', content: '#30BCFE' },

    // 🔥 NEW — OG marketplace enhancement
    {
      property: 'og:title',
      content: 'Health Insurance Marketplace — Compare Affordable Plans'
    },
    {
      property: 'og:description',
      content:
        'Shop and compare affordable health insurance plans including ACA marketplace plans, private health plans, Medicare, dental and vision coverage.'
    },
    {
      property: 'og:image',
      content: 'https://www.amerusfinancial.com/images/health-insurance-marketplace.jpg'
    },
    {
      property: 'og:url',
      content: 'https://www.amerusfinancial.com/services/health'
    }
  ]
})

// Structured Data - Service Schema with consistent organization
const serviceProvider = useServiceProvider()

// Create review data
const reviewData = useReviewSchema([
  {
    author: 'Sarah Johnson',
    rating: 5,
    review: 'Excellent health insurance coverage with comprehensive benefits. The variety of plans helped us find the perfect coverage for our family.',
    date: '2024-10-15'
  },
  {
    author: 'Michael Chen',
    rating: 5,
    review: 'Great health insurance options and customer service. Found both individual and dental coverage that fits our budget perfectly.',
    date: '2024-09-28'
  },
  {
    author: 'Lisa Rodriguez',
    rating: 4,
    review: 'Good selection of health plans including Medicare supplements. Easy to compare options and get personalized quotes.',
    date: '2024-09-20'
  }
])

// Create how-to steps
const howToSteps = useHowToSchema([
  {
    name: 'Get a Quote',
    text: 'Contact our insurance specialists for a personalized health insurance quote based on your coverage needs.',
    image: '/images/step-1-quote.jpg'
  },
  {
    name: 'Compare Plans',
    text: 'Review different health insurance options including individual, family, group, and Medicare coverage plans.',
    image: '/images/step-2-compare.jpg'
  },
  {
    name: 'Complete Application',
    text: 'Fill out the simple application form with your personal and health information for your chosen plan.',
    image: '/images/step-3-apply.jpg'
  },
  {
    name: 'Activate Coverage',
    text: 'Once approved, your health insurance coverage will be activated and you can start using your benefits.',
    image: '/images/step-4-activate.jpg'
  }
], 'How to Apply for Health Insurance', 'Step-by-step guide to applying for health insurance coverage with Amerus Financial.', 'PT15M', '150.00')


// MAIN SCHEMA
useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Health Insurance Plans',
    provider: serviceProvider,
    description: 'Comprehensive health insurance coverage including individual, family, group, Medicare, dental and vision plans with affordable monthly options starting at $150.',
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
      description: 'Health insurance plans starting at $150 per month'
    }
  },

  // Review/Rating Schema for enhanced SERP display
  {
    '@type': 'Product',
    name: 'Health Insurance Plans',
    description: 'Comprehensive health insurance coverage including individual, family, group, Medicare, dental and vision plans.',
    category: 'Insurance',
    image: {
      '@type': 'ImageObject',
      url: 'https://www.amerusfinancial.com/images/healthcare-family.jpg',
      width: 1200,
      height: 630
    },
    brand: {
      '@type': 'Brand',
      name: 'Amerus Financial'
    },
    offers: {
      '@type': 'Offer',
      price: '150.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.amerusfinancial.com/services/health'
    },
    ...reviewData
  },

  // FAQ Schema
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of health insurance do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer comprehensive health insurance solutions including individual health plans, family coverage, group health insurance for businesses, Medicare supplements, dental insurance, and vision coverage to meet all your healthcare needs.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does health insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Health insurance plans start at $150 per month for individual coverage. The cost varies based on the type of plan, coverage level, deductibles, and whether you choose individual, family, or group coverage.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I get a quote for multiple types of health insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our insurance specialists can provide personalized quotes for individual health insurance, family plans, dental coverage, vision insurance, and Medicare supplements all in one consultation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you help with Medicare insurance options?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in Medicare supplement plans, Medicare Advantage, and Medicare Part D prescription drug coverage to enhance your Medicare benefits and reduce out-of-pocket costs.'
        }
      }
    ]
  },

  // HowTo Schema
  howToSteps,

  // 🔥 NEW — Health Insurance Marketplace Schema
  {
    '@context': 'https://schema.org',
    '@type': 'HealthInsuranceAgency',
    name: 'Amerus Financial Health Insurance Marketplace',
    url: 'https://www.amerusfinancial.com/services/health',
    description:
      'Compare marketplace and private health insurance plans including ACA, individual, family, group, Medicare, dental and vision coverage.',
    image: {
      '@type': 'ImageObject',
      url: 'https://www.amerusfinancial.com/images/health-insurance-marketplace.jpg',
      width: 1200,
      height: 630
    },
    areaServed: 'US',
    offers: {
      '@type': 'OfferCatalog',
      name: 'Health Insurance Marketplace Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          price: '150.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://www.amerusfinancial.com/services/health/individual-health',
          itemOffered: {
            '@type': 'Service',
            name: 'ACA Marketplace Health Plans',
            description: 'Affordable Care Act marketplace health insurance plans with comprehensive coverage',
            provider: {
              '@type': 'Organization',
              name: 'Amerus Financial'
            }
          }
        },
        {
          '@type': 'Offer',
          price: '200.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://www.amerusfinancial.com/services/health/private-health',
          itemOffered: {
            '@type': 'Service',
            name: 'Private Health Insurance',
            description: 'Private health insurance plans with flexible coverage options',
            provider: {
              '@type': 'Organization',
              name: 'Amerus Financial'
            }
          }
        },
        {
          '@type': 'Offer',
          price: '250.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://www.amerusfinancial.com/services/health/family-coverage',
          itemOffered: {
            '@type': 'Service',
            name: 'Family Health Insurance',
            description: 'Comprehensive family health insurance coverage for your entire household',
            provider: {
              '@type': 'Organization',
              name: 'Amerus Financial'
            }
          }
        },
        {
          '@type': 'Offer',
          price: '180.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://www.amerusfinancial.com/services/health/medicare',
          itemOffered: {
            '@type': 'Service',
            name: 'Medicare Supplements & Advantage Plans',
            description: 'Medicare supplement and Medicare Advantage insurance plans',
            provider: {
              '@type': 'Organization',
              name: 'Amerus Financial'
            }
          }
        },
        {
          '@type': 'Offer',
          price: '50.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://www.amerusfinancial.com/services/health/dental',
          itemOffered: {
            '@type': 'Service',
            name: 'Dental Insurance',
            description: 'Comprehensive dental insurance coverage for preventive and major care',
            provider: {
              '@type': 'Organization',
              name: 'Amerus Financial'
            }
          }
        },
        {
          '@type': 'Offer',
          price: '30.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://www.amerusfinancial.com/services/health/vision-coverage',
          itemOffered: {
            '@type': 'Service',
            name: 'Vision Insurance',
            description: 'Vision insurance plans covering eye exams, glasses, and contacts',
            provider: {
              '@type': 'Organization',
              name: 'Amerus Financial'
            }
          }
        }
      ]
    }
  }
])

const hero = {
  eyebrow: 'Insurance Services',
  title: 'Health Insurance Solutions',
  description: 'Comprehensive health insurance plans to protect you and your family. From individual coverage to Medicare supplements, find the right health insurance solution.',
  image: '/images/healthcare-family.jpg',
  imageAlt: 'health insurance coverage',
  cta: { href: '/contact', label: 'Get Health Insurance Quote' }
}
</script>
