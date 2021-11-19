<template>
  <div>
    <base-docs-title :title="`Create README.txt`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          Under this feature, SODA lets you rapidly prepare the README metadata
          file for your dataset. This feature is designed to avoid commonly
          found errors when preparing this file.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          You can start by either Creating a README file from scratch with SODA
          or Continue working on an existing README.txt file.
        </li>
        <li>
          If you want to continue working on an existing README.txt file, you
          will be prompted to either import it from your computer, or specify a
          Pennsieve dataset where the file is currently located. SODA will load
          information from such README file for further edits at your
          convenience.
        </li>
        <li>
          In the text-area, enter the information to be included in your
          README.txt file.
        </li>
        <li>
          Review and click on <strong>"Generate"</strong> to generate your
          README file. You have the options to generate and save it on your
          computer or generate and upload it to Pennsieve. The generated file
          will be ready to be included in your dataset.
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/raw/main/docs/documentation/Prepare-metadata/Readme-Changes/readme.PNG?raw=true"
          alt="screenshot of readme ui"
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
