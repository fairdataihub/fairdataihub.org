<template>
  <div>
    <base-docs-title :title="`Submit for pre publishing review`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          One year after the dataset completion date (as per the Data
          Deliverables document) or right after publishing results from the
          dataset, whichever comes first, you must publish your dataset to
          Pennsieve Discover, which populates the SPARC Data Portal, and make it
          public.
        </p>
        <p>
          As per the SPARC publishing process, when ready for publishing, you
          must submit your dataset for review again to the Curation Team who
          will make a final check of your dataset and accept or reject the
          publication request. If accepted, the dataset will be published
          automatically on Pennsieve Discover. Otherwise, the Curation Team will
          inform you of the reasons for rejecting.
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
          Click on "Submit". The dataset could also be withdrawn from review by
          clicking on "Withdraw from review".
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
