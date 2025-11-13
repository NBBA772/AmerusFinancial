<template>
    <PatternSection>
       <!-- <HomepageHeroSection /> -->
        <div class="container mx-auto py-12 px-4">
            <Breadcrumbs
              currentPageTitle="Resources"
              parentUrl="/services"
            />

            <div class="text-center mb-10">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">Client Resources & Tools</h1>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">Access our collection of calculators, guides, and tools to help you make informed insurance and financial decisions.</p>
            </div>

            <ResourceTabs>
            <template #guides>
                <ResourceCard
                title="Medicare Guide"
                description="A comprehensive guide to understanding Medicare and its different parts."
                link="/resources/medicare-guide"
                icon="lucide:file-text"
                image="/images/medicare-insurance.jpg"
                />
                <ResourceCard
                title="Life Insurance Buyer's Guide"
                description="Learn about different types of life insurance and how to choose the right policy."
                link="/resources/life-insurance-buyers-guide"
                icon="lucide:book"
                image="/images/happy-family-at-home.jpg"
                />
                <ResourceCard
                title="Health Insurance Glossary"
                description="A complete glossary of health insurance terms and definitions."
                link="/resources/health-insurance-glossary"
                icon="lucide:book"
                image="/images/man-on-phone-looking-at-insurance-terms.jpg"
                />
                <!-- <ResourceCard
                title="Business Insurance Tax Guide"
                description="Learn how businesses can save thousands on taxes with strategic insurance planning."
                link="/resources/business-insurance-guide"
                icon="lucide:briefcase"
                :features="['Tax Strategies','Group Benefits','Save Thousands','Implementation Guide']"
                isNew
                image="/images/going-over-taxes.jpg"
                /> -->
                <ResourceCard
                title="Auto Insurance Guide"
                description="A comprehensive guide to auto insurance coverage, rates, claims, and money-saving tips."
                link="/resources/auto-insurance-guide"
                icon="lucide:car"
                :features="['Coverage Options','Premium Factors','Claims Process','Money-Saving Tips']"
                isNew
                image="/images/friends-driving-insured-car.jpg"
                />
                <ResourceCard
                title="Retirement Planning Checklist"
                description="An interactive checklist to track your retirement planning progress through every life stage."
                link="/resources/retirement-planning-checklist"
                icon="lucide:calendar"
                :features="['Interactive Tracking','Age-Based Guidance','Expert Tips','Progress Tracking']"
                isNew
                image="/images/seniors-planning-retirement.jpg"
                />
            </template>

            <template #blog>
                <p class="text-gray-500 text-center">No blog posts yet.</p>
            </template>
            </ResourceTabs>


            <NeedPersonalizedAssistance />
        </div>
             <CallToAction />
  </PatternSection>
</template>

<script setup lang="ts">
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/contact-og.jpg'])
usePerformanceMonitoring()

// Consolidated SEO + Social Meta for Resources page
const pageUrl = 'https://www.amerusfinancial.com/resources'
const pageTitle = 'Insurance & Financial Resources Hub'
const pageDescription = 'Explore calculators, guides, and tools to make confident insurance and financial decisions. Medicare, life, auto, and retirement resources in one place.'
const pageImage = '/images/amerus-og-default.jpg'

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

// Structured Data - Resources WebPage schema
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
        { '@type': 'ListItem', position: 2, name: 'Resources', item: pageUrl }
      ]
    }
  }
])



</script>

