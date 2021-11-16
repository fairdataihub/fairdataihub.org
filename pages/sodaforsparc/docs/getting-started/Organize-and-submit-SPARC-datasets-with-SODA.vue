<template>
  <div>
    <base-docs-title
      :title="`Checklist to organize and submit SPARC datasets with SODA`"
    >
    </base-docs-title>

    <div class="flex flex-col mb-3 print:mb-1">
      <base-docs-subtitle>
        <template v-slot:default>
          Prepare and submit SPARC datasets with SODA
        </template>
        <template v-slot:actionArea>
          <button
            class="text-url hover-underline-animation mb-1 print:hidden"
            @click="printPage"
          >
            Print this page
          </button>
        </template>
      </base-docs-subtitle>
      <h3
        class="
          font-asap
          text-base text-black
          dark:text-white
          print:text-sm print:dark:text-black
        "
      >
        This is the suggested workflow for preparing and submitting your SPARC
        datasets with SODA using the Free Form Mode features. All these steps
        are mandatory (unless marked otherwise) if you wish to satisfy the SPARC
        requirements.
      </h3>
    </div>

    <div class="flex flex-col">
      <div class="mb-3 print:my-1">
        <h2
          class="
            font-semibold
            text-base text-black
            dark:text-white
            mb-2
            print:my-0 print:text-sm print:dark:text-black
          "
        >
          Preliminary steps (only required once)
        </h2>
        <div class="flex flex-col">
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <span
                    class="
                      text-black
                      dark:text-white
                      font-asap
                      print:text-sm print:dark:text-black
                    "
                  >
                    Read about the
                  </span>
                  <a
                    href="https://sparc.science/help/7k8nEPuw3FjOq2HuS8OVsd"
                    target="_blank"
                    rel="noopener"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      SPARC requirements for organizing and sharing all SPARC
                      datasets.
                    </span>
                  </a>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <span
                    class="
                      text-black
                      dark:text-white
                      font-asap
                      print:text-sm print:dark:text-black
                    "
                  >
                    Sign up to
                  </span>
                  <a
                    href="https://app.pennsieve.net/"
                    target="_blank"
                    rel="noopener"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        print:text-sm
                        font-asap
                        print:text-black print:dark:text-black
                      "
                      >Pennsieve</span
                    >
                  </a>
                  <span
                    class="
                      text-black
                      dark:text-white
                      font-asap
                      print:text-sm print:dark:text-black
                    "
                  >
                    and get access to the SPARC Consortium organization (contact
                  </span>
                  <a
                    href="mailto:support@pennsieve.net"
                    target="_blank"
                    rel="noopener"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                      >support@pennsieve.net</span
                    >
                  </a>
                  <span
                    class="
                      font-asap
                      text-black
                      dark:text-white
                      print:text-sm print:dark:text-black
                    "
                  >
                    for help)
                  </span>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <span
                    class="
                      text-black
                      dark:text-white
                      font-asap
                      print:text-sm print:dark:text-black
                    "
                  >
                    Download and install the
                  </span>
                  <a
                    href="https://docs.pennsieve.io/docs/the-pennsieve-agent"
                    target="_blank"
                    rel="noopener"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        print:text-sm print:text-black print:dark:text-black
                        font-asap
                      "
                      >Pennsieve agent</span
                    >
                  </a>
                  <span
                    class="
                      text-black
                      dark:text-white
                      font-asap
                      print:text-sm print:dark:text-black
                    "
                  >
                    required to upload files through SODA.
                  </span>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <span
                    class="
                      text-black
                      dark:text-white
                      font-asap
                      print:text-sm print:dark:text-black
                    "
                  >
                    Open SODA and watch our quick video located under the
                    Overview tab to familiarize yourself with the user interface
                    of SODA.
                  </span>
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="mb-3 print:my-1">
        <h2
          class="
            font-semibold
            text-base text-black
            dark:text-white
            mb-2
            print:my-0 print:text-sm print:dark:text-black
          "
        >
          Prepare Dataset on Pennsieve (under the Manage Datasets tab of the
          Free Form Mode)
        </h2>
        <div class="flex flex-col">
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <NuxtLink
                    to="/sodaforsparc/docs/manage-dataset/Connect-your-Pennsieve-account-with-SODA"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        print:text-sm print:text-black print:dark:text-black
                        font-asap
                      "
                    >
                      Connect your Pennsieve account with SODA.
                    </span>
                  </NuxtLink>
                  <span
                    class="
                      text-black
                      dark:text-white
                      font-asap
                      print:text-sm print:dark:text-black
                    "
                  >
                    This is only required the first time you use SODA.
                  </span>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content print:text-sm print:dark:text-black">
                  <NuxtLink
                    to="/sodaforsparc/docs/manage-dataset/Create-a-new-dataset"
                    class="
                      hover:underline
                      text-blue-600
                      dark:text-blue-400
                      print:text-sm print:dark:text-black
                    "
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Create a new dataset
                    </span>
                  </NuxtLink>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content print:text-sm print:dark:text-black">
                  <NuxtLink
                    to="/sodaforsparc/docs/manage-dataset/Make-PI-owner-of-dataset"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Make PI of the SPARC award the owner of the dataset
                    </span>
                  </NuxtLink>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content print:text-sm print:dark:text-black">
                  <NuxtLink
                    to="/sodaforsparc/docs/manage-dataset/Add-edit-permissions"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Give access to other members/teams who may need to
                      contribute to the dataset</span
                    >
                  </NuxtLink>
                  <span
                    class="
                      font-asap
                      text-black
                      dark:text-white
                      print:text-sm print:dark:text-black
                    "
                  >
                    (note: optional)
                  </span>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content print:text-sm print:dark:text-black">
                  <NuxtLink
                    to="/sodaforsparc/docs/manage-dataset/Add-edit-subtitle"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Add a subtitle
                    </span>
                  </NuxtLink>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content print:text-sm print:dark:text-black">
                  <NuxtLink
                    to="/sodaforsparc/docs/manage-dataset/Add-edit-description"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Add a description
                    </span>
                  </NuxtLink>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content print:text-sm print:dark:text-black">
                  <NuxtLink
                    to="/sodaforsparc/docs/manage-dataset/Upload-a-banner-image"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Upload a banner image
                    </span>
                  </NuxtLink>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content print:text-sm print:dark:text-black">
                  <NuxtLink
                    to="/sodaforsparc/docs/manage-dataset/Assign-a-license"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Assign a license
                    </span>
                  </NuxtLink>
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="mb-3 print:my-1">
        <h2
          class="
            font-semibold
            text-base text-black
            dark:text-white
            mb-2
            print:my-0 print:text-sm print:dark:text-black
          "
        >
          Prepare SPARC Metadata Files (under the Prepare Metadata tab of the
          Free Form Mode)
        </h2>
        <div class="flex flex-col">
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <span
                    class="
                      text-black
                      dark:text-white
                      font-asap
                      print:text-sm print:dark:text-black
                    "
                  >
                    Prepare protocol on protocols.io following the
                  </span>
                  <a
                    href="https://sparc.science/help/1slXZSS2XtTYQsdY6mEJi5"
                    target="_blank"
                    rel="noopener"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      instructions provided here
                    </span>
                  </a>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <NuxtLink
                    to="/sodaforsparc/docs/prepare-metadata/Create-submission-xlsx"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Prepare submission file
                    </span>
                  </NuxtLink>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <NuxtLink
                    to="/sodaforsparc/docs/prepare-metadata/Create-dataset_description-xlsx"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Prepare dataset description file
                    </span>
                  </NuxtLink>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <NuxtLink
                    to="/sodaforsparc/docs/prepare-metadata/Create-subjects-xlsx"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Prepare subjects file
                    </span>
                  </NuxtLink>
                  <span
                    class="
                      text-black
                      dark:text-white
                      font-asap
                      print:text-sm print:dark:text-black
                    "
                  >
                    (required only if your study includes subjects)
                  </span>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <NuxtLink
                    to="/sodaforsparc/docs/prepare-metadata/Create-samples-xlsx"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Prepare samples file
                    </span>
                  </NuxtLink>
                  <span
                    class="
                      text-black
                      dark:text-white
                      font-asap
                      print:text-sm print:dark:text-black
                    "
                  >
                    (required only if your study includes samples)
                  </span>
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="mb-3 print:my-1">
        <h2
          class="
            font-semibold
            text-base text-black
            dark:text-white
            mb-2
            print:my-0 print:text-sm print:dark:text-black
          "
        >
          Organize dataset according to the SPARC Dataset Structure (under the
          Prepare Datasets tab of the Free Form Mode)
        </h2>
        <div class="flex flex-col">
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <NuxtLink
                    to="/sodaforsparc/docs/organize-dataset"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Specify files and metadata files to be included in your
                      dataset and generate dataset directly on Pennsieve
                    </span>
                  </NuxtLink>
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="mb-3 print:my-1">
        <h2
          class="
            font-semibold
            text-base text-black
            dark:text-white
            mb-2
            print:my-0 print:text-sm print:dark:text-black
          "
        >
          Submit Dataset to the Curation Team for Review (under the Disseminate
          Datasets tab of the Free Form Mode)
        </h2>
        <div class="flex flex-col">
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <NuxtLink
                    to="/sodaforsparc/docs/disseminate-dataset/Share-with-curation-team"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Share with the Curation Team to add your dataset to their
                      queue for review
                    </span>
                  </NuxtLink>
                  <span
                    class="
                      text-black
                      dark:text-white
                      font-asap
                      print:text-sm print:dark:text-black
                    "
                  >
                    (it is highly suggested to not make any changes after this
                    step until you are contacted by the Curation Team)
                  </span>
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="mb-3 print:my-1">
        <h2
          class="
            font-semibold
            text-base text-black
            dark:text-white
            mb-2
            print:my-0 print:text-sm print:dark:text-black
          "
        >
          Post-curation steps to be completed ONLY after dataset is approved by
          the Curation Team (under the Disseminate Datasets tab of the Free Form
          Mode)
        </h2>
        <div class="flex flex-col">
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <NuxtLink
                    to="/sodaforsparc/docs/disseminate-dataset/Share-with-SPARC-Consortium"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Share dataset with the SPARC Consortium as Embargoed
                      dataset
                    </span>
                  </NuxtLink>
                </span>
              </div>
            </label>
          </div>
          <div class="print:py-0 print:my-0">
            <label class="flex print:py-0 print:my-0">
              <input
                type="checkbox"
                class="disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div class="ml-3">
                <span class="span-content">
                  <NuxtLink
                    to="/sodaforsparc/docs/disseminate-dataset/Submit-for-pre-publishing-review"
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    <span
                      class="
                        font-asap
                        print:text-sm print:text-black print:dark:text-black
                      "
                    >
                      Send dataset for pre-publishing review
                    </span>
                  </NuxtLink>
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",
  scrollToTop: true,
  data() {
    return {};
  },
  methods: {
    printPage() {
      window.print();
    },
  },
};
</script>

<style lang="postcss" scoped>
.span-content {
  @apply block leading-normal text-base text-black;
}

input {
  @apply mt-1 w-4 h-4 border-gray-300 rounded flex-none;
}
</style>
