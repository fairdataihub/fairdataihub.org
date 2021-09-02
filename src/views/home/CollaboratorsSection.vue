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
        Where do our tools make a difference?
      </p>
    </div>
    <div class="block">
      <CollaboratorsVue3Carousel></CollaboratorsVue3Carousel>
    </div>
    <!-- <div class="hidden">
      <CollaboratorsFlicking></CollaboratorsFlicking>
    </div> -->
  </div>
</template>

<script>
// import CollaboratorsFlicking from "./CollaboratorsFlicking.vue";
import CollaboratorsVue3Carousel from "./CollaboratorsVue3Carousel.vue";

export default {
  name: "CollaboratorsSection",
  components: {
    // CollaboratorsFlicking,
    CollaboratorsVue3Carousel,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="postcss" scoped></style>
