<template>
    <section class="bg-white" aria-labelledby="value-props">
  <div class="flex flex-col gap-8">


    <!-- Container for remaining content -->
    <div class="container mx-auto px-4 pb-12">
            <!-- Header Section -->
    <div class="mb-6 animate-fade-in-up">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Column: Text Content -->
        <div class="text-center md:text-left">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Interactive Retirement Planning Checklist</h1>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto md:mx-0 mb-6">
            Track your retirement planning progress and ensure you're taking the right steps at each stage of life. 
            Use this interactive checklist to stay on track toward a secure retirement.
          </p>
          <!-- Feature Tags -->
          <div class="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-blue-50 text-blue-600 border-blue-200">
              Age-Based Guidance
            </div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-green-50 text-green-600 border-green-200">
              Interactive Progress Tracking
            </div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-purple-50 text-purple-600 border-purple-200">
              Comprehensive Planning
            </div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-amber-50 text-amber-600 border-amber-200">
              Expert Tips
            </div>
          </div>
          <!-- Download Button -->
          <div class="flex justify-center md:justify-start gap-4 mt-4">
            <button 
              @click="downloadPDF"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
            >
              <Icon name="lucide-download" class="h-4 w-4" />
              <span>Save as PDF</span>
            </button>
          </div>
        </div>
        <!-- Right Column: Nuxt Image -->
        <div class="flex justify-center md:justify-end">
          <NuxtImg src="/images/seniors-planning-retirement.jpg" alt="Retirement Planning Illustration" class="rounded-2xl shadow-lg object-cover" />
        </div>
      </div>
    </div>
        <!-- How to Use Alert -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4 animate-fade-in-up animation-delay-200">
        <div class="flex gap-4">
            <Icon name="lucide-circle-alert" class="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
            <h5 class="mb-2 font-semibold text-blue-900">How to use this checklist</h5>
            <div class="text-sm text-blue-800 space-y-2">
                <p>Select your current age group to see relevant checklist items. Check off items as you complete them to track your progress.</p>
                <p>Your progress is automatically saved in your browser. For a permanent record, download or print your checklist.</p>
            </div>
            </div>
        </div>
        </div>

        <!-- Progress Overview Card -->
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 mb-8 animate-fade-in-up animation-delay-400">
        <!-- Card Header -->
        <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-8 rounded-t-2xl">
            <div class="flex justify-between items-center">
            <div>
                <h3 class="text-2xl font-semibold text-white">Your Retirement Readiness</h3>
                <p class="text-white/80 text-sm mt-1">Overall progress across all age groups</p>
            </div>
            <button 
                @click="resetProgress"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors duration-300 text-white text-sm"
            >
                <Icon name="lucide-square" class="h-3 w-3" />
                Reset Progress
            </button>
            </div>
        </div>

        <!-- Progress Content -->
        <div class="p-8 bg-gradient-to-br from-gray-50 to-white rounded-b-2xl">
            <div class="space-y-6">
            <!-- Overall Progress -->
            <div>
                <div class="flex justify-between mb-2">
                <span class="text-sm font-semibold text-gray-700">Overall Progress</span>
                <span class="text-sm font-semibold text-[#30BCFE]">{{ overallProgress }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                <div 
                    class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] h-3 rounded-full transition-all duration-700 ease-out"
                    :style="{ width: `${overallProgress}%` }"
                ></div>
                </div>
            </div>

            <!-- Age Group Progress -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div v-for="(group, key) in ageGroups" :key="key">
                <div class="flex justify-between mb-1">
                    <span class="text-xs font-medium text-gray-600">{{ group.label }}</span>
                    <span class="text-xs text-[#30BCFE]">{{ getAgeGroupProgress(key) }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div 
                    class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] h-2 rounded-full transition-all duration-500"
                    :style="{ width: `${getAgeGroupProgress(key)}%` }"
                    ></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- Tabs Navigation -->
        <div class="bg-white rounded-xl p-2 shadow-lg border-2 border-gray-200 mb-6">
        <div class="rounded-xl p-1 grid grid-cols-5 gap-1">
            

            <button 
            v-for="(group, key) in ageGroups"
            :key="key"
            @click="activeTab = key"
            class="px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#30BCFE]/20"
            :class="activeTab === key 
              ? 'bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white shadow-lg transform scale-105' 
              : 'text-gray-600 hover:text-[#30BCFE] hover:bg-gray-50'"
          >
          {{ group.label }}
            </button>
        </div>
        </div>



        <!-- Tab Content -->
        <div class="animate-fade-in-up animation-delay-800">
        <!-- Show content for active tab only -->
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
            <!-- Tab Header -->
            <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-8 rounded-t-2xl">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 class="text-xl font-semibold text-white">{{ ageGroups[activeTab]?.title }}</h3>
                  <p class="text-white/80 text-sm mt-1">{{ ageGroups[activeTab]?.description }}</p>
                </div>
                <!-- Search Bar Floated Right -->
                <div class="w-full md:w-auto">
                  <div class="relative max-w-md md:max-w-xs ml-auto animate-fade-in-up animation-delay-700">
                    <Icon name="lucide-search" class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/80" />
                    <input
                      v-model="searchQuery"
                      type="text"
                      placeholder="Search checklist items..."
                      class="w-full pl-10 pr-4 py-2 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
                    />
                    <button 
                      v-if="searchQuery"
                      @click="searchQuery = ''"
                      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200"
                    >
                      <Icon name="lucide-x" class="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <!-- Checklist Content -->
            <div class="p-8 bg-gradient-to-br from-gray-50 to-white rounded-b-2xl">
            <div v-for="(category, categoryKey) in checklistData" :key="categoryKey" class="mb-8 last:mb-0">
                <!-- Only show category if it has items for this age group -->
                <template v-if="getFilteredItems(categoryKey, activeTab).length > 0">
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-3">
                    <Icon :name="category.icon" :class="`h-16 w-16 ${category.color}`" />
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">{{ category.title }}</h3>
                        <p class="text-sm text-gray-500">{{ getCategoryProgress(categoryKey, activeTab) }}% complete</p>
                    </div>
                    </div>
                    <!-- Category progress bar -->
                    <div class="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                        class="h-full bg-gradient-to-r from-[#30BCFE] to-[#2563eb] transition-all duration-500 ease-out"
                        :style="`width: ${getCategoryProgress(categoryKey, activeTab)}%`"
                    ></div>
                    </div>
                </div>

                <div class="space-y-4 pl-4 border-l-2 border-gray-200">
                    <div 
                    v-for="item in getFilteredItems(categoryKey, activeTab)"
                    :key="item.id"
                    class="flex items-start gap-4 py-2 group hover:bg-blue-50/50 rounded-lg px-3 -mx-3 transition-colors duration-300"
                    >
                    <div class="flex-none pt-1">
                        <button
                        @click="toggleItem(item.id)"
                        :data-item-id="item.id"
                        :class="[
                            'relative h-5 w-5 rounded-md border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#30BCFE] focus:ring-offset-2 flex items-center justify-center',
                            completedItems.has(item.id)
                            ? 'bg-gradient-to-r from-[#30BCFE] to-[#2563eb] border-[#30BCFE] text-white shadow-md transform scale-105'
                            : 'border-gray-300 hover:border-[#30BCFE] hover:bg-blue-50 bg-white shadow-sm'
                        ]"
                        >
                        <Icon 
                            v-if="completedItems.has(item.id)" 
                            name="lucide-check" 
                            class="h-4 w-4 drop-shadow-sm" 
                        />
                        <!-- Unchecked state indicator -->
                        <div 
                            v-else
                            class="w-2 h-2 rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                        </button>
                    </div>
                    <div class="flex-1">
                        <label 
                        :class="[
                            'text-sm font-medium cursor-pointer transition-all duration-300',
                            completedItems.has(item.id) 
                            ? 'line-through text-gray-500' 
                            : 'text-gray-900 group-hover:text-[#30BCFE]'
                        ]"
                        @click="toggleItem(item.id)"
                        >
                        {{ item.title }}
                        <span 
                            :class="[
                            'ml-2 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium',
                            getAgeGroupStyle(item.ageGroup)
                            ]"
                        >
                            {{ ageGroups[item.ageGroup]?.label }}
                        </span>
                        </label>
                        
                        <!-- Expert Tip Toggle Button -->
                        <button 
                        @click="toggleExpertTip(item.id)"
                        :class="[
                            'mt-2 inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full transition-all duration-300',
                            visibleExpertTips.has(item.id)
                            ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        ]"
                        >
                        <Icon name="lucide-lightbulb" class="h-3 w-3" />
                        <span>{{ visibleExpertTips.has(item.id) ? 'Hide' : 'Show' }} Expert Tip</span>
                        </button>
                        
                        <!-- Animated Expert Tip Content -->
                        <transition 
                        enter-active-class="transition-all duration-300 ease-out" 
                        enter-from-class="opacity-0 -translate-y-2 max-h-0" 
                        enter-to-class="opacity-100 translate-y-0 max-h-96"
                        leave-active-class="transition-all duration-200 ease-in" 
                        leave-from-class="opacity-100 translate-y-0 max-h-96" 
                        leave-to-class="opacity-0 -translate-y-2 max-h-0"
                        >
                        <div v-if="visibleExpertTips.has(item.id)" class="mt-3 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-3 rounded-r-lg overflow-hidden">
                            <div class="flex items-start gap-2">
                            <Icon name="lucide-lightbulb" class="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <p class="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">Expert Tip</p>
                                <p class="text-sm text-amber-700">{{ item.description }}</p>
                            </div>
                            </div>
                        </div>
                        </transition>
                    </div>
                    </div>
                </div>
                </template>
            </div>
            </div>
        </div>
                <!-- CTA Section -->
        <div class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 mt-8 animate-fade-in-up animation-delay-1000">
        <div class="flex flex-col md:flex-row gap-6 items-center">
            <div class="flex-1 text-center md:text-left">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Need Personalized Guidance?</h3>
            <p class="text-gray-600 mb-4">
                Our retirement planning specialists can help you analyze your progress and create a customized plan for your specific situation and goals.
            </p>
            <NuxtLink 
                to="/contact"
                class="inline-flex items-center gap-2 bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
                <Icon name="lucide-arrow-right" class="h-4 w-4" />
                <span>Schedule Your Consultation</span>
            </NuxtLink>
            </div>
            
            <div class="flex-none">
            <div class="bg-white/70 rounded-xl p-4 flex gap-6 text-center">
                <div class="flex flex-col items-center">
                <Icon name="lucide-clock" class="h-8 w-8 mb-2 text-[#30BCFE]" />
                <p class="text-sm font-medium text-gray-700">Review Your<br>Timeline</p>
                </div>
                <div class="flex flex-col items-center">
                <Icon name="lucide-piggy-bank" class="h-8 w-8 mb-2 text-[#30BCFE]" />
                <p class="text-sm font-medium text-gray-700">Maximize Your<br>Savings</p>
                </div>
                <div class="flex flex-col items-center">
                <Icon name="lucide-heart" class="h-8 w-8 mb-2 text-[#30BCFE]" />
                <p class="text-sm font-medium text-gray-700">Secure Your<br>Future</p>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>


    </div>
    <!-- End container -->

  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Types
