<template>
  <base-section class="pt-16 print:pt-0 dark:bg-dark-background">
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
          <sodasparc-sidebar :sidebarList="sidebarList"> </sodasparc-sidebar>
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
        <mobilesodasparc-sidebar :sidebarList="sidebarList">
        </mobilesodasparc-sidebar>
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
          <base-docs-content>
            <router-view v-slot="{ Component }">
              <transition name="docs-view" appear mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </base-docs-content>
        </div>
      </div>
    </div>
  </base-section>
</template>

<script>
import SodasparcSidebar from "./SodasparcSidebar.vue";
import MobilesodasparcSidebar from "./MobilesodasparcSidebar.vue";

export default {
  components: { SodasparcSidebar, MobilesodasparcSidebar },
  name: "SodasparcDocs",
  data() {
    return {
      sidebarList: [
        {
          title: "Getting started",
          subsections: [
            {
              subtitle: "Download SODA",
              href: "/sodasparc/docs/Download-Soda",
            },
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
          title: "Manage Dataset",
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
            {
              subtitle: "Download templates",
              href: "/sodasparc/docs/Download-templates",
            },
          ],
        },
        {
          title: "Prepare Dataset",
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
          title: "Disseminate Dataset",
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

<style scoped>
.test {
  height: calc(100vh - 4em);
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* button */
::-webkit-scrollbar-button {
  background: rgba(220, 222, 224, 0.849);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(155, 152, 152);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(115, 117, 117);
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(220, 222, 224, 0.849);
}

/* The track NOT covered by the handle. */
::-webkit-scrollbar-track-piece {
  background: rgba(220, 222, 224, 0.849);
}

/* Corner */
::-webkit-scrollbar-corner {
  background: rgba(220, 222, 224, 0.849);
}

/* Resizer */
::-webkit-resizer {
  background: rgba(220, 222, 224, 0.849);
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
