<template>
  <div class="space-y-10 mt-12">
    <!-- Card with Integrated Header -->
    <div
      class="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm"
    >
      <!-- Header Bar -->
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-6 px-6 flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold tracking-tight">Coverage Features</h2>
          <p class="text-sm opacity-90">
            Explore the essential protections included in every plan
          </p>
        </div>
        <Icon name="lucide:shield" size="50"  />
      </div>
      <!-- Full Width Image Below Header -->
      <NuxtImg 
        v-if="image" 
        format="webp"
        sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
        quality="80"
        loading="lazy"
        :src="image" 
        alt="Coverage Features Image" 
        class="w-full h-auto mb-6 object-cover" 
      />

      <!-- Feature List -->
      <div class="px-8 pb-8">
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li
            v-for="feature in features"
            :key="feature"
            class="flex items-start gap-3 p-3 rounded-xl hover:bg-[#30BCFE]/5 transition-colors duration-300"
          >
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full bg-amber-50 text-amber-600"
            >
              <Icon name="lucide:check" size="22" />
            </div>
            <p class="leading-snug text-foreground font-medium">
              {{ feature }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRef } from 'vue'

const props = defineProps({
  /** Required: array of feature strings */
  features: {
    type: Array,
    required: true,
  },
  /** Optional: image URL for full width image */
  image: {
    type: String,
    default: ''
  }
})

const features = toRef(props, 'features')
const image = toRef(props, 'image')
</script>

