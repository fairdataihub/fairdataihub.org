---
title: 'SODA for SPARC Release v8.0.0'
authors:
  - 'ChristopherMarroquin'
date: '2022-08-08'
category: 'Product'
heroImage: 'https://images.unsplash.com/photo-1566933883366-5125a3414299?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
subtitle: 'SODA for SPARC v8.0.0 release is now available.'
tags:
  - sodaforsparc
  - releases
---

SODA for SPARC is an open source software by the Fair Data Innovations Hub that is simplifying data curation for researchers funded by the [NIH SPARC initiative](https://sparc.science/). 

If you don't have SODA for SPARC you can download it [here](https://docs.sodaforsparc.io/docs/getting-started/download-soda). If you do have SODA for SPARC your application will auto-update to the latest version for you. 

### Features: 
- Updated Electron to version 19.0.0.

### Known Issues:
- There is a bug with removing dataset permissions using both SODA and Pennsieve. If you want to remove your own permission from a dataset, another user with either 'Manager' or 'Owner' permissions must remove you from the dataset. This is an issue with Pennsieve's backend system and will be updated soon.
- When uploading a dataset through Upload Local Dataset or Organize Dataset feature to Pennsieve the upload will sometimes freeze. When this occurs it is best to reset the upload and ensure the Pennsieve Agent has been stopped before attempting to upload again. It is also necessary to verify the integrity of uploaded files up to that point. This can be done by simply ensuring all files from folders that have been uploaded are included in the Pennsieve dataset.
- The Organize Datasets option to upload duplicate files to Pennsieve uploads some duplicates but does not upload all.
- When using the Create manifest.xlsx feature any custom columns added to a manifest file stored on Pennsieve will not be imported for editing.
- The Create manifest.xlsx feature will spawn an error while generating manifest files for a local dataset if there are hidden files in the dataset directory. SODA will not tell the user the cause is the presence of the hidden files.
