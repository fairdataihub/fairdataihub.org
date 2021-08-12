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
        class="w-full max-w-2xl text-xl font-asap dark:text-gray-50 text-center"
      >
        These are the projects we are working on at the moment.
      </p>
    </div>
    <!-- Slides container -->
    <vueper-slides
      :bullets="true"
      :arrows="true"
      :touchable="false"
      autoplay
      :pause-on-hover="true"
      :class="`no-shadow`"
      :fixed-height="getCarouselHeight"
    >
      <vueper-slide v-for="project in projectsList" :key="project.name">
        <template v-slot:content>
          <section
            class="
              flex flex-col
              text-gray-600
              w-full
              h-full
              body-font
              px-5
              py-5
              flex
              justify-center
            "
          >
            <div
              class="
                container
                mx-auto
                flex
                w-4/5
                sm:mb-5
                flex-col-reverse
                items-center
              "
            >
              <!-- text div -->
              <div
                class="
                  flex flex-col
                  my-4
                  sm:mb-16
                  md:mb-0
                  items-center
                  text-center
                "
              >
                <!-- <h3
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
                  </h3> -->

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
                  {{ project.description }}
                </p>

                <div class="w-full flex justify-center py-4">
                  <router-link :to="project.page">
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
                        bg-black
                        dark:bg-pink-600
                        text-white
                        ring-2 ring-offset-2 ring-transparent
                        dark:ring-offset-transparent
                        hover:ring-pink-600
                        dark:hover:ring-offset-1 dark:hover:ring-white
                        focus:ring-pink-600
                      "
                    >
                      Learn more about {{ project.name }}
                    </button>
                  </router-link>
                </div>
              </div>
              <!-- image div -->
              <div
                class="
                  lg:max-w-lg
                  my-5
                  sm:py-0
                  flex flex-row
                  justify-center
                  items-center
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
                    sm:w-60
                    md:w-72
                    lg:w-80
                  "
                  alt="SODA for SPARC logo"
                  :src="project.imageUrl"
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

export default {
  name: "ProjectsCarousel",
  components: {
    VueperSlides,
    VueperSlide,
  },
  props: ["projectsList"],
  data() {
    return {};
  },
  computed: {
    getCarouselHeight: function () {
      const windowHeight = window.innerHeight;
      if (windowHeight > 850) {
        return `53vh`;
      } else if (windowHeight < 650) {
        return `80vh`;
      } else if (windowHeight < 750) {
        return `75vh`;
      } else if (windowHeight < 850) {
        return `70vh`;
      }
      return `55vh`;
    },
  },
  mounted() {},
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
  @apply bg-light-accent opacity-100 h-1.5 !important;
}

.vueperslides__arrow {
  @apply text-accent opacity-30 hover:opacity-100 transition-all;
}
</style>
