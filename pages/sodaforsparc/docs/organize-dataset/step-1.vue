<template>
  <div>
    <base-docs-title :title="`Organize dataset Step 1: Getting started`">
    </base-docs-title>

    <div class="flex flex-col">
      <div class="p-parent-div">
        <p>
          Select between the following 4 options to get started with your
          dataset organization process with SODA:
        </p>
      </div>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          <strong> Prepare a new dataset: </strong>
          Select this option if you want to start organizing and curating a new
          dataset. SODA will take you step-by-step through the curation process
          to organize your dataset, adding your metadata files, and generating
          your dataset onto Pennsieve.
        </li>
        <li>
          <strong>
            Continue with a previously initiated dataset in SODA:
          </strong>
          Select this option if you previously saved your progress in SODA and
          would like to continue working on it.
        </li>
        <li>
          <strong> Continue working on an existing local dataset: </strong>
          Select this option if you have a local dataset stored on your computer
          that you want to continue working on. Existing high-level SPARC
          folders and metadata files will be automatically extracted and loaded
          into SODA so you can continue working on them.
        </li>
        <li>
          <strong> Continue working on an existing Pennsieve dataset: </strong>
          Select this option if you have an existing dataset on Pennsieve that
          you want to continue working on. Existing high-level SPARC folders and
          metadata files will be automatically extracted and loaded into SODA so
          you can continue working on them.
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/getting-started.PNG?raw=true"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",
  scrollToTop: true,
};
</script>
