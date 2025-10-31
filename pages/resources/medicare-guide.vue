<template>
  <PatternSection>
    <HomepageHeroSection />
      <main class="flex-grow">
        <div class="container mx-auto px-4 py-12">
            <Breadcrumbs
            currentPageTitle="Medicare Guide"
            parentTitle="Resources"
            parentUrl="/resources"
            />

                <div class="mb-6 animate-fade-in-up">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Column: Text Content -->
        <div class="text-center md:text-left">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Medicare Guide: Understanding Your Coverage Options</h1>


          <!-- Feature Tags -->
          <div class="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-blue-50 text-blue-600 border-blue-200">
              Coverage Options
            </div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-green-50 text-green-600 border-green-200">
              Premium Factors
            </div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-purple-50 text-purple-600 border-purple-200">
              Claims Process
            </div>
            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-amber-50 text-amber-600 border-amber-200">
              Saving Money
            </div>
          </div>

          <!-- Update and Reading Time -->
        <div class="bg-white/80 p-6 rounded-xl border-2 border-gray-200 mb-8 flex items-start gap-3 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-5 w-5 text-[#30BCFE] mt-0.5">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <div>
            <p class="text-sm text-gray-600">Last updated: March 15, 2025</p>
            <p class="text-sm text-gray-600">Reading time: 12 minutes</p>
          </div>
        </div>

          <p class="text-lg text-gray-600 max-w-3xl mx-auto md:mx-0 mb-6">
           Medicare is a federal health insurance program primarily for people who are 65 or older, certain younger people with disabilities, and people with End-Stage Renal Disease.
          </p>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto md:mx-0 mb-6">Understanding Medicare can be complex, but it's essential to make informed decisions about your healthcare coverage. This guide breaks down everything you need to know about Medicare, including eligibility requirements, enrollment periods, different parts of Medicare, costs, and more.</p>


 

            <div role="alert" class="relative w-full rounded-xl border-2 border-amber-200 p-6 bg-gradient-to-br from-amber-50 to-orange-50 my-6">
            <div class="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert h-6 w-6 text-amber-600 flex-shrink-0 mt-1">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              <div>
                <h5 class="mb-2 font-semibold text-amber-800">Important Note</h5>
                <div class="text-sm text-amber-700 leading-relaxed">Medicare rules and costs are updated annually. The information in this guide is current as of March 2025. For the most up-to-date information, please contact us or visit Medicare.gov.</div>
              </div>
            </div>
          </div>

        </div>
        <!-- Right Column: Nuxt Image -->
        <div class="flex justify-center md:justify-end">
          <NuxtImg src="/images/medicare-insurance.jpg" alt="Medicare Insurance" class="rounded-2xl shadow-lg object-cover" />
        </div>
      </div>
    </div>
        <div class="flex flex-col md:flex-row gap-8">
            <MedicareGuideContent 
            :title="guideTitle"
            :tabs="guideTabs"
            :faqs="guideFaqs"
            >
            <template #tab-coverage>
                <!-- Custom coverage content -->
            </template>
            </MedicareGuideContent>
            
            <GuideSidebar 
            title="Required Coverage By State"
            :items="sidebarItems"
            />
        </div>
        </div>
      </main>
    <CallToAction />
  </PatternSection>
</template>