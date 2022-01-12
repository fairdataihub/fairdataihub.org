<template>
  <div>
    <Html>
      <Head>
        <Title>
          Organize dataset - Step 3: Structure dataset files - SODA for SPARC
        </Title>
      </Head>
    </Html>

    <base-docs-title
      :title="`Organize dataset Step 3: Structure dataset files`"
    >
    </base-docs-title>

    <div class="flex flex-col">
      <div class="p-parent-div">
        <p>
          Virtually structure your dataset using this interface as if you were
          organizing it on your computer but without actually modifying any
          local files. All your requested actions (files to be included, folders
          to be created, metadata information to be added, etc.) will be
          registered by SODA and only implemented when the dataset is generated
          during Step 6.
        </p>
      </div>

      <ul class="list-disc list-outside docs-ul">
        <li>Go inside a folder by double-clicking on it.</li>
        <li>
          Import files/folders inside a folder using drag-and-drop or the
          "Import" menu located in the upper right corner.
        </li>
        <li>
          reate a new folder using the "New folder" button located in the upper
          right corner. Note that this is only possible inside a high-level
          SPARC folder. To create a new high-level SPARC folder, go back to Step
          2.
        </li>
        <li>
          Rename files/folders using the right-click menu option "Rename".
        </li>
        <li>
          Remove files/folders using the right-click menu option "Delete".
        </li>
        <li>Move files/folders using the right-click menu option "Move"</li>
        <li>
          Multiple-select files/folders by either drag-selecting items or
          holding Ctrl and clicking items.
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step3-part1.gif?raw=true"
          alt="screenshot of soda"
        />
      </div>

      <ul class="list-disc list-outside docs-ul">
        <li>
          Use the "Details" option from the right-click menu to see the actual
          path of the file and include metadata (description, Additional
          Metadata) which will be included in the manifest files if you request
          SODA to generate them automatically for you (Step 5).
        </li>
        <li>
          Use the arrow located in the upper left corner to move up a folder.
          The current location in the dataset is indicated right next to the
          arrow.
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step3-part2-files.gif?raw=true"
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
