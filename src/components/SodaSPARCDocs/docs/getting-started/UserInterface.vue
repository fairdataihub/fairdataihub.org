<template>
  <div>
    <base-docs-title :title="`User Interface`"> </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle>
      Click on the image below and watch our short video to get familiarized
      with SODA's user interface
    </base-docs-subtitle>

    <div class="flex justify-start mx-8 my-5">
      <a href="https://www.youtube.com/watch?v=Fyn9R0Tk_pU" target="_blank">
        <img src="https://img.youtube.com/vi/Fyn9R0Tk_pU/0.jpg" />
      </a>
    </div>

    <base-docs-subtitle> Notes </base-docs-subtitle>

    <ul class="list-outside bg-rose-200 list-disc ml-4">
      <li
        v-for="item in notesList"
        :key="item.content"
        v-html="item.content"
        class="font-asap text-black dark:text-white"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserInterface",
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
    };
  },
};
</script>

<style></style>
