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
        These are the projects we are working on at the moment:
      </p>
    </div>

    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
      :autoplay="7000"
      pause-autoplay-on-hover
    >
      <Slide v-for="project in projectsList" :key="project.name" class="py-10">
        <section
          class="
            text-gray-600
            w-4/5
            h-full
            body-font
            my-auto
            mx-10
            px-5
            py-10
            flex flex-row
            justify-center
            items-center
            rounded-lg
            shadow-xl
          "
        >
          <div
            class="
              container
              mx-auto
              flex flex-col-reverse
              justify-center
              items-center
              h-full
            "
          >
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
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
// import "@egjs/vue3-flicking/dist/flicking.css";
// import "@egjs/flicking-plugins/dist/flicking-plugins.css";
// import Flicking from "@egjs/vue3-flicking";

// import { AutoPlay, Pagination, Arrow } from "@egjs/flicking-plugins";

import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "ProjectsCarousel",
  components: {
    // Flicking,
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  props: ["projectsList"],
  data() {
    return {
      plugins: [
        // new AutoPlay({
        //   duration: 200000,
        //   direction: "NEXT",
        //   stopOnHover: true,
        // }),
        // new Pagination({ type: "scroll" }),
        // new Arrow(),
      ],
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {},
    };
  },
  computed: {},
  mounted() {},
};
</script>

<style language="postcss">
.carousel__next,
.carousel__prev {
  @apply bg-light-accent hover:bg-pink-400 transition-all;
}

.carousel__pagination-button {
  @apply bg-pink-200 w-10 rounded hover:bg-pink-400 transition-all;
}

.carousel__pagination-button.carousel__pagination-button--active {
  @apply bg-light-accent;
}
</style>
