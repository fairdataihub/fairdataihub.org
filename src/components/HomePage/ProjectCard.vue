<template>
  <div class="w-full h-full flex justify-center items-center">
    <div
      class="flex w-4/5 mx-auto overflow-hidden rounded-lg justify-center"
      style="height: 75%"
    >
      <div class="w-full flex flex-col justify-evenly">
        <div class="w-full">
          <h1 class="text-center font-sans text-3xl text-black dark:text-white">
            <strong>
              <slot name="title">Project Title</slot>
            </strong>
          </h1>
        </div>

        <div class="flex flex-col sm:flex-row justify-evenly mt-2 p-5">
          <!-- <div
              class="w-1/3 h-full bg-cover"
              :style="`background-image:url(${projectImage})`"
            ></div> -->
          <div class="w-full sm:w-1/3 h-full flex justify-center items-center">
            <img :src="projectImage" alt="" class="w-full h-auto rounded-lg" />
          </div>
          <div
            class="
              w-full
              sm:w-2/3
              p-4
              md:p-1 md:ml-3
              flex
              justify-center
              items-center
            "
          >
            <p class="text-sm text-black dark:text-white">
              <slot name="description">Project description</slot>
            </p>
          </div>
        </div>

        <div class="w-full hidden sm:flex sm:justify-center">
          <h2 class="text-center font-sans text-xl text-black dark:text-white">
            <strong> <slot name="subtitle">Project SubTitle</slot> </strong>
          </h2>
        </div>

        <div class="w-5/6 mx-auto hidden sm:flex justify-evenly">
          <button v-for="item in actionButtons" :key="item.name">
            <router-link
              :to="item.href"
              class="
                py-2
                px-4
                bg-indigo-600
                hover:bg-indigo-700
                focus:ring-indigo-500 focus:ring-offset-indigo-200
                text-white
                transition
                ease-in
                duration-200
                text-center text-base
                font-semibold
                shadow-md
                focus:outline-none focus:ring-2 focus:ring-offset-2
                rounded-lg
              "
            >
              {{ item.name }}
            </router-link>
          </button>
        </div>
        <div class="flex w-full justify-center mt-3 item-center">
          <router-link
            :to="learnMoreLink"
            class="
              px-2
              py-1
              text-xs
              font-bold
              text-white
              uppercase
              transition-colors
              duration-200
              transform
              bg-gray-800
              rounded-md
              dark:bg-gray-700
              hover:bg-gray-700
              dark:hover:bg-gray-600
              focus:outline-none focus:bg-gray-700
              dark:focus:bg-gray-600
            "
          >
            <slot name="moreInfo">Explore</slot>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ["projectImage", "actionButtons", "learnMoreLink"],
};
</script>

<style lang="postcss" scoped></style>
