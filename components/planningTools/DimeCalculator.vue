<template>
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-4 max-w-3xl">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-3xl font-bold mb-2 text-gray-800">DIME Method Calculator</h2>
        <p class="text-gray-600 max-w-xl mx-auto">Estimate your life insurance needs using the DIME method: Debt, Income, Mortgage, and Education costs.</p>
      </div>
      <form @submit.prevent="calculateDime" class="bg-white rounded-2xl shadow p-8 space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <label class="block text-sm font-semibold text-gray-700">Outstanding Debts & Final Expenses ($)</label>
            <input type="number" v-model.number="debt" min="0" class="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 text-lg" />
          </div>
          <div class="space-y-4">
            <label class="block text-sm font-semibold text-gray-700">Annual Income ($)</label>
            <input type="number" v-model.number="income" min="0" class="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 text-lg" />
            <label class="block text-xs text-gray-500 mt-1">Years to replace income</label>
            <input type="number" v-model.number="incomeYears" min="1" class="w-full h-10 px-4 rounded-xl border border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-2 focus:ring-[#30BCFE]/20 text-base" />
          </div>
          <div class="space-y-4">
            <label class="block text-sm font-semibold text-gray-700">Mortgage Balance ($)</label>
            <input type="number" v-model.number="mortgage" min="0" class="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 text-lg" />
          </div>
          <div class="space-y-4">
            <label class="block text-sm font-semibold text-gray-700">Education Costs for Children ($)</label>
            <input type="number" v-model.number="education" min="0" class="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 text-lg" />
          </div>
          <div class="space-y-4 md:col-span-2">
            <label class="block text-sm font-semibold text-gray-700">Subtract Existing Resources ($)</label>
            <input type="number" v-model.number="resources" min="0" class="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 text-lg" />
          </div>
        </div>
        <div class="pt-4 text-center">
          <button type="submit" class="w-full bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white px-8 py-4 rounded-xl hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
            Calculate Coverage Need
          </button>
        </div>
      </form>
      <transition name="fade-slide">
        <div v-if="showResultBox" class="mt-10">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 text-center shadow-lg">
            <h3 class="text-xl font-bold mb-2 text-green-800">Estimated Life Insurance Need</h3>
            <p class="text-3xl font-bold text-[#30BCFE]">${{ animatedResult.toLocaleString() }}</p>
            <p class="text-gray-700 mt-2">This estimate is based on the DIME method and your provided information.</p>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'

const debt = ref(0)
const income = ref(0)
const incomeYears = ref(10)
const mortgage = ref(0)
const education = ref(0)
const resources = ref(0)
const result = ref(null)
const animatedResult = ref(0)
const showResultBox = ref(false)

function animateValue(start, end, duration = 1200) {
  const startTime = performance.now()
  function step(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1)
    animatedResult.value = Math.floor(start + (end - start) * progress)
    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      animatedResult.value = end
    }
  }
  requestAnimationFrame(step)
}

function calculateDime() {
  const totalNeeds = debt.value + (income.value * incomeYears.value) + mortgage.value + education.value
  const finalResult = Math.max(0, totalNeeds - resources.value)
  result.value = finalResult
  animateValue(animatedResult.value, finalResult)
  showResultBox.value = false
  setTimeout(() => {
    showResultBox.value = true
  }, 50)
}

watch(result, (newVal, oldVal) => {
  if (newVal !== null) {
    animateValue(oldVal ?? 0, newVal)
  }
})
</script>

<style scoped>
.bg-white.rounded-2xl {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
/* Fade-slide transition for result box */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(24px) scale(0.98);
}
.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
input:focus {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 12px 30px rgba(48, 188, 254, 0.2);
}
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
.bg-gradient-to-br {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.bg-gradient-to-br:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>
