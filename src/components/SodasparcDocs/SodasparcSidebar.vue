<template>
  <div class="relative bg-white dark:bg-gray-700">
    <div class="hidden sm:flex flex-col sm:flex-row sm:justify-around">
      <div class="w-72">
        <nav class="mt-4 px-6">
          <div v-for="section in sidebarList" :key="section.title" class="pb-3">
            <p
              class="
                text-black
                dark:text-white
                w-full
                border-b-2
                pb-2
                border-gray-100
                text-md
                font-normal
              "
            >
              {{ section.title }}
            </p>
            <div
              v-for="subsection in section.subsections"
              :key="subsection.subtitle"
            >
              <router-link
                :to="subsection.href"
                class="
                  hover:text-gray-800
                  font-thin
                  text-black
                  dark:text-white
                  hover:bg-gray-200
                  dark:hover:bg-gray-600
                  flex
                  items-center
                  p-1
                  my-1
                  transition-colors
                  duration-200
                  justify-start
                  rounded-lg
                "
              >
                <span class="mx-1 text-sm">
                  {{ subsection.subtitle }}
                </span>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SodasparcSidebar",
  data() {
    return {
      sidebarList: [
        {
          title: "Getting started",
          subsections: [
            {
              subtitle: "User interface",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Organize and submit SPARC datasets with SODA",
              href: "/sodasparc/docs/Organize-and-submit-SPARC-datasets-with-SODA",
            },
          ],
        },
        {
          title: "Manage Datasets",
          subsections: [
            {
              subtitle: "Connect your Pennsieve account with SODA",
              href: "/sodasparc/docs/Connect-your-Pennsieve-account-with-SODA",
            },
            {
              subtitle: "Create a new dataset",
              href: "/sodasparc/docs/Create-a-new-dataset",
            },
            {
              subtitle: "Rename an existing dataset",
              href: "/sodasparc/docs/Rename-an-existing-dataset",
            },
            {
              subtitle: "Make PI owner of dataset",
              href: "/sodasparc/docs/Make-PI-owner-of-dataset",
            },
            {
              subtitle: "Add edit permissions",
              href: "/sodasparc/docs/Add-edit-permissions",
            },
            {
              subtitle: "Add edit subtitle",
              href: "/sodasparc/docs/Add-edit-subtitle",
            },
            {
              subtitle: "Add edit description",
              href: "/sodasparc/docs/Add-edit-description",
            },
            {
              subtitle: "Upload a banner image",
              href: "/sodasparc/docs/Upload-a-banner-image",
            },
            {
              subtitle: "Assign a license",
              href: "/sodasparc/docs/Assign-a-license",
            },
            {
              subtitle: "Upload a local dataset to Pennsieve",
              href: "/sodasparc/docs/Upload-a-local-dataset-to-Pennsieve",
            },
            {
              subtitle: "View and change status",
              href: "/sodasparc/docs/View-and-change-status",
            },
          ],
        },
        {
          title: "Prepare Metadata",
          subsections: [
            {
              subtitle: "Connect your Airtable account with SODA",
              href: "/sodasparc/docs/Connect-your-Airtable-account-with-SODA",
            },
            {
              subtitle: "Create submission.xlsx",
              href: "/sodasparc/docs/Create-submission-xlsx",
            },
            {
              subtitle: "Create dataset_description.xlsx",
              href: "/sodasparc/docs/Create-dataset_description-xlsx",
            },
            {
              subtitle: "Create subjects.xlsx",
              href: "/sodasparc/docs/Create-subjects-xlsx",
            },
            {
              subtitle: "Create samples.xlsx",
              href: "/sodasparc/docs/Create-samples.xlsx",
            },
          ],
        },
        {
          title: "Prepare Datasets",
          subsections: [
            {
              subtitle: "Organize dataset",
              href: "/sodasparc/docs/Organize-dataset",
            },
            {
              subtitle: "Step 1: Getting started",
              href: "/sodasparc/docs/Organize-dataset/step-1",
            },
            {
              subtitle: "Step 2: Specify high-level folders",
              href: "/sodasparc/docs/Organize-dataset/step-2",
            },
            {
              subtitle: "Step 3: Structure dataset files",
              href: "/sodasparc/docs/Organize-dataset/step-3",
            },
            {
              subtitle: "Step 4: Specify high-level metadata files",
              href: "/sodasparc/docs/Organize-dataset/step-4",
            },
            {
              subtitle: "Step 5: Request manifest files",
              href: "/sodasparc/docs/Organize-dataset/step-5",
            },
            {
              subtitle: "Step 6: Generate dataset",
              href: "/sodasparc/docs/Organize-dataset/step-6",
            },
            {
              subtitle: "Step 7: Preview dataset",
              href: "/sodasparc/docs/Organize-dataset/step-7",
            },
          ],
        },
        {
          title: "Disseminate Datasets",
          subsections: [
            {
              subtitle: "Share with Curation Team",
              href: "/sodasparc/docs/Share-with-curation-team",
            },
            {
              subtitle: "Share with SPARC Consortium",
              href: "/sodasparc/docs/Share-with-SPARC-Consortium",
            },
            {
              subtitle: "Submit for pre-publishing review",
              href: "/sodasparc/docs/Submit-for-pre-publishing-review",
            },
          ],
        },
        {
          title: "Common errors and their solutions",
          subsections: [
            {
              subtitle: "Installing the Pennsieve Agent",
              href: "/sodasparc/docs/Installing-the-Pennsieve-agent",
            },
            {
              subtitle: "Pennsieve Agent is already running",
              href: "/sodasparc/docs/The-Pennsieve-agent-is-already-running",
            },
            {
              subtitle: "Sending log files to SODA Team",
              href: "/sodasparc/docs/Sending-log-files-to-SODA-Team",
            },
            {
              subtitle: "Issues regarding hidden files or folders",
              href: "/sodasparc/docs/Issues-regarding-hidden-files-or-folders",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.router-link-active {
  @apply bg-indigo-600 text-white;
}
</style>
