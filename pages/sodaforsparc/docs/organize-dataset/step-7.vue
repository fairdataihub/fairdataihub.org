<template>
  <div>
    <base-docs-title :title="`Organize dataset Step 7: Preview dataset`">
    </base-docs-title>

    <div class="flex flex-col">
      <div class="p-parent-div">
        <p>
          This step serves as a confirmation page before SODA generates your
          dataset. You can preview your dataset organization with specified
          SPARC metadata files and specified dataset generate options. This is
          how your dataset will look once it is generated either on Pennsieve or
          locally on your computer. To edit any details from this step, simply
          click on the Edit icon next to a section. This will bring you back to
          the associated section for edits.
        </p>
        <p>
          When you are ready to generate your dataset, click the Generate
          button.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/preview-dataset.PNG?raw=true"
          alt="screenshot of soda"
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
