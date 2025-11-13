<template>
  <PatternSection>
    <HomepageHeroSection />
      <main class="flex-grow">
    <div class="container mx-auto px-4 py-12">
        <Breadcrumbs
            currentPageTitle="Life Insurance Buyer's Guide"
            parentTitle="Resources"
            parentUrl="/resources"
        />
    <div class="mb-6 animate-fade-in-up">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Column: Text Content -->
        <div class="text-center md:text-left">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Life Insurance Buyer's Guide: Finding the Right Coverage</h1>


          <!-- Feature Tags -->
          <div class="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-blue-50 text-blue-600 border-blue-200">
              Policy Types
            </div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-green-50 text-green-600 border-green-200">
              Coverage Needs
            </div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-purple-50 text-purple-600 border-purple-200">
              Costs & Factors
            </div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-amber-50 text-amber-600 border-amber-200">
              Buying Guide
            </div>
          </div>

          <!-- Update and Reading Time -->
        <div class="bg-white/80 p-6 rounded-xl border-2 border-gray-200 mb-8 flex items-start gap-3 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-5 w-5 text-[#30BCFE] mt-0.5">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <div>
            <p class="text-sm text-gray-600">Last updated: March 15, 2025</p>
            <p class="text-sm text-gray-600">Reading time: 12 minutes</p>
          </div>
        </div>

          <p class="text-lg text-gray-600 max-w-3xl mx-auto md:mx-0 mb-6">
           Life insurance is one of the most important financial tools for protecting your loved ones, but understanding the different types of policies and determining how much coverage you need can be complex.
          </p>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto md:mx-0 mb-6">This comprehensive guide will walk you through everything you need to know about life insurance, from understanding the different types of policies to calculating your coverage needs and finding the right policy for your budget and goals.</p>


 

            <div role="alert" class="relative w-full rounded-xl border-2 border-amber-200 p-6 bg-gradient-to-br from-amber-50 to-orange-50 my-6">
            <div class="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert h-6 w-6 text-amber-600 flex-shrink-0 mt-1">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              <div>
                <h5 class="mb-2 font-semibold text-amber-800">Important Note</h5>
                <div class="text-sm text-amber-700 leading-relaxed">Life insurance needs are unique to each individual's situation. While this guide provides general information, we recommend speaking with a qualified insurance agent to find the policy that best meets your specific needs.</div>
              </div>
            </div>
          </div>

        </div>
        <!-- Right Column: Nuxt Image -->
        <div class="flex justify-center md:justify-end">
          <NuxtImg 
            format="webp"
            sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
            quality="80"
            loading="lazy"
            src="/images/happy-family-at-home.jpg" 
            alt="Happy Family at Home" 
            class="rounded-2xl shadow-lg object-cover" 
          />
        </div>
      </div>
    </div>
      <div class="flex flex-col md:flex-row gap-8">
        <LifeGuideContent 
          :title="guideTitle"
          :tabs="guideTabs"
          :faqs="guideFaqs"
        >
          <template #tab-coverage>
            <!-- Custom coverage content -->
          </template>
        </LifeGuideContent>
        
        <LifeGuideSidebar title="Eligibility Requirements" />
      </div>
    </div>
  </main>
    <CallToAction />
  </PatternSection>
</template>

<script setup lang="ts">
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/happy-family-at-home.jpg'])
usePerformanceMonitoring()

// Consolidated SEO + Social Meta for Life Insurance Buyer Guide
const pageUrl = 'https://www.amerusfinancial.com/resources/life-insurance-buyers-guide'
const pageTitle = 'Life Insurance Buyer\'s Guide'
const pageDescription = 'Understand term vs whole vs universal life, calculate coverage needs, and compare cost factors to choose the right life insurance policy.'
const pageImage = '/images/happy-family-at-home.jpg'

useHead({
  title: pageTitle,
  meta: [
    // Basic meta
    { name: 'description', content: pageDescription },

  // Required Open Graph tags
  { property: 'og:type', content: 'article' },
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

// Structured Data - Life Insurance Guide WebPage schema
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
        { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.amerusfinancial.com/resources' },
        { '@type': 'ListItem', position: 3, name: 'Life Insurance Buyer\'s Guide', item: pageUrl }
      ]
    }
  }
])



</script>