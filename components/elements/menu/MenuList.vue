<template>
  <nav class="hidden md:flex justify-between space-x-10 items-center">
    <div class="hidden md:flex space-x-10 items-center relative">
      <!-- Home -->
      <nuxt-link to="/">
        <span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">
          Home
        </span>
      </nuxt-link>

      <!-- Services Dropdown -->
      <div class="relative" @mouseenter="open = true" @mouseleave="open = false">
        <button
          class="flex items-center text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none"
        >
          Services
          <Icon
            name="lucide:chevron-down"
            class="ml-1 h-4 w-4 transition-transform"
            :class="{ 'rotate-180': open }"
          />
        </button>

        <!-- Dropdown Menu -->
        <div
          v-show="open"
          class="absolute left-0 mt-0 w-64 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-20"
        >
          <div class="max-h-[calc(100vh-200px)] overflow-y-auto">
            <div v-for="section in services" :key="section.label" class="mb-2">
              <div class="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 dark:bg-gray-700">
                {{ section.label }}
              </div>
              <div v-for="item in section.items" :key="item.href">
                <nuxt-link
                  :to="item.href"
                  class="block px-6 py-2 text-sm text-neutral-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  :class="item.active ? 'bg-primary/10 text-primary font-medium' : ''"
                >
                  {{ item.label }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resources -->
      <nuxt-link to="/resources">
        <span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">
          Resources
        </span>
      </nuxt-link>

      <!-- About -->
      <nuxt-link to="/about-us">
        <span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">
          About Us
        </span>
      </nuxt-link>

      <!-- Contact -->
      <nuxt-link to="/contact">
        <span class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">
          Contact
        </span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);

const services = [
  // {
  //   label: "Overview",
  //   items: [
  //     { label: "All Services", href: "/services", active: false },
  //   ],
  // },
  {
    label: "Health Insurance",
    items: [
      { label: "Individual Health", href: "/services/health/individual-health" },
      { label: "Family Coverage", href: "/services/health/family-coverage", active: true },
      { label: "Group Health", href: "/services/health/group-health" },
      { label: "Medicare", href: "/services/health/medicare" },
      { label: "Dental Coverage", href: "/services/health/dental" },
      { label: "Senior Dental", href: "/services/health/senior-dental" },
      { label: "Vision Coverage", href: "/services/health/vision-coverage" },
      { label: "Private Health", href: "/services/health/private-health" },
    ],
  },
  {
    label: "Life Insurance",
    items: [
      { label: "Life Insurance", href: "/services/life/life-insurance" },
      { label: "Term Life Insurance", href: "/services/life/term-life" },
      { label: "Whole Life Insurance", href: "/services/life/whole-life" },
      // { label: "Universal Life", href: "/services/life/universal-life" },
      { label: "Final Expense", href: "/services/life/final-expense" },
      { label: "Key Person Insurance", href: "/services/life/key-person-insurance" },
      { label: "Group Life Insurance", href: "/services/life/group-life-insurance" },
      { label: "Split Dollar", href: "/services/life/split-dollar" },
    ],
  },
  {
    label: "Retirement Planning",
    items: [
      { label: "IRAs", href: "/services/retirement/iras" },
      { label: "401(k) Rollovers", href: "/services/retirement/401k" },
      { label: "Annuities", href: "/services/retirement/annuity" },
      { label: "Pension Planning", href: "/services/retirement/pension-planning" },
      { label: "Long Term Care", href: "/services/retirement/long-term-care" },
      { label: "Retirement Income", href: "/services/retirement/retirement-income" },
    ],
  },
    {
    label: "Auto Insurance",
    items: [
      { label: "Auto Insurance Overview", href: "/services/auto" },
      { label: "Personal Auto", href: "/services/auto/personal-auto" },
      { label: "Uninsured Motorist", href: "/services/auto/uninsured-motorist" },
      { label: "Multi Vehicle", href: "/services/auto/multi-vehicle" },
      { label: "Commercial Auto", href: "/services/auto/commercial-auto" },
      { label: "Comprehensive Coverage", href: "/services/auto/comprehensive-coverage" },
      { label: "Personal Injury Protection", href: "/services/auto/personal-injury-protection" },
    ],
  },
      {
    label: "Home Insurance",
    items: [
      // { label: "Homeowners Insurance", href: "/services/home/homeowners" },
      { label: "Property Protection", href: "/services/home/property-protection" },
      { label: "Additional Living Expenses", href: "/services/home/living-expenses" },
      { label: "Valuable Items Coverage", href: "/services/home/valuable-items" },
      { label: "Property Coverage", href: "/services/home/property-coverage" },
      { label: "liability Coverage", href: "/services/home/liability-coverage" },
      { label: "Flood Insurance", href: "/services/home/flood-insurance" },
    ],
  },
      {
    label: "Business Insurance",
    items: [
      { label: "General Liability", href: "/services/business/general-liability" },
      { label: "Professional Liability", href: "/services/business/professional-liability" },
      { label: "Workers Comp", href: "/services/business/workers-comp" },
      { label: "Commercial Property", href: "/services/business/commercial-property" },
      { label: "Commercial Auto", href: "/services/auto/commercial-auto" },
      { label: "Key Person Insurance", href: "/services/life/key-person-insurance" },
      { label: "Group Health", href: "/services/health/group-health" },
    ],
  },
];
</script>