interface ChecklistItem {
  id: string
  title: string
  description: string
  ageGroup: string
}

interface Category {
  title: string
  icon: string
  color: string
  items: ChecklistItem[]
}

interface AgeGroup {
  label: string
  title: string
  description: string
}

// Reactive data
const activeTab = ref('all')
const completedItems = ref(new Set<string>())
const visibleExpertTips = ref(new Set<string>())
const searchQuery = ref('')

// Age groups configuration
const ageGroups: Record<string, AgeGroup> = {
  all: { label: 'All Ages', title: 'Complete Retirement Planning Checklist', description: 'All items across all age groups. Use this view to see your entire retirement planning journey.' },
  '20s-30s': { label: '20s-30s', title: 'Building Your Foundation (20s-30s)', description: 'Essential steps to start your retirement planning journey early.' },
  '40s-50s': { label: '40s-50s', title: 'Accelerating Growth (40s-50s)', description: 'Mid-career strategies to maximize your retirement savings.' },
  '55-65': { label: '55-65', title: 'Pre-Retirement Planning (55-65)', description: 'Critical preparation steps as retirement approaches.' },
  '65+': { label: '65+', title: 'In Retirement (65+)', description: 'Managing your retirement and ensuring long-term security.' }
}

// Checklist data structure
const checklistData: Record<string, Category> = {
  financial: {
    title: 'Financial Foundations',
    icon: 'lucide-building',
    color: 'text-blue-500',
    items: [
      { id: '1-1', title: 'Establish emergency fund (3-6 months of expenses)', description: 'Before focusing on retirement, ensure you have a safety net for unexpected expenses or job loss. Expert tip: Start with just $1,000 as a mini emergency fund, then build to one month of expenses before tackling other goals.', ageGroup: '20s-30s' },
      { id: '1-3', title: 'Pay down high-interest debt (credit cards, personal loans)', description: 'High-interest debt can negate investment returns. Prioritize paying these down quickly. Expert tip: Focus on debt over 7-8% interest rate first, as this often exceeds investment returns after taxes.', ageGroup: '20s-30s' },
      { id: '2-8', title: 'Reassess debt reduction strategies (mortgage, student loans)', description: 'Consider accelerating payments to reduce debt before retirement.', ageGroup: '40s-50s' },
      { id: '3-9', title: 'Pay down outstanding debts before retirement', description: 'Entering retirement debt-free reduces monthly expenses and financial stress.', ageGroup: '55-65' }
    ]
  },
  retirement: {
    title: 'Retirement Accounts',
    icon: 'lucide-piggy-bank',
    color: 'text-green-500',
    items: [
      { id: '1-2', title: 'Begin contributing to employer-sponsored retirement plans (401(k), 403(b))', description: 'At minimum, contribute enough to get any employer match - it\'s free money! Expert tip: Even a 50% match on 6% of salary is an instant 3% salary boost with guaranteed 50% return.', ageGroup: '20s-30s' },
      { id: '1-4', title: 'Open a Roth IRA if eligible', description: 'Tax-free growth and withdrawals make this especially valuable for young investors. Expert tip: If you expect to be in a higher tax bracket in retirement, Roth contributions are especially powerful.', ageGroup: '20s-30s' },
      { id: '2-1', title: 'Review and increase retirement contributions', description: 'As your income grows, increase your retirement savings rate to at least 15-20%.', ageGroup: '40s-50s' },
      { id: '2-3', title: 'Consider catch-up contributions if behind on savings', description: 'Adjust budget to maximize retirement contributions during peak earning years.', ageGroup: '40s-50s' },
      { id: '3-5', title: 'Make catch-up contributions to retirement accounts if eligible', description: 'At age 50+, you can contribute additional amounts to 401(k)s and IRAs.', ageGroup: '55-65' },
      { id: '4-4', title: 'Set up a systematic withdrawal plan from retirement accounts', description: 'Establish regular withdrawals to replace your paycheck, keeping taxes and sustainability in mind.', ageGroup: '65+' },
      { id: '4-5', title: 'Review Required Minimum Distribution (RMD) requirements for traditional retirement accounts', description: 'RMDs must begin at age 72 (or 73 depending on your birth year). Penalties for missing are substantial.', ageGroup: '65+' }
    ]
  },
  investment: {
    title: 'Investment Strategy',
    icon: 'lucide-chart-column',
    color: 'text-purple-500',
    items: [
      { id: '1-6', title: 'Select investment options appropriate for your time horizon (typically more aggressive)', description: 'With decades until retirement, you can typically afford to take on more risk for higher returns.', ageGroup: '20s-30s' },
      { id: '2-4', title: 'Evaluate and adjust investment allocations as needed', description: 'Begin gradually shifting toward a more balanced portfolio as retirement approaches.', ageGroup: '40s-50s' },
      { id: '3-4', title: 'Adjust investment portfolio to more conservative allocations', description: 'Gradually shift to more income-focused investments to reduce risk as retirement approaches.', ageGroup: '55-65' },
      { id: '4-6', title: 'Review and adjust investment portfolio for income generation', description: 'Shift focus from growth to income and capital preservation while maintaining some growth investments.', ageGroup: '65+' }
    ]
  },
  planning: {
    title: 'Retirement Planning',
    icon: 'lucide-calendar',
    color: 'text-amber-500',
    items: [
      { id: '1-5', title: 'Establish a budget that includes retirement savings', description: 'Aim to save 15-20% of your income for retirement. Start with what you can and increase over time.', ageGroup: '20s-30s' },
      { id: '2-2', title: 'Calculate retirement savings goal using retirement calculators', description: 'Determine how much you\'ll need based on desired lifestyle and expected longevity.', ageGroup: '40s-50s' },
      { id: '2-5', title: 'Meet with a financial advisor for mid-career checkup', description: 'Professional advice can help identify gaps and opportunities in your retirement strategy.', ageGroup: '40s-50s' },
      { id: '2-7', title: 'Consider tax diversification strategies (mix of traditional and Roth accounts)', description: 'Having different account types gives you flexibility in managing tax burden during retirement.', ageGroup: '40s-50s' },
      { id: '3-1', title: 'Estimate retirement income needs in detail', description: 'Create a detailed retirement budget including healthcare costs, housing, and discretionary spending.', ageGroup: '55-65' },
      { id: '3-2', title: 'Research and understand Social Security claiming strategies', description: 'When you claim affects your lifetime benefits. Understand your options before deciding.', ageGroup: '55-65' },
      { id: '3-3', title: 'Consider working longer if retirement savings are insufficient', description: 'Even a few additional working years can significantly improve your retirement outlook.', ageGroup: '55-65' },
      { id: '3-6', title: 'Develop a retirement income strategy (which accounts to draw from first)', description: 'The order in which you withdraw from accounts can impact taxes and how long your money lasts.', ageGroup: '55-65' },
      { id: '4-1', title: 'Finalize retirement date and notify employer', description: 'Coordinate with HR regarding benefits, insurance coverage, and retirement account options.', ageGroup: '65+' },
      { id: '4-3', title: 'Determine optimal Social Security claiming strategy', description: 'Consider your health, life expectancy, and other income sources when deciding when to claim.', ageGroup: '65+' },
      { id: '4-7', title: 'Develop a plan for charitable giving and legacy', description: 'Consider how you want to support causes you care about and leave a legacy for future generations.', ageGroup: '65+' }
    ]
  },
  protection: {
    title: 'Protection & Estate Planning',
    icon: 'lucide-life-buoy',
    color: 'text-red-500',
    items: [
      { id: '1-7', title: 'Obtain adequate life insurance if you have dependents', description: 'Term life insurance is typically most cost-effective, especially when purchased young.', ageGroup: '20s-30s' },
      { id: '1-8', title: 'Create a will and designate beneficiaries on all accounts', description: 'Even young adults need basic estate planning documents in place.', ageGroup: '20s-30s' },
      { id: '2-6', title: 'Review and update insurance coverage (life, disability, long-term care)', description: 'Your insurance needs change as you age and your family situation evolves.', ageGroup: '40s-50s' },
      { id: '2-9', title: 'Update estate planning documents (will, power of attorney, healthcare directives)', description: 'Ensure your wishes are documented and legally binding.', ageGroup: '40s-50s' },
      { id: '3-7', title: 'Review Medicare enrollment options and timeline', description: 'Enrollment begins 3 months before your 65th birthday. Missing deadlines can lead to penalties.', ageGroup: '55-65' },
      { id: '3-8', title: 'Investigate long-term care insurance options', description: 'Long-term care costs can deplete retirement savings. Consider protection options before you need care.', ageGroup: '55-65' },
      { id: '3-10', title: 'Review and update estate plan, beneficiary designations, and healthcare directives', description: 'Ensure your estate plan reflects your current wishes and family situation.', ageGroup: '55-65' },
      { id: '4-2', title: 'Apply for Medicare benefits', description: 'Start the application process 3 months before your 65th birthday to avoid gaps in coverage.', ageGroup: '65+' },
      { id: '4-8', title: 'Create a comprehensive health care strategy', description: 'Plan for potential health care needs and costs, including Medicare supplements and long-term care.', ageGroup: '65+' }
    ]
  }
}

