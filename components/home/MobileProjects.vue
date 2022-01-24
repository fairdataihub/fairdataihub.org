<template>
  <div
    class="mx-auto flex max-w-screen-lg flex-col items-center justify-center"
  >
    <div class="mb-4 flex flex-col items-center px-4 text-center">
      <h2
        class="mt-2 mb-1 w-full text-4xl font-extrabold text-gray-900 sm:text-4xl"
      >
        Current Projects
      </h2>
      <p class="w-full max-w-2xl pb-2 text-xl text-black">
        These are the projects we are working on at the moment.
      </p>
    </div>
    <section
      class="body-font mb-4 w-full divide-y divide-gray-300 px-2 text-gray-600"
    >
      <div
        class="container mx-auto my-4 flex flex-col items-center justify-start px-5 pb-10"
        v-for="project in projectsList"
        :key="project.name"
      >
        <!-- image div -->
        <div class="my-2 w-full pt-10 pb-6">
          <img
            class="rounded object-cover"
            alt="SODA for SPARC logo"
            :data-blink-uuid="project.imageUrl"
          />
        </div>
        <!-- text div -->
        <div class="my-1 flex flex-col items-center pt-5 pb-2 text-center">
          <h3
            class="mb-4 hidden w-full text-left text-4xl font-semibold text-black"
          >
            {{ project.name }}
          </h3>

          <p class="font-asap mb-8 w-full text-left text-xl text-black">
            {{ project.description }}
          </p>
          <div class="flex w-full justify-center">
            <NuxtLink :to="project.page">
              <button
                class="bg-button-light-background inline-flex rounded border-0 px-6 py-2 text-lg text-white transition focus:outline-none sm:ml-4"
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
