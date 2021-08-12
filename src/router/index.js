import { createRouter, createWebHistory } from "vue-router";

// Component imports
import HomePage from "../views/home/HomePage.vue";
import TheTeam from "../views/team/TheTeam.vue";
import ErrorPage from "../views/ErrorPage.vue";
import ContactUs from "../views/contact/ContactUs.vue";

import KnowMore from "../views/knowmore/KnowMore.vue";
import SparcLink from "../views/sparclink/SparcLink.vue";
import TheAqua from "../views/aqua/TheAqua.vue";

import SodaSparc from "../views/SodaSparc/SodaSparc.vue";

import SodasparcDocs from "../views/SodaSPARCDocs/SodasparcDocs.vue";

import DownloadSoda from "../views/SodaSPARCDocs/docs/getting-started/DownloadSoda.vue";
import UserInterface from "../views/SodaSPARCDocs/docs/getting-started/UserInterface.vue";
import OrganizeSubmit from "../views/SodaSPARCDocs/docs/getting-started/OrganizeSubmit.vue";

import ConnectPennsieveSODA from "../views/SodaSPARCDocs/docs/manage-datasets/ConnectPennsieveSODA.vue";
import ConnectPennsieveSODAAPIKey from "../views/SodaSPARCDocs/docs/manage-datasets/ConnectPennsieveSODAAPIKey.vue";
import CreateDataset from "../views/SodaSPARCDocs/docs/manage-datasets/CreateDataset.vue";
import RenameDataset from "../views/SodaSPARCDocs/docs/manage-datasets/RenameDataset.vue";
import MakePIDatasetOwner from "../views/SodaSPARCDocs/docs/manage-datasets/MakePIDatasetOwner.vue";
import AddEditPermissions from "../views/SodaSPARCDocs/docs/manage-datasets/AddEditPermissions.vue";
import AddEditSubtitle from "../views/SodaSPARCDocs/docs/manage-datasets/AddEditSubtitle.vue";
import AddEditDescription from "../views/SodaSPARCDocs/docs/manage-datasets/AddEditDescription.vue";
import UploadBannerImage from "../views/SodaSPARCDocs/docs/manage-datasets/UploadBannerImage.vue";
import AssignLicense from "../views/SodaSPARCDocs/docs/manage-datasets/AssignLicense.vue";
import UploadLocalDatasetPennsieve from "../views/SodaSPARCDocs/docs/manage-datasets/UploadLocalDatasetPennsieve.vue";
import ViewChangeStatus from "../views/SodaSPARCDocs/docs/manage-datasets/ViewChangeStatus.vue";

import ConnectAirtableSODA from "../views/SodaSPARCDocs/docs/prepare-metadata/ConnectAirtableSODA.vue";
import CreateSubmissionxlsx from "../views/SodaSPARCDocs/docs/prepare-metadata/CreateSubmissionxlsx.vue";
import CreateDatasetDescriptionxlsx from "../views/SodaSPARCDocs/docs/prepare-metadata/CreateDatasetDescriptionxlsx.vue";
import CreateSubjectsxlsx from "../views/SodaSPARCDocs/docs/prepare-metadata/CreateSubjectsxlsx.vue";
import CreateSamplesxlsx from "../views/SodaSPARCDocs/docs/prepare-metadata/CreateSamplesxlsx.vue";
import DownloadTemplates from "../views/SodaSPARCDocs/docs/prepare-metadata/DownloadTemplates.vue";
import DataDeliverables from "../views/SodaSPARCDocs/docs/prepare-metadata/DataDeliverables.vue";

import OrganizeDataset from "../views/SodaSPARCDocs/docs/prepare-datasets/OrganizeDataset.vue";
import OrganizeDatasetStep1 from "../views/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep1.vue";
import OrganizeDatasetStep2 from "../views/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep2.vue";
import OrganizeDatasetStep3 from "../views/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep3.vue";
import OrganizeDatasetStep4 from "../views/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep4.vue";
import OrganizeDatasetStep5 from "../views/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep5.vue";
import OrganizeDatasetStep6 from "../views/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep6.vue";
import OrganizeDatasetStep7 from "../views/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep7.vue";

import ShareCurationTeam from "../views/SodaSPARCDocs/docs/disseminate-datasets/ShareCurationTeam.vue";
import ShareSPARCConsortium from "../views/SodaSPARCDocs/docs/disseminate-datasets/ShareSPARCConsortium.vue";
import SubmitPrePublishingReview from "../views/SodaSPARCDocs/docs/disseminate-datasets/SubmitPrePublishingReview.vue";

import InstallingPennsieveAgent from "../views/SodaSPARCDocs/docs/common-errors/InstallingPennsieveAgent.vue";
import PennsieveAgentAlreadyRunning from "../views/SodaSPARCDocs/docs/common-errors/PennsieveAgentAlreadyRunning.vue";
import SendingLogFiles from "../views/SodaSPARCDocs/docs/common-errors/SendingLogFiles.vue";
import IssuesHiddenFilesFolders from "../views/SodaSPARCDocs/docs/common-errors/IssuesHiddenFilesFolders.vue";

// router paths
const routes = [
  { path: "/", component: HomePage },
  { path: "/team", component: TheTeam },
  { path: "/sodasparc", component: SodaSparc },
  { path: "/knowmore", component: KnowMore },
  { path: "/sparclink", component: SparcLink },
  { path: "/aqua", component: TheAqua },
  { path: "/contact", component: ContactUs },
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
        component: IssuesHiddenFilesFolders,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      window.scrollTo(0, 0);
    }
  },
  routes,
});
