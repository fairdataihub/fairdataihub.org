<template>
  <div>
    <Html>
      <Head>
        <Title>
          Connect your Pennsieve account with SODA - SODA for SPARC
        </Title>
      </Head>
    </Html>

    <base-docs-title :title="`Connect your Pennsieve account with SODA`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          SPARC uses the
          <a
            href="https://app.pennsieve.net/"
            target="_blank"
            rel="noopener"
            class="text-blue-600 hover:underline"
            >Pennsieve</a
          >
          platform to store data and metadata files as well as append additional
          metadata. All SPARC researchers must thus share their data on
          Pennsieve. When using SODA for the first time, you will have to
          connect your Pennsieve account with SODA to use Pennsieve related
          functionalities implemented in SODA.
        </p>
        <p>
          SODA will automatically check and see if you have an associated
          account with Pennsieve when you open the application. If we find an
          account on your system (i.e you have used SODA or the Pennsieve Agent
          previously) you should be all set. If an account is not found you can
          use your Pennsieve login details and allow SODA to retrieve the
          necessary information to connect to your Pennsieve account.
        </p>
      </div>

      <base-docs-subtitle> How to </base-docs-subtitle>

      <ul class="list-decimal list-outside docs-ul">
        <li>
          Click on any features (e.g. Create a new dataset) under Manage
          Datasets.
        </li>
        <li>Click on the edit symbol next to "Current account".</li>
        <li>
          Fill in your Pennsieve "Email Address" and "Password" and click
          "Connect to Pennsieve"
        </li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Connect-to-BF/connect-to-PS-SODA.png?raw=true"
          alt="screenshot of soda"
        />
      </div>

      <base-docs-subtitle> Note </base-docs-subtitle>

      <ul class="list-disc list-outside docs-ul">
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
          Instructions for this process can be found at
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA-(API-Key)"
            class="text-blue-600 hover:underline"
          >
            <span> Connect your Pennsieve account with SODA (API Key) </span>
          </NuxtLink>
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
