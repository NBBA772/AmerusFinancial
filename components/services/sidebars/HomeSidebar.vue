<template>
  <aside
    class="bg-gray-50 rounded-2xl border-2 border-gray-200  sticky top-24 h-fit shadow-2xl hover:shadow-md transition-shadow duration-300"
  >
    <!-- Header -->
    <header
      class="flex items-center gap-3 bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-6 px-6 rounded-t-2xl"
    >
      <Icon name="lucide:heart-pulse" size="80" class="text-white" />
      <h3 class="text-2xl font-semibold">Explore Home Insurance</h3>
    </header>

    <!-- Body -->
    <div class="p-6">
      <!-- Navigation Links -->
      <ul class="space-y-1">
        <li
          v-for="(link, index) in links"
          :key="link.href"
          class="group py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-sm"
          :class="{ 'border-b border-gray-200': index !== links.length - 1 }"
        >
          <NuxtLink
            :to="link.href"
            class="flex items-center justify-between text-gray-700 group-hover:text-[#30BCFE] transition-colors duration-300"
          >
            <div class="flex items-center">
              <div
                class="p-2 bg-amber-50 rounded-md mr-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              >
                <Icon :name="link.icon" class="text-amber-600" size="25" />
              </div>
              <span class="font-medium">{{ link.label }}</span>
            </div>

            <!-- Badge -->
            <span
              v-if="link.badge"
              class="ml-2 inline-flex items-center rounded-full bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5"
            >
              {{ link.badge }}
            </span>
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA Card -->
      <div
        class="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100 transition-all duration-300 hover:shadow-sm"
      >
        <h4 class="font-semibold mb-2 text-gray-800 flex items-center gap-2">
          <Icon name="lucide:help-circle" class="text-amber-600" size="20" />
          Have Questions?
        </h4>

        <p class="text-sm text-gray-600 mb-5 leading-relaxed">
          Our specialists can help you understand your options and find the right
          coverage for your needs.
        </p>

        <NuxtLink to="/contact">
          <button
            class="w-full inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-4 px-6 shadow-sm hover:shadow-md"
          >
            <Icon name="lucide:phone" class="h-4 w-4" />
            Contact an Advisor
          </button>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script setup>
const links = [
  { href: "/services/home/homeowners", label: "Homeowners Insurance", icon: "lucide:house" },
  { href: "/services/home/property-protection", label: "Property Protection", icon: "lucide:shield" },
  { href: "/services/home/living-expenses", label: "Living Expenses", icon: "lucide:lightbulb" },
  { href: "/services/home/valuable-items", label: "Valuable Items", icon: "lucide:package" },
  { href: "/services/home/property-coverage", label: "Property Coverage", icon: "lucide:badge-check" },
  { href: "/services/home/flood-insurance", label: "Flood Insurance", icon: "lucide:droplets" },
  { href: "/services/home/liability-coverage", label: "Liability Coverage", icon: "lucide:umbrella" },
];
</script>
