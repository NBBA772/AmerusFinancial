<!-- File: components/sections/HomePage/CallToAction.vue -->
<template>
  <section class="py-32 relative overflow-hidden text-white">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <NuxtImg
        format="webp"
        quality="80"
        loading="lazy"
        :src="backgroundImage"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <!-- Black Overlay -->
      <div class="absolute inset-0 bg-black opacity-70"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 gap-12 items-center" :class="showForm ? 'lg:grid-cols-2' : 'max-w-4xl mx-auto text-center'">
        <!-- Left Column - Content -->
        <div :class="showForm ? 'text-left' : 'text-center'">
          <h2 class="text-3xl md:text-4xl font-bold mb-6" v-html="title">
          </h2>
          <p class="text-white text-lg mb-6">
            {{ description }}
          </p>
          
          <!-- Optional Button -->
          <div v-if="button" class="mt-8">
            <NuxtLink
              :to="button.href"
              class="inline-flex items-center justify-center gap-2 text-base font-semibold bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {{ button.label }}
              <Icon name="lucide:arrow-right" size="20" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column - Form -->
        <div v-if="showForm" class="bg-white rounded-lg shadow-xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
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

            <button
              type="submit"
              class="w-full inline-flex items-center justify-center gap-2 text-base font-semibold bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get My Quote
              <Icon name="lucide:arrow-right" size="20" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ButtonProps {
  label: string
  href: string
}

const props = withDefaults(defineProps<{
  showForm?: boolean
  button?: ButtonProps
  title?: string
  description?: string
  backgroundImage?: string
}>(), {
  showForm: true,
  title: 'Ready to Protect Your Business? <strong>Let\'s Talk.</strong>',
  description: 'Fill out the form below and an Amerus Commercial Insurance specialist will contact you to review your options.',
  backgroundImage: '/images/cheerful-colleagues-discussing-project-working.png'
})

const formData = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  state: '',
  coverageTypes: [] as string[],
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
strong {
  color: #30BCFE;
}
</style>