<template>
  <div class="w-full max-w-screen-lg mx-auto h-auto pt-1 pb-3 px-4">
    <div class="flex flex-col justify-center items-center mb-4">
      <h2
        class="my-2 font-extrabold tracking-tight text-4xl sm:text-4xl text-center"
      >
        Current Projects
      </h2>
      <p class="w-full max-w-2xl text-xl font-asap text-center">
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
        class="py-10 flex justify-center items-center h-full my-auto"
      >
        <section
          class="text-gray-600 w-4/5 h-full my-auto mx-10 px-5 py-10 flex flex-row justify-center items-center rounded-lg shadow-xl"
        >
          <div
            class="container mx-auto flex flex-col justify-center items-center h-full"
          >
            <div
              class="lg:max-w-lg my-5 sm:py-0 flex flex-row justify-center items-center"
            >
              <img
                class="object-cover object-center rounded sm:pt-20 md:pt-0 sm:h-full md:h-auto lg:h-auto sm:w-60 md:w-72 lg:w-80"
                alt="SODA for SPARC logo"
                :src="project.imageUrl"
              />
            </div>
            <div
              class="flex flex-col my-4 sm:mb-16 md:mb-0 items-center text-center h-full"
            >
              <p
                class="w-full text-left sm:text-center text-base md:text-base lg:text-lg font-asap text-black"
              >
                {{ project.description }}
              </p>

              <div class="w-full flex justify-center py-4">
                <NuxtLink :to="project.page">
                  <button
                    class="sm:ml-4 inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg md:text-base lg:text-lg transition bg-black text-white ring-2 ring-offset-2 ring-transparent hover:ring-pink-600 focus:ring-pink-600"
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
      "https://ucarecdn.com/f218d322-4541-4506-9348-d538bdf7a5f1/",
      "https://ucarecdn.com/125366f3-6187-4d13-94ba-05e8795399c6/",
      "https://ucarecdn.com/9f3f8943-86e5-413a-840b-dc529a60d48b/",
      "https://ucarecdn.com/8ad222c1-29ed-4815-9f4e-fd384e673c0d/",
      "https://ucarecdn.com/9e5823e1-79d0-4013-acba-f3c4672111ca/",
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
