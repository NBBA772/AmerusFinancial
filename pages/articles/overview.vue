<template>
  <PatternSection class="flex justify-center w-100">
    <ContentList path="/articles" v-slot="{ list }">
      <div class="flex flex-col justify-center w-100">
        <h1 class="text-4xl font-bold text-center mb-8 dark:text-white">Insurance & Financial Planning Articles</h1>
        <div
          v-for="article in list"
          :key="article._path"
          class="max-w-xl rounded overflow-hidden shadow-xl transition duration-500 hover:scale-110 my-10 p-0 dark:bg-text-white min-h-[180px]"
        >
          <NuxtLink :to="article._path" v-if="article.img">
            <GridTwoColumns>
              <div class="mr-4">
                <NuxtImg 
                class="min-w-64"
                format="webp"
                :src="article.img" 
                sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
                alt="Article Image"
                quality="80"
                loading="lazy"
                />
              </div>
              <div>
                <div class="p-4">
                  <div class="font-bold text-xl mb-2 dark:text-white">
                    {{ article.title }}
                  </div>
                  <p class="text-gray-700 dark:text-white text-base">
                    {{ article.description }}
                  </p>
                </div>
              </div>
            </GridTwoColumns>
          </NuxtLink>
          <NuxtLink :to="article._path" v-else class="h-full">
            <div class="p-4">
              <div class="font-bold text-xl mb-2 dark:text-white">
                {{ article.title }}
              </div>
              <p class="text-gray-700 dark:text-white text-base">
                {{ article.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </ContentList>
  </PatternSection>
</template>

<script setup lang="ts">
// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/contact-og.jpg'])
usePerformanceMonitoring()

// Consolidated SEO + Social Meta for Articles Overview page
const pageUrl = 'https://www.amerusfinancial.com/articles/overview'
const pageTitle = 'Insurance & Financial Articles'
const pageDescription = 'Browse expert articles on insurance, retirement, health, auto, life, and financial planning. Stay informed with actionable insights from Amerus Financial.'
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

// Structured Data - Articles Overview WebPage schema
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
        { '@type': 'ListItem', position: 2, name: 'Articles', item: pageUrl }
      ]
    }
  }
])



</script>