<template>
  <div>
    <div
      class="
        flex flex-col
        fixed
        right-5
        top-20
        items-end
        z-20
        opacity-5
        hover:opacity-100
      "
    >
      <div>
        <input
          v-model="selectedHue"
          type="number"
          class="w-12"
          min="0"
          max="360"
        />
        hue
      </div>
      <div>
        <select v-model="selectedScheme">
          <option value="mono">mono</option>
          <option value="tetrade">tetrade</option>
        </select>
        scheme
      </div>
      <div v-show="selectedScheme === 'tetrade'">
        <input
          v-model="selectedDistance"
          type="number"
          class="w-12"
          min="0"
          max="100"
        />
        Distance
      </div>
      <div>
        <select v-model="selectedFilter">
          <option value="default">default</option>
          <option value="pastel">pastel</option>
          <option value="soft">soft</option>
          <option value="light">light</option>
          <option value="hard">hard</option>
          <option value="pale">pale</option>
        </select>
        filter
      </div>
      <div>
        <select v-model="selectedVariation">
          <option :value="n - 1" v-for="n in totalVariations" :key="n">
            {{ n }}
          </option>
        </select>
        variation
      </div>
    </div>

    <div class="divide-y divide-gray-50 dark:divide-gray-800">
      <base-section
        class="pt-12 sm:pt-16 bg-white dark:bg-dark-background py-10"
      >
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
        <mobile-projects
          :buttonColor="buttonColor"
          :projectsList="projectsList"
        ></mobile-projects>
      </base-section>

      <!-- Desktop projects section -->
      <base-section
        class="bg-gray-50 dark:bg-dark-background-2 py-10 hidden sm:block"
      >
        <projects-carousel
          :buttonColor="buttonColor"
          :textColor="textColor"
          :projectsList="projectsList"
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

const ColorScheme = require("color-scheme");

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
      buttonColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      textColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      svgColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      visionColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      selectedScheme: "tetrade",
      selectedHue: "180",
      selectedFilter: "default",
      selectedDistance: 50,
      selectedVariation: 1,
      totalVariations: 4,
      multiple: 4,
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
            "AQUA (Advanced QUery Architecture for the SPARC Portal) is an application that improves the SPARC Portal by making the search engine smarter at reading and understanding user search keywords, enhancing the result display feature of the SPARC Portal, and providing users with better result filtering and sorting options.",
          page: "/aqua",
        },
      ],
    };
  },
  watch: {
    selectedScheme: function (newval) {
      if (newval == "mono") {
        this.multiple = 1;
        this.totalVariations = 1;
        this.selectedVariation = 0;
      }
      if (newval == "tetrade") {
        this.multiple = 4;
        this.totalVariations = 4;
        this.selectedVariation = 0;
      }
      this.changeColors();
    },
    selectedFilter: function () {
      this.changeColors();
    },
    selectedVariation: function () {
      this.changeColors();
    },
    selectedHue: function () {
      this.changeColors();
    },
    selectedDistance: function () {
      this.changeColors();
    },
  },
  methods: {
    changeColors: function () {
      let scheme = new ColorScheme();
      if (this.selectedScheme == "mono") {
        scheme
          .from_hue(this.selectedHue)
          .scheme(this.selectedScheme)
          .variation(this.selectedFilter);
      } else if (this.selectedScheme === "tetrade") {
        scheme
          .from_hue(this.selectedHue)
          .scheme(this.selectedScheme)
          .distance(this.selectedDistance / 100)
          .variation(this.selectedFilter);
      }
      let colors = scheme.colors();

      // console.log((0 * this.multiple) + this.selectedVariation, (1 * this.multiple) + this.selectedVariation, (2 * this.multiple) + this.selectedVariation, (3 * this.multiple) + this.selectedVariation);

      this.buttonColor = `#${
        colors[0 * this.multiple + this.selectedVariation]
      }`;
      this.textColor = `#${colors[1 * this.multiple + this.selectedVariation]}`;
      this.svgColor = `#${colors[2 * this.multiple + this.selectedVariation]}`;
      this.visionColor = `#${
        colors[3 * this.multiple + this.selectedVariation]
      }`;
    },
  },
  mounted() {
    let scheme = new ColorScheme();
    let rand = Math.floor(Math.random() * 359);
    this.selectedHue = rand;
    this.selectedDistance = Math.floor(Math.random() * 100);
    // console.log(rand)
    scheme.from_hue(rand).scheme("contrast").variation("pastel");
    let colors = scheme.colors();
    // console.log(colors);

    this.buttonColor = `#${colors[0]}`;
    this.textColor = `#${colors[2]}`;
    this.svgColor = `#${colors[4]}`;
    this.visionColor = `#${colors[6]}`;
  },
};
</script>

<style scoped language="postcss"></style>
