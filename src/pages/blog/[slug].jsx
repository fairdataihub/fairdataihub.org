import fs from 'fs';
import matter from 'gray-matter';
import dayjs from 'dayjs';

import { Icon } from '@iconify/react';

import Image from 'next/image';

import markdownToHtml from '@/lib/markdownToHtml';

import PostBody from '@/components/blog/postBody';

// The page for each post
export default function Post({ slug, frontmatter, postContent }) {
  const { title, author, date, heroImage } = frontmatter;

  return (
    <div className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col  overflow-hidden  px-5   sm:py-10 sm:px-10 ">
      <div className="mb-10">
        <Image
          src={heroImage}
          alt={title}
          width="200%"
          height="100%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className=" ">
        <h3 className="mb-3  text-base font-medium text-slate-500">
          {dayjs(date).format('dddd, MMMM D, YYYY')}
        </h3>

        <h1 className="text-5xl font-extrabold text-slate-700">{title}</h1>

        <div className="flex items-center pt-6 pb-3">
          <div className="mr-3 flex items-center">
            <Image
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="profile picture"
              width={50}
              height={50}
              className="rounded-full"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-center text-base">
            <div className="text">{author}</div>
          </div>
        </div>

        <PostBody content={postContent} />

        <div className="flex flex-row items-center">
          <span className="mr-2 text-sm text-slate-600">
            Share this article:{' '}
          </span>
          <a
            href={`http://twitter.com/share?text=I just read this article and think y'all need to take a look at this&url=https://fairdataihub.org/blog/${slug}&hashtags=FAIRData,OpenScience,OpenSource`}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 text-slate-500 transition-all hover:text-accent"
          >
            <Icon icon="akar-icons:twitter-fill" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://fairdataihub.org/blog/${slug}"`}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 text-slate-500 transition-all hover:text-accent"
          >
            <Icon icon="akar-icons:facebook-fill" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://fairdataihub.org/blog/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 text-slate-500 transition-all hover:text-accent"
          >
            <Icon icon="akar-icons:linkedin-box-fill" />
          </a>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('./blog');

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`blog/${slug}.md`, 'utf-8');
  const { data: frontmatter, content: fileContent } = matter(fileName);

  const postContent = await markdownToHtml(fileContent || '');

  return {
    props: {
      slug,
      frontmatter,
      postContent,
    },
  };
}
