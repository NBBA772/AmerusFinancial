<!-- File: components/sections/HomePage/InsurancePlanningTools.vue -->
<script setup lang="ts">
const tools = [
  {
    title: "Retirement Calculator",
    description:
      "Plan for your future by calculating how much you need to save for a comfortable retirement.",
    icon: "lucide:calculator",
    link: "/retirement",
    button: "Calculate Now",
    image:"/images/retirement-calculator.jpg"
  },
  {
    title: "Health Insurance Glossary",
    description:
      "Access our comprehensive glossary of health insurance terms and definitions.",
    icon: "lucide:book-open",
    link: "/resources/health-insurance-glossary",
    button: "View Glossary",
    image:"/images/man-on-phone-looking-at-insurance-terms.jpg"
  },
  {
    title: "Insurance Guides",
    description:
      "Download helpful guides about Medicare, life insurance, and other coverage options.",
    icon: "lucide:file-text",
    link: "/resources",
    button: "Browse Guides",
    image:"/images/agent-helping-senior-with-insurance.jpg"
  },
  {
    title: "Expert Consultation",
    description:
      "Get personalized advice from our insurance specialists to find the right coverage.",
    icon: "lucide:phone",
    link: "/contact",
    button: "Contact Us",
    image:"/images/couple-getting-expert-consultation.jpg"
  },
  {
    title: "Medicare Planning",
    description:
      "Understand Medicare enrollment periods and find the right coverage for your needs.",
    icon: "lucide:heart-pulse",
    link: "/services/health/medicare",
    button: "Learn More",
    image:"/images/seniors-planning-retirement.jpg"
  },
  {
    title: "Insurance Assessment",
    description:
      "Take our assessment to identify gaps in your current insurance coverage.",
    icon: "lucide:clipboard",
    link: "/contact",
    button: "Start Assessment",
    image:"/images/Insurance-Assessment.jpg"
  },
]
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Heading -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Insurance Planning Tools</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Access our suite of interactive calculators, personalized guidance
          tools, and expert resources to help make informed decisions about your
          insurance and financial future.
        </p>
      </div>

      <!-- Loop over PlanningToolsCard -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PlanningToolsCard
          v-for="(tool, index) in tools"
          :key="index"
          :title="tool.title"
          :description="tool.description"
          :icon="tool.icon"
          :link="tool.link"
          :link-text="tool.button"
          :image="tool.image"
        />
      </div>

      <!-- View All Button -->
      <div class="mt-12 text-center">
        <NuxtLink to="/resources">
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-colors"
          >
            View All Resources
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

