import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";

import HomePage from "./components/HomePage/HomePage.vue";
import TheTeam from "./components/TheTeam/TheTeam.vue";
import BaseSection from "./components/UI/BaseSection.vue";
import BaseDocscontent from "./components/UI/BaseDocscontent.vue";
import TheErrorPage from "./components/TheErrorPage/TheErrorPage.vue";
import SodaSparc from "./components/SodaSparc/SodaSparc.vue";
import SodasparcDocs from "./components/SodasparcDocs/SodasparcDocs.vue";
import SodaUI from "./components/SodasparcDocs/docs/getting-started/SodaUI.vue";
import OrganizeSubmit from "./components/SodasparcDocs/docs/getting-started/OrganizeSubmit.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: function (to, from, savedPosition) {
    if (from == savedPosition) {
      console.log(from, savedPosition);
    }
    if (savedPosition) {
      console.log("moving to saved position");
      return savedPosition;
    }
    if (to.hash) {
      console.log("moving to element");
      return { el: to.hash, behavior: "smooth" };
    } else {
      console.log("moving to top of the page");
      return { x: 0, y: 0 };
    }
  },
  routes: [
    { path: "/", name: "root", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/team", component: TheTeam },
    { path: "/sodasparc", component: SodaSparc },
    {
      path: "/sodasparc/docs",
      component: SodasparcDocs,
      children: [
        {
          path: "User-Interface",
          component: SodaUI,
        },
        {
          path: "Organize-and-submit-SPARC-datasets-with-SODA",
          component: OrganizeSubmit,
        },
        {
          path: "Connect-your-Pennsieve-account-with-SODA",
          component: OrganizeSubmit,
        },
        {
          path: "Create-a-new-dataset",
          component: OrganizeSubmit,
        },
        {
          path: "Rename-an-existing-dataset",
          component: OrganizeSubmit,
        },
        {
          path: "Make-PI-owner-of-dataset",
          component: OrganizeSubmit,
        },
        {
          path: "Add-edit-permissions",
          component: OrganizeSubmit,
        },
        {
          path: "Add-edit-subtitle",
          component: OrganizeSubmit,
        },
        {
          path: "Add-edit-description",
          component: OrganizeSubmit,
        },
        {
          path: "Upload-a-banner-image",
          component: OrganizeSubmit,
        },
        {
          path: "Assign-a-license",
          component: OrganizeSubmit,
        },
        {
          path: "Upload-a-local-dataset-to-Pennsieve",
          component: OrganizeSubmit,
        },
        {
          path: "View-and-change-status",
          component: OrganizeSubmit,
        },
        {
          path: "Connect-your-Airtable-account-with-SODA",
          component: OrganizeSubmit,
        },
        {
          path: "Create-submission-xlsx",
          component: OrganizeSubmit,
        },
        {
          path: "Create-dataset_description-xlsx",
          component: OrganizeSubmit,
        },
        {
          path: "Create-subjects-xlsx",
          component: OrganizeSubmit,
        },
        {
          path: "Create-samples.xlsx",
          component: OrganizeSubmit,
        },
        {
          path: "Organize-dataset",
          component: OrganizeSubmit,
        },
        {
          path: "Share-with-curation-team",
          component: OrganizeSubmit,
        },
        {
          path: "Share-with-SPARC-Consortium",
          component: OrganizeSubmit,
        },
        {
          path: "Submit-for-pre-publishing-review",
          component: OrganizeSubmit,
        },
        {
          path: "Installing-the-Pennsieve-agent",
          component: OrganizeSubmit,
        },
        {
          path: "The-Pennsieve-agent-is-already-running",
          component: OrganizeSubmit,
        },
        {
          path: "Sending-log-files-to-SODA-Team",
          component: OrganizeSubmit,
        },
        {
          path: "Issues-regarding-hidden-files-or-folders",
          component: OrganizeSubmit,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      components: { mainContent: TheErrorPage },
    },
  ],
});

const app = createApp(App);

app.component("base-section", BaseSection);
app.component("base-docs-content", BaseDocscontent);

app.use(router);

app.mount("#app");
