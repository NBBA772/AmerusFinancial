<script setup lang="ts">
import { ref } from 'vue'

// Enhanced SEO using stable composables
useEnhancedMetaTags()
useResourceHints(['/images/contact-og.jpg'])
usePerformanceMonitoring()

// Consolidated SEO + Social Meta for Contact page
const pageUrl = 'https://www.amerusfinancial.com/contact'
const pageTitle = 'Contact Amerus Financial — Get In Touch'
const pageDescription = "Reach our team for quotes, coverage questions, or policy reviews. Call, email, or send a message — we typically respond within 1 business day."
const pageImage = '/images/amerus-og-default.jpg'

useHead({
  title: pageTitle,
  meta: [
    // Basic meta
    { name: 'description', content: pageDescription },

    // Required Open Graph tags
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:site_name', content: 'Amerus Financial' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:image', content: pageImage },
    { property: 'og:url', content: pageUrl },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: pageImage },
    { name: 'twitter:site', content: '@amerusfinancial' },
    { name: 'twitter:creator', content: '@amerusfinancial' },

    // Technical SEO
    { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },
    { name: 'googlebot', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' }
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
    // Performance optimizations
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ]
})

// Structured Data - Service Schema with consistent organization
const serviceProvider = useServiceProvider()

useSchemaOrg([
  {
    '@type': 'Service',
    name: 'Comprehensive Auto Coverage',
    provider: serviceProvider,
    description: 'Comprehensive auto insurance coverage protecting against theft, vandalism, weather damage, and other non-collision incidents with affordable rates starting at $75.',
    serviceType: 'Insurance',
    category: 'Comprehensive Auto Insurance',
    areaServed: 'United States',
    offers: {
      '@type': 'Offer',
      price: '75.00',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingIncrement: 1,
        unitText: 'monthly'
      },
      description: 'Comprehensive auto coverage starting at $75 per month'
    }
  },
])

