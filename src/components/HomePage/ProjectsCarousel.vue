<template>
  <div class="w-full max-w-screen-xl mx-auto h-auto pt-1 pb-3">
    <h1
      class="
        pt-6
        w-full
        font-sans font-black
        text-black
        dark:text-white
        text-4xl
        sm:text-3xl
        md:text-4xl
        lg:text-4xl
        subpixel-antialiased
        text-center
      "
    >
      Our Projects
    </h1>
    <!-- Slides container -->
    <vueper-slides
      :bullets="true"
      :arrows="true"
      autoplay
      :pause-on-hover="true"
      :touchable="false"
      :class="`no-shadow`"
      :fixed-height="`90vh`"
    >
      <vueper-slide>
        <template v-slot:content>
          <project-card
            :projectImage="`https://images.unsplash.com/photo-1625051050001-48164103ebf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80`"
            :actionButtons="sodaForSPARCData"
            :learnMoreLink="`/sodasparc`"
          >
            <template #title> SODA for SPARC </template>
            <template #description>
              SODA for SPARC is a desktop software intended to facilitate the
              data organization and submission process for SPARC investigators
              and thus promote the FAIR Data Principles. SODA for SPARC is
              designed such that users can accomplish all the requirements to
              submit a SPARC dataset rapidly through a single interface.
            </template>
            <template #subtitle> Download SODA </template>
          </project-card>
        </template>
      </vueper-slide>

      <vueper-slide>
        <template v-slot:content>
          <project-card
            :projectImage="`https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`"
            :actionButtons="sodaForSPARCData"
            :learnMoreLink="`/sodasparc`"
          >
            <template #title> SODA for SPARC 2 </template>
            <template #description>
              SODA for SPARC is a desktop software intended to facilitate the
              data organization and submission process for SPARC investigators
              and thus promote the FAIR Data Principles. SODA for SPARC is
              designed such that users can accomplish all the requirements to
              submit a SPARC dataset rapidly through a single interface.
            </template>
            <template #subtitle> Download SODA for COVID </template>
          </project-card>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ProjectsCarousel",
  components: {
    VueperSlides,
    VueperSlide,
    ProjectCard,
  },
  data() {
    return {
      sodaForSPARCData: [
        { name: "Windows Installer", href: "/sodasparc-windowsinstaller" },
        { name: "macOS Installer", href: "/sodasparc-macosinstaller" },
        { name: "Linux Installer", href: "/sodasparc-linuxinstaller" },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.vueperslides__bullet .default {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullets {
  margin-top: 20px;
  padding-top: 20px;
}

.vueperslides__bullet--active .default {
  background-color: #42b983;
}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}

.vueperslides__arrow {
  color: purple;
}
</style>
