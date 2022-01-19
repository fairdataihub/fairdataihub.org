<template>
  <div class="w-full h-auto max-w-screen-lg px-4 pt-1 pb-3 mx-auto">
    <div class="flex flex-col items-center justify-center mb-4">
      <h2
        class="my-2 text-4xl font-extrabold tracking-tight text-center sm:text-4xl"
      >
        Current Projects
      </h2>
      <p class="w-full max-w-2xl text-xl text-center font-asap">
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
      :mousewheel="{ releaseOnEdges: true }"
      class="h-full"
    >
      <swiper-slide
        v-for="project in projectsList"
        :key="project.name"
        class="flex items-center justify-center h-full py-10 my-auto"
      >
        <section
          class="flex flex-row items-center justify-center w-4/5 h-full px-5 py-10 mx-10 my-auto text-gray-600 rounded-lg shadow-xl"
        >
          <div
            class="container flex flex-col items-center justify-center h-full mx-auto"
          >
            <div
              class="flex flex-row items-center justify-center my-5 lg:max-w-lg sm:py-0"
            >
              <img
                class="object-cover object-center rounded sm:pt-20 md:pt-0 sm:h-full md:h-auto lg:h-auto sm:w-60 md:w-72 lg:w-80"
                alt="SODA for SPARC logo"
                :src="project.imageUrl"
              />
            </div>
            <div
              class="flex flex-col items-center h-full my-4 text-center sm:mb-16 md:mb-0"
            >
              <p
                class="w-full text-base text-left text-black sm:text-center md:text-base lg:text-lg font-asap"
              >
                {{ project.description }}
              </p>

              <div class="flex justify-center w-full py-4">
                <NuxtLink :to="project.page">
                  <button
                    class="inline-flex px-6 py-2 text-lg text-white transition bg-black border-0 rounded sm:ml-4 focus:outline-none md:text-base lg:text-lg ring-2 ring-offset-2 ring-transparent hover:ring-pink-600 focus:ring-pink-600"
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
      class="thumbs-swiper"
    >
      <swiper-slide v-for="n of projectsList.length" :virtualIndex="n" :key="n">
        <div class="thumbnail">
          <img :src="thumbnails[n - 1]" alt="" />
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
      "https://ucarecdn.com/2a8dc700-311d-4bb2-b0d3-8022970754d8/-/preview/-/quality/smart/",
      "https://ucarecdn.com/6b133fb6-b68b-413c-89a5-54a31a65c66c/-/preview/-/quality/smart/",
      "https://ucarecdn.com/3ba27e90-3ab4-418f-aa07-05c4ba2c2f55/-/preview/-/quality/smart/",
      "https://ucarecdn.com/945e1e40-b0e1-40c5-a59d-bc89296cddeb/-/preview/-/quality/smart/",
      "https://ucarecdn.com/af296ebd-726d-4234-b9ac-449ff7dac3b9/-/preview/-/quality/smart/",
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
  @apply bg-pink-300 w-10 rounded hover:bg-pink-500 transition-all;
}

.swiper-pagination-bullet-active {
  @apply bg-light-accent  transition-all;
}

.swiper-slide .thumbnail {
  @apply scale-75 hover:scale-90 grayscale transition-all h-[100px] w-[200px] flex justify-center items-center cursor-pointer;
}

.thumbs-swiper .swiper-wrapper {
  @apply divide-x divide-gray-300 divide-dashed;
}

.swiper-slide-thumb-active .thumbnail {
  @apply scale-100 hover:scale-100 grayscale-0 bg-pink-50 rounded px-2 transition-all;
}
</style>
