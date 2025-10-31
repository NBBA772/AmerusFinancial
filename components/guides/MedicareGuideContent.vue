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
          <MedicareParts v-if="tab.id === 'parts'" />
          
          <!-- Premium Factors Component -->
          <MedicareEligibility v-else-if="tab.id === 'eligibility'" />
          
          <!-- Claims Process Component -->
          <MedicareEnrollment v-else-if="tab.id === 'enrollment'" />
          
          <!-- Saving Money Component -->
          <MedicareCosts v-else-if="tab.id === 'costs'" />

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
  title: 'Medicare Guide: Understanding Your Coverage Options',
  tags: () => ['Coverage Options', 'Premium Factors', 'Claims Process', 'Saving Money'],
  lastUpdated: 'March 15, 2025',
  readingTime: '12 minutes',
  leadText: 'Medicare is a federal health insurance program primarily for people who are 65 or older, certain younger people with disabilities, and people with End-Stage Renal Disease.',
  description: 'Understanding Medicare can be complex, but it\'s essential to make informed decisions about your healthcare coverage. This guide breaks down everything you need to know about Medicare, including eligibility requirements, enrollment periods, different parts of Medicare, costs, and more.',
  alertTitle: 'Important Note',
  alertText: 'Medicare rules and costs are updated annually. The information in this guide is current as of March 2025. For the most up-to-date information, please contact us or visit Medicare.gov.',
  tabs: () => [
    { id: 'parts', title: 'Medicare Parts' },
    { id: 'eligibility', title: 'Eligibility' },
    { id: 'enrollment', title: 'Enrollment' },
    { id: 'costs', title: 'Costs' }
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
    question: 'Do I have to enroll in Medicare when I turn 65?',
    answer: 'If you\'re already receiving Social Security benefits, you\'ll automatically be enrolled in Medicare Parts A and B when you turn 65. If you\'re not receiving Social Security benefits, you need to sign up during your Initial Enrollment Period unless you have qualifying employment-based coverage.'
  },
  {
    question: 'What\'s the difference between Medicare and Medicaid?',
    answer: 'Medicare is a federal health insurance program primarily for people 65 or older, regardless of income. Medicaid is a joint federal and state program that provides health coverage for people with limited income and resources. Some people qualify for both Medicare and Medicaid (dual eligibility).'
  },
  {
    question: 'Does Medicare cover long-term care?',
    answer: 'Medicare does not cover long-term custodial care (help with activities of daily living like bathing and dressing) if that\'s the only care you need. Medicare does cover skilled nursing facility care for a limited time after a qualifying hospital stay, but this is not the same as long-term care.'
  },
  {
    question: 'What is Medigap (Medicare Supplement Insurance)?',
    answer: 'Medigap is private insurance that helps pay some of the healthcare costs that Original Medicare doesn\'t cover, such as copayments, coinsurance, and deductibles. Medigap policies are standardized and must follow federal and state laws. These policies are identified by letters A through N. You must have Medicare Parts A and B to buy a Medigap policy. You cannot have both a Medicare Advantage Plan and a Medigap policy; they cannot work together.'
  },
  {
    question: 'Can I change my Medicare coverage after I\'ve enrolled?',
    answer: 'Yes, you can make changes to your Medicare coverage during specific enrollment periods:<br><br>• The Medicare Open Enrollment Period (October 15 - December 7 each year)<br>• The Medicare Advantage Open Enrollment Period (January 1 - March 31 each year, if you have a Medicare Advantage Plan)<br>• Special Enrollment Periods, if you qualify due to certain events like moving or losing other coverage'
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