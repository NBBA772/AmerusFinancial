<script setup>
const route = useRoute()
const { data: article } = await useAsyncData('article', () => queryContent(route.params.slug.join('/')).findOne())

// Construct the proper URL from route path
const pageUrl = `https://www.amerusfinancial.com${route.path}`
const pageTitle = article.value?.title ? `${article.value.title} — Amerus Financial` : 'Article — Amerus Financial'
const pageDescription = article.value?.description || 'Read this article from Amerus Financial'
const pageImage = article.value?.img || '/images/amerus-og-default.jpg'

// Consolidated meta tags in single useHead
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
    
    // Article-specific OG tags
    { property: 'article:author', content: article.value?.author || 'Amerus Financial' },
    { property: 'article:published_time', content: article.value?.date },
    
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
</script>

<template>
  <div class="flex justify-center gap-x-12">
    <main
    class="container text-white lg:flex justify-center overflow-hidden dark:text-white py-16 px-4"
  >
  <div>
   <nuxt-link
   class="block cursor-pointer max-w-2xl "
   href="/articles/overview"
 >
   <svg
     xmlns="http://www.w3.org/2000/svg"
     class="inline h-6 w-6"
     fill="none"
     viewBox="0 0 24 24"
     stroke="currentColor"
     stroke-width="2"
   >
     <path
       stroke-linecap="round"
       stroke-linejoin="round"
       d="M11 17l-5-5m0 0l5-5m-5 5h12"
     />
   </svg>
   Back
 </nuxt-link>
 <ContentDoc v-slot="{ doc }">
   <h1 class="text-4xl font-semibold text-black dark:text-white">{{ doc.title }}</h1>
   <p class="text-gray-500 dark:text-white">
     by {{ doc.author }}, {{ doc.date }}
   </p>
   <div class="max-w-4xl"
   >
     <ContentRenderer class="mt-4  max-w-none prose lg:prose-xl dark:prose-invert" :value="doc" />
   </div>
 </ContentDoc>
  </div>
    
  </main>
  </div>

</template>
