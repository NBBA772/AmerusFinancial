<template>
    <PatternSection>
       <HomepageHeroSection />
        <RetirementCalculator />
        <CallToAction />
    </PatternSection>
</template>

<script setup lang="ts">
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/seniors-planning-retirement.jpg'])
usePerformanceMonitoring()

// Consolidated SEO + Social Meta for Retirement page
const pageUrl = 'https://www.amerusfinancial.com/retirement'
const pageTitle = 'Retirement Planning'
const pageDescription = 'Plan for retirement with savings milestones, Social Security and Medicare timing, tax strategies, risk protection, and lifetime income planning.'
const pageImage = '/images/seniors-planning-retirement.jpg'

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

// Structured Data - Retirement WebPage schema
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
                { '@type': 'ListItem', position: 2, name: 'Retirement', item: pageUrl }
            ]
        }
    }
])

</script>