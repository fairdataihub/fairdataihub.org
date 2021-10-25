<template>
  <div>
    <base-docs-title
      :title="`Organize dataset Step 4: Specify high level metadata files`"
    >
    </base-docs-title>

    <div class="flex flex-col">
      <div class="p-parent-div">
        <p>
          Click on the applicable panel to include the high-level metadata files
          of your choice. Note that submission, dataset_description, and
          subjects files are mandatory for all datasets while the others are
          optional.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step4-metadata-files.gif?raw=true"
        />
      </div>

      <div class="p-parent-div">
        <p>
          <strong> <i> Note</i></strong
          >: If you start with an existing local or Pennsieve dataset that has
          existing SPARC metadata files, these files will be automatically
          extracted and loaded here. Replace these existing files by uploading
          new ones or simply remove them from this step if required.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",
};
</script>