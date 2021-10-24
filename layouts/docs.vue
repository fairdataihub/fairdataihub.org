<template>
  <AppHeader></AppHeader>
  <base-section class="print:pt-0 dark:bg-dark-background">
    <div
      class="
        w-full
        max-w-screen-xl
        gap-4
        mb-8
        md:mb-0
        p-0
        mx-auto
        flex flex-col
        sm:flex-row
        items-center
        sm:justify-center
        relative
      "
    >
      <div
        class="hidden sm:block top-16 sm:w-4/12 md:w-3/12 lg:w-1/5 print:hidden"
      >
        <div class="top-0 absolute bottom-0" style="overflow-y: scroll">
          <SodaForSparcSidebar :sidebarList="sidebarList" />
        </div>
      </div>
      <div
        class="
          w-full
          sm:hidden
          flex
          justify-center
          bg-gray-50
          p-2
          z-0
          print:hidden
        "
      >
        <MobileSodaForSparcSidebar :sidebarList="sidebarList">
        </MobileSodaForSparcSidebar>
      </div>
      <div
        class="
          bg-gray-50
          dark:bg-dark-background
          top-16
          w-full
          sm:w-8/12
          md:w-9/12
          lg:w-4/5
        "
      >
        <div class="sm:top-0 sm:bottom-0 sm:right-0 sm:overflow-auto test">
          <BaseDocsContent><slot /></BaseDocsContent>
          <!-- <base-docs-content>
            <router-view v-slot="{ Component }">
              <transition name="docs-view" appear mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </base-docs-content> -->
        </div>
      </div>
    </div>
  </base-section>
</template>

<script>
import AppHeader from "~~/components/UI/AppHeader.vue";
import BaseSection from "~~/components/UI/BaseSection.vue";
import BaseDocsContent from "~~/components/UI/BaseDocsContent.vue";
import SodaForSparcSidebar from "~~/components/sodaforsparcdocs/SodaForSparcSidebar.vue";
import MobileSodaForSparcSidebar from "~~/components/sodaforsparcdocs/SodaForSparcSidebar.vue";

