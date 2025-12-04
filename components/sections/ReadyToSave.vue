<!-- File: components/sections/HomePage/CallToAction.vue -->
<template>
  <section class="py-16 relative overflow-hidden text-white">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <NuxtImg
        format="webp"
        quality="80"
        loading="lazy"
        src="/images/ready-to-see-options.png"
        alt="Background"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        Ready to Save? Drivers Who Compare <strong>With Amerus Save an Average of 25% or More</strong>
      </h2>

      <!-- Subtitle -->
      <p class="text-white max-w-2xl mx-auto mb-8 text-lg">
Don’t settle for high premiums or outdated policies. Get your free quote today and see how much you can save with Amerus.  We make it easy, fast, and transparent.</p>
      <!-- CTA Button -->
      <div class="flex justify-center mt-12">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center gap-2 text-base font-semibold bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-4 px-10 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          Get My Free Quote Now
          <Icon name="lucide:arrow-right" size="20" />
        </NuxtLink>
        
      </div>
 <p class="mt-2">Get My Free Quote Now Secure, No-Obligation, Fast Results</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static CTA component, can later accept props for reuse
</script>
<style scoped>
:deep(strong) {
  color: #30BCFE !important;
}
</style>