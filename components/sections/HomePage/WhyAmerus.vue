<!-- File: components/sections/HomePage/WhyAmerus.vue -->
<script setup lang="ts">
const values = [
  {
    title: "Expert Guidance",
    description:
      "Licensed advisors who tailor coverage by audience and risk profile—so you get what you need, not what you don’t.",
  },
  {
    title: "Whole-Portfolio Coverage",
    description:
      "From group benefits & commercial lines to personal insurance and Medicare, we coordinate it all.",
  },
  {
    title: "Local & Responsive",
    description:
      "Based in Lakeland, FL with fast quotes, proactive reviews, and clear communication.",
  },
];
</script>

<template>
  <section class="py-16 bg-white" aria-labelledby="value-props">
    <div class="container mx-auto px-4">
      <!-- Section Heading -->
      <div class="text-center mb-12">
        <h1 id="value-props" class="text-3xl md:text-4xl font-bold">
          Why Choose Amerus Financial for Insurance Coverage
        </h1>
      </div>

      <!-- Grid of Value Props -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, i) in values"
          :key="i"
          class="rounded-lg border bg-white shadow-sm p-6 text-center transition-all duration-300 hover:shadow-lg"
        >
          <h3 class="text-xl font-semibold mb-3">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
