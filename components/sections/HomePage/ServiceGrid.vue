<!-- File: components/sections/HomePage/ServiceGrid.vue -->
<script setup lang="ts">
const services = [
  {
    title: "Health Insurance",
    icon: "lucide:heart",
    items: ["Individual", "Family", "Group", "Senior/Medicare"],
    link: "/services",
  },
  {
    title: "Life Insurance",
    icon: "lucide:shield",
    items: ["Term Life", "Whole Life", "Universal Life", "Senior Life"],
    link: "/services",
  },
  {
    title: "Retirement Planning",
    icon: "lucide:dollar-sign",
    items: ["Annuities", "401(k) Rollovers", "IRAs", "Pension Planning"],
    link: "/services",
  },
  {
    title: "Property Insurance",
    icon: "lucide:house",
    items: ["Auto Insurance", "Homeowners", "Commercial", "Liability"],
    link: "/services",
  },
];
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 m-8">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="service-card bg-white rounded-lg shadow-md p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg flex items-start gap-4"
    >
      <!-- Icon Column -->
      <div
        class="w-12 h-12 rounded-full bg-[#e3e3e3] p-2 flex items-center justify-center text-primary flex-shrink-0"
      >
        <Icon :name="service.icon" class="h-12 w-12" />
      </div>

      <!-- Content Column -->
      <div class="flex-1">
        <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>

        <ul class="space-y-2 text-gray-600">
          <li
            v-for="(item, i) in service.items"
            :key="i"
            class="flex items-center"
          >
            <span class="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            {{ item }}
          </li>
        </ul>

        <NuxtLink
          :to="service.link"
          class="inline-block mt-4 text-primary font-medium hover:text-primary-dark"
        >
          Learn more →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
