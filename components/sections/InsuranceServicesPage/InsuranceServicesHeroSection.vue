<template>
  <SectionContainer class="relative text-center">
    <div class="relative w-full h-72 md:h-96 flex items-center justify-center">
      <NuxtImg
        format="webp"
        src="/images/insurance-products-banner.jpg"
        alt="Insurance Services Banner"
        quality="80"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div class="relative z-20 flex flex-col items-center justify-center w-full h-full px-4">
        <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Comprehensive Insurance Services</h1>
        <p class="text-lg md:text-2xl text-white/90 max-w-2xl mb-2">Protecting families, businesses, and futures with tailored coverage and expert guidance.</p>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
export default {
  name: "HomepageHeroSection",
  data() {
    return {
      IntroText: {
        SubHeading: "Our Commitment to Excellence",
        Heading: "About Good Time Travel",
        Description:
          "Good Time Travel is a nationwide leading bus charter company providing quality transportation and personal service for point-to-point excursions, long-distance, overnight trips, special events and more. No matter where you are traveling in the United States, our bus charter rentals offer safe, reliable transportation at affordable rates for both large and small groups. We pride ourselves on delivering extensive services to fulfill all your transportation needs with first-rate customer service and safety as our top priorities. Our experienced staff will support and guide you from the first call to the last mile so that your bus rental and trip goes exactly as planned.",
      },
      Featured: [
        {
          id: 1,
          title: "Commitment to Safety",
          description:
            "Providing secure transportation with top-notch safety measures for all our passengers.",
        },
        {
          id: 2,
          title: "Unparalleled Customer Service",
          description:
            "Ensuring a seamless journey from start to finish with personalized attention and support.",
        },
        {
          id: 3,
          title: "Reliable and Affordable Travel",
          description:
            "Offering dependable and cost-effective transportation solutions tailored to your needs.",
        },
      ],
      CTA: {
        to: "/get-started",
        text: "Get Started Now!",
      },
    };
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.full-width-height {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire container */
}
</style>
