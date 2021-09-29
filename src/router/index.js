import { createRouter, createWebHistory } from "vue-router";

// Component imports
import HomePage from "../views/home/HomePage.vue";
import TheTeam from "../views/team/TheTeam.vue";
import ErrorPage from "../views/ErrorPage.vue";
import ContactUs from "../views/contact/ContactUs.vue";

import KnowMore from "../views/knowmore/KnowMore.vue";
import SparcLink from "../views/sparclink/SparcLink.vue";
import TheAqua from "../views/aqua/TheAqua.vue";

import SodaForSparc from "../views/SodaForSparc/SodaForSparc.vue";
import SodaForCovid from "../views/SodaForCovid/SodaForCovid.vue";

import SodaForSparcDocs from "../views/SodaForSparcDocs/SodaForSparcDocs.vue";

import DownloadSoda from "../views/SodaForSparcDocs/docs/getting-started/DownloadSoda.vue";
import UserInterface from "../views/SodaForSparcDocs/docs/getting-started/UserInterface.vue";
import OrganizeSubmit from "../views/SodaForSparcDocs/docs/getting-started/OrganizeSubmit.vue";
import OrganizeSubmitNewDataset from "../views/SodaForSparcDocs/docs/getting-started/OrganizeSubmitNewDataset.vue";

import ConnectPennsieveSODA from "../views/SodaForSparcDocs/docs/manage-datasets/ConnectPennsieveSODA.vue";
import ConnectPennsieveSODAAPIKey from "../views/SodaForSparcDocs/docs/manage-datasets/ConnectPennsieveSODAAPIKey.vue";
import CreateDataset from "../views/SodaForSparcDocs/docs/manage-datasets/CreateDataset.vue";
import RenameDataset from "../views/SodaForSparcDocs/docs/manage-datasets/RenameDataset.vue";
import MakePIDatasetOwner from "../views/SodaForSparcDocs/docs/manage-datasets/MakePIDatasetOwner.vue";
import AddEditPermissions from "../views/SodaForSparcDocs/docs/manage-datasets/AddEditPermissions.vue";
import AddEditSubtitle from "../views/SodaForSparcDocs/docs/manage-datasets/AddEditSubtitle.vue";
import AddEditDescription from "../views/SodaForSparcDocs/docs/manage-datasets/AddEditDescription.vue";
import UploadBannerImage from "../views/SodaForSparcDocs/docs/manage-datasets/UploadBannerImage.vue";
import AssignLicense from "../views/SodaForSparcDocs/docs/manage-datasets/AssignLicense.vue";
import UploadLocalDatasetPennsieve from "../views/SodaForSparcDocs/docs/manage-datasets/UploadLocalDatasetPennsieve.vue";
import ViewChangeStatus from "../views/SodaForSparcDocs/docs/manage-datasets/ViewChangeStatus.vue";

import ConnectAirtableSODA from "../views/SodaForSparcDocs/docs/prepare-metadata/ConnectAirtableSODA.vue";
import CreateSubmissionxlsx from "../views/SodaForSparcDocs/docs/prepare-metadata/CreateSubmissionxlsx.vue";
import CreateDatasetDescriptionxlsx from "../views/SodaForSparcDocs/docs/prepare-metadata/CreateDatasetDescriptionxlsx.vue";
import CreateSubjectsxlsx from "../views/SodaForSparcDocs/docs/prepare-metadata/CreateSubjectsxlsx.vue";
import CreateSamplesxlsx from "../views/SodaForSparcDocs/docs/prepare-metadata/CreateSamplesxlsx.vue";
import DownloadTemplates from "../views/SodaForSparcDocs/docs/prepare-metadata/DownloadTemplates.vue";
import DataDeliverables from "../views/SodaForSparcDocs/docs/prepare-metadata/DataDeliverables.vue";

