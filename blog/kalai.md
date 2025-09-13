---
title: 'Building a Dynamic Open Graph Image Generator with Satori and Next.js'
authors:
  - 'SanjaySoundarajan'
date: '2025-09-15'
category: 'Product'
heroImage: 'https://images.unsplash.com/photo-1658303033408-ff2a7e39a554?q=80&w=1680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
imageAuthor: 'Jennie Razumnaya'
imageAuthorLink: 'https://unsplash.com/@jennie_ra'
subtitle: 'A flexible, dynamic OG image generation service powered by Vercel’s Satori'
tags:
  - kalai
  - satori
  - next.js
  - open graph
  - image generation
---

Stop manually designing Open Graph images. If you share blog posts, projects, or docs on Twitter, LinkedIn, or Slack, you know how important OG images are for engagement. They are the preview cards that make links stand out, grab attention, and reinforce your brand.

Static images do not scale, and designing one for every post or update quickly becomes unmanageable. The good news is that we can automate this entire process.

That is why we built [Kalai](https://kalai.fairdataihub.org), a flexible, dynamic OG image generation service powered by Vercel’s [Satori](https://github.com/vercel/satori). It is the same service we use across all of our apps and services at Fair Data Innovations Hub. In this post I will walk you through how it works and how you can build your own.

## Why Generate OG Images Dynamically?

Traditionally, OG images are either:

- **Manually designed**: looks nice, but impossible to keep up with
- **Templated in design tools**: semi-automated, but still requires exporting and uploading
- **Headless browser screenshots**: flexible, but slow and resource-hungry

We started in the first camp. When this website was created, the Fair Data Innovations Hub team was very small and we only had two projects. That gave us the bandwidth to manually design OG images for each page. Our [SODA for SPARC](/sodaforsparc) page was the first project to get a custom OG image.

<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
  <img src="https://fairdataihub.org/thumbnails/sodaforsparc.png" alt="OG image for SODA for SPARC" width="500" />
  <span>OG image for SODA for SPARC</span>
</div>

As the team grew and projects multiplied, keeping up with custom OG images became much more difficult.

Dynamic generation with Satori offers a better way:

- Render JSX directly to SVG (and then to PNG)
- No Chrome or Playwright dependencies, which makes it work in serverless environments
- Flexible layouts using React components and CSS-like styling
- Fast enough to generate on the fly for each request

## Meet Kalai

[Kalai](https://github.com/fairdataihub/kalai) is our open source OG image generator.
We built it with a few design goals in mind:

- **Multi-tenant**: handle OG images for multiple apps and organizations
- **Consistent branding**: centralized templates so all our projects share the same look
- **Deploy anywhere**: works great on Vercel with Next.js, but it is just an API so you can run it in Express, Deno, or any server that supports Node

Once deployed, any of our apps can simply point their `<meta property="og:image" />` tag to a Kalai endpoint and it just works.

## How It Works

At its core, Kalai is just an API route that:

1. Reads query parameters (title, org, author, etc.)
2. Passes them into a React component rendered by Satori
3. Converts the SVG output to PNG using Resvg
4. Returns it as a `Content-Type: image/png` response

Here is a minimal example using `satori` directly with Next.js. This keeps the code short and easy to follow. In Kalai’s production setup we use [@vercel/og](https://vercel.com/docs/functions/og-image-generation/og-image-examples), which builds on top of satori and makes it easier to integrate with Vercel.

```ts
// pages/api/og.ts
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

export default async function handler(req, res) {
  const { title = 'Hello World', org = 'MyOrg' } = req.query;

  // Render JSX to SVG
  const svg = await satori(
    <div style={{ fontSize: 48, color: 'black', padding: '40px' }}>
      <h1>{title}</h1>
      <p>{org}</p>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(
            'https://og-playground.vercel.app/inter-latin-ext-700-normal.woff'
          ).then((res) => res.arrayBuffer()),
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );

  // Convert SVG to PNG
  const resvg = new Resvg(svg);
  const png = resvg.render().asPng();

  res.setHeader('Content-Type', 'image/png');
  res.send(png);
}
```

👉 You can see the full production-ready version we use in Kalai here:
[pages/api/generate.tsx](https://github.com/fairdataihub/kalai/blob/main/pages/api/generate.tsx)

With this in place, you can now hit:

```bash
https://kalai.fairdataihub.org/api/generate?title=Hello%20from%20Kalai&description=This%20is%20a%20sample%20image%20generated%20just%20for%20you!&app=fairdataihub&org=fairdataihub
```

and get a freshly generated OG image.

<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;"> <img src="https://kalai.fairdataihub.org/api/generate?title=Hello%20from%20Kalai&description=This%20is%20a%20sample%20image%20generated%20just%20for%20you!&app=fairdataihub&org=fairdataihub" alt="OG image for Kalai" width="500" /> <span>OG image from Kalai</span> </div>

## Real-World Usage

At Fair Data Innovations Hub, we use Kalai across all of our projects:

- Blogs get OG images with the post title and author
- Apps get branded preview cards with app name and logo
- Services share a consistent design system

Because it is API-driven, we can roll it out to a new project in minutes. The result is clean, professional link previews everywhere without extra design overhead.

### Documentation Sites

One of the places where Kalai really shines is in our documentation. We build user documentation for our apps with [Docusaurus](https://docusaurus.io/).

With Kalai, every docs page can have a relevant OG image automatically generated. This is especially useful since documentation links are often shared in platforms like Slack and Microsoft Teams, where the preview image can make the link more recognizable and inviting.

Instead of generic or missing previews, contributors and users now see branded images that match the specific docs page they are sharing.

<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
  <img src="https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Download%20Templates&description=Prepare%20Metadata&org=fairdataihub" alt="OG image for a SODA for SPARC docs page" width="500" />
  <span>OG image for a <a href="https://docs.sodaforsparc.io/docs/soda-features/download-templates" target="_blank" rel="noopener">SODA for SPARC docs page</a> generated by Kalai</span>
</div>

<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
  <img src="https://kalai.fairdataihub.org/api/generate?app=fairshare&title=Connect%20to%20Zenodo&description=Manage%20Accounts" alt="OG image for a FAIRshare docs page" width="500" />
  <span>OG image for a <a href="https://docs.fairshareapp.io/docs/manage-accounts/connect-to-zenodo" target="_blank" rel="noopener">FAIRshare docs page</a> generated by Kalai</span>
</div>

As you can see, each of our apps have their own background design and Kalai makes sure that the OG image is generated with the same design. The use of Kalai in our documentation has been a game changer for us.

## Alternatives

Satori works well if you are already using React and Vercel, but it is not the only option for dynamic OG image generation.

For example, [Takumi](https://takumi.kane.tw/) is a Rust-based OG image generator that focuses on performance and flexibility. Rust solutions can be appealing if you want very fast image rendering or if your stack is not centered on Node.js.

The overall idea is the same: generate OG images dynamically instead of maintaining static files. The tools you choose depend on your stack, performance needs, and deployment environment.

## Conclusion

Open Graph images are a small detail that make a big impact. With Satori, generating them dynamically is finally fast, flexible, and serverless-friendly.

If you want to try it out, check out [Kalai on GitHub](https://github.com/fairdataihub/kalai). Fork it, deploy it, and start giving your projects the polished social previews they deserve.

⭐ If you find Kalai useful, consider giving the [repository a star on GitHub](https://github.com/fairdataihub/kalai) — it helps others discover the project and supports continued development.

## Acknowledgements

Some of the content for this post was made better with the help of ChatGPT's writing tools.
