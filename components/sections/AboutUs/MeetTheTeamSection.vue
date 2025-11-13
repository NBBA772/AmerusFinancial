<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 text-[#30BCFE] border-[#30BCFE]/30 bg-[#30BCFE]/10">
          Our Experts
        </div>
        <h2 class="text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Our team of experienced insurance professionals is dedicated to finding the right insurance solutions for you.
        </p>
      </div>

      <!-- Team Group Photo -->
      <div class="mx-auto mb-12">
        <div class="relative overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src="/images/Amerus-Group.jpg" 
            alt="Amerus Financial Team" 
            class="w-full h-auto object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#30BCFE]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 class="text-2xl font-bold mb-2">The Amerus Financial Team</h3>
              <p class="text-white/90 text-lg">Together, we bring decades of combined experience in the insurance industry</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Timothy Baggett -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-6">
            <div class="flex justify-center">
              <img 
                :src="getTeamMemberImage('Timothy Baggett')" 
                alt="Timothy Baggett"
                class="w-20 h-20 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>
          <div class="p-6 bg-gradient-to-br from-gray-50 to-white">
            <h3 class="text-xl font-bold text-gray-800 text-center mb-1">Timothy Baggett</h3>
            <p class="text-[#30BCFE] font-medium mb-3 text-center text-blue-role">CEO & Founder</p>
            <p class="text-gray-600 mb-4 text-center leading-relaxed">
              With over 20 years of experience in the insurance industry, Tim founded Amerus Financial Group with a vision to provide personalized insurance solutions for families and businesses.
            </p>
            <div class="flex flex-wrap gap-2 justify-center">
              <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-[#30BCFE]/30 bg-[#30BCFE]/10 text-[#30BCFE]">
                Life Insurance
              </div>
              <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-[#30BCFE]/30 bg-[#30BCFE]/10 text-[#30BCFE]">
                Business Planning
              </div>
            </div>
          </div>
        </div>

        <!-- Amanda Baggett -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-6">
            <div class="flex justify-center">
              <img 
                :src="getTeamMemberImage('Amanda Baggett')" 
                alt="Amanda Baggett"
                class="w-20 h-20 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>
          <div class="p-6 bg-gradient-to-br from-gray-50 to-white">
            <h3 class="text-xl font-bold text-gray-800 text-center mb-1">Amanda Baggett</h3>
            <p class="text-[#30BCFE] font-medium mb-3 text-center text-blue-role">CFO & HR</p>
            <p class="text-gray-600 mb-4 text-center leading-relaxed">
              As Chief Financial Officer and HR lead, Amanda brings precision and care to operations while specializing in Dental Insurance.
            </p>
            <div class="flex flex-wrap gap-2 justify-center">
              <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-[#30BCFE]/30 bg-[#30BCFE]/10 text-[#30BCFE]">
                Dental Insurance
              </div>
            </div>
          </div>
        </div>

        <!-- Leah Dugger -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div class="bg-gradient-to-r from-[#30BCFE] to-[#2563eb] py-6 px-6">
            <div class="flex justify-center">
              <img 
                :src="getTeamMemberImage('Leah Dugger')" 
                alt="Leah Dugger"
                class="w-20 h-20 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>
          <div class="p-6 bg-gradient-to-br from-gray-50 to-white">
            <h3 class="text-xl font-bold text-gray-800 text-center mb-1">Leah Dugger</h3>
            <p class="text-[#30BCFE] font-medium mb-3 text-center text-blue-role">Customer Relationship Manager</p>
            <p class="text-gray-600 mb-4 text-center leading-relaxed">
              Leah excels at delivering outstanding customer service, helping clients navigate ACA plans, and ensuring businesses find insurance solutions tailored to their unique needs.
            </p>
            <div class="flex flex-wrap gap-2 justify-center">
              <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-[#30BCFE]/30 bg-[#30BCFE]/10 text-[#30BCFE]">
                ACA
              </div>
              <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-[#30BCFE]/30 bg-[#30BCFE]/10 text-[#30BCFE]">
                Customer Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup lang="ts">
// Team member image mapping
const teamImages = {
  'Timothy Baggett': '/images/Tim.jpg',
  'Amanda Baggett': '/images/abigail.jpg', // Mapping Amanda to existing abigail.jpg
  'Leah Dugger': '/images/leah.jpg'
}

// Default image for team members without specific photos
const defaultImage = '/images/default-avatar.jpg'

// Function to get team member image or default
const getTeamMemberImage = (name: string) => {
  return teamImages[name as keyof typeof teamImages] || defaultImage
}
</script>

<style scoped>
/* Card hover effects matching the form styling */
.bg-white.rounded-2xl {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-white.rounded-2xl:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Image hover effects */
img {
  transition: all 0.3s ease-in-out;
}

.bg-white.rounded-2xl:hover img {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.9);
}

/* Title animation on hover */
h3 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-white.rounded-2xl:hover h3 {
  color: #30BCFE;
  transform: scale(1.02);
}

/* Role title animation */
.text-blue-role {
  transition: all 0.3s ease-in-out;
}

.bg-white.rounded-2xl:hover .text-blue-role {
  transform: translateY(-1px);
}

/* Description animation */
p.text-gray-600 {
  transition: all 0.3s ease-in-out;
}

.bg-white.rounded-2xl:hover p.text-gray-600 {
  color: #374151;
  transform: translateY(-1px);
}

/* Badge hover effects */
.inline-flex {
  transition: all 0.3s ease-in-out;
}

.bg-white.rounded-2xl:hover .inline-flex {
  transform: scale(1.05);
  background-color: rgba(48, 188, 254, 0.15);
  border-color: rgba(48, 188, 254, 0.5);
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