// Computed properties
const overallProgress = computed(() => {
  // Calculate progress based on currently visible items (considering active tab and search)
  let totalItems = 0
  let completedCount = 0

  Object.keys(checklistData).forEach(categoryKey => {
    const items = getFilteredItems(categoryKey, activeTab.value)
    totalItems += items.length
    completedCount += items.filter(item => completedItems.value.has(item.id)).length
  })

  return totalItems === 0 ? 0 : Math.round((completedCount / totalItems) * 100)
})

// Methods
const getFilteredItems = (categoryKey: string, ageGroup: string): ChecklistItem[] => {
  let items = checklistData[categoryKey]?.items || []
  
  // Filter by age group
  if (ageGroup !== 'all') {
    items = items.filter((item: ChecklistItem) => item.ageGroup === ageGroup)
  }
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    items = items.filter((item: ChecklistItem) => 
      item.title.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query)
    )
  }
  
  return items
}

const getAgeGroupProgress = (ageGroup: string): number => {
  let totalItems = 0
  let completedCount = 0

  Object.values(checklistData).forEach(category => {
    const filteredItems = ageGroup === 'all' 
      ? category.items 
      : category.items.filter((item: ChecklistItem) => item.ageGroup === ageGroup)
    
    totalItems += filteredItems.length
    completedCount += filteredItems.filter((item: ChecklistItem) => completedItems.value.has(item.id)).length
  })

  return totalItems === 0 ? 0 : Math.round((completedCount / totalItems) * 100)
}

