<template>
  <section>
    <div
      class="container mx-auto h-full w-full max-w-screen-lg pl-2 pr-3 sm:px-10"
    >
      <div class="wrap relative h-full overflow-hidden p-2 sm:p-4">
        <h2 class="mb-10 text-center text-4xl font-bold sm:text-5xl">
          Timeline
        </h2>

        <div class="container mx-auto flex flex-wrap px-1 py-5">
          <div class="flex w-full flex-wrap">
            <div
              class="relative flex pb-8"
              v-for="(item, index) in timelineList"
              :key="item.longDate"
            >
              <div
                class="absolute inset-0 flex h-full w-10 items-center justify-center"
                v-if="index != timelineList.length - 1"
              >
                <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
              </div>
              <div
                class="bg-light-accent relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-5 w-5"
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
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  v-if="index == timelineList.length - 1"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h3 class="font-semibold">
                  {{ item.longDate }} - {{ item.title }}
                </h3>
                <p class="font-asap w-full text-base text-black">
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
  name: "SodaForSparcTimeline",
  data() {
    return {
      timelineList: [
        {
          longDate: "December 2018",
          title: "Birth of SODA for SPARC",
          content:
            "The first prototype of SODA for SPARC is developed during the 2018 NIH SPARC Hackathon where it won the Public's Choice Award.",
        },
        {
          longDate: "May 2019 - Aug 2020",
          title: "Phase I development",
          content:
            "The base framework of the software is developed and support for high-level requirements of the SDS are integrated.",
        },
        {
          longDate: "Sept 2020 - Aug 2021",
          title: "Phase II development",
          content:
            "The user interface is upgraded to become more intuitive, support is included for additional elements of the SDS, and the transition of SPARC from Blackfynn to Pennsieve is achieved.",
        },
        {
          longDate: "Sept 2021 - Aug 2022",
          title: "Phase III development",
          content:
            "Support will be provided for the evolving SPARC guidelines. A guided mode is to be integrated to simplify further data curation, and the workflow will be adapted for non-SPARC datasets.",
        },
      ],
    };
  },
};
</script>

<style></style>
