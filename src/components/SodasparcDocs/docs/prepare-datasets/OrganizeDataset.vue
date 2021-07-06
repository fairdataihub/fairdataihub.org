<template>
  <div>
    <base-docs-title :title="`Organize dataset`"> </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Background </base-docs-subtitle>

    <div class="p-parent-div">
      <p>
        All SPARC datasets must follow the top level SPARC folder structure
        imposed by the SPARC Dataset Structure. This top level folder structure
        is shown in the figure below. If your data organization doesn't follow
        this structure inherently, you can create it virtually with SODA then
        either generate it locally on your computer or directly on Blackfynn (to
        avoid duplicating files locally).
      </p>
    </div>

    <div class="img-parent-div">
      <img
        src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Prepare-dataset/Specify-files/SPARC-dataset-structure.PNG"
        alt="Overview of the top level folder structure required for all SPARC datasets (taken from the instructions prepared by the SPARC Curation Team)."
      />
    </div>

    <base-docs-subtitle> How to </base-docs-subtitle>

    <ul class="list-inside list-none">
      <li>Step 1: Getting started</li>
      <li>Step 2: Specify high-level folders</li>
      <li>Step 3: Structure dataset files</li>
      <li>Step 4: Specify high-level metadata files</li>
      <li>Step 5: Request manifest files</li>
      <li>Step 6: Generate dataset</li>
      <li>Step 7: Preview dataset</li>
    </ul>

    <div class="p-parent-div">
      <p>
        Note that you can save your progress using the Save progress button
        available in the lower right corner starting from Step 3.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizeDataset",
};
</script>

<style scoped language="postcss">
ul {
  @apply mb-2 font-sans text-black dark:text-white;
}
</style>
