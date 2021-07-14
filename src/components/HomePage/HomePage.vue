<template>
  <div class="divide-y divide-gray-50 dark:divide-gray-800">
    <base-section class="pt-12 sm:pt-16 bg-white dark:bg-dark-background py-10">
      <hero-section :svgColor="svgColor"></hero-section>
    </base-section>
    <div
      class="
        w-full
        bg-white
        dark:bg-dark-background
        flex flex-col
        items-center
        justify-center
        opacity-5
        hover:opacity-100
      "
    >
      <label for="">
        <input v-model="svgColor" type="color" />
        SVG Color
      </label>
    </div>

    <base-section class="bg-gray-50 dark:bg-dark-background-2 py-10">
      <our-vision :visionColor="visionColor"></our-vision>
    </base-section>
    <div
      class="
        w-full
        bg-white
        dark:bg-dark-background
        flex flex-col
        items-center
        justify-center
        opacity-5
        hover:opacity-100
      "
    >
      <label for="">
        <input v-model="visionColor" type="color" />
        Vision color
      </label>
    </div>

    <base-section class="bg-white dark:bg-dark-background py-10">
      <about-us
        id="aboutus"
        :buttonColor="buttonColor"
        :svgColor="svgColor"
      ></about-us>
    </base-section>

    <!-- <base-section class="bg-light-background dark:bg-dark-background">
    <hr class="border-0 bg-gray-300 w-9/12 mx-auto text-gray-500 h-px" />
  </base-section> -->

    <div
      class="
        w-full
        bg-white
        dark:bg-dark-background
        flex flex-col
        items-center
        justify-center
        opacity-5
        hover:opacity-100
      "
    >
      <label for="">
        <input v-model="buttonColor" type="color" />
        Button Color
      </label>
      <label for="">
        <input v-model="svgColor" type="color" />
        SVG Color
      </label>
    </div>

    <!-- Mobile projects section -->
    <base-section
      class="bg-gray-50 dark:bg-dark-background-2 py-10 block sm:hidden"
    >
      <mobile-projects></mobile-projects>
    </base-section>

    <!-- Desktop projects section -->
    <base-section
      class="bg-gray-50 dark:bg-dark-background-2 py-10 hidden sm:block"
    >
      <projects-carousel
        :buttonColor="buttonColor"
        :textColor="textColor"
      ></projects-carousel>
    </base-section>

    <div
      class="
        w-full
        flex flex-col
        items-center
        justify-center
        opacity-5
        hover:opacity-100
      "
    >
      <label for="">
        <input v-model="textColor" type="color" />
        Text Color
      </label>
    </div>

    <base-section class="bg-white dark:bg-dark-background py-10">
      <homepage-testimonials :textColor="textColor"></homepage-testimonials>
    </base-section>

    <base-section class="bg-gray-50 dark:bg-dark-background-2 py-10">
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
import ProjectsCarousel from "./ProjectsCarousel.vue";
import CollaboratorsSection from "./CollaboratorsSection.vue";
import MobileProjects from "./MobileProjects.vue";

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
    MobileProjects,
  },
  data() {
    return {
      buttonColor: "#000000",
      textColor: "#000000",
      svgColor: "#000000",
      visionColor: "#000000",
    };
  },
  computed: {
    outputColor() {
      return this.buttonColor;
    },
  },
};
</script>

<style scoped language="postcss"></style>
