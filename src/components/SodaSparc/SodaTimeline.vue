<template>
  <section class="dark:bg-gray-600">
    <div class="container w-full h-full pb-4 max-w-screen-xl mx-auto">
      <div class="relative wrap overflow-hidden p-2 sm:p-10 h-full">
        <div
          class="
            border-2-2
            absolute
            border-opacity-20 border-gray-700
            dark:border-gray-400
            h-full
            border
          "
          style="left: 50%"
        ></div>
        <!-- right timeline -->

        <div
          v-for="(item, index) in timelineList"
          :key="index"
          :class="[
            `mb-8 flex justify-between items-center w-full`,
            index % 2 == 0 ? `flex-row` : `flex-row-reverse`,
          ]"
        >
          <div class="order-1 w-5/12"></div>
          <div
            class="
              z-10
              flex
              sm:hidden
              items-center
              order-1
              bg-gray-800
              dark:bg-gray-50
              shadow-xl
              p-1
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
              w-5/12
              p-2
              sm:px-6 sm:py-4
            "
          >
            <h3 class="mb-1 sm:mb-3 font-bold text-black text-xl">
              {{ item.title }}
            </h3>
            <p class="text-xs sm:text-sm leading-snug tracking-wide text-black">
              {{ item.content }}
            </p>
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
          shortDate: "03/21",
          longDate: "Mar 2021",
          title: "Title 1",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          shortDate: "06/21",
          longDate: "Jun 2021",
          title: "Title 2",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          shortDate: "09/21",
          longDate: "Sep 2021",
          title: "Title 3",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          shortDate: "12/21",
          longDate: "Dec 2021",
          title: "Title 3",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
    };
  },
};
</script>

<style></style>
