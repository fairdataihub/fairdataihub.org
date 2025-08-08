---
title: 'SODA for SPARC Release v7.0.0'
authors:
  - 'ChristopherMarroquin'
date: '2022-07-25'
category: 'Product'
heroImage: 'https://images.unsplash.com/photo-1604156787150-ce07a9d1fd37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
imageAuthor: 'Timur Garifov'
imageAuthorLink: 'https://unsplash.com/@timgarifov'
subtitle: 'SODA for SPARC v7.0.0 release includes updates to match the evolving SDS standard and ui/ux improvements.'
tags:
  - sodaforsparc
  - releases
  - sparc
  - sds
  - metadata
---

SODA for SPARC is an open source software by the FAIR Data Innovations Hub that is simplifying data curation for researchers funded by the [NIH SPARC initiative](https://sparc.science/).

In order to make this software as useful as possible for SPARC researchers we keep up to date with the ever evolving SPARC SDS standard. Recently the standard has evolved to require that README.txt metadata files be included in all SPARC datasets. As a result, users of SODA for SPARC v7.0.0 will receive a warning when curating a dataset that does not have a `README.txt` file.

This update also includes significant improvements to SODA for SPARC's UI/UX. In particular we have removed tooltips and made instructional/informative text visible at all times; not just on hover. This decision makes the UI more usable for new and returning SPARC researchers as important information is no longer hidden from the user. Animations have also been added to the UI to modernize the look and feel of the application.

If you don't have SODA for SPARC you can download it [here](https://docs.sodaforsparc.io/docs/getting-started/download-soda). If you do have SODA for SPARC your application will auto-update to the latest version.

## Full Change Log

### Features:

- The evolving SPARC Dataset Structure (SDS) all SPARC datasets must follow now includes additional mandatory metadata files. As such, in `Step 4` of the `Organize Dataset` feature, found in the `Prepare Datasets` tab, the `README.txt` file is now mandatory.
- Layout of the `Prepare Metadata` tab has been changed. Buttons are spread out more evenly and the Manifest files button received an icon change.
- The `Overview` page has been overhauled to be more informative and visually stimulating.
- Documentation and `Contact Us` tabs added to the navigation bar.
- `Contact Us` tab will provide user information on how to reach out to the team for any issues or suggestions. As well as providing a `Gather Logs` button for the user to provide in an email for the team to look at any issues in depth.
- Visual overhaul for the prompts that allow users to connect their Pennsieve account with SODA.
- Simplified UI for adding a URL or DOI to a `dataset_description.xlsx` in the `Prepare Metadata` tab.
- Converted the SODA server from Zerorpc to Flask.

### Bug Fixes:

- The option to upload duplicate files to an existing Pennsieve dataset through the Organize Datasets feature no longer causes an error while uploading.
- Hidden files can now be imported except `.DS_Store` and `Thumbs.db` files.
- The input for renaming or creating a new dataset no longer references undefined function in its HTML.
- The navigation buttons in each individual `Prepare Metadata` section have been updated to match the perceived flow from the `Prepare Metadata` tab.
- The `Add/edit subtitle` feature has been updated so that the character limit matches the SDS 2.0 specification. This fixes a bug that would cause an error if a user met the character limit enforced by SODA and then tried to add or edit their subtitle.

### Known Issues:

- There is a bug with removing dataset permissions using both SODA and Pennsieve. If you want to remove your own permission from a dataset, another user with either 'Manager' or 'Owner' permissions must remove you from the dataset. This is an issue with Pennsieve's backend system and will be updated soon.
- When uploading a dataset through `Upload Local Dataset` or `Organize Dataset` feature to Pennsieve the upload will sometimes freeze. When this occurs it is best to reset the upload and ensure the Pennsieve Agent has been stopped before attempting to upload again. It is also necessary to verify the integrity of uploaded files up to that point. This can be done by simply ensuring all files from folders that have been uploaded are included in the Pennsieve dataset.
- The `Organize Dataset` option to upload duplicate files to Pennsieve uploads some duplicates but does not upload all.
- When using the `Create manifest.xlsx` feature any custom columns added to a manifest file stored on Pennsieve will not be imported for editing.
- The `Create manifest.xlsx` feature will spawn an error while generating manifest files for a local dataset if there are hidden files in the dataset directory. SODA will not tell the user the cause is the presence of the hidden files.
