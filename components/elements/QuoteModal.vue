<template>
  <!-- Modal Overlay -->
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        @click.self="closeModal"
      >
        <!-- Modal Container -->
        <div
          class="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <Icon name="lucide:x" size="24" />
          </button>

          <!-- Modal Content - Using TwoColumnForm -->
          <div class="p-4 md:p-8">
            <TwoColumnForm
              :content="formContent"
              formPosition="right"
              :formTitle="title"
              :submitButtonText="submitButtonText"
              :showDivider="false"
              backgroundColor="bg-transparent"
              :showBackgroundPattern="false"
              :singleColumn="true"
              @form-submitted="handleFormSubmitted"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Request a Quote'
  },
  submitButtonText: {
    type: String,
    default: 'Get My Quote'
  },
  contentTitle: {
    type: String,
    default: '📞 Request <strong>Your Free Retirement</strong> Annuity Review'
  },
  contentBullets: {
    type: Array as () => string[],
    default: () => [
      'No-obligation consultation',
      'Compare multiple top-rated carriers',
      'Expert guidance from licensed advisors',
      'Get your personalized quote in 24 hours'
    ]
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const formContent = computed(() => ({
  title: props.contentTitle,
  bullets: props.contentBullets
}))

const handleFormSubmitted = () => {
  // Close modal after successful form submission
  setTimeout(() => {
    closeModal()
  }, 3000)
}

// Prevent body scroll when modal is open
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95);
}
</style>
