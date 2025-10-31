<template>
  <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] p-8 rounded-xl shadow-lg">
    <h2 class="text-2xl font-semibold mb-4 text-white">{{ cta.title }}</h2>
    <p class="mb-6 text-white/90 text-lg">{{ cta.description }}</p>
    <div class="flex flex-wrap gap-4">
      <NuxtLink
        :to="cta.primary.href"
        class="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-white text-[#30BCFE] hover:bg-gray-50"
      >
        {{ cta.primary.label }}
      </NuxtLink>
      <NuxtLink
        v-if="cta.secondary"
        :to="cta.secondary.href"
        class="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white text-white hover:bg-white hover:text-[#30BCFE]"
      >
        {{ cta.secondary.label }}
      </NuxtLink>
    </div>
  </div>
</template>



<script setup>
const props = defineProps({
  /** Required CTA object: { title, description, primary: { href, label } } */
  cta: {
    type: Object,
    required: true,
  },
})
</script>


