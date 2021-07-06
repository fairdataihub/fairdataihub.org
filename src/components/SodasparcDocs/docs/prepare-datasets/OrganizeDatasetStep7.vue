<template>
  <div>
    <base-docs-title :title="`Organize dataset Step 7: Preview dataset`">
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <div class="my-4">
      <p>
        This step serves as a confirmation page before SODA generates your
        dataset. You can preview your dataset organization with specified SPARC
        metadata files and specified dataset generate options. This is how your
        dataset will look once it is generated either on Pennsieve or locally on
        your computer. To edit any details from this step, simply click on the
        Edit icon next to a section. This will bring you back to the associated
        section for edits.
      </p>
      <p>
        When you are ready to generate your dataset, click the Generate button.
      </p>
    </div>

    <div class="flex justify-start mx-8 my-4 shadow-xl">
      <img
        src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Organize-dataset/preview-dataset.PNG"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizeDatasetStep7",
};
</script>

<style></style>
