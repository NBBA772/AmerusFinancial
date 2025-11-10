<template>
  <PatternSection>
    <HomepageHeroSection />
    <!-- <WhatWeProvideSection /> -->
    <!-- <IndividualAndFamilySolutionsSection /> -->
    <!-- <SeniorSolutionsSection /> -->
    <!-- <WeProvideThePlanCTA /> -->
    <!-- <BusinessSolutionsSection /> -->
    <!-- <JoinTheAmerusFinancialCommunitySection /> -->
     <!-- <ServiceGrid /> -->
      <WhyAmerus />
     <WhoWeServe />
     <TrustedCarriers />
     <InsurancePlanningTools />
    
    <!-- <CustomerReviewSection />
    <ContactSection /> -->
      <section class="py-16 bg-gray-50" id="faq" aria-labelledby="faq-h2">
    <div class="container mx-auto px-4 max-w-3xl">
    <FAQ title="Frequently Asked Questions" :faqs="faqData" />
    </div>
    </section>
    <CallToAction />
  </PatternSection>
</template>

<script setup>
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/contact-og.jpg'])
usePerformanceMonitoring()

// Consolidated SEO + Social Meta for Home page
const pageUrl = 'https://www.amerusfinancial.com/'
const pageTitle = 'Guidance for Life, Health, Auto & Retirement'
const pageDescription = 'Independent insurance guidance for life, health, auto, business and retirement. Compare coverage options and get personalized support.'
const pageImage = 'https://www.amerusfinancial.com/images/amerus-og-default.jpg'

useHead({
  title: pageTitle,
  meta: [
    // Basic meta
    { name: 'description', content: pageDescription },

    // Required Open Graph tags
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:site_name', content: 'Amerus Financial' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:image', content: pageImage },
    { property: 'og:url', content: pageUrl },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: pageImage },
    { name: 'twitter:site', content: '@amerusfinancial' },
    { name: 'twitter:creator', content: '@amerusfinancial' },

    // Technical SEO
    { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
    { name: 'googlebot', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' }
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
    // Performance optimizations
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ]
})

// Structured Data - Home WebPage schema + Organization reference
const organization = useServiceProvider()
useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': pageUrl,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    isPartOf: {
      '@type': 'Website',
      name: 'Amerus Financial',
      url: 'https://www.amerusfinancial.com'
    },
    about: organization,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.amerusfinancial.com/' },
        { '@type': 'ListItem', position: 2, name: 'Home', item: pageUrl }
      ]
    }
  }
])

const faqData = [
  {
    question: 'Do you charge broker fees?',
    answer: 'We are compensated by carriers in most cases. If a fee ever applies, we’ll disclose it upfront in writing.'
  },
  {
    question: 'Can you review my current policies?',
    answer: 'Yes. We offer complimentary policy reviews to identify coverage gaps and potential savings.'
  },
  {
    question: 'Do you serve areas outside Lakeland?',
    answer: 'Yes, we serve clients across Florida and can advise on multi-location needs.'
  }
]
</script>

