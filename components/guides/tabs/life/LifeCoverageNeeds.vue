<template>
  <div class="max-w-4xl mx-auto px-4 space-y-8">
    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Determining Your Coverage Needs</h2>
    <div class="prose max-w-none">
      
      <p>Determining how much life insurance you need depends on your financial situation and goals. Here are several methods to help you calculate your coverage needs:</p>
      <!-- DIME Method Card -->
  <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden stagger-card" :style="{ animationDelay: `0ms` }">
        <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-1 px-6">
          <h3 class="text-xl font-semibold text-white">The DIME Method</h3>
        </div>
        <div class="px-6 pb-6">
          <p>One of the most comprehensive ways to calculate your life insurance needs is the DIME method, which considers:</p>
          <ul>
            <li><strong>D</strong>ebt and final expenses</li>
            <li><strong>I</strong>ncome replacement</li>
            <li><strong>M</strong>ortgage</li>
            <li><strong>E</strong>ducation costs for children</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Coverage Calculation Worksheet Card -->
  <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden stagger-card" :style="{ animationDelay: `120ms` }">
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Coverage Calculation Worksheet</h3>
      </div>
      <div class="p-6 pt-6">
        <div class="space-y-4">
          <div class="border-b pb-3">
            <p class="font-medium mb-2">1. Debt and Final Expenses</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Outstanding debts (credit cards, car loans, etc.)</li>
              <li>Estimated funeral costs ($10,000 - $15,000)</li>
              <li>Estate administration costs</li>
              <li>Medical bills not covered by health insurance</li>
            </ul>
          </div>
          <div class="border-b pb-3">
            <p class="font-medium mb-2">2. Income Replacement</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Annual income × number of years needed</li>
              <li>Consider: Years until retirement, spouse's income</li>
              <li>A common rule: 10-15× your annual income</li>
            </ul>
          </div>
          <div class="border-b pb-3">
            <p class="font-medium mb-2">3. Mortgage and Housing Expenses</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Remaining mortgage balance</li>
              <li>Property taxes and home insurance</li>
              <li>Maintenance costs</li>
            </ul>
          </div>
          <div class="border-b pb-3">
            <p class="font-medium mb-2">4. Education Costs</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Future college costs for each child</li>
              <li>Current savings for education</li>
              <li>Estimated annual tuition increase</li>
            </ul>
          </div>
          <div>
            <p class="font-medium mb-2">5. Subtract Existing Resources</p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Current savings and investments</li>
              <li>Existing life insurance coverage</li>
              <li>Social Security survivor benefits</li>
              <li>Other assets that could be liquidated</li>
            </ul>
          </div>
        </div>
        <div class="mt-6 p-4 bg-gray-50 rounded-md">
          <p class="font-medium mb-2">Sample Calculation:</p>
          <ul class="list-none space-y-1 text-sm">
            <li><span class="inline-block w-64">Debt and final expenses:</span> $30,000</li>
            <li><span class="inline-block w-64">Income replacement (15 × $70,000):</span> $1,050,000</li>
            <li><span class="inline-block w-64">Mortgage balance:</span> $220,000</li>
            <li><span class="inline-block w-64">Education costs (2 children):</span> $200,000</li>
            <li><span class="inline-block w-64">Total needs:</span> $1,500,000</li>
            <li><span class="inline-block w-64">Less existing resources:</span> $300,000</li>
            <li class="font-medium pt-2"><span class="inline-block w-64">Estimated life insurance need:</span> $1,200,000</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Multiple of Income Method Card -->
  <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden stagger-card" :style="{ animationDelay: `240ms` }">
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
        <h3 class="text-xl font-semibold text-white">The Multiple of Income Method</h3>
      </div>
      <div class="p-6">
        <p>A simpler approach is to multiply your annual income by a factor based on your age and financial obligations:</p>
        <ul>
          <li>10-12× annual income for those in their 20s and 30s with a young family</li>
          <li>8-10× annual income for those in their 40s</li>
          <li>5-7× annual income for those in their 50s</li>
          <li>Less for those nearing retirement with fewer dependents</li>
        </ul>
      </div>
    </div>

    <!-- Special Considerations Card -->
  <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden stagger-card" :style="{ animationDelay: `360ms` }">
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Special Considerations</h3>
      </div>
      <div class="p-6">
        <p>Your coverage needs may change based on your specific situation:</p>
        <ul>
          <li><strong>Single Parents:</strong> May need higher coverage to provide for children's care and future needs</li>
          <li><strong>Stay-at-Home Parents:</strong> Consider the cost to replace childcare, household management, and other services</li>
          <li><strong>Business Owners:</strong> May need additional coverage for business debts, succession planning, or buy-sell agreements</li>
          <li><strong>Special Needs Dependents:</strong> May require lifetime care funding</li>
          <li><strong>High Net Worth Individuals:</strong> May need coverage for estate taxes and wealth transfer strategies</li>
        </ul>
      </div>
    </div>

    <DimeCalculator class="mb-8" />

  <div role="alert" class="relative w-full rounded-lg border p-4 bg-gradient-to-br from-amber-50 to-orange-50 my-6 stagger-card" :style="{ animationDelay: `480ms` }">
      <div class="flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-amber-600 flex-shrink-0 mt-1">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" x2="12" y1="8" y2="12"></line>

        </svg>
        <div class="text-sm text-amber-800 leading-relaxed">
          Life insurance needs change over time. It's important to review your coverage every few years or after major life events like marriage, having children, buying a home, or changing jobs.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component doesn't need any props or reactive data for now
// It's a static content component that displays coverage types information
</script>

<style scoped>
/* Staggered fade-in animation for main cards */
.stagger-card {
  opacity: 0;
  transform: translateY(32px);
  animation: staggerFadeIn 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
}

@keyframes staggerFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover effects for coverage cards */
.bg-white.rounded-xl.border-2.shadow-lg:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Table hover effects */
tbody tr:hover {
  background-color: #f9fafb;
  transition: background-color 0.2s ease;
}
</style>