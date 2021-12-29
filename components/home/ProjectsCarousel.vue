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

    <!-- <Carousel
      :breakpoints="{}"
      :wrap-around="true"
      :autoplay="6000"
      :transition="300"
      snapAlign="center"
      pause-autoplay-on-hover
      v-if="ready"
      :key="componentKey"
    >
      <Slide v-for="project in projectsList" :key="project.name" class="py-10">
        <section
          class="text-gray-600 w-4/5 h-full body-font my-auto mx-10 px-5 py-10 flex flex-row justify-center items-center rounded-lg shadow-xl"
        >
          <div
            class="container mx-auto flex flex-col-reverse justify-center items-center h-full"
          >
            <div
              class="flex flex-col my-4 sm:mb-16 md:mb-0 items-center text-center"
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
            <div
              class="lg:max-w-lg my-5 sm:py-0 flex flex-row justify-center items-center"
            >
              <img
                class="object-cover object-center rounded sm:pt-20 md:pt-0 sm:h-full md:h-auto lg:h-auto sm:w-60 md:w-72 lg:w-80"
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
    </Carousel> -->

    <swiper
      :modules="modules"
      :slides-per-view="1"
      navigation
      :grabCursor="true"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 6000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :thumbs="{ swiper: swiperThumbs }"
      :mousewheel="{ releaseOnEdges: true }"
    >
      <swiper-slide
        v-for="project in projectsList"
        :key="project.name"
        class="py-10 flex justify-center items-center h-full"
      >
        <section
          class="text-gray-600 w-4/5 h-full my-auto mx-10 px-5 py-10 flex flex-row justify-center items-center rounded-lg shadow-xl"
        >
          <div
            class="container mx-auto flex flex-col-reverse justify-center items-center h-full"
          >
            <div
              class="flex flex-col my-4 sm:mb-16 md:mb-0 items-center text-center"
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
            <div
              class="lg:max-w-lg my-5 sm:py-0 flex flex-row justify-center items-center"
            >
              <img
                class="object-cover object-center rounded sm:pt-20 md:pt-0 sm:h-full md:h-auto lg:h-auto sm:w-60 md:w-72 lg:w-80"
                alt="SODA for SPARC logo"
                :src="project.imageUrl"
              />
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
      class="hidden"
    >
      <swiper-slide v-for="n of projectsList.length" :virtualIndex="n" :key="n">
        <p class="text-center">Thumbnail {{ n }}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, Thumbs, Mousewheel } from "swiper";
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
    return { ready: false, componentKey: 0, swiperThumbs: null };
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay, Thumbs, Mousewheel],
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.swiperThumbs = swiper;
    },
  },
  computed: {},
  created() {
    this.ready = false;
    this.componentKey = Math.random();
  },
  mounted() {
    this.ready = true;
    this.componentKey++;
    console.log(process.env.NODE_ENV);
  },
};
</script>

<style language="postcss">
.swiper-button-next:after,
.swiper-button-prev:after {
  @apply text-primary transition-all;
}

.swiper-pagination-bullet {
  @apply bg-pink-300 w-10 rounded hover:bg-pink-500 transition-all;
}

.swiper-pagination-bullet-active {
  @apply bg-light-accent  transition-all;
}
</style>
