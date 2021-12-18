<template>
  <div>
    <base-docs-title :title="`Create a new dataset`"> </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          You can create a new dataset on Pennsieve through this feature of
          SODA. The name of the dataset will be displayed as the title of the
          dataset when the dataset becomes public. It is thus advised to make
          sure that your dataset title is different than your other dataset
          titles and that it is relatively informative.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Select/confirm your Pennsieve account. If you have not connected your
          Pennsieve account with SODA yet,
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 "
          >
            <span>use the instructions available here</span> </NuxtLink
          >.
        </li>
        <li>Enter the desired name for the dataset.</li>
        <li>Click "Create dataset".</li>
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
