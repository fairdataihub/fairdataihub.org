<template>
  <div>
    <base-docs-title :title="`Upload a banner image`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          All SPARC datasets must have the following metadata on Pennsieve:
          subtitle, description, banner image, and license. This interface
          allows you to easily add a banner image to your dataset. This image
          will be associated with the dataset and used as a thumbnail once the
          dataset is published.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Select/confirm your Pennsieve account and dataset. If you have not
          connected your Pennsieve account with SODA yet, see
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span>here</span> </NuxtLink
          >.
        </li>
        <li>Click on "Edit banner image"</li>
        <li>Click on "Import image" in the new pop-up window.</li>
        <li>Select the image file you want to use as a banner image.</li>
        <li>
          Crop the file as desired. Note that all banner images must be square,
          have a minimum display size of 512x512 px (1024x1024 px preferred),
          and have a maximum file size of 5 MB.
        </li>
        <li>Click on "Save changes".</li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Add-metadata/banner-image.gif?raw=true"
        />
      </div>

      <base-docs-subtitle> Note </base-docs-subtitle>

      <ul class="docs-ul list-outside list-disc">
        <li>
          During subsequent uses, SODA will automatically connect to the
          Pennsieve account you were connected to the last time.
        </li>
        <li>
          Neither the SODA Team nor anyone else besides you will have access to
          your Pennsieve account. The generated login information required for
          future sessions on your Pennsieve account will be stored locally on
          your computer only.
        </li>
        <li>
          If you do not wish to provide your login details to SODA, you can
          create a set of API keys on Pennsieve and provide it to SODA.
          Instructions for this process can be found at Connect your Pennsieve
          account with SODA (API Key)
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