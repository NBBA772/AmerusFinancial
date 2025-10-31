<!-- File: components/sections/HomePage/CallToAction.vue -->
<template>
  <section class="py-16 bg-[#30BCFE] text-white">
    <div class="container mx-auto px-4 text-center">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        Ready to Find the Right Coverage?
      </h2>

      <!-- Subtitle -->
      <p class="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
        Our experienced agents are standing by to help you navigate your insurance options and find the perfect plan for your needs.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <NuxtLink to="/">
          <button
            class="inline-flex items-center justify-center gap-2 text-sm h-10 bg-white text-[#30BCFE] hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300"
          >
            Get a Free Quote
          </button>
        </NuxtLink>
        <NuxtLink to="/contact">
          <button
            class="inline-flex items-center justify-center gap-2 text-sm h-10 border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition duration-300"
          >
            Contact an Agent
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static CTA component, can later accept props for reuse
</script>
