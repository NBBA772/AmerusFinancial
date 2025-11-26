<template>
  <div class="w-full py-12 relative overflow-hidden" :class="backgroundColor">
    <!-- Background Image -->
    <div v-if="showBackgroundPattern" class="absolute inset-0 opacity-40">
      <NuxtImg
        format="webp"
        quality="80"
        loading="lazy"
        src="/images/background-lines.png"
        alt="Background pattern"
        class="w-full min-h-full object-cover"
      />
    </div>

    <div class="container mx-auto relative z-10" :class="backgroundColor !== 'bg-transparent' ? 'px-4 sm:px-6 lg:px-8' : ''">
      <div class="flex flex-col gap-8 items-center" :class="[
        formPosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
      ]">
        <!-- Content Column -->
        <div class="flex-1 space-y-4">
          <div
            v-if="content.eyebrow"
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors text-sm bg-amber-50 text-amber-600 border-amber-200 mb-2"
          >
            {{ content.eyebrow }}
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight" v-html="content.title"></h2>
          <h3 v-if="content.bulletsHeading" class="text-xl font-semibold mb-4 text-gray-900">
            {{ content.bulletsHeading }}
          </h3>
          <!-- Bullet Points List -->
          <div v-if="content.bullets && content.bullets.length" class="pt-6">
            <ul class="space-y-3">
              <li v-for="(bullet, index) in content.bullets" :key="index" class="flex items-start gap-3">
                <Icon name="lucide:check-circle" class="text-[#30BCFE] mt-1 flex-shrink-0" size="20" />
                <span class="text-base text-gray-700" v-html="bullet"></span>
              </li>
            </ul>
            
            <!-- Post-Bullet Content -->
            <div v-if="content.postBulletContent" class="text-lg text-gray-700 mt-6" v-html="content.postBulletContent"></div>
          </div>

          <div v-if="content.cta" class="pt-4">
            <NuxtLink
              :to="content.cta.href || '/contact'"
              class="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-4 px-6 rounded-md"
            >
              {{ content.cta.label || 'Learn More' }}
            </NuxtLink>
          </div>
        </div>

        <!-- Form Column -->
        <div class="flex-1 flex items-center justify-center">
          <div class="w-full bg-[#BFD9FF] rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ formTitle }}</h3>
            <form @submit.prevent="handleSubmit" class="space-y-4 bg-[#BFD9FF]">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#30BCFE] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#30BCFE] focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#30BCFE] focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <!-- Company -->
              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  id="company"
                  v-model="formData.company"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#30BCFE] focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>

              <!-- State -->
              <div>
                <label for="state" class="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  id="state"
                  v-model="formData.state"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#30BCFE] focus:border-transparent"
                  placeholder="e.g., California"
                />
              </div>

              <!-- Coverage Types -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Types of Coverage Needed</label>
                <div class="grid grid-cols-2 gap-3">
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      v-model="formData.coverageTypes"
                      value="Liability"
                      class="w-4 h-4 text-[#30BCFE] border-gray-300 rounded focus:ring-[#30BCFE]"
                    />
                    <span class="text-sm text-gray-700">Liability</span>
                  </label>
                  
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      v-model="formData.coverageTypes"
                      value="Auto"
                      class="w-4 h-4 text-[#30BCFE] border-gray-300 rounded focus:ring-[#30BCFE]"
                    />
                    <span class="text-sm text-gray-700">Auto</span>
                  </label>
                  
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      v-model="formData.coverageTypes"
                      value="Workers Comp"
                      class="w-4 h-4 text-[#30BCFE] border-gray-300 rounded focus:ring-[#30BCFE]"
                    />
                    <span class="text-sm text-gray-700">Workers Comp</span>
                  </label>
                  
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      v-model="formData.coverageTypes"
                      value="Trucking"
                      class="w-4 h-4 text-[#30BCFE] border-gray-300 rounded focus:ring-[#30BCFE]"
                    />
                    <span class="text-sm text-gray-700">Trucking</span>
                  </label>
                  
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      v-model="formData.coverageTypes"
                      value="Property"
                      class="w-4 h-4 text-[#30BCFE] border-gray-300 rounded focus:ring-[#30BCFE]"
                    />
                    <span class="text-sm text-gray-700">Property</span>
                  </label>
                  
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      v-model="formData.coverageTypes"
                      value="Other"
                      class="w-4 h-4 text-[#30BCFE] border-gray-300 rounded focus:ring-[#30BCFE]"
                    />
                    <span class="text-sm text-gray-700">Other</span>
                  </label>
                </div>
              </div>

              <!-- Business Description -->
              <div>
                <label for="businessDescription" class="block text-sm font-medium text-gray-700 mb-1">Brief Description of Your Business</label>
                <textarea
                  id="businessDescription"
                  v-model="formData.businessDescription"
                  rows="3"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#30BCFE] focus:border-transparent resize-none"
                  placeholder="Tell us about your business and what you do..."
                ></textarea>
              </div>

              <!-- Preferred Contact Method -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                <div class="flex gap-6">
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      v-model="formData.preferredContact"
                      value="Call"
                      class="w-4 h-4 text-[#30BCFE] border-gray-300 focus:ring-[#30BCFE]"
                    />
                    <span class="text-sm text-gray-700">Call</span>
                  </label>
                  
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      v-model="formData.preferredContact"
                      value="Email"
                      class="w-4 h-4 text-[#30BCFE] border-gray-300 focus:ring-[#30BCFE]"
                    />
                    <span class="text-sm text-gray-700">Email</span>
                  </label>
                  
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      v-model="formData.preferredContact"
                      value="Text"
                      class="w-4 h-4 text-[#30BCFE] border-gray-300 focus:ring-[#30BCFE]"
                    />
                    <span class="text-sm text-gray-700">Text</span>
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full inline-flex items-center justify-center gap-2 text-base font-semibold bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {{ submitButtonText }}
                <Icon name="lucide:arrow-right" size="20" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showDivider" class="border-t border-gray-200 w-full my-4"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  formPosition: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value)
  },
  formTitle: {
    type: String,
    default: 'Get in Touch'
  },
  submitButtonText: {
    type: String,
    default: 'Submit'
  },
  showDivider: {
    type: Boolean,
    default: true
  },
  backgroundColor: {
    type: String,
    default: 'bg-transparent'
  },
  showBackgroundPattern: {
    type: Boolean,
    default: false
  }
})

const formData = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  state: '',
  coverageTypes: [],
  businessDescription: '',
  preferredContact: ''
})

const handleSubmit = async () => {
  // Handle form submission
  console.log('Form submitted:', formData.value)
  
  // You can add your API call here
  // Example:
  // await $fetch('/api/contact', {
  //   method: 'POST',
  //   body: formData.value
  // })
  
  // Navigate to contact page or show success message
  navigateTo('/contact')
}
</script>

<style lang="css" scoped>
:deep(strong) {
  color: #30BCFE !important;
}
</style>
