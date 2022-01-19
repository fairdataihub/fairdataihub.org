<template>
  <div class="flex flex-col items-center justify-center">
    <section class="relative py-5 mx-auto max-w-screen-2xl">
      <div class="absolute right-0 z-0 w-40 top-1 sm:top-10 opacity-60">
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="absolute z-0 hidden w-40 lg:block bottom-1 sm:bottom-12 right-5 opacity-60"
      >
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="container flex flex-col-reverse items-center w-full px-1 py-2 mx-auto sm:py-4 md:py-10 lg:flex-row"
      >
        <!-- text div -->
        <div
          class="flex flex-col items-center pt-5 mb-2 text-center lg:flex-grow sm:pt-0 lg:pr-24 md:pr-0 md:items-start md:text-left sm:mb-16 md:mb-0"
        >
          <h1 class="w-full mb-1 text-3xl font-black text-center sm:text-4xl">
            SODA for SPARC
          </h1>
          <h2 class="w-full mb-2 text-2xl font-medium text-center sm:text-2xl">
            Keep Calm and Curate!
          </h2>
          <p
            class="w-full mb-8 text-base leading-relaxed text-center text-black font-asap"
          >
            Your one-stop tool for curating and submitting SPARC datasets
            <br />
            <i> By SPARC investigators, for SPARC investigators </i>
          </p>
          <div class="flex justify-center w-full">
            <button
              class="items-center justify-center hidden px-6 py-2 text-lg text-white transition-all bg-black border-0 rounded sm:block focus:outline-none ring-2 ring-offset-2 ring-transparent hover:ring-pink-600 focus:ring-pink-600"
              @click="downloadSODA"
            >
              Download now
            </button>
            <a
              href="https://docs.sodaforsparc.io/"
              target="_blank"
              aria-label="SODA for SPARC Documentation"
              rel="noopener"
            >
              <button
                class="px-6 py-2 text-lg text-white transition-all bg-black rounded sm:ml-4 focus:outline-none ring-2 ring-offset-2 ring-transparent hover:ring-pink-600 focus:ring-pink-600"
              >
                Explore the docs
              </button>
            </a>
          </div>
        </div>
        <!-- image div -->
        <div class="relative z-10 py-2 lg:max-w-2xl sm:py-0">
          <div
            class="absolute left-0 z-0 w-40 lg:hidden bottom-1 sm:bottom-0 opacity-60"
          >
            <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
          </div>
          <img
            :data-blink-uuid="`2c9abf3a-ee20-4c9a-aefc-334f4e8360e6`"
            alt="SODA for SPARC app screenshot"
          />
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
      Object.assign(document.createElement("a"), {
        target: "_blank",
        href: "https://docs.sodaforsparc.io/docs/getting-started/download-soda",
      }).click();
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
