<template>
  <div class="flex flex-col justify-center items-center">
    <section class="max-w-screen-xl mx-auto p-5">
      <div
        class="
          container
          mx-auto
          flex
          px-5
          py-2
          sm:py-10
          flex-col-reverse
          sm:flex-col
          md:flex-row
          items-center
        "
      >
        <!-- text div -->
        <div
          class="
            lg:flex-grow
            md:w-1/2
            lg:pr-24
            md:pr-16
            flex flex-col
            md:items-start md:text-left
            mb-2
            sm:mb-16
            md:mb-0
            items-center
            text-center
          "
        >
          <h1
            class="
              font-sans font-black
              text-3xl
              sm:text-4xl
              w-full
              mb-1
              sm:mb-4
              text-center text-black
              dark:text-white
            "
          >
            SODA for SPARC
          </h1>
          <h2
            class="
              font-sans
              w-full
              sm:text-2xl
              text-2xl
              mb-2
              sm:mb-4
              font-medium
              text-black
              dark:text-white
              text-center
            "
          >
            Keep Calm and Curate!
          </h2>
          <p
            class="
              mb-8
              leading-relaxed
              text-center text-base
              w-full
              font-sans
              text-black
              dark:text-white
            "
          >
            Your one-stop tool for curating and submitting SPARC datasets
            <br />
            <i> By SPARC investigators, for SPARC investigators </i>
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
                  bg-indigo-500
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  hover:bg-indigo-600
                  rounded
                  text-lg
                "
              >
                Download now
              </button>
            </a> -->
            <button
              class="
                hidden
                sm:inline-flex
                text-white
                bg-indigo-500
                border-0
                py-2
                px-6
                focus:outline-none
                hover:bg-indigo-600
                rounded
                text-lg
              "
              @click="downloadSODA"
            >
              Download now
            </button>
            <router-link to="/sodasparc/docs">
              <button
                class="
                  ml-4
                  inline-flex
                  text-gray-700
                  bg-gray-100
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  hover:bg-gray-200
                  rounded
                  text-lg
                "
              >
                Explore the docs
              </button>
            </router-link>
          </div>
        </div>
        <!-- image div -->
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 py-2 sm:py-0">
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
const path = require("path");
export default {
  name: "SodaHerosection",
  methods: {
    downloadSODA: async function () {
      const os = await this.getOS();
      const downloadLink = await this.getLatestVersion(os);
      Object.assign(document.createElement("a"), {
        target: "_blank",
        href: downloadLink,
      }).click();
      this.$router.push({ path: "/sodasparc/docs/Download-soda" });
    },
    getOS: async function () {
      var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"],
        os = "null";

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = "macOS";
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "all";
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "windows";
      } else if (/Android/.test(userAgent)) {
        os = "all";
      } else if (!os && /Linux/.test(platform)) {
        os = "linux";
      } else {
        os = "all";
      }

      return os;
    },
    getLatestVersion: async function (os) {
      const res = await fetch(
        "https://api.github.com/repos/bvhpatel/soda/releases"
      );
      const data = await res.json();
      const release = data[0];
      let link = this.$route.path;
      release.assets.forEach((asset) => {
        let file_name = asset.name;
        let file_ext = path.extname(file_name);
        if (os === "macOS") {
          if (file_ext === ".dmg") {
            link = asset.browser_download_url;
          }
        }
        if (os === "windows") {
          if (file_ext === ".exe") {
            link = asset.browser_download_url;
          }
        }
        if (os === "linux") {
          if (file_ext === ".AppImage") {
            link = asset.browser_download_url;
          }
        }
      });
      return link;
    },
  },
};
</script>

<style></style>
