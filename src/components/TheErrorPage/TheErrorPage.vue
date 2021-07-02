<template>
  <main class="bg-white dark:bg-gray-700 relative overflow-hidden h-screen">
    <div
      class="
        container
        mx-auto
        h-screen
        pt-32
        md:pt-0
        px-6
        z-10
        flex
        items-center
        justify-between
      "
    >
      <div
        class="
          container
          mx-auto
          px-6
          flex flex-col-reverse
          lg:flex-row
          justify-between
          items-center
          relative
        "
      >
        <div class="w-full mb-16 md:mb-8 text-center lg:text-left">
          <h1
            class="
              font-light font-sans
              text-center
              lg:text-left
              text-5xl
              lg:text-8xl
              mt-12
              md:mt-0
              text-gray-700
              dark:text-gray-50
            "
          >
            Sorry, this page isn&#x27;t available
          </h1>
          <router-link to="/home">
            <button
              type="button"
              class="
                px-2
                py-2
                bg-indigo-600
                hover:bg-indigo-700
                focus:ring-indigo-500 focus:ring-offset-indigo-200
                text-white
                w-36
                mt-8
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
              Go back home
            </button>
          </router-link>
          <!-- <button
            class="
              px-2
              py-2
              w-36
              mt-16
              font-light
              transition
              ease-in
              duration-200
              hover:bg-yellow-400
              border-2
              text-lg
              border-gray-700
              bg-yellow-300
              focus:outline-none
            "
          >
            Go back home
          </button> -->
        </div>
        <div
          class="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl"
        >
          <img src="https://www.tailwind-kit.com/images/illustrations/1.svg" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "TheErrorpage",
};
</script>

<style></style>
