<!-- File: components/MultiStepForm.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'

const currentStep = ref(1)
const isSubmitting = ref(false)
const showSuccessMessage = ref(false)
const errorMessage = ref('')

const formData = ref({
  insuranceType: '',
  fullName: '',
  email: '',
  phone: '',
})

// Computed property for progress percentage
const progressPercentage = computed(() => {
  return (currentStep.value / 3) * 100
})

const nextStep = () => {
  if (currentStep.value < 3) {
    // Add a small delay to allow height animation to start before content changes
    setTimeout(() => {
      currentStep.value++
    }, 50)
  }
}
const prevStep = () => {
  if (currentStep.value > 1) {
    // Add a small delay to allow height animation to start before content changes
    setTimeout(() => {
      currentStep.value--
    }, 50)
  }
}

// Method to get dynamic height class based on current step
const getFormHeightClass = () => {
  switch (currentStep.value) {
    case 1:
      return 'min-h-[450px] md:min-h-[350px]' // Taller on mobile
    case 2:
      return 'min-h-[680px] md:min-h-[580px]' // Taller on mobile for contact form
    case 3:
      return 'min-h-[720px] md:min-h-[620px]' // Taller on mobile for review section
    default:
      return 'min-h-[500px] md:min-h-[400px]'
  }
}

// Method to get exact height in pixels for smooth transitions
const getFormHeight = () => {
  // Return auto on mobile, fixed on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    switch (currentStep.value) {
      case 1:
        return '450px'
      case 2:
        return '680px' 
      case 3:
        return '720px'
      default:
        return '500px'
    }
  }
  
  switch (currentStep.value) {
    case 1:
      return '350px'
    case 2:
      return '580px' 
    case 3:
      return '620px'
    default:
      return '400px'
  }
}

