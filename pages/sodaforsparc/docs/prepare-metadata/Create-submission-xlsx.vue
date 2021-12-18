<template>
  <div>
    <base-docs-title :title="`Create submission.xlsx`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          Under this feature, SODA lets you rapidly prepare the submission
          metadata file for your dataset. This feature is designed to avoid
          commonly found errors when preparing this file. The expected structure
          of this file, generated automatically by SODA, is explained in our
          corresponding
          <NuxtLink
            to="/sodaforsparc/docs/how-to/How-to-structure-the-submission-metadata-file"
            class="hover:underline text-blue-600 "
          >
            <span> "How to"</span>
          </NuxtLink>
          page if you would like to learn about it.
        </p>
        <p>
          SODA makes use of two resources to help you prepare the submission
          file rapidly and without errors:
        </p>

        <ul class="docs-ul list-outside list-disc">
          <li>
            <NuxtLink
              to="/sodaforsparc/docs/prepare-metadata/Connect-your-Airtable-account-with-SODA"
              class="hover:underline text-blue-600 "
            >
              <span>The SPARC Airtable sheet</span>
            </NuxtLink>
          </li>
          <li>
            The Data Deliverables document associated with your award. This
            document list the milestones and associated datasets as agreed
            between awardees and SPARC. In the submission metadata file, it is
            necessary to provide milestone and milestone completion dates
            associated with your dataset exactly as specified in the Data
            Deliverables document. This document is usually kept by the PI of
            the SPARC award or the award manager. Learn more about your
            <NuxtLink
              to="/sodaforsparc/docs/how-to/How-to-get-your-data-deliverables-document"
              class="hover:underline text-blue-600 "
            >
              <span>Data Deliverables document</span> </NuxtLink
            >.
          </li>
        </ul>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          You can start by either Creating a submission file from scratch with
          SODA or Continue working on an existing submission.xlsx file.
        </li>
        <li>
          If you want to continue working on an existing submission.xlsx file,
          you will be prompted to either import it from your computer, or
          specify a Pennsieve dataset where the file is currently located. SODA
          will load information from such submission file for further edits at
          your convenience.
        </li>
        <li>
          Enter the SPARC Award number. <br /><strong>Note: </strong>SODA can
          help retrieve your SPARC award number if you are connected to the
          SPARC Airtable sheet.
          <NuxtLink
            to="/sodaforsparc/docs/prepare-metadata/Connect-your-Airtable-account-with-SODA"
            class="hover:underline text-blue-600 "
          >
            <span> Instructions are provided here.</span>
          </NuxtLink>
        </li>
        <li>
          Enter the milestone(s) for this submission. Enter "Not specified in
          the Data Deliverables document" if this dataset isn't associated with
          any milestone initially planned.<br />
          <strong>Note: </strong>Click on "Click here to import milestones from
          my Data Deliverables document" to import your Data Deliverable
          document. SODA will automatically extract milestones and associated
          information which will be used to help you prepare the submission
          metadata file. You will have to do this only once and it will be then
          remembered by SODA during subsequent uses. Note that the information
          from your Data Deliverables document will be saved locally on your
          computer so only visible to you.
        </li>
        <li>
          Enter the date associated with this milestone or select from a
          dropdown of milestone(s) if a Data Deliverable document is imported.
        </li>
        <li>
          Review and click on "Generate" to generate your submission file. You
          have the options to generate and save it on your computer or generate
          and upload it to Pennsieve. The generated file will be ready to be
          included in your dataset.
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Prepare-metadata/Submission/submission.gif?raw=true"
          alt="screenshot of soda"
        />
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
