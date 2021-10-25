<template>
  <div>
    <base-docs-title
      :title="`Organize dataset Step 2: Specify high level folders`"
    >
    </base-docs-title>

    <div class="flex flex-col">
      <div class="p-parent-div">
        <p>
          Select the high-level folder(s) to be included in your dataset. Refer
          to the description provided in the figure
          <NuxtLink
            to="/sodaforsparc/docs/organize-dataset#background"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span> here</span>
          </NuxtLink>
          about the content of each folder to determine which folder you need
          for your dataset. A high-level folder can only be included from Step 2
          and removed from Step 3. You can always come back to this step to
          include more folders. If you started with an existing dataset (local
          or Pennsieve), any high-level folder included in that dataset will be
          automatically selected.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/high-level-folders-1.gif?raw=true"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",
};
</script>