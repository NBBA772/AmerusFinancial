<template>
  <PatternSection>
     <HomepageHeroSection />
    <div class="container mx-auto px-4">
      <!-- Header Section with Animation -->
      <div class="text-center py-16">
        <Breadcrumbs
          currentPageTitle="Health Insurance Glossary"
            parentTitle="Resources"
            parentUrl="/resources"
        />
        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#30BCFE] to-[#2563eb] rounded-full mb-6 animate-pulse">
          <Icon name="lucide-book-open" class="h-10 w-10 text-white" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
          Health Insurance Glossary
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Navigate Health Insurance Terms with Confidence. Our comprehensive glossary helps you understand the complex language of health insurance.
        </p>
      </div>

      <div class="mx-auto">
        <!-- Search Section -->
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12 animate-fade-in-up animation-delay-400">
          <!-- Search Header -->
          <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-8">
            <h3 class="text-xl font-semibold text-white text-center">
              Find Your Term
            </h3>
            <p class="text-white/80 text-center text-sm mt-1">Search our comprehensive database of health insurance terms</p>
          </div>

          <div class="p-8 bg-gradient-to-br from-gray-50 to-white">
            <!-- Search Input -->
            <div class="mb-8 relative group">
              <Icon name="lucide-search" class="absolute ml-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 group-focus-within:text-[#30BCFE] transition-colors duration-300" />
              <input
                v-model="searchQuery"
                type="text"
                class="w-full h-14 px-4 pl-12 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg"
                placeholder="Search for a term or definition..."
              />
            </div>

            <!-- Info Cards (hide when searching) -->
            <Transition name="cards-fade">
              <div v-if="!searchQuery" class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <GlossaryTermCard
                  title="Quick Reference"
                  description="Instantly access definitions of common terms like deductibles, copays, and premiums to help you navigate your policy."
                  icon="lucide-info"
                  bg-class="bg-amber-50"
                  border-class="border-amber-200"
                  icon-color="text-amber-600"
                  class="animate-slide-up animation-delay-100"
                />
                <GlossaryTermCard
                  title="Insurance Basics"
                  description="Learn the essential concepts that form the foundation of how health insurance works in the United States."
                  icon="lucide-library"
                  bg-class="bg-blue-50"
                  border-class="border-blue-200"
                  icon-color="text-blue-600"
                  class="animate-slide-up animation-delay-200"
                />
                <GlossaryTermCard
                  title="Medicare Terms"
                  description="Specific definitions for Medicare-related terms to help seniors understand their healthcare options."
                  icon="lucide-book-open"
                  bg-class="bg-green-50"
                  border-class="border-green-200"
                  icon-color="text-green-600"
                  class="animate-slide-up animation-delay-300"
                />
              </div>
            </Transition>

            <!-- Terms Accordion -->
            <div class="space-y-6">
              <TransitionGroup name="terms-list" tag="div">
                <div v-for="(group, letter) in filteredTerms" :key="letter" class="border-b border-gray-200 pb-6 last:border-0">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 bg-gradient-to-r from-[#30BCFE] to-[#2563eb] rounded-full flex items-center justify-center">
                      <span class="text-2xl font-bold text-white">{{ letter }}</span>
                    </div>
                    <div class="h-px flex-1 bg-gradient-to-r from-[#30BCFE]/20 to-transparent"></div>
                  </div>
                  <div class="space-y-3">
                    <AccordionItem
                      v-for="(item, index) in group"
                      :key="item.term"
                      :term="item.term"
                      :definition="item.definition"
                      :class="`animate-slide-up animation-delay-${(index + 1) * 100}`"
                    />
                  </div>
                </div>
              </TransitionGroup>
            </div>

            <!-- No Results Message -->
            <Transition name="fade">
              <div v-if="searchQuery && Object.keys(filteredTerms).length === 0" class="text-center py-12">
                <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="lucide-search-x" class="h-8 w-8 text-gray-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">No terms found</h3>
                <p class="text-gray-600">Try searching with different keywords</p>
              </div>
            </Transition>
          </div>
        </div>
        
        <div class="animate-fade-in-up animation-delay-600">
          <StillHaveQuestions />
        </div>
      </div>
    </div>
    <CallToAction />
  </PatternSection>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/man-on-phone-looking-at-insurance-terms.jpg'])
usePerformanceMonitoring()

// Consolidated SEO + Social Meta for Health Insurance Glossary
const pageUrl = 'https://www.amerusfinancial.com/resources/health-insurance-glossary'
const pageTitle = 'Health Insurance Glossary & Key Terms'
const pageDescription = 'Clear definitions of common health insurance terms like deductibles, copays, premiums, and networks to help you understand your coverage.'
const pageImage = '/images/man-on-phone-looking-at-insurance-terms.jpg'

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

// Structured Data - WebPage schema for Glossary + Organization reference
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
        { '@type': 'ListItem', position: 3, name: 'Health Insurance Glossary', item: pageUrl }
      ]
    }
  }
])


