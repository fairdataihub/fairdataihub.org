<template>
  <div
    class="
      flex flex-col
      justify-center
      items-center
      max-w-screen-lg
      mx-auto
      dark:bg-gray-600
    "
  >
    <div class="flex flex-col items-center mb-4 px-4">
      <h2
        class="
          w-full
          mt-2
          mb-1
          font-extrabold
          text-gray-900
          dark:text-white
          text-4xl
          sm:text-4xl
          font-inter
          text-left
        "
      >
        Current Projects
      </h2>
      <p
        class="
          font-inter
          w-full
          max-w-2xl
          text-xl text-black
          dark:text-white
          text-left
          pb-2
        "
      >
        These are the projects we are working on at the moment.
      </p>
    </div>
    <section class="text-gray-600 w-full body-font px-2 mb-4">
      <div class="container mx-auto flex px-5 flex-col-reverse items-center">
        <!-- text div -->
        <div class="flex flex-col my-1 items-center text-center">
          <h3
            class="
              font-inter font-semibold
              text-4xl
              w-full
              mb-4
              text-left text-black
              dark:text-white
            "
          >
            SODA for SPARC
          </h3>

          <p
            class="
              w-full
              mb-8
              text-left text-xl
              font-fsans
              text-black
              dark:text-white
            "
          >
            SODA (Software to Organize Data Automatically) for SPARC is a
            desktop software intended to facilitate the data organization and
            submission process for SPARC investigators and thus promote the FAIR
            Data Principles.
          </p>
          <div class="w-full flex justify-center">
            <!-- <a
              href="https://github.com/bvhpatel/SODA#Downloading-soda"
              target="_blank"
            >
              <button
                class="
                  hidden
                  sm:inline-flex
                  text-white
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  bg-indigo-500
                  hover:bg-indigo-600
                  rounded
                  text-lg
                  transition
                "
              >
                Download now (github)
              </button>
            </a> -->
            <!-- <router-link to="/sodasparc/docs/Download-soda">
              <button
                class="
                  hidden
                  sm:inline-flex
                  text-white
                  bg-primary
                  hover:bg-blue-600
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  rounded
                  text-base
                  transition
                "
              >
                Download now
              </button>
            </router-link> -->
            <router-link to="/sodasparc">
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
                  transition
                "
                :style="'background-color: ' + buttonColor + ';'"
              >
                Learn more about SODA for SPARC
              </button>
            </router-link>
          </div>
        </div>
        <!-- image div -->
        <div class="w-5/6 py-4 my-2 flex justify-center">
          <img
            class="object-cover object-center rounded"
            alt="SODA for SPARC logo"
            src="https://github.com/bvhpatel/SODA/raw/master/src/assets/img/logo-can1024-grey-circle.png"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MobileProjects",
  props: ["buttonColor"],
  data() {
    return {
      sodaForSPARCData: [
        { name: "Windows Installer", href: "/sodasparc-windowsinstaller" },
        { name: "macOS Installer", href: "/sodasparc-macosinstaller" },
        { name: "Linux Installer", href: "/sodasparc-linuxinstaller" },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
