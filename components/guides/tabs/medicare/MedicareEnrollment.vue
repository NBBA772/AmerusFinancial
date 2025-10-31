<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Medicare Enrollment Periods</h2>
    <div class="prose max-w-none mb-6">
      <p class="text-gray-600 leading-relaxed">There are specific times when you can sign up for Medicare. Missing these enrollment periods could result in higher premiums or gaps in coverage. Understanding these periods is crucial for maintaining continuous healthcare coverage.</p>
    </div>

    <!-- Initial Enrollment Period -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Initial Enrollment Period (IEP)</h3>
      </div>
      <div class="p-6">
        <div class="flex items-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-[#30BCFE]">
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          <p class="font-semibold text-gray-800 text-lg">7-month period around your 65th birthday</p>
        </div>
        <p class="text-gray-600 mb-4 leading-relaxed">Your Initial Enrollment Period is a 7-month period that begins 3 months before the month you turn 65, includes the month you turn 65, and ends 3 months after the month you turn 65.</p>
        <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <p class="font-semibold mb-2 text-blue-800">Example:</p>
          <p class="text-blue-700 text-sm">If you turn 65 on July 15, your IEP is from April 1 to October 31.</p>
        </div>
      </div>
    </div>

    <!-- General Enrollment Period -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-green-500 to-green-600 py-4 px-6">
        <h3 class="text-xl font-semibold text-white">General Enrollment Period (GEP)</h3>
      </div>
      <div class="p-6">
        <div class="flex items-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-green-500">
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          <p class="font-semibold text-gray-800 text-lg">January 1 - March 31 each year</p>
        </div>
        <p class="text-gray-600 mb-4 leading-relaxed">If you didn't sign up for Part A and/or Part B during your Initial Enrollment Period, you can sign up during the General Enrollment Period from January 1 to March 31 each year. Your coverage will start on July 1.</p>
        <div role="alert" class="relative w-full rounded-xl border-2 border-amber-200 p-4 bg-gradient-to-br from-amber-50 to-orange-50">
          <div class="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-amber-600 flex-shrink-0 mt-1">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            <div class="text-sm text-amber-800 leading-relaxed">
              <strong>Important:</strong> You may have to pay a higher premium for late enrollment in Part B and/or Part D.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Special Enrollment Period -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-purple-500 to-purple-600 py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Special Enrollment Period (SEP)</h3>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4 leading-relaxed">You may qualify for a Special Enrollment Period to sign up for Part A and/or Part B if you meet certain qualifying life events or circumstances.</p>
        <div class="bg-purple-50 p-4 rounded-xl border border-purple-200 mb-4">
          <p class="font-semibold mb-3 text-purple-800">Qualifying situations include:</p>
          <ul class="space-y-2 text-sm text-purple-700">
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>You're covered under a group health plan based on current employment (yours or your spouse's)</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>You have COBRA coverage</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>You move out of your plan's service area</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>You lose other coverage</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Your plan no longer serves your area</span>
            </li>
          </ul>
        </div>
        <p class="text-gray-600 text-sm italic">The length and timing of your SEP depend on your specific situation.</p>
      </div>
    </div>

    <!-- Open Enrollment Period -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-orange-500 to-red-500 py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Open Enrollment Period</h3>
      </div>
      <div class="p-6">
        <div class="flex items-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-orange-500">
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          <p class="font-semibold text-gray-800 text-lg">October 15 - December 7 each year</p>
        </div>
        <p class="text-gray-600 mb-4 leading-relaxed">During this period, you can make changes to your Medicare coverage for the following year.</p>
        <div class="bg-orange-50 p-4 rounded-xl border border-orange-200">
          <p class="font-semibold mb-3 text-orange-800">During this period, you can:</p>
          <ul class="space-y-2 text-sm text-orange-700">
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Switch from Original Medicare to a Medicare Advantage Plan</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Switch from a Medicare Advantage Plan back to Original Medicare</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Switch from one Medicare Advantage Plan to another</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Join, switch, or drop a Medicare Prescription Drug Plan</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Medicare Advantage Open Enrollment Period -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-cyan-500 to-blue-500 py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Medicare Advantage Open Enrollment Period</h3>
      </div>
      <div class="p-6">
        <div class="flex items-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-cyan-500">
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          <p class="font-semibold text-gray-800 text-lg">January 1 - March 31 each year</p>
        </div>
        <p class="text-gray-600 mb-4 leading-relaxed">If you're enrolled in a Medicare Advantage Plan, you have additional options during this period.</p>
        <div class="bg-cyan-50 p-4 rounded-xl border border-cyan-200">
          <p class="font-semibold mb-3 text-cyan-800">During this period, you can:</p>
          <ul class="space-y-2 text-sm text-cyan-700">
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Switch to a different Medicare Advantage Plan</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Drop your Medicare Advantage Plan and return to Original Medicare</span>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Sign up for a Medicare Prescription Drug Plan if you return to Original Medicare</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Timeline Overview -->
    <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border-2 border-gray-200 mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Medicare Enrollment Timeline Overview</h3>
      <p class="text-gray-600 mb-6 leading-relaxed">Understanding when each enrollment period occurs throughout the year can help you plan ahead and avoid missing important deadlines.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div class="text-2xl font-bold text-[#30BCFE] mb-2">Q1</div>
          <div class="text-sm font-semibold text-gray-800 mb-1">Jan 1 - Mar 31</div>
          <div class="text-xs text-gray-600">General Enrollment Period & Medicare Advantage Open Enrollment</div>
        </div>
        <div class="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div class="text-2xl font-bold text-green-500 mb-2">Q2</div>
          <div class="text-sm font-semibold text-gray-800 mb-1">Apr 1 - Jun 30</div>
          <div class="text-xs text-gray-600">SEP opportunities based on qualifying events</div>
        </div>
        <div class="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div class="text-2xl font-bold text-purple-500 mb-2">Q3</div>
          <div class="text-sm font-semibold text-gray-800 mb-1">Jul 1 - Sep 30</div>
          <div class="text-xs text-gray-600">SEP opportunities & IEP for some individuals</div>
        </div>
        <div class="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div class="text-2xl font-bold text-orange-500 mb-2">Q4</div>
          <div class="text-sm font-semibold text-gray-800 mb-1">Oct 15 - Dec 7</div>
          <div class="text-xs text-gray-600">Open Enrollment Period for all Medicare beneficiaries</div>
        </div>
      </div>
    </div>

    <!-- Important Reminders -->
    <div role="alert" class="relative w-full rounded-xl border-2 border-blue-200 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
      <div class="flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-blue-600 flex-shrink-0 mt-1">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" x2="12" y1="8" y2="12"></line>
          <line x1="12" x2="12.01" y1="16" y2="16"></line>
        </svg>
        <div>
          <h5 class="mb-2 font-semibold text-blue-800">Important Reminders</h5>
          <ul class="space-y-2 text-sm text-blue-700 leading-relaxed">
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              Missing enrollment deadlines can result in late enrollment penalties
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              Keep track of your enrollment periods and set reminders
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              Special circumstances may qualify you for a Special Enrollment Period
            </li>
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              Always verify current enrollment periods as they may change
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component displays Medicare enrollment periods information
// It's a static content component focused on Medicare enrollment deadlines and periods
</script>

