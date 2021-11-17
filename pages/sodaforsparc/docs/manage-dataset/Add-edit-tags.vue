<template>
  <div>
    <base-docs-title :title="`Add edit tags`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          All SPARC datasets must have the following metadata on Pennsieve:
          subtitle, description, banner image, tags and license. This interface
          allows you to easily add, edit, and remove dataset tags. Tags are
          essentially keywords, and will make your dataset more easily
          searchable once published. Please be sure to be descriptive.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Select/confirm your Pennsieve account and dataset. If you have not
          connected your Pennsieve account with SODA yet, see
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>here</span> </NuxtLink
          >.
        </li>
        <li>
          Add, edit, or delete tags:
          <ul class="docs-ul list-outside list-disc">
            <li>
              Enter any tags you feel capture the nature of your research in the
              textbox. Once you have text for a single tag, hit 'Enter' or click off the textbox to add it.
            </li>
            <li>
              Edit existing tags by double clicking them to change their text. Hit 'Enter' ot click off the textbox to finalize the edit.
            </li>
            <li>
              Delete a tag by clicking the 'x' to the right of a given tag.
            </li>
          </ul>
        </li>
        <li>Click on the "Add Tags" button.
            <ul class="docs-ul list-outside list-disc">
            <li>
              If you already had tags you will be presented with an 'Edit Tags' button to click on instead.  
            </li>
          </ul>

        </li>

        <div class="img-parent-div">
          <img
            src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Manage-permissions/add-permissions.gif?raw=true"
          />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",
  scrollToTop: true,
};
</script>
