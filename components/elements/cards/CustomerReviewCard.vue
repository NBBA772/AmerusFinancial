<template>
  <div class="flex flex-col max-w-sm mx-4 my-6 bg-gray-50 shadow-lg h-full">
    <!-- Testimonial -->
    <div class="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50 dark:bg-gray-900">
      <p class="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
        <!-- Quote Icon Left -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
          class="w-8 h-8 text-blue-400 dark:text-amber-400"
        >
          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"/>
          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"/>
        </svg>

        {{ review.testimonial }}

        <!-- Quote Icon Right -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
          class="absolute right-0 w-8 h-8 text-blue-400 dark:text-amber-400"
        >
          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"/>
          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"/>
        </svg>
      </p>
    </div>

    <!-- Reviewer Info (pushed to bottom) -->
    <div
      class="flex flex-col items-center justify-center p-8 rounded-b-lg text-gray-100 bg-[#30BCFE] mt-auto"
    >
      <!-- <img
        :src="`https://source.unsplash.com/100x100/?portrait&${review.id}`"
        alt="Reviewer portrait"
        class="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
      /> -->
      <p class="text-xl font-semibold leading-tight">{{ review.name }}</p>
      <p class="text-sm uppercase">{{ review.company }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerReviewCard",
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>
