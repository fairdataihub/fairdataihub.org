---
title: 'Introducing Pysodafair: Streamlining FAIR Data Compliance in Python Workflows'
authors:
  - 'ChristopherMarroquin'
date: '2025-10-02'
category: 'Product'
heroImage: 'https://images.unsplash.com/photo-1690683790356-c1edb75e3df7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000'
imageAuthor: 'Brecht Corbeel'
imageAuthorLink: 'https://unsplash.com/@brechtcorbeel'
subtitle: 'A Python Tool to Help Create FAIR Data and Models Following the SPARC Dataset Structure (SDS)'
tags:
  - FAIR data
  - Python
  - SPARC
  - SODA
---

# Introducing a Tool to Help With Streamlining FAIR Data Compliance in Python Workflows

If you work with scientific datasets, you’ve probably heard about the importance of FAIR data standards, i.e. making your data Findable, Accessible, Interoperable, and Reusable. You might have found that conforming with FAIR standards can be difficult and tedious.

## What is pysodafair?

pysodafair is a Python tool designed to help you create FAIR peripheral nervous system (PNS) related data and models that follow the SPARC Dataset Structure (SDS). Pysodafair does this by focusing on providing a programmatic way to structure a dataset according to the latest version of the SDS. But we’re not stopping there! Future versions will support other standards such as BIDS. This will make pysodafair a versatile solution for a wide variety of research domains.

### The Origins: From SODA Desktop to Python Automation

pysodafair comes from [SODA](https://docs.sodaforsparc.io/), our desktop application that simplifies organizing and sharing data in compliance with the SDS. While SODA’s interface is perfect for many investigators, we have found that those with coding experience often prefer the flexibility of using their own automated workflows.

This is why we compiled the backed functions of SODA into a standalone Python package we called pysodafair. By exposing the backend functions of SODA, pysodafair allows you to integrate the following into your own workflows:

- Create SDS-compliant metadata files
- Programmatically verify your files comply with file and folder naming conventions
- Upload datasets to Pennsieve with our upload functions that help verify SDS compliance (alerting of empty folders, non-allowed files) + help with updating datasets with existing data that are on Pennsieve.

## Why use pysodafair?

While creating SDS metadata templates and helping with data organization for our users, we found that adding a simple validation layer before running the official SDS validator helped catch mistakes early and prevented errors from spreading across a dataset. All pysodafair functions have been thoroughly tested in SODA and have supported the publication of terabytes of data to the SPARC Portal, so you don’t have to reinvent the wheel. With pysodafair, you can easily integrate FAIR data compliance into your Python workflows, saving time and reducing errors.

This approach is similar to our pyfairdatatools Python package, developed for the AI-READI project as part of the NIH Bridge2AI program. Our goal is to make FAIR data compliance easy and accessible, whether you prefer using a graphical interface or automated workflows.

## Ready to make your data FAIR?

Give pysodafair a try and see how easy compliance can be. In our experience the toolset has helped users who are organizing their first dataset or automating a complex workflow. To get started look for more details in our repository README [here](https://github.com/fairdataihub/pysodafair).
