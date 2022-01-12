<template>
  <div>
    <Html>
      <Head>
        <Title> Organize dataset - SODA for SPARC </Title>
      </Head>
    </Html>

    <base-docs-title :title="`Organize dataset`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle id="background"> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          All SPARC datasets must follow the top level SPARC folder structure
          imposed by the
          <a
            href="https://docs.google.com/presentation/d/1EQPn1FmANpPsFt3CguU-JOQVMMlJsNXluQAK_gb2qVg/edit#slide=id.p1"
            target="_blank"
            rel="noopener"
            class="text-blue-600 hover:underline"
          >
            SPARC Dataset Structure</a
          >. This top level folder structure is shown in the figure below. If
          your data organization doesn't follow this structure inherently, you
          can create it virtually with SODA then either generate it locally on
          your computer or directly on Pennsieve (to avoid duplicating files
          locally).
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Prepare-dataset/Specify-files/SPARC-dataset-structure.PNG?raw=true"
          alt="Overview of the top level folder structure required for all SPARC datasets (taken from the instructions prepared by the SPARC Curation Team)."
        />
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="list-none list-inside">
        <li>
          <NuxtLink
            to="/sodaforsparc/docs/organize-dataset/step-1"
            class="text-blue-600 hover:underline"
          >
            <span> Step 1: Getting started </span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/sodaforsparc/docs/organize-dataset/step-2"
            class="text-blue-600 hover:underline"
          >
            <span> Step 2: Specify high-level folders </span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/sodaforsparc/docs/organize-dataset/step-3"
            class="text-blue-600 hover:underline"
          >
            <span> Step 3: Structure dataset files </span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/sodaforsparc/docs/organize-dataset/step-4"
            class="text-blue-600 hover:underline"
          >
            <span> Step 4: Specify high-level metadata files </span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/sodaforsparc/docs/organize-dataset/step-5"
            class="text-blue-600 hover:underline"
          >
            <span> Step 5: Request manifest files </span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/sodaforsparc/docs/organize-dataset/step-6"
            class="text-blue-600 hover:underline"
          >
            <span> Step 6: Generate dataset </span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/sodaforsparc/docs/organize-dataset/step-7"
            class="text-blue-600 hover:underline"
          >
            <span> Step 7: Preview dataset </span>
          </NuxtLink>
        </li>
      </ul>

      <div class="p-parent-div">
        <p>
          Note that you can save your progress using the Save progress button
          available in the lower right corner starting from Step 3.
        </p>
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

<style scoped language="postcss">
ul {
  @apply mb-2 font-lato text-black;
}
</style>
