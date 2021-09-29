<template>
  <div>
    <base-docs-title :title="`Create dataset_description.xlsx`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          Under this feature, SODA lets you quickly and accurately prepare the
          dataset_description metadata file which is mandatory for all SPARC
          datasets. SODA provides a convenient interface, which is more
          intuitive than the Excel spreadsheet template. It also makes use of
          information from your dataset on Pennsieve and the SPARC Airtable
          sheet to help you populate some of the fields easily. The expected
          structure of this file, generated automatically by SODA, is explained
          in our corresponding
          <a
            href="https://github.com/bvhpatel/SODA/wiki/How-to-structure-the-dataset-description-metadata-file"
            target="_blank"
            rel="nofollow"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            "How to"</a
          >
          page if you would like to learn about it.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>
      <div class="p-parent-div">
        <p>
          First, we suggest to add/edit your Airtable account and SPARC award(s)
          as instructed
          <router-link
            to="/sodaforsparc/docs/Connect-your-Airtable-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>here</span>
          </router-link>
          then confirm.
        </p>
        <p>
          The subsequent interface divides the dataset description file into
          five convenient sections to facilitate your task. Go through them
          successively and populate the various fields as indicated (mandatory
          fields are marked with a start in the interface):
        </p>
      </div>

      <base-docs-heading
        >Dataset Info (high-level information about your
        dataset):</base-docs-heading
      >

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Name: Descriptive title for the dataset. Since this field should match
          exactly with your dataset on Pennsieve, SODA lets you select it from
          your list of Pennsieve datasets (see
          <router-link
            to="/sodaforsparc/docs/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>"Connect to your Pennsieve account"</span>
          </router-link>
          section).
        </li>
        <li>
          Description: Brief description of the study and the dataset. This is
          populated automatically from your dataset subtitle on Pennsieve for
          your convenience (see
          <router-link
            to="/sodaforsparc/docs/Add-edit-description"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span> this section</span>
          </router-link>
          to add a description).
        </li>
        <li>
          Keywords: A set of 3-5 keywords (other than those used in the name and
          description) that will help in searching your dataset once published
        </li>
        <li>
          Number of subjects: The number of unique subjects in this dataset,
          should match the subjects metadata file. Must be greater or equal to
          1.
        </li>
        <li>
          Number of samples: The number of unique samples in this dataset,
          should match the samples metadata file. Set to zero if there are no
          samples.
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Prepare-metadata/Dataset_description/dataset-info.gif"
        />
      </div>

      <base-docs-heading
        >Award Info (information about the contributors to your
        dataset):</base-docs-heading
      >

      <ul class="docs-ul list-outside list-decimal">
        <li>
          SPARC Award: Select the SPARC award associated with your dataset
        </li>
        <li>
          Other funding sources: Specify other funding sources, if any. Hit
          'Enter' on your keyboard after typing each. Leave empty if none.
        </li>
        <li>
          Acknowledgments: Specify any acknowledgments beyond funding and
          contributors. Leave empty if none.
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Prepare-metadata/Dataset_description/award-info.gif"
        />
      </div>

      <base-docs-heading>
        Contributor Info (information about the contributors to your dataset):
      </base-docs-heading>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Provide information about any contributor to the dataset. Note that
          the "Contributor" list is compiled from the SPARC Airtable sheet based
          on the SPARC award selected. Select one Contributor to get the ORCID
          ID, Contributor Affiliation, and Contributor Role populated
          automatically (if specified in the SPARC Airtable Sheet). Select
          "Other contributors" in the "Contributors" dropdown list if you'd like
          to enter a Contributor name manually (although we suggest entering
          them directly in the SPARC Airtable - restart SODA to see them in the
          list).
        </li>
        <li>
          Check "Is Contact person?" if the contributor is a contact person for
          the dataset. At least one and only one of the contributors should be
          the contact person.
        </li>
        <li>
          Click "Add" to add the contributor to SODA's contributor table. Each
          contributor added to the table will be added to the dataset
          description file when it is generated.
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Prepare-metadata/Dataset_description/contributor-info-1-1.gif"
        />
      </div>

      <base-docs-heading>
        Article(s) and protocol(s) (information about article(s) and protocol(s)
        related to this dataset):
      </base-docs-heading>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Link type: Select the nature of the link among
          <ul class="docs-ul list-outside list-disc">
            <li>
              Protocol URL or DOI: URLs (if still private) / DOIs (if public) of
              protocols from protocols.io related to this dataset
            </li>
            <li>
              Originating Article DOI: DOIs of published articles that were
              generated from this dataset
            </li>
            <li>
              Additional links: URLs of additional resources used by this
              dataset (e.g., a link to a code repository)
            </li>
          </ul>
        </li>
        <li>Link: Enter the link</li>
        <li>
          Link description: Optionally provide a short description of the link.
        </li>
        <li>
          Click on "Add" to register a specified link to SODA's link table. All
          links and descriptions added to the table will be included in your
          dataset description file when it is generated.
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Prepare-metadata/Dataset_description/link-info-1.gif"
        />
      </div>

      <base-docs-heading>
        Completeness Info (information about potential relation with other
        dataset(s))
      </base-docs-heading>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Completeness of dataset: Is the data set as uploaded complete or is it
          part of an ongoing study? Select "hasNext" to indicate that you expect
          more data on different subjects as a continuation of this study.
          Select “hasChildren” to indicate that you expect more data on the same
          subjects or samples derived from those subjects. Leave empty if none.
        </li>
        <li>
          Parent dataset(s): If this is a part of a larger dataset, or
          references subjects or samples from a parent dataset, select the prior
          dataset. You need only the last dataset, not all datasets. If samples
          and subjects are from multiple parent datasets please select them all.
          Leave empty if none.
        </li>
        <li>
          Title for a complete dataset: Give a provisional title for the entire
          dataset. Leave empty if not applicable.
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Prepare-metadata/Dataset_description/completeness-info-1.gif"
        />
      </div>

      <base-docs-heading>
        After you complete all steps, click on "Generate" to generate your
        dataset description file. A warning message may show up if any mandatory
        fields are missing. You may decide to go back and address the issues or
        generate the file anyway (and address the issues later).
      </base-docs-heading>

      <base-docs-subtitle> Note </base-docs-subtitle>

      <ul class="docs-ul list-outside list-disc">
        <li>
          In the contributors' table, you can drag and drop rows to organize
          contributors in the order that they should appear in the
          dataset_description file. You can also remove one with the delete
          button.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateDatasetDescriptionxlsx",
};
</script>
