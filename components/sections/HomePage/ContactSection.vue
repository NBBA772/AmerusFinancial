<!-- components/ContactSection.vue -->
<template>
  <SectionContainer class="relative py-16 text-center overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0">
      <img
        src="/images/Group-Health-Insurance-Excerpt.jpg"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black opacity-70"></div>
    </div>

    <!-- Foreground content -->
    <div class="relative container mx-auto px-4">
      <GridTwoColumns>
        <!-- Left Side -->
        <div class="text-left">
          <h2 id="contact-h2" class="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Amerus Financial Group
          </h2>
          <p class="text-gray-200 mb-6 text-lg">
            Call, visit, or send a message—our team is here to help.
          </p>
          <ul class="space-y-4 text-gray-100" aria-label="Contact info">
            <li class="flex items-center gap-2">
              <Icon name="mdi:phone" class="w-7 h-7 text-[#30BCFE]" />
              <span>
                <strong>Phone:</strong>
                <a href="tel:+18884417891" class="text-[#30BCFE] hover:underline">(888) 441-7891</a>
              </span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="mdi:map-marker" class="w-7 h-7 text-[#30BCFE] mt-1" />
              <span>
                <strong>Address:</strong>
                3308 Cleveland Heights Blvd STE 102, Lakeland, FL 33803
              </span>
            </li>
            <li class="flex items-center gap-2">
              <Icon name="mdi:clock-outline" class="w-7 h-7 text-[#30BCFE]" />
              <span>
                <strong>Hours:</strong>
                Mon–Fri 9:00am–5:00pm (ET)
              </span>
            </li>
            <li class="flex items-center gap-2">
              <Icon name="mdi:email" class="w-7 h-7 text-[#30BCFE]" />
              <span>
                <strong>Email:</strong>
                <a href="mailto:info@amerusfinancial.com" class="text-[#30BCFE] hover:underline">
                  info@amerusfinancial.com
                </a>
              </span>
            </li>
          </ul>
        </div>

        <!-- Right Side (Form) -->
        <div class="bg-white shadow-lg rounded-xl p-8 relative z-10">
          <h3 class="text-xl font-semibold mb-6 text-gray-900">Send a Message</h3>
          <form action="/contact" method="post" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#30BCFE] focus:border-[#30BCFE] focus:outline-none"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#30BCFE] focus:border-[#30BCFE] focus:outline-none"
              />
            </div>
            <div>
              <label for="aud" class="block text-sm font-medium text-gray-700">I’m a(n)</label>
              <select
                id="aud"
                name="aud"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#30BCFE] focus:border-[#30BCFE] focus:outline-none"
              >
                <option value="employer">Employer</option>
                <option value="family">Individual / Family</option>
                <option value="senior">Senior / Medicare</option>
              </select>
            </div>
            <div>
              <label for="msg" class="block text-sm font-medium text-gray-700">How can we help?</label>
              <textarea
                id="msg"
                name="message"
                rows="4"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#30BCFE] focus:border-[#30BCFE] focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-[#30BCFE] hover:bg-[#30BCFE]/90 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </GridTwoColumns>
    </div>
  </SectionContainer>
</template>
