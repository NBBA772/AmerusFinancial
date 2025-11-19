<template>
  <SectionContainer class="py-24 md:py-32 lg:py-40 text-left relative h-full">
    <!-- Optional background image -->
    <div class="absolute inset-0 z-10">
      <NuxtImg
        format="webp"
        sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
        quality="80"
        loading="lazy"
        src="/images/happy-co-workers-close-window.png"
        alt="Background"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="max-w-7xl mx-auto p-4 relative z-10">
      <GridTwoColumns>
        <div>
        <ParagraphSubHeadingHero class="text-[#111827]">
          {{ IntroText.SubHeading }}
        </ParagraphSubHeadingHero>
        <HeadlineTwo class="text-[#111827]">
          {{ IntroText.Heading }}
        </HeadlineTwo>
        <ParagraphDescriptionHero class="text-[#111827]">
          {{ IntroText.Description }}
        </ParagraphDescriptionHero>
        
        <div class="mt-8">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center gap-2 text-base font-semibold bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Your Free Quote
            <Icon name="lucide:arrow-right" size="20" />
          </NuxtLink>
        </div>
        </div>

        <div>
        
        </div>
      </GridTwoColumns>
    </div>
    
  </SectionContainer>

  <!-- Insurance Provider Logos Row -->
  <div class="w-full bg-[#F1F9FB]">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <NuxtImg
        format="webp"
        quality="80"
        loading="lazy"
        src="/images/business-insurance-logos.png"
        alt="Trusted insurance providers including UnitedHealthcare, Aetna, Humana, Aflac, and Manhattan Life"
        class="w-full h-auto"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Define the intro text content
const IntroText = {
  SubHeading: "Your Financial Security Starts Here",
  Heading: "Affordable Group Health Plans for Small Businesses Nationwide",
  Description: "Big-business benefits with small-business flexibility — powered by Amerus Financial Group and trusted carriers like UnitedHealthcare, Aetna, Humana, Aflac, and Manhattan Life."
}
</script>

<style scoped>
/* Optional: extra styling if needed */
</style>
