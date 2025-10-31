<template>
  <div class="mx-auto">
    <div role="tablist" class="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground bg-gray-300 grid w-full grid-cols-2 mb-8">
      <button 
        type="button" 
        :class="tab === 'guides' ? activeClass : inactiveClass" 
        @click="tab = 'guides'"
      >
        Guides & Forms
      </button>
      <button 
        type="button" 
        :class="tab === 'blog' ? activeClass : inactiveClass" 
        @click="tab = 'blog'"
      >
        Blog
      </button>
    </div>

    <div v-if="tab === 'guides'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <slot name="guides" />
    </div>
    <div v-else class="mt-2 space-y-6">
      <slot name="blog" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tab = ref<'guides' | 'blog'>('guides')

const activeClass = 'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white text-foreground shadow-sm'
const inactiveClass = 'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
</script>
