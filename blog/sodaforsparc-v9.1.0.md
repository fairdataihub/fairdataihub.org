---
title: 'SODA for SPARC Release v9.1.0'
authors:
  - 'DorianPortillo'
date: '2022-09-14'
category: 'Product'
heroImage: 'https://raw.githubusercontent.com/slugb0t/Blender-renders/master/desert.png'
imageAuthor: 'Dorian Portillo'
imageAuthorLink: 'https://github.com/slugb0t'
subtitle: 'SODA for SPARC v9.1.0 release is now available.'
tags:
  - sodaforsparc
  - releases
---

SODA for SPARC is an open source software by the Fair Data Innovations Hub that is simplifying data curation for researchers funded by the [NIH SPARC initiative](https://sparc.science/).

SODA's 9.1.0 update comes with many new features and bug fixes the help streamline the user experience. If you don't have the desktop app you can download it [here](https://docs.sodaforsparc.io/docs/getting-started/download-soda). If you already have the application installed no worries, SODA will auto-update to the latest version for you. 

### Features:

- Tags throughout SODA are now capable of being arranged and sorted by the user. (Ex: Dataset tags, milestone tags, etv.)
- Freeform mode's 'Prepate Metadata - Create manifest.xlsx' brings new features and fixes where:
    - Empty columns in the Manifest's spreadsheet are dropped once the user generates their files locally or on Pennsieve.
    - Preview manifest files locally before they are uploaded to Pennsieve.
    - Generate manifest files locally in your directory of choice.
    - Pennsieve manifest files stay in sync with the state of their dataset files.
- Guided Mode - added the abilitiy to edit auto-generated manifest files in a spreadsheet like UI.
- Banner Images - The standard for banner images remains at 2048 x 2048, however if the selected image exceeds that size SODA can scale the image accordingly for upload.

### Bug Fixes:
- In Organize datasets: When importing files/folders the loading screen's z-index was higher than the duplicate alert popup. The issue was has been resolved by lowering the loading screen's z-index.
- When uploading a dataset "Preparing list of files to upload" would verify files from Pennsieve individually. This would slow down the process of uploading. Another method of verifying files was created by retrieving the information folder by folder, reducing wait time significantly.
- Manifest files generated in SODA include timestamps following the designated SPARC format.
- Prepare Metadata - Create Manifest.xlsx: The manifest editor's 'Save' and 'Cancel' buttons are always viewable without having to scroll to the bottom of the manifest file.

### Known Issues:
- When uploading a dataset with a large amount of files, the step "Creating folder structure" can take a good amount of time.

With these new updates we hope to make the user experience pleasant and efficient. Thank you for using SODA for SPARC and helping us create FAIR data. 😊👍