<template>
  <div>
    <base-docs-title :title="`How to get your Data Deliverables document`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="my-2">
        <p class="font-asap text-black dark:text-white mb-2">
          The milestones and associated datasets as agreed between awardees and
          SPARC are summarized in a document called Data Deliverables document.
          This documents lists, among other, the milestones of the award, the
          expected datasets to be associated with each milestone, and the
          tentative submission date for each of these datasets. The awardee are
          then expected to submit each dataset by the agreed submission date.
          When a dataset is submitted by the awardees, the milestone and
          submission date associated with it must be included in the
          <span class="span-content print:text-sm print:dark:text-black">
            <NuxtLink
              to="/sodaforsparc/docs/prepare-metadata/Create-submission-xlsx"
              class="
                hover:underline
                text-blue-600
                dark:text-blue-400
                print:text-sm print:dark:text-black
              "
            >
              <span
                class="
                  font-asap
                  print:text-sm print:text-black print:dark:text-black
                "
              >
                submission
              </span>
            </NuxtLink>
          </span>
          metadata file. In SODA, we provide you the option to import your Data
          Deliverables document such that you can easily prepare you submission
          metadata file without errors.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          To obtain the Data Deliverables document associated with your award,
          simply ask your PI or grant manager.
          <a
            href="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/src/file_templates/DataDeliverablesDocument-template.docx?raw=true"
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            Download a template
          </a>
          of the Data Deliverables document to see the expected format. A
          screenshot of a sample Dataset Deliverables document is provided
          below. Most importantly, it should be in the docx format and at least
          one table should be included with these exact three headers: 'Related
          milestone, aim, or task', 'Description of data', 'Expected date of
          completion'." If any of these headers need to be modified, make sure
          to edit them before importing the file in SODA.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/How%20to/submission/data-deliverables-doc-example.PNG?raw=true"
          alt="screenshot of sample Dataset Deliverables document"
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
