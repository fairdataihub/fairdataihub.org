<template>
  <div>
    <base-docs-title :title="`Download SODA`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle>
        Download and Open the Application
      </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          To use SODA, first download and install the
          <a
            href="https://app.pennsieve.net/"
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600 "
            >Pennsieve Agent</a
          >.
          <span v-if="current_os === 'all'">
            Then, follow the instructions below for your specific platform:
          </span>
        </p>
      </div>

      <div v-if="current_os === 'windows' || current_os === 'all'">
        <base-docs-heading>
          Windows (developed and tested on Windows 10)
        </base-docs-heading>

        <ul class="docs-ul list-outside list-decimal">
          <li>
            <a
              :href="windows_url"
              target="_blank"
              rel="noopener"
              class="hover:underline text-blue-600  cursor-pointer"
            >
              Download the Windows installer.
            </a>
          </li>
          <li>
            Double click on the installer (.exe file), it will start the
            installation process (if there is a permission issue try to
            right-click and select "Run as administrator").
          </li>
          <li>Follow the installation instructions.</li>
          <li>
            Once the application is installed, you can run the application by
            either running the desktop shortcut, searching for "SODA" on the
            start menu, or from the installation folder.
          </li>
          <li>
            To stop the application, simply click on the cross in the top right
            corner.
          </li>
        </ul>

        <div class="p-parent-div">
          <p>
            The downloaded installer file could be deleted since it is not
            necessary to run SODA. The SODA app can be uninstalled from the
            Program manager (under Control Panel) like any other app on Windows.
          </p>
        </div>
      </div>

      <div v-if="current_os === 'macOS' || current_os === 'all'">
        <base-docs-heading>
          macOS (developed and tested on macOS Catalina 10.15)
        </base-docs-heading>

        <ul class="docs-ul list-outside list-decimal">
          <li>
            <a
              :href="macOS_url"
              target="_blank"
              rel="noopener"
              class="hover:underline text-blue-600  cursor-pointer"
            >
              Download the macOS installer.
            </a>
          </li>
          <li>
            Double-click on the installer (.dmg file) and, in the installation
            window, drag the SODA icon into the "Applications" folder. Security
            preferences may need to be changed (System Preferences>Security &
            Privacy>General Tab>"Open anyway").
          </li>
          <li>
            To stop the application, click on the red circle/button in the top
            left corner.
          </li>
        </ul>

        <div class="p-parent-div">
          <p>
            The downloaded installer could be deleted since it is not necessary
            to run SODA. To uninstall the SODA app, simply delete it from your
            computer’s "Applications" folder.
          </p>
        </div>
      </div>

      <div v-if="current_os === 'linux' || current_os === 'all'">
        <base-docs-heading>
          Ubuntu (developed and tested on Ubuntu 20.04.2 LTS)
        </base-docs-heading>

        <ul class="docs-ul list-outside list-decimal">
          <li>
            <a
              :href="linux_url"
              target="_blank"
              rel="noopener"
              class="hover:underline text-blue-600  cursor-pointer"
            >
              Download Linux AppImage.
            </a>
          </li>
          <li>
            Right-click on the downloaded file and go to the permissions tab.
          </li>
          <li>
            Click the 'Allow executing file as program' and make sure it has a
            checkmark.
          </li>
          <li>
            Double click the downloaded SODA app icon and it should open the
            app.
          </li>
          <li>
            To stop the application click on the red circle/button in the top
            left corner.
          </li>
        </ul>

        <div class="p-parent-div">
          <p>
            Since our Linux SODA app is in the AppImage format, you can move
            this file anywhere on your computer and run it. If you would like to
            move the app into the applications folder, we recommend you use the
            open-source
            <a
              href="https://app.pennsieve.net/"
              target="_blank"
              rel="noopener"
              class="hover:underline text-blue-600 "
              >AppImage Launcher</a
            >
            to organize and handle all AppImage programs for your Linux system.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",
  scrollToTop: true,
  data() {
    return {
      notesList: [
        {
          content:
            "The window size of the application frame can be easily adjusted to fit your screen by dragging the borders.",
        },
        {
          content:
            "Closing the interface will stop any on-going process (dataset organization, uploading, etc).",
        },
        {
          content:
            "Click on the document icon next to each feature's title to open the related documentation page in your browser.",
        },
        {
          content:
            "A pop-up message will appear when launching the app if a newer version is available for download.",
        },
        {
          content: `<svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="info-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="svg-inline--fa fa-info-circle fa-w-16 fa-3x h-4 inline-flex"
        >
          <path
            fill="currentColor"
            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
            class=""
            data-darkreader-inline-fill=""
            style="--darkreader-inline-fill: currentColor"
          ></path>
        </svg>
        Tooltips are used throughout the interface to provide users with
        additional information.`,
        },
      ],
      windows_url: "",
      macOS_url: "",
      linux_url: "",
      current_os: "all",
    };
  },
  methods: {
    getOS: function () {
      let userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"];

      console.log(window.navigator.platform);
      if (macosPlatforms.indexOf(platform) !== -1) {
        this.current_os = "macOS";
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        this.current_os = "all";
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        this.current_os = "windows";
      } else if (/Android/.test(userAgent)) {
        this.current_os = "all";
      } else if (/Linux/.test(platform)) {
        this.current_os = "linux";
      } else {
        this.current_os = "all";
      }
    },
    getLatestVersion: async function () {
      const res = await fetch(
        "https://api.github.com/repos/fairdataihub/SODA-for-SPARC/releases"
      );
      const data = await res.json();
      const release = data[0];
      release.assets.forEach((asset) => {
        let file_name = asset.name;
        let file_ext = file_name.split(".").pop();
        if (file_ext === "dmg") {
          this.macOS_url = asset.browser_download_url;
        }
        if (file_ext === "exe") {
          this.windows_url = asset.browser_download_url;
        }
        if (file_ext === "AppImage") {
          this.linux_url = asset.browser_download_url;
        }
      });
    },
  },
  mounted() {
    this.getLatestVersion();
    this.getOS();
  },
};
</script>

<style></style>
