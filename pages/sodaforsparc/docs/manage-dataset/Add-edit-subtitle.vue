<template>
  <div>
    <Html>
      <Head>
        <Title> Add edit subtitle - SODA for SPARC </Title>
      </Head>
    </Html>

    <base-docs-title :title="`Add edit subtitle`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="my-2">
        <p class="mb-2 text-black font-asap">
          All SPARC datasets must have the following metadata on Pennsieve:
          subtitle, description, banner image, and license. This interface
          allows you to easily add a subtitle to your dataset. This subtitle
          will become the short description visible immediately under the title
          of your dataset once it is published.
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
          In the textbox, add two or three sentences (limit of 256 characters)
          that describe the content of your dataset such that it is possible to
          differentiate it from other datasets.
        </li>
        <li>Click on "Add subtitle".</li>
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
