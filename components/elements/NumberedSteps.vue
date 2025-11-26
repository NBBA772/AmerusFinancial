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
      <!-- Title -->
      <h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
        {{ title }}
      </h2>

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex flex-col items-center text-center"
        >
          <!-- Circle with Icon -->
          <div class="w-20 h-20 rounded-full bg-gradient-to-r from-[#30BCFE] to-[#2563eb] flex items-center justify-center mb-4 shadow-lg">
            <Icon :name="step.icon" size="36" class="text-white" />
          </div>
          
          <!-- Step Title -->
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ step.title }}
          </h3>
          
          <!-- Step Description -->
          <p v-if="step.description" class="text-base text-gray-600">
            {{ step.description }}
          </p>
        </div>
      </div>

      <!-- CTA Button -->
      <div v-if="ctaButton" class="flex justify-center mt-12">
        <NuxtLink
          :to="ctaButton.href"
          class="inline-flex items-center justify-center gap-2 text-base font-semibold bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-4 px-10 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          {{ ctaButton.label }}
          <Icon name="lucide:arrow-right" size="20" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Step {
  icon: string
  title: string
  description: string
}

interface CtaButton {
  href: string
  label: string
}

withDefaults(defineProps<{
  title?: string
  steps?: Step[]
  ctaButton?: CtaButton | null
}>(), {
  title: 'Simple. Fast. Transparent.',
  ctaButton: null,
  steps: () => [
    {
      icon: 'lucide:file-text',
      title: 'Step 1',
      description: 'Complete a short quote form - takes less than 2 minutes'
    },
    {
      icon: 'lucide:search',
      title: 'Step 2',
      description: 'Compare plan options - Aetna, UHC, Humana, and more'
    },
    {
      icon: 'lucide:check-circle',
      title: 'Step 3',
      description: 'Choose your coverage - tailored to your team\'s needs'
    },
    {
      icon: 'lucide:shield-check',
      title: 'Step 4',
      description: 'We handle the rest - setup, compliance, and renewals'
    }
  ]
})
</script>
