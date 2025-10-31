<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Auto Insurance Coverage Types</h2>
    <div class="prose max-w-none mb-6">
      <p class="text-gray-600 leading-relaxed">Auto insurance policies are composed of different coverage types, each protecting you in different scenarios. Understanding these coverage options is essential for building a policy that meets your needs.</p>
    </div>

    <!-- Primary Coverage Types -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Liability Coverage -->
      <div class="bg-white rounded-xl border-2 shadow-lg border-l-4 border-l-red-500 overflow-hidden">
        <div class="p-6">
          <div class="flex items-start gap-3 mb-4">
            <div class="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="M7 21h10"></path>
                <path d="M12 3v18"></path>
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-1 text-gray-800">Liability Coverage</h3>
              <p class="text-sm text-gray-600">Protection for damages you cause to others</p>
            </div>
          </div>
          <h4 class="text-base font-semibold mb-2 text-gray-800">What It Covers:</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-sm text-gray-700">
            <li><strong>Bodily injury liability:</strong> Medical expenses, lost wages, and pain and suffering of others injured in an accident you cause</li>
            <li><strong>Property damage liability:</strong> Repair or replacement costs for other people's property (vehicles, structures, etc.) damaged in an accident you cause</li>
          </ul>
          <div class="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <p class="text-sm font-medium text-gray-700">Required in nearly all states</p>
          </div>
          <div class="bg-red-50 p-4 rounded-xl border border-red-200">
            <p class="text-sm text-red-800"><strong>Expert Tip:</strong> Consider limits higher than your state's minimum requirements. A serious accident can easily exceed minimum limits, leaving you personally responsible for the difference.</p>
          </div>
        </div>
      </div>

      <!-- Collision Coverage -->
      <div class="bg-white rounded-xl border-2 shadow-lg border-l-4 border-l-blue-500 overflow-hidden">
        <div class="p-6">
          <div class="flex items-start gap-3 mb-4">
            <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <path d="M9 17h6"></path>
                <circle cx="17" cy="17" r="2"></circle>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-1 text-gray-800">Collision Coverage</h3>
              <p class="text-sm text-gray-600">Protection for your vehicle in an accident</p>
            </div>
          </div>
          <h4 class="text-base font-semibold mb-2 text-gray-800">What It Covers:</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-sm text-gray-700">
            <li>Repair costs for your vehicle after a collision with another vehicle or object</li>
            <li>Replacement costs if your vehicle is totaled in an accident</li>
            <li>Coverage regardless of who is at fault in the accident</li>
          </ul>
          <div class="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <p class="text-sm font-medium text-gray-700">Optional, but typically required if you have a loan or lease</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <p class="text-sm text-blue-800"><strong>Expert Tip:</strong> Collision coverage is subject to a deductible—the amount you pay out of pocket before insurance kicks in. Choosing a higher deductible lowers your premium but increases your out-of-pocket costs in a claim.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Coverage Types -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Comprehensive Coverage -->
      <div class="bg-white rounded-xl border-2 shadow-lg border-l-4 border-l-green-500 overflow-hidden">
        <div class="p-6">
          <div class="flex items-start gap-3 mb-4">
            <div class="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M22 12a10.06 10.06 1 0 0-20 0Z"></path>
                <path d="M12 12v8a2 2 0 0 0 4 0"></path>
                <path d="M12 2v1"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-1 text-gray-800">Comprehensive Coverage</h3>
              <p class="text-sm text-gray-600">Protection from non-collision incidents</p>
            </div>
          </div>
          <h4 class="text-base font-semibold mb-2 text-gray-800">What It Covers:</h4>
          <ul class="list-disc pl-5 space-y-1 mb-4 text-sm text-gray-700">
            <li>Theft of your vehicle</li>
            <li>Vandalism and malicious damage</li>
            <li>Natural disasters (floods, hurricanes, earthquakes)</li>
            <li>Fire damage</li>
            <li>Falling objects (trees, branches, etc.)</li>
            <li>Animal collisions</li>
            <li>Windshield and glass damage</li>
          </ul>
          <div class="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <p class="text-sm font-medium text-gray-700">Optional, but typically required with a loan or lease</p>
          </div>
          <div class="bg-green-50 p-4 rounded-xl border border-green-200">
            <p class="text-sm text-green-800"><strong>Expert Tip:</strong> Comprehensive coverage also has a deductible, but it's typically lower than collision deductibles. Some insurers offer separate, lower deductibles for glass-only claims.</p>
          </div>
        </div>
      </div>

      <!-- Personal Injury Protection -->
      <div class="bg-white rounded-xl border-2 shadow-lg border-l-4 border-l-purple-500 overflow-hidden">
        <div class="p-6">
          <div class="flex items-start gap-3 mb-4">
            <div class="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-1 text-gray-800">Personal Injury Protection (PIP)</h3>
              <p class="text-sm text-gray-600">Medical coverage for you and your passengers</p>
            </div>
          </div>
          <h4 class="text-base font-semibold mb-2 text-gray-800">What It Covers:</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-sm text-gray-700">
            <li>Medical expenses for you and your passengers</li>
            <li>Lost wages due to accident injuries</li>
            <li>Essential services (childcare, housekeeping) you can't perform due to injuries</li>
            <li>Funeral expenses in case of a fatal accident</li>
          </ul>
          <div class="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <p class="text-sm font-medium text-gray-700">Required in "no-fault" states, optional in others</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <p class="text-sm text-purple-800"><strong>Expert Tip:</strong> PIP coverage is particularly valuable if you don't have health insurance or if your health insurance has high deductibles or limited coverage for accident-related injuries.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Specialized Coverage Types -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Uninsured/Underinsured Motorist -->
      <div class="bg-white rounded-xl border-2 shadow-lg border-l-4 border-l-amber-500 overflow-hidden">
        <div class="p-6">
          <div class="flex items-start gap-3 mb-4">
            <div class="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-1 text-gray-800">Uninsured/Underinsured Motorist</h3>
              <p class="text-sm text-gray-600">Protection from drivers with insufficient insurance</p>
            </div>
          </div>
          <h4 class="text-base font-semibold mb-2 text-gray-800">What It Covers:</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-sm text-gray-700">
            <li><strong>Uninsured motorist:</strong> Damages and injuries caused by a driver with no insurance</li>
            <li><strong>Underinsured motorist:</strong> Additional coverage when at-fault driver's insurance is insufficient to cover your damages</li>
            <li>Hit-and-run accident damages</li>
          </ul>
          <div class="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <p class="text-sm font-medium text-gray-700">Required in some states, optional in others</p>
          </div>
          <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
            <p class="text-sm text-amber-800"><strong>Expert Tip:</strong> This coverage is especially important in states with high percentages of uninsured drivers. It protects you from having to pay out of pocket for someone else's negligence.</p>
          </div>
        </div>
      </div>

      <!-- Additional Coverage Options -->
      <div class="bg-white rounded-xl border-2 shadow-lg border-l-4 border-l-cyan-500 overflow-hidden">
        <div class="p-6">
          <div class="flex items-start gap-3 mb-4">
            <div class="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-1 text-gray-800">Additional Coverage Options</h3>
              <p class="text-sm text-gray-600">Specialized protection for specific needs</p>
            </div>
          </div>
          <ul class="list-disc pl-5 space-y-3 mb-4 text-sm text-gray-700">
            <li><strong>Roadside Assistance:</strong> Covers towing, battery jumps, flat tire changes, lockout service, and fuel delivery when your vehicle breaks down</li>
            <li><strong>Rental Car Reimbursement:</strong> Pays for a rental car while your vehicle is being repaired after a covered claim</li>
            <li><strong>Gap Insurance:</strong> Covers the "gap" between what you owe on your auto loan and your car's actual cash value if it's totaled</li>
            <li><strong>New Car Replacement:</strong> Pays for a brand-new car of the same make and model if your new car is totaled within the first year or two</li>
            <li><strong>Custom Equipment Coverage:</strong> Protects aftermarket additions like custom stereos, rims, and other modifications</li>
          </ul>
          <div class="bg-cyan-50 p-4 rounded-xl border border-cyan-200">
            <p class="text-sm text-cyan-800"><strong>Expert Tip:</strong> These optional coverages typically add relatively small amounts to your premium but can provide significant value and peace of mind in specific situations.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Policy Limits and Deductibles Section -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
        <h3 class="text-xl font-semibold text-white">Understanding Your Policy Limits and Deductibles</h3>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-semibold mb-3 text-gray-800">Coverage Limits</h4>
            <p class="text-sm mb-4 text-gray-600">Policy limits are expressed in different formats depending on the coverage type:</p>
            <div class="space-y-4">
              <div class="p-4 border-2 border-gray-200 rounded-xl bg-gray-50">
                <h5 class="font-semibold mb-2 text-sm text-gray-800">Split Limits (e.g., 100/300/50)</h5>
                <ul class="list-disc pl-5 space-y-1 text-xs text-gray-600">
                  <li>First number: Maximum bodily injury coverage per person ($100,000)</li>
                  <li>Second number: Maximum bodily injury coverage per accident ($300,000)</li>
                  <li>Third number: Maximum property damage coverage per accident ($50,000)</li>
                </ul>
              </div>
              <div class="p-4 border-2 border-gray-200 rounded-xl bg-gray-50">
                <h5 class="font-semibold mb-2 text-sm text-gray-800">Combined Single Limit (e.g., CSL $300,000)</h5>
                <p class="text-xs text-gray-600">One total limit that applies to all damages (bodily injury and property damage) in a single accident</p>
              </div>
              <div class="p-4 border-2 border-gray-200 rounded-xl bg-gray-50">
                <h5 class="font-semibold mb-2 text-sm text-gray-800">Actual Cash Value (ACV)</h5>
                <p class="text-xs text-gray-600">For collision and comprehensive coverage—the replacement cost of your vehicle minus depreciation</p>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-3 text-gray-800">Deductibles</h4>
            <p class="text-sm mb-4 text-gray-600">The amount you pay out-of-pocket before your insurance covers the rest:</p>
            <div class="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 mb-4">
              <h5 class="font-semibold mb-2 text-sm text-gray-800">How Deductibles Work</h5>
              <div class="mb-4">
                <p class="text-xs mb-2 text-gray-700"><strong>Example Scenario:</strong> Your car sustains $3,000 in damage in a covered accident</p>
                <ul class="list-disc pl-5 space-y-1 text-xs text-gray-600">
                  <li>With a $500 deductible: You pay $500, insurance pays $2,500</li>
                  <li>With a $1,000 deductible: You pay $1,000, insurance pays $2,000</li>
                </ul>
              </div>
              <h5 class="font-semibold mb-2 text-sm text-gray-800">Deductible Trade-offs:</h5>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold text-xs mb-1 text-green-700">Higher Deductible:</p>
                  <ul class="list-disc pl-5 space-y-1 text-xs text-gray-600">
                    <li>Lower premium costs</li>
                    <li>Higher out-of-pocket costs when filing a claim</li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold text-xs mb-1 text-blue-700">Lower Deductible:</p>
                  <ul class="list-disc pl-5 space-y-1 text-xs text-gray-600">
                    <li>Higher premium costs</li>
                    <li>Lower out-of-pocket costs when filing a claim</li>
                  </ul>
                </div>
              </div>
            </div>
            <div role="alert" class="relative w-full rounded-xl border-2 border-amber-200 p-4 bg-gradient-to-br from-amber-50 to-orange-50">
              <div class="text-xs text-amber-800 leading-relaxed"><strong>Important:</strong> Make sure your deductible amount is something you can afford to pay if you need to file a claim. If you can't easily access $1,000 in an emergency, a lower deductible might be worth the higher premium.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- State Requirements Table -->
    <div class="bg-white rounded-xl border-2 shadow-lg overflow-hidden mb-8">
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
        <h3 class="text-xl font-semibold text-white">State Minimum Requirements Comparison</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th class="h-12 px-4 text-left align-middle font-semibold text-gray-700">State</th>
              <th class="h-12 px-4 text-left align-middle font-semibold text-gray-700">Bodily Injury Liability<br><span class="font-normal text-xs">(per person/per accident)</span></th>
              <th class="h-12 px-4 text-left align-middle font-semibold text-gray-700">Property Damage Liability</th>
              <th class="h-12 px-4 text-left align-middle font-semibold text-gray-700">PIP/Medical Payments</th>
              <th class="h-12 px-4 text-left align-middle font-semibold text-gray-700">Uninsured Motorist</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              <td class="p-4 align-middle font-semibold text-gray-800">California</td>
              <td class="p-4 align-middle text-gray-600">$15,000/$30,000</td>
              <td class="p-4 align-middle text-gray-600">$5,000</td>
              <td class="p-4 align-middle text-gray-600">Not required</td>
              <td class="p-4 align-middle text-gray-600">Not required</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              <td class="p-4 align-middle font-semibold text-gray-800">Florida</td>
              <td class="p-4 align-middle text-gray-600">Not required</td>
              <td class="p-4 align-middle text-gray-600">$10,000 (PDL)</td>
              <td class="p-4 align-middle text-gray-600">$10,000 (PIP)</td>
              <td class="p-4 align-middle text-gray-600">Not required</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              <td class="p-4 align-middle font-semibold text-gray-800">New York</td>
              <td class="p-4 align-middle text-gray-600">$25,000/$50,000</td>
              <td class="p-4 align-middle text-gray-600">$10,000</td>
              <td class="p-4 align-middle text-gray-600">$50,000 (PIP)</td>
              <td class="p-4 align-middle text-gray-600">$25,000/$50,000</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              <td class="p-4 align-middle font-semibold text-gray-800">Texas</td>
              <td class="p-4 align-middle text-gray-600">$30,000/$60,000</td>
              <td class="p-4 align-middle text-gray-600">$25,000</td>
              <td class="p-4 align-middle text-gray-600">Not required</td>
              <td class="p-4 align-middle text-gray-600">Not required</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="p-4 align-middle font-semibold text-gray-800">Illinois</td>
              <td class="p-4 align-middle text-gray-600">$25,000/$50,000</td>
              <td class="p-4 align-middle text-gray-600">$20,000</td>
              <td class="p-4 align-middle text-gray-600">Not required</td>
              <td class="p-4 align-middle text-gray-600">$25,000/$50,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Recommendation Alert -->
    <div role="alert" class="relative w-full rounded-xl border-2 border-blue-200 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
      <div class="flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-blue-600 flex-shrink-0 mt-1">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" x2="12" y1="8" y2="12"></line>
          <line x1="12" x2="12.01" y1="16" y2="16"></line>
        </svg>
        <div>
          <h5 class="mb-2 font-semibold text-blue-800">Recommended Coverage</h5>
          <div class="text-sm text-blue-700 leading-relaxed">While state minimums satisfy legal requirements, they often provide inadequate protection. For most drivers, we recommend liability limits of at least 100/300/100, plus comprehensive and collision coverage with deductibles that fit your financial situation. This provides a much stronger safety net against serious accidents and lawsuits.</div>
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
/* Animations for coverage cards */
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