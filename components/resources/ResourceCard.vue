<script setup lang="ts">
defineProps<{
  title: string
  description: string
  link: string
  icon: string
  features?: string[]
  isNew?: boolean
   image: {
      type: String,
      required: false,
      default: ''
    }
}>()
</script>

<template>
  <div class="rounded-lg bg-card text-card-foreground flex flex-col h-full border-2 border-primary/50 shadow-lg overflow-hidden">
    <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-5 px-6 flex items-center gap-4">
      <div class="p-2 rounded-full bg-white/10">
        <Icon :name="icon" class="h-12 w-12 text-white" />
      </div>
      <h3 class="font-semibold tracking-tight text-lg text-white">
        {{ title }}
        <span v-if="isNew" class="ml-2 text-xs font-normal text-white bg-primary px-2 py-0.5 rounded-full">New</span>
      </h3>
    </div>
    <NuxtImg 
      v-if="image" 
      format="webp"
      sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
      quality="80"
      loading="lazy"
      :src="image" 
      alt="Resource image" 
      class="mb-4 w-full h-auto" 
    />
    <div class="flex flex-col space-y-1.5 px-6 pb-2">
      <p class="text-muted-foreground text-sm mb-1">{{ description }}</p>
      <div v-if="features?.length" class="grid grid-cols-2 gap-2 mt-3 text-xs">
        <div v-for="feature in features" :key="feature" class="flex items-center gap-1">
          <Icon name="lucide:circle-check" class="h-5 w-5 text-green-500" />
          <span>{{ feature }}</span>
        </div>
      </div>
    </div>
    <div class="flex items-center p-6 pt-0 mt-auto w-full">
      <NuxtLink
        :to="link"
        class="w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#30BCFE]/20 bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white shadow-lg transform hover:scale-105 flex items-center justify-center gap-3"
      >
        <Icon :name="icon" class="h-7 w-7 mr-3" />
        <span>View Guide</span>
      </NuxtLink>
    </div>
  </div>
</template>