import OrganizeDataset from "../views/SodaForSparcDocs/docs/prepare-datasets/OrganizeDataset.vue";
import OrganizeDatasetStep1 from "../views/SodaForSparcDocs/docs/prepare-datasets/OrganizeDatasetStep1.vue";
import OrganizeDatasetStep2 from "../views/SodaForSparcDocs/docs/prepare-datasets/OrganizeDatasetStep2.vue";
import OrganizeDatasetStep3 from "../views/SodaForSparcDocs/docs/prepare-datasets/OrganizeDatasetStep3.vue";
import OrganizeDatasetStep4 from "../views/SodaForSparcDocs/docs/prepare-datasets/OrganizeDatasetStep4.vue";
import OrganizeDatasetStep5 from "../views/SodaForSparcDocs/docs/prepare-datasets/OrganizeDatasetStep5.vue";
import OrganizeDatasetStep6 from "../views/SodaForSparcDocs/docs/prepare-datasets/OrganizeDatasetStep6.vue";
import OrganizeDatasetStep7 from "../views/SodaForSparcDocs/docs/prepare-datasets/OrganizeDatasetStep7.vue";

import ShareCurationTeam from "../views/SodaForSparcDocs/docs/disseminate-datasets/ShareCurationTeam.vue";
import ShareSPARCConsortium from "../views/SodaForSparcDocs/docs/disseminate-datasets/ShareSPARCConsortium.vue";
import SubmitPrePublishingReview from "../views/SodaForSparcDocs/docs/disseminate-datasets/SubmitPrePublishingReview.vue";

import InstallingPennsieveAgent from "../views/SodaForSparcDocs/docs/common-errors/InstallingPennsieveAgent.vue";
import PennsieveAgentAlreadyRunning from "../views/SodaForSparcDocs/docs/common-errors/PennsieveAgentAlreadyRunning.vue";
import SendingLogFiles from "../views/SodaForSparcDocs/docs/common-errors/SendingLogFiles.vue";
import IssuesHiddenFilesFolders from "../views/SodaForSparcDocs/docs/common-errors/IssuesHiddenFilesFolders.vue";

import HowToSubmission from "../views/SodaForSparcDocs/docs/how-to/HowToSubmission.vue";
import HowToDatasetDescription from "../views/SodaForSparcDocs/docs/how-to/HowToDatasetDescription.vue";
import HowToSubjects from "../views/SodaForSparcDocs/docs/how-to/HowToSubjects.vue";
import HowToSamples from "../views/SodaForSparcDocs/docs/how-to/HowToSamples.vue";
import HowToManifest from "../views/SodaForSparcDocs/docs/how-to/HowToManifest.vue";
import HowToDataDeliverables from "../views/SodaForSparcDocs/docs/how-to/HowToDataDeliverables.vue";


// router paths
const routes = [
  { path: "/", component: HomePage },
  { path: "/team", component: TheTeam },
  { path: "/sodaforsparc", component: SodaForSparc },
  { path: "/sodaforcovid", component: SodaForCovid },
  { path: "/knowmore", component: KnowMore },
  { path: "/sparclink", component: SparcLink },
  { path: "/aqua", component: TheAqua },
  { path: "/contactus", component: ContactUs },
  { path: "/sodaforsparc/docs", redirect: "/sodaforsparc/docs/User-Interface" },
  {
    path: "/sodaforsparc/docs",
    component: SodaForSparcDocs,
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
        path: "Organize-and-submit-a-new-SPARC-dataset-with-SODA",
        component: OrganizeSubmitNewDataset,
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
        path: "Create-samples-xlsx",
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
      {
        path: "How-to-structure-the-submission-metadata-file",
        component: HowToSubmission,
      },
      {
        path: "How-to-structure-the-dataset-description-metadata-file",
        component: HowToDatasetDescription,
      },
      {
        path: "How-to-structure-the-subjects-metadata-file",
        component: HowToSubjects,
      },
      {
        path: "How-to-structure-the-samples-metadata-file",
        component: HowToSamples,
      },
      {
        path: "How-to-structure-the-manifest-metadata-file",
        component: HowToManifest,
      },
      {
        path: "How-to-get-your-data-deliverables-document",
        component: HowToDataDeliverables,
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
