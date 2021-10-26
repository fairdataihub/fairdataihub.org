<template>
  <div>
    <base-docs-title :title="`Organize dataset Step 6: Generate dataset`">
    </base-docs-title>

    <div class="flex flex-col">
      <div class="p-parent-div">
        <p>
          The dataset will be generated based on the information provided during
          the previous steps. It could be generated locally on your computer or
          directly on Pennsieve.
        </p>
        <p>
          If you select to generate your dataset locally, it will be generated
          at the desired location on your computer. No modifications will be
          made to the original local files/folders specified during the previous
          steps.
        </p>
      </div>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Select the desired destination to generate the dataset on your
          computer.
        </li>
        <li>
          Enter the name of the new dataset (a folder with this name will be
          created at the selected destination).
        </li>
        <li>Click "Generate" to create your dataset.</li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/generate-1.gif?raw=true"
        />
      </div>

      <div class="p-parent-div">
        <p>
          If you select to generate your dataset directly on Pennsieve, it will
          be generated on the Pennsieve dataset with the specified structure. No
          modifications will be made to the original local files/folders
          specified during the previous step.
        </p>
      </div>

      <ul class="docs-ul list-outside list-decimal">
        <li>Select desired Pennsieve account from the drop-down list.</li>
        <li>
          Select to generate on a new Pennsieve dataset or to use an existing
          one.
        </li>
      </ul>

      <ul class="docs-ul list-outside list-disc">
        <li>
          If you select to generate on a new Pennsieve dataset, specify a name
          for it.

          <div class="img-parent-div">
            <img
              src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/generate-21.gif?raw=true"
            />
          </div>
        </li>
        <li>
          If you select to generate on an existing Pennsieve dataset, select one
          from the drop-down list, and tell SODA how to handle any existing
          files/folders specified in your dataset that may already exist on the
          selected Pennsieve dataset.

          <div class="img-parent-div">
            <img
              src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/generate-3.gif?raw=true"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",scrollToTop: true,
};
</script>