<template>
  <div class="divide-y divide-white bg-white">
    <Html>
      <Head>
        <Link
          rel="canonical"
          :href="`https://fairdataihub.org${$route.path}`"
        />
        <Title>Fair Data Innovations Hub</Title>
      </Head>
    </Html>

    <div
      data-aos="fade-in"
      class="bg-haikeiWavy bg-cover 2xl:bg-contain bg-no-repeat bg-top md:bg-right-top"
    >
      <base-section class="pt-12 sm:pt-16 mb-10" data-aos="fade-in">
        <hero-section></hero-section>
      </base-section>

      <base-section data-aos="fade-in" class="py-10">
        <our-vision></our-vision>
      </base-section>
    </div>

    <base-section class="bg-gray-50 py-10">
      <AboutUs></AboutUs>
    </base-section>

    <base-section data-aos="fade-in" class="bg-white py-10 hidden sm:block">
      <ProjectsCarousel :projectsList="projectsList"></ProjectsCarousel>
    </base-section>

    <!-- Mobile projects section -->
    <base-section data-aos="fade-in" class="bg-white py-10 block sm:hidden">
      <MobileProjects :projectsList="projectsList"></MobileProjects>
    </base-section>

    <base-section data-aos="fade-in" class="bg-white py-10">
      <CollaboratorsSection></CollaboratorsSection>
    </base-section>
  </div>
</template>

<script lang="js">
import HeroSection from "~~/components/home/HeroSection.vue";
import BaseSection from "~~/components/Base/BaseSection.vue";
import OurVision from "~~/components/home/OurVision.vue";
import AboutUs from "~~/components/home/AboutUs.vue";
import MobileProjects from "~~/components/home/MobileProjects.vue";
import ProjectsCarousel from "~~/components/home/ProjectsCarousel.vue";
import CollaboratorsSection from "~~/components/home/CollaboratorsSection.vue";
// import HomepageTestimonials from "./HomepageTestimonials.vue";

export default {
  layout: "default",
  scrollToTop: true,
  components: {
    HeroSection,
    BaseSection,
    OurVision,
    AboutUs,
    MobileProjects,
    ProjectsCarousel,
    CollaboratorsSection,
  },
  data() {
    return {
      projectsList: [
        {
          name: "SODA for SPARC",
          imageUrl:
            "https://ucarecdn.com/2a8dc700-311d-4bb2-b0d3-8022970754d8/",
          description:
            "SODA (Software to Organize Data Automatically) for SPARC is a desktop software intended to facilitate the data organization and submission process for SPARC investigators according to the FAIR SPARC data standards.",
          page: "/sodaforsparc",
        },
        {
          name: "KnowMore",
          imageUrl:
            "https://ucarecdn.com/6b133fb6-b68b-413c-89a5-54a31a65c66c/",
          description:
            "KnowMore is an automated knowledge discovery tool that allows users of the portal to visualize, in just a few clicks, potential similarities, differences, and connections between multiple SPARC datasets of their choice.",
          page: "/knowmore",
        },
        {
          name: "SPARClink",
          imageUrl:
            "https://ucarecdn.com/3ba27e90-3ab4-418f-aa07-05c4ba2c2f55/",
          description:
            "SPARClink is a system that queries publications using open source tools and platforms and create an interactable visualization that showcases the impact that SPARC and their FAIR data practices have in advancing the field of bioelectronic medicine.",
          page: "/sparclink",
        },
        {
          name: "AQUA",
          imageUrl:
            "https://ucarecdn.com/945e1e40-b0e1-40c5-a59d-bc89296cddeb/",
          description:
            "AQUA (Advanced QUery Architecture for the SPARC Portal) improves the SPARC Portal by making the search engine smarter at understanding user search keywords, enhancing the result display, and providing users with better result filtering and sorting options.",
          page: "/aqua",
        },
        {
          name: "SODA for COVID-19 Research",
          imageUrl: "https://i.ibb.co/92qvsnC/imageonline-co-textimage-1.png",
          description:
            "SODA (Sofware to Organize Data Automatically) for COVID-19 Research is a cross-platform desktop software that allows researchers to easily organize and share their COVID-19 related research data according to applicable FAIR guidelines.",
          page: "/sodaforcovid",
        },
      ],
    };
  },
  watch: {},
  methods: {},
  mounted() {
    window.scrollTo(0, 0)
  },
};
</script>

<style scoped language="postcss"></style>
