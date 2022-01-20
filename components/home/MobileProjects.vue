<template>
  <div
    class="flex flex-col items-center justify-center max-w-screen-lg mx-auto"
  >
    <div class="flex flex-col items-center px-4 mb-4 text-center">
      <h2
        class="w-full mt-2 mb-1 text-4xl font-extrabold text-gray-900 sm:text-4xl"
      >
        Current Projects
      </h2>
      <p class="w-full max-w-2xl pb-2 text-xl text-black">
        These are the projects we are working on at the moment.
      </p>
    </div>
    <section
      class="w-full px-2 mb-4 text-gray-600 divide-y divide-gray-300 body-font"
    >
      <div
        class="container flex flex-col items-center justify-start px-5 pb-10 mx-auto my-4"
        v-for="project in projectsList"
        :key="project.name"
      >
        <!-- image div -->
        <div class="w-full pt-10 pb-6 my-2">
          <img
            class="object-cover rounded"
            alt="SODA for SPARC logo"
            :data-blink-uuid="project.imageUrl"
          />
        </div>
        <!-- text div -->
        <div class="flex flex-col items-center pt-5 pb-2 my-1 text-center">
          <h3
            class="hidden w-full mb-4 text-4xl font-semibold text-left text-black"
          >
            {{ project.name }}
          </h3>

          <p class="w-full mb-8 text-xl text-left text-black font-asap">
            {{ project.description }}
          </p>
          <div class="flex justify-center w-full">
            <NuxtLink :to="project.page">
              <button
                class="inline-flex px-6 py-2 text-lg text-white transition border-0 rounded sm:ml-4 focus:outline-none bg-button-light-background"
              >
                Learn more about {{ project.name }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MobileProjects",
  props: ["projectsList"],
  data() {
    return {};
  },
  methods: {},
};
</script>
