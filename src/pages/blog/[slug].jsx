import fs from 'fs';
import matter from 'gray-matter';

import markdownToHtml from '@/lib/markdownToHtml';

import PostBody from '@/components/blog/PostBody';

// The page for each post
export default function Post({ frontmatter, postContent }) {
  const { title, author, category, date, bannerImage, tags } = frontmatter;

  return (
    <main>
      <img src={bannerImage} />
      <h1>{title}</h1>
      <h2>
        {author} || {date}
      </h2>
      <h3>
        {category} || {tags.join()}
      </h3>

      <PostBody content={postContent} />
    </main>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our blog directory

  const files = fs.readdirSync('./blog');
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`blog/${slug}.md`, 'utf-8');
  const { data: frontmatter, content: fileContent } = matter(fileName);

  const postContent = await markdownToHtml(fileContent || '');

  return {
    props: {
      frontmatter,
      postContent,
    },
  };
}
