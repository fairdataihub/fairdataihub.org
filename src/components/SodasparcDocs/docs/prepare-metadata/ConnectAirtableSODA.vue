<template>
  <div>
    <base-docs-title :title="`Connect your Airtable account with SODA`">
    </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Background </base-docs-subtitle>

    <div class="my-4">
      <p>
        SODA make use of the SPARC Airtable sheet to automatically get award
        numbers and contributors information such that you don't have to enter
        them manually in your metadata file. To enable this, you have to connect
        your Airtable account with SODA. You will only have to do that one time,
        SODA will then automatically connect to your Airtable account during
        subsequent uses.
      </p>
      <br />
      <p>
        We suggest keeping your group information up to date in the Airtable
        sheet, especially contributors' names, email, affiliations, and ORCID to
        help SODA help you!
      </p>
    </div>

    <base-docs-subtitle> How to </base-docs-subtitle>

    <ul class="list-outside bg-rose-200 list-decimal ml-4 mb-2">
      <li>Create an Airtable account.</li>
      <li>
        Get access to the SPARC Airtable sheet (contact Dr. Charles Horn at
        chorn@pitt.edu).
      </li>
      <li>
        Under the "Create submission.xlsx" feature from the "Prepare Metadata"
        section, click on "Yes" when prompted to connect your Airtable account.
      </li>
      <li>
        Provide a key name of your choice and enter your Airtable API key in the
        dedicated SODA interface. Checkout the Airtable Help page to learn how
        to obtain or re-generate your API key. Note that the key will be stored
        locally on your computer and the SODA Team will not have access to it.
      </li>
      <li>Click on "Connect".</li>
      <li>
        Click on the edit button next to "User award(s)" to add/edit your SPARC
        award(s) that will then be remembered by SODA to help you prepare your
        SPARC metadata files easily.
      </li>
    </ul>

    <div class="flex justify-start mx-8 my-4 shadow-xl">
      <img
        src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Prepare-metadata/Connect-to-Airtable/connect-to-airtable.gif"
      />
    </div>

    <base-docs-subtitle> Note </base-docs-subtitle>

    <ul class="list-outside bg-rose-200 list-disc ml-4 mb-2">
      <li>
        During subsequent uses, SODA will automatically connect to the Pennsieve
        account you were connected to the last time.
      </li>
      <li>
        Neither the SODA Team nor anyone else besides you will have access to
        your Pennsieve account. The generated login information required for
        future sessions on your Pennsieve account will be stored locally on your
        computer only.
      </li>
      <li>
        If you do not wish to provide your login details to SODA, you can create
        a set of API keys on Pennsieve and provide it to SODA. Instructions for
        this process can be found at Connect your Pennsieve account with SODA
        (API Key)
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ConnectAirtableSODA",
};
</script>

<style></style>
