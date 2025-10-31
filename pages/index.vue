<template>
  <PatternSection>
    <HomepageHeroSection />
    <!-- <WhatWeProvideSection /> -->
    <!-- <IndividualAndFamilySolutionsSection /> -->
    <!-- <SeniorSolutionsSection /> -->
    <!-- <WeProvideThePlanCTA /> -->
    <!-- <BusinessSolutionsSection /> -->
    <!-- <JoinTheAmerusFinancialCommunitySection /> -->
     <!-- <ServiceGrid /> -->
      <WhyAmerus />
     <WhoWeServe />
     <TrustedCarriers />
     <InsurancePlanningTools />
    
    <!-- <CustomerReviewSection />
    <ContactSection /> -->
      <section class="py-16 bg-gray-50" id="faq" aria-labelledby="faq-h2">
    <div class="container mx-auto px-4 max-w-3xl">
    <FAQ title="Frequently Asked Questions" :faqs="faqData" />
    </div>
    </section>
    <CallToAction />
  </PatternSection>
</template>

<script setup>
const faqData = [
  {
    question: 'Do you charge broker fees?',
    answer: 'We are compensated by carriers in most cases. If a fee ever applies, we’ll disclose it upfront in writing.'
  },
  {
    question: 'Can you review my current policies?',
    answer: 'Yes. We offer complimentary policy reviews to identify coverage gaps and potential savings.'
  },
  {
    question: 'Do you serve areas outside Lakeland?',
    answer: 'Yes, we serve clients across Florida and can advise on multi-location needs.'
  }
]
</script>