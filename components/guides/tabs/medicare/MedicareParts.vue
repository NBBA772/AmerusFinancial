<template>
  <div class="mb-10">
    <h2 class="text-2xl font-semibold mb-4">The Four Parts of Medicare</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- Medicare Part A -->
      <div class="rounded-lg border bg-white shadow-sm border-l-4 border-l-blue-500">
        <div class="p-6">
          <h3 class="text-xl font-medium mb-2">Medicare Part A (Hospital Insurance)</h3>
          <p class="text-gray-600 mb-4">Covers inpatient hospital care, skilled nursing facility care, hospice care, and some home health care.</p>
          <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Inpatient hospital stays</li>
            <li>Skilled nursing facility care</li>
            <li>Hospice care</li>
            <li>Some home health care</li>
          </ul>
        </div>
      </div>

      <!-- Medicare Part B -->
      <div class="rounded-lg border bg-white shadow-sm border-l-4 border-l-red-500">
        <div class="p-6">
          <h3 class="text-xl font-medium mb-2">Medicare Part B (Medical Insurance)</h3>
          <p class="text-gray-600 mb-4">Covers certain doctors' services, outpatient care, medical supplies, and preventive services.</p>
          <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Doctor visits and services</li>
            <li>Outpatient care</li>
            <li>Preventive services</li>
            <li>Durable medical equipment</li>
            <li>Mental health services</li>
          </ul>
        </div>
      </div>

      <!-- Medicare Part C -->
      <div class="rounded-lg border bg-white shadow-sm border-l-4 border-l-yellow-500">
        <div class="p-6">
          <h3 class="text-xl font-medium mb-2">Medicare Part C (Medicare Advantage)</h3>
          <p class="text-gray-600 mb-4">An alternative to Original Medicare (Parts A and B) offered by private insurance companies approved by Medicare.</p>
          <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Includes all benefits of Parts A and B</li>
            <li>Usually includes prescription drug coverage</li>
            <li>May include extra benefits like vision, hearing, and dental</li>
            <li>May have different costs and rules than Original Medicare</li>
          </ul>
        </div>
      </div>

      <!-- Medicare Part D -->
      <div class="rounded-lg border bg-white shadow-sm border-l-4 border-l-green-500">
        <div class="p-6">
          <h3 class="text-xl font-medium mb-2">Medicare Part D (Prescription Drug Coverage)</h3>
          <p class="text-gray-600 mb-4">Helps cover the cost of prescription drugs. Run by Medicare-approved private insurance companies.</p>
          <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Prescription drug coverage</li>
            <li>Different plans cover different drugs</li>
            <li>Plans have formularies (lists of covered drugs)</li>
            <li>Can be added to Original Medicare</li>
            <li>Often included in Medicare Advantage plans</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Comparison Section -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Original Medicare vs. Medicare Advantage</h3>
        <p class="text-sm text-white/90">When you first enroll in Medicare, you'll need to choose between Original Medicare (Parts A and B, often with a separate Part D plan) or Medicare Advantage (Part C).</p>
      </div>
      <div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th class="h-12 px-4 text-left align-middle font-semibold text-gray-700">Feature</th>
                <th class="h-12 px-4 text-left align-middle font-semibold text-gray-700">Original Medicare</th>
                <th class="h-12 px-4 text-left align-middle font-semibold text-gray-700">Medicare Advantage</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="p-4 align-middle font-medium">Provider choice</td>
                <td class="p-4 align-middle text-gray-600 text-sm">Any doctor that accepts Medicare</td>
                <td class="p-4 align-middle text-gray-600 text-sm">Network providers, except in emergencies</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="p-4 align-middle font-medium">Referrals</td>
                <td class="p-4 align-middle text-gray-600 text-sm">Usually not needed</td>
                <td class="p-4 align-middle text-gray-600 text-sm">Often needed to see specialists</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="p-4 align-middle font-medium">Out-of-pocket maximum</td>
                <td class="p-4 align-middle text-gray-600 text-sm">No cap on out-of-pocket costs</td>
                <td class="p-4 align-middle text-gray-600 text-sm">Annual cap on out-of-pocket costs</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="p-4 align-middle font-medium">Coverage while traveling</td>
                <td class="p-4 align-middle text-gray-600 text-sm">Coverage throughout the U.S.</td>
                <td class="p-4 align-middle text-gray-600 text-sm">Limited coverage outside service area</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="p-4 align-middle font-medium">Supplemental coverage</td>
                <td class="p-4 align-middle text-gray-600 text-sm">Can purchase Medigap</td>
                <td class="p-4 align-middle text-gray-600 text-sm">Cannot purchase Medigap</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component displays Medicare Parts information
// No reactive data needed - purely content-based component
</script>

<style scoped>
/* Card animations */
.grid > div {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }

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

/* Hover effects */
.rounded-lg.border.bg-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Table hover effects */
tbody tr:hover {
  background-color: #f9fafb;
  transition: background-color 0.2s ease;
}
</style>