<template>
  <footer class="bg-gray-100 dark:bg-gray-800 pt-5" v-if="!isDocs">
    <div class="container px-6 py-8 max-w-screen-lg mx-auto">
      <div class="flex justify-center mb-8">
        <div>
          <div
            class="
              text-center
              font-inter
              text-2xl text-black
              dark:text-gray-50
              text-bold
              p-4
            "
          >
            <strong> Need Help? Contact Us. </strong>
          </div>
          <h1 class="text-center font-lato text-xl dark:text-gray-50 text-bold">
            11107 Roselle St, San Diego, CA 92121 | info@fairdatahub.org | +1
            (555) 555-5555
          </h1>
        </div>
      </div>

      <hr class="my-4 dark:border-gray-500" />

      <div
        class="
          container
          px-5
          py-2
          mx-auto
          flex
          items-center
          flex-col
          sm:flex-row
        "
      >
        <div
          class="
            flex
            title-font
            font-medium
            items-center
            md:justify-start
            justify-center
            text-gray-900
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="font-inter ml-3 text-xl text-black dark:text-white">
            Fair Data Hub
          </span>
        </div>

        <div
          class="
            sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0
            mt-4
            self-center
          "
        >
          <img
            class="w-40 sm:w-36"
            src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
            alt="Powered by Vercel"
          />
        </div>

        <span
          class="
            inline-flex
            sm:ml-auto sm:mt-0
            mt-4
            justify-center
            sm:justify-start
          "
        >
          <a
            href="https://www.twitter.com/NIH"
            class="
              mx-2
              text-gray-400
              dark:text-gray-50
              hover:text-gray-500
              dark:hover:text-white
            "
            aria-label="Twitter"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.twitter.com/NIH"
            class="
              mx-2
              text-gray-400
              dark:text-gray-50
              hover:text-gray-500
              dark:hover:text-white
            "
            aria-label="Twitter"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/instagram/?hl=en"
            class="
              mx-2
              text-gray-400
              dark:text-gray-50
              hover:text-gray-500
              dark:hover:text-white
            "
            aria-label="Instagram"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/california-medical-innovations-institute"
            class="
              mx-2
              text-gray-400
              dark:text-gray-50
              hover:text-gray-500
              dark:hover:text-white
            "
            aria-label="Linked In"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
          <a
            href="https://github.com/bvhpatel/SODA"
            target="_blank"
            class="
              mx-2
              text-gray-400
              dark:text-gray-50
              hover:text-gray-500
              dark:hover:text-white
            "
            aria-label="Github"
          >
            <svg
              class="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
              ></path>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  computed: {
    isDocs: function () {
      return this.$route.path.includes("sodasparc/docs");
    },
  },
};
</script>

<style></style>
