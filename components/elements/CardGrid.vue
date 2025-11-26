<template>
  <section class="w-full py-16 relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 opacity-30">
      <NuxtImg
        format="webp"
        quality="80"
        loading="lazy"
        src="/images/background-lines.png"
        alt="Background pattern"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Title and Subheading -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" v-html="title">
        </h2>
        <p v-if="subheading" class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ subheading }}
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid gap-8" :class="gridColsClass">
        <component
          :is="card.link ? 'NuxtLink' : 'div'"
          v-for="(card, index) in cards"
          :key="index"
          :to="card.link"
          class="bg-[#F2F8FB] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
          :class="{ 'cursor-pointer': card.link }"
        >
          <!-- Card Title -->
          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            <span v-html="card.title"></span>
          </h3>
          
          <!-- Card Description -->
          <div v-if="card.description" class="text-base text-gray-600 text-left">
            <span v-html="card.description"></span>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Card {
  title: string
  description: string
  link?: string
}

const props = withDefaults(defineProps<{
  title?: string
  subheading?: string
  cards?: Card[]
  columns?: 2 | 3 | 4
}>(), {
  title: 'Our Services',
  subheading: '',
  cards: () => [],
  columns: 3
})

const gridColsClass = computed(() => {
  const colsMap = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }
  return colsMap[props.columns]
})
</script>

<style scoped>
    h3 {
    color: #2663eb !important;
    }
    :deep(strong) {
  color: #30BCFE !important;
}
</style>