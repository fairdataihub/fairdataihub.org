<template>
  <div>
    <base-docs-title :title="`Upload a local dataset to Pennsieve`">
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Background </base-docs-subtitle>

    <div class="my-4">
      <p>
        With this feature, you can upload a data from your computer on to a
        Pennsieve dataset (with folder structure preserved).
      </p>
    </div>

    <base-docs-subtitle> How to </base-docs-subtitle>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>
        Select/confirm your Pennsieve account and dataset. If you have not
        connected your Pennsieve account with SODA yet, see here.
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
</template>

<script>
export default {
  name: "UploadLocalDatasetPennsieve",
};
</script>

<style></style>
