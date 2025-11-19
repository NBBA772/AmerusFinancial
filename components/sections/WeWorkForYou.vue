<!-- File: components/sections/HomePage/CallToAction.vue -->
<template>
  <section class="py-16 bg-[#F2F8FB] text-[#3A3E46]">
    <div class="container mx-auto px-4 text-center">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        We Work for You, Not the Insurance Company
      </h2>

      <!-- Subtitle -->
      <p class="text-[#3A3E46] max-w-2xl mx-auto mb-8 text-lg">
        As an independent agency, Amerus Financial Group partners with multiple carriers to find the right coverage at the right price. Our mission is simple — empower small businesses with the same leverage and quality coverage enjoyed by large employers.
      </p>

        <!-- Insurance Provider Logos Row -->
        <div class="w-full mt-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/AmerusLogo.png"
                        alt="Amerus Financial"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/AetnaLogo.png"
                        alt="Aetna"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/UnitedHealthcareLogo.png"
                        alt="UnitedHealthcare"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/ManhattanLifeLogo.png"
                        alt="Manhattan Life"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/HumanaLogo.png"
                        alt="Humana"
                        class="h-12 w-auto object-contain"
                    />
                    <NuxtImg
                        format="webp"
                        quality="80"
                        loading="lazy"
                        src="/images/UnitedCondoriaLogo.png"
                        alt="United Condoria"
                        class="h-12 w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static CTA component, can later accept props for reuse
</script>
