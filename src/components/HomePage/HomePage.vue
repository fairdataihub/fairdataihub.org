<template>
  <base-section class="pt-12 sm:pt-16 dark:bg-gray-700">
    <hero-section></hero-section>
  </base-section>

  <base-section class="dark:bg-gray-800">
    <our-vision></our-vision>
  </base-section>

  <base-section class="dark:bg-gray-700 pb-6">
    <about-us></about-us>
  </base-section>

  <base-section class="dark:bg-gray-800">
    <hr class="border-0 bg-gray-300 w-9/12 mx-auto text-gray-500 h-px" />
  </base-section>

  <base-section class="dark:bg-gray-800">
    <projects-carousel></projects-carousel>
  </base-section>

  <base-section class="dark:bg-gray-800">
    <hr class="border-0 bg-gray-300 w-9/12 mx-auto text-gray-500 h-px" />
  </base-section>

  <base-section class="dark:bg-gray-700">
    <collaborators-section></collaborators-section>
  </base-section>

  <base-section class="dark:bg-gray-800">
    <hr class="border-0 bg-gray-300 w-9/12 mx-auto text-gray-500 h-px" />
  </base-section>

  <base-section class="dark:bg-gray-800">
    <homepage-testimonials></homepage-testimonials>
  </base-section>
  <!-- Add a used by which orgs components -->
  <!-- Add a pull from google tags component -->
</template>

<script>
import BaseSection from "../UI/BaseSection.vue";
import HeroSection from "./HeroSection.vue";
import OurVision from "./OurVision.vue";
import AboutUs from "./AboutUs.vue";
import HomepageTestimonials from "./HomepageTestimonials.vue";
import ProjectsCarousel from "./ProjectsCarousel.vue";
import CollaboratorsSection from "./CollaboratorsSection.vue";

export default {
  name: "HomePage",
  components: {
    BaseSection,
    HeroSection,
    OurVision,
    AboutUs,
    HomepageTestimonials,
    ProjectsCarousel,
    CollaboratorsSection,
  },
};
</script>

<style scoped language="postcss"></style>
