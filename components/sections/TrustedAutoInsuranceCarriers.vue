<!-- File: components/sections/HomePage/CallToAction.vue -->
<template>
  <section class="py-16 bg-[#F2F8FB] text-[#3A3E46]">
    <div class="container mx-auto px-4 text-center">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        We Work With the Nation’s Most Trusted Auto Carriers
      </h2>

      <!-- Subtitle -->
      <p class="text-[#3A3E46] max-w-2xl mx-auto mb-8 text-lg">
        Amerus Financial Group partners with a wide range of <strong>A-rated carriers</strong> to give you better options, faster.
      </p>

      <p class="text-[#3A3E46] max-w-2xl mx-auto mb-8 text-lg">
        Our independence means <strong>we work for you — not the insurance companies.</strong>
      </p>

        <!-- Insurance Provider Logos Row -->
    <div class="w-full mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Flexible row: wrap on small screens, no-wrap on large; allow visible overflow on lg -->
        <div class="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-6 md:gap-8 overflow-x-auto lg:overflow-visible py-4">
          <NuxtImg
            format="webp"
            quality="80"
            loading="lazy"
            src="/images/progressive1.png"
            alt="Progressive"
            class="h-10 w-auto object-contain flex-shrink"
          />
          <NuxtImg
            format="webp"
            quality="80"
            loading="lazy"
            src="/images/nationwide-31.png"
            alt="Nationwide"
            class="h-10 w-auto object-contain flex-shrink"
          />
          <NuxtImg
            format="webp"
            quality="80"
            loading="lazy"
            src="/images/liberty-mutual1.png"
            alt="Liberty Mutual"
            class="h-10 w-auto object-contain flex-shrink"
          />

          <NuxtImg
            format="webp"
            quality="80"
            loading="lazy"
            src="/images/the-travelers-companies1.png"
            alt="Travelers"
            class="h-10 w-auto object-contain flex-shrink"
          />
          <NuxtImg
            format="webp"
            quality="80"
            loading="lazy"
            src="/images/safeco1.png"
            alt="Safeco"
            class="h-10 w-auto object-contain flex-shrink"
          />
          <NuxtImg
            format="webp"
            quality="80"
            loading="lazy"
            src="/images/Kemper-Logo-SVG 1.png"
            alt="Kemper"
            class="h-10 w-auto object-contain flex-shrink"
          />
          <NuxtImg
            format="webp"
            quality="80"
            loading="lazy"
            src="/images/amerus-1.png"
            alt="Amerus Financial"
            class="h-10 w-auto object-contain flex-shrink"
          />
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static CTA component, can later accept props for reuse
</script>
