<template>
  <div>
    <base-docs-title :title="`Organize and submit SPARC datasets with SODA`">
    </base-docs-title>
  </div>

  <div class="flex flex-col mb-3">
    <base-docs-subtitle>
      Checklist: prepare and submit SPARC datasets with SODA
    </base-docs-subtitle>
    <h3 class="font-sans text-base text-black dark:text-white">
      This is the suggested workflow for preparing and submitting your SPARC
      datasets with SODA using the Free Form Mode features. All these steps are
      mandatory (unless marked otherwise) if you wish to satisfy the SPARC
      requirements.
    </h3>
  </div>

  <div class="flex flex-col">
    <div class="mb-3">
      <h2
        class="
          font-sans font-semibold
          text-base text-black
          dark:text-white
          mb-2
        "
      >
        Preliminary steps (only required once)
      </h2>
      <div class="flex flex-col">
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                Read about the
                <a
                  href="https://sparc.science/help/7k8nEPuw3FjOq2HuS8OVsd"
                  target="_blank"
                  class="underline text-blue-400"
                >
                  SPARC requirements for organizing and sharing all SPARC
                  datasets.
                </a>
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                Sign up to
                <a
                  href="https://app.pennsieve.net/"
                  target="_blank"
                  class="underline text-blue-400"
                >
                  <span>Pennsieve</span>
                </a>
                and get access to the SPARC Consortium organization (contact
                <a
                  href="mailto:support@pennsieve.net"
                  target="_blank"
                  class="underline text-blue-400"
                >
                  <span>support@pennsieve.net</span>
                </a>
                for help)
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                Download and install the
                <a
                  href="https://docs.pennsieve.io/docs/the-pennsieve-agent"
                  target="_blank"
                  class="underline text-blue-400"
                >
                  <span>Pennsieve agent</span>
                </a>
                required to upload files through SODA.
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                Open SODA and watch our quick video located under the Overview
                tab to familiarize yourself with the user interface of SODA.
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <h2
        class="
          font-sans font-semibold
          text-base text-black
          dark:text-white
          mb-2
        "
      >
        Prepare Dataset on Pennsieve (under the Manage Datasets tab of the Free
        Form Mode)
      </h2>
      <div class="flex flex-col">
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Connect-your-Pennsieve-account-with-SODA"
                  class="underline text-blue-400"
                >
                  Connect your Pennsieve account with SODA.
                </router-link>
                This is only required the first time you use SODA.
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Create-a-new-dataset"
                  class="underline text-blue-400"
                >
                  <span> Create a new dataset </span>
                </router-link>
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Make-PI-owner-of-dataset"
                  class="underline text-blue-400"
                >
                  <span>
                    Make PI of the SPARC award the owner of the dataset
                  </span>
                </router-link>
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Add-edit-permissions"
                  class="underline text-blue-400"
                >
                  <span>
                    Give access to other members/teams who may need to
                    contribute to the dataset</span
                  >
                </router-link>
                (note: optional)
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Add-edit-subtitle"
                  class="underline text-blue-400"
                >
                  <span> Add a subtitle </span>
                </router-link>
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Add-edit-description"
                  class="underline text-blue-400"
                >
                  <span> Add a description </span>
                </router-link>
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Upload-a-banner-image"
                  class="underline text-blue-400"
                >
                  <span> Upload a banner image </span>
                </router-link>
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Assign-a-license"
                  class="underline text-blue-400"
                >
                  <span> Assign a license </span>
                </router-link>
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <h2
        class="
          font-sans font-semibold
          text-base text-black
          dark:text-white
          mb-2
        "
      >
        Prepare SPARC Metadata Files (under the Prepare Metadata tab of the Free
        Form Mode)
      </h2>
      <div class="flex flex-col">
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                Prepare protocol on protocols.io following the
                <a
                  href="https://sparc.science/help/1slXZSS2XtTYQsdY6mEJi5"
                  target="_blank"
                  class="underline text-blue-400"
                >
                  instructions provided here
                </a>
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Create-submission-xlsx"
                  class="underline text-blue-400"
                >
                  <span> Prepare submission file </span>
                </router-link>
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Create-dataset_description-xlsx"
                  class="underline text-blue-400"
                >
                  <span> Prepare dataset description file </span>
                </router-link>
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                Prepare subjects file (<router-link
                  to="/sodasparc/docs/Download-templates"
                  class="underline text-blue-400"
                >
                  <span>download template</span>
                </router-link>
                in SODA, more support will be available in SODA soon - note:
                required only if your study includes subjects)
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                Prepare samples file (<router-link
                  to="/sodasparc/docs/Download-templates"
                  class="underline text-blue-400"
                >
                  <span>download template</span> </router-link
                >, more support will be available in SODA soon - note: required
                only if your study includes samples)
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <h2
        class="
          font-sans font-semibold
          text-base text-black
          dark:text-white
          mb-2
        "
      >
        Organize dataset according to the SPARC Dataset Structure (under the
        Prepare Datasets tab of the Free Form Mode)
      </h2>
      <div class="flex flex-col">
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Organize-dataset"
                  class="underline text-blue-400"
                >
                  <span>
                    Specify files and metadata files to be included in your
                    dataset and generate dataset directly on Pennsieve
                  </span>
                </router-link>
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <h2
        class="
          font-sans font-semibold
          text-base text-black
          dark:text-white
          mb-2
        "
      >
        Submit Dataset to the Curation Team for Review (under the Disseminate
        Datasets tab of the Free Form Mode)
      </h2>
      <div class="flex flex-col">
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Share-with-curation-team"
                  class="underline text-blue-400"
                >
                  <span>
                    Share with the Curation Team to add your dataset to their
                    queue for review
                  </span>
                </router-link>
                (it is highly suggested to not make any changes after this step
                until you are contacted by the Curation Team)
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <h2
        class="
          font-sans font-semibold
          text-base text-black
          dark:text-white
          mb-2
        "
      >
        Post-curation steps to be completed ONLY after dataset is approved by
        the Curation Team (under the Disseminate Datasets tab of the Free Form
        Mode)
      </h2>
      <div class="flex flex-col">
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Share-with-SPARC-Consortium"
                  class="underline text-blue-400"
                >
                  <span>
                    Share dataset with the SPARC Consortium as Embargoed dataset
                  </span>
                </router-link>
              </span>
            </div>
          </label>
        </div>
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <router-link
                  to="/sodasparc/docs/Submit-for-pre-publishing-review"
                  class="underline text-blue-400"
                >
                  <span> Send dataset for pre-publishing review </span>
                </router-link>
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
    <!-- Template -->
    <!-- <div class="mb-3">
      <h2
        class="
          font-sans font-semibold
          text-base text-black
          dark:text-white
          mb-2
        "
      >
        Prepare Dataset on Pennsieve (under the Manage Datasets tab of the Free
        Form Mode)
      </h2>
      <div class="flex flex-col">
        <div>
          <label class="flex">
            <input
              type="checkbox"
              class="disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div class="ml-3">
              <span class="span-content">
                <a
                  href="https://sparc.science/help/7k8nEPuw3FjOq2HuS8OVsd"
                  target="_blank"
                  class="underline text-blue-400"
                >
                  Connect your Pennsieve account with SODA.
                </a>
                This is only required the first time you use SODA.
              </span>
            </div>
          </label>
        </div>
      </div>
    </div> -->
    <!-- Template End -->
  </div>
</template>

<script>
export default {
  name: "OrganizeSubmit",
  data() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
.span-content {
  @apply block leading-normal text-base text-black dark:text-white;
}

input {
  @apply mt-1 w-4 h-4 border-gray-300 rounded;
}
</style>
