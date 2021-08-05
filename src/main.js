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

import KnowMore from "./components/KnowMore/KnowMore.vue";
import SparcLink from "./components/SparcLink/SparcLink.vue";
import TheAqua from "./components/Aqua/TheAqua.vue";

const SodaSparc = () =>
  import(
    /* webpackChunkName: "group-soda-sparc" */ "./components/SodaSparc/SodaSparc.vue"
  );

const SodasparcDocs = () =>
  import(
    /* webpackChunkName: "group-soda-sparc" */ "./components/SodaSPARCDocs/SodasparcDocs.vue"
  );

const DownloadSoda = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-getting-started" */ "./components/SodaSPARCDocs/docs/getting-started/DownloadSoda.vue"
  );
const UserInterface = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-getting-started" */ "./components/SodaSPARCDocs/docs/getting-started/UserInterface.vue"
  );
const OrganizeSubmit = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-getting-started" */ "./components/SodaSPARCDocs/docs/getting-started/OrganizeSubmit.vue"
  );

const ConnectPennsieveSODA = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */
    "./components/SodaSPARCDocs/docs/manage-datasets/ConnectPennsieveSODA.vue"
  );
const ConnectPennsieveSODAAPIKey = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */
    "./components/SodaSPARCDocs/docs/manage-datasets/ConnectPennsieveSODAAPIKey.vue"
  );
const CreateDataset = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */ "./components/SodaSPARCDocs/docs/manage-datasets/CreateDataset.vue"
  );
const RenameDataset = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */ "./components/SodaSPARCDocs/docs/manage-datasets/RenameDataset.vue"
  );
const MakePIDatasetOwner = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */
    "./components/SodaSPARCDocs/docs/manage-datasets/MakePIDatasetOwner.vue"
  );
const AddEditPermissions = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */
    "./components/SodaSPARCDocs/docs/manage-datasets/AddEditPermissions.vue"
  );
const AddEditSubtitle = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */ "./components/SodaSPARCDocs/docs/manage-datasets/AddEditSubtitle.vue"
  );
const AddEditDescription = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */
    "./components/SodaSPARCDocs/docs/manage-datasets/AddEditDescription.vue"
  );
const UploadBannerImage = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */
    "./components/SodaSPARCDocs/docs/manage-datasets/UploadBannerImage.vue"
  );
const AssignLicense = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */ "./components/SodaSPARCDocs/docs/manage-datasets/AssignLicense.vue"
  );
const UploadLocalDatasetPennsieve = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */
    "./components/SodaSPARCDocs/docs/manage-datasets/UploadLocalDatasetPennsieve.vue"
  );
const ViewChangeStatus = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-manage-datasets" */
    "./components/SodaSPARCDocs/docs/manage-datasets/ViewChangeStatus.vue"
  );

const ConnectAirtableSODA = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-metadata" */
    "./components/SodaSPARCDocs/docs/prepare-metadata/ConnectAirtableSODA.vue"
  );
const CreateSubmissionxlsx = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-metadata" */
    "./components/SodaSPARCDocs/docs/prepare-metadata/CreateSubmissionxlsx.vue"
  );
const CreateDatasetDescriptionxlsx = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-metadata" */
    "./components/SodaSPARCDocs/docs/prepare-metadata/CreateDatasetDescriptionxlsx.vue"
  );
const CreateSubjectsxlsx = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-metadata" */
    "./components/SodaSPARCDocs/docs/prepare-metadata/CreateSubjectsxlsx.vue"
  );
const CreateSamplesxlsx = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-metadata" */
    "./components/SodaSPARCDocs/docs/prepare-metadata/CreateSamplesxlsx.vue"
  );
const DownloadTemplates = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-metadata" */
    "./components/SodaSPARCDocs/docs/prepare-metadata/DownloadTemplates.vue"
  );
const DataDeliverables = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-metadata" */
    "./components/SodaSPARCDocs/docs/prepare-metadata/DataDeliverables.vue"
  );

const OrganizeDataset = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-datasets" */
    "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDataset.vue"
  );
const OrganizeDatasetStep1 = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-datasets" */
    "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep1.vue"
  );
const OrganizeDatasetStep2 = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-datasets" */
    "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep2.vue"
  );
const OrganizeDatasetStep3 = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-datasets" */
    "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep3.vue"
  );
const OrganizeDatasetStep4 = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-datasets" */
    "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep4.vue"
  );
const OrganizeDatasetStep5 = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-datasets" */
    "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep5.vue"
  );
const OrganizeDatasetStep6 = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-datasets" */
    "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep6.vue"
  );
const OrganizeDatasetStep7 = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-prepare-datasets" */
    "./components/SodaSPARCDocs/docs/prepare-datasets/OrganizeDatasetStep7.vue"
  );

const ShareCurationTeam = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-disseminate-datasets" */
    "./components/SodaSPARCDocs/docs/disseminate-datasets/ShareCurationTeam.vue"
  );
const ShareSPARCConsortium = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-disseminate-datasets" */
    "./components/SodaSPARCDocs/docs/disseminate-datasets/ShareSPARCConsortium.vue"
  );
const SubmitPrePublishingReview = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-disseminate-datasets" */
    "./components/SodaSPARCDocs/docs/disseminate-datasets/SubmitPrePublishingReview.vue"
  );

const InstallingPennsieveAgent = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-common-errors" */
    "./components/SodaSPARCDocs/docs/common-errors/InstallingPennsieveAgent.vue"
  );
const PennsieveAgentAlreadyRunning = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-common-errors" */
    "./components/SodaSPARCDocs/docs/common-errors/PennsieveAgentAlreadyRunning.vue"
  );
const SendingLogFiles = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-common-errors" */ "./components/SodaSPARCDocs/docs/common-errors/SendingLogFiles.vue"
  );
const IssuesHiddenFilesFolders = () =>
  import(
    /* webpackChunkName: "group-soda-sparc-docs-common-errors" */
    "./components/SodaSPARCDocs/docs/common-errors/IssuesHiddenFilesFolders.vue"
  );

const router = createRouter({
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
  routes: [
    { path: "/", component: HomePage },
    { path: "/team", component: TheTeam },
    { path: "/sodasparc", component: SodaSparc },
    { path: "/knowmore", component: KnowMore },
    { path: "/sparclink", component: SparcLink },
    { path: "/aqua", component: TheAqua },
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
