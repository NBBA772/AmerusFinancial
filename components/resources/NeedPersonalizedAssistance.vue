<template>
  <div class="bg-blue-50 rounded-lg p-6 border border-blue-100 my-12 mx-auto">
    <div class="flex flex-col md:flex-row items-start md:items-center">
      <!-- Icon -->
      <div class="mb-4 md:mb-0 md:mr-6">
        <div class="bg-white rounded-full p-3 inline-block">
          <Icon name="lucide-info" class="h-8 w-8 text-[#30BCFE]" />
        </div>
      </div>

      <!-- Content -->
      <div>
        <h3 class="text-xl font-semibold mb-2">Need Personalized Assistance?</h3>
        <p class="text-gray-700 mb-4">
          Our team of insurance experts is ready to help you navigate these resources and find the right solutions for your specific needs.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white h-10 px-4 py-2 bg-[#30BCFE] hover:bg-primary/90"
          >
            Contact An Advisor
          </NuxtLink>

          <!-- <NuxtLink
            to="/resources"
            class="router-link-active router-link-exact-active px-3 py-2 rounded-md font-medium border border-sky-500 text-sky-500 hover:bg-sky-100 transition-colors"
          >
            Contact an Agent
          </NuxtLink> -->
        </div>
      </div>
    </div>
  </div>
</template>


