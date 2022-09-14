---
title: 'FAIRshare meets Figshare'
authors:
  - 'SanjaySoundarajan'
date: '2022-06-03'
category: 'Product'
heroImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
imageAuthor: 'Gabriel Heinzer'
imageAuthorLink: 'https://unsplash.com/@6heinz3r'
subtitle: 'FAIRshare now supports Figshare as a data repository. This should be a quick and easy way to share data with the community.'
tags:
  - fairshare
  - releases
  - figshare
---

[Figshare](https://figshare.com/) is a data repository where users can make all of their research outputs available in a citable, shareable and discoverable manner. As our duty to ensure that we make it easy for users to share their data with the community is paramount, we have partnered with Figshare to make it easy for FAIRshare to support Figshare as a data repository. This means that you can now choose Figshare as a data destination right within FAIRshare.

You will need to be on FAIRshare v1.4.0 or later to use this feature. If you already have FAIRshare installed on your computer, you don't have to do anything else. We will automatically update your FAIRshare installation to the latest version. If you don't have FAIRshare installed, you can download it [here](https://docs.fairshareapp.io/docs/getting-started/download-fairshare).

## Other updates and changes

- You can now change the `upload type` of your Zenodo dataset before upload. This is a sneak peek of what we are working on at the moment. We hope to have other standardized data types be supported in the future very soon!
- FAIRshare will now focus on the currently open app instance if a user opens multiple instances of FAIRshare. This should prevent issues that can arise from the server side.

## Limitations

As of right now, FAIRshare only supports the upload of datasets from your local system to Figshare. We are reimplementing how we handle GitHub repositories with respect to both Zenodo and Figshare releases so keep an eye out for that in the future. Our new system for GitHub releases will be more tightly integrated with FAIRshare so that you can ensure that all the relevant metadata is added to your dataset automatically before sent to the relevant data repository.
