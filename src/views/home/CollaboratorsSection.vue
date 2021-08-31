<template>
  <div class="container px-6 pt-4 pb-0 md:p-10 max-w-screen-lg mx-auto">
    <div class="flex flex-col items-center mb-4 w-full">
      <p
        class="
          my-2
          font-inter font-extrabold
          tracking-tight
          dark:text-gray-50
          text-4xl
          sm:text-4xl
          text-center
        "
      >
        Collaborators
      </p>
      <p class="w-full font-asap text-xl dark:text-gray-50 text-center">
        Some of the amazing organizations and institutions where our products
        make a difference
      </p>
    </div>
    <div class="block">
      <collaborators-logos-carousel></collaborators-logos-carousel>
    </div>
    <div class="hidden">
      <collaborators-logos></collaborators-logos>
    </div>
  </div>
</template>

<script>
import CollaboratorsLogos from "./CollaboratorsLogos.vue";
import CollaboratorsLogosCarousel from "./CollaboratorsLogosCarousel.vue";

export default {
  name: "CollaboratorsSection",
  components: {
    CollaboratorsLogos,
    CollaboratorsLogosCarousel,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="postcss" scoped></style>
