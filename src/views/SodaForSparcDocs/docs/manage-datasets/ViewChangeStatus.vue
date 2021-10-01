<template>
  <div>
    <base-docs-title :title="`View and change status`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          The status of a dataset is used to allow easy communication between
          SPARC investigators and the SPARC Dataset Curation Team regarding the
          progress of a dataset through the curation process. There are 12
          status options that each SPARC Dataset will go through one by one
          during the submission and curation process. Each status indicates
          which team is responsible for the step. The dataset status changes
          required from the investigators are done automatically in SODA when
          they execute the associated actions so investigators should not have
          to use this features in most cases.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Select/confirm your Pennsieve account and dataset. If you have not
          connected your Pennsieve account with SODA yet, see
          <router-link
            to="/sodaforsparc/docs/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>here</span> </router-link
          >.
        </li>
        <li>Select the desired option from the list.</li>
        <li>
          Fill in your Pennsieve "Email Address" and "Password" and click
          "Connect to Pennsieve"
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/View-change-status/view-change-status.PNG?raw=true"
        />
      </div>

      <base-docs-subtitle> Note </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          Typically, SPARC investigators should only have to change dataset
          status to one of the following options:
        </p>
      </div>

      <ul class="docs-ul list-outside list-disc">
        <li>
          "02. Work in Progress (Investigator)": Select to indicate that you are
          working on your dataset
        </li>
        <li>
          "03. Ready for Curation (Investigator)": Select to inform the SPARC
          Dataset Curation Team that your dataset is ready to be reviewed. You
          dataset will be added to the curation queue.
        </li>
        <li>
          "11. Complete, Under Embargo (Investigator)": Select to share your
          dataset with the SPARC Consortium. This will give viewer permissions
          to the SPARC Embargoed Data Sharing Group and will therefore allow any
          SPARC investigator who has signed the SPARC Non-disclosure form to see
          your data.
        </li>
        <li>
          "12. Published (Investigator)": Select this option once you have
          published your dataset. One year after the initial upload of your
          dataset, you must publish your dataset to Pennsieve Discover, which
          populates the SPARC Portal. To do this, open the dataset of interest
          on the Pennsieve webpage, click on the Settings tab on the left, and
          select Publish Dataset.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewChangeStatus",
};
</script>