<style scoped>
/* Animations for enrollment period cards */
.bg-white.rounded-xl.border-2.shadow-lg {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.bg-white.rounded-xl.border-2.shadow-lg:nth-child(1) { animation-delay: 0.1s; }
.bg-white.rounded-xl.border-2.shadow-lg:nth-child(2) { animation-delay: 0.2s; }
.bg-white.rounded-xl.border-2.shadow-lg:nth-child(3) { animation-delay: 0.3s; }
.bg-white.rounded-xl.border-2.shadow-lg:nth-child(4) { animation-delay: 0.4s; }
.bg-white.rounded-xl.border-2.shadow-lg:nth-child(5) { animation-delay: 0.5s; }

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

/* Hover effects for enrollment period cards */
.bg-white.rounded-xl.border-2.shadow-lg:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Timeline card animations */
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

/* Icon pulse animation */
svg {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* List item animations */
.space-y-2 > li,
.space-y-3 > li {
  animation: fadeInLeft 0.4s ease-out both;
}

.space-y-2 > li:nth-child(1),
.space-y-3 > li:nth-child(1) { animation-delay: 0.1s; }
.space-y-2 > li:nth-child(2),
.space-y-3 > li:nth-child(2) { animation-delay: 0.2s; }
.space-y-2 > li:nth-child(3),
.space-y-3 > li:nth-child(3) { animation-delay: 0.3s; }
.space-y-2 > li:nth-child(4),
.space-y-3 > li:nth-child(4) { animation-delay: 0.4s; }
.space-y-2 > li:nth-child(5),
.space-y-3 > li:nth-child(5) { animation-delay: 0.5s; }

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

/* Alert box subtle animation */
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
</style>