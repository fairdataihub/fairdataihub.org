<template>
  <div>
    <base-docs-title
      :title="`Connect your Pennsieve account with SODA (API Key)`"
    >
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          SPARC uses the
          <a
            href="https://app.pennsieve.net/"
            target="_blank"
            rel="nofollow"
            class="hover:underline text-blue-600 dark:text-blue-400"
            >Pennsieve</a
          >
          platform to store data and metadata files as well as append additional
          metadata. All SPARC researchers must thus share their data on
          Pennsieve. When using SODA for the first time, you will have to
          connect your Pennsieve account with SODA to use Pennsieve related
          functionalities implemented in SODA.
        </p>
        <p>
          SODA supports connections to Pennsieve via your Pennsieve login
          details. If you would like to use this method, please click
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            <span> Connect your Pennsieve account with SODA </span>
          </NuxtLink>
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Click on any features (e.g. Create a new dataset) under Manage
          Datasets.
        </li>
        <li>Click on the edit symbol next to "Current account".</li>
        <li>
          In the new pop-up window click on "I want to connect with an API key
          instead" at the bottom of the pop-up.
        </li>
        <li>
          Follow the instructions on the Pennsieve help page to get a key name,
          API key, and API secret from your Pennsieve account. Make sure you are
          under the "SPARC Consortium" organization on Pennsieve when you
          generate the API key and secret.
          <div class="img-parent-div">
            <img
              src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Connect-to-BF/consortium-bf-account.PNG?raw=true"
            />
          </div>
        </li>
        <li>
          Enter your key name, API key, and API secret in the corresponding
          fields then click on "Add".
          <div class="img-parent-div">
            <img
              src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Connect-to-BF/connect-to-blackfynn.gif?raw=true"
            />
          </div>
        </li>
      </ul>

      <base-docs-subtitle> Note </base-docs-subtitle>

      <ul class="docs-ul list-outside list-disc">
        <li>
          During subsequent uses, SODA will automatically connect to the
          Pennsieve account you were connected to the last time.
        </li>
        <li>
          The account key and secret for your Pennsieve account will be stored
          on your computer only, so neither the SODA Team nor anyone else
          besides you will have access to your Pennsieve account.
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
