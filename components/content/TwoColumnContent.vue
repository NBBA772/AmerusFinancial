<template>
  <div class="w-full py-12 relative overflow-hidden" :class="backgroundColor">
    <!-- Background Image -->
    <div v-if="showBackgroundPattern" class="absolute inset-0 opacity-40">
      <NuxtImg
        format="webp"
        quality="80"
        loading="lazy"
        src="/images/background-lines.png"
        alt="Background pattern"
        class="w-full min-h-full object-cover"
      />
    </div>

    <div class="container mx-auto relative z-10" :class="backgroundColor !== 'bg-transparent' ? 'px-4 sm:px-6 lg:px-8' : ''">
      <div class="flex flex-col gap-8 items-center" :class="[
        imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
      ]">
        <!-- Content Column -->
        <div class="flex-1 space-y-4">
      <div
        v-if="content.eyebrow"
        class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-amber-50 text-amber-600 border-amber-200 mb-2"
      >
        {{ content.eyebrow }}
      </div>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight" v-html="content.title"></h2>
       <h3 v-if="content.bulletsHeading" class="text-xl font-semibold mb-4 text-gray-900">
          {{ content.bulletsHeading }}
        </h3>
      <!-- Bullet Points List -->
      <div v-if="content.bullets && content.bullets.length" class="pt-6">
       
        <ul class="space-y-3">
          <li v-for="(bullet, index) in content.bullets" :key="index" class="flex items-start gap-3">
            <Icon name="lucide:check-circle" class="text-[#30BCFE] mt-1 flex-shrink-0" size="20" />
            <span class="text-base text-gray-700" v-html="bullet"></span>
          </li>
        </ul>
        
        <!-- Post-Bullet Content -->
        <div v-if="content.postBulletContent" class="text-lg text-gray-700 mt-6" v-html="content.postBulletContent"></div>
      </div>

      <div v-if="content.cta" class="pt-4">
        <NuxtLink
          :to="content.cta.href || '/contact'"
          class="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-4 px-6 rounded-md"
        >
          {{ content.cta.label || 'Learn More' }}
        </NuxtLink>
      </div>
    </div>

    <!-- Image Column -->
    <div class="flex-1 flex items-center justify-center">
      <NuxtImg
        format="webp"
        sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
        quality="80"
        :loading="loading"
        :src="content.image"
        :alt="content.imageAlt || content.title"
        class="w-full h-auto rounded-2xl shadow-lg object-cover"
        width="100%"
        height="auto"
      />
        </div>
      </div>
    </div>
  </div>

  <div v-if="showDivider" class="border-t border-gray-200 w-full my-4"></div>
</template>

<script setup>
const props = defineProps({
  /** Content object with: { eyebrow?, title, description, image, imageAlt?, cta?: { href, label } } */
  content: {
    type: Object,
    required: true,
  },
  /** Position of the image: 'left' or 'right' */
  imagePosition: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value)
  },
  /** Image loading strategy */
  loading: {
    type: String,
    default: 'lazy',
    validator: (value) => ['lazy', 'eager'].includes(value)
  },
  /** Show divider below section */
  showDivider: {
    type: Boolean,
    default: true
  },
  /** Background color class (e.g., 'bg-gray-50', 'bg-blue-100', 'bg-white') */
  backgroundColor: {
    type: String,
    default: 'bg-transparent'
  },
  /** Show background pattern image */
  showBackgroundPattern: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="css" scoped>
:deep(strong) {
  color: #30BCFE !important;
}
</style>