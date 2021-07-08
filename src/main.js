import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";

import BaseSection from "./components/UI/BaseSection.vue";
import BaseDocscontent from "./components/UI/BaseDocscontent.vue";
import BaseDocstitle from "./components/UI/BaseDocstitle.vue";
import BaseDocssubtitle from "./components/UI/BaseDocssubtitle.vue";
import BaseDocsheading from "./components/UI/BaseDocsheading.vue";

import HomePage from "./components/HomePage/HomePage.vue";
import TheTeam from "./components/TheTeam/TheTeam.vue";
import TheErrorPage from "./components/TheErrorPage/TheErrorPage.vue";
import SodaSparc from "./components/SodaSparc/SodaSparc.vue";

import SodasparcDocs from "./components/SodaSPARCDocs/SodasparcDocs.vue";

import DownloadSoda from "./components/SodaSPARCDocs/docs/getting-started/DownloadSoda.vue";
import UserInterface from "./components/SodaSPARCDocs/docs/getting-started/UserInterface.vue";
import OrganizeSubmit from "./components/SodaSPARCDocs/docs/getting-started/OrganizeSubmit.vue";

import ConnectPennsieveSODA from "./components/SodaSPARCDocs/docs/manage-datasets/ConnectPennsieveSODA.vue";
import ConnectPennsieveSODAAPIKey from "./components/SodaSPARCDocs/docs/manage-datasets/ConnectPennsieveSODAAPIKey.vue";
import CreateDataset from "./components/SodaSPARCDocs/docs/manage-datasets/CreateDataset.vue";
import RenameDataset from "./components/SodaSPARCDocs/docs/manage-datasets/RenameDataset.vue";
import MakePIDatasetOwner from "./components/SodaSPARCDocs/docs/manage-datasets/MakePIDatasetOwner.vue";
import AddEditPermissions from "./components/SodaSPARCDocs/docs/manage-datasets/AddEditPermissions.vue";
import AddEditSubtitle from "./components/SodaSPARCDocs/docs/manage-datasets/AddEditSubtitle.vue";
import AddEditDescription from "./components/SodaSPARCDocs/docs/manage-datasets/AddEditDescription.vue";
import UploadBannerImage from "./components/SodaSPARCDocs/docs/manage-datasets/UploadBannerImage.vue";
import AssignLicense from "./components/SodaSPARCDocs/docs/manage-datasets/AssignLicense.vue";
import UploadLocalDatasetPennsieve from "./components/SodaSPARCDocs/docs/manage-datasets/UploadLocalDatasetPennsieve.vue";
import ViewChangeStatus from "./components/SodaSPARCDocs/docs/manage-datasets/ViewChangeStatus.vue";

import ConnectAirtableSODA from "./components/SodaSPARCDocs/docs/prepare-metadata/ConnectAirtableSODA.vue";
import CreateSubmissionxlsx from "./components/SodaSPARCDocs/docs/prepare-metadata/CreateSubmissionxlsx.vue";
import CreateDatasetDescriptionxlsx from "./components/SodaSPARCDocs/docs/prepare-metadata/CreateDatasetDescriptionxlsx.vue";
import CreateSubjectsxlsx from "./components/SodaSPARCDocs/docs/prepare-metadata/CreateSubjectsxlsx.vue";
import CreateSamplesxlsx from "./components/SodaSPARCDocs/docs/prepare-metadata/CreateSamplesxlsx.vue";
import DownloadTemplates from "./components/SodaSPARCDocs/docs/prepare-metadata/DownloadTemplates.vue";
import DataDeliverables from "./components/SodaSPARCDocs/docs/prepare-metadata/DataDeliverables.vue";

import OrganizeDataset from "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDataset.vue";
import OrganizeDatasetStep1 from "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep1.vue";
import OrganizeDatasetStep2 from "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep2.vue";
import OrganizeDatasetStep3 from "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep3.vue";
import OrganizeDatasetStep4 from "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep4.vue";
import OrganizeDatasetStep5 from "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep5.vue";
import OrganizeDatasetStep6 from "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep6.vue";
import OrganizeDatasetStep7 from "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep7.vue";

import ShareCurationTeam from "./components/SodaSPARCDocs/docs/disseminate-datasets/ShareCurationTeam.vue";
import ShareSPARCConsortium from "./components/SodaSPARCDocs/docs/disseminate-datasets/ShareSPARCConsortium.vue";
import SubmitPrePublishingReview from "./components/SodaSPARCDocs/docs/disseminate-datasets/SubmitPrePublishingReview.vue";

