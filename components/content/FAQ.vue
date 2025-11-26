<template>
  <div class="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 mb-8 faq-section">
    <h2 class="text-2xl font-semibold mb-6 text-gray-800 faq-header">{{ title }}</h2>
    <div class="mb-8 faq-container">
      <div 
        v-for="(faq, index) in faqs" 
        :key="index"
        class="border-b faq-item" 
        :data-index="index"
      >
        <h3 class="flex ml-6">
          <button 
            type="button" 
            :aria-controls="`faq-content-${index}`"
            :aria-expanded="openFaq === index"
            class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
            :class="openFaq === index ? 'text-[#30BCFE]' : 'text-gray-800'"
            @click="toggleFaq(index)"
          >
            <span v-html="faq.question"></span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              class="h-4 w-4 shrink-0 transition-transform duration-200"
              :class="openFaq === index ? 'rotate-180' : ''"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </h3>
        <Transition name="accordion">
          <div 
            v-if="openFaq === index"
            :id="`faq-content-${index}`"
            class="overflow-hidden text-sm pb-4 px-1 text-gray-600 leading-relaxed ml-6"
            v-html="faq.answer"
          >
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FAQItem {
  question: string
  answer: string
}

interface Props {
  title?: string
  faqs: FAQItem[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Frequently Asked Questions'
})

const openFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<style scoped>
/* FAQ Entrance Animations */
.faq-section {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
}

.faq-header {
  animation: fadeInScale 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.7s both;
}

.faq-item {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideInLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  position: relative;
}

.faq-item[data-index="0"] { animation-delay: 0.8s; }
.faq-item[data-index="1"] { animation-delay: 0.9s; }
.faq-item[data-index="2"] { animation-delay: 1.0s; }
.faq-item[data-index="3"] { animation-delay: 1.1s; }
.faq-item[data-index="4"] { animation-delay: 1.2s; }
.faq-item[data-index="5"] { animation-delay: 1.3s; }
.faq-item[data-index="6"] { animation-delay: 1.4s; }
.faq-item[data-index="7"] { animation-delay: 1.5s; }
.faq-item[data-index="8"] { animation-delay: 1.6s; }
.faq-item[data-index="9"] { animation-delay: 1.7s; }

/* Vertical Line Indicator */
.faq-item::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  height: 100%;
  width: 3px;
  background: linear-gradient(to bottom, #30BCFE, #2563eb);
  transform: scaleY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: bottom;
  opacity: 0;
}

.faq-item:hover::before,
.faq-item:has(button[aria-expanded="true"])::before {
  transform: scaleY(1);
  opacity: 1;
}

/* Accordion Transition */
.accordion-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}

.accordion-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}

.accordion-enter-from {
  opacity: 0;
  transform: scaleY(0) translateY(-10px);
  max-height: 0;
}

.accordion-leave-to {
  opacity: 0;
  transform: scaleY(0) translateY(-5px);
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  transform: scaleY(1) translateY(0);
  max-height: 200px;
}

/* FAQ Button Hover Effects */
.faq-item button:hover {
  background: linear-gradient(90deg, transparent, rgba(48, 188, 254, 0.05), transparent);
  transform: translateX(4px);
}

.faq-item button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* Enhanced FAQ Content Animation */
.accordion-enter-active .text-gray-600 {
  animation: fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Style list items with custom bullets */
:deep(ul) {
  list-style: none;
  padding-left: 0;
  margin-top: 0.5rem;
}

:deep(li) {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  padding-left: 0.25rem;
}

:deep(li::before) {
  content: '✓';
  color: #30BCFE;
  font-weight: bold;
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  line-height: 1.25rem;
  text-align: center;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  /* Reduce FAQ animation delays on mobile */
  .faq-item[data-index="0"] { animation-delay: 0.6s; }
  .faq-item[data-index="1"] { animation-delay: 0.7s; }
  .faq-item[data-index="2"] { animation-delay: 0.8s; }
  .faq-item[data-index="3"] { animation-delay: 0.9s; }
  .faq-item[data-index="4"] { animation-delay: 1.0s; }
  .faq-item[data-index="5"] { animation-delay: 1.1s; }
  .faq-item[data-index="6"] { animation-delay: 1.2s; }
  .faq-item[data-index="7"] { animation-delay: 1.3s; }
  .faq-item[data-index="8"] { animation-delay: 1.4s; }
  .faq-item[data-index="9"] { animation-delay: 1.5s; }
}
</style>