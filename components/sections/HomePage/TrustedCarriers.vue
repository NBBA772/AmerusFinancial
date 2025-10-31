
<template>
  <ColumnAnimated animationClass="fade-in">
    <section
      class="dark:bg-gray-950 py-8 border-t-2 border-b-2 border-gray-700"
    >
      <HeadlineTwo class="text-center"> Trusted Carrier Partners </HeadlineTwo>
      <ParagraphDescription class="text-center">
        A sample of the carriers we work with to bring you competitive coverage and pricing.
      </ParagraphDescription>

      <div ref="logosContainer" class="logos relative overflow-hidden py-10">
        <!-- Fade effect on both sides -->
        <div class="fade-overlay left"></div>
        <div class="fade-overlay right"></div>

        <div ref="logoList" class="logo-list flex">
          <!-- List of logos and duplicates -->
          <div
            v-for="(logo, index) in fullLogoList"
            :key="index"
            class="logo-item mx-4"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="h-12 sm:h-16 md:h-20 lg:h-12"
            />
          </div>
        </div>
      </div>
    </section>
  </ColumnAnimated>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";

// Original logos array
const logos = ref([
//   {
//     src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
//     alt: "HTML5",
//   },
//   {
//     src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
//     alt: "CSS3",
//   },
//   {
//     src: "/img/logos/javascript.png",
//     alt: "JavaScript",
//   },
  { src: "/images/logos/Allstate.png", alt: "Allstate" },
  { src: "/images/logos/Humana.png", alt: "Humana" },
  { src: "/images/logos/ml.png", alt: "ml" },
  { src: "/images/logos/mutual.png", alt: "mutual" },
  { src: "/images/logos/Travelers.png", alt: "Travelers" },
  { src: "/images/logos/UnitedHealthcare.png", alt: "UnitedHealthcare" },
]);

// Create a full list with 5 duplicates
const fullLogoList = ref([
  ...logos.value,
  ...logos.value,
  ...logos.value,
  ...logos.value,
  ...logos.value,
]);

const logosContainer = ref(null);
const logoList = ref(null);
let animationFrameId = null;
let scrollPosition = 0;
let logoListWidth = 0;

function startScrolling() {
  if (!logoList.value) return;

  logoListWidth = logoList.value.scrollWidth;

  function scroll() {
    scrollPosition -= 1;
    if (scrollPosition < -logoListWidth / 2) {
      scrollPosition = 0;
    }
    logoList.value.style.transform = `translateX(${scrollPosition}px)`;
    animationFrameId = requestAnimationFrame(scroll);
  }

  scroll();
}

function stopScrolling() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
}

onMounted(() => {
  if (logosContainer.value) {
    logoList.value = logosContainer.value.querySelector(".logo-list");
    startScrolling();
    logosContainer.value.addEventListener("mouseover", stopScrolling);
    logosContainer.value.addEventListener("mouseout", startScrolling);
  }
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  if (logosContainer.value) {
    logosContainer.value.removeEventListener("mouseover", stopScrolling);
    logosContainer.value.removeEventListener("mouseout", startScrolling);
  }
});
</script>

<style scoped>
.logos {
  position: relative;
  overflow: hidden;
}

.fade-overlay {
  position: absolute;
  top: 0;
  width: 80px;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.fade-overlay.left {
  left: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), transparent);
}

.fade-overlay.right {
  right: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.8), transparent);
}

.dark .fade-overlay.left {
  background: linear-gradient(to right, rgba(3, 7, 18, 0.8), transparent);
}

.dark .fade-overlay.right {
  background: linear-gradient(to left, rgba(3, 7, 18, 0.8), transparent);
}

.logo-list {
  display: flex;
  flex: 0 0 auto;
  white-space: nowrap;
  will-change: transform;
  transition: transform 0.5s linear;
}

.logo-item {
  flex: 0 0 auto;
}
</style>
