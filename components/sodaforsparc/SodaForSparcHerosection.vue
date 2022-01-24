<template>
  <div class="flex flex-col items-center justify-center">
    <section class="relative mx-auto max-w-screen-2xl py-5">
      <div class="absolute right-0 top-1 z-0 w-40 opacity-60 sm:top-10">
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="absolute bottom-1 right-5 z-0 hidden w-40 opacity-60 sm:bottom-12 lg:block"
      >
        <img src="~/assets/backgrounds/dot-grid-grey.svg" alt="Grey grid" />
      </div>
      <div
        class="container mx-auto flex w-full flex-col-reverse items-center px-1 py-2 sm:py-4 md:py-10 lg:flex-row"
      >
        <!-- text div -->
        <div
          class="mb-2 flex flex-col items-center pt-5 text-center sm:mb-16 sm:pt-0 md:mb-0 md:items-start md:pr-0 md:text-left lg:flex-grow lg:pr-24"
        >
          <h1 class="mb-1 w-full text-center text-3xl font-black sm:text-4xl">
            SODA for SPARC
          </h1>
          <h2 class="mb-2 w-full text-center text-2xl font-medium sm:text-2xl">
            Keep Calm and Curate!
          </h2>
          <p
            class="mb-8 w-full text-center font-asap text-base leading-relaxed text-black"
          >
            Your one-stop tool for curating and submitting SPARC datasets
            <br />
            <i> By SPARC investigators, for SPARC investigators </i>
          </p>
          <div class="flex w-full justify-center">
            <button
              class="hidden items-center justify-center rounded border-0 bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600 sm:block"
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
                class="rounded bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600 sm:ml-4"
              >
                Explore the docs
              </button>
            </a>
            <NuxtLink
              to="/sodaforsparc/docs/getting-started/User-Interface"
              class=""
            >
              <button
                class="rounded bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600 sm:ml-4"
              >
                Explore the OLD docs
              </button>
            </NuxtLink>
          </div>
        </div>
        <!-- image div -->
        <div class="relative z-10 py-2 sm:py-0 lg:max-w-2xl">
          <div
            class="absolute left-0 bottom-1 z-0 w-40 opacity-60 sm:bottom-0 lg:hidden"
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
