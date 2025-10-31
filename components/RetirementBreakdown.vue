<!-- components/RetirementBreakdown.vue -->
<template>
  <div v-if="result" class="mt-8 bg-white shadow-lg rounded-xl p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Current Retirement Plan -->
      <div class="space-y-4 p-4 rounded-xl border border-gray-200 transition-all duration-300 hover:border-[#30BCFE] hover:shadow-lg hover:bg-blue-50/50 group">
        <p class="text-lg font-semibold text-gray-700 group-hover:text-[#30BCFE] transition-colors duration-300">Current Retirement Plan</p>
        <div class="border-t border-gray-200 group-hover:border-[#30BCFE]/30 transition-colors duration-300 pt-2 flex justify-between">
          <span class="group-hover:text-gray-700 transition-colors duration-300">Total retirement savings</span>
          <span class="font-bold text-gray-900 group-hover:text-[#30BCFE] transition-colors duration-300">${{ formattedHave }}</span>
        </div>
        <div class="border-t border-gray-200 group-hover:border-[#30BCFE]/30 transition-colors duration-300 pt-2 flex justify-between">
          <span class="group-hover:text-gray-700 transition-colors duration-300">Monthly contribution</span>
          <span class="font-bold text-gray-900 group-hover:text-[#30BCFE] transition-colors duration-300">${{ monthlyContribution.toLocaleString() }}</span>
        </div>
        <div class="border-t border-gray-200 group-hover:border-[#30BCFE]/30 transition-colors duration-300 pt-2 flex justify-between">
          <span class="group-hover:text-gray-700 transition-colors duration-300">Age retirement savings runs out</span>
          <span class="font-bold text-gray-900 group-hover:text-[#30BCFE] transition-colors duration-300">{{ ageSavingsRunsOutCurrent }}</span>
        </div>
      </div>

      <!-- Target Retirement Plan -->
      <div class="space-y-4 p-4 rounded-xl border border-gray-200 transition-all duration-300 hover:border-green-500 hover:shadow-lg hover:bg-green-50/50 group">
        <p class="text-lg font-semibold text-gray-700 group-hover:text-green-600 transition-colors duration-300">Target Retirement Plan</p>
        <div class="border-t border-gray-200 group-hover:border-green-500/30 transition-colors duration-300 pt-2 flex justify-between">
          <span class="group-hover:text-gray-700 transition-colors duration-300">Total retirement savings</span>
          <span class="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">${{ formattedNeed }}</span>
        </div>
        <div class="border-t border-gray-200 group-hover:border-green-500/30 transition-colors duration-300 pt-2 flex justify-between items-center">
          <span class="group-hover:text-gray-700 transition-colors duration-300">Monthly contribution</span>
          <span class="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">${{ suggestedContribution.toLocaleString() }}</span>
        </div>
        <div class="border-t border-gray-200 group-hover:border-green-500/30 transition-colors duration-300 pt-2 flex justify-between">
          <span class="group-hover:text-gray-700 transition-colors duration-300">Age retirement savings runs out</span>
          <span class="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{{ ageSavingsRunsOutTarget }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Props from the calculator or parent component
defineProps({
  result: Boolean,
  formattedHave: String,
  formattedNeed: String,
  monthlyContribution: Number,
  suggestedContribution: Number,
  ageSavingsRunsOutCurrent: Number,
  ageSavingsRunsOutTarget: Number,
})
</script>
