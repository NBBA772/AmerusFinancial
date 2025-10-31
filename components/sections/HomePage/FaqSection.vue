<!-- components/FaqSection.vue -->
<template>
  <section class="py-16 bg-gray-50" id="faq" aria-labelledby="faq-h2">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2
        id="faq-h2"
        class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
      >
        Frequently Asked Questions
      </h2>

      <div class="space-y-4">
        <details
          v-for="(item, i) in faqs"
          :key="i"
          class="group rounded-lg border border-gray-200 bg-white shadow-sm p-4"
        >
          <summary
            class="cursor-pointer text-lg font-semibold text-gray-800 flex justify-between items-center"
          >
            {{ item.q }}
            <Icon
              name="mdi:chevron-down"
              class="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
            />
          </summary>
          <p class="mt-2 text-gray-600">
            {{ item.a }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    q: "Do you charge broker fees?",
    a: "We are compensated by carriers in most cases. If a fee ever applies, we’ll disclose it upfront in writing.",
  },
  {
    q: "Can you review my current policies?",
    a: "Yes. We offer complimentary policy reviews to identify coverage gaps and potential savings.",
  },
  {
    q: "Do you serve areas outside Lakeland?",
    a: "Yes, we serve clients across Florida and can advise on multi-location needs.",
  },
];
</script>
