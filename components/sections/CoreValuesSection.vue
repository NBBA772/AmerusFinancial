<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 text-[#30BCFE] border-[#30BCFE]/30 bg-[#30BCFE]/10">
          Our Core Values
        </div>
        <h2 class="text-3xl font-bold mb-4 text-gray-800">What Makes Us Different</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          At Amerus Financial, our values guide everything we do. From how we interact with clients to how we design our insurance solutions.
        </p>
      </div>

      <!-- Values Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Client-First Approach -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
            <div class="flex justify-center">
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
                class="w-8 h-8 text-white"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
            </div>
          </div>
          <div class="p-6 bg-gradient-to-br from-gray-50 to-white">
            <h3 class="text-xl font-bold mb-3 text-gray-800 text-center">Client-First Approach</h3>
            <p class="text-gray-600 text-center leading-relaxed">
              We always put our clients' needs before our own, focusing on finding the right coverage, not just selling policies.
            </p>
          </div>
        </div>

        <!-- Education & Transparency -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
            <div class="flex justify-center">
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
                class="w-8 h-8 text-white"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
          </div>
          <div class="p-6 bg-gradient-to-br from-gray-50 to-white">
            <h3 class="text-xl font-bold mb-3 text-gray-800 text-center">Education & Transparency</h3>
            <p class="text-gray-600 text-center leading-relaxed">
              We believe in educating our clients about their options and being completely transparent about coverage and costs.
            </p>
          </div>
        </div>

        <!-- Continuous Support -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-4 px-6">
            <div class="flex justify-center">
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
                class="w-8 h-8 text-white"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
          </div>
          <div class="p-6 bg-gradient-to-br from-gray-50 to-white">
            <h3 class="text-xl font-bold mb-3 text-gray-800 text-center">Continuous Support</h3>
            <p class="text-gray-600 text-center leading-relaxed">
              Our relationship with clients doesn't end when a policy is signed. We provide ongoing support and regular policy reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Card hover effects matching the form styling */
.bg-white.rounded-2xl {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-white.rounded-2xl:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Icon animations */
svg {
  transition: all 0.3s ease-in-out;
}

.bg-white.rounded-2xl:hover svg {
  transform: scale(1.05) rotate(2deg);
}

/* Title animation on hover */
h3 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-white.rounded-2xl:hover h3 {
  color: #30BCFE;
  transform: scale(1.02);
}

/* Text animation */
p {
  transition: all 0.3s ease-in-out;
}

.bg-white.rounded-2xl:hover p {
  color: #374151;
  transform: translateY(-1px);
}

/* Gradient header effects */
.bg-gradient-to-r {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-white.rounded-2xl:hover .bg-gradient-to-r {
  background: linear-gradient(to right, #2563eb, #1d4ed8);
}

/* Stagger animation for cards appearing */
.bg-white.rounded-2xl:nth-child(1) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both;
}

.bg-white.rounded-2xl:nth-child(2) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

.bg-white.rounded-2xl:nth-child(3) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Enhanced shadow effects */
.shadow-2xl {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
}

.bg-white.rounded-2xl:hover {
  box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.2);
}

/* Content area styling to match form */
.bg-gradient-to-br {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-white.rounded-2xl:hover .bg-gradient-to-br {
  background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
  transform: translateY(-1px);
}

/* Badge styling */
.inline-flex {
  transition: all 0.3s ease-in-out;
}

.inline-flex:hover {
  transform: scale(1.05);
  background-color: rgba(48, 188, 254, 0.15);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .bg-white.rounded-2xl:hover {
    transform: translateY(-2px) scale(1.005);
  }
  
  .bg-white.rounded-2xl:hover h3 {
    transform: scale(1.01);
  }
}

/* Enhanced focus states for accessibility */
.bg-white.rounded-2xl:focus-within {
  outline: 2px solid #30BCFE;
  outline-offset: 2px;
}
</style>