<template>
  <div class="rounded-lg border bg-white text-gray-900 shadow-sm">
    <div class="p-6 md:p-8">
      <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
      <form
        action="https://formsubmit.co/rudolfgiessen@amerusfinancial.com"
        method="POST"
        class="space-y-6"
      >
        <input type="hidden" name="_subject" value="Contact Form Submission from Amerus Financial Website" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_autoresponse" value="Thank you for contacting Amerus Financial. A representative will reach out to you shortly." />
        <input type="hidden" name="_next" value="/thank-you" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium mb-1">Full Name</label>
            <input id="name" name="name" placeholder="Your name" required class="input-field" />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium mb-1">Email Address</label>
            <input id="email" name="email" type="email" placeholder="Your email" required class="input-field" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="phone" class="block text-sm font-medium mb-1">Phone Number (Optional)</label>
            <input id="phone" name="phone" placeholder="Your phone number" class="input-field" />
          </div>
          <div>
            <label for="subject" class="block text-sm font-medium mb-1">Subject</label>
            <input id="subject" name="subject" placeholder="Message subject" required class="input-field" />
          </div>
        </div>

        <div>
          <label for="message" class="block text-sm font-medium mb-1">Message</label>
          <textarea id="message" name="message" placeholder="How can we help you?" required class="input-field min-h-[120px] resize-y"></textarea>
        </div>

        <button
          type="submit"
          class="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors px-4 py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          <NuxtIcon name="lucide:send" class="h-4 w-4 mr-2" /> Send Message
        </button>
      </form>
    </div>
  </div>
  
</template>

<script setup lang="ts"></script>

<style scoped>
.input-field {
  @apply flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50;
}
</style>
