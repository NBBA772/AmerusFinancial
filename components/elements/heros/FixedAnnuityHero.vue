<template>
  <SectionContainer class="py-24 md:py-32 lg:py-40 text-left relative min-h-[800px] md:min-h-[900px] lg:min-h-[1000px] flex items-center">
    <!-- Optional background image -->
    <div class="absolute inset-0 z-10">
      <NuxtImg
        format="webp"
        sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
        quality="80"
        loading="lazy"
        :src="backgroundImage"
        alt="Background"
        class="w-full h-full object-cover object-center"
        style="object-fit: cover; object-position: center top;"
      />
    </div>

    <div class="max-w-7xl mx-auto p-4 relative z-10 w-full">
      <GridTwoColumns>
        <div>
        <ParagraphSubHeadingHero class="text-[#111827]">
          <div v-html="IntroText.SubHeading"></div>
        </ParagraphSubHeadingHero>
        <HeadlineTwo class="text-[#111827]">
          <div v-html="IntroText.Heading"></div>
        </HeadlineTwo>
        <ParagraphDescriptionHero class="text-[#111827]">
          <div v-html="IntroText.Description"></div>
        </ParagraphDescriptionHero>
        
        <div class="mt-8">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center gap-2 text-base font-semibold bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Request Your Free Annuity Review
            <Icon name="lucide:arrow-right" size="20" />
          </NuxtLink>
          <p class="text-sm text-[#111827] mt-3">
            No-obligation. No pressure. Independent comparison across multiple carriers.
          </p>
        </div>
        </div>

        <div>
        
        </div>
      </GridTwoColumns>
    </div>
    
  </SectionContainer>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  backgroundImage?: string
  subHeading?: string
  heading?: string
  description?: string
}>(), {
  backgroundImage: '/images/portrait-of-smiling-asian-businessman-working.png',
  subHeading: 'Your Financial Security Starts Here',
  heading: '<strong>Protect Your Business.</strong> Empower Your Growth.',
  description: 'Comprehensive commercial insurance solutions from Amerus Financial Group – tailored protection for your company, your employees, and your future.'
})

// Define the intro text content (kept for backwards compatibility if needed)
const IntroText = {
  SubHeading: props.subHeading,
  Heading: props.heading,
  Description: props.description
}
</script>

<style scoped>
strong{
  color: #30BCFE !important;
}

/* Add spacing between paragraphs in the description */
:deep(p) {
  margin-bottom: 1rem;
}

:deep(p:last-child) {
  margin-bottom: 0;
}
</style>
