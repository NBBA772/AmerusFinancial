<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
    <div class="p-4 flex items-center">
      <div class="bg-primary/10 rounded-full p-3 mr-4">
        <NuxtIcon :name="icon" class="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 class="font-bold">{{ title }}</h3>
        <p class="text-gray-600" v-html="content"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
  icon: string
}>()
</script>
