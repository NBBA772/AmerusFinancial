<template>
  <div class="max-w-7xl mx-auto px-4 space-y-8">
    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Medicare Costs</h2>
    <div class="prose max-w-none mb-6">
      <p class="text-gray-600 leading-relaxed">Medicare costs include premiums, deductibles, copayments, and coinsurance. These costs can change each year and vary based on your income level and the specific plans you choose.</p>
    </div>

    <!-- Part A Costs -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Part A Costs (2025)</h3>
        <p class="text-sm text-blue-100">Hospital Insurance Costs</p>
      </div>
      <div>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse bg-white">
            <thead>
              <tr class="bg-gradient-to-r from-blue-50 to-indigo-50">
                <th class="border border-blue-200 p-4 text-left font-semibold text-gray-800">Cost Type</th>
                <th class="border border-blue-200 p-4 text-left font-semibold text-gray-800">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-blue-25 transition-colors duration-200">
                <td class="border border-gray-200 p-4 text-gray-700">Premium (if you don't qualify for premium-free Part A)</td>
                <td class="border border-gray-200 p-4 font-semibold text-gray-800">Up to $505 per month</td>
              </tr>
              <tr class="hover:bg-blue-25 transition-colors duration-200">
                <td class="border border-gray-200 p-4 text-gray-700">Deductible (per benefit period)</td>
                <td class="border border-gray-200 p-4 font-semibold text-gray-800">$1,632</td>
              </tr>
              <tr class="hover:bg-blue-25 transition-colors duration-200">
                <td class="border border-gray-200 p-4 text-gray-700">Hospital coinsurance (days 1-60)</td>
                <td class="border border-gray-200 p-4 font-semibold text-green-600">$0</td>
              </tr>
              <tr class="hover:bg-blue-25 transition-colors duration-200">
                <td class="border border-gray-200 p-4 text-gray-700">Hospital coinsurance (days 61-90)</td>
                <td class="border border-gray-200 p-4 font-semibold text-gray-800">$408 per day</td>
              </tr>
              <tr class="hover:bg-blue-25 transition-colors duration-200">
                <td class="border border-gray-200 p-4 text-gray-700">Hospital coinsurance (days 91 and beyond)</td>
                <td class="border border-gray-200 p-4 font-semibold text-gray-800">$816 per "lifetime reserve day"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="bg-blue-50 p-4 rounded-xl border border-blue-200 mt-4">
          <p class="text-sm text-blue-700"><strong>Note:</strong> Most people don't pay a premium for Part A if they or their spouse paid Medicare taxes for at least 10 years.</p>
        </div> -->
      </div>
    </div>

    <!-- Part B Costs -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-green-500 to-green-600 py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Part B Costs (2025)</h3>
        <p class="text-sm text-green-100">Medical Insurance Costs</p>
      </div>
      <div>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse bg-white">
            <thead>
              <tr class="bg-gradient-to-r from-green-50 to-emerald-50">
                <th class="border border-green-200 p-4 text-left font-semibold text-gray-800">Cost Type</th>
                <th class="border border-green-200 p-4 text-left font-semibold text-gray-800">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-green-25 transition-colors duration-200">
                <td class="border border-gray-200 p-4 text-gray-700">Standard monthly premium</td>
                <td class="border border-gray-200 p-4 font-semibold text-gray-800">$174.70 (or higher depending on income)</td>
              </tr>
              <tr class="hover:bg-green-25 transition-colors duration-200">
                <td class="border border-gray-200 p-4 text-gray-700">Annual deductible</td>
                <td class="border border-gray-200 p-4 font-semibold text-gray-800">$240</td>
              </tr>
              <tr class="hover:bg-green-25 transition-colors duration-200">
                <td class="border border-gray-200 p-4 text-gray-700">Coinsurance</td>
                <td class="border border-gray-200 p-4 font-semibold text-gray-800">20% of Medicare-approved amount after deductible</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="bg-green-50 p-4 rounded-xl border border-green-200 mt-4">
          <p class="text-sm text-green-700"><strong>Important:</strong> Higher-income beneficiaries may pay additional Income-Related Monthly Adjustment Amount (IRMAA).</p>
        </div> -->
      </div>
    </div>

    <!-- Part C Costs -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-purple-500 to-purple-600 py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Part C (Medicare Advantage) Costs</h3>
        <p class="text-sm text-purple-100">Medicare Advantage Plan Costs</p>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4 leading-relaxed">Medicare Advantage Plan costs vary significantly by plan and location. In addition to your Part B premium, you might pay a monthly premium for your Medicare Advantage Plan.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <h4 class="font-semibold text-purple-800 mb-2">Plan Premiums</h4>
            <ul class="space-y-2 text-sm text-purple-700">
              <li class="flex items-start gap-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Some plans have premiums as low as $0</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Premium varies by plan and location</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Still pay your Part B premium</span>
              </li>
            </ul>
          </div>
          <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <h4 class="font-semibold text-purple-800 mb-2">Additional Costs</h4>
            <ul class="space-y-2 text-sm text-purple-700">
              <li class="flex items-start gap-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Deductibles vary by plan</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Copayments for services</span>
              </li>
              <li class="flex items-start gap-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Out-of-pocket maximums apply</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Part D Costs -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-orange-500 to-red-500 py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Part D Costs (2025)</h3>
        <p class="text-sm text-orange-100">Prescription Drug Plan Costs</p>
      </div>
      <div>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse bg-white">
            <thead>
              <tr class="bg-gradient-to-r from-orange-50 to-red-50">
                <th class="border border-orange-200 p-4 text-left font-semibold text-gray-800">Cost Type</th>
                <th class="border border-orange-200 p-4 text-left font-semibold text-gray-800">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-orange-25 transition-colors duration-200">
                <td class="border border-gray-200 p-4 text-gray-700">Monthly premium</td>
                <td class="border border-gray-200 p-4 font-semibold text-gray-800">Varies by plan (national average: approximately $35)</td>
              </tr>
              <tr class="hover:bg-orange-25 transition-colors duration-200">
                <td class="border border-gray-200 p-4 text-gray-700">Annual deductible</td>
                <td class="border border-gray-200 p-4 font-semibold text-gray-800">No more than $545 (varies by plan)</td>
              </tr>
              <tr class="hover:bg-orange-25 transition-colors duration-200">
                <td class="border border-gray-200 p-4 text-gray-700">Copayments/coinsurance</td>
                <td class="border border-gray-200 p-4 font-semibold text-gray-800">Varies by plan and drug tier</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="bg-orange-50 p-4 rounded-xl border border-orange-200 mt-4">
          <p class="text-sm text-orange-700"><strong>Coverage Gap:</strong> The "donut hole" begins when total drug costs reach $5,030 in 2025.</p>
        </div> -->
      </div>
    </div>

    <!-- Important Notice -->
    <div role="alert" class="relative w-full rounded-xl border-2 border-amber-200 p-6 bg-gradient-to-br from-amber-50 to-orange-50">
      <div class="flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-amber-600 flex-shrink-0 mt-1">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" x2="12" y1="8" y2="12"></line>
          <line x1="12" x2="12.01" y1="16" y2="16"></line>
        </svg>
        <div>
          <h5 class="mb-2 font-semibold text-amber-800">Important Cost Considerations</h5>
          <ul class="space-y-2 text-sm text-amber-800 leading-relaxed">
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
Higher-income beneficiaries may pay an Income-Related Monthly Adjustment Amount (IRMAA) in addition to their standard Part B and Part D premiums.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component displays Medicare costs information for 2025
// It's a static content component focused on Medicare cost breakdown by part
</script>

<style scoped>
/* Animations for cost cards */
.bg-white.rounded-xl.border-2.shadow-lg {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.bg-white.rounded-xl.border-2.shadow-lg:nth-child(1) { animation-delay: 0.1s; }
.bg-white.rounded-xl.border-2.shadow-lg:nth-child(2) { animation-delay: 0.2s; }
.bg-white.rounded-xl.border-2.shadow-lg:nth-child(3) { animation-delay: 0.3s; }
.bg-white.rounded-xl.border-2.shadow-lg:nth-child(4) { animation-delay: 0.4s; }
.bg-white.rounded-xl.border-2.shadow-lg:nth-child(5) { animation-delay: 0.5s; }
.bg-white.rounded-xl.border-2.shadow-lg:nth-child(6) { animation-delay: 0.6s; }

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

/* Hover effects for cost cards */
.bg-white.rounded-xl.border-2.shadow-lg:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Table animations */
table {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Table row hover effects */
tbody tr:hover {
  background-color: rgba(59, 130, 246, 0.05);
}

/* Summary card animations */
.grid > div {
  animation: fadeInScale 0.5s ease-out both;
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* List item animations */
.space-y-1 > li,
.space-y-2 > li {
  animation: fadeInLeft 0.4s ease-out both;
}

.space-y-1 > li:nth-child(1),
.space-y-2 > li:nth-child(1) { animation-delay: 0.1s; }
.space-y-1 > li:nth-child(2),
.space-y-2 > li:nth-child(2) { animation-delay: 0.2s; }
.space-y-1 > li:nth-child(3),
.space-y-2 > li:nth-child(3) { animation-delay: 0.3s; }
.space-y-1 > li:nth-child(4),
.space-y-2 > li:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Alert box animation */
div[role="alert"] {
  animation: slideInUp 0.6s ease-out;
}

/* Gradient header animations */
.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Table borders and styling */
table {
  /* border-radius: 8px; */
  overflow: hidden;
}

table th,
table td {
  transition: background-color 0.2s ease;
}

/* Responsive table styling */
@media (max-width: 768px) {
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch;
  }
  
  table {
    min-width: 500px;
  }
}
</style>