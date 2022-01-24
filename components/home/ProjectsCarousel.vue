<template>
  <div class="mx-auto h-auto w-full max-w-screen-lg px-4 pt-1 pb-3">
    <div class="mb-4 flex flex-col items-center justify-center">
      <h2
        class="my-2 text-center text-4xl font-extrabold tracking-tight sm:text-4xl"
      >
        Current Projects
      </h2>
      <p class="font-asap w-full max-w-2xl text-center text-xl">
        These are the projects we are working on at the moment:
      </p>
    </div>

    <swiper
      :modules="modules"
      :slides-per-view="1"
      navigation
      :setWrapperSize="true"
      :grabCursor="true"
      :loop="true"
      :autoplay="{
        delay: 6000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :thumbs="{ swiper: swiperThumbs }"
      class="h-full"
    >
      <swiper-slide
        v-for="project in projectsList"
        :key="project.name"
        class="my-auto flex h-full items-center justify-center py-10"
      >
        <section
          class="mx-10 my-auto flex h-full w-4/5 flex-row items-center justify-center rounded-lg px-5 py-10 text-gray-600 shadow-xl"
        >
          <div
            class="container mx-auto flex h-full flex-col items-center justify-center"
          >
            <div
              class="my-5 flex flex-row items-center justify-center sm:py-0 lg:max-w-lg"
            >
              <img
                class="rounded object-cover object-center sm:h-full sm:w-60 sm:pt-20 md:h-auto md:w-72 md:pt-0 lg:h-auto lg:w-80"
                alt="SODA for SPARC logo"
                :data-blink-uuid="project.imageUrl"
              />
            </div>
            <div
              class="my-4 flex h-full flex-col items-center text-center sm:mb-16 md:mb-0"
            >
              <p
                class="font-asap w-full text-left text-base text-black sm:text-center md:text-base lg:text-lg"
              >
                {{ project.description }}
              </p>

              <div class="flex w-full justify-center py-4">
                <NuxtLink :to="project.page">
                  <button
                    class="inline-flex rounded border-0 bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition hover:ring-pink-600 focus:outline-none focus:ring-pink-600 sm:ml-4 md:text-base lg:text-lg"
                  >
                    Learn more about {{ project.name }}
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :slides-per-view="5"
      watch-slides-visibility
      watch-slides-progress
      class="thumbs-swiper hidden md:block"
    >
      <swiper-slide v-for="n of projectsList.length" :virtualIndex="n" :key="n">
        <div class="thumbnail">
          <img :data-blink-uuid="thumbnails[n - 1]" alt="" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Autoplay,
  Navigation,
  Pagination,
  Thumbs,
  Mousewheel,
  A11y,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import "swiper/css/mousewheel";

export default {
  name: "ProjectsCarousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["projectsList"],
  data() {
    return {};
  },
  setup() {
    let swiperThumbs = ref(null);
    const thumbnails = [
      "2a8dc700-311d-4bb2-b0d3-8022970754d8",
      "6b133fb6-b68b-413c-89a5-54a31a65c66c",
      "3ba27e90-3ab4-418f-aa07-05c4ba2c2f55",
      "945e1e40-b0e1-40c5-a59d-bc89296cddeb",
      "af296ebd-726d-4234-b9ac-449ff7dac3b9",
    ];

    const setThumbsSwiper = (swiper) => {
      this.swiperThumbs = swiper;
    };

    return {
      swiperThumbs,
      setThumbsSwiper,
      thumbnails,
      modules: [Navigation, Pagination, Autoplay, Thumbs, Mousewheel, A11y],
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.swiperThumbs = swiper;
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style language="postcss">
.swiper-button-next:after,
.swiper-button-prev:after {
  @apply text-pink-500 transition-all;
}

.swiper-pagination-bullet {
  @apply w-10 rounded bg-pink-300 transition-all hover:bg-pink-500;
}

.swiper-pagination-bullet-active {
  @apply bg-light-accent  transition-all;
}

.swiper-slide .thumbnail {
  @apply flex h-[100px] w-[200px] scale-75 cursor-pointer items-center justify-center grayscale transition-all hover:scale-90;
}

.thumbs-swiper .swiper-wrapper {
  @apply divide-x divide-dashed divide-gray-300;
}

.swiper-slide-thumb-active .thumbnail {
  @apply scale-100 rounded bg-pink-50 px-2 grayscale-0 transition-all hover:scale-100;
}
</style>
