<template>
  <a 
    :href="href" 
    :target="target"
    :rel="computedRel"
  >
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})

// List of trusted domains that should not have nofollow
const trustedDomains = [
  'healthcare.gov',
  'medicare.gov',
  'irs.gov',
  'ssa.gov',
  // Add other trusted government/official sites
]

const computedRel = computed(() => {
  // Internal links don't need rel
  if (!props.href || props.href.startsWith('/') || props.href.startsWith('#')) {
    return undefined
  }
  
  // Check if it's a trusted domain
  const isTrusted = trustedDomains.some(domain => props.href.includes(domain))
  
  // For external links
  if (props.target === '_blank') {
    // Trusted domains: only noopener noreferrer for security
    if (isTrusted) {
      return 'noopener noreferrer'
    }
    // Untrusted domains: add nofollow
    return 'nofollow noopener noreferrer'
  }
  
  // Non-blank external links
  if (isTrusted) {
    return undefined // No rel attribute for trusted sites
  }
  
  return 'nofollow'
})
</script>
