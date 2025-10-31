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
          <LifePolicyTypes v-if="tab.id === 'policy'" />
          
          <!-- Premium Factors Component -->
          <LifeCoverageNeeds v-else-if="tab.id === 'coverage'" />
          
          <!-- Claims Process Component -->
          <LifeCostFactors v-else-if="tab.id === 'cost'" />
          
          <!-- Saving Money Component -->
          <LifeBuyingGuide v-else-if="tab.id === 'buying'" />

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
  title: 'Life Insurance Buyer\'s Guide: Finding the Right Coverage',
  tags: () => ['Policy Types', 'Coverage Needs', 'Costs & Factors', 'Buying Guide'],
  lastUpdated: 'March 15, 2025',
  readingTime: '12 minutes',
  leadText: 'Life insurance is one of the most important financial tools for protecting your loved ones, but understanding the different types of policies and determining how much coverage you need can be complex.',
  description: 'This comprehensive guide will walk you through everything you need to know about life insurance, from understanding the different types of policies to calculating your coverage needs and finding the right policy for your budget and goals.',
  alertTitle: 'Important Note',
  alertText: 'Life insurance needs are unique to each individual\'s situation. While this guide provides general information, we recommend speaking with a qualified insurance agent to find the policy that best meets your specific needs.',
  tabs: () => [
    { id: 'policy', title: 'Policy Types' },
    { id: 'coverage', title: 'Coverage Needs' },
    { id: 'cost', title: 'Costs & Factors' },
    { id: 'buying', title: 'Buying Guide' }
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
    question: 'What happens if I miss a premium payment?',
    answer: 'Most life insurance policies include a grace period (typically 30-31 days) after the due date during which you can make the payment without the policy lapsing. If you don\'t pay within the grace period, your policy may lapse, and you\'ll lose coverage. Some permanent policies may use accumulated cash value to pay premiums if you miss a payment. If your policy lapses, you may be able to reinstate it within a certain timeframe by paying all past-due premiums and possibly undergoing a new medical exam.',
  },
  {
    question: 'Can I have multiple life insurance policies?',
    answer: 'Yes, you can own multiple life insurance policies from different companies. Some people use a strategy called "laddering," which involves purchasing multiple term policies with different expiration dates to match their decreasing insurance needs over time. However, insurance companies do look at your total coverage across all policies during underwriting to ensure you\'re not over-insured relative to your financial situation and needs.',
  },
    {
    question: 'What\'s the difference between simplified issue and fully underwritten policies?',
    answer: 'Fully underwritten policies require a medical exam and detailed health information during the application process. These policies typically offer higher coverage amounts and lower premiums for healthy individuals. <br>Simplified issue policies don\'t require a medical exam but do include a health questionnaire. These policies generally have lower coverage limits (often $500,000 or less) and higher premiums than fully underwritten policies but can be approved more quickly. <br>Guaranteed issue policies don\'t require a medical exam or health questions but offer very limited coverage amounts (typically $25,000 or less) at much higher premium rates. These are typically used by people who can\'t qualify for other types of coverage.',
  },
  {
    question: 'Is employer-provided life insurance enough?',
    answer: 'Employer-provided life insurance is a valuable benefit, but it\'s typically not enough for most people with families or financial obligations. Most group policies offer coverage of 1-2× your annual salary, while experts generally recommend 10-15× your income <br>Additionally, employer-provided coverage usually ends when you leave the job, which could leave you without protection at a time when securing new coverage might be more difficult or expensive due to age or health changes. <br> Consider your employer\'s policy as a supplement to your own individual coverage rather than your primary life insurance.',
  },
    {
    question: 'What\'s a beneficiary and can I change them?',
    answer: 'A beneficiary is the person, trust, or organization designated to receive the death benefit from your life insurance policy. You can name multiple beneficiaries and specify what percentage of the benefit each should receive. <br>It\'s important to name both primary and contingent (backup) beneficiaries. Contingent beneficiaries receive the death benefit if the primary beneficiaries are deceased. <br>Yes, you can change your beneficiaries at any time by submitting a beneficiary change form to your insurance company, unless you\'ve made an irrevocable beneficiary designation (which is uncommon and would require the beneficiary\'s consent to change).',
  },
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