<template>
  <div class="w-full md:w-1/3">
    <div class="sticky top-24">
      <div class="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden mb-6">
        <!-- Header with gradient -->
        <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-6">
          <h3 class="text-xl font-semibold text-white">{{ title }}</h3>
        </div>
        
        <!-- Content -->
        <div class="p-6 bg-gradient-to-br from-gray-50 to-white">
          <div class="space-y-4">
            <div 
              v-for="item in items" 
              :key="item.text"
              class="flex items-start gap-3 p-3 rounded-xl bg-white border-2 border-gray-200 transition-all duration-300 hover:border-[#30BCFE]/50 hover:shadow-md"
            >
              <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] rounded-full p-2 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <p class="text-gray-700 font-medium leading-relaxed">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional sidebar content slot -->
      <slot name="additional-content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SidebarItem {
  text: string
}

interface Props {
  title?: string
  items?: SidebarItem[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Required Coverage By State',
  items: () => [
    { text: 'Liability insurance is required in almost all states' },
    { text: 'No-fault states require Personal Injury Protection (PIP)' },
    { text: 'Some states require uninsured motorist coverage' },
    { text: 'Minimum requirements vary significantly by state' },
    { text: 'State minimums are often insufficient for adequate protection' }
  ]
})
</script>

<style scoped>
/* Enhanced animations matching contact form theme */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, #30BCFE, #2563eb);
}

/* Card hover animations */
.hover\:border-\[\#30BCFE\]\/50:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(48, 188, 254, 0.15);
}

/* Stagger animation for sidebar items */
.space-y-4 > div:nth-child(1) {
  animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

.space-y-4 > div:nth-child(2) {
  animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
}

.space-y-4 > div:nth-child(3) {
  animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
}

.space-y-4 > div:nth-child(4) {
  animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
}

.space-y-4 > div:nth-child(5) {
  animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Card transition effects */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Gradient background for check icons */
.bg-gradient-to-r.from-\[\#30BCFE\].to-\[\#2563eb\] {
  background: linear-gradient(135deg, #30BCFE 0%, #2563eb 100%);
}
</style>