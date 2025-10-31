<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Life Insurance Costs and Pricing Factors</h2>
    <div class="prose max-w-none mb-6">
      <p>Life insurance premiums vary widely based on several factors. Understanding what affects your rates can help you find the most affordable coverage.</p>
    </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" :key="animationKey">
    <div v-for="(factor, i) in factorCards" :key="factor.title" class="rounded-2xl border bg-white text-gray-900 shadow-lg overflow-hidden stagger-card" :style="{ animationDelay: `${i * 120}ms` }">
      <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-8 flex items-center gap-6 rounded-t-2xl">
        <div class="h-16 w-16 flex items-center justify-center">
          <component :is="factor.icon" class="h-10 w-10 text-white" />
        </div>
        <h4 class="font-semibold text-white text-xl ml-2">{{ factor.title }}</h4>
      </div>
      <div class="p-8 pt-6">
        <p class="text-sm text-muted-foreground">{{ factor.description }}</p>
      </div>
    </div>
  <!-- Removed invalid TransitionGroup end tag -->

    <TransitionGroup name="stagger-fade" tag="div">
      <div class="rounded-2xl border bg-white text-gray-900 shadow-lg overflow-hidden mb-8" style="transition-delay: 800ms;">
        <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-8 flex items-center rounded-t-2xl">
          <h3 class="font-semibold text-white text-xl">Sample Monthly Premium Ranges (2025)</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr class="bg-muted">
                <th class="border p-3 text-left">Age</th>
                <th class="border p-3 text-left">$250,000 Term (20yr)</th>
                <th class="border p-3 text-left">$500,000 Term (20yr)</th>
                <th class="border p-3 text-left">$1M Term (20yr)</th>
                <th class="border p-3 text-left">$250,000 Whole Life</th>
              </tr>
            </thead>
            <tbody>
              <tr class="even:bg-gray-50">
                <td class="border p-3">30, Female, Excellent Health</td>
                <td class="border p-3">$13-18</td>
                <td class="border p-3">$20-30</td>
                <td class="border p-3">$35-50</td>
                <td class="border p-3">$180-250</td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="border p-3">30, Male, Excellent Health</td>
                <td class="border p-3">$15-22</td>
                <td class="border p-3">$25-35</td>
                <td class="border p-3">$40-60</td>
                <td class="border p-3">$210-290</td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="border p-3">40, Female, Excellent Health</td>
                <td class="border p-3">$18-25</td>
                <td class="border p-3">$30-45</td>
                <td class="border p-3">$55-80</td>
                <td class="border p-3">$280-380</td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="border p-3">40, Male, Excellent Health</td>
                <td class="border p-3">$22-32</td>
                <td class="border p-3">$38-55</td>
                <td class="border p-3">$70-100</td>
                <td class="border p-3">$340-450</td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="border p-3">50, Female, Excellent Health</td>
                <td class="border p-3">$35-50</td>
                <td class="border p-3">$60-85</td>
                <td class="border p-3">$110-160</td>
                <td class="border p-3">$450-650</td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="border p-3">50, Male, Excellent Health</td>
                <td class="border p-3">$50-75</td>
                <td class="border p-3">$90-130</td>
                <td class="border p-3">$170-240</td>
                <td class="border p-3">$550-780</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
          <!-- Alert row: full width, outside grid -->
    <div role="alert" class="block w-full rounded-lg border p-4 mb-6 bg-amber-50 text-amber-800 border-amber-200">
      <div class="flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert h-4 w-4"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
        <div class="text-sm leading-relaxed">These are approximate ranges for non-smokers in excellent health. Your actual rates may vary based on your specific health profile, lifestyle, insurance company, and other factors. Smokers typically pay 2-3 times more than non-smokers.</div>
      </div>
    </div>
    </TransitionGroup>

    


    <TransitionGroup name="stagger-fade" tag="div">
      <div class="rounded-2xl border bg-white text-gray-900 shadow-lg overflow-hidden mb-8" style="transition-delay: 1000ms;">
        <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-8 flex items-center rounded-t-2xl">
          <h3 class="font-semibold text-white text-xl">Cost-Saving Tips</h3>
        </div>
        <div class="p-8">
          <ul class="list-disc pl-6 space-y-3">
            <TransitionGroup name="stagger-fade" tag="div">
              <li v-for="(tip, i) in tipsList" :key="tip" class="bg-gray-50 rounded-lg px-4 py-2" :style="{ transitionDelay: `${i * 100}ms` }" v-html="tip"></li>
            </TransitionGroup>
          </ul>
        </div>
      </div>
    </TransitionGroup>
