---
title: 'Posters.science Is Live: Share Your Posters and Make Them Citable, Reusable, and Preserved for Good'
authors:
  - 'BhaveshPatel'
date: '2026-08-24'
category: 'News'
heroImage: 'https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
imageAuthor: 'Product School'
imageAuthorLink: 'https://unsplash.com/@productschool'
subtitle: 'Almost a year after announcing our grant from The Navigation Fund, Posters.science is now live, and science needs your posters.'
tags:
  - launch
  - posters
  - FAIR
  - share
  - discover
  - Artificial Intelligence
  - Large Language Models (LLMs)
---

## 🚀 Posters.science is live!

If you have posters sitting on your computer, now's the time to share them with [Posters.science](https://posters.science). In a few minutes, you can make every poster you've ever presented citable, reusable, and preserved for the long term so they become a lasting testament to your work that can keep fueling new discoveries for years to come.

Keep reading if you want to learn why that matters, and how we made it easy.

## ✨ Why Posters Matter

Posters are one of the most common forms of scientific communication, with millions presented at conferences every year. They're typically the first communication of a project containing early-stage findings that can increase the pace of discovery if shared broadly outside the conference setting.

You may think that these findings are eventually shared in manuscripts, but it is estimated that only a minority of posters ever lead to a published manuscript, with studies reporting rates between 1% and 50% depending on field and conference. Moreover, it is estimated to take an average of two years from poster presentation to manuscript publication. Sharing posters directly is therefore critical and, for most posters, it is the only way to preserve that work.



## 🗑️ The Problem Was Bigger Than We Thought

When we set out to understand how commonly posters are shared, what we found was quite disappointing. We expected to find millions shared online. Instead, we found only about 150,000 posters (across 86 platforms). And the ones we did find often had missing or incomplete metadata, making them difficult to discover and reuse. 

<figure>
  <img src="/images/blog/posters-science-launch/poster-trash.jpg" alt="Photo of poster in a trash bin" width="30%" />
  <figcaption>
    Not the type of poster sharing we expect (photo taken at ISMB 2026).
  </figcaption>
</figure>



Looking closely at the metadata of posters shared on Zenodo and Figshare, two of the most commonly used platforms for sharing posters, only about half had even one keyword on Zenodo, fewer than a third listed funding information, and conference name or dates were present on less than half of Zenodo posters and not tracked at all on Figshare.

<div style="margin: 20px 0; padding: 16px; border-left: 6px solid #F6339A; background-color: #FFF5F9; border-radius: 4px; color: #333;">
  <div style="display: flex; align-items: center; margin-bottom: 8px;">
    <span style="font-size: 1.2rem; margin-right: 10px;">📄</span>
    <strong style="color: #F6339A; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.9rem;">Want the Full Picture?</strong>
  </div>
  <p style="margin: 0; line-height: 1.6; font-size: 0.95rem;">
    Read our preprint, <em><a href="https://doi.org/10.48550/arXiv.2604.21150">The State of Scientific Poster Sharing and Reuse</a></em>, for more background on poster sharing and the state of poster metadata.
  </p>
</div>

So we asked researchers around us why they were not sharing their posters consistently and identified two main challenges:

- **Lack of awareness**: many didn't know why or how to share a poster in the first place
- **No time, no incentive**: sharing felt like extra work with no clear payoff

When we tried to reuse posters to showcase their value, we found it very challenging. Since each poster follows a different design, it is difficult to reuse them programmatically or conduct large-scale analysis.

We built Posters.science to remove these friction points.



## 🚀 Making Sharing Simple

Posters.science reduces sharing to three steps: 
1. Upload your poster
2. Review the metadata our tool extracts automatically
3. Publish it on [Zenodo](https://zenodo.org/), a trusted generalist repository, where it receives a DOI.

The metadata extraction is handled by [**poster2json**](https://github.com/fairdataihub/poster2json), an LLM-based tool we built to scan the PDF file of a poster and turn it into structured data: authors, affiliations, methods, findings, keywords, and more. That output follows a DataCite-inspired [**Poster JSON schema**](https://github.com/fairdataihub/poster-json-schema). Once you review and revise the extracted metadata through a simple interface, it is saved as a poster.json file and published alongside your poster, so every shared poster comes with a rich, interoperable, AI-ready record instead of a bare PDF. That same poster.json also auto-populates Zenodo's metadata fields, so you never have to enter them by hand.

## 📇 Indexing at Scale

Fixing the sharing experience going forward is one half of the problem. The other half is improving everything already out there. To address that, Posters.science also operates as a registry, indexing posters already shared across other platforms so they are discoverable in one place rather than scattered across dozens of repositories with inconsistent metadata.

We've now indexed **over 30,000 posters** from Zenodo and Figshare. A challenge we faced was that a meaningful portion of what is shared under the "Poster" tag on those platforms turned out to be abstracts, conference papers, or other non-poster content. To fix that we built [**PosterSentry**](https://github.com/fairdataihub/poster-sentry), a detection tool that distinguishes genuine posters from everything else, filtering out thousands of records that weren't actually posters.

Both indexed and shared posters can be browsed using the [Discover page of Posters.science](https://posters.science/discover). Their JSON records are also archived periodically on Zenodo so they can be easily downloaded for bulk analysis.

<figure>
  <img src="/images/blog/posters-science-launch/discover.png" alt="Screenshot of the Discover page of Posters.science" width="80%" />
  <figcaption>
    Screenshot of the 
    <a href="https://posters.science/discover" target="_blank" rel="noopener noreferrer">
    Discover page</a> of Posters.science.
  </figcaption>
</figure>


## 🤝 What's Next

Launch is just a starting point. We are actively working on several improvements to the platform:

- **Promotion**: We want people to use the platform and let us know how we can make it better!
- **Easier sharing**: We are working on more integrations and automation so sharing a poster takes even less effort, with fewer manual steps between "I have a poster" and "it's shared, FAIR, and preserved"
- **Indexing more posters**: We are expanding coverage across more platforms
- **Smart search**: We are developing a feature where users will be able to ask scientific questions and get back an answer based on our poster records along with a list of relevant posters.


## 📣 Share Yours Today

Every poster you have ever presented is a piece of research that existed publicly for a moment and then, for most people, vanished. It doesn't have to. **[Visit Posters.science](https://posters.science/) and share your posters**, past and future, so they can be cited, found, reused, and built upon, instead of being forgotten.

## 📢 Disclosures

The development of Posters.science is supported by a grant from [The Navigation Fund](https://www.navigation.org/) (additional details about the grant can be found in the [DataCite Commons grant record](https://commons.datacite.org/doi.org/10.71707/rk36-9x79)).

This blog post was written with the help of [Claude](https://claude.ai/).