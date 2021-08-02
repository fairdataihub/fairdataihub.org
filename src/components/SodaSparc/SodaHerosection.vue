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
          sm:py-4
          md:py-10
          w-full
          flex-col-reverse flex-col
          md:flex-row
          items-center
        "
      >
        <!-- text div -->
        <div
          class="
            lg:flex-grow lg:pr-24
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
              font-inter font-black
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
              font-inter
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
                bg-primary
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
                  text-white
                  bg-primary
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
        <div class="lg:max-w-lg py-2 sm:py-0">
          <!-- <img
            class="object-cover object-center rounded"
            alt="SODA for SPARC logo"
            src="https://github.com/bvhpatel/SODA/raw/master/src/assets/img/logo-can1024-grey-circle.png"
          /> -->
          <img
            class="
              object-cover object-center
              rounded
              sm:h-36
              md:h-56
              lg:h-80
              sm:w-36
              md:w-56
              lg:w-80
              mx-auto
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

<style scoped type="text/css">
.st0 {
  opacity: 0.85;
  fill-opacity: 0;
  enable-background: new;
}
.st1 {
  fill: #e8e8e8;
  fill-opacity: 0.9804;
  stroke: #12716d;
  stroke-width: 11.3386;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 12.5008;
}
.st2 {
  fill: none;
  stroke: #13716d;
  stroke-width: 7.3769;
  stroke-linejoin: round;
  stroke-opacity: 0.9922;
}
.st3 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #13716d;
  fill-opacity: 0.9922;
  stroke: #13716d;
  stroke-width: 13.7862;
  stroke-linejoin: round;
  stroke-miterlimit: 12.5008;
  stroke-opacity: 0.9922;
}
.st4 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #258193;
  stroke: #258193;
  stroke-width: 7.3945;
  stroke-miterlimit: 12.5008;
}
.st5 {
  fill: #13716d;
  stroke: #13716d;
  stroke-width: 2.8;
  stroke-opacity: 0.9922;
}
.st6 {
  fill: #13716d;
  fill-opacity: 0.9922;
  stroke: #13716d;
  stroke-width: 1.0332;
  stroke-linejoin: round;
  stroke-opacity: 0.9922;
}
.st7 {
  clip-path: url(#SVGID_2_);
  fill: #13716d;
  fill-opacity: 0.9922;
  stroke: #13716d;
  stroke-width: 2.8731;
  stroke-linejoin: round;
}
.st8 {
  fill: none;
  stroke: #13716d;
  stroke-width: 23.2139;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.st9 {
  fill: none;
  stroke: #13716d;
  stroke-width: 19.3902;
  stroke-miterlimit: 12.5008;
  stroke-opacity: 0.9922;
}
</style>
