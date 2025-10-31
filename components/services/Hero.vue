<template>
  <div class="flex flex-col md:flex-row gap-8 items-center">
    <!-- Left Column -->
    <div class="flex-1 space-y-4">
      <div
        class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-amber-50 text-amber-600 border-amber-200 mb-2"
      >
        {{ hero.eyebrow }}
      </div>
      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
        {{ hero.title }}
      </h1>
      <p class="text-lg text-muted-foreground">
        {{ hero.description }}
      </p>
      <div class="pt-4">
        <NuxtLink
          :to="hero.cta?.href || '/contact'"
          class="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-4 px-6 rounded-md"
        >
          {{ hero.cta?.label || 'Contact' }}
        </NuxtLink>
      </div>
    </div>

    <!-- Right Column -->
    <div class="flex-1 flex items-center justify-center">
      <NuxtImg
        format="webp"
        sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
        quality="80"
        :loading="lazy"
        :src="hero.image"
        :alt="hero.imageAlt || hero.title"
        class="w-full h-auto rounded-2xl shadow-lg object-cover"
        width="100%"
        height="auto"
      />
    </div>
  </div>

  <div class="border-t border-gray-200 w-full my-4"></div>
</template>

<script setup>
const props = defineProps({
  /** Required hero object for the component. Should include: { eyebrow, title, description, image, imageAlt, cta: { href, label } } */
  hero: {
    type: Object,
    required: true,
  },
})

</script>
