<template>
  <div>
    <Html>
      <Head>
        <Title> Create samples.xlsx - SODA for SPARC </Title>
      </Head>
    </Html>

    <base-docs-title :title="`Create samples.xlsx`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          Under this feature, SODA lets you quickly and accurately prepare the
          dataset_description metadata file which is recommended for SPARC
          datasets. SODA provides a convenient interface, which is more
          intuitive than the Excel spreadsheet template. It also makes use of
          information from your dataset on Pennsieve, NCBI Taxonomy, Scicrunch,
          and protocols.io to help you populate some of the fields easily. The
          expected structure of this file, generated automatically by SODA, is
          explained in our corresponding "How to" page if you would like to
          learn about it.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <base-docs-heading> Step 1: </base-docs-heading>
      <div class="p-parent-div">
        <p>
          Currently, there are 2 ways to start creating your samples.xlsx file
          with SODA:
        </p>

        <blockquote>
          <p>1A. Start from scratch with SODA</p>
        </blockquote>

        <blockquote>
          <p>1B. Continue working on an existing samples.xlsx file</p>
        </blockquote>

        <p>If you start with:</p>
        <p>(1A): You can go straight to step 2.</p>
        <p>If you start with:</p>
        <p>
          (1B): You will be able to specify the location of the existing
          subjects file: either from your computer or from a Pennsieve dataset.
          Clicking "Confirm" after specifying the file path or a Pennsieve
          dataset will load the information from the file onto SODA.
        </p>
      </div>

      <base-docs-heading> Step 2: </base-docs-heading>

      <div class="p-parent-div">
        <p>
          You will be able to add new samples or edit/delete existing samples
          (if any). If at least 1 sample is added, a table of samples will be
          provided with each row containing a subject, its sample, and the tasks
          associated with it (Edit/Delete).
        </p>

        <p>
          Clicking on "<i>Add a sample</i>"" will prompt you to a form where you
          can add a new sample by entering information about it. The form
          contains the below fields with mandatory fields written in bold.
        </p>
      </div>

      <div class="img-parent-div">
        <video
          controls
          autoplay="true"
          src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/Samples-interface.mp4"
        />
      </div>

      <ul class="docs-ul list-outside list-disc">
        <li>
          <strong>subject id</strong>: Lab-based schema for identifying each
          subject. This field should match the primary's sub-folder names. The
          subject_id must be unique.
        </li>
        <li>
          <strong>sample id</strong>: Lab-based schema for identifying each
          sample. The sample id must be unique across the whole dataset.
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
            <li>
              wasDerivedFromSample: This is the sample_id of the sample from
              which the current sample was derived (e.g., slice, tissue punch,
              biopsy, etc.).
            </li>
          </ul>
        </li>
        <li>
          Species Information (Mandatory if available):

          <ul class="docs-ul list-outside list-disc">
            <li>
              Sample type: This refers to the physical type of the specimen from
              which the data were extracted.
            </li>
            <li>
              Sample anatomical location: This is the organ, or sub-region of
              organ from which the data were extracted.
            </li>
            <li>
              Member of: Provide a population that the specimen or sample
              belongs to.
            </li>
            <li>
              Also in dataset: Include the Pennsieve id(s) for other datasets
              that have data about the same specimen.
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
                rel="noopener"
                class="hover:underline text-blue-600"
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
          <div class="img-parent-div">
            <video
              controls
              autoplay="true"
              src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Videos/Samples-protocols.mp4"
            />
          </div>
        </li>
        <li>
          Additional fields (Optional):
          <ul class="docs-ul list-outside list-disc">
            <li>
              <i> Laboratory internal id</i>: Provide a mapping for groups that
              have incompatible internal identifier conventions.
            </li>
            <li>
              <i> Date of derivation</i>: Provide the date at which the subject
              was collected.
            </li>
            <li>
              <i> Pathology</i>: Provide the pathological condition of the
              sample if applicable.
            </li>
            <li>
              <i> Laterality</i>: This indicates which one of a pair of organs
              (i.e: kidneys or lungs) the sample is.
            </li>
            <li><i> Cell type</i>: Provide the cell type of your subject.</li>
            <li>
              <i> Plane of section</i>: Provide the plane of section of your
              subject.
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
          Click <strong>Add custom field</strong> to start adding a header for a
          field that is not a SPARC-standard samples.xlsx field. You will have
          the option to add value for this field after it is created. Click on
          the "trash can" icon next to a field to delete a custom field.
        </p>
      </div>

      <base-docs-heading>
        After you complete all steps, click on "Generate" to generate your
        samples file. You have the options to generate and save it on your
        computer or generate and upload it to Pennsieve.
      </base-docs-heading>

      <base-docs-subtitle> Note </base-docs-subtitle>

      <ul class="docs-ul list-outside list-disc">
        <li>
          If you have a properly structured SPARC primary folder to import, you
          can click on
          <strong>I want to import subject ID(s) from my primary folder</strong>
          specified under the button "Add a subject" to import it to the table
          of samples. SODA will extract the subject ID(s) and sample ID(s) (if
          available) onto the table of samples for your edits.
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
