<template>
  <div class="mb-10">
    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Medicare Eligibility</h2>
    <div class="prose max-w-none mb-6">
      <p class="text-gray-600 leading-relaxed">Understanding Medicare eligibility requirements is crucial for ensuring you can access healthcare coverage when you need it. There are several pathways to qualify for Medicare benefits.</p>
    </div>

    <!-- Main Eligibility Criteria -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Primary Eligibility Criteria</h3>
        <p class="text-sm text-white/90">You're eligible for Medicare if you meet one of the following criteria</p>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Age-Based Eligibility -->
          <div class="bg-blue-50 rounded-xl border border-blue-200 p-6">
            <div class="flex items-start gap-3 mb-4">
              <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2 text-blue-800">Age 65 or Older</h4>
                <p class="text-sm text-blue-700 leading-relaxed">You're 65 or older and a U.S. citizen or permanent legal resident who has lived in the United States for at least 5 years.</p>
              </div>
            </div>
          </div>

          <!-- Disability-Based Eligibility -->
          <div class="bg-green-50 rounded-xl border border-green-200 p-6">
            <div class="flex items-start gap-3 mb-4">
              <div class="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2 text-green-800">Qualifying Disability</h4>
                <p class="text-sm text-green-700 leading-relaxed">You're under 65 and have a qualifying disability. In most cases, you must have received Social Security Disability Insurance (SSDI) benefits for 24 months.</p>
              </div>
            </div>
          </div>

          <!-- Medical Condition Eligibility -->
          <div class="bg-purple-50 rounded-xl border border-purple-200 p-6">
            <div class="flex items-start gap-3 mb-4">
              <div class="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2 text-purple-800">Specific Medical Conditions</h4>
                <p class="text-sm text-purple-700 leading-relaxed">You have End-Stage Renal Disease (ESRD) or Amyotrophic Lateral Sclerosis (ALS, also called Lou Gehrig's disease).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Medicare Parts Eligibility Details -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Part A Eligibility -->
      <div class="bg-white rounded-xl border-2 shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-blue-500 to-blue-600 py-4 px-6">
          <h3 class="font-semibold text-white flex items-center gap-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-white">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
              <path d="M12 3v6"/>
            </svg>
            Work Requirements for Premium-Free Part A
          </h3>
        </div>
        <div class="p-6">
          <p class="text-gray-600 mb-4 leading-relaxed">Most people don't pay a premium for Medicare Part A if they or their spouse worked and paid Medicare taxes for at least 10 years (40 quarters).</p>
          <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <h4 class="font-semibold text-sm mb-2 text-blue-800">What This Means:</h4>
            <ul class="list-disc pl-5 space-y-1 text-sm text-blue-700">
              <li>You worked at least 10 years in Medicare-covered employment</li>
              <li>Your spouse worked at least 10 years in Medicare-covered employment</li>
              <li>You paid Medicare taxes (part of payroll taxes) during this time</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Part B Eligibility -->
      <div class="bg-white rounded-xl border-2 shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-red-500 to-red-600 py-4 px-6">
          <h3 class="font-semibold text-white flex items-center gap-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-white">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" x2="8" y1="13" y2="13"/>
              <line x1="16" x2="8" y1="17" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            Eligibility for Medicare Part B
          </h3>
        </div>
        <div class="p-6">
          <p class="text-gray-600 mb-4 leading-relaxed">Anyone eligible for premium-free Part A is also eligible for Part B. You can also qualify for Part B by paying a monthly premium if you're not eligible for premium-free Part A.</p>
          <div class="bg-red-50 p-4 rounded-xl border border-red-200">
            <h4 class="font-semibold text-sm mb-2 text-red-800">Important Note:</h4>
            <p class="text-sm text-red-700">Part B has a monthly premium for most people, even if you qualify based on age or disability. The premium amount may vary based on your income.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Medicare Advantage and Part D Eligibility -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Part C Eligibility -->
      <div class="bg-white rounded-xl border-2 shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-yellow-500 to-yellow-600 py-4 px-6">
          <h3 class="font-semibold text-white flex items-center gap-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-white">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
            </svg>
            Eligibility for Medicare Part C (Medicare Advantage)
          </h3>
        </div>
        <div class="p-6">
          <p class="text-gray-600 mb-4 leading-relaxed">To join a Medicare Advantage Plan, you must meet specific requirements:</p>
          <ul class="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li>Have Medicare Parts A and B</li>
            <li>Live in the service area of the Medicare Advantage Plan</li>
            <li>Not have End-Stage Renal Disease (with some exceptions)</li>
          </ul>
          <div class="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <p class="text-sm text-yellow-800"><strong>Service Area Important:</strong> Medicare Advantage plans are offered by region, so you must live in the plan's service area to enroll.</p>
          </div>
        </div>
      </div>

      <!-- Part D Eligibility -->
      <div class="bg-white rounded-xl border-2 shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-green-500 to-green-600 py-4 px-6">
          <h3 class="font-semibold text-white flex items-center gap-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-white">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6m0 6v6"/>
              <path d="m15.5 3.5-3 3 3 3"/>
              <path d="m8.5 3.5 3 3-3 3"/>
              <path d="m15.5 20.5-3-3 3-3"/>
              <path d="m8.5 20.5 3-3-3-3"/>
            </svg>
            Eligibility for Medicare Part D
          </h3>
        </div>
        <div class="p-6">
          <p class="text-gray-600 mb-4 leading-relaxed">To join a Medicare Prescription Drug Plan, you must meet these requirements:</p>
          <ul class="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li>Have Medicare Part A and/or Part B</li>
            <li>Live in the service area of the Medicare drug plan</li>
          </ul>
          <div class="bg-green-50 p-4 rounded-xl border border-green-200">
            <p class="text-sm text-green-800"><strong>Standalone or Included:</strong> You can get Part D as a standalone plan with Original Medicare, or it's often included in Medicare Advantage plans.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Important Considerations -->
    <div role="alert" class="relative w-full rounded-xl border-2 border-amber-200 p-6 bg-gradient-to-br from-amber-50 to-orange-50 mb-8">
      <div class="flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-amber-600 flex-shrink-0 mt-1">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
          <path d="M12 9v4"/>
          <path d="M12 17h.01"/>
        </svg>
        <div>
          <h5 class="mb-2 font-semibold text-amber-800">Important Considerations</h5>
          <div class="text-sm text-amber-700 leading-relaxed">
            Medicare eligibility doesn't happen automatically in all cases. While people receiving Social Security benefits are typically enrolled automatically in Medicare Parts A and B when they turn 65, others may need to actively apply. If you're still working past age 65 and have employer health insurance, you may want to delay enrolling in Medicare Part B to avoid penalties and unnecessary costs.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component displays Medicare eligibility information
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
.bg-white.rounded-xl.border-2.shadow-lg:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Eligibility criteria animations */
.bg-blue-50, .bg-green-50, .bg-purple-50 {
  animation: fadeInUp 0.4s ease-out both;
}

.bg-blue-50 { animation-delay: 0.2s; }
.bg-green-50 { animation-delay: 0.3s; }
.bg-purple-50 { animation-delay: 0.4s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>