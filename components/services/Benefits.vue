<template>
  <div class="space-y-6">


    <!-- Benefits Grid -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"
    >
      <div
        v-for="benefit in benefits"
        :key="benefit"
        class="flex items-center gap-3 p-4 rounded-xl border bg-white backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      >
        <div
          class="flex items-center justify-center w-10 h-10 rounded-full bg-amber-50 text-amber-600"
        >
          <Icon name="lucide:check" size="22" />
        </div>
        <p class="leading-snug text-foreground font-medium">
          {{ benefit }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRef } from 'vue'

const props = defineProps({
  /** Required: array of benefit strings to render */
  benefits: {
    type: Array,
    required: true,
  },
})

const benefits = toRef(props, 'benefits')
</script>
