<template>
  <SectionContainer class="py-8 text-center bg-[#000000] relative">
    <!-- Optional background image -->
    <div class="absolute inset-0 z-10">
      <NuxtImg
        format="webp"
        sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
        quality="80"
        loading="lazy"
        src="/images/aged-couple-of-pensioners-talking-with-employee.jpg"
        alt="Background"
        class="w-full h-full object-cover opacity-40"
      />
    </div>

    <div class="max-w-7xl mx-auto p-4 relative z-10">
      <GridTwoColumns>
        <div>
        <ParagraphSubHeadingHero class="text-white">
          {{ IntroText.SubHeading }}
        </ParagraphSubHeadingHero>
        <HeadlineTwo class="text-white">
          {{ IntroText.Heading }}
        </HeadlineTwo>
        <ParagraphDescriptionHero class="text-white">
          {{ IntroText.Description }}
        </ParagraphDescriptionHero>
        <ContactButtons />
        </div>

        <div>
        <HomePageQuoteForm tag="HomePageQuoteForm" />
        </div>
      </GridTwoColumns>
    </div>
    
  </SectionContainer>
</template>

<script setup lang="ts">
// Define the intro text content
const IntroText = {
  SubHeading: "Your Financial Security Starts Here",
  Heading: "Protecting What Matters Most to You and Your Family",
  Description: "Get personalized insurance quotes and retirement planning solutions from licensed professionals. Compare rates, coverage options, and find the perfect protection for your unique needs."
}
</script>

<style scoped>
/* Optional: extra styling if needed */
</style>
