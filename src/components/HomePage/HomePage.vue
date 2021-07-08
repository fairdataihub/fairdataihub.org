<template>
  <div class="divide-y divide-gray-50 dark:divide-gray-800">
    <base-section
      class="pt-12 sm:pt-16 bg-light-background dark:bg-dark-background py-10"
    >
      <hero-section></hero-section>
    </base-section>

    <base-section class="bg-light-background dark:bg-dark-background py-10">
      <our-vision></our-vision>
    </base-section>

    <base-section class="bg-light-background dark:bg-dark-background py-10">
      <about-us id="aboutus"></about-us>
    </base-section>

    <!-- <base-section class="bg-light-background dark:bg-dark-background">
    <hr class="border-0 bg-gray-300 w-9/12 mx-auto text-gray-500 h-px" />
  </base-section> -->

    <!-- <base-section class="bg-light-background dark:bg-dark-background">
    <projects-carousel></projects-carousel>
  </base-section> -->

    <base-section class="bg-light-background dark:bg-dark-background py-10">
      <our-projects></our-projects>
    </base-section>

    <!-- <base-section class="bg-light-background dark:bg-dark-background">
      <hr class="border-0 bg-gray-300 w-9/12 mx-auto text-gray-500 h-px" />
    </base-section> -->

    <base-section class="bg-light-background dark:bg-dark-background py-10">
      <homepage-testimonials></homepage-testimonials>
    </base-section>

    <!-- <base-section class="bg-light-background dark:bg-dark-background">
      <hr class="border-0 bg-gray-300 w-9/12 mx-auto text-gray-500 h-px" />
    </base-section> -->

    <base-section class="bg-light-background dark:bg-dark-background py-10">
      <collaborators-section></collaborators-section>
    </base-section>
  </div>
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
