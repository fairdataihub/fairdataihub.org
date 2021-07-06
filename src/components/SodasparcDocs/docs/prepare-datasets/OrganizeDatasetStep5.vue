<template>
  <div>
    <base-docs-title :title="`Organize dataset Step 5: Request manifest files`">
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <div class="p-parent-div">
      <p>
        Manifest files are mandatory for all datasets. To learn more about this
        metadata file we refer to our corresponding "How to" page.
      </p>
      <p>
        To generate and include manifest files automatically, simply toggle the
        option to "Yes". Then, when you generate the dataset (Step 6), a
        "manifest.xlsx" file will be added to each high-level SPARC folder with
        the "filename", "timestamp", and "file type" fields automatically
        populated in the correct format while the "description" and "Additional
        Metadata" fields will be filled when specified during Step 3. Note that
        any existing manifest files at the target location for generating the
        dataset will be replaced.
      </p>
    </div>

    <div class="img-parent-div">
      <img
        src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Organize-dataset/request-manifests.PNG"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizeDatasetStep5",
};
</script>
