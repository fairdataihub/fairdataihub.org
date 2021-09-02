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

        <!-- Desktop timeline -->

        <!-- <ul class="p-2 lg:p-8 dark:bg-coolGray-800 dark:text-coolGray-100">
          <li v-for="(item, index) in timelineList" :key="index">
            <article>
              <div
                class="
                  grid
                  p-4
                  overflow-hidden
                  md:grid-cols-5
                  rounded-xl
                  lg:p-6
                  xl:grid-cols-12
                  hover:dark:bg-coolGray-900
                "
              >
                <h3
                  class="
                    mb-1
                    md:ml-8
                    font-semibold
                    md:col-start-2 md:col-span-4 md:ml-0
                    xl:col-start-3 xl:col-span-9
                  "
                >
                  {{ item.title }}
                </h3>
                <time
                  datetime=""
                  class="
                    row-start-1
                    mb-1
                    md:col-start-1
                    xl:col-span-2
                    dark:text-coolGray-400
                  "
                >
                  {{ item.longDate }}
                </time>
                <p
                  class="
                    md:ml-8 md:col-start-2 md:col-span-4
                    xl:col-start-3 xl:col-span-9
                    md:ml-0
                    dark:text-coolGray-300
                  "
                >
                  {{ item.content }}
                </p>
              </div>
            </article>
          </li>
        </ul> -->

        <!-- Desktop timeline -->
        <!-- <div class="hidden sm:block">
          <div
            class="
              border-2-2
              absolute
              border-opacity-20 border-gray-700
              dark:border-gray-400
              h-full
              border
              left-6
              sm:left-2/4
            "
          ></div>

          <div
            v-for="(item, index) in timelineList"
            :key="index"
            :class="[
              `mb-8 flex justify-start sm:justify-between items-center w-full `,
              index % 2 == 0 ? `flex-row` : `flex-row-reverse `,
            ]"
          >
            <div class="order-1 w-0 sm:w-5/12"></div>
            <div
              class="
                z-10
                hidden
                items-center
                order-1
                bg-gray-800
                dark:bg-gray-50
                shadow-xl
                p-1
                mr-5
                sm:px-4
                w-max-content
                h-8
                rounded-full
              "
            >
              <h1 class="mx-auto text-xs text-white dark:text-gray-800">
                {{ item.shortDate }}
              </h1>
            </div>
            <div
              class="
                z-10
                hidden
                sm:flex
                items-center
                order-1
                bg-gray-800
                dark:bg-gray-50
                shadow-xl
                px-4
                w-max-content
                h-8
                rounded-full
              "
            >
              <h1
                class="
                  mx-auto
                  lg:font-semibold
                  md:text-base
                  lg:text-lg
                  text-white
                  dark:text-gray-800
                "
              >
                {{ item.longDate }}
              </h1>
            </div>
            <div
              class="
                order-1
                bg-gray-300
                rounded-lg
                shadow-xl
                sm:w-5/12
                p-2
                sm:px-6 sm:py-4
              "
            >
              <h3 class="mb-1 sm:mb-3 font-bold text-black text-xl">
                {{ item.title }}
              </h3>
              <p
                class="
                  text-base
                  sm:text-sm
                  leading-snug
                  tracking-wide
                  text-black
                "
              >
                {{ item.content }}
              </p>
            </div>
          </div>
        </div> -->
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
          shortDate: "03/21",
          longDate: "December 2018",
          title: "Birth of SODA for SPARC",
          content:
            "The first prototype of SODA for SPARC is developped during the 2018 NIH SPARC Hackathon where it wins the Public's Choice Award.",
        },
        {
          shortDate: "06/21",
          longDate: "May 2019 - Aug 2020",
          title: "Phase I development",
          content:
            "The base framework of the software is developed and support for high-level requirements of the SDS are integrated.",
        },
        {
          shortDate: "09/21",
          longDate: "Sept 2020 - Aug 2021",
          title: "Phase II development",
          content:
            "The user interface is upgraded to become more intuitive, support is included for additional elements of the SDS, and transition of SPARC from Blackfynn to Pennsieve in accomodated.",
        },
        {
          shortDate: "12/21",
          longDate: "Sept 2021 - Aug 2022",
          title: "Phase III development",
          content:
            "Support is provided for the evolving SPARC guidelines, a guided mode is integrated to simply further data curation, and the workflow is adapted for non-SPARC datasets.",
        },
      ],
    };
  },
};
</script>

<style></style>