import InstallingPennsieveAgent from "./components/SodaSPARCDocs/docs/common-errors/InstallingPennsieveAgent.vue";
import PennsieveAgentAlreadyRunning from "./components/SodaSPARCDocs/docs/common-errors/PennsieveAgentAlreadyRunning.vue";
import SendingLogFiles from "./components/SodaSPARCDocs/docs/common-errors/SendingLogFiles.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      console.log("moving to top of the page");
      window.scrollTo(0, 0);
    }
  },
  routes: [
    { path: "/", name: "root", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/team", component: TheTeam },
    { path: "/sodasparc", component: SodaSparc },
    { path: "/sodasparc/docs", redirect: "/sodasparc/docs/User-Interface" },
    {
      path: "/sodasparc/docs",
      component: SodasparcDocs,
      children: [
        {
          path: "Download-soda",
          component: DownloadSoda,
        },
        {
          path: "User-Interface",
          component: UserInterface,
        },
        {
          path: "Organize-and-submit-SPARC-datasets-with-SODA",
          component: OrganizeSubmit,
        },
        {
          path: "Connect-your-Pennsieve-account-with-SODA",
          component: ConnectPennsieveSODA,
        },
        {
          path: "Connect-your-Pennsieve-account-with-SODA-(API-Key)",
          component: ConnectPennsieveSODAAPIKey,
        },
        {
          path: "Create-a-new-dataset",
          component: CreateDataset,
        },
        {
          path: "Rename-an-existing-dataset",
          component: RenameDataset,
        },
        {
          path: "Make-PI-owner-of-dataset",
          component: MakePIDatasetOwner,
        },
        {
          path: "Add-edit-permissions",
          component: AddEditPermissions,
        },
        {
          path: "Add-edit-subtitle",
          component: AddEditSubtitle,
        },
        {
          path: "Add-edit-description",
          component: AddEditDescription,
        },
        {
          path: "Upload-a-banner-image",
          component: UploadBannerImage,
        },
        {
          path: "Assign-a-license",
          component: AssignLicense,
        },
        {
          path: "Upload-a-local-dataset-to-Pennsieve",
          component: UploadLocalDatasetPennsieve,
        },
        {
          path: "View-and-change-status",
          component: ViewChangeStatus,
        },
        {
          path: "Connect-your-Airtable-account-with-SODA",
          component: ConnectAirtableSODA,
        },
        {
          path: "Create-submission-xlsx",
          component: CreateSubmissionxlsx,
        },
        {
          path: "Create-dataset_description-xlsx",
          component: CreateDatasetDescriptionxlsx,
        },
        {
          path: "Create-subjects-xlsx",
          component: CreateSubjectsxlsx,
        },
        {
          path: "Create-samples.xlsx",
          component: CreateSamplesxlsx,
        },
        {
          path: "Download-templates",
          component: DownloadTemplates,
        },
        {
          path: "How-to-get-your-data-deliverables-document",
          component: DataDeliverables,
        },
        {
          path: "Organize-dataset",
          component: OrganizeDataset,
        },
        {
          path: "Organize-dataset/step-1",
          component: OrganizeDatasetStep1,
        },
        {
          path: "Organize-dataset/step-2",
          component: OrganizeDatasetStep2,
        },
        {
          path: "Organize-dataset/step-3",
          component: OrganizeDatasetStep3,
        },
        {
          path: "Organize-dataset/step-4",
          component: OrganizeDatasetStep4,
        },
        {
          path: "Organize-dataset/step-5",
          component: OrganizeDatasetStep5,
        },
        {
          path: "Organize-dataset/step-6",
          component: OrganizeDatasetStep6,
        },
        {
          path: "Organize-dataset/step-7",
          component: OrganizeDatasetStep7,
        },
        {
          path: "Share-with-curation-team",
          component: ShareCurationTeam,
        },
        {
          path: "Share-with-SPARC-Consortium",
          component: ShareSPARCConsortium,
        },
        {
          path: "Submit-for-pre-publishing-review",
          component: SubmitPrePublishingReview,
        },
        {
          path: "Installing-the-Pennsieve-agent",
          component: InstallingPennsieveAgent,
        },
        {
          path: "The-Pennsieve-agent-is-already-running",
          component: PennsieveAgentAlreadyRunning,
        },
        {
          path: "Sending-log-files-to-SODA-Team",
          component: SendingLogFiles,
        },
        {
          path: "Issues-regarding-hidden-files-or-folders",
          component: OrganizeSubmit,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: TheErrorPage,
    },
  ],
});

const app = createApp(App);

app.component("base-section", BaseSection);
app.component("base-docs-content", BaseDocscontent);
app.component("base-docs-title", BaseDocstitle);
app.component("base-docs-subtitle", BaseDocssubtitle);
app.component("base-docs-heading", BaseDocsheading);

app.use(router);

app.mount("#app");