const submitForm = async () => {
  try {
    isSubmitting.value = true
    errorMessage.value = ''
    
    const response = await $fetch('/api/email/quote', {
      method: 'POST',
      body: formData.value
    })
    
    if (response.success) {
      showSuccessMessage.value = true
      // Reset form after successful submission
      formData.value = {
        insuranceType: '',
        fullName: '',
        email: '',
        phone: '',
      }
      currentStep.value = 1
    }
  } catch (error: any) {
    console.error('Error submitting form:', error)
    errorMessage.value = error.data?.message || 'Failed to submit quote request. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

const resetToNewQuote = () => {
  // Add smooth transition when returning to form
  showSuccessMessage.value = false
  
  // Small delay to allow success message to fade out before resetting form
  setTimeout(() => {
    // Reset form data with a slight stagger for smoother UX
    formData.value = {
      insuranceType: '',
      fullName: '',
      email: '',
      phone: '',
    }
    currentStep.value = 1
    errorMessage.value = ''
  }, 200)
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-2xl max-w-5xl mx-auto overflow-hidden">
    <!-- Success Message -->
    <Transition name="success" appear>
      <div v-if="showSuccessMessage" class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
        <div class="text-green-600 mb-4 md:mb-6">
          <svg class="w-16 h-16 md:w-20 md:h-20 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-green-800 mb-2 md:mb-3">Thank You!</h2>
        <p class="text-green-700 mb-4 md:mb-6 text-base md:text-lg px-2">Your quote request has been submitted successfully. One of our licensed professionals will contact you within 24 hours.</p>
        <button 
          @click="resetToNewQuote" 
          class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white px-6 md:px-8 py-3 rounded-lg hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
        >
          Submit Another Quote
        </button>
      </div>
    </Transition>

    <!-- Form -->
    <Transition name="form-reveal" appear>
      <div v-if="!showSuccessMessage">
        <!-- Header with Gradient -->
        <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-4 md:py-6 md:px-8">
        <h2 class="text-xl md:text-2xl font-semibold text-white text-center mb-4">
          Start Your Quote
        </h2>
        
        <!-- Progress Bar -->
        <div class="w-full bg-white/20 rounded-full h-2 mb-2">
          <div 
            class="bg-white h-2 rounded-full transition-all duration-500 ease-out"
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <p class="text-white/80 text-center text-sm">Step {{ currentStep }} of 3</p>
      </div>

      <div class="p-4 md:p-8 bg-gradient-to-br from-gray-50 to-white">
        <!-- Error Message -->
        <Transition name="error">
          <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-red-700 text-sm font-medium">{{ errorMessage }}</p>
              </div>
            </div>
          </div>
        </Transition>

        <!-- Enhanced Step indicators -->
        <div class="flex items-center justify-center mb-6 md:mb-10">
          <div class="flex space-x-2 md:space-x-4">
            <div
              v-for="step in 3"
              :key="step"
              class="flex items-center"
            >
              <div
                :class="[
                  'flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-sm font-semibold transition-all duration-300',
                  currentStep >= step
                    ? 'bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white shadow-lg transform scale-110'
                    : 'bg-gray-200 text-gray-500'
                ]"
              >
                <svg v-if="currentStep > step" class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span v-else>{{ step }}</span>
              </div>
              <div v-if="step < 3" class="w-8 md:w-16 h-1 mx-1 md:mx-2 rounded">
                <div 
                  :class="[
                    'h-full rounded transition-all duration-300',
                    currentStep > step ? 'bg-gradient-to-r from-[#30BCFE] to-[#2563eb]' : 'bg-gray-200'
                  ]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      
        <!-- Form with Transitions -->
        <form @submit.prevent="submitForm" class="relative overflow-hidden">
          <div 
            class="form-container transition-all duration-700 ease-out overflow-visible md:overflow-hidden" 
            :class="getFormHeightClass()"
            :style="{ minHeight: getFormHeight() }"
          >
            <!-- Step 1 -->
            <Transition name="slide" mode="out-in">
              <div v-if="currentStep === 1" key="step1" class="space-y-6 md:space-y-8 p-2 md:p-4 form-step absolute inset-0">
                <div class="text-center">
                  <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-2">I am seeking coverage for</h2>
                  <p class="text-sm md:text-base text-gray-600">Choose the type of insurance you're interested in</p>
                </div>

                <div class="space-y-3">
                  <label class="text-sm font-semibold text-gray-700">Insurance Type</label>
                  <select
                    v-model="formData.insuranceType"
                    required
                    class="w-full h-12 md:h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-base md:text-lg"
                  >
                    <option value="" disabled>Select insurance type</option>
                    <option value="Health">Health Insurance</option>
                    <option value="Life">Life Insurance</option>
                    <option value="Auto">Auto Insurance</option>
                    <option value="Home">Home Insurance</option>
                    <option value="Business">Business Insurance</option>
                    <option value="Medicare">Medicare Solutions</option>
                    <option value="RetirementPlanning">Retirement Planning</option>
                  </select>
                </div>

                <div class="pt-6 flex justify-center">
                  <button
                    type="button"
                    @click="nextStep"
                    :disabled="!formData.insuranceType"
                    class="inline-flex items-center justify-center gap-3 rounded-xl text-base md:text-lg font-semibold bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white px-6 md:px-8 py-3 md:py-4 hover:from-[#2563eb] hover:to-[#1d4ed8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#30BCFE]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </button>
                </div>
                <div class="text-center">
                  <p class="text-gray-500 text-xs md:text-sm">No obligation • Fast response • Licensed agents</p>
                </div>
              </div>
            </Transition>

            <!-- Step 2 -->
            <Transition name="slide" mode="out-in">
              <div v-if="currentStep === 2" key="step2" class="space-y-6 md:space-y-8 p-2 md:p-4 form-step absolute inset-0">
                <div class="text-center">
                  <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-2">Your Contact Information</h2>
                  <p class="text-sm md:text-base text-gray-600">Help us connect with you for your personalized quote</p>
                </div>

                <div class="grid gap-6">
                  <div class="space-y-3">
                    <label class="text-sm font-semibold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      v-model="formData.fullName" 
                      required
                      placeholder="John Doe"
                      class="w-full h-12 md:h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-base md:text-lg"
                    />
                  </div>

                  <div class="space-y-3">
                    <label class="text-sm font-semibold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      v-model="formData.email" 
                      required
                      placeholder="john@example.com"
                      class="w-full h-12 md:h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-base md:text-lg"
                    />
                  </div>

                  <div class="space-y-3">
                    <label class="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      v-model="formData.phone" 
                      required
                      placeholder="(555) 123-4567"
                      class="w-full h-12 md:h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-base md:text-lg"
                    />
                  </div>
                </div>

                <div class="pt-6 flex justify-between items-center">
                  <button 
                    type="button" 
                    @click="prevStep" 
                    class="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium text-sm md:text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
                    </svg>
                    Back
                  </button>
                  <button 
                    type="button" 
                    @click="nextStep" 
                    :disabled="!formData.fullName || !formData.email || !formData.phone"
                    class="inline-flex items-center gap-2 bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white px-6 md:px-8 py-2 md:py-3 rounded-xl hover:from-[#2563eb] hover:to-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-sm md:text-base"
                  >
                    Continue
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </Transition>

            <!-- Step 3 -->
            <Transition name="slide" mode="out-in">
              <div v-if="currentStep === 3" key="step3" class="space-y-6 md:space-y-8 p-2 md:p-4 form-step absolute inset-0">
                <div class="text-center">
                  <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-2">Review & Submit</h2>
                  <p class="text-sm md:text-base text-gray-600">Please confirm your information before submitting</p>
                </div>
                
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-4 md:p-6 rounded-2xl">
                  <h3 class="font-semibold text-gray-800 mb-3 md:mb-4 text-base md:text-lg">Your Quote Request</h3>
                  <div class="space-y-2 md:space-y-3">
                    <div class="flex justify-between items-center py-2 border-b border-blue-200 text-sm md:text-base">
                      <span class="font-medium text-gray-600">Insurance Type:</span>
                      <span class="font-semibold text-gray-800 text-right">{{ formData.insuranceType }}</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-blue-200 text-sm md:text-base">
                      <span class="font-medium text-gray-600">Full Name:</span>
                      <span class="font-semibold text-gray-800 text-right">{{ formData.fullName }}</span>
                    </div>
                    <div class="flex justify-between items-center py-2 border-b border-blue-200 text-sm md:text-base">
                      <span class="font-medium text-gray-600">Email:</span>
                      <span class="font-semibold text-gray-800 text-right text-xs md:text-base break-all">{{ formData.email }}</span>
                    </div>
                    <div class="flex justify-between items-center py-2 text-sm md:text-base">
                      <span class="font-medium text-gray-600">Phone:</span>
                      <span class="font-semibold text-gray-800 text-right">{{ formData.phone }}</span>
                    </div>
                  </div>
                </div>

                <div class="pt-6 flex justify-between items-center">
                  <button 
                    type="button" 
                    @click="prevStep" 
                    :disabled="isSubmitting"
                    class="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 disabled:opacity-50 transition-all duration-300 font-medium text-sm md:text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
                    </svg>
                    Back
                  </button>
                  <button 
                    type="submit" 
                    :disabled="isSubmitting"
                    class="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-sm md:text-lg"
                  >
                    <span v-if="isSubmitting" class="flex items-center gap-2">
                      <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                    <span v-else class="flex items-center gap-2">
                      Submit Quote Request
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </form>
      </div>
    </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Form container height animations */
.form-container {
  transition: min-height 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

/* Form step base styling with absolute positioning */
.form-step {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
}

/* Use relative positioning on mobile for better content flow */
@media (max-width: 768px) {
  .form-step {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
  }
}

/* Slide transitions for step changes with improved timing and coordination */
.slide-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.1s;
}

.slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px) scale(0.95);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px) scale(0.95);
}

