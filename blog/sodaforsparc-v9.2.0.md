---
title: 'SODA for SPARC Release v9.2.0'
authors:
  - 'DorianPortillo'
date: '2022-09-21'
category: 'Product'
heroImage: 'https://raw.githubusercontent.com/slugb0t/Blender-renders/master/GRASS12%20-%20Copy.png'
imageAuthor: 'Dorian Portillo'
imageAuthorLink: 'https://github.com/slugb0t'
subtitle: 'SODA for SPARC v9.2.0 release is now available.'
tags:
  - sodaforsparc
  - releases
---

SODA for SPARC is an open source software by the Fair Data Innovations Hub that is simplifying data curation for researchers funded by the [NIH SPARC initiative](https://sparc.science/).

The latest version of SODA comes with many bug fixes and some new features. If you don't have SODA for SPARC you can download it [here](https://docs.sodaforsparc.io/docs/getting-started/download-soda). If you already have the application installed no worries, SODA for SPARC will auto-update to the latest version for you. 

### Features:
- An announcements system has been developed to give users updates on recent changes and additions to SODA.
- Guided Mode now has the ability to retry uploading a dataset if an upload in progress fails.

### Bug Fixes:
- In Organize Dataset: When moving files/folders to another location there will be a check if any duplicates are there already. If so they will not be moved and the user will be notified.
- On start the server was using a library called exponential-backoff to try connecting to the backend. It might be an issue that the backOff function going through all 6 connection attempts faster than we'd like. To replace this library we created our own function that would continuously try to connect to the server. If 2 minutes exceed while attempting connecting then an alert is thrown to restart the app.
- Guided Mode comes with fixes as well where:
    - Automatically generated manifest files' headers will follow the [SPARC Dataset Structure 2.0 standard (SDS 2.0)](https://docs.sparc.science/docs/overview-of-sparc-dataset-format).
    - Manifest files' header, filepath, now saves the path relative to the SPARC dataset rather than the user's local machine path.

With these new updates we hope to make the user experience pleasant and efficient. Thank you for using SODA for SPARC and helping us create FAIR data. 😊👍