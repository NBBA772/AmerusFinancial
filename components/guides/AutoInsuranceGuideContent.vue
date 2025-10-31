<template>
  <div class="w-full md:w-2/3">
    <!-- Tabs Section -->
    <div class="mb-10">
      <div class="bg-white rounded-xl p-2 shadow-lg border-2 border-gray-200 mb-6">
        <div role="tablist" class="grid grid-cols-2 md:grid-cols-4 gap-2">
          <button 
            v-for="(tab, index) in tabs" 
            :key="tab.id"
            type="button" 
            role="tab" 
            :aria-selected="activeTab === index"
            :aria-controls="`tab-content-${tab.id}`"
            :id="`tab-trigger-${tab.id}`"
            class="px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#30BCFE]/20"
            :class="activeTab === index 
              ? 'bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white shadow-lg transform scale-105' 
              : 'text-gray-600 hover:text-[#30BCFE] hover:bg-gray-50'"
            @click="activeTab = index"
          >
            {{ tab.title }}
          </button>
        </div>
      </div>

      <!-- Tab Content -->
      <div 
        v-for="(tab, index) in tabs" 
        :key="`content-${tab.id}`"
        role="tabpanel" 
        :aria-labelledby="`tab-trigger-${tab.id}`"
        :id="`tab-content-${tab.id}`"
        class="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200"
        :class="{ 'hidden': activeTab !== index }"
      >
        <slot :name="`tab-${tab.id}`" :tab="tab">
          <!-- Coverage Types Component -->
          <CoverageTypes v-if="tab.id === 'coverage'" />
          
          <!-- Premium Factors Component -->
          <PremiumFactors v-else-if="tab.id === 'factors'" />
          
          <!-- Claims Process Component -->
          <ClaimsProcess v-else-if="tab.id === 'claims'" />
          
          <!-- Saving Money Component -->
          <SavingMoney v-else-if="tab.id === 'saving'" />
          
          <!-- Default content for other tabs -->
          <div v-else-if="tab.content" v-html="tab.content"></div>
          <div v-else class="text-gray-600">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ tab.title }}</h3>
            <p>Content for {{ tab.title }} goes here...</p>
          </div>
        </slot>
      </div>
    </div>

    <!-- FAQ Section -->
    <FAQ 
      title="Frequently Asked Questions"
      :faqs="faqData"
    />

    <!-- CTA Section -->
    <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] p-8 rounded-xl shadow-lg">
      <h2 class="text-2xl font-semibold mb-4 text-white">{{ ctaTitle }}</h2>
      <p class="mb-6 text-white/90 text-lg">{{ ctaDescription }}</p>
      <div class="flex flex-wrap gap-4">
        <NuxtLink 
          v-for="button in ctaButtons"
          :key="button.text"
          :to="button.href"
          class="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          :class="button.variant === 'primary' 
            ? 'bg-white text-[#30BCFE] hover:bg-gray-50' 
            : 'border-2 border-white text-white hover:bg-white hover:text-[#30BCFE]'"
        >
          {{ button.text }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FAQ from '../content/FAQ.vue'

interface Tab {
  id: string
  title: string
  content?: string
}



interface CTAButton {
  text: string
  href: string
  variant: 'primary' | 'secondary'
}

interface Props {
  title: string
  tags: string[]
  lastUpdated: string
  readingTime: string
  leadText: string
  description: string
  alertTitle: string
  alertText: string
  tabs: Tab[]
  ctaTitle: string
  ctaDescription: string
  ctaButtons: CTAButton[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Complete Auto Insurance Guide',
  tags: () => ['Coverage Options', 'Premium Factors', 'Claims Process', 'Saving Money'],
  lastUpdated: 'March 28, 2025',
  readingTime: '15 minutes',
  leadText: 'Auto insurance is more than just a legal requirement—it\'s essential financial protection for one of your most valuable assets. Understanding what coverage you need, how premiums are calculated, and what to do when you need to file a claim is crucial for every driver.',
  description: 'This comprehensive guide breaks down everything you need to know about auto insurance, from basic coverage types to strategies for getting the best rates. Whether you\re purchasing your first policy or looking to optimize your current coverage, you\'ll find practical, actionable information to help you make informed decisions.',
  alertTitle: 'Important Note',
  alertText: 'Auto insurance requirements vary by state. While this guide provides general information about auto insurance, be sure to check your state\'s specific minimum requirements and consult with a licensed insurance agent for personalized guidance.',
  tabs: () => [
    { id: 'coverage', title: 'Coverage Types' },
    { id: 'factors', title: 'Premium Factors' },
    { id: 'claims', title: 'Claims Process' },
    { id: 'saving', title: 'Saving Money' }
  ],

  ctaTitle: 'Get Personalized Auto Insurance Guidance',
  ctaDescription: 'Our team of auto insurance specialists can help you navigate your options and find the right coverage for your specific needs and budget.',
  ctaButtons: () => [
    { text: 'Get a Personalized Quote', href: '/contact', variant: 'primary' },
    { text: 'Learn About Our Auto Insurance Services', href: '/services/auto', variant: 'secondary' }
  ]
})

const faqData = [
  {
    question: 'What is the difference between collision and comprehensive coverage?',
    answer: 'Collision coverage pays for damage to your vehicle from accidents with other vehicles or objects, regardless of fault. Comprehensive coverage protects against non-collision incidents like theft, vandalism, weather damage, and animal collisions.'
  },
  {
    question: 'Why did my premium increase when I haven\'t had any accidents or tickets?',
    answer: 'Premiums can increase due to factors beyond your control, such as rising claim costs in your area, increased vehicle repair costs, changes in insurance company policies, or adjustments based on updated risk assessments for your demographic or location.'
  },
  {
    question: 'How long do accidents and violations affect my insurance rates?',
    answer: 'Most accidents and moving violations affect your rates for 3-5 years. Minor violations like speeding tickets typically impact rates for 3 years, while major violations like DUI can affect rates for 5-10 years. The exact timeframe varies by state and insurance company.'
  },
  {
    question: 'Is it worth filing a claim for minor damage?',
    answer: 'Consider your deductible and potential rate increases. If repair costs are only slightly higher than your deductible, it may be better to pay out of pocket. Filing a claim can increase your rates for 3-5 years, so calculate the long-term cost impact before deciding.'
  },
  {
    question: 'Does auto insurance cover me when I drive someone else\'s car?',
    answer: 'Generally, auto insurance follows the car, not the driver. The car owner\'s insurance is primary coverage, and your insurance may provide secondary coverage. However, coverage can vary by state and policy terms, so check with your insurer about permissive use coverage.'
  }
]

const activeTab = ref(0)
const openFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<style scoped>
/* Enhanced animations matching contact form theme */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, #30BCFE, #2563eb);
}

/* Tab button animations */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
}

button:active:not(:disabled) {
  transform: translateY(0) scale(0.98);
}

/* Enhanced card hover effects */
.hover\:border-\[\#30BCFE\]\/50:hover {
  box-shadow: 0 4px 20px rgba(48, 188, 254, 0.15);
}

/* FAQ animation */
.rotate-180 {
  transform: rotate(180deg);
}

/* Stagger animation for FAQ items */
.space-y-4 > div:nth-child(1) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both;
}

.space-y-4 > div:nth-child(2) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

.space-y-4 > div:nth-child(3) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
}

.space-y-4 > div:nth-child(4) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Tab content fade in */
.bg-white.rounded-xl.p-6.shadow-lg.border-2 {
  animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient button hover effects */
.hover\:scale-105:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}





/* Mobile responsiveness */
@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .md\:grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  

}
</style>