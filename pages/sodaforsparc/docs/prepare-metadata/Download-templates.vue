<template>
  <div>
    <Html>
      <Head>
        <Title>
          Download templates - SODA for SPARC
        </Title>
      </Head>
    </Html>
    
    <base-docs-title :title="`Download template`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          The Curation Team has release templates for all the metadata files
          required in SPARC datasets. These templates are available in SPARC
          Dataset Structure which may be
          <a
            href="https://github.com/SciCrunch/sparc-curation/releases/tag/dataset-template-1.2.3"
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600"
          >
            downloaded as a zip file</a
          >. They are used in SODA when generating the metadata files. You can
          also download them conveniently in this SODA feature in case you wish
          to fill them out manually.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          Simply click on the name of the file and select the destination folder
          to download.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Prepare-metadata/Download-templates/download-templates.PNG?raw=true"
          alt="A screenshot of our interface for downloading templates released by the Curation Team."
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
