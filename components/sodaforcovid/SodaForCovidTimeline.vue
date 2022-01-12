<template>
  <section>
    <div
      class="container w-full h-full max-w-screen-lg pl-2 pr-3 mx-auto sm:px-10"
    >
      <div class="relative h-full p-2 overflow-hidden wrap sm:p-4">
        <h2 class="mb-10 text-4xl font-bold text-center font-inter sm:text-5xl">
          Timeline
        </h2>

        <div class="container flex flex-wrap px-1 py-5 mx-auto">
          <div class="flex flex-wrap w-full">
            <div
              class="relative flex pb-8"
              v-for="(item, index) in timelineList"
              :key="item.longDate"
            >
              <div
                class="absolute inset-0 flex items-center justify-center w-10 h-full"
                v-if="index != timelineList.length - 1"
              >
                <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-light-accent"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  v-if="index != timelineList.length - 1"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  v-if="index == timelineList.length - 1"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h3 class="font-semibold font-inter">
                  {{ item.longDate }} - {{ item.title }}
                </h3>
                <p class="w-full text-base text-black font-asap">
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SodaForCovidTimeline",
  data() {
    return {
      timelineList: [
        {
          longDate: "November 2020",
          title: "Birth of SODA for COVID-19 Research",
          content:
            "The first prototype of SODA for COVID-19 Research is developed for demo purpose by the FAIR Data Innovations Hub.",
        },
        {
          longDate: "September 2021 - Aug 2022",
          title: "Phase I development",
          content:
            "The base framework of the software will be developed and support for major genomics, immunology, and general data types will be provided.",
        },
      ],
    };
  },
};
</script>

<style></style>
