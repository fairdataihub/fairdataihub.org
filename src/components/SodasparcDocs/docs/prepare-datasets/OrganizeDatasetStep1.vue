<template>
  <div>
    <base-docs-title :title="`Organize dataset Step 1: Getting started`">
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <div class="my-4">
      <p>
        Select between the following 4 options to get started with your dataset
        organization process with SODA:
      </p>
    </div>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>
        <strong> Prepare a new dataset: </strong>
        Select this option if you want to start organizing and curating a new
        dataset. SODA will take you step-by-step through the curation process to
        organize your dataset, adding your metadata files, and generating your
        dataset onto Pennsieve.
      </li>
      <li>
        <strong> Continue with a previously initiated dataset in SODA: </strong>
        Select this option if you previously saved your progress in SODA and
        would like to continue working on it.
      </li>
      <li>
        <strong> Continue working on an existing local dataset: </strong>
        Select this option if you have a local dataset stored on your computer
        that you want to continue working on. Existing high-level SPARC folders
        and metadata files will be automatically extracted and loaded into SODA
        so you can continue working on them.
      </li>
      <li>
        <strong> Continue working on an existing Pennsieve dataset: </strong>
        Select this option if you have an existing dataset on Pennsieve that you
        want to continue working on. Existing high-level SPARC folders and
        metadata files will be automatically extracted and loaded into SODA so
        you can continue working on them.
      </li>
    </ul>

    <div class="flex justify-start mx-8 my-4 shadow-xl">
      <img
        src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Organize-dataset/getting-started.PNG"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizeDatasetStep1",
};
</script>

<style></style>