</div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from 'vue';

const animationKey = ref(Date.now());
onMounted(() => { animationKey.value = Date.now(); });

const factorCards = [
  {
    title: 'Age',
    description: 'The single most important factor. The younger you are when you purchase a policy, the lower your premiums will be.',
    icon: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'lucide lucide-clock h-10 w-10 text-white' }, [h('circle', { cx: 12, cy: 12, r: 10 }), h('polyline', { points: '12 6 12 12 16 14' })]);
      }
    }
  },
  {
    title: 'Health',
    description: 'Your current health condition and medical history significantly impact rates. Chronic conditions, medications, and family history are all considered.',
    icon: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'lucide lucide-heart h-10 w-10 text-white' }, [h('path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' })]);
      }
    }
  },
  {
    title: 'Policy Type',
    description: 'Term life is less expensive than permanent life insurance. The longer the term, the higher the premium.',
    icon: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'lucide lucide-shield h-10 w-10 text-white' }, [h('path', { d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' })]);
      }
    }
  },
  {
    title: 'Coverage Amount',
    description: 'The higher the death benefit, the higher the premium. However, costs per $1,000 of coverage decrease with larger policies.',
    icon: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'lucide lucide-dollar-sign h-10 w-10 text-white' }, [h('line', { x1: 12, x2: 12, y1: 2, y2: 22 }), h('path', { d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' })]);
      }
    }
  },
  {
    title: 'Lifestyle',
    description: 'Tobacco use, alcohol consumption, hazardous hobbies (skydiving, scuba diving), and dangerous occupations can all increase your rates.',
    icon: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'lucide lucide-compass h-10 w-10 text-white' }, [h('path', { d: 'm16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z' }), h('circle', { cx: 12, cy: 12, r: 10 })]);
      }
    }
  },
  {
    title: 'Gender',
    description: 'Women typically pay less than men for life insurance due to longer average lifespans.',
    icon: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: 'lucide lucide-chart-no-axes-column-increasing h-10 w-10 text-white' }, [h('line', { x1: 12, x2: 12, y1: 20, y2: 10 }), h('line', { x1: 18, x2: 18, y1: 20, y2: 4 }), h('line', { x1: 6, x2: 6, y1: 20, y2: 16 })]);
      }
    }
  }
];

const tipsList = [
  '<strong>Buy young:</strong> Lock in lower rates by purchasing coverage when you\'re younger and healthier.',
  '<strong>Improve your health:</strong> Quitting smoking, losing weight, and managing chronic conditions can significantly reduce your premiums.',
  '<strong>Bundle policies:</strong> Some insurers offer discounts when you purchase multiple insurance products from them.',
  '<strong>Pay annually:</strong> You might get a discount if you pay your premium annually instead of monthly.',
  '<strong>Ladder your coverage:</strong> Consider multiple policies with different terms to match your declining insurance needs over time.',
  '<strong>Shop around:</strong> Premium rates can vary significantly between insurance companies for the same coverage.'
];
</script>

<style scoped>
/* Staggered fade-in animation for grid cards */
.stagger-card {
  opacity: 0;
  transform: translateY(32px);
  animation: staggerFadeIn 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
}

@keyframes staggerFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Staggered fade/slide animation for card sections and list items */
.stagger-fade-enter-active {
  transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1);
}
.stagger-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1);
}
.stagger-fade-enter-from {
  opacity: 0;
  transform: translateY(32px);
}
.stagger-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Card hover effects for all cards */
.bg-white.rounded-2xl.shadow-lg:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Progress bar animations removed: no header animation on gradient */

/* Table row hover and zebra striping */
tbody tr:hover {
  background-color: #e0f2fe;
  transition: background-color 0.2s ease;
}
</style>