/* Success message animation with bounce */
.success-enter-active {
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.success-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.success-enter-from {
  opacity: 0;
  transform: translateY(-30px) scale(0.8);
}

.success-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

/* Form reveal animation for smooth transition back from success */
.form-reveal-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;
}

.form-reveal-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-reveal-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.form-reveal-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

/* Error message animation */
.error-enter-active,
.error-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 0;
}

/* Enhanced input focus effects with size animation */
input:focus,
select:focus {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 12px 30px rgba(48, 188, 254, 0.2);
}

/* Enhanced button hover effects */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover:not(:disabled) {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

button:active:not(:disabled) {
  transform: translateY(0) scale(0.98);
}

/* Form card scaling animation */
.bg-white.rounded-2xl {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Stagger animation for form fields - adjusted for absolute positioning */
.form-step .space-y-3:nth-child(2) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

.form-step .space-y-3:nth-child(3) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
}

.form-step .space-y-3:nth-child(4) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
}

.form-step .grid > div:nth-child(1) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

.form-step .grid > div:nth-child(2) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
}

.form-step .grid > div:nth-child(3) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Progress bar animation with pulse effect */
.progress-bar {
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-white.h-2.rounded-full {
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.bg-white.h-2.rounded-full::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Step indicator enhanced animations */
.step-indicator {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced review section animations */
.bg-gradient-to-br.from-blue-50 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-gradient-to-br.from-blue-50:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

/* Loading spinner enhancement */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Micro-interactions for better UX */
label {
  transition: all 0.2s ease-in-out;
}

input:focus + label,
select:focus + label {
  color: #30BCFE;
  transform: translateY(-1px);
}

/* Success message enhancement */
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -8px, 0);
  }
  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0,-1px,0);
  }
}

/* Container scaling on step change with smooth height transition */
.bg-white.rounded-2xl.shadow-2xl {
  transform-origin: center top;
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced form container animation */
form {
  will-change: height;
}

/* Prevent overflow during transitions */
.overflow-hidden {
  overflow: hidden;
}

/* Allow overflow on mobile for better content visibility */
@media (max-width: 768px) {
  form.overflow-hidden {
    overflow: visible;
  }
}

/* Mobile responsiveness enhancements */
@media (max-width: 768px) {
  .form-container {
    transition: min-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: auto !important;
  }
  
  .form-step {
    position: relative;
    padding-bottom: 1rem;
  }
  
  .slide-enter-from {
    transform: translateX(30px) scale(0.98);
  }
  
  .slide-leave-to {
    transform: translateX(-30px) scale(0.98);
  }
  
  /* Ensure adequate spacing on mobile */
  .space-y-8 {
    gap: 1.5rem;
  }
  
  /* Make form fields and buttons more mobile-friendly */
  input, select {
    font-size: 16px !important; /* Prevents zoom on iOS */
  }
  
  button {
    padding: 0.875rem 1.5rem !important;
  }
}

/* Ensure smooth transitions by preventing content jumping */
.form-step * {
  box-sizing: border-box;
}
</style>
