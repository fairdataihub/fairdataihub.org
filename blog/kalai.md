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
  - OG images
---

Stop manually designing Open Graph (OG) images. If you share blog posts, projects, or docs on Twitter, LinkedIn, or Slack, you know how important OG images are for engagement. They are the preview cards that make links stand out, grab attention, and reinforce your brand. If you care about how your work appears on social media, OG images aren’t just nice-to-have, they’re the difference between someone scrolling past and someone clicking through.

With a small team, design tasks often landed on whoever had time. Every new post or docs page meant tweaking a layout, exporting a PNG, and uploading it. It quickly became a chore on top of development work.

That is why we built [Kalai](https://kalai.fairdataihub.org), a flexible, dynamic OG image generation service powered by Vercel’s [Satori](https://github.com/vercel/satori). It is the same service we use across all of our apps and services at the FAIR Data Innovations Hub. In this post I will walk you through how it works and how you can build your own.

## Why Generate OG Images Dynamically?

Traditionally, OG images are either:

- **Manually designed**: looks nice, but impossible to keep up with
- **Templated in design tools**: semi-automated, but still requires exporting and uploading
- **Headless browser screenshots**: flexible, but slow and resource-hungry

We started in the first camp. I still remember designing the very first OG image for our SODA for SPARC page. At the time, we only had two projects, so it felt doable. But as the number of projects grew, I found myself spending more time in Figma than writing code.

<figure>
  <img src="https://fairdataihub.org/thumbnails/sodaforsparc.png" alt="Custom OG image for SODA for SPARC" width="70%" />
  <figcaption>Custom OG image for SODA for SPARC</figcaption>
</figure>

Exporting a PNG from a design tool and uploading it every time you publish a post feels fine the first three times. By the tenth time, you start dreading it.

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

The first time I hit a Kalai endpoint and saw a fresh OG image pop up in Slack, I grinned. It felt like magic, and instantly saved me from fiddling with templates.

Once deployed, any of our apps can simply point their `<meta property="og:image" />` tag to a Kalai endpoint and it just works.

## How It Works

At its core, Kalai is just an API route that:

1. Reads query parameters (title, org, author, etc.)
2. Passes them into a React component rendered by Satori
3. Converts the SVG output to PNG using Resvg
4. Returns it as a `Content-Type: image/png` response

Here is a minimal example using `satori` directly with Next.js. This keeps the code short and easy to follow. In Kalai’s production setup we use [@vercel/og](https://www.npmjs.com/package/@vercel/og), which builds on top of satori and makes it easier to integrate with Vercel.

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

```js
`https://kalai.fairdataihub.org/api/generate?title=${encodeURIComponent('Hello from Kalai')}&description=${encodeURIComponent('This is a sample image generated just for you!')}&app=fairdataihub&org=fairdataihub`;
```

and get a freshly generated OG image.

<figure>
  <img src="https://kalai.fairdataihub.org/api/generate?title=Hello%20from%20Kalai&description=This%20is%20a%20sample%20image%20generated%20just%20for%20you!&app=fairdataihub&org=fairdataihub" alt="OG image for Kalai" width="70%" />
  <figcaption>OG image from Kalai</figcaption>
</figure>

## Real-World Usage

At the FAIR Data Innovations Hub, we use Kalai across all of our projects. Since we don’t have a dedicated design team, developers, myself included, often end up wearing the designer hat too. That meant every blog post or docs page came with an extra mental load: “ugh, time to make another image.”

Kalai lifted that weight off our shoulders. Now, instead of bouncing between code and design tools, we can focus on building, and still get clean, branded previews for free.

- Blogs get OG images with the post title and author
- Apps get branded preview cards with app name and logo
- Services share a consistent design system

Because it is API-driven, we can roll it out to a new project in minutes. The result is clean, professional link previews everywhere without extra design overhead.

### Documentation Sites

One of the places where Kalai really shines is in our documentation. We build user documentation for our apps with [Docusaurus](https://docusaurus.io/).

With Kalai, every docs page can have a relevant OG image automatically generated. This is especially useful since documentation links are often shared in platforms like Slack and Microsoft Teams, where the preview image can make the link more recognizable and inviting.

Instead of generic or missing previews, contributors and users now see branded images that match the specific docs page they are sharing.

<figure>
  <img src="https://kalai.fairdataihub.org/api/generate?app=soda-for-sparc&title=Download%20Templates&description=Prepare%20Metadata&org=fairdataihub" alt="OG image for a SODA for SPARC docs page" width="70%" />
  <figcaption>OG image for a <a href="https://docs.sodaforsparc.io/docs/soda-features/download-templates" target="_blank" rel="noopener">SODA for SPARC docs page</a> generated by Kalai</figcaption>
</figure>

<figure>
  <img src="https://kalai.fairdataihub.org/api/generate?app=fairshare&title=Connect%20to%20Zenodo&description=Manage%20Accounts" alt="OG image for a FAIRshare docs page" width="70%" />
  <figcaption>OG image for a <a href="https://docs.fairshareapp.io/docs/manage-accounts/connect-to-zenodo" target="_blank" rel="noopener">FAIRshare docs page</a> generated by Kalai</figcaption>
</figure>

As you can see, each of our apps has its own background design, and Kalai makes sure the OG image matches it. The use of Kalai in our documentation has been a game changer for us.

## Alternatives

Satori works well if you are already using React and Vercel, but it is not the only option for dynamic OG image generation.

For example, [Takumi](https://takumi.kane.tw/) is a Rust-based OG image generator that focuses on performance and flexibility. Rust solutions can be appealing if you want very fast image rendering or if your stack is not centered on Node.js.

The overall idea is the same: generate OG images dynamically instead of maintaining static files. The tools you choose depend on your stack, performance needs, and deployment environment.

## Conclusion

Including an Open Graph image in your project is a small detail that makes a big impact. With Satori, generating them dynamically is finally fast, flexible, and serverless-friendly.

If you want to try it out, check out [Kalai on GitHub](https://github.com/fairdataihub/kalai). Fork it, deploy it, and start giving your projects the polished social previews they deserve. We built Kalai to scratch our own itch, but it’s been a game changer for our workflow. I hope it saves you the same time (and headaches) it saved us.

⭐ If you find Kalai useful, consider giving the [repository a star on GitHub](https://github.com/fairdataihub/kalai), it helps others discover the project and supports continued development.

## Acknowledgements

Some of the content for this post was made better with the help of ChatGPT's writing tools.
