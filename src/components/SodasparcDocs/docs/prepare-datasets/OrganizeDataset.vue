<template>
  <div>
    <base-docs-title :title="`Organize dataset`"> </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle id="background"> Background </base-docs-subtitle>

    <div class="p-parent-div">
      <p>
        All SPARC datasets must follow the top level SPARC folder structure
        imposed by the
        <a
          href="https://docs.google.com/presentation/d/1EQPn1FmANpPsFt3CguU-JOQVMMlJsNXluQAK_gb2qVg/edit#slide=id.p1"
          target="_blank"
          rel="nofollow"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          SPARC Dataset Structure</a
        >. This top level folder structure is shown in the figure below. If your
        data organization doesn't follow this structure inherently, you can
        create it virtually with SODA then either generate it locally on your
        computer or directly on Blackfynn (to avoid duplicating files locally).
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
      <li>
        <router-link
          to="/sodasparc/docs/Organize-dataset/step-1"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          <span> Step 1: Getting started </span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/sodasparc/docs/Organize-dataset/step-2"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          <span> Step 2: Specify high-level folders </span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/sodasparc/docs/Organize-dataset/step-3"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          <span> Step 3: Structure dataset files </span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/sodasparc/docs/Organize-dataset/step-4"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          <span> Step 4: Specify high-level metadata files </span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/sodasparc/docs/Organize-dataset/step-5"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          <span> Step 5: Request manifest files </span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/sodasparc/docs/Organize-dataset/step-6"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          <span> Step 6: Generate dataset </span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/sodasparc/docs/Organize-dataset/step-7"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          <span> Step 7: Preview dataset </span>
        </router-link>
      </li>
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
