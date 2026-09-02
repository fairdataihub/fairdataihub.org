---
title: 'The Evolution of the SODA UI over the years'
authors:
  - 'JacobClark'
date: '2026-09-01'
category: 'Product'
heroImage: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
imageAuthor: 'tirzavandijk'
imageAuthorLink: 'https://unsplash.com/@tirzavandijk'
subtitle: "A journey through the evolution of SODA's user interface"
tags:
  - soda
  - data-management
  - fair-data
---

<style>
.comparison-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.comparison-card {
  text-align: center;
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.75rem;
  background-color: #fdfcfc;
}

.arrow-nav {
  font-size: 1.2rem;
  align-self: center;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin: 0.25rem 0;
  transform: rotate(90deg);
}
</style>

SODA's UI has been shaped by six different developers, each bringing their own ideas, design choices, and perspective to the project. Along the way, SODA has undergone several changes to both its core workflows and UI libraries. We'll take a look at how these changes influenced the interface and how the UI evolved alongside the functionality of the application.

**Note:** This post covers SODA's UI evolution from version 5.0.0 (October 8, 2021) through version 19.0.2, the latest release at the time of writing.

# The Home Page

The home page is the first thing users see when they open SODA, so making it immediately clear how to get started with dataset curation is important. Over the course of SODA's development, we experimented with several different layouts and approaches. Ultimately, we settled on a simple interface with two main buttons, each clearly indicating which path a user should take based on their dataset curation needs.

<div class="comparison-container">
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/5.0.0-homepage.png" alt="5.0.0 Home Page" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 5.0.0</p>
    <p style="font-size: 0.95rem; color: #666; margin: 0; line-height: 1.4; text-align: left;">The original SODA home page embraced simplicity, however, lacked pizazz. Version 9 introduced animated GIFs and a SODA hero image to give the page a more engaging feel.</p>
  </div>
  <div class="arrow-nav">→</div>
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/9.0.0-homepage.png" alt="Home Page Evolution" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 9.0.0</p>
    <p style="font-size: 0.95rem; color: #666; margin: 0; line-height: 1.4; text-align: left;">Version 9 had a more visually engaging layout, but the path to begin curating was unclear. This was addressed in version 19 by simplifying the paths to begin curation.</p>
  </div>
  <div class="arrow-nav">→</div>
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/19.0.2-homepage.png" alt="Current Home Page" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 19.0.2</p>
    <p style="font-size: 0.95rem; color: #666; margin: 0; line-height: 1.4; text-align: left;">The current version has a clean, focused design, with two main buttons guiding users to the two primary workflows in SODA.</p>
  </div>
</div>

# The File Explorer

The file explorer is a crucial component of SODA, as it provides visual feedback of data imported into SODA and how it will look once the final standardized dataset is created. The aim was to recreate an interface similar to the ones you see within operating systems, allowing users to interact with their data in a way they are familiar with.

<p style="font-size: 0.95rem; font-weight: 600; color: #333; text-align: center; margin: 1.5rem 0 1rem 0;">Importing Subject Data</p>

<div class="comparison-container two-wide">
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/9.0.0-subject-data-empty.png" alt="9.0.0 Subject Data Empty" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 9.0.0</p>
  </div>
  <div class="arrow-nav">→</div>
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/19.0.2-subject-data-empty.png" alt="19.0.2 Subject Data Empty" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 19.0.2</p>
    <p style="font-size: 0.95rem; color: #666; margin: 0; line-height: 1.4; text-align: left;">Version 19.0.2 provides additional context to what data should be imported, as well as a clearer area for importing data into SODA.</p>
  </div>
</div>

<p style="font-size: 0.95rem; font-weight: 600; color: #333; text-align: center; margin: 1.5rem 0 1rem 0;">Rendered Subject Data</p>

<div class="comparison-container two-wide">
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/9.0.0-subject-data-populated.png" alt="9.0.0 Subject Data Populated" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 9.0.0</p>
    <p style="font-size: 0.95rem; color: #666; margin: 0; line-height: 1.4; text-align: left;">The interface looks good functionally, but users can only see data in the current folder, limiting their ability to see the structure of nested items.</p>
  </div>
  <div class="arrow-nav">→</div>
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/19.0.2-subject-data-populated.png" alt="19.0.2 Subject Data Populated" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 19.0.2</p>
    <p style="font-size: 0.95rem; color: #666; margin: 0; line-height: 1.4; text-align: left;">Version 19.0.2 displays the complete nested folder structure, enabling users to more easily see the structure of their data.</p>
  </div>
</div>

<p style="font-size: 0.95rem; font-weight: 600; color: #333; text-align: center; margin: 1.5rem 0 1rem 0;">Dataset Structure Preview</p>

<div class="comparison-container two-wide">
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/9.0.0-manifest-preview.png" alt="9.0.0 Manifest Preview" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 9.0.0</p>
  </div>
  <div class="arrow-nav">→</div>
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/19.0.2-manifest-preview.png" alt="19.0.2 Manifest Preview" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 19.0.2</p>
    <p style="font-size: 0.95rem; color: #666; margin: 0; line-height: 1.4; text-align: left;">Version 19.0.2 uses the same file explorer UI throughout the application, creating a more unified feel and consistent interaction with their data.</p>
  </div>
</div>

# Form Fields

Form fields are essential to the data curation workflow, enabling researchers to input and validate metadata and dataset information. As SODA evolved, the form interface was refined to improve usability, reduce errors, and make the data entry process more intuitive and efficient.

<div class="comparison-container">
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/5.0.0-subject-form.png" alt="5.0.0 Subject Form" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 5.0.0</p>
    <p style="font-size: 0.95rem; color: #666; margin: 0; line-height: 1.4; text-align: left;">Version 5.0.0 used an accordion-style form to reduce visual clutter. However, users had to manually expand each section to complete the form, making the workflow less efficient.</p>
  </div>
  <div class="arrow-nav">→</div>
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/9.0.0-subject-form.png" alt="9.0.0 Subject Form" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 9.0.0</p>
    <p style="font-size: 0.95rem; color: #666; margin: 0; line-height: 1.4; text-align: left;">Version 9.0.0 removed the accordions, making all fields immediately accessible. However, the forms took up more real-estate than necessary, and still looked a little dated.</p>

  </div>
  <div class="arrow-nav">→</div>
  <div class="comparison-card">
    <img src="/images/blog/soda-ui-evolution/19.0.2-subject-form.png" alt="19.0.2 Subject Form" style="width: 100%; object-fit: cover; margin-bottom: 0.5rem; border-radius: 4px;" />
    <p style="font-size: 1rem; font-weight: bold; color: #333; margin: 0.5rem 0 0.25rem 0; text-align: center;">Version 19.0.2</p>
    <p style="font-size: 0.95rem; color: #666; margin: 0; line-height: 1.4; text-align: left;">Version 19.0.2 tightened the spacing, improved keyboard accessibility, and introduced a modern UI library for a cleaner, more polished form experience.</p>
  </div>
</div>
