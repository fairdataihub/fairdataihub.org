<template>
  <div class="relative bg-white dark:bg-gray-800">
    <div class="flex flex-col sm:flex-row sm:justify-around">
      <div class="w-72 h-screen">
        <nav class="mt-4 px-6">
          <div v-for="section in sidebarList" :key="section.title" class="pb-3">
            <p
              class="
                text-black
                ml-2
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
                  dark:text-gray-400
                  hover:bg-gray-100
                  flex
                  items-center
                  p-1
                  my-0
                  transition-colors
                  dark:hover:text-white dark:hover:bg-gray-600
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
              subtitle: "Download and open SODA",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "User interface",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Organize and submit SPARC datasets with SODA",
              href: "/sodasparc/docs/Organize-and-submit-SPARC-datasets-with-SODA",
            },
            {
              subtitle: "Beta testing",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Privacy Policy",
              href: "/sodasparc/docs/user-interface",
            },
          ],
        },
        {
          title: "Manage Datasets",
          subsections: [
            {
              subtitle: "Connect your Pennsieve account with SODA",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Create a new dataset",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Rename an existing dataset",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Make PI owner of dataset",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Add edit permissions",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Add edit subtitle",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Add edit description",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Upload a banner image",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Assign a license",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Upload a local dataset to Pennsieve",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "View and change status",
              href: "/sodasparc/docs/user-interface",
            },
          ],
        },
        {
          title: "Prepare Metadata",
          subsections: [
            {
              subtitle: "Connect your Airtable account with SODA",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Create submission.xlsx",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Create dataset_description.xlsx",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Create subjects.xlsx",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Create samples.xlsx",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Download templates",
              href: "/sodasparc/docs/user-interface",
            },
          ],
        },
        {
          title: "Prepare Datasets",
          subsections: [
            {
              subtitle: "Organize dataset",
              href: "/sodasparc/docs/user-interface",
            },
          ],
        },
        {
          title: "Disseminate Datasets",
          subsections: [
            {
              subtitle: "Share with Curation Team",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Share with SPARC Consortium",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Submit for pre-publishing review",
              href: "/sodasparc/docs/user-interface",
            },
          ],
        },
        {
          title: "Common errors and their solutions",
          subsections: [
            {
              subtitle: "Installing the Pennsieve Agent",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Pennsieve Agent is already running",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Sending log files to SODA Team",
              href: "/sodasparc/docs/user-interface",
            },
            {
              subtitle: "Issues regarding hidden files or folders",
              href: "/sodasparc/docs/user-interface",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.router-link-exact-active {
  background-color: rgba(45, 96, 248, 0.829);
}
.router-link-exact-active:hover {
  background-color: royalblue;
}
</style>
