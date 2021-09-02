<template>
  <section>
    <div
      class="container w-full h-full max-w-screen-lg pl-2 pr-3 sm:px-10 mx-auto"
    >
      <div class="relative wrap overflow-hidden p-2 sm:p-4 h-full">
        <h2
          class="
            font-inter
            mb-10
            text-4xl
            font-bold
            text-center
            sm:text-5xl
            dark:text-gray-50
          "
        >
          Timeline
        </h2>

        <div class="container px-1 py-5 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">
            <div
              class="flex relative pb-8"
              v-for="(item, index) in timelineList"
              :key="item.longDate"
            >
              <div
                class="
                  h-full
                  w-10
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
                v-if="index != timelineList.length - 1"
              >
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                class="
                  flex-shrink-0
                  w-10
                  h-10
                  rounded-full
                  bg-light-accent
                  inline-flex
                  items-center
                  justify-center
                  text-white
                  relative
                  z-10
                "
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
                <h3 class="font-inter font-semibold dark:text-gray-50">
                  {{ item.longDate }} - {{ item.title }}
                </h3>
                <p
                  class="
                    w-full
                    text-base
                    font-asap
                    text-black
                    dark:text-gray-50
                  "
                >
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
  name: "SodaTimeline",
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
            "The base framework of the software was developed and support for high-level requirements of the SDS were integrated.",
        },
        {
          longDate: "Sept 2020 - Aug 2021",
          title: "Phase II development",
          content:
            "The user interface was upgraded to become more intuitive, support was included for additional elements of the SDS, and the transition of SPARC from Blackfynn to Pennsieve was accommodated.",
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
