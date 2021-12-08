<template>
  <div
    class="flex flex-col justify-center items-center max-w-screen-lg mx-auto dark:bg-gray-600"
  >
    <div class="flex flex-col items-center mb-4 px-4">
      <h2
        class="w-full mt-2 mb-1 font-extrabold text-gray-900 dark:text-white text-4xl sm:text-4xl text-left"
      >
        Current Projects
      </h2>
      <p
        class="w-full max-w-2xl text-xl text-black dark:text-white text-left pb-2"
      >
        These are the projects we are working on at the moment.
      </p>
    </div>
    <section
      class="text-gray-600 w-full body-font mb-4 divide-y divide-gray-300 px-2"
    >
      <div
        class="container mx-auto flex px-5 flex-col-reverse items-center justify-start my-4 pb-10"
        v-for="project in projectsList"
        :key="project.name"
      >
        <!-- text div -->
        <div class="flex flex-col my-1 items-center text-center">
          <h3
            class="font-semibold hidden text-4xl w-full mb-4 text-left text-black dark:text-white"
          >
            {{ project.name }}
          </h3>

          <p
            class="w-full mb-8 text-left text-xl font-asap text-black dark:text-white"
          >
            {{ project.description }}
          </p>
          <div class="w-full flex justify-center">
            <NuxtLink :to="project.page">
              <button
                class="sm:ml-4 inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg transition bg-button-light-background dark:bg-button-dark-background"
              >
                Learn more about {{ project.name }}
              </button>
            </NuxtLink>
          </div>
        </div>
        <!-- image div -->
        <div class="pt-10 pb-6 my-2 w-full">
          <img
            class="object-cover rounded"
            alt="SODA for SPARC logo"
            :src="project.imageUrl"
          />
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
