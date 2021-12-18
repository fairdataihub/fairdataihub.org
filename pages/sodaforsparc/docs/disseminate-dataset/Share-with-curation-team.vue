<template>
  <div>
    <base-docs-title :title="`Share with curation team`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          Sharing your dataset with the Curation Team must be done only when
          your dataset is ready to be reviewed. Sharing with the SPARC Curation
          Team will give them "manager" permissions, which is necessary for them
          to review your dataset, and set the dataset status to "03. Ready for
          Curation" (see our
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/View-and-change-status"
            class="hover:underline text-blue-600 "
          >
            <span> documentation on dataset status</span> </NuxtLink
          >) thus adding the dataset to the Curation Team's queue for review. It
          is then highly recommended to not make any changes to your dataset.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Select/confirm your Pennsieve account and dataset. If you have not
          connected your Pennsieve account with SODA yet,
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 "
          >
            <span>use the instructions available here</span> </NuxtLink
          >.
        </li>
        <li>
          Click on 'Share now' to add your dataset to the Curation team's review
          queue.
        </li>
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