const searchQuery = ref('')

const terms = {
  A: [
    { term: 'Affordable Care Act (ACA)', definition: "A comprehensive healthcare reform law enacted in March 2010, also known as 'Obamacare.' The law aims to make health insurance more affordable and accessible for all Americans while improving the quality of healthcare and health insurance. "},
    { term: 'Annual Limit', definition: 'A cap on the benefits your insurance company will pay in a year. These caps may be placed on particular services such as prescriptions or hospitalizations.' },
  ],
  C: [
    { term: 'Coinsurance', definition: 'Your share of the costs of a covered healthcare service, calculated as a percentage (for example, 20%) of the allowed amount for the service.' },
    { term: 'Copayment (Copay)', definition: 'A fixed amount (for example, $15) you pay for a covered healthcare service, usually when you receive the service.' },
    { term: 'Covered Services', definition: 'Healthcare services that your health insurance plan has agreed to pay for, as outlined in your policy documents.' },
  ],
  D: [
    { term: 'Deductible', definition: 'The amount you pay for covered healthcare services before your insurance plan starts to pay. For example, with a $2,000 deductible, you pay the first $2,000 of covered services yourself.' },
    { term: 'Dependent', definition: 'A person who relies on another person for support, like a spouse or child, and is covered under that person\'s health insurance plan.' },
  ],
  E: [
    { term: 'Effective Date', definition: 'The date your insurance coverage begins.' },
    { term: 'Exclusions', definition: 'Specific conditions, treatments, or services that your health insurance plan will not cover.' },
  ],
  H: [
    { term: 'Health Insurance Exchange (Marketplace)', definition: 'A state or federal platform where individuals, families, and small businesses can shop for and purchase health insurance coverage, and potentially qualify for subsidies.' },
    { term: 'Health Maintenance Organization (HMO)', definition: 'A type of health insurance plan that typically limits coverage to care from doctors who work for or contract with the HMO. Generally, HMOs require you to select a primary care physician who coordinates your care.' },
  ],
  I: [
    { term: 'In-Network Provider', definition: 'A healthcare provider who has contracted with your health insurance company to provide services at a discounted rate.' },
    { term: 'Insurance Premium', definition: 'The amount you pay to your health insurance company for your coverage, typically on a monthly basis.' },
  ],  
  M: [
    { term: 'Medicaid', definition: 'A state and federal program that provides health coverage for some low-income people, families and children, pregnant women, the elderly, and people with disabilities.' },
    { term: 'Medicare', definition: 'A federal health insurance program for people who are 65 or older, certain younger people with disabilities, and people with End-Stage Renal Disease.' },
  ],  
  O: [
    { term: 'Open Enrollment Period', definition: 'The yearly period when people can enroll in a health insurance plan or change their existing coverage.' },
    { term: 'Out-of-Pocket Maximum', definition: 'The most you have to pay for covered services in a plan year. After you spend this amount on deductibles, copayments, and coinsurance, your health plan pays 100% of the costs of covered benefits.' },
  ],  
  P: [
    { term: 'Pre-existing Condition', definition: 'A health problem you had before the date your new health coverage starts. Under the ACA, health insurance companies can\'t refuse to cover you or charge you more because of a pre-existing condition.' },
    { term: 'Preferred Provider Organization (PPO)', definition: 'A type of health plan that contracts with medical providers to create a network of participating providers. You pay less if you use providers in the network but can use providers outside the network for an additional cost.' },
  ],  
}

const filteredTerms = computed(() => {
  if (!searchQuery.value.trim()) return terms

  const query = searchQuery.value.toLowerCase()
  const result: Record<string, Array<{term: string, definition: string}>> = {}

  for (const [letter, items] of Object.entries(terms)) {
    const matches = items.filter(
      item =>
        item.term.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query)
    )
    if (matches.length > 0) result[letter] = matches
  }

  return result
})
</script>

<style scoped>
/* Animation keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Animation classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.animate-slide-up {
  animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Animation delays */
.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-600 { animation-delay: 0.6s; }

/* Transition animations */
.cards-fade-enter-active, .cards-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.cards-fade-enter-from, .cards-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.terms-list-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.terms-list-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.terms-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.terms-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
