<template>
  <div>
    <base-docs-title :title="`Organize dataset Step 6: Generate dataset`">
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <div class="my-4">
      <p>
        The dataset will be generated based on the information provided during
        the previous steps. It could be generated locally on your computer or
        directly on Pennsieve.
      </p>
      <p>
        If you select to generate your dataset locally, it will be generated at
        the desired location on your computer. No modifications will be made to
        the original local files/folders specified during the previous steps.
      </p>
    </div>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>
        Select the desired destination to generate the dataset on your computer.
      </li>
      <li>
        Enter the name of the new dataset (a folder with this name will be
        created at the selected destination).
      </li>
      <li>Click "Generate" to create your dataset.</li>
    </ul>

    <div class="flex justify-start mx-8 my-4 shadow-xl">
      <img
        src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Organize-dataset/generate-1.gif"
      />
    </div>

    <div class="my-4">
      <p>
        If you select to generate your dataset directly on Pennsieve, it will be
        generated on the Pennsieve dataset with the specified structure. No
        modifications will be made to the original local files/folders specified
        during the previous step.
      </p>
    </div>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>Select desired Pennsieve account from the drop-down list.</li>
      <li>
        Select to generate on a new Pennsieve dataset or to use an existing one.
      </li>
    </ul>

    <ul class="list-outside bg-rose-200 list-disc ml-4 mb-2">
      <li>
        If you select to generate on a new Pennsieve dataset, specify a name for
        it.

        <div class="flex justify-start mx-8 my-4 shadow-xl">
          <img
            src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Organize-dataset/generate-21.gif"
          />
        </div>
      </li>
      <li>
        If you select to generate on an existing Pennsieve dataset, select one
        from the drop-down list, and tell SODA how to handle any existing
        files/folders specified in your dataset that may already exist on the
        selected Pennsieve dataset.

        <div class="flex justify-start mx-8 my-4 shadow-xl">
          <img
            src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Organize-dataset/generate-3.gif"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OrganizeDatasetStep6",
};
</script>

<style></style>
