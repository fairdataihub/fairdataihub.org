---
title: 'An Expanded GitHub Workflow'
authors:
  - 'SanjaySoundarajan'
date: '2022-08-31'
category: 'Product'
heroImage: 'https://images.unsplash.com/photo-1514939775307-d44e7f10cabd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
imageAuthor: 'Lucas Davies'
imageAuthorLink: 'https://unsplash.com/@lucas_davies'
subtitle: 'Fixing how GitHub releases are made FAIR and more...'
tags:
  - fairshare
  - releases
  - github
  - authentication
---

GitHub and Zenodo have always been tightly integrated together in how they handle the releasing of repository releases into the data archives. This system uses a series of webhooks that pushes your repository data when a release is made. FAIRshare v1.x was built on this system and it worked well for the most part. However, there were some limitations that we wanted to address. The webhook based delivery system was not very flexible and although we were able to add metadata before the release was made, a key field that we wanted to add was never available to us. According to the [FAIR-BioRS guidelines](https://github.com/fairdataihub/FAIR-BioRS-guidelines/blob/main/versions/v1.0.1/README.md#step-3-include-metadata-files), every dataset should have a `unique_identifier` field. This is a key requirement within the FAIR-BioRS system so not being able to automatically add this field was a major limitation. We have now addressed this limitation and we are excited to share this new feature with you.

## The new workflow

The new workflow is a bit more complex than the previous one but it is also more flexible. Our [documentation platform](https://docs.fairshareapp.io) has been updated to reflect these new steps. With version 2.0.0, your GitHub repository will no longer be submitted via a webhook. When you select a GitHub repository as your data source, FAIRshare will automatically download all your source code with all the relevant metadata updated at release time. These updated metadata files will be pushed onto your repository to ensure that your changes are tracked via a Git system.

FAIRshare now also lets you add additional files to your dataset. This is something that cannot be done using the webhook based workflow as well. However, we believe that all your data should be added to the dataset and not just the source code. If you already use a CI for making releases on GitHub, you can still use FAIRshare to add the additional files to your dataset since we now support reading files directly from your release. As usual, you can also add local files if necessary.

This new GitHub release workflow is supported for both Zenodo and Figshare data platforms.

You will need to be on FAIRshare v2.0.0 or later to use this feature. If you already have FAIRshare installed on your computer, you don't have to do anything else. We will automatically update your FAIRshare installation to the latest version. If you don't have FAIRshare installed, you can download it [here](https://docs.fairshareapp.io/docs/getting-started/download-fairshare).

## A sneak peak at the new authentication system

With this version of FAIRshare we are also taking the first step in moving to a browser based OAuth flow. This will allow you to authenticate with your data platform without having to enter your credentials into FAIRshare. We already have this implemented for GitHub but we plan on including these changes for both Zenodo and Figshare in the coming weeks. Our authentication platform is hosted on [auth.fairshareapp.io](https://auth.fairshareapp.io).

## Limitations

As of right now, FAIRshare only supports submitting new datasets to Figshare. We are working on adding support for versioning so keep ant eye out for that in the coming weeks.
