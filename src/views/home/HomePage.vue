<template>
  <div>
    <div class="divide-y divide-white bg-white dark:divide-gray-800">
      <div
        class="
          bg-haikeiWavy bg-cover
          2xl:bg-contain
          bg-no-repeat bg-top
          md:bg-right-top
        "
      >
        <base-section class="pt-12 sm:pt-16 dark:bg-dark-background mb-10">
          <hero-section></hero-section>
        </base-section>

        <base-section data-aos="fade-in" class="dark:bg-dark-background py-10">
          <our-vision></our-vision>
        </base-section>
      </div>

      <base-section class="bg-gray-50 dark:bg-dark-background py-10">
        <about-us id="aboutus"></about-us>
      </base-section>

      <!-- Mobile projects section -->
      <base-section
        data-aos="fade-in"
        class="bg-white dark:bg-dark-background-2 py-10 block sm:hidden"
      >
        <mobile-projects :projectsList="projectsList"></mobile-projects>
      </base-section>

      <!-- Desktop projects section -->
      <base-section
        data-aos="fade-in"
        class="bg-white dark:bg-dark-background-2 py-10 hidden sm:block"
      >
        <projects-carousel :projectsList="projectsList"></projects-carousel>
      </base-section>

      <base-section
        data-aos="fade-in"
        class="bg-gray-50 dark:bg-dark-background py-10"
      >
        <collaborators-section></collaborators-section>
      </base-section>

      <!-- <base-section class="bg-white dark:bg-dark-background-2 py-10">
        <homepage-testimonials></homepage-testimonials>
      </base-section> -->
    </div>
  </div>
</template>

<script>
import HeroSection from "./HeroSection.vue";
import OurVision from "./OurVision.vue";
import AboutUs from "./AboutUs.vue";
// import HomepageTestimonials from "./HomepageTestimonials.vue";
import ProjectsCarousel from "./ProjectsCarousel.vue";
import CollaboratorsSection from "./CollaboratorsSection.vue";
import MobileProjects from "./MobileProjects.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    OurVision,
    AboutUs,
    // HomepageTestimonials,
    ProjectsCarousel,
    CollaboratorsSection,
    MobileProjects,
  },
  data() {
    return {
      projectsList: [
        {
          name: "SODA for SPARC",
          imageUrl:
            "https://raw.githubusercontent.com/bvhpatel/SODA/6c9c10c398e8845c57279969f9b9fe25e1c21887/src/assets/logo-svg/Logo-soda-with-circle.svg",
          description:
            "SODA (Software to Organize Data Automatically) for SPARC is a desktop software intended to facilitate the data organization and submission process for SPARC investigators and thus promote the FAIR Data Principles.",
          page: "/sodasparc",
        },
        {
          name: "KnowMore",
          imageUrl:
            "https://github.com/SPARC-FAIR-Codeathon/KnowMore/raw/main/docs/kmlogo-with-text3.png",
          description:
            "KnowMore is an automated knowledge discovery tool integrated within the SPARC Portal that allows users of the portal to visualize, in just a few clicks, potential similarities, differences, and connections between multiple SPARC datasets of their choice.",
          page: "/knowmore",
        },
        {
          name: "SPARClink",
          imageUrl:
            "https://github.com/SPARC-FAIR-Codeathon/SPARClink/raw/main/docs/images/logo.svg",
          description:
            "SPARClink is a system that queries publications using open source tools and platforms and create an interactable visualization that showcases the impact that SPARC and FAIR data generation practices have in advancing the field of bioelectronic medicine.",
          page: "/sparclink",
        },
        {
          name: "AQUA",
          imageUrl:
            "https://github.com/SPARC-FAIR-Codeathon/aqua/raw/main/src/assets/images/logo_aqua-1.jpg",
          description:
            "AQUA (Advanced QUery Architecture for the SPARC Portal) improves the SPARC Portal by making the search engine smarter at understanding user search keywords, enhancing the result display  the SPARC Portal, and providing users with better result filtering and sorting options.",
          page: "/aqua",
        },
      ],
    };
  },
  watch: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped language="postcss"></style>
