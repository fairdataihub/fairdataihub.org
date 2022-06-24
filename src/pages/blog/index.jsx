import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

// The Blog Page Content
export default function Blog({ blog }) {
  return (
    <main>
      {blog.map((post) => {
        //extract slug and frontmatter
        const { slug, frontmatter } = post;
        //extract frontmatter properties
        const { title, author, category, date, bannerImage, tags } =
          frontmatter;

        //JSX for individual blog listing
        return (
          <article key={title}>
            <Link href={`/blog/${slug}`}>
              <h1>{title}</h1>
            </Link>
            <h3>{author}</h3>
            <h3>{date}</h3>
          </article>
        );
      })}
    </main>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`./blog`);

  // get frontmatter & slug from each post
  const blog = await files.map((fileName) => {
    const slug = fileName.replace(`.md`, ``);
    const readFile = fs.readFileSync(`blog/${fileName}`, `utf-8`);
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  console.log(blog);

  // Return the pages static props
  return {
    props: {
      blog,
    },
  };
}
