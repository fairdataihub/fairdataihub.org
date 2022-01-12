<template>
  <div>
    <Html>
      <Head>
        <Title> Upload a local dataset to Pennsieve - SODA for SPARC </Title>
      </Head>
    </Html>

    <base-docs-title :title="`Upload a local dataset to Pennsieve`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="my-4">
        <p class="mb-2 text-black font-asap">
          With this feature, you can upload a data from your computer on to a
          Pennsieve dataset (with folder structure preserved).
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="list-decimal list-outside docs-ul">
        <li>
          Select/confirm your Pennsieve account and dataset. If you have not
          connected your Pennsieve account with SODA yet,
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="text-blue-600 hover:underline"
          >
            <span>use the instructions available here</span> </NuxtLink
          >.
        </li>
        <li>
          Click on "Select a folder" and select the local dataset folder in the
          navigation window.
        </li>
        <li>
          Click on "Upload dataset". The progress bar will indicate the upload
          progress until it is completed.
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
