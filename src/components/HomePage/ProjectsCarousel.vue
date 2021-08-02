<template>
  <div class="w-full max-w-screen-lg mx-auto h-auto pt-1 pb-3">
    <div class="flex flex-col justify-center items-center mb-4">
      <h2
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
        Current Projects
      </h2>
      <p
        class="w-full max-w-2xl text-xl font-lato dark:text-gray-50 text-center"
      >
        These are the projects we are working on at the moment.
      </p>
    </div>
    <!-- Slides container -->
    <vueper-slides
      :bullets="true"
      :arrows="true"
      :touchable="false"
      autoplayy
      :pause-on-hover="true"
      :class="`no-shadow`"
      :fixed-height="`45vh`"
    >
      <!-- SODA for SPARC -->
      <vueper-slide>
        <template v-slot:content>
          <section
            class="text-gray-600 w-full h-full body-font px-5 flex items-center"
          >
            <div
              class="
                container
                mx-auto
                flex
                px-5
                sm:mb-5
                flex-col-reverse
                md:flex-row md:justify-evenly
                items-center
              "
            >
              <!-- text div -->
              <div
                class="
                  md:w-7/12
                  flex flex-col
                  my-1
                  sm:mb-16
                  md:mb-0
                  items-center
                  text-center
                "
              >
                <h3
                  class="
                    font-inter font-semibold
                    text-3xl
                    md:text-2xl
                    lg:text-3xl
                    w-full
                    mb-1
                    sm:mb-4
                    text-left
                    sm:text-center
                    dark:text-gray-50
                  "
                >
                  SODA for SPARC
                </h3>

                <p
                  class="
                    w-full
                    text-left
                    sm:text-center
                    text-base
                    md:text-base
                    lg:text-lg
                    font-asap
                    text-black
                    dark:text-white
                  "
                >
                  SODA (Software to Organize Data Automatically) for SPARC is a
                  desktop software intended to facilitate the data organization
                  and submission process for SPARC investigators and thus
                  promote the FAIR Data Principles.
                </p>
                <div class="flex mt-2 md:mt-1">
                  <router-link
                    to="/sodasparc"
                    class="inline-flex items-center text-lg sm:text-base"
                    :style="`color: ${textColor};`"
                  >
                    <span class="font-lato">
                      Learn more about SODA for SPARC
                    </span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </router-link>
                </div>
                <div class="w-full flex justify-center py-4">
                  <!-- <a
              href="https://github.com/bvhpatel/SODA#Downloading-soda"
              target="_blank"
            >
              <button
                class="
                  hidden
                  sm:inline-flex
                  text-white
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  bg-indigo-500
                  hover:bg-indigo-600
                  rounded
                  text-lg
                  transition
                "
              >
                Download now (github)
              </button>
            </a> -->
                  <router-link to="/sodasparc/docs/Download-soda">
                    <button
                      class="
                        hidden
                        sm:inline-flex
                        text-white
                        border-0
                        py-2
                        px-6
                        focus:outline-none
                        rounded
                        text-base
                        md:text-base
                        lg:text-lg
                        transition
                      "
                      :style="'background-color: ' + buttonColor + ';'"
                    >
                      Download now
                    </button>
                  </router-link>
                  <router-link to="/sodasparc">
                    <button
                      class="
                        hidden
                        sm:ml-4
                        inline-flex
                        text-white
                        border-0
                        py-2
                        px-6
                        focus:outline-none
                        rounded
                        text-lg
                        md:text-base
                        lg:text-lg
                        transition
                      "
                      :style="'background-color: ' + buttonColor + ';'"
                    >
                      Learn more about SODA for SPARC
                    </button>
                  </router-link>
                </div>
              </div>
              <!-- image div -->
              <div
                class="
                  lg:max-w-lg
                  md:w-3/12
                  w-5/6
                  py-4
                  my-2
                  sm:py-0
                  flex
                  justify-center
                "
              >
                <img
                  class="
                    object-cover object-center
                    rounded
                    sm:h-36
                    md:h-40
                    lg:h-auto
                    sm:w-36
                    md:w-40
                    lg:w-auto
                  "
                  alt="SODA for SPARC logo"
                  src="https://github.com/bvhpatel/SODA/raw/master/src/assets/img/logo-can1024-grey-circle.png"
                />
              </div>
            </div>
          </section>
        </template>
      </vueper-slide>

      <!-- KnowMore -->
      <vueper-slide>
        <template v-slot:content>
          <section
            class="text-gray-600 w-full h-full body-font px-5 flex items-center"
          >
            <div
              class="
                container
                mx-auto
                flex
                px-5
                sm:mb-5
                flex-col-reverse
                md:flex-row md:justify-evenly
                items-center
              "
            >
              <!-- text div -->
              <div
                class="
                  md:w-7/12
                  flex flex-col
                  my-1
                  sm:mb-16
                  md:mb-0
                  items-center
                  text-center
                "
              >
                <h3
                  class="
                    font-inter font-semibold
                    text-3xl
                    md:text-2xl
                    lg:text-3xl
                    w-full
                    mb-1
                    sm:mb-4
                    text-left
                    sm:text-center
                    dark:text-gray-50
                  "
                >
                  KnowMore
                </h3>

                <p
                  class="
                    w-full
                    text-left
                    sm:text-center
                    text-base
                    md:text-base
                    lg:text-lg
                    font-asap
                    text-black
                    dark:text-white
                  "
                >
                  KnowMore is an automated knowledge discovery tool integrated
                  within the SPARC Portal that allows users of the portal to
                  visualize, in just a few clicks, potential similarities,
                  differences, and connections between multiple SPARC datasets
                  of their choice.
                </p>

                <div class="w-full flex justify-center py-4">
                  <router-link to="/knowmore">
                    <button
                      class="
                        sm:ml-4
                        inline-flex
                        text-white
                        border-0
                        py-2
                        px-6
                        focus:outline-none
                        rounded
                        text-lg
                        md:text-base
                        lg:text-lg
                        transition
                      "
                      :style="'background-color: ' + buttonColor + ';'"
                    >
                      Learn more about KnowMore
                    </button>
                  </router-link>
                </div>
              </div>
              <!-- image div -->
              <div
                class="
                  lg:max-w-lg
                  md:w-3/12
                  w-5/6
                  py-4
                  my-2
                  sm:py-0
                  flex
                  justify-center
                "
              >
                <img
                  class="
                    object-cover object-center
                    rounded
                    sm:pt-20
                    md:pt-0
                    sm:h-full
                    md:h-auto
                    lg:h-auto
                    sm:w-full
                    md:w-40
                    lg:w-auto
                  "
                  alt="SODA for SPARC logo"
                  src="https://github.com/SPARC-FAIR-Codeathon/KnowMore/raw/main/docs/kmlogo-with-text3.png"
                />
              </div>
            </div>
          </section>
        </template>
      </vueper-slide>

      <!-- SPARClink -->
      <vueper-slide>
        <template v-slot:content>
          <section
            class="text-gray-600 w-full h-full body-font px-5 flex items-center"
          >
            <div
              class="
                container
                mx-auto
                flex
                px-5
                sm:mb-5
                flex-col-reverse
                md:flex-row md:justify-evenly
                items-center
              "
            >
              <!-- text div -->
              <div
                class="
                  md:w-7/12
                  flex flex-col
                  my-1
                  sm:mb-16
                  md:mb-0
                  items-center
                  text-center
                "
              >
                <h3
                  class="
                    font-inter font-semibold
                    text-3xl
                    md:text-2xl
                    lg:text-3xl
                    w-full
                    mb-1
                    sm:mb-4
                    text-left
                    sm:text-center
                    dark:text-gray-50
                  "
                >
                  SPARClink
                </h3>

                <p
                  class="
                    w-full
                    text-left
                    sm:text-center
                    text-base
                    md:text-base
                    lg:text-lg
                    font-asap
                    text-black
                    dark:text-white
                  "
                >
                  SPARClink is a system that queries publications using open
                  source tools and platforms and create an interactable
                  visualization that showcases the impact that SPARC and FAIR
                  data generation practices have in advancing the field of
                  bioelectronic medicine.
                </p>

                <div class="w-full flex justify-center py-4">
                  <router-link to="/knowmore">
                    <button
                      class="
                        sm:ml-4
                        inline-flex
                        text-white
                        border-0
                        py-2
                        px-6
                        focus:outline-none
                        rounded
                        text-lg
                        md:text-base
                        lg:text-lg
                        transition
                      "
                      :style="'background-color: ' + buttonColor + ';'"
                    >
                      Learn more about SPARClink
                    </button>
                  </router-link>
                </div>
              </div>
              <!-- image div -->
              <div
                class="
                  lg:max-w-lg
                  md:w-3/12
                  w-5/6
                  py-4
                  my-2
                  sm:py-0
                  flex
                  justify-center
                "
              >
                <img
                  class="
                    object-cover object-center
                    rounded
                    sm:pt-20
                    md:pt-0
                    sm:h-full
                    md:h-auto
                    lg:h-auto
                    sm:w-full
                    md:w-40
                    lg:w-auto
                  "
                  alt="SODA for SPARC logo"
                  src="https://github.com/SPARC-FAIR-Codeathon/SPARClink/raw/main/docs/images/logo.svg"
                />
              </div>
            </div>
          </section>
        </template>
      </vueper-slide>

      <!-- AQUA -->
      <vueper-slide>
        <template v-slot:content>
          <section
            class="text-gray-600 w-full h-full body-font px-5 flex items-center"
          >
            <div
              class="
                container
                mx-auto
                flex
                px-5
                sm:mb-5
                flex-col-reverse
                md:flex-row md:justify-evenly
                items-center
              "
            >
              <!-- text div -->
              <div
                class="
                  md:w-7/12
                  flex flex-col
                  my-1
                  sm:mb-16
                  md:mb-0
                  items-center
                  text-center
                "
              >
                <h3
                  class="
                    font-inter font-semibold
                    text-3xl
                    md:text-2xl
                    lg:text-3xl
                    w-full
                    mb-1
                    sm:mb-4
                    text-left
                    sm:text-center
                    dark:text-gray-50
                  "
                >
                  AQUA
                </h3>

                <p
                  class="
                    w-full
                    text-left
                    sm:text-center
                    text-base
                    md:text-base
                    lg:text-lg
                    font-asap
                    text-black
                    dark:text-white
                  "
                >
                  AQUA (Advanced QUery Architecture for the SPARC Portal) is an
                  application that improves the SPARC Portal by making the
                  search engine smarter at reading and understanding user search
                  keywords, enhancing the result display feature of the SPARC
                  Portal, and providing users with better result filtering and
                  sorting options.
                </p>

                <div class="w-full flex justify-center py-4">
                  <router-link to="/knowmore">
                    <button
                      class="
                        sm:ml-4
                        inline-flex
                        text-white
                        border-0
                        py-2
                        px-6
                        focus:outline-none
                        rounded
                        text-lg
                        md:text-base
                        lg:text-lg
                        transition
                      "
                      :style="'background-color: ' + buttonColor + ';'"
                    >
                      Learn more about AQUA
                    </button>
                  </router-link>
                </div>
              </div>
              <!-- image div -->
              <div
                class="
                  lg:max-w-lg
                  md:w-3/12
                  w-5/6
                  py-4
                  my-2
                  sm:py-0
                  flex
                  justify-center
                "
              >
                <img
                  class="
                    object-cover object-center
                    rounded
                    sm:pt-20
                    md:pt-0
                    sm:h-full
                    md:h-auto
                    lg:h-auto
                    sm:w-full
                    md:w-40
                    lg:w-auto
                  "
                  alt="SODA for SPARC logo"
                  src="https://github.com/SPARC-FAIR-Codeathon/aqua/raw/main/src/assets/images/logo_aqua-1.jpg"
                />
              </div>
            </div>
          </section>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
// import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ProjectsCarousel",
  components: {
    VueperSlides,
    VueperSlide,
    // ProjectCard,
  },
  props: ["buttonColor", "textColor"],
  data() {
    return {};
  },
};
</script>

<style language="postcss">
.vueperslides__bullet .default {
  @apply bg-gray-400 dark:bg-gray-300 border-0 shadow-none transition-all w-14 h-1 opacity-20 hover:opacity-70 my-4 mx-1;
}

.vueperslides__bullets {
  @apply mt-8 pt-8;
}

.vueperslides__bullet--active .default {
  @apply bg-green-400 opacity-50 hover:opacity-80 h-1.5 !important;
}

.vueperslides__arrow {
  @apply text-purple-600 dark:text-purple-400 opacity-10 hover:opacity-100 transition-all;
}
</style>
