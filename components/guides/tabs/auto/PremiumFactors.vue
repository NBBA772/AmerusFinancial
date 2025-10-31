<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Factors That Affect Your Auto Insurance Premium</h2>
    <div class="prose max-w-none mb-6">
      <p class="text-gray-600 leading-relaxed">Auto insurance companies use numerous factors to calculate your premium. Understanding these factors can help you anticipate costs and potentially find ways to lower your rates.</p>
    </div>

    <!-- Main Factor Categories -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <!-- Driver-Related Factors -->
      <div class="bg-white rounded-xl border-2 shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-blue-500 to-blue-600 py-4 px-6">
          <h3 class="font-semibold text-white flex items-center gap-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-white">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Driver-Related Factors
          </h3>
        </div>
        <div class="p-6 space-y-4">
          <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h4 class="font-semibold text-sm mb-2 text-blue-800">Age and Driving Experience</h4>
            <p class="text-xs text-blue-700 leading-relaxed">Young and inexperienced drivers typically pay more due to higher statistical risk. Rates often decrease significantly after age 25 and with years of driving experience.</p>
          </div>
          <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h4 class="font-semibold text-sm mb-2 text-blue-800">Driving Record</h4>
            <p class="text-xs text-blue-700 leading-relaxed">Accidents, moving violations, and DUIs can dramatically increase premiums. Most infractions affect your rates for 3-5 years.</p>
          </div>
          <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h4 class="font-semibold text-sm mb-2 text-blue-800">Credit History</h4>
            <p class="text-xs text-blue-700 leading-relaxed">In most states, insurers use credit-based insurance scores to help determine premiums. Better credit typically correlates with lower rates.</p>
          </div>
          <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h4 class="font-semibold text-sm mb-2 text-blue-800">Gender and Marital Status</h4>
            <p class="text-xs text-blue-700 leading-relaxed">Statistical risk differences can affect rates based on gender in most states. Married drivers often receive lower rates than single drivers.</p>
          </div>
          <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h4 class="font-semibold text-sm mb-2 text-blue-800">Occupation and Education</h4>
            <p class="text-xs text-blue-700 leading-relaxed">Some insurers offer discounts for certain professions and education levels that statistically correlate with lower claim frequencies.</p>
          </div>
        </div>
      </div>

      <!-- Vehicle-Related Factors -->
      <div class="bg-white rounded-xl border-2 shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-green-500 to-green-600 py-4 px-6">
          <h3 class="font-semibold text-white flex items-center gap-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-white">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <path d="M9 17h6"></path>
              <circle cx="17" cy="17" r="2"></circle>
            </svg>
            Vehicle-Related Factors
          </h3>
        </div>
        <div class="p-6 space-y-4">
          <div class="p-3 bg-green-50 rounded-lg border border-green-200">
            <h4 class="font-semibold text-sm mb-2 text-green-800">Make, Model, and Year</h4>
            <p class="text-xs text-green-700 leading-relaxed">Vehicles with higher repair costs, theft rates, and safety risks generally cost more to insure. Luxury and performance vehicles typically have higher premiums.</p>
          </div>
          <div class="p-3 bg-green-50 rounded-lg border border-green-200">
            <h4 class="font-semibold text-sm mb-2 text-green-800">Vehicle Safety Ratings</h4>
            <p class="text-xs text-green-700 leading-relaxed">Cars with better safety ratings and advanced safety features may qualify for lower premiums due to reduced injury risk.</p>
          </div>
          <div class="p-3 bg-green-50 rounded-lg border border-green-200">
            <h4 class="font-semibold text-sm mb-2 text-green-800">Anti-Theft Features</h4>
            <p class="text-xs text-green-700 leading-relaxed">Vehicles equipped with alarm systems, tracking devices, and immobilizers often qualify for theft prevention discounts.</p>
          </div>
          <div class="p-3 bg-green-50 rounded-lg border border-green-200">
            <h4 class="font-semibold text-sm mb-2 text-green-800">Vehicle Age and Value</h4>
            <p class="text-xs text-green-700 leading-relaxed">Newer, more expensive vehicles typically cost more to insure due to higher repair and replacement costs.</p>
          </div>
          <div class="p-3 bg-green-50 rounded-lg border border-green-200">
            <h4 class="font-semibold text-sm mb-2 text-green-800">Annual Mileage</h4>
            <p class="text-xs text-green-700 leading-relaxed">The more you drive, the higher your risk of an accident. Lower annual mileage often results in lower premiums.</p>
          </div>
        </div>
      </div>

      <!-- Policy and Location Factors -->
      <div class="bg-white rounded-xl border-2 shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-purple-500 to-purple-600 py-4 px-6">
          <h3 class="font-semibold text-white flex items-center gap-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-white">
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
              <path d="m15 9-6 6"></path>
              <path d="M9 9h.01"></path>
              <path d="M15 15h.01"></path>
            </svg>
            Policy and Location Factors
          </h3>
        </div>
        <div class="p-6 space-y-4">
          <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <h4 class="font-semibold text-sm mb-2 text-purple-800">Coverage Types and Limits</h4>
            <p class="text-xs text-purple-700 leading-relaxed">Higher coverage limits and additional coverages increase premiums. Deductible amounts inversely affect premium costs.</p>
          </div>
          <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <h4 class="font-semibold text-sm mb-2 text-purple-800">Geographic Location</h4>
            <p class="text-xs text-purple-700 leading-relaxed">Urban areas typically have higher rates than rural areas due to increased accident, theft, and vandalism risks. State insurance regulations also affect rates.</p>
          </div>
          <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <h4 class="font-semibold text-sm mb-2 text-purple-800">Claim History</h4>
            <p class="text-xs text-purple-700 leading-relaxed">Previous claims, even with other insurers, can increase your premiums. Some companies offer "accident forgiveness" for first-time accidents.</p>
          </div>
          <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <h4 class="font-semibold text-sm mb-2 text-purple-800">Continuous Coverage History</h4>
            <p class="text-xs text-purple-700 leading-relaxed">Lapses in coverage often result in higher premiums when you purchase a new policy. Maintaining continuous coverage demonstrates responsibility.</p>
          </div>
          <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <h4 class="font-semibold text-sm mb-2 text-purple-800">Insurance Company</h4>
            <p class="text-xs text-purple-700 leading-relaxed">Different insurers weigh rating factors differently and have unique pricing algorithms. This is why comparing quotes from multiple companies is essential.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Premium Impact Analysis Section -->
    <h3 class="text-xl font-semibold mb-4 text-gray-800">How Premium Factors Impact Different Drivers</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Driver Profiles Table -->
      <div class="bg-white rounded-xl border-2 shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
          <h3 class="font-semibold text-white text-lg">Premium Impact Analysis: Driver Profiles</h3>
          <p class="text-sm text-white/90">How various factors affect premium costs for different driver types</p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th class="h-12 px-4 text-left align-middle font-semibold text-gray-700">Driver Profile</th>
                <th class="h-12 px-4 text-left align-middle font-semibold text-gray-700">Primary Rating Factors</th>
                <th class="h-12 px-4 text-left align-middle font-semibold text-gray-700">Relative Premium Level</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="p-4 align-middle font-semibold text-gray-800">New Teen Driver</td>
                <td class="p-4 align-middle text-gray-600">Age, inexperience, student status</td>
                <td class="p-4 align-middle">
                  <span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Very High</span>
                </td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="p-4 align-middle font-semibold text-gray-800">Young Urban Professional</td>
                <td class="p-4 align-middle text-gray-600">Age, urban location, newer vehicle</td>
                <td class="p-4 align-middle">
                  <span class="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">High</span>
                </td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="p-4 align-middle font-semibold text-gray-800">Suburban Family</td>
                <td class="p-4 align-middle text-gray-600">Multiple vehicles, bundled policies</td>
                <td class="p-4 align-middle">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Moderate</span>
                </td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="p-4 align-middle font-semibold text-gray-800">Experienced Rural Driver</td>
                <td class="p-4 align-middle text-gray-600">Clean record, low-risk location</td>
                <td class="p-4 align-middle">
                  <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Low</span>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="p-4 align-middle font-semibold text-gray-800">Senior Driver</td>
                <td class="p-4 align-middle text-gray-600">Age, driving experience, potential discounts</td>
                <td class="p-4 align-middle">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Moderate</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Premium Weighting Chart -->
      <div class="bg-white rounded-xl border-2 shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
          <h3 class="font-semibold text-white text-lg">Premium Weighting by Factor</h3>
          <p class="text-sm text-white/90">The approximate influence of different factors on premium calculations</p>
        </div>
        <div class="p-6 space-y-4">
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold text-gray-700">Driving Record</span>
              <span class="text-sm text-gray-600">25-35%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] h-3 rounded-full" style="width: 30%;"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold text-gray-700">Age & Experience</span>
              <span class="text-sm text-gray-600">15-25%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] h-3 rounded-full" style="width: 20%;"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold text-gray-700">Vehicle Type</span>
              <span class="text-sm text-gray-600">15-20%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] h-3 rounded-full" style="width: 18%;"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold text-gray-700">Location</span>
              <span class="text-sm text-gray-600">10-15%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] h-3 rounded-full" style="width: 12%;"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold text-gray-700">Credit-Based Insurance Score</span>
              <span class="text-sm text-gray-600">10-15%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] h-3 rounded-full" style="width: 12%;"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold text-gray-700">Coverage Levels</span>
              <span class="text-sm text-gray-600">10-15%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] h-3 rounded-full" style="width: 10%;"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold text-gray-700">Other Factors</span>
              <span class="text-sm text-gray-600">5-10%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] h-3 rounded-full" style="width: 8%;"></div>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-4">Note: These percentages are approximate and vary between insurance companies and states.</p>
        </div>
      </div>
    </div>

    <!-- Controllable vs Uncontrollable Factors -->
    <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border-2 border-gray-200 mb-8">
      <h3 class="text-xl font-semibold mb-6 text-gray-800">Can You Control Your Premium Factors?</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-xl border-2 border-green-200">
          <h4 class="text-lg font-semibold mb-4 text-green-800 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
            Factors You Can Control
          </h4>
          <ul class="space-y-3">
            <li class="text-sm flex items-start gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-semibold text-gray-800">Driving Record:</span> 
                <span class="text-gray-600">Practice safe driving habits to avoid accidents and traffic violations</span>
              </div>
            </li>
            <li class="text-sm flex items-start gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-semibold text-gray-800">Vehicle Choice:</span> 
                <span class="text-gray-600">Select vehicles with lower insurance costs (better safety ratings, lower repair costs)</span>
              </div>
            </li>
            <li class="text-sm flex items-start gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-semibold text-gray-800">Credit Score:</span> 
                <span class="text-gray-600">Maintain good credit by paying bills on time and managing debt responsibly</span>
              </div>
            </li>
            <li class="text-sm flex items-start gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-semibold text-gray-800">Coverage Levels:</span> 
                <span class="text-gray-600">Choose appropriate coverage limits and deductibles for your situation</span>
              </div>
            </li>
            <li class="text-sm flex items-start gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-semibold text-gray-800">Annual Mileage:</span> 
                <span class="text-gray-600">Consider carpooling, public transit, or working from home to reduce miles driven</span>
              </div>
            </li>
            <li class="text-sm flex items-start gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-semibold text-gray-800">Insurance History:</span> 
                <span class="text-gray-600">Maintain continuous coverage without lapses</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-xl border-2 border-red-200">
          <h4 class="text-lg font-semibold mb-4 text-red-800 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600">
              <circle cx="12" cy="12" r="10"/>
              <path d="m15 9-6 6"/>
              <path d="m9 9 6 6"/>
            </svg>
            Factors Beyond Your Control
          </h4>
          <ul class="space-y-3">
            <li class="text-sm flex items-start gap-2">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-semibold text-gray-800">Age:</span> 
                <span class="text-gray-600">This factor changes automatically over time</span>
              </div>
            </li>
            <li class="text-sm flex items-start gap-2">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-semibold text-gray-800">Gender:</span> 
                <span class="text-gray-600">In most states, this rating factor is allowed (though some states prohibit it)</span>
              </div>
            </li>
            <li class="text-sm flex items-start gap-2">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-semibold text-gray-800">State Insurance Laws:</span> 
                <span class="text-gray-600">Regulations determine minimum coverage requirements and allowed rating factors</span>
              </div>
            </li>
            <li class="text-sm flex items-start gap-2">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-semibold text-gray-800">Claim History in Your Area:</span> 
                <span class="text-gray-600">High claim areas have higher base rates for all drivers</span>
              </div>
            </li>
            <li class="text-sm flex items-start gap-2">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-semibold text-gray-800">Insurance Company Algorithms:</span> 
                <span class="text-gray-600">Each insurer uses proprietary formulas to calculate rates</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div role="alert" class="relative w-full rounded-xl border-2 border-blue-200 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 mt-6">
        <div class="flex items-start gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-blue-600 flex-shrink-0 mt-1">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
          </svg>
          <div class="text-sm text-blue-700 leading-relaxed">
            While you can't control all factors, focusing on those within your influence—especially maintaining a clean driving record and good credit—can significantly impact your premiums over time. Additionally, regularly shopping around for quotes can help you find insurers whose rating models favor your particular driver profile.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component doesn't need any props or reactive data for now
// It's a static content component that displays premium factors information
</script>

<style scoped>
/* Animations for factor cards */
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

/* Hover effects for factor cards */
.bg-white.rounded-xl.border-2.shadow-lg:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Progress bar animations */
.bg-gradient-to-r.from-\[\#30BCFE\].to-\[\#2563eb\] {
  animation: progressFill 1s ease-out 0.5s both;
  transform-origin: left;
}

@keyframes progressFill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

/* Table hover effects */
tbody tr:hover {
  background-color: #f9fafb;
  transition: background-color 0.2s ease;
}

/* Factor item animations */
.space-y-4 > div {
  animation: fadeInUp 0.4s ease-out both;
}

.space-y-4 > div:nth-child(1) { animation-delay: 0.1s; }
.space-y-4 > div:nth-child(2) { animation-delay: 0.2s; }
.space-y-4 > div:nth-child(3) { animation-delay: 0.3s; }
.space-y-4 > div:nth-child(4) { animation-delay: 0.4s; }
.space-y-4 > div:nth-child(5) { animation-delay: 0.5s; }

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