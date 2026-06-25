---
title: 'Meet PosterSentry: Guarding the Gate to FAIR Poster Data'
authors:
  - 'JamesONeill'
date: '2026-06-09'
category: 'Product'
heroImage: '/images/blog/poster-sentry/postersentry-hero.jpg'
imageAuthor: 'AI generated'
imageAuthorLink: 'https://huggingface.co/fairdataihub/poster-sentry'
subtitle: 'A lightweight open source classifier that tells genuine scientific posters apart from everything else filed under the same label'
tags:
  - posters
  - metadata
  - machine learning
  - open source
  - FAIR
  - COMET
---

Scientific posters hold some of the earliest results in research, yet most are seen once at a conference and then disappear. [Posters.science](https://posters.science) exists to change that. Supported by a grant from [The Navigation Fund](https://www.navigation.org/), it is a platform that makes the knowledge inside posters FAIR (Findable, Accessible, Interoperable, and Reusable) and ready for AI. It works in two ways. It gives researchers a simple place to share their own posters, and it gathers posters that already live in other repositories, such as Zenodo and Figshare, so that all of them can be discovered in one place.

As we began gathering those posters, we ran into an unexpected problem. Many of the records labeled "poster" on those repositories are not posters at all. They are conference programs, abstracts, slide decks, and other documents filed under the same label. Before we can make posters easy to find, we have to be able to tell which files are genuinely posters.

That is exactly the problem PosterSentry solves. PosterSentry is also the first of several tools we are developing in collaboration with [COMET](https://www.cometadata.org/), a large-scale collaboration to improve metadata quality and enhance poster metadata at the source in DataCite.

## 🛡️ What PosterSentry does

PosterSentry looks at a PDF and decides, quickly and cheaply, whether it is a genuine scientific poster. We deliberately kept it lightweight. Instead of running an expensive AI model on every file, it pairs a small modern language model with classic, well-understood machine learning. The resulting pipeline can run on an ordinary laptop with no special hardware and screen more than 30,000 candidate files in under half an hour.

That efficiency is the whole point. Because PosterSentry runs first, before any of the heavier processing, it has to be cheap enough to check every file. Using a heuristically derived training & testing set it classifies posters with about 87% accuracy, and when we ran it across the more than 30,000 PDFs gathered from records labeled 'poster' on Zenodo and Figshare, it narrowed them to roughly 24,000 confirmed posters, filtering out the conference programs, abstracts, and slide decks that did not belong.

## ✨ Why this matters for FAIR data

The FAIR principles say research outputs should be Findable, Accessible, Interoperable, and Reusable. None of that holds if the underlying labels are wrong. A poster cannot be found among the right results if it is filed as a conference program, and it cannot be reused if a tool meant for posters keeps choking on slide decks.

Getting the labels right is the unglamorous foundation that FAIR depends on. PosterSentry is that foundation, built to run cheaply across a whole repository so that a large and overlooked category of research finally has a real chance to join the trustworthy scholarly record. Researchers gain attribution and discoverability with no extra effort on their part, and the open-science community ends up with a more complete picture of the work being done. This is why we are collaborating with COMET to improve and use PosterSentry to enhance poster records right at the source in the DataCite database.

## 🎤 Come find us at BOSC and ISMB 2026

PosterSentry has been accepted for presentation (talk and poster) at the Bioinformatics Open Source Conference (BOSC) at ISMB 2026, where we will share the full results and the road ahead with COMET. If you work on open science, metadata, or scholarly communication, come say hello. We are actively looking for collaborators.

## 🔓 Everything is open

PosterSentry is fully open source under the MIT License. The model, code, and training data are all public:

- **Model:** [huggingface.co/fairdataihub/poster-sentry](https://huggingface.co/fairdataihub/poster-sentry)
- **Training data:** [huggingface.co/datasets/fairdataihub/poster-sentry-training-data](https://huggingface.co/datasets/fairdataihub/poster-sentry-training-data)
- **Source code:** [github.com/fairdataihub/poster-sentry](https://github.com/fairdataihub/poster-sentry)
