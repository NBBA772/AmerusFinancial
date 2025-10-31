<template>
  <section class="relative pt-24 pb-20">
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#30BCFE]/90 to-[#2563eb]/70 z-0"></div>
    
    <!-- Background Image -->
    <div 
      class="absolute inset-0 opacity-20 z-0 bg-cover bg-center" 
      style="background-image: url('https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');"
    ></div>
    
    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-white/20 text-white border-white/30 px-4 py-1">
          About Us
        </div>
        
        <!-- Main Title -->
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          We're Amerus Financial Group
        </h1>
        
        <!-- Subtitle -->
        <p class="text-xl text-white/90 mb-8">
          Your trusted partner in protecting what matters most since 2008.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// AboutPageHeroSection - Clean hero section for About Us page
</script>

<style scoped>
/* Hero section animations */
.relative {
  overflow: hidden;
}

/* Background image parallax effect */
.bg-cover {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Badge hover effects */
.inline-flex {
  transition: all 0.3s ease-in-out;
}

.inline-flex:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

/* Title animation */
h1 {
  animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

/* Subtitle animation */
p {
  animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
}

/* Badge animation */
.inline-flex {
  animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both;
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

/* Gradient overlay - static color */
.bg-gradient-to-r {
  background: linear-gradient(to right, rgba(48, 188, 254, 0.9), rgba(37, 99, 235, 0.7));
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .bg-cover {
    background-attachment: scroll;
  }
  
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.125rem;
  }
}

/* Text shadow for better readability */
h1, p {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Enhanced focus states */
.inline-flex:focus {
  outline: 2px solid rgba(255, 255, 255, 0.8);
  outline-offset: 2px;
}
</style>
