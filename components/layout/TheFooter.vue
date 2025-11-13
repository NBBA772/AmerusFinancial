<template>
  <footer class="bg-gray-900 text-white pt-12 pb-6">
    <div class="container mx-auto px-4">
      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- About -->
        <div>
          <h3 class="text-xl font-bold mb-4">About Amerus</h3>
          <p class="text-white/70 mb-4">
            Amerus Financial Group is dedicated to providing comprehensive insurance
            solutions that protect what matters most to you.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-white/70 hover:text-white transition duration-300" aria-label="Facebook">
              <i class="lucide lucide-facebook h-5 w-5"></i>
            </a>
            <a href="#" class="text-white/70 hover:text-white transition duration-300" aria-label="Twitter">
              <i class="lucide lucide-twitter h-5 w-5"></i>
            </a>
            <a href="#" class="text-white/70 hover:text-white transition duration-300" aria-label="LinkedIn">
              <i class="lucide lucide-linkedin h-5 w-5"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-white/70 hover:text-white transition duration-300">Home</NuxtLink></li>
            <li><NuxtLink to="/about-us" class="text-white/70 hover:text-white transition duration-300">About Us</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-white/70 hover:text-white transition duration-300">Services</NuxtLink></li>
            <li><NuxtLink to="/resources" class="text-white/70 hover:text-white transition duration-300">Resources</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-white/70 hover:text-white transition duration-300">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-xl font-bold mb-4">Services</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/services/health/individual-health" class="text-white/70 hover:text-white transition duration-300">Health Insurance</NuxtLink></li>
            <li><NuxtLink to="/services/life/life-insurance" class="text-white/70 hover:text-white transition duration-300">Life Insurance</NuxtLink></li>
            <li><NuxtLink to="/services/retirement/iras" class="text-white/70 hover:text-white transition duration-300">Retirement Planning</NuxtLink></li>
            <li><NuxtLink to="/services/auto" class="text-white/70 hover:text-white transition duration-300">Auto Insurance</NuxtLink></li>
            <li><NuxtLink to="/services/home/property-protection" class="text-white/70 hover:text-white transition duration-300">Home Insurance</NuxtLink></li>
            <li><NuxtLink to="/services/business/general-liability" class="text-white/70 hover:text-white transition duration-300">Business Insurance</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-xl font-bold mb-4">Contact Us</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="lucide lucide-map-pin h-5 w-5 mr-3 mt-0.5 text-[#ff7733]"></i>
              <span class="text-white/70">
                3308 Cleveland Heights Blvd<br />Lakeland, FL 33803
              </span>
            </li>
            <li class="flex items-center">
              <i class="lucide lucide-phone h-5 w-5 mr-3 text-[#ff7733]"></i>
              <a href="tel:+18884417891" class="text-white/70 hover:text-white transition duration-300">
                (888) 441-7891
              </a>
            </li>
            <li class="flex items-center">
              <i class="lucide lucide-mail h-5 w-5 mr-3 text-[#ff7733]"></i>
              <a href="mailto:support@amerusfinancial.com" class="text-white/70 hover:text-white transition duration-300">
                support@amerusfinancial.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-white/20 pt-6 mt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 Amerus Financial Group. All Rights Reserved.
          </p>
          <div class="flex space-x-4 text-sm text-white/50">
            <NuxtLink to="/privacy-policy" class="hover:text-white transition duration-300">Privacy Policy</NuxtLink>
            <!-- <NuxtLink to="/terms-of-service" class="hover:text-white transition duration-300">Terms of Service</NuxtLink> -->
            <NuxtLink to="/sitemap.xml" class="hover:text-white transition duration-300">Sitemap</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// using NuxtLink instead of <a> for internal navigation
</script>
