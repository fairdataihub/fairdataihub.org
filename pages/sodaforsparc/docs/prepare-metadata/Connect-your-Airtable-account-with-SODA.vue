<template>
  <div>
    <base-docs-title :title="`Connect your Airtable account with SODA`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          SODA make use of the
          <a
            href="https://airtable.com/tblFGEvUoTbbG6tJy/viwWBpydzfYQsvNFz?blocks=hide"
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            SPARC Airtable sheet</a
          >
          to automatically get award numbers and contributors information such
          that you don't have to enter them manually in your metadata file. To
          enable this, you have to connect your Airtable account with SODA. You
          will only have to do that one time, SODA will then automatically
          connect to your Airtable account during subsequent uses.
        </p>
        <p>
          We suggest keeping your group information up to date in the Airtable
          sheet, especially contributors' names, email, affiliations, and ORCID
          to help SODA help you!
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Create an
          <a
            href="https://airtable.com/"
            target="_blank"
            rel="nofollow"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            Airtable account</a
          >.
        </li>
        <li>
          Get access to the
          <a
            href="https://airtable.com/tblFGEvUoTbbG6tJy/viwWBpydzfYQsvNFz?blocks=hide"
            target="_blank"
            rel="nofollow"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            SPARC Airtable sheet</a
          >
          (contact Dr. Charles Horn at
          <a
            href="mailto:chorn@pitt.edu"
            target="_blank"
            rel="nofollow"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            chorn@pitt.edu</a
          >).
        </li>
        <li>
          Under the "Create submission.xlsx" feature from the "Prepare Metadata"
          section, start by either Creating a submission file from scratch with
          SODA or Continue working on an existing submission.xlsx file. Click on
          "Click here to import my SPARC award from Airtable" to connect SODA
          with your Airtable account.
        </li>
        <li>
          Enter your Airtable API key in the dedicated SODA interface. Checkout
          the
          <a
            href="https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key"
            target="_blank"
            rel="nofollow"
            class="hover:underline text-blue-600 dark:text-blue-400"
          >
            Airtable Help page</a
          >
          to learn how to obtain or re-generate your API key. Note that the key
          will be stored locally on your computer and the SODA Team will not
          have access to it.
        </li>
        <li>
          Click on "Add account".
          <strong>Note: </strong>You will have to do this only once and the
          Airtable connection will be then remembered by SODA during subsequent
          uses.
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Prepare-metadata/Connect-to-Airtable/connect-to-airtable-new.gif?raw=true"
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
