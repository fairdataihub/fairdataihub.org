<template>
  <div class="flex flex-col justify-center items-center">
    <section class="max-w-screen-2xl mx-auto py-5 relative">
      <div class="absolute top-1 sm:top-10 right-0 z-0 opacity-60 w-40">
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="
          hidden
          lg:block
          absolute
          bottom-1
          sm:bottom-12
          right-5
          z-0
          opacity-60
          w-40
        "
      >
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="
          container
          mx-auto
          flex
          px-1
          py-2
          sm:py-4
          md:py-10
          w-full
          flex-col-reverse
          lg:flex-row
          items-center
        "
      >
        <!-- text div -->
        <div
          class="
            lg:flex-grow
            pt-5
            sm:pt-0
            lg:pr-24
            md:pr-0
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
              font-black
              text-3xl
              sm:text-4xl
              w-full
              mb-1
              text-center
              dark:text-gray-50
            "
          >
            SODA for SPARC
          </h1>
          <h2
            class="
              w-full
              sm:text-2xl
              text-2xl
              mb-2
              font-medium
              dark:text-gray-50
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
              font-asap
              text-black
              dark:text-white
            "
          >
            Your one-stop tool for curating and submitting SPARC datasets
            <br />
            <i> By SPARC investigators, for SPARC investigators </i>
          </p>
          <div class="w-full flex justify-center">
            <button
              class="
                sm:block
                flex
                justify-center
                items-center
                border-0
                py-2
                px-6
                focus:outline-none
                rounded
                text-lg
                transition-all
                bg-black
                dark:bg-pink-600
                text-white
                ring-2 ring-offset-2 ring-transparent
                dark:ring-offset-transparent
                hover:ring-pink-600
                dark:hover:ring-offset-1 dark:hover:ring-white
                focus:ring-pink-600
              "
              @click="downloadSODA"
            >
              Download now
            </button>
            <NuxtLink to="/sodaforsparc/docs/getting-started/User-Interface">
              <button
                class="
                  sm:ml-4
                  py-2
                  px-6
                  focus:outline-none
                  rounded
                  text-lg
                  transition-all
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
                Explore the docs
              </button>
            </NuxtLink>
          </div>
        </div>
        <!-- image div -->
        <div class="lg:max-w-2xl py-2 sm:py-0 z-10 relative">
          <div
            class="
              lg:hidden
              absolute
              bottom-1
              sm:bottom-0
              left-0
              z-0
              opacity-60
              w-40
            "
          >
            <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
          </div>
          <img src="https://i.ibb.co/HCxy4JH/soda-app-macos.png" alt="" />
          <!-- <v-lazy-image
            alt="SODA for SPARC logo"
            src="https://i.ibb.co/HCxy4JH/soda-app-macos.png"
            src-placeholder="https://i.ibb.co/KXN8cqX/soda-app-macos-min.png"
          /> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SodaForSparcHerosection",
  methods: {
    downloadSODA: async function () {
      const os = await this.getOS();
      console.log(os);
      const downloadLink = await this.getLatestVersion(os);
      Object.assign(document.createElement("a"), {
        target: "_blank",
        href: downloadLink,
      }).click();
      this.$router.push({ path: "/sodaforsparc/docs/Download-soda" });
    },
    getOS: async function () {
      let userAgent = window.navigator.userAgent;
      let platform = window.navigator.platform;
      let macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
      let windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
      let iosPlatforms = ["iPhone", "iPad", "iPod"];
      let os = "null";

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = "macOS";
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "all";
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "windows";
      } else if (/Android/.test(userAgent)) {
        os = "all";
      } else if (/Linux/.test(platform)) {
        os = "linux";
      } else {
        os = "all";
      }
      return os;
    },
    getLatestVersion: async function (os) {
      const res = await fetch(
        "https://api.github.com/repos/fairdataihub/SODA-for-SPARC/releases"
      );
      const data = await res.json();
      const release = data[0];
      let link = this.$route.path;
      release.assets.forEach((asset) => {
        let file_name = asset.name;
        let file_ext = file_name.split(".").pop();

        if (os === "macOS") {
          if (file_ext === "dmg") {
            link = asset.browser_download_url;
          }
        }
        if (os === "windows") {
          if (file_ext === "exe") {
            link = asset.browser_download_url;
          }
        }
        if (os === "linux") {
          if (file_ext === "AppImage") {
            link = asset.browser_download_url;
          }
        }
      });
      return link;
    },
  },
  data() {
    return {};
  },
};
</script>
