<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Clients Served -->
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </div>
          <div class="p-6 bg-gradient-to-br from-gray-50 to-white text-center">
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">5000+</h3>
            <p class="text-gray-600 font-medium">Clients Served</p>
          </div>
        </div>

        <!-- Years in Business -->
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
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
          </div>
          <div class="p-6 bg-gradient-to-br from-gray-50 to-white text-center">
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">15+</h3>
            <p class="text-gray-600 font-medium">Years in Business</p>
          </div>
        </div>

        <!-- Client Satisfaction -->
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
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
          </div>
          <div class="p-6 bg-gradient-to-br from-gray-50 to-white text-center">
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">98%</h3>
            <p class="text-gray-600 font-medium">Client Satisfaction</p>
          </div>
        </div>

        <!-- Customer Support -->
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
          <div class="p-6 bg-gradient-to-br from-gray-50 to-white text-center">
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">24/7</h3>
            <p class="text-gray-600 font-medium">Customer Support</p>
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

/* Number animation on hover */
h3 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-white.rounded-2xl:hover h3 {
  color: #30BCFE;
  transform: scale(1.05);
}

/* Text animation */
p {
  transition: all 0.3s ease-in-out;
}

.bg-white.rounded-2xl:hover p {
  color: #374151;
  transform: translateY(-2px);
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

.bg-white.rounded-2xl:nth-child(4) {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
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

/* Mobile responsiveness */
@media (max-width: 768px) {
  .bg-white.rounded-2xl:hover {
    transform: translateY(-2px) scale(1.005);
  }
  
  .bg-white.rounded-2xl:hover h3 {
    transform: scale(1.02);
  }
}

/* Loading state shimmer effect */
.bg-gradient-to-r::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Enhanced focus states for accessibility */
.bg-white.rounded-2xl:focus-within {
  outline: 2px solid #30BCFE;
  outline-offset: 2px;
}
</style>