<script setup lang="ts">
import { ref } from "vue";

const cards = ref([
  {
    title: "Employers & Group Plans",
    description: "Design competitive benefits, control costs, and protect your business.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Businesses",
    backTitle: "Popular Employer Resources",
    backItems: [
      "Benefits Enrollment Guide",
      "Compliance Checklist (ACA, ERISA)",
      "Workers’ Comp Basics",
    ],
    backLinks: [
      "/employers/benefits-enrollment",
      "/employers/compliance-checklist",
      "/employers/workers-comp",
    ],
    learnMoreLink: "/businesses",
    getQuoteLink: "/info",
  },
  {
    title: "Individuals & Families",
    description:
      "Protect what matters with clear, affordable coverage.",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Families",
    backTitle: "Helpful Guides",
    backItems: [
      "Home & Auto Bundling Savings",
      "How Much Life Insurance Do I Need?",
      "Health Plan Basics",
    ],
    backLinks: [
      "/families/life-health",
      "/families/property-coverage",
      "/families/college-savings",
      "/families/emergency-support",
    ],
    learnMoreLink: "/families",
    getQuoteLink: "/info",
  },
  {
    title: "Seniors & Medicare",
    description:
      "Navigate Medicare with confidence and complete your retirement plan.",
    image:
      "https://images.unsplash.com/photo-1628891892235-5d834f9c64c1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Seniors",
    backTitle: "Medicare Resources",
    backItems: [
      "Medicare 101",
      "Medigap vs. Advantage",
      "Enrollment Dates & Deadlines",
    ],
    backLinks: [
      "/seniors/medicare-advantage",
      "/seniors/retirement-planning",
      "/seniors/prescriptions",
      "/seniors/long-term-care",
    ],
    learnMoreLink: "/seniors",
    getQuoteLink: "/info",
  },
]);

const flipped = ref<boolean[]>(cards.value.map(() => false));
const toggleFlip = (i: number) => (flipped.value[i] = !flipped.value[i]);
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        Who We Serve
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 perspective">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="relative h-80 w-full group"
        >
        <!-- Flip button -->
        <button
        class="absolute top-2 right-2 z-30 bg-black/50 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 hover:bg-black/60"
        @click.stop="toggleFlip(i)"
        >
        <Icon name="mdi:swap-horizontal" class="w-6 h-6" />
        </button>


          <!-- Card Inner -->
          <div
            class="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
            :class="{ 'rotate-y-180': flipped[i] }"
          >
            <!-- Front Side -->
            <div
              class="absolute inset-0 rounded-lg shadow-md overflow-hidden backface-hidden"
            >
              <NuxtImg
                format="webp"
                sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
                quality="80"
                loading="lazy"
                :src="card.image"
                :alt="card.alt"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white"
              >
                <h3 class="text-xl font-bold mb-2">{{ card.title }}</h3>
                <p class="text-sm text-white/90 mb-4">{{ card.description }}</p>
                <div class="flex gap-2">
                  <NuxtLink
                    :to="card.learnMoreLink"
                    class="bg-primary px-3 py-1 text-sm rounded-md hover:bg-primary/80 transition"
                  >
                    Learn More
                  </NuxtLink>
                  <NuxtLink
                    :to="card.getQuoteLink"
                    class="bg-white text-black px-3 py-1 text-sm rounded-md hover:bg-gray-200 transition"
                  >
                    Get Quote
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Back Side -->
            <div
              class="absolute inset-0 rounded-lg shadow-md bg-[#30BCFE] text-white p-6 flex flex-col justify-center transform rotate-y-180 backface-hidden"
            >
              <h3 class="text-lg font-bold mb-4">{{ card.backTitle }}</h3>
              <ul class="space-y-2 text-left mx-auto max-w-xs">
                <li
                  v-for="(item, j) in card.backItems"
                  :key="j"
                  class="flex items-center text-sm"
                >
                  <span
                    class="w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0"
                  ></span>
                  <!-- <NuxtLink
                    :to="card.backLinks[j]"
                    class="underline hover:text-gray-200"
                  >
                    {{ item }}
                  </NuxtLink> -->
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective {
  perspective: 1000px;
}
.transform-style-preserve-3d {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
.material-icons {
  font-family: "Material Icons";
}
</style>
