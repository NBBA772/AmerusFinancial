<template>
  <div class="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#30BCFE]/50 group">
    <button
      class="w-full flex justify-between items-center p-6 font-semibold text-left bg-gradient-to-r from-gray-50 to-white group-hover:from-blue-50 group-hover:to-blue-25 transition-all duration-300"
      @click="toggleOpen"
    >
      <span class="text-gray-900 group-hover:text-[#30BCFE] transition-colors duration-300 text-lg">{{ term }}</span>
      <div class="flex items-center gap-2">
        <span class="text-xs text-gray-500 group-hover:text-[#30BCFE] transition-colors duration-300 hidden sm:block">
          {{ isOpen ? 'Hide' : 'Show' }} definition
        </span>
        <div :class="['w-8 h-8 rounded-full bg-white border-2 border-gray-200 group-hover:border-[#30BCFE] flex items-center justify-center transition-all duration-300', isOpen ? 'bg-[#30BCFE] border-[#30BCFE]' : '']">
          <Icon 
            name="lucide-chevron-down" 
            :class="['h-4 w-4 transition-all duration-300', isOpen ? 'rotate-180 text-white' : 'text-gray-500 group-hover:text-[#30BCFE]']" 
          />
        </div>
      </div>
    </button>

    <Transition
      name="accordion"
      enter-active-class="transition-all duration-400 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
    >
      <div v-show="isOpen" class="border-t border-gray-100">
        <div class="p-6 bg-gradient-to-br from-blue-50/30 to-white text-gray-700 leading-relaxed">
          {{ definition }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  term: string
  definition: string
}>()

const isOpen = ref(false)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* Smooth accordion animation */
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* Custom blue tint */
.group-hover\:to-blue-25 {
  background: linear-gradient(to right, rgb(239 246 255), rgb(248 250 252));
}
</style>
