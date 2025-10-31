<template>
  <div class="max-w-7xl mx-auto px-4 space-y-8">


    <!-- Step 1: Assess Your Needs -->
    <div class="max-w-7xl mx-auto px-4 space-y-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Types of Life Insurance Policies</h2>
      <div class="prose max-w-none mb-6">
        <p>Life insurance policies fall into two main categories: term life and permanent life insurance. Each type has its own advantages and is designed to meet different needs.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- Term Life -->
        <div class="rounded-lg border bg-white text-gray-900 shadow-sm border-l-4 border-l-blue-500">
          <div class="p-6 pt-6">
            <h3 class="text-xl font-medium mb-2">Term Life Insurance</h3>
            <p class="text-gray-500 mb-4">Provides coverage for a specific time period (term), typically 10, 20, or 30 years.</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Most affordable option</li>
              <li>Simple and straightforward</li>
              <li>Fixed premium payments</li>
              <li>No cash value component</li>
              <li>Expires at the end of the term</li>
            </ul>
            <div class="mt-4 p-3 bg-blue-50 rounded-md">
              <p class="text-sm font-medium">Best for:</p>
              <p class="text-sm">Young families, parents with dependent children, homeowners with mortgages, and those with temporary coverage needs.</p>
            </div>
          </div>
        </div>
        <!-- Whole Life -->
        <div class="rounded-lg border bg-white text-gray-900 shadow-sm border-l-4 border-l-green-500">
          <div class="p-6 pt-6">
            <h3 class="text-xl font-medium mb-2">Whole Life Insurance</h3>
            <p class="text-gray-500 mb-4">A permanent policy that provides lifelong coverage and includes a cash value component.</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Coverage for your entire life</li>
              <li>Cash value grows at a guaranteed rate</li>
              <li>Fixed premiums that never increase</li>
              <li>Can borrow against the cash value</li>
              <li>More expensive than term life</li>
            </ul>
            <div class="mt-4 p-3 bg-green-50 rounded-md">
              <p class="text-sm font-medium">Best for:</p>
              <p class="text-sm">Those seeking long-term coverage, people with permanent dependents, estate planning needs, or those who want a guaranteed cash value component.</p>
            </div>
          </div>
        </div>
        <!-- Universal Life -->
        <div class="rounded-lg border bg-white text-gray-900 shadow-sm border-l-4 border-l-purple-500">
          <div class="p-6 pt-6">
            <h3 class="text-xl font-medium mb-2">Universal Life Insurance</h3>
            <p class="text-gray-500 mb-4">A flexible permanent policy that allows you to adjust your premium payments and death benefit.</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Permanent coverage</li>
              <li>Flexible premium payments</li>
              <li>Adjustable death benefit</li>
              <li>Cash value grows based on current interest rates</li>
              <li>More complex than other types</li>
            </ul>
            <div class="mt-4 p-3 bg-purple-50 rounded-md">
              <p class="text-sm font-medium">Best for:</p>
              <p class="text-sm">Those who want permanent coverage with flexibility to adjust premiums and coverage as their needs change over time.</p>
            </div>
          </div>
        </div>
        <!-- Final Expense -->
        <div class="rounded-lg border bg-white text-gray-900 shadow-sm border-l-4 border-l-amber-500">
          <div class="p-6 pt-6">
            <h3 class="text-xl font-medium mb-2">Final Expense Insurance</h3>
            <p class="text-gray-500 mb-4">A type of whole life insurance with a smaller death benefit designed to cover end-of-life expenses.</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Smaller coverage amounts ($5,000-$50,000)</li>
              <li>Simplified underwriting (few or no health questions)</li>
              <li>Cannot be canceled due to health changes</li>
              <li>Higher premiums per $1,000 of coverage</li>
              <li>Often available to older adults or those with health issues</li>
            </ul>
            <div class="mt-4 p-3 bg-amber-50 rounded-md">
              <p class="text-sm font-medium">Best for:</p>
              <p class="text-sm">Seniors or those with health conditions who want to cover funeral costs and final expenses without burdening their families.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Term vs. Permanent Life Insurance: Key Differences Card -->
      <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
        <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
          <h3 class="text-xl font-semibold text-white">Term vs. Permanent Life Insurance: Key Differences</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse life-policy-comparison-table">
            <thead>
              <tr class="bg-gray-100">
                <th class="border p-2 text-left">Feature</th>
                <th class="border p-2 text-left">Term Life</th>
                <th class="border p-2 text-left">Permanent Life</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">Duration</td>
                <td class="border p-2">Specific time period (10, 20, 30 years)</td>
                <td class="border p-2">Lifetime coverage</td>
              </tr>
              <tr>
                <td class="border p-2">Cost</td>
                <td class="border p-2">Lower initial premiums</td>
                <td class="border p-2">Higher premiums</td>
              </tr>
              <tr>
                <td class="border p-2">Cash Value</td>
                <td class="border p-2">None</td>
                <td class="border p-2">Builds over time</td>
              </tr>
              <tr>
                <td class="border p-2">Premium Stability</td>
                <td class="border p-2">Level during term, increases at renewal</td>
                <td class="border p-2">Generally level for life (varies by policy)</td>
              </tr>
              <tr>
                <td class="border p-2">Flexibility</td>
                <td class="border p-2">Limited</td>
                <td class="border p-2">Can adjust death benefits or premiums</td>
              </tr>
              <tr>
                <td class="border p-2">Convertibility</td>
                <td class="border p-2">Often convertible to permanent life during term</td>
                <td class="border p-2">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Special Policy Features and Riders Card -->
      <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
        <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
          <h3 class="text-xl font-semibold text-white">Special Policy Features and Riders</h3>
        </div>
        <div class="p-6">
          <p class="mb-4">Life insurance policies can be customized with additional features called riders. These add-ons provide extra benefits and flexibility:</p>
          <ul class="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Accelerated Death Benefit:</strong> Allows you to receive a portion of the death benefit if diagnosed with a terminal illness.</li>
            <li><strong>Waiver of Premium:</strong> Waives premium payments if you become disabled and unable to work.</li>
            <li><strong>Guaranteed Insurability:</strong> Allows you to purchase additional coverage at specified times without a medical exam.</li>
            <li><strong>Accidental Death Benefit:</strong> Pays an additional benefit if death is the result of an accident.</li>
            <li><strong>Child or Spouse Rider:</strong> Adds coverage for your children or spouse under your policy.</li>
            <li><strong>Long-Term Care Rider:</strong> Allows you to use a portion of your death benefit to pay for long-term care expenses.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Step 2: Research Policy Types -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="p-6">
        <div class="flex items-start gap-4">
          <div class="h-10 w-10 rounded-full bg-gradient-to-r from-[#30BCFE] to-[#2563eb] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">2</div>
          <div class="flex-grow">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Research Policy Types</h3>
            <p class="text-gray-600 mb-3 leading-relaxed">Learn about the different policy types and features to find the best fit for your situation.</p>
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <p class="font-semibold mb-3 text-green-800">Consider:</p>
              <ul class="space-y-2 text-sm text-green-700">
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Term vs. permanent life insurance</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Riders and additional features that may benefit you</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cash value growth potential (for permanent policies)</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Convertibility options (for term policies)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 3: Compare Insurance Companies -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="p-6">
        <div class="flex items-start gap-4">
          <div class="h-10 w-10 rounded-full bg-gradient-to-r from-[#30BCFE] to-[#2563eb] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">3</div>
          <div class="flex-grow">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Compare Insurance Companies</h3>
            <p class="text-gray-600 mb-3 leading-relaxed">Not all insurance companies are created equal. Research financial strength, customer service, and policy offerings.</p>
            <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <p class="font-semibold mb-3 text-purple-800">Look for:</p>
              <ul class="space-y-2 text-sm text-purple-700">
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Financial strength ratings (A.M. Best, Moody's, S&P)</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Customer satisfaction scores</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Policy features and flexibility</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Claims-paying history</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Company longevity and stability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 4: Get Multiple Quotes -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="p-6">
        <div class="flex items-start gap-4">
          <div class="h-10 w-10 rounded-full bg-gradient-to-r from-[#30BCFE] to-[#2563eb] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">4</div>
          <div class="flex-grow">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Get Multiple Quotes</h3>
            <p class="text-gray-600 mb-3 leading-relaxed">Rates can vary significantly between companies for the same coverage. Shop around to find the best value.</p>
            <div class="bg-orange-50 p-4 rounded-xl border border-orange-200">
              <p class="font-semibold mb-3 text-orange-800">Options for getting quotes:</p>
              <ul class="space-y-2 text-sm text-orange-700">
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Work with an independent insurance agent who represents multiple companies</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Use online comparison tools</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contact insurance companies directly</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Request quotes for different coverage amounts and term lengths</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 5: Apply for Coverage -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="p-6">
        <div class="flex items-start gap-4">
          <div class="h-10 w-10 rounded-full bg-gradient-to-r from-[#30BCFE] to-[#2563eb] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">5</div>
          <div class="flex-grow">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Apply for Coverage</h3>
            <p class="text-gray-600 mb-3 leading-relaxed">Once you've selected a policy, you'll need to complete an application and possibly undergo underwriting.</p>
            <div class="bg-cyan-50 p-4 rounded-xl border border-cyan-200">
              <p class="font-semibold mb-3 text-cyan-800">The application process typically includes:</p>
              <ul class="space-y-2 text-sm text-cyan-700 mb-4">
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Completing a detailed application form</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Medical exam (for most fully underwritten policies)</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Providing medical records and history</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Verification of information</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Risk assessment by the insurer</span>
                </li>
              </ul>
              <p class="text-sm text-cyan-700">Some policies offer "simplified issue" or "guaranteed issue" options with fewer or no health questions, but these typically come with higher premiums or lower coverage limits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 6: Review the Policy Carefully -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="p-6">
        <div class="flex items-start gap-4">
          <div class="h-10 w-10 rounded-full bg-gradient-to-r from-[#30BCFE] to-[#2563eb] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">6</div>
          <div class="flex-grow">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Review the Policy Carefully</h3>
            <p class="text-gray-600 mb-3 leading-relaxed">Before accepting the policy, make sure you understand all terms and conditions.</p>
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <p class="font-semibold mb-3 text-indigo-800">Pay special attention to:</p>
              <ul class="space-y-2 text-sm text-indigo-700">
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Coverage amount and term length</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Premium amount and payment schedule</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Policy exclusions and limitations</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contestability period (typically 2 years)</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Free look period (typically 10-30 days)</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cancellation and refund policies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 7: Monitor and Review Regularly -->
    <div class="bg-white rounded-xl border-2 shadow-lg mb-8 overflow-hidden">
      <div class="p-6">
        <div class="flex items-start gap-4">
          <div class="h-10 w-10 rounded-full bg-gradient-to-r from-[#30BCFE] to-[#2563eb] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">7</div>
          <div class="flex-grow">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Monitor and Review Regularly</h3>
            <p class="text-gray-600 mb-3 leading-relaxed">Life changes, and so should your life insurance coverage. Review your policy periodically.</p>
            <div class="bg-teal-50 p-4 rounded-xl border border-teal-200">
              <p class="font-semibold mb-3 text-teal-800">Review your policy when you experience:</p>
              <ul class="space-y-2 text-sm text-teal-700">
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Marriage or divorce</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Birth or adoption of a child</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Purchase of a home</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Significant change in income</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Career change</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Children finishing college</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Approaching retirement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Working with a Professional Section -->
    <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border-2 border-gray-200 mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Working with a Professional</h3>
      <p class="text-gray-600 mb-6 leading-relaxed">While you can purchase life insurance directly from many companies, working with an independent insurance agent or financial advisor offers several advantages:</p>
      
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3">
          <div class="w-2 h-2 bg-[#30BCFE] rounded-full mt-2 flex-shrink-0"></div>
          <span class="text-gray-700">Access to multiple insurance companies and policy types</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-2 h-2 bg-[#30BCFE] rounded-full mt-2 flex-shrink-0"></div>
          <span class="text-gray-700">Personalized needs analysis and coverage recommendations</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-2 h-2 bg-[#30BCFE] rounded-full mt-2 flex-shrink-0"></div>
          <span class="text-gray-700">Help navigating complex policy features and riders</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-2 h-2 bg-[#30BCFE] rounded-full mt-2 flex-shrink-0"></div>
          <span class="text-gray-700">Assistance with the application and underwriting process</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-2 h-2 bg-[#30BCFE] rounded-full mt-2 flex-shrink-0"></div>
          <span class="text-gray-700">Ongoing service and policy reviews</span>
        </li>
      </ul>

      <NuxtLink 
        to="/contact"
        class="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white hover:shadow-xl"
      >
        Speak with Our Insurance Experts
      </NuxtLink>
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
          <h5 class="mb-2 font-semibold text-amber-800">Important Reminder</h5>
          <p class="text-sm text-amber-800 leading-relaxed">
            Take your time with this process. Life insurance is a long-term financial commitment, and choosing the right policy requires careful consideration of your current and future needs. Don't rush into a decision, and make sure you fully understand all policy terms before signing.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component displays the life insurance buying guide
// It's a static content component focused on the step-by-step process
</script>

<style scoped>
/* Zebra striping and hover for policy comparison table */
.life-policy-comparison-table tbody tr:nth-child(even) {
  background-color: #f3f4f6; /* Tailwind gray-100 */
}
.life-policy-comparison-table tbody tr:hover {
  background-color: #e0f2fe; /* Tailwind sky-100 */
  transition: background-color 0.2s ease;
}

/* Animations for step cards */
.space-y-8 > div {
  animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.space-y-8 > div:nth-child(1) { animation-delay: 0.1s; }
.space-y-8 > div:nth-child(2) { animation-delay: 0.2s; }
.space-y-8 > div:nth-child(3) { animation-delay: 0.3s; }
.space-y-8 > div:nth-child(4) { animation-delay: 0.4s; }
.space-y-8 > div:nth-child(5) { animation-delay: 0.5s; }
.space-y-8 > div:nth-child(6) { animation-delay: 0.6s; }
.space-y-8 > div:nth-child(7) { animation-delay: 0.7s; }

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Hover effects for step cards */
.bg-white.rounded-xl.border-2.shadow-lg:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Step number pulse animation */
.h-10.w-10.rounded-full {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(48, 188, 254, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(48, 188, 254, 0);
  }
}

/* List item animations */
.space-y-2 > li {
  animation: fadeInUp 0.4s ease-out both;
}

.space-y-2 > li:nth-child(1) { animation-delay: 0.1s; }
.space-y-2 > li:nth-child(2) { animation-delay: 0.2s; }
.space-y-2 > li:nth-child(3) { animation-delay: 0.3s; }
.space-y-2 > li:nth-child(4) { animation-delay: 0.4s; }
.space-y-2 > li:nth-child(5) { animation-delay: 0.5s; }
.space-y-2 > li:nth-child(6) { animation-delay: 0.6s; }
.space-y-2 > li:nth-child(7) { animation-delay: 0.7s; }

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

/* CTA button hover animation */
.hover\:scale-105:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Gradient backgrounds */
.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>