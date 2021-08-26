<template>
  <section
    v-for="project in projectsList"
    :key="project.name"
    class="
      flex flex-col
      text-gray-600
      w-full
      h-full
      body-font
      my-auto
      mx-auto
      px-5
      py-5
      flex flex-row
      justify-center
      items-center
    "
  >
    <div
      class="
        container
        mx-auto
        flex flex-col-reverse
        justify-center
        items-center
        h-full
      "
    >
      <!-- text div -->
      <div class="flex flex-col my-4 sm:mb-16 md:mb-0 items-center text-center">
        <!-- <h3
                    class="
                      font-inter font-semibold
                      text-3xl
                      md:text-2xl
                      lg:text-3xl
                      w-full
                      mb-1
                      sm:mb-4
                      text-left
                      sm:text-center
                      dark:text-gray-50
                    "
                  >
                    KnowMore
                  </h3> -->

        <p
          class="
            w-full
            text-left
            sm:text-center
            text-base
            md:text-base
            lg:text-lg
            font-asap
            text-black
            dark:text-white
          "
        >
          {{ project.description }}
        </p>

        <div class="w-full flex justify-center py-4">
          <router-link :to="project.page">
            <button
              class="
                sm:ml-4
                inline-flex
                text-white
                border-0
                py-2
                px-6
                focus:outline-none
                rounded
                text-lg
                md:text-base
                lg:text-lg
                transition
                bg-black
                dark:bg-pink-600
                text-white
                ring-2 ring-offset-2 ring-transparent
                dark:ring-offset-transparent
                hover:ring-pink-600
                dark:hover:ring-offset-1 dark:hover:ring-white
                focus:ring-pink-600
              "
            >
              Learn more about {{ project.name }}
            </button>
          </router-link>
        </div>
      </div>
      <!-- image div -->
      <div
        class="
          lg:max-w-lg
          my-5
          sm:py-0
          flex flex-row
          justify-center
          items-center
        "
      >
        <img
          class="
            object-cover object-center
            rounded
            sm:pt-20
            md:pt-0
            sm:h-full
            md:h-auto
            lg:h-auto
            sm:w-60
            md:w-72
            lg:w-80
          "
          alt="SODA for SPARC logo"
          :src="project.imageUrl"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectSlide",
  props: ["projectsList"],
};
</script>

<style></style>
