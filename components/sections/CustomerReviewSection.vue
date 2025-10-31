<template>
  <BasicSection class="dark:bg-gray-800 dark:text-gray-100 my-16">
    <!-- Heading -->
    <div class="container flex flex-col items-center mx-auto mb-12 p-4 sm:p-8 md:p-10 md:px-12">
      <HeadlineTwo>
        {{ IntroText.Heading }}
      </HeadlineTwo>
    </div>

    <!-- Responsive wrapper for cards -->
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <CustomerReviewCard
        v-for="review in reviews"
        :key="review.id"
        :review="review"
      />
    </div>
  </BasicSection>
</template>

<script>

export default {
  name: "CustomerReviewSection",
  data() {
    return {
      IntroText: {
        Heading: "Read trusted reviews from our customers",
      },
      reviews: [
        {
          id: 1,
          name: "Person 1",
          company: "Company 1",
          testimonial:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
        },
        {
          id: 2,
          name: "Person 2",
          company: "Company 2",
          testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          name: "Person 3",
          company: "Company 3",
          testimonial:
            "Nunc eget lorem dolor sed. Id aliquet lectus proin nibh nisl condimentum id. Amet massa vitae tortor condimentum lacinia quis .",
        },
      ],
    };
  },
};
</script>
