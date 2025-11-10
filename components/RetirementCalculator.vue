<!-- components/RetirementCalculator.vue -->
<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 text-[#30BCFE] border-[#30BCFE]/30 bg-[#30BCFE]/10">
          Financial Planning
        </div>
        <h1 class="text-3xl font-bold mb-4 text-gray-800">
          Retirement Calculator
        </h1>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Plan for your future by calculating how much you need to save for a comfortable retirement.
        </p>
      </div>

      <div class="lg:flex lg:gap-8">
        <!-- Calculator Form -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ease-out" :class="result ? 'lg:w-1/2' : 'lg:w-full'">
          <!-- Form Header -->
          <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-8">
            <h3 class="text-xl font-semibold text-white text-center">
              Enter Your Information
            </h3>
            <p class="text-white/80 text-center text-sm mt-1">Fill in your details to calculate your retirement savings</p>
          </div>

          <div class="p-8 flex flex-col transition-all duration-700 ease-out" :class="result ? 'h-[750px]' : 'min-h-[400px]'">
            <div class="flex-1 overflow-auto">
              <form @submit.prevent="calculate" class="space-y-6">
              <!-- Current Age & Retirement Age -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-3">
                  <label for="currentAge" class="text-sm font-semibold text-gray-700">Current Age</label>
                  <input 
                    type="number" 
                    id="currentAge" 
                    v-model.number="currentAge" 
                    class="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg" 
                    min="0"
                  />
                </div>
                <div class="space-y-3">
                  <label for="retirementAge" class="text-sm font-semibold text-gray-700">Retirement Age</label>
                  <input 
                    type="number" 
                    id="retirementAge" 
                    v-model.number="retirementAge" 
                    class="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg" 
                    min="0"
                  />
                </div>
              </div>

              <!-- Current Savings & Monthly Contribution -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-3">
                  <label for="currentSavings" class="text-sm font-semibold text-gray-700">Current Savings ($)</label>
                  <input 
                    type="number" 
                    id="currentSavings" 
                    v-model.number="currentSavings" 
                    class="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg" 
                    min="0"
                  />
                </div>
                <div class="space-y-3">
                  <label for="monthlyContribution" class="text-sm font-semibold text-gray-700">Monthly Contribution ($)</label>
                  <input 
                    type="number" 
                    id="monthlyContribution" 
                    v-model.number="monthlyContribution" 
                    class="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg" 
                    min="0"
                  />
                </div>
              </div>

              <!-- Annual Return & Target Amount -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-3">
                  <label for="annualReturn" class="text-sm font-semibold text-gray-700">Expected Annual Return (%)</label>
                  <input 
                    type="number" 
                    id="annualReturn" 
                    v-model.number="annualReturn" 
                    class="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg" 
                    min="0" 
                    step="0.1"
                  />
                </div>
                <div class="space-y-3">
                  <label for="targetAmount" class="text-sm font-semibold text-gray-700">Target Retirement Savings ($)</label>
                  <input 
                    type="number" 
                    id="targetAmount" 
                    v-model.number="targetAmount" 
                    class="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg" 
                    min="0"
                  />
                </div>
              </div>
              </form>
            </div>

            <!-- Submit Button Section - Always at bottom -->
            <div class="pt-4">
              <button 
                type="submit" 
                @click="calculate" 
                  class="w-full bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white px-8 py-4 rounded-xl hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
                >
                  <span class="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                    Calculate Retirement Savings
                  </span>
                </button>
              </div>
          </div>
        </div>

        <!-- Results Panel -->
        <div v-if="result" class="lg:w-1/2 mt-8 lg:mt-0">
          <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <!-- Results Header -->
                <div class="bg-gradient-to-r from-green-500 to-emerald-600 py-6 px-8">
                  <h3 class="text-xl font-semibold text-white text-center">
                    Your Retirement Forecast
                  </h3>
                  <p class="text-white/80 text-center text-sm mt-1">Retirement Savings at Age {{ retirementAge }}</p>
                </div>

              <div class="p-8 bg-gradient-to-br from-gray-50 to-white">
                <!-- Key Metrics -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div class="bg-white rounded-xl border-2 border-gray-200 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div class="text-gray-600 mb-2 font-medium">What you'll have</div>
                    <p class="text-3xl font-bold text-[#30BCFE]">${{ formattedHave }}</p>
                  </div>
                  <div class="bg-white rounded-xl border-2 border-gray-200 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div class="text-gray-600 mb-2 font-medium">What you'll need</div>
                    <p class="text-3xl font-bold text-gray-800">${{ formattedNeed }}</p>
                  </div>
                </div>

                <!-- Gap Analysis -->
                <div v-if="gap !== null" class="mb-6">
                  <div class="bg-gradient-to-br p-6 rounded-xl text-center" :class="gap >= 0 ? 'from-green-50 to-emerald-50 border-2 border-green-200' : 'from-red-50 to-rose-50 border-2 border-red-200'">
                    <div class="mb-3">
                      <svg v-if="gap >= 0" class="w-12 h-12 mx-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <svg v-else class="w-12 h-12 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <p class="text-lg font-bold mb-2" :class="gap >= 0 ? 'text-green-800' : 'text-red-800'">
                      {{ gap >= 0 ? '🎉 You are on track!' : '⚠️ Savings Gap Identified' }}
                    </p>
                    <p class="text-sm" :class="gap >= 0 ? 'text-green-700' : 'text-red-700'">
                      {{ gap >= 0 ? 'Your current plan will help you reach your retirement goals.' : `You need $${Math.abs(gap).toLocaleString()} more to reach your goal.` }}
                    </p>
                  </div>
                </div>

                <!-- Detailed Breakdown -->
                <RetirementBreakdown
                  v-if="result"
                  :result="result"
                  :formattedHave="formattedHave"
                  :formattedNeed="formattedNeed"
                  :monthlyContribution="monthlyContribution"
                  :suggestedContribution="suggestedContribution"
                  :ageSavingsRunsOutCurrent="80"
                  :ageSavingsRunsOutTarget="95"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentAge = ref(30)
const retirementAge = ref(67)
const currentSavings = ref(10000)
const monthlyContribution = ref(500)
const annualReturn = ref(6)
const targetAmount = ref(1500000)

const result = ref(false)
const haveAmount = ref(0)
const needAmount = ref(0)
const gap = ref(null)
const suggestedContribution = ref(0)

const calculate = () => {
  const years = retirementAge.value - currentAge.value
  if (years <= 0) {
    haveAmount.value = 0
    needAmount.value = targetAmount.value
    gap.value = -targetAmount.value
    suggestedContribution.value = 0
    result.value = true
    return
  }

  const months = years * 12
  const r = annualReturn.value / 100 / 12

  // Current plan future value
  const fvCurrent = currentSavings.value * Math.pow(1 + r, months)
  const fvContributions = monthlyContribution.value * ((Math.pow(1 + r, months) - 1) / r)
  haveAmount.value = fvCurrent + fvContributions

  // Target plan
  needAmount.value = targetAmount.value
  gap.value = haveAmount.value - needAmount.value

  // Calculate suggested monthly contribution to reach target
  const fvTargetContrib = targetAmount.value - fvCurrent
  suggestedContribution.value = fvTargetContrib / ((Math.pow(1 + r, months) - 1) / r)

  result.value = true
}

const formattedHave = computed(() =>
  haveAmount.value.toLocaleString(undefined, { maximumFractionDigits: 0 })
)
const formattedNeed = computed(() =>
  needAmount.value.toLocaleString(undefined, { maximumFractionDigits: 0 })
)
</script>

<style scoped>
/* Card hover effects matching the form styling */
.bg-white.rounded-2xl {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced input focus effects */
input:focus {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 12px 30px rgba(48, 188, 254, 0.2);
}

/* Enhanced button hover effects */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover:not(:disabled) {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

button:active:not(:disabled) {
  transform: translateY(0) scale(0.98);
}

/* Stagger animation for form fields */
.space-y-3:nth-child(1) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both;
}

.space-y-3:nth-child(2) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

.space-y-6 > div:nth-child(1) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both;
}

.space-y-6 > div:nth-child(2) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

.space-y-6 > div:nth-child(3) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
}

