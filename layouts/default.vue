<script setup lang="ts">
import Navbar from "~/components/layout/navbar.vue";
import TheFooter from "~~/components/layout/TheFooter.vue";
definePageMeta({
  head: {
    script: [
      {
        src: 'https://analytics.ahrefs.com/analytics.js',
        'data-key': 'V0zZlhoarGMJAxDX81ncuA',
        async: true
      }
    ]
  }
})
</script>

<template>
  <div class="">
    <!-- <HeaderCTA /> -->
    <Navbar />
    <slot />
    <TheFooter />
  </div>
</template>