<template>
  <div
    class="
      flex flex-col
      justify-center
      items-center
      max-w-screen-lg
      mx-auto
      sdark:bg-gray-600
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
          md:text-center
        "
      >
        Current Projects
      </h2>
      <p
        class="
          w-full
          max-w-2xl
          text-xl text-black
          dark:text-white
          text-left
          md:text-center
          pb-2
        "
      >
        These are the projects we are working on at the moment.
      </p>
    </div>
    <section class="text-gray-600 w-full body-font px-2 mb-4">
      <div
        class="
          container
          mx-auto
          flex
          px-5
          sm:mb-2
          flex-col-reverse
          md:flex-row md:justify-evenly
          items-center
        "
      >
        <!-- text div -->
        <div
          class="
            md:w-7/12
            flex flex-col
            my-1
            sm:mb-16
            md:mb-0
            items-center
            text-center
          "
        >
          <h3
            class="
              font-sans font-semibold
              text-3xl
              md:text-2xl
              lg:text-3xl
              w-full
              mb-1
              sm:mb-4
              text-left
              sm:text-center
              text-black
              dark:text-white
            "
          >
            SODA for SPARC
          </h3>

          <p
            class="
              w-full
              mb-4
              sm:mb-8
              text-left
              sm:text-center
              text-base
              md:text-base
              lg:text-lg
              font-sans
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
            <router-link to="/sodasparc/docs/Download-soda">
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
                  md:text-base
                  lg:text-lg
                  transition
                "
              >
                Download now
              </button>
            </router-link>
            <router-link to="/sodasparc">
              <button
                class="
                  sm:ml-4
                  inline-flex
                  text-white
                  bg-primary
                  hover:bg-blue-600
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  rounded
                  text-lg
                  md:text-base
                  lg:text-lg
                  transition
                "
              >
                Learn more about SODA for SPARC
              </button>
            </router-link>
          </div>
        </div>
        <!-- image div -->
        <div
          class="
            lg:max-w-lg
            md:w-3/12
            w-5/6
            py-4
            my-2
            sm:py-0
            flex
            justify-center
          "
        >
          <img
            class="
              object-cover object-center
              rounded
              sm:h-52
              md:h-40
              lg:h-auto
              sm:w-52
              md:w-40
              lg:w-auto
            "
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
  components: {},
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
