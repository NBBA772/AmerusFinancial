<template>
  <div :class="['rounded-xl border text-card-foreground shadow-lg p-6 transition-all duration-300 hover:shadow-xl group', bgClass, borderClass]">
    <!-- Icon and Title Side by Side -->
    <div class="flex items-center mb-4">
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
        <Icon :name="icon" class="h-6 w-6 text-white" />
      </div>
      <h3 class="font-semibold tracking-tight text-lg text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{{ title }}</h3>
    </div>
    
    <!-- Content -->
    <p class="text-sm text-gray-700 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
  bgClass?: string
  borderClass?: string
  iconColor?: string
}>()
</script>
