<template>
  <div>
    <base-docs-title :title="`Add edit permissions`"> </base-docs-title>
  </div>

  <div class="flex flex-col">
    <base-docs-subtitle> Background </base-docs-subtitle>

    <div class="p-parent-div">
      <p>
        There are four roles available for a dataset: owner, manager, editor,
        and viewer. Each of them provides different permissions for making
        changes to a dataset. These permissions are summarized in the table
        below. You can find out more about permissions on the associated
        <a
          href="https://docs.pennsieve.io/docs/dataset-permissions"
          target="_blank"
          rel="nofollow"
          class="hover:underline text-blue-600 dark:text-blue-400"
          >Pennsieve help page</a
        >.
      </p>
      <p>
        When you create a dataset, it is private and accessible only to you (you
        have 'owner' permissions on the dataset). You can change who can access
        and modify your dataset by giving permissions to members or entire
        teams.
      </p>
    </div>

    <div class="flex flex-col mb-6">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="
              shadow
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50 dark:bg-gray-500">
                <tr>
                  <th scope="col" class="">Permissions</th>
                  <th scope="col" class="">Owner</th>
                  <th scope="col" class="">Manager</th>
                  <th scope="col" class="">Editor</th>
                  <th scope="col" class="">Viewer</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-600 divide-y divide-gray-200">
                <tr v-for="item in permissionsList" :key="item.permission">
                  <td class="px-6 py-4 text-black dark:text-white">
                    {{ item.permission }}
                  </td>
                  <td class="px-6 py-4">{{ item.owner }}</td>
                  <td class="px-6 py-4">{{ item.manager }}</td>
                  <td class="px-6 py-4">{{ item.editor }}</td>
                  <td class="px-6 py-4">{{ item.viewer }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <base-docs-subtitle> How to </base-docs-subtitle>

    <div class="p-parent-div">
      <p>
        Start by selecting/confirming your Pennsieve account and dataset. If you
        have not connected your Pennsieve account with SODA yet, see
        <router-link
          to="/sodasparc/docs/Connect-your-Pennsieve-account-with-SODA"
          class="hover:underline text-blue-600 dark:text-blue-400"
        >
          <span>here</span> </router-link
        >. The current permissions on the selected dataset will be displayed.
      </p>
    </div>

    <base-docs-subtitle>
      Add/edit permissions for team members or teams
    </base-docs-subtitle>

    <ul class="docs-ul list-outside list-decimal">
      <li>Click on "Add/edit user permissions".</li>
      <li>Select the user from the dropdown list.</li>
      <li>Select a role from the dropdown list.</li>
      <li>Click on "Add permission for user".</li>
    </ul>

    <div class="img-parent-div">
      <img
        src="https://github.com/bvhpatel/SODA/raw/master/docs/documentation/Manage-datasets/Manage-permissions/add-permissions.gif"
      />
    </div>

    <base-docs-subtitle> Add/edit permissions for teams </base-docs-subtitle>

    <ul class="docs-ul list-outside list-decimal">
      <li>Click on "Add/edit team permissions".</li>
      <li>Select the team from the dropdown list.</li>
      <li>Select a role from the dropdown list.</li>
      <li>Click on "Add permission for team".</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AddEditPermissions",
  data() {
    return {
      permissionsList: [
        {
          permission: "View/download files",
          owner: "✅",
          manager: "✅",
          editor: "✅",
          viewer: "✅",
        },
        {
          permission: "Edit name of a dataset",
          owner: "✅",
          manager: "✅",
          editor: "✅",
          viewer: "❌",
        },
        {
          permission: "Upload/delete files",
          owner: "✅",
          manager: "✅",
          editor: "✅",
          viewer: "❌",
        },
        {
          permission: "Add metadata",
          owner: "✅",
          manager: "✅",
          editor: "❌",
          viewer: "❌",
        },
        {
          permission: "Manage permissions",
          owner: "✅",
          manager: "✅",
          editor: "❌",
          viewer: "❌",
        },
        {
          permission: "Change dataset status",
          owner: "✅",
          manager: "✅",
          editor: "❌",
          viewer: "❌",
        },
        {
          permission: "Share dataset with SPARC consortium (embargo)",
          owner: "✅",
          manager: "✅",
          editor: "❌",
          viewer: "❌",
        },
        {
          permission: "Reserve DOI",
          owner: "✅",
          manager: "✅",
          editor: "❌",
          viewer: "❌",
        },
        {
          permission: "Submit for pre-publishing review",
          owner: "✅ (+ORCID linked)",
          manager: "❌",
          editor: "❌",
          viewer: "❌",
        },
        {
          permission: "Delete dataset",
          owner: "✅",
          manager: "❌",
          editor: "❌",
          viewer: "❌",
        },
        {
          permission: "Change owner",
          owner: "✅",
          manager: "❌",
          editor: "❌",
          viewer: "❌",
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
th {
  @apply px-6 py-3 text-left text-base font-medium text-black dark:text-white;
}
</style>
