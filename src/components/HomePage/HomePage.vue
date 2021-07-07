<template>
  <base-section class="pt-12 sm:pt-16 dark:bg-gray-900">
    <hero-section></hero-section>
  </base-section>

  <base-section class="dark:bg-gray-900">
    <our-vision></our-vision>
  </base-section>

  <base-section class="dark:bg-gray-900 pb-1 lg:pb-6">
    <about-us id="aboutus"></about-us>
  </base-section>

  <!-- <base-section class="dark:bg-gray-900">
    <hr class="border-0 bg-gray-300 w-9/12 mx-auto text-gray-500 h-px" />
  </base-section> -->

  <!-- <base-section class="dark:bg-gray-900">
    <projects-carousel></projects-carousel>
  </base-section> -->

  <base-section class="dark:bg-gray-900">
    <our-projects></our-projects>
  </base-section>

  <base-section class="dark:bg-gray-900">
    <hr class="border-0 bg-gray-300 w-9/12 mx-auto text-gray-500 h-px" />
  </base-section>

  <base-section class="dark:bg-gray-900">
    <homepage-testimonials></homepage-testimonials>
  </base-section>

  <base-section class="dark:bg-gray-900">
    <hr class="border-0 bg-gray-300 w-9/12 mx-auto text-gray-500 h-px" />
  </base-section>

  <base-section class="dark:bg-gray-900">
    <collaborators-section></collaborators-section>
  </base-section>
  <!-- Add a pull from google tags component -->
</template>

<script>
import BaseSection from "../UI/BaseSection.vue";
import HeroSection from "./HeroSection.vue";
import OurVision from "./OurVision.vue";
import AboutUs from "./AboutUs.vue";
import HomepageTestimonials from "./HomepageTestimonials.vue";
// import ProjectsCarousel from "./ProjectsCarousel.vue";
import CollaboratorsSection from "./CollaboratorsSection.vue";
import OurProjects from "./OurProjects.vue";

export default {
  name: "HomePage",
  components: {
    BaseSection,
    HeroSection,
    OurVision,
    AboutUs,
    HomepageTestimonials,
    // ProjectsCarousel,
    CollaboratorsSection,
    OurProjects,
  },
};
</script>

<style scoped language="postcss"></style>
