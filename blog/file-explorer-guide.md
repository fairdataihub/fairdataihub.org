---
title: 'Building a performant file-explorer in the browser with React'
authors:
  - 'JacobClark'
date: '2025-10-15'
category: 'Guide'
heroImage: '/images/blog/file-explorer-guide/gabriel-heinzer-EUzk9BIEq6M-unsplash.jpg'
imageAuthor: 'Gabriel Heinzer'
imageAuthorLink: 'https://unsplash.com/@6heinz3r'
subtitle: 'How to design and implement a fast, scalable file explorer UI using React and TanStack Virtual'
tags:
  - UI Design
  - UI Performance
  - Virtualization
  - Frontend Architecture
  - File Explorer
---

# Why build your own file explorer?

While a few libraries are available, most fall short in scalability, flexibility, and performance. By the time you adapt one to your own data source, you’re often better off building a custom solution, especially if your explorer needs functionality beyond simply displaying a nested folder structure.

# Libraries used in the tutorial

This guide uses the libraries listed below. These are the ones we use, but you can swap them out with alternatives of your choice depending on the stack you are currently using or what you are comfortable with:

- React
- Mantine (UI Library)
- Tabler Icons
- Zustand (state management)

## Step 1: Deciding on a Data Model for Your Explorer

Before writing any UI code, it's a good idea to determine the data structure you will use to render your file structure. In many cases, your data source will be hierarchical, such as a nested folder tree (for example, JSON). However, most browser virtualization libraries operate on arrays, so you will often need to maintain a flattened version of your data for efficient rendering.

```js
// Example hierarchical file structure as a single object
const fileTree = {
  id: 'root',
  name: 'Root',
  type: 'folder',
  children: [
    {
      id: '1',
      name: 'Documents',
      type: 'folder',
      children: [
        { id: '2', name: 'Resume.pdf', type: 'file' },
        { id: '3', name: 'Project.docx', type: 'file' },
        {
          id: '4',
          name: 'Projects',
          type: 'folder',
          children: [{ id: '5', name: 'Proposal.docx', type: 'file' }],
        },
      ],
    },
    { id: '6', name: 'Photos', type: 'folder', children: [] },
  ],
};

// Recursive function to flatten the tree
function flattenFileTree(node, depth = 0, parentId = null) {
  const { children, ...rest } = node;
  const flatArray = [
    {
      ...rest,
      depth, // depth for UI indentation
      parentId, // reference to parent folder
      expanded: false, // track if folder is expanded
    },
  ];

  if (children && children.length > 0) {
    children.forEach((child) => {
      flatArray.push(...flattenFileTree(child, depth + 1, node.id));
    });
  }

  return flatArray;
}

// Flattened array ready for virtualization
const flattenedFiles = flattenFileTree(fileTree);

console.log(flattenedFiles);
```

## 2. Structuring the UI

Once you have a model, you can design how users will navigate it.
