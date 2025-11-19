<template>
  <PatternSection>
    <BasicSection>
      <InsuranceServicesHeroSection />

          <main class="flex-grow">
      <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Breadcrumbs currentPageTitle="Services" />
      
      <GridThreeColumns>
        <div
          v-for="Service in Services"
          :key="Service.title"
          class="group bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl mx-auto mb-8 max-w-md"
        >
          <NuxtImg
          format="webp"
          quality="80"
            :src="Service.image"
            :alt="Service.title"
            class="w-full h-48 object-cover object-center"
          />
          <div class="p-6 flex flex-col flex-1 justify-between">
            <div>
              <h2 class="text-xl font-bold mb-2 bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-transparent bg-clip-text">
                {{ Service.title }}
              </h2>
              <p class="text-gray-600 mb-4">{{ Service.excerpt }}</p>
            </div>
            <nuxt-link
              :to="Service.url"
              class="mt-auto w-full py-2 px-4 rounded-lg bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white font-semibold shadow transition duration-150 hover:from-[#2563eb] hover:to-[#30BCFE] focus:outline-none"
              :aria-label="`Learn more about ${Service.title}`"
            >
              Learn more about {{ Service.title }}
            </nuxt-link>
          </div>
        </div>
      </GridThreeColumns>

      <GetAnswersToYourQuestions />
      </div>
    </main>
    </BasicSection>
  </PatternSection>
</template>

<script setup>
useSeoMeta({
  title: 'Insurance Services',
  ogTitle: 'Complete Insurance Solutions — Amerus',
  description:
    'Comprehensive insurance services for individuals, families, and businesses. Health, life, auto, home, business, and retirement planning solutions from Amerus.',
  ogDescription:
    'Complete insurance portfolio including health, life, auto, home, business insurance, and retirement planning services for all your protection needs.',
  ogImage: '/images/insurance-services.jpg',
  ogUrl: 'https://www.amerusfinancial.com/services',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Complete Insurance Solutions — Amerus',
  twitterDescription:
    'Complete insurance portfolio including health, life, auto, home, business insurance, and retirement planning services for all your protection needs.',
  twitterImage: '/images/insurance-services.jpg'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.amerusfinancial.com/services/'
    }
  ]
})

const Services = [
  {
    title: "Health Insurance",
    excerpt: "Comprehensive health plans for individuals, families, seniors, and groups. Coverage for medical, dental, vision, and more.",
    image: "/images/couple-got-individual-health-insurance.jpg",
    url: "/services/health/individual-health",
  },
  {
    title: "Life Insurance",
    excerpt: "Protect your loved ones with term, whole, and group life insurance. Flexible options for every stage of life.",
    image: "/images/senior-woman-life-insurance.jpg",
    url: "/services/life/life-insurance",
  },
  {
    title: "Retirement Planning",
    excerpt: "Plan for your future with IRAs, 401(k) rollovers, annuities, pension planning, and retirement income solutions.",
    image: "/images/individual-retirement-accounts-iras.jpg",
    url: "/services/retirement/iras",
  },
  {
    title: "Auto Insurance",
    excerpt: "Protect your vehicles with personal, commercial, multi-vehicle, and uninsured motorist coverage options.",
    image: "/images/insured-cars-in-traffic.jpg",
    url: "/services/auto",
  },
  {
    title: "Home Insurance",
    excerpt: "Safeguard your home and property with coverage for homeowners, valuables, flood, and liability.",
    image: "/images/property-protection.jpg",
    url: "/services/home/property-protection",
  },
  {
    title: "Business Insurance",
    excerpt: "Comprehensive solutions for general liability, professional liability, workers comp, property, and more.",
    image: "/images/general-liability-insurance-slip-and-fall.jpg",
    url: "/services/business/general-liability",
  },
]
</script>
<style>
ul li span {
  /*
     * We want the bullets outside of the list,
     * so the text is aligned. Now the actual bullet
     * is outside of the list’s container
     */
  list-style-position: outside !important;

  /*
     * Because the bullet is outside of the list’s
     * container, indent the list entirely
     */
  /* margin-left: 1em; */
}
.svg svg {
  width: 100px;
}
.logoSection {
  height: 300px;
}
</style>