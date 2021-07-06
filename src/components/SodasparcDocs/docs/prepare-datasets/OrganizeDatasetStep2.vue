<template>
  <div>
    <base-docs-title
      :title="`Organize dataset Step 2: Specify high level folders`"
    >
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <div class="my-4">
      <p>
        Select the high-level folder(s) to be included in your dataset. Refer to
        the description provided in the figure here about the content of each
        folder to determine which folder you need for your dataset. A high-level
        folder can only be included from Step 2 and removed from Step 3. You can
        always come back to this step to include more folders. If you started
        with an existing dataset (local or Pennsieve), any high-level folder
        included in that dataset will be automatically selected.
      </p>
    </div>

    <div class="flex justify-start mx-8 my-4 shadow-xl">
      <img
        src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Organize-dataset/high-level-folders-1.gif"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizeDatasetStep2",
};
</script>

<style></style>
