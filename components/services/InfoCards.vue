<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    <div
      v-for="card in info"
      :key="card.title"
      class="rounded-lg border bg-white text-card-foreground shadow-sm overflow-hidden"
    >
      <!-- Card Header -->
      <div
        class="flex items-center gap-3 bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-6 px-6 rounded-t-lg"
      >
        <Icon :name="card.icon" class="text-white" size="50" />
        <h3 class="text-xl font-semibold leading-none tracking-tight">
          {{ card.title }}
        </h3>
      </div>

      <!-- Card Body -->
      <div class="bg-white p-6 text-center">
        <p class="text-gray-700">{{ card.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRef } from 'vue'

const props = defineProps({
  /** Required: array of card objects { title, text, icon } */
  info: {
    type: Array,
    required: true,
  },
})

const info = toRef(props, 'info')
</script>
