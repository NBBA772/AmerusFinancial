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
        Ready to See Your Options?
      </h2>

      <!-- Subtitle -->
      <p class="text-white max-w-2xl mx-auto mb-8 text-lg">
Let our team prepare a personalized quote that fits your business, budget, and employees' needs. Discover how much you can save — and how easy it can be to offer quality health benefits.</p>
      <!-- CTA Button -->
      <div class="flex justify-center mt-12">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center gap-2 text-base font-semibold bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-4 px-10 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          Start My Quote
          <Icon name="lucide:arrow-right" size="20" />
        </NuxtLink>
      </div>
 
    </div>
  </section>
</template>

<script setup lang="ts">
// Static CTA component, can later accept props for reuse
</script>
