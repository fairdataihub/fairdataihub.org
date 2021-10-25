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
              font-inter font-black
              text-3xl
              sm:text-4xl
              w-full
              mb-1
              text-center
              dark:text-gray-50
            "
          >
            SODA for COVID-19 Research
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
            <!-- Keep Calm and Curate! -->
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
            Your one-stop tool for rapidly organizing and sharing COVID-19
            research data
            <br />
            <i> Help the fight against the pandemic with your data </i>
          </p>
          <div class="w-full flex justify-center">
            <a
              href="https://github.com/fairdataihub/SODA-for-COVID-19-Research"
              target="_blank"
            >
              <button
                class="
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
              >
                Explore
              </button>
            </a>
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
            <img
              src="~/assets/backgrounds/dot-grid-grey.svg"
              alt="Grey grid"
            />
          </div>
          <!-- <v-lazy-image
            alt="SODA for SPARC logo"
            src="https://i.ibb.co/HCxy4JH/soda-app-macos.png"
            src-placeholder="https://i.ibb.co/KXN8cqX/soda-app-macos-min.png"
          /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-full w-full"
            viewBox="0 0 512 512"
          >
            <g>
              <g>
                <circle
                  cx="319.528"
                  cy="256"
                  fill="#95d6a4"
                  r="184.972"
                  data-original="#95D6A4"
                  class="active-path"
                  style="fill: #e33b3b"
                  data-old_color="#95d6a4"
                />
                <path
                  d="m319.528 71.029c-4.682 0-9.322.178-13.917.52 95.656 7.115 171.055 86.976 171.055 184.451s-75.399 177.336-171.055 184.452c4.595.342 9.235.52 13.917.52 102.157-.001 184.972-82.815 184.972-184.972s-82.815-184.971-184.972-184.971z"
                  fill="#78c2a4"
                  data-original="#78C2A4"
                  class=""
                  style="fill: #fb5252"
                  data-old_color="#78c2a4"
                />
                <circle
                  cx="319.528"
                  cy="256"
                  fill="#f4fbff"
                  r="142.033"
                  data-original="#F4FBFF"
                  class=""
                  style="fill: #f4fbff"
                />
                <path
                  d="m319.528 113.967c-4.321 0-8.594.204-12.817.582 72.435 6.48 129.215 67.33 129.215 141.451s-56.78 134.97-129.215 141.451c4.223.377 8.496.582 12.817.582 78.443 0 142.033-63.59 142.033-142.032 0-78.444-63.59-142.034-142.033-142.034z"
                  fill="#daf1f4"
                  data-original="#DAF1F4"
                  class=""
                />
                <g>
                  <path
                    d="m38.872 149.21h79.098c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-79.098c-4.142 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m115.258 185.317h-31.246c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h31.246c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m7.5 237.327h76.512c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-76.512c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m125.47 370.289c0-4.143-3.358-7.5-7.5-7.5h-79.098c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h79.098c4.142 0 7.5-3.357 7.5-7.5z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m115.258 311.683h-31.246c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h31.246c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m91.512 282.173c0-4.143-3.358-7.5-7.5-7.5h-76.512c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h76.512c4.142 0 7.5-3.357 7.5-7.5z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m319.529 165.83c4.143 0 7.5-3.357 7.5-7.5v-11.448c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v11.448c0 4.143 3.357 7.5 7.5 7.5z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m401.99 173.538c-2.93-2.928-7.678-2.928-10.607 0l-8.095 8.095c-2.929 2.93-2.929 7.678 0 10.607 2.931 2.929 7.678 2.928 10.607 0l8.095-8.095c2.928-2.929 2.928-7.677 0-10.607z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m417.199 248.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h11.447c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m393.895 319.759c-2.93-2.928-7.678-2.928-10.607 0-2.929 2.93-2.929 7.678 0 10.607l8.095 8.095c2.931 2.929 7.678 2.928 10.607 0 2.929-2.93 2.929-7.678 0-10.607z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m312.029 353.67v11.447c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-11.447c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m245.162 319.759-8.095 8.095c-2.929 2.93-2.929 7.678 0 10.607 2.93 2.929 7.678 2.928 10.606 0l8.095-8.095c2.929-2.93 2.929-7.678 0-10.607-2.928-2.928-7.677-2.928-10.606 0z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m210.411 248.5c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h11.448c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m255.769 181.633-8.095-8.095c-2.929-2.928-7.678-2.928-10.606 0-2.929 2.93-2.929 7.678 0 10.607l8.095 8.095c2.93 2.929 7.678 2.928 10.606 0 2.929-2.929 2.929-7.677 0-10.607z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m359.859 256c0-4.143-3.357-7.5-7.5-7.5h-25.33v-55.684c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v63.184c0 4.143 3.357 7.5 7.5 7.5h32.83c4.142 0 7.5-3.357 7.5-7.5z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m461.741 254.762c4.135-.251 7.283-3.806 7.032-7.94-4.771-78.703-70.327-140.354-149.245-140.354-82.452 0-149.532 67.08-149.532 149.533 0 82.452 67.08 149.532 149.532 149.532 73.869 0 136.9-54.122 147.865-127.157.615-4.096-2.207-7.915-6.304-8.53-4.086-.613-7.915 2.206-8.53 6.304-9.85 65.614-66.506 114.384-133.031 114.384-74.181 0-134.532-60.351-134.532-134.532s60.351-134.533 134.532-134.533c71.001 0 129.98 55.461 134.272 126.263.25 4.132 3.802 7.27 7.941 7.03z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                  <path
                    d="m319.528 63.529c-26.381 0-52.228 5.473-76.018 15.708h-132.329c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h104.113c-14.077 9.06-27.036 19.988-38.462 32.604-2.78 3.069-2.546 7.812.524 10.593 3.071 2.781 7.812 2.546 10.594-.524 33.602-37.102 81.561-58.381 131.578-58.381 97.858 0 177.472 79.613 177.472 177.471 0 97.857-79.613 177.471-177.472 177.471-97.858 0-177.471-79.613-177.471-177.471 0-34.268 9.789-67.528 28.307-96.186 2.248-3.479 1.25-8.121-2.229-10.369-3.479-2.247-8.121-1.251-10.37 2.229-20.09 31.088-30.708 67.163-30.708 104.326 0 67.766 35.206 127.458 88.285 161.763h-104.16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h132.225c23.36 10.099 49.097 15.708 76.122 15.708 106.128 0 192.471-86.342 192.471-192.471s-86.343-192.471-192.472-192.471z"
                    data-original="#000000"
                    class=""
                    style="fill: #000000"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SodaForCovidHerosection",
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
        "https://api.github.com/repos/fairdataihub/SODA-for-COVID-19-Research/releases"
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
