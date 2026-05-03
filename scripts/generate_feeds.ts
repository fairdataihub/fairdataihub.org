import dayjs from 'dayjs';
import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';

type BlogFrontMatter = {
  title?: string;
  date?: string;
  subtitle?: string;
  author?: string;
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  url: string;
};

const SITE_URL = 'https://fairdataihub.org';
const BLOG_URL = `${SITE_URL}/blog`;
const BLOG_DIR = path.resolve(process.cwd(), 'blog');
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const BLOG_FEED_DIR = path.join(PUBLIC_DIR, 'blog');

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const toRfc2822 = (dateInput: string) => {
  const parsed = dayjs(dateInput);
  return parsed.isValid()
    ? parsed.toDate().toUTCString()
    : new Date(dateInput).toUTCString();
};

const toIso8601 = (dateInput: string) => {
  const parsed = dayjs(dateInput);
  return parsed.isValid()
    ? parsed.toDate().toISOString()
    : new Date(dateInput).toISOString();
};

const readBlogPosts = (): BlogPost[] => {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith('.md'));

  const posts = files
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), 'utf-8');
      const { data } = matter(raw);
      const frontMatter = data as BlogFrontMatter;
      const title = frontMatter.title?.trim();
      const date = frontMatter.date?.trim();

      if (!title || !date) {
        return null;
      }

      const description =
        frontMatter.subtitle?.trim() ||
        'New update from FAIR Data Innovations Hub.';

      return {
        slug,
        title,
        description,
        date,
        author: frontMatter.author?.trim() || 'FAIR Data Innovations Hub',
        url: `${BLOG_URL}/${slug}`,
      };
    })
    .filter((post): post is BlogPost => Boolean(post));

  posts.sort((a, b) => {
    const aDate = dayjs(a.date);
    const bDate = dayjs(b.date);

    if (!aDate.isValid() || !bDate.isValid()) {
      return 0;
    }

    return bDate.valueOf() - aDate.valueOf();
  });

  return posts;
};

const buildRss = (posts: BlogPost[]) => {
  const latestDate = posts[0]
    ? toRfc2822(posts[0].date)
    : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const title = escapeXml(post.title);
      const description = escapeXml(post.description);
      const link = escapeXml(post.url);
      const guid = escapeXml(post.url);
      const pubDate = escapeXml(toRfc2822(post.date));

      return [
        '    <item>',
        `      <title>${title}</title>`,
        `      <description>${description}</description>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="true">${guid}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '  <channel>',
    '    <title>FAIR Data Innovations Hub Blog</title>',
    `    <link>${escapeXml(BLOG_URL)}</link>`,
    '    <description>Updates and implementation guides from FAIR Data Innovations Hub.</description>',
    '    <language>en-us</language>',
    `    <lastBuildDate>${escapeXml(latestDate)}</lastBuildDate>`,
    ...(items ? [items] : []),
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
};

const buildAtom = (posts: BlogPost[]) => {
  const latestDate = posts[0]
    ? toIso8601(posts[0].date)
    : new Date().toISOString();

  const entries = posts
    .map((post) => {
      const title = escapeXml(post.title);
      const id = escapeXml(post.url);
      const link = escapeXml(post.url);
      const updated = escapeXml(toIso8601(post.date));
      const summary = escapeXml(post.description);
      const author = escapeXml(post.author);

      return [
        '  <entry>',
        `    <title>${title}</title>`,
        `    <id>${id}</id>`,
        `    <link href="${link}" />`,
        `    <updated>${updated}</updated>`,
        `    <summary>${summary}</summary>`,
        '    <author>',
        `      <name>${author}</name>`,
        '    </author>',
        '  </entry>',
      ].join('\n');
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<feed xmlns="http://www.w3.org/2005/Atom">',
    '  <title>FAIR Data Innovations Hub Blog</title>',
    '  <id>https://fairdataihub.org/blog</id>',
    '  <link href="https://fairdataihub.org/blog/atom.xml" rel="self" />',
    '  <link href="https://fairdataihub.org/blog" />',
    `  <updated>${escapeXml(latestDate)}</updated>`,
    ...(entries ? [entries] : []),
    '</feed>',
    '',
  ].join('\n');
};

const writeFeeds = () => {
  const posts = readBlogPosts();

  fs.mkdirSync(BLOG_FEED_DIR, { recursive: true });

  const rss = buildRss(posts);
  const atom = buildAtom(posts);

  fs.writeFileSync(path.join(BLOG_FEED_DIR, 'rss.xml'), rss, 'utf-8');
  fs.writeFileSync(path.join(BLOG_FEED_DIR, 'atom.xml'), atom, 'utf-8');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'rss.xml'), rss, 'utf-8');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'atom.xml'), atom, 'utf-8');

  // eslint-disable-next-line no-console
  console.log(`Generated RSS and Atom feeds for ${posts.length} blog posts.`);
};

writeFeeds();