const getCategoryProgress = (categoryKey: string, ageGroup: string): number => {
  const items = getFilteredItems(categoryKey, ageGroup)
  if (items.length === 0) return 0
  
  const completedCount = items.filter(item => completedItems.value.has(item.id)).length
  return Math.round((completedCount / items.length) * 100)
}

// Helper functions for enhanced descriptions
const getMainDescription = (description: string): string => {
  // Split description at "Expert tip:" or similar markers
  const expertTipMarkers = ['Expert tip:', 'Pro tip:', 'Tip:', 'Important:']
  for (const marker of expertTipMarkers) {
    if (description.toLowerCase().includes(marker.toLowerCase())) {
      return description.split(new RegExp(marker, 'i'))[0].trim()
    }
  }
  return description
}

const getExpertTip = (description: string): string => {
  // Extract expert tip content
  const expertTipMarkers = ['Expert tip:', 'Pro tip:', 'Tip:', 'Important:']
  for (const marker of expertTipMarkers) {
    const regex = new RegExp(`${marker}\\s*(.+)`, 'i')
    const match = description.match(regex)
    if (match && match[1]) {
      return match[1].trim()
    }
  }
  return ''
}

const isHighPriority = (item: ChecklistItem): boolean => {
  // Mark certain items as high priority based on keywords or age group
  const highPriorityKeywords = ['emergency fund', 'high-interest debt', 'employer match', 'tax-advantaged', 'health insurance']
  const description = item.description.toLowerCase()
  const title = item.title.toLowerCase()
  
  return highPriorityKeywords.some(keyword => 
    description.includes(keyword) || title.includes(keyword)
  ) || item.ageGroup === '20s-30s' && (title.includes('emergency') || title.includes('employer'))
}

