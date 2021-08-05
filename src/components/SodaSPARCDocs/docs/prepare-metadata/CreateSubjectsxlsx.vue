<template>
  <div>
    <base-docs-title :title="`Create subjects.xlsx`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          Under this feature, SODA lets you quickly and accurately prepare the
          subjects metadata file which is mandatory for all SPARC datasets. SODA
          provides a convenient interface, which is more intuitive than the
          Excel spreadsheet template. It also makes use of information from your
          dataset on Pennsieve, NCBI Taxonomy, Scicrunch, and protocols.io to
          help you populate some of the fields easily. The expected structure of
          this file, generated automatically by SODA, is explained in our
          corresponding
          <a
            href="https://github.com/bvhpatel/SODA/wiki/How-to-structure-the-subjects-metadata-file"
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

      <base-docs-heading> Step 1: </base-docs-heading>

      <div class="p-parent-div">
        <p>
          Currently, there are 2 ways to start creating your subjects.xlsx file
          with SODA:
        </p>

        <blockquote>
          <p>1A. Start from scratch with SODA</p>
        </blockquote>

        <blockquote>
          <p>
            1B. Continue working on an existing, locally-stored subjects.xlsx
            file
          </p>
        </blockquote>

        <p>If you start with:</p>
        <p>(1A): You can go straight to step 2.</p>
        <p>If you start with:</p>
        <p>
          (1B): You will be able to specify the location of the existing
          subjects file. Clicking "Confirm" after specifying the file path will
          load the information from the file onto SODA.
        </p>
      </div>

      <base-docs-heading> Step 2: </base-docs-heading>

      <div class="p-parent-div">
        <p>
          You will be able to add new subjects or edit/delete existing subjects
          (if any). If at least 1 subject is added, a table of subjects will be
          provided with each row containing a subject and the tasks associated
          with it (Edit/Delete).
        </p>

        <p>
          Clicking on "Add a subject" will prompt you to a form where you can
          add a new subject by entering information about it. The form contains
          the below fields with mandatory fields written in bold and optional
          fields in italic.
        </p>
      </div>

      <ul class="docs-ul list-outside list-disc">
        <li>
          <strong>subject id</strong>: Lab-based schema for identifying each
          subject. This field should match the primary's sub-folder names. The
          subject_id must be unique.
        </li>
        <li>
          Experimental Setup (Mandatory if available):

          <ul class="docs-ul list-outside list-disc">
            <li>
              pool id: If data is collected on multiple subjects at the same
              time include the identifier of the pool where the data file will
              be found. If this is included it should be the name of the top
              level folder inside primary. E.g: pool 1.
            </li>
            <li>
              experimental group: Experimental group subject is assigned to in
              research project. E.g: control.
            </li>
          </ul>
        </li>
        <li>
          Species Information (Mandatory if available):

          <ul class="docs-ul list-outside list-disc">
            <li>
              Sex: This is the sex of the subject, or if unknown, leave it
              empty. E.g: Female.
            </li>
            <li>
              Species: This is the species of the subject. When users start
              typing to search for a species, SODA provides species suggestions
              based on the NCBI taxonomy. E.g: Rattus
            </li>
            <li>
              Strain: This is the organism strain of the subject. When users
              start typing to search for a strain, SODA provides strain
              suggestions based on the common strains observed from SPARC
              datasets. Once a strain is specified, the Research Resource
              Identifier Identification (RRID) of the strain will be
              automatically pulled out from
              <a
                href="https://scicrunch.org/resources/Organisms/search"
                target="_blank"
                rel="nofollow"
                class="hover:underline text-blue-600 dark:text-blue-400"
              >
                Scicrunch</a
              >
              by SODA.
            </li>
            <li>
              Exact age at the start of experiment: Age of the subject (e.g.,
              hours, days, weeks, years old) or if unknown, leave it empty. For
              your convenience, SODA separates this entry into 2 fields: A
              number field (e.g: 1, 2, 3) and a unit field (e.g: hours, days,
              weeks, etc). If an ISO format is expected for this entry, enter
              the ISO-formatted text in the number field, and select "N/A" for
              the unit field.
            </li>
          </ul>
        </li>
        <li>
          Optional details:

          <ul class="docs-ul list-outside list-disc">
            <li>
              <i> Age category</i>: The age category that the subject belongs
              to. An search field with suggestions based on list derived from
              <a
                href="http://www.ontobee.org/ontology/catalog/UBERON?iri=http://purl.obolibrary.org/obo/UBERON_0000105"
                target="_blank"
                rel="nofollow"
                class="hover:underline text-blue-600 dark:text-blue-400"
              >
                UBERON life cycle stage</a
              >
              is provided in the interface for your convenience.
            </li>
            <li>
              <i> Age range</i>: This is the minimal age (youngest) and the
              maximum age (oldest) of the research subjects. The format for
              these 2 fields is numerical value + space + unit (spelled out).
            </li>
          </ul>
        </li>
        <li>
          Protocol Information (Optional):

          <ul class="docs-ul list-outside list-disc">
            <li>
              <i> Protocol title on protocols.io</i>: This field refers to the
              title of the protocol within Protocols.io once the research
              protocol is uploaded to Protocols.io. In SODA, users can connect
              to their protocols.io account by clicking on "Help me with my
              protocol information" under the Protocol Information tab. An login
              interface will instruct users to sign in their account in the
              browser at
              <a
                href="https://www.protocols.io/developers"
                target="_blank"
                rel="nofollow"
                class="hover:underline text-blue-600 dark:text-blue-400"
              >
                protocols.io</a
              >. An access token is required for automatic extraction of the
              protocol titles and links and can be easily obtained from the
              provided website once they are signed in. Once users successfully
              connect their account with with SODA, they can search in the input
              field for their protocol titles.
            </li>
            <li>
              <i> Protocol.io links</i>: This refers to the Protocol.io URL for
              the protocol title. In SODA, when users select a protocol title in
              the previous field (Protocol title), the protocol location or link
              will be automatically filled out for this field.
            </li>
          </ul>
        </li>
        <li>
          Additional fields (Optional):

          <ul class="docs-ul list-outside list-disc">
            <li>
              <i> Handedness</i>: This refers to the preference of the subject
              to use the right or left hand, whenever applicable.
            </li>
            <li>
              <i> Genotype</i>: This refers to the genetic makeup of genetically
              modified alleles in transgenic animals belonging to the same
              subject group. Note: Ignore this field if the RRID is already
              provided.
            </li>
            <li>
              <i> Reference atlas</i>: Enter here the reference atlas and organ.
            </li>
            <li>
              <i> Experimental log file name</i>: This is a file containing
              experimental records for each sample, whenever applicable.
            </li>
          </ul>
        </li>
        <li>Custom fields (Optional)</li>
      </ul>

      <div class="p-parent-div">
        <p>
          Click "Add custom field" button to start adding a header for a field
          that is not a SPARC-standard subjects.xlsx field. You will have the
          option to add value for this field after it is created. Click on the
          "trash can" icon next to a field to delete a custom field.
        </p>
      </div>

      <base-docs-subtitle> Notes </base-docs-subtitle>

      <ul class="docs-ul list-outside list-disc">
        <li>
          If you have a properly structured SPARC primary folder to import, you
          can choose to import it specified under the table of subjects after
          you enter Step 2. SODA will extract the subject ID(s) (if available)
          onto the table of samples for your edits.
        </li>
        <li>
          In the subject table, click on the "pen" symbol next to a subject to
          edit information about an existing subject.
        </li>
        <li>
          If you wish to import information from an existing subject to a new
          subject, you have the option to do that by clicking "Add a subject",
          and specify an existing subject to copy information from.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateSubjectsxlsx",
};
</script>
