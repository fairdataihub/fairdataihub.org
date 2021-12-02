<template>
  <div>
    <base-docs-title :title="`Submit for pre publishing review`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p class="mb-3">
          One year after the dataset completion date (as per the Data
          Deliverables document), or right after publishing results from the
          dataset, whichever comes first, you must publish your dataset to
          Pennsieve Discover, which populates the SPARC Data Portal, and make it
          public.
        </p>
        <p class="mb-3">
          As per the SPARC publishing process, when ready for publishing, you
          must submit your dataset for review again to the Curation Team who
          will make a final check of your dataset and accept or reject the
          publication request. If accepted, the dataset will be published
          automatically on Pennsieve Discover by default.Otherwise, the Curation
          Team will inform you of the reasons for rejecting. While the dataset
          is under review it will become locked until the submission is
          withdrawn, rejected, or approved.
        </p>
        <p class="mb-3">
          When publishing a dataset you may choose to do so under an embargo
          that lifts at a selected time up to one year in advance. While a
          published dataset is under embargo, it is not visible to the public.
          Publishing under embargo can be useful for researchers who want to
          provide easy access to collaborators without making their dataset
          public; or to researchers who have intellectual property concerns.
        </p>
      </div>

      <base-docs-subtitle>
        How to submit a dataset for pre-publishing review
      </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Select/confirm your Pennsieve account and dataset. If you have not
          connected your Pennsieve account with SODA yet,
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>use the instructions available here</span> </NuxtLink
          >.
        </li>
        <li>
          Click on "Begin Submission". Only dataset owners can begin a
          submission.
        </li>
        <li>
          Complete all of the pre-publishing checklist items. Completed items
          will be marked with a green check. Incomplete items will be marked
          with a red cross.
          <ul class="docs-ul list-outside list-disc">
            <li>
              Click on any incomplete item text to be taken to the section of
              SODA where you can complete that item.
            </li>
            <li>
              To connect your ORCID iD to Pennsieve you will be guided through
              the ORCID OAuth flow within a new SODA window.
            </li>
          </ul>
        </li>
        <li>
          Click the "Submit" button once all checklist items are complete.
        </li>
        <li>
          Select an embargo date or choose to make your dataset available to the
          public immediately after publication. As per SPARC guidelines, you may
          select an embargo date up to one year in advance.
        </li>
      </ul>

      <video
        controls
        autoplay="true"
        src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/publishing.mp4"
      />

      <base-docs-subtitle>
        How to withdraw a dataset from pre-publishing review
      </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Confirm your Pennsieve account and select a dataset that you have
          submitted for pre-publishing review. If you have not connected your
          Pennsieve account with SODA yet,
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>use the instructions available here</span> </NuxtLink
          >.
        </li>
        <li>
          Click on "Begin Submission". Only dataset owners can withdraw a
          dataset.
        </li>
        <li>Click the "Withdraw" button.</li>
      </ul>

      <video
        controls
        autoplay="true"
        src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/withdraw.mp4"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",
  scrollToTop: true,
};
</script>