export default {
  components: {
    SodaForSparcSidebar,
    MobileSodaForSparcSidebar,
    BaseDocsContent,
    BaseSection,
    AppHeader,
  },
  data() {
    return {
      sidebarList: [
        {
          title: "Getting started",
          subsections: [
            {
              subtitle: "Download SODA",
              href: "/sodaforsparc/docs/Download-Soda",
            },
            {
              subtitle: "User interface",
              href: "/sodaforsparc/docs/user-interface",
            },
            {
              subtitle:
                "Checklist to organize and submit SPARC datasets with SODA",
              href: "/sodaforsparc/docs/Organize-and-submit-SPARC-datasets-with-SODA",
            },
            {
              subtitle: "Organize and submit a new SPARC dataset with SODA",
              href: "/sodaforsparc/docs/Organize-and-submit-a-new-SPARC-dataset-with-SODA",
            },
          ],
        },
        {
          title: "Manage Dataset",
          subsections: [
            {
              subtitle: "Connect your Pennsieve account with SODA",
              href: "/sodaforsparc/docs/Connect-your-Pennsieve-account-with-SODA",
            },
            {
              subtitle: "Create a new dataset",
              href: "/sodaforsparc/docs/Create-a-new-dataset",
            },
            {
              subtitle: "Rename an existing dataset",
              href: "/sodaforsparc/docs/Rename-an-existing-dataset",
            },
            {
              subtitle: "Make PI owner of dataset",
              href: "/sodaforsparc/docs/Make-PI-owner-of-dataset",
            },
            {
              subtitle: "Add edit permissions",
              href: "/sodaforsparc/docs/Add-edit-permissions",
            },
            {
              subtitle: "Add edit subtitle",
              href: "/sodaforsparc/docs/Add-edit-subtitle",
            },
            {
              subtitle: "Add edit description",
              href: "/sodaforsparc/docs/Add-edit-description",
            },
            {
              subtitle: "Upload a banner image",
              href: "/sodaforsparc/docs/Upload-a-banner-image",
            },
            {
              subtitle: "Assign a license",
              href: "/sodaforsparc/docs/Assign-a-license",
            },
            {
              subtitle: "Upload a local dataset to Pennsieve",
              href: "/sodaforsparc/docs/Upload-a-local-dataset-to-Pennsieve",
            },
            {
              subtitle: "View and change status",
              href: "/sodaforsparc/docs/View-and-change-status",
            },
          ],
        },
        {
          title: "Prepare Metadata",
          subsections: [
            {
              subtitle: "Connect your Airtable account with SODA",
              href: "/sodaforsparc/docs/Connect-your-Airtable-account-with-SODA",
            },
            {
              subtitle: "Create submission.xlsx",
              href: "/sodaforsparc/docs/Create-submission-xlsx",
            },
            {
              subtitle: "Create dataset_description.xlsx",
              href: "/sodaforsparc/docs/Create-dataset_description-xlsx",
            },
            {
              subtitle: "Create subjects.xlsx",
              href: "/sodaforsparc/docs/Create-subjects-xlsx",
            },
            {
              subtitle: "Create samples.xlsx",
              href: "/sodaforsparc/docs/Create-samples-xlsx",
            },
            {
              subtitle: "Download templates",
              href: "/sodaforsparc/docs/Download-templates",
            },
          ],
        },
        {
          title: "Prepare Dataset",
          subsections: [
            {
              subtitle: "Organize dataset",
              href: "/sodaforsparc/docs/Organize-dataset",
            },
            {
              subtitle: "Step 1: Getting started",
              href: "/sodaforsparc/docs/Organize-dataset/step-1",
            },
            {
              subtitle: "Step 2: Specify high-level folders",
              href: "/sodaforsparc/docs/Organize-dataset/step-2",
            },
            {
              subtitle: "Step 3: Structure dataset files",
              href: "/sodaforsparc/docs/Organize-dataset/step-3",
            },
            {
              subtitle: "Step 4: Specify high-level metadata files",
              href: "/sodaforsparc/docs/Organize-dataset/step-4",
            },
            {
              subtitle: "Step 5: Request manifest files",
              href: "/sodaforsparc/docs/Organize-dataset/step-5",
            },
            {
              subtitle: "Step 6: Generate dataset",
              href: "/sodaforsparc/docs/Organize-dataset/step-6",
            },
            {
              subtitle: "Step 7: Preview dataset",
              href: "/sodaforsparc/docs/Organize-dataset/step-7",
            },
          ],
        },
        {
          title: "Disseminate Dataset",
          subsections: [
            {
              subtitle: "Share with Curation Team",
              href: "/sodaforsparc/docs/Share-with-curation-team",
            },
            {
              subtitle: "Share with SPARC Consortium",
              href: "/sodaforsparc/docs/Share-with-SPARC-Consortium",
            },
            {
              subtitle: "Submit for pre-publishing review",
              href: "/sodaforsparc/docs/Submit-for-pre-publishing-review",
            },
          ],
        },
        {
          title: "Common errors and their solutions",
          subsections: [
            {
              subtitle: "Installing the Pennsieve Agent",
              href: "/sodaforsparc/docs/Installing-the-Pennsieve-agent",
            },
            {
              subtitle: "Pennsieve Agent is already running",
              href: "/sodaforsparc/docs/The-Pennsieve-agent-is-already-running",
            },
            {
              subtitle: "Sending log files to SODA Team",
              href: "/sodaforsparc/docs/Sending-log-files-to-SODA-Team",
            },
            {
              subtitle: "Issues regarding hidden files or folders",
              href: "/sodaforsparc/docs/Issues-regarding-hidden-files-or-folders",
            },
          ],
        },
        {
          title: "'How to' SPARC series",
          subsections: [
            {
              subtitle: "How to structure the submission metadata file",
              href: "/sodaforsparc/docs/How-to-structure-the-submission-metadata-file",
            },
            {
              subtitle:
                "How to structure the dataset_description metadata file",
              href: "/sodaforsparc/docs/How-to-structure-the-dataset-description-metadata-file",
            },
            {
              subtitle: "How to structure the subjects metadata file",
              href: "/sodaforsparc/docs/How-to-structure-the-subjects-metadata-file",
            },
            {
              subtitle: "How to structure the samples metadata file",
              href: "/sodaforsparc/docs/How-to-structure-the-samples-metadata-file",
            },
            {
              subtitle: "How to structure the manifest metadata file",
              href: "/sodaforsparc/docs/How-to-structure-the-manifest-metadata-file",
            },
            {
              subtitle: "How to get your Data Deliverables document",
              href: "/sodaforsparc/docs/How-to-get-your-data-deliverables-document",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.test {
  height: calc(100vh - 4em);
}

.docs-view-enter-active,
.docs-view-leave-active {
  transition: all 0.4s ease-in-out;
}
.docs-view-enter,
.docs-view-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