// Form state
const isSubmitting = ref(false)
const showSuccessMessage = ref(false)
const errorMessage = ref('')

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  try {
    isSubmitting.value = true
    errorMessage.value = ''
    
    const response = await $fetch('/api/email/contact', {
      method: 'POST',
      body: formData.value
    })
    
    if (response.message) {
      showSuccessMessage.value = true
      // Reset form after successful submission
      formData.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  } catch (error: any) {
    console.error('Error submitting contact form:', error)
    errorMessage.value = error.data?.message || 'Failed to send message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

const resetToNewMessage = () => {
  // Add smooth transition when returning to form
  showSuccessMessage.value = false
  
  // Small delay to allow success message to fade out before resetting form
  setTimeout(() => {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    errorMessage.value = ''
  }, 200)
}
</script>

<template>
    <PatternSection>
        <!-- <HomepageHeroSection /> -->
        <section class="py-12 bg-white">
            <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row gap-12">
                <!-- Sidebar -->
                <div class="w-full lg:w-1/3">
                <div class="sticky top-24 space-y-6">
                    <h1 class="text-2xl font-bold mb-6">Contact Amerus Financial - Insurance Quotes & Support</h1>
                    <p class="text-gray-600 mb-8">
                    Whether you have questions about insurance coverage, need a quote, or want to review your current policies, we're here to provide the information and support you need.
                    </p>

                    <div class="space-y-4">
                    <!-- Office -->
                    <div class="rounded-lg border bg-white shadow-sm">
                        <div class="p-4 flex items-center">
                        <div class="bg-blue-100 rounded-full p-3 mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-bold">Our Office</h3>
                            <p class="text-gray-600">
                            5115 S Lakeland Dr, Suite 1<br>
                            Lakeland, FL 33813
                            </p>
                        </div>
                        </div>
                    </div>

                    <!-- Phone -->
                    <div class="rounded-lg border bg-white shadow-sm">
                        <div class="p-4 flex items-center">
                        <div class="bg-blue-100 rounded-full p-3 mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-bold">Phone</h3>
                            <p class="text-gray-600">(888) 441-7891</p>
                        </div>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="rounded-lg border bg-white shadow-sm">
                        <div class="p-4 flex items-center">
                        <div class="bg-blue-100 rounded-full p-3 mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-bold">Email</h3>
                            <p class="text-gray-600">support@amerusfinancial.com</p>
                        </div>
                        </div>
                    </div>

                    <!-- Hours -->
                    <div class="rounded-lg border bg-white shadow-sm">
                        <div class="p-4 flex items-center">
                        <div class="bg-blue-100 rounded-full p-3 mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-bold">Business Hours</h3>
                            <p class="text-gray-600">
                            Monday - Friday: 8:30am - 5:00pm<br>
                            Saturday: 10:00am - 2:00pm<br>
                            Sunday: Closed
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <!-- Contact Form -->
                <div class="w-full lg:w-2/3">
                <div class="bg-white rounded-2xl shadow-2xl max-w-5xl mx-auto overflow-hidden">
                    
                    <!-- Success Message -->
                    <Transition name="success" appear>
                    <div v-if="showSuccessMessage" class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center">
                        <div class="text-green-600 mb-6">
                        <svg class="w-20 h-20 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        </div>
                        <h2 class="text-3xl font-bold text-green-800 mb-3">Message Sent!</h2>
                        <p class="text-green-700 mb-6 text-lg">Thank you for contacting us. We'll respond to your message within 24 hours.</p>
                        <button 
                        @click="resetToNewMessage" 
                        class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white px-8 py-3 rounded-lg hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                        Send Another Message
                        </button>
                    </div>
                    </Transition>

                    <!-- Form -->
                    <Transition name="form-reveal" appear>
                    <div v-if="!showSuccessMessage">
                        <!-- Header with Gradient -->
                        <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-8">
                        <h2 class="text-2xl font-semibold text-white text-center mb-2">
                            Send Us a Message
                        </h2>
                        <p class="text-white/80 text-center text-sm">We're here to help with all your insurance needs</p>
                        </div>

                        <div class="p-8 bg-gradient-to-br from-gray-50 to-white">
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

                        <form @submit.prevent="submitForm" class="space-y-8">
                            <!-- Name & Email -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-3">
                                <label for="name" class="text-sm font-semibold text-gray-700">Full Name</label>
                                <input 
                                id="name" 
                                v-model="formData.name" 
                                type="text"
                                placeholder="Your full name" 
                                required 
                                class="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg"
                                />
                            </div>
                            <div class="space-y-3">
                                <label for="email" class="text-sm font-semibold text-gray-700">Email Address</label>
                                <input 
                                id="email" 
                                v-model="formData.email" 
                                type="email" 
                                placeholder="your@email.com" 
                                required 
                                class="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg"
                                />
                            </div>
                            </div>

                            <!-- Phone & Subject -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-3">
                                <label for="phone" class="text-sm font-semibold text-gray-700">Phone Number (Optional)</label>
                                <input 
                                id="phone" 
                                v-model="formData.phone" 
                                type="tel" 
                                placeholder="(555) 123-4567" 
                                class="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg"
                                />
                            </div>
                            <div class="space-y-3">
                                <label for="subject" class="text-sm font-semibold text-gray-700">Subject</label>
                                <input 
                                id="subject" 
                                v-model="formData.subject" 
                                type="text"
                                placeholder="Message subject" 
                                required 
                                class="w-full h-14 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg"
                                />
                            </div>
                            </div>

                            <!-- Message -->
                            <div class="space-y-3">
                            <label for="message" class="text-sm font-semibold text-gray-700">Message</label>
                            <textarea 
                                id="message" 
                                v-model="formData.message" 
                                placeholder="How can we help you?" 
                                required 
                                rows="6"
                                class="w-full px-4 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#30BCFE] focus:ring-4 focus:ring-[#30BCFE]/20 transition-all duration-300 text-lg resize-y min-h-[120px]"
                            ></textarea>
                            </div>

                            <!-- Submit Button -->
                            <div class="pt-6">
                            <button 
                                type="submit" 
                                :disabled="isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message"
                                class="inline-flex items-center gap-3 bg-gradient-to-r from-[#30BCFE] to-[#2563eb] text-white px-8 py-4 rounded-xl hover:from-[#2563eb] hover:to-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg w-full sm:w-auto"
                            >
                                <span v-if="isSubmitting" class="flex items-center gap-2">
                                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                                </span>
                                <span v-else class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                                </svg>
                                Send Message
                                </span>
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </Transition>
                </div>

                <!-- Google Map -->
                <div class="mt-8 h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.9629343932855!2d-81.97571662429776!3d28.064172909618123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3f1ca3f3aeeb%3A0x240eeb6c756344ef!2s5115%20S%20Lakeland%20Dr%20%231%2C%20Lakeland%2C%20FL%2033813!5e0!3m2!1sen!2sus!4v1691589237200!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Amerus Financial Group Office Location"
                        class="border-0"
                    ></iframe>
                </div>
                </div>
            </div>
            </div>
        </section>
  </PatternSection>
</template>

<style scoped>
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

/* Enhanced input focus effects */
input:focus,
textarea:focus {
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

/* Stagger animation for form fields */
.space-y-3:nth-child(1) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both;
}

.space-y-3:nth-child(2) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

.space-y-3:nth-child(3) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
}

.space-y-3:nth-child(4) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
}

.space-y-3:nth-child(5) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
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

/* Micro-interactions for better UX */
label {
  transition: all 0.2s ease-in-out;
}

input:focus + label,
textarea:focus + label {
  color: #30BCFE;
  transform: translateY(-1px);
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

/* Mobile responsiveness enhancements */
@media (max-width: 768px) {
  .form-reveal-enter-from {
    transform: translateY(15px) scale(0.98);
  }
  
  .form-reveal-leave-to {
    transform: translateY(-15px) scale(0.98);
  }
}
</style>
