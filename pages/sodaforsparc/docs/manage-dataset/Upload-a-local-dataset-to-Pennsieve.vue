<template>
  <div>
    <base-docs-title :title="`Upload a local dataset to Pennsieve`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="my-4">
        <p class="font-asap text-black dark:text-white mb-2">
          With this feature, you can upload a data from your computer on to a
          Pennsieve dataset (with folder structure preserved).
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Select/confirm your Pennsieve account and dataset. If you have not
          connected your Pennsieve account with SODA yet, see
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>here</span> </NuxtLink
          >.
        </li>
        <li>
          Click on "Select a folder" and select the local dataset folder in the
          navigation window.
        </li>
        <li>
          Click on "Upload dataset". The progress bar will indicate the upload
          progress until it is completed.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",scrollToTop: true,
};
</script>