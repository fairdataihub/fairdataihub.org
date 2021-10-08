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
      <ul class="docs-ul list-outside list-decimal">
        <li>
          You can start by either Creating a dataset_description.xlsx file from scratch with SODA or Continue working on an existing dataset_description.xlsx file.
        </li>
        <li>
          The subsequent interface divides the dataset description file into six convenient sections to facilitate your task. Go through them successively and populate the various fields as indicated:
        </li>
      </ul>
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
          Dataset type: The type of this dataset, specifically whether it is experimental or computational.
        </li>
        <li>
          Keywords: A set of 3-5 keywords (other than those used in the name and
          description) that will help in searching your dataset once published
        </li>
      </ul>

      <base-docs-heading
        >Participant Info (information about the subjects or samples of your dataset):</base-docs-heading
      >
      <ul class="docs-ul list-outside list-decimal">
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

      <base-docs-heading
        >Study Info (high-level information about your
        experiment or study):</base-docs-heading
      >
      <ul class="docs-ul list-outside list-decimal">
        <li>
        Study organ system: The major organ systems related to this study.
        </li>
        <li>
        Study approach: The experimental approach or approaches taken in this study.
        </li>
        <li>
        Study technique: The experimental techniques used in this study.
        </li>
        <li>
        Study purpose: A description of the study purpose for the structured abstract.
        </li>
        <li>
        Study data collection: A description of the study data collection process for this dataset. Used to generate the structured abstract.
        </li>
        <li>
        Study primary conclusion: A description of the primary conclusion drawn from the study for the structured abstract.
        </li>
      </ul>

      <base-docs-heading
        >Award and Contributor Info (information about the SPARC award and the contributors to your
        dataset):</base-docs-heading
      >

      <ul class="docs-ul list-outside list-decimal">
        <li>
          <strong>SPARC Award associated with this dataset</strong>: You can either type the SPARC award number or have SODA retrieve your SPARC award and its contributor information by connecting SODA with your Airtable account. Instructions are provided <router-link
            to="/sodaforsparc/docs/Connect-your-Airtable-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          ><span>here.</span>
        </router-link>
        </li>
        <li>
          Click on <strong>Add a contributor</strong> to start adding contributors to your dataset_description file.
          <ul class="docs-ul list-outside list-disc">
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
              Check "Corresponding Author" if the contributor is a contact person/corresponding author for
              the dataset. At least one and only one of the contributors should be
              the corresponding author.
            </li>
            <li>
              Click "Add contributor" to add the contributor to SODA's contributor table. Each
              contributor added to the table will be added to the dataset
              description file when it is generated.
            </li>
            </ul>
        </li>
      </ul>
      <div class="img-parent-div">
        <img
          src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Prepare-metadata/Dataset_description/contributor-info-1-1.gif"
        />
      </div>

      <base-docs-heading>
      Related Information: protocol, paper, dataset, etc. :
      </base-docs-heading>

      <ul class="docs-ul list-outside list-decimal">
        <li> Click <strong>Add a protocol</strong> to add a protocol.
          <ul class="docs-ul list-outside list-disc">
            <li>
              Protocol URL or DOI: URLs (if still private) / DOIs (if public) of
              protocols from protocols.io related to this dataset
            </li>
            <li>
              Protocol type: This will state whether your link is a "URL" or a "DOI" item. Use one of those two items to reference the type of identifier.
            </li>
            <li>
              Relation to the dataset: A prespecified list of relations for common protocols used in SPARC datasets. The value in this field must be read as the 'relationship that this dataset has to the specified protocol'.
            </li>
            <li>
              Protocol description: Provide a short description of the link.
            </li>
          </ul>
        </li>
        <li>Click <strong>Add a URL/DOI</strong> to add a link other than a protocol.</li>
        <ul class="docs-ul list-outside list-disc">
          <li>
            URL or DOI: Specify your actual URL (if resource is public) or DOI (if resource is private). This can be web links to repositories or papers (DOI).
          </li>
          <li>
            Link type: This will state whether your link is a 'URL' or 'DOI' item. Use one of those two items to reference the type of link.
          </li>
          <li>
            Relation to the dataset: A prespecified list of relations for common URLs or DOIs used in SPARC datasets. The value in this field must be read as the 'relationship that this dataset has to the specified URL/DOI.
          </li>
          <li>
            Link description: Provide a short description of the link.
          </li>
        </ul>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Prepare-metadata/Dataset_description/link-info-1.gif"
        />
      </div>

      <base-docs-heading>
        Additional Information:
      </base-docs-heading>
      <ul class="docs-ul list-outside list-decimal">
        <li>
          Study collection title: Title of the larger collection of to which this dataset belongs.
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