.space-y-6 > div:nth-child(4) {
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

/* Metric cards hover effects */
.grid .bg-white.rounded-xl {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.grid .bg-white.rounded-xl:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* Badge styling */
.inline-flex {
  transition: all 0.3s ease-in-out;
}

.inline-flex:hover {
  transform: scale(1.05);
  background-color: rgba(48, 188, 254, 0.15);
}

/* Gap analysis cards */
.bg-gradient-to-br {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-gradient-to-br:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Icon animations */
svg {
  transition: all 0.3s ease-in-out;
}

.bg-gradient-to-br:hover svg {
  transform: scale(1.1) rotate(5deg);
}

/* Micro-interactions for better UX */
label {
  transition: all 0.2s ease-in-out;
}

input:focus + label {
  color: #30BCFE;
  transform: translateY(-1px);
}

/* Mobile responsiveness enhancements */
@media (max-width: 768px) {
  .results-reveal-enter-from {
    transform: translateY(30px) scale(0.98);
  }
  
  .results-reveal-leave-to {
    transform: translateY(-30px) scale(0.98);
  }

  input:focus {
    transform: translateY(-1px) scale(1.005);
  }
}

/* Enhanced focus states for accessibility */
.bg-white.rounded-2xl:focus-within {
  outline: 2px solid #30BCFE;
  outline-offset: 2px;
}

/* Number highlighting */
.text-3xl.font-bold {
  transition: all 0.3s ease-in-out;
}

.bg-white.rounded-xl:hover .text-3xl.font-bold {
  transform: scale(1.05);
}
</style>