const getAgeGroupStyle = (ageGroup: string): string => {
  const styles: Record<string, string> = {
    '20s-30s': 'bg-blue-50 text-blue-600 border-blue-200',
    '40s-50s': 'bg-green-50 text-green-600 border-green-200',
    '55-65': 'bg-amber-50 text-amber-600 border-amber-200',
    '65+': 'bg-purple-50 text-purple-600 border-purple-200'
  }
  return styles[ageGroup] || 'bg-gray-50 text-gray-600 border-gray-200'
}

const toggleItem = (itemId: string): void => {
  const wasCompleted = completedItems.value.has(itemId)
  
  if (wasCompleted) {
    completedItems.value.delete(itemId)
  } else {
    completedItems.value.add(itemId)
    // Add celebration effect for completion
    triggerCelebration(itemId)
  }
  saveProgress()
}

const toggleExpertTip = (itemId: string): void => {
  if (visibleExpertTips.value.has(itemId)) {
    visibleExpertTips.value.delete(itemId)
  } else {
    visibleExpertTips.value.add(itemId)
  }
}

const triggerCelebration = (itemId: string): void => {
  // Simple celebration - you could enhance this with confetti or other effects
  const button = document.querySelector(`[data-item-id="${itemId}"]`)
  if (button) {
    button.classList.add('animate-bounce')
    setTimeout(() => {
      button.classList.remove('animate-bounce')
    }, 600)
  }
}

const resetProgress = (): void => {
  completedItems.value.clear()
  saveProgress()
}

const saveProgress = (): void => {
  if (process.client) {
    localStorage.setItem('retirement-checklist-progress', JSON.stringify([...completedItems.value]))
  }
}

const loadProgress = (): void => {
  if (process.client) {
    const saved = localStorage.getItem('retirement-checklist-progress')
    if (saved) {
      completedItems.value = new Set(JSON.parse(saved))
    }
  }
}

const downloadPDF = (): void => {
  // This would integrate with a PDF generation library
  alert('PDF download functionality would be implemented here')
}

// Lifecycle
onMounted(() => {
  loadProgress()
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

/* Animation classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}

/* Animation delays */
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-800 { animation-delay: 0.8s; }
.animation-delay-1000 { animation-delay: 1.0s; }
</style>