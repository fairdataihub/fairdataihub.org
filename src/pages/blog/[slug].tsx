import fs from 'fs';
import matter from 'gray-matter';
import dayjs from 'dayjs';

import Giscus from '@giscus/react';
import { Icon } from '@iconify/react';

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import markdownToHtml from '@/lib/markdownToHtml';

const authorsJSON = require(`../../assets/data/authors.json`);

import PostBody from '@/components/blog/postBody';

interface PostProps {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    authors: string[];
    heroImage: string;
    tags: string[];
    subtitle: string;
    category: string;
  };
  postContent: string;
}

// The page for each post
const BlogPost: React.FC<PostProps> = ({ slug, frontMatter, postContent }) => {
  const { title, authors, date, heroImage, category, subtitle, tags } =
    frontMatter;

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(`https://fairdataihub.org/blog/${slug}`);

    toast.success(`Copied to clipboard succesfully.`, {
      position: `bottom-right`,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="relative mx-auto flex h-full w-full max-w-screen-xl flex-col justify-center sm:flex-row">
      <Head>
        <title>{`${title} - Blog | Fair Data Innovations Hub`}</title>
        <meta
          property="og:title"
          content={`${title} - Blog | Fair Data Innovations Hub`}
        />
        <meta
          property="twitter:title"
          content={`${title} - Blog | Fair Data Innovations Hub`}
        />

        <link rel="canonical" href={`https://fairdataihub.org/blog/${slug}`} />
        <meta
          property="og:url"
          content={`https://fairdataihub.org/blog/${slug}`}
        />
        <meta
          property="twitter:url"
          content={`https://fairdataihub.org/blog/${slug}`}
        />

        <meta name="description" content={subtitle} />
        <meta property="og:description" content={subtitle} />
        <meta property="twitter:description" content={subtitle} />

        <meta
          property="og:image"
          content={`https://og.fairdataihub.org/api/ogimage?app=fairdataihub&title=${encodeURIComponent(
            title,
          )}&description=${encodeURIComponent(subtitle)}`}
        />
        <meta
          property="twitter:image"
          content={`https://og.fairdataihub.org/api/ogimage?title=${encodeURIComponent(
            title,
          )}&description=${encodeURIComponent(subtitle)}`}
        />

        <meta
          name="keywords"
          content={tags.map((tag) => tag.toLowerCase()).join(`, `)}
        />
      </Head>

      <Link href="/blog" passHref>
        <div className="text-url top-0 left-0 my-4 mx-4 cursor-pointer py-1 text-[14px] font-semibold hover:underline sm:absolute sm:text-base">
          <div className="flex items-center justify-center">
            <Icon icon="eva:arrow-ios-back-fill" /> Go back
          </div>
        </div>
      </Link>

      <div className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden py-5 px-5 sm:py-20 sm:px-10 ">
        <div className="relative mb-10  before:absolute before:bottom-0 before:z-10 before:block before:h-full before:w-full before:bg-gradient-to-r before:from-pink-400  before:to-fuchsia-700 before:opacity-60 before:content-['']">
          <Image
            src={heroImage}
            alt={title}
            width="200%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            priority={true}
            className="grayscale"
          />
        </div>
        <div className=" ">
          <h3 className="mb-2 text-lg font-bold text-accent">{category}</h3>
          <h3 className="mb-3 text-base font-medium text-slate-500">
            {dayjs(date).format(`dddd, MMMM D, YYYY`)}
          </h3>

          <hr className="my-4 border-dashed border-slate-200" />

          <h1 className="text-5xl font-extrabold text-slate-700">{title}</h1>

          <ul className="flex flex-wrap pt-6 pb-3 text-sm leading-6 ">
            {authors.map((author) => (
              <li key={author} className="my-2 mr-5 flex items-center">
                <Image
                  src={authorsJSON[author].avatar}
                  alt="profile picture"
                  width={50}
                  height={50}
                  className=" flex items-center rounded-full"
                  objectFit="cover"
                />

                <div className="ml-3 flex flex-col justify-center">
                  <span className="text-base font-medium ">
                    {authorsJSON[author].name}
                  </span>
                  <a
                    href={`https://twitter.com/` + authorsJSON[author].social}
                    className="umami--click--blog-author-social text-sm font-medium text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{authorsJSON[author].social}
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <hr className="my-2 border-slate-300" />

          <PostBody content={postContent} />

          <hr className="my-3 border-slate-300" />

          <div className="mb-10 flex flex-row items-center">
            <span className="mr-2 text-base text-slate-600">
              Share this article:{` `}
            </span>
            <a
              href={`http://twitter.com/share?text=I just read this article and think y'all need to take a look at this&url=https://fairdataihub.org/blog/${slug}&hashtags=FAIRData,OpenScience,OpenSource`}
              target="_blank"
              rel="noopener noreferrer"
              className="umami--click--twitter-share-button mx-2 text-slate-500 transition-all hover:text-accent"
              aria-label="Share on Twitter"
            >
              <Icon icon="akar-icons:twitter-fill" width="20" height="20" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://fairdataihub.org/blog/${slug}"`}
              target="_blank"
              rel="noopener noreferrer"
              className="umami--click--facebook-share-button mx-2 text-slate-500 transition-all hover:text-accent"
              aria-label="Share on Facebook"
            >
              <Icon icon="akar-icons:facebook-fill" width="20" height="20" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://fairdataihub.org/blog/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="umami--click--linkedin-share-button mx-2 text-slate-500 transition-all hover:text-accent"
              aria-label="Share on LinkedIn"
            >
              <Icon
                icon="akar-icons:linkedin-box-fill"
                width="20"
                height="20"
              />
            </a>
            <div
              onClick={copyLinkToClipboard}
              className="umami--click--copy-url-button mx-2 cursor-pointer text-slate-500 transition-all hover:text-accent"
              aria-label="Copy to clipboard"
            >
              <Icon icon="akar-icons:link-chain" width="20" height="20" />
            </div>
          </div>

          <div className="mb-10 mt-10">
            <Giscus
              key={slug}
              id="comments"
              repo="fairdataihub/fairdataihub.org"
              repoId="MDEwOlJlcG9zaXRvcnkzODAzNDg2NjE="
              category="Blog"
              categoryId="DIC_kwDOFquo9c4CRKKU"
              mapping="pathname"
              term="Welcome to @giscus/react component!"
              reactionsEnabled="1"
              inputPosition="top"
              theme="light_protanopia"
              lang="en"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(`./blog`);

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(`.md`, ``),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// The page for each post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params || {}).slug;

  const fileName = fs.readFileSync(`blog/${slug}.md`, `utf-8`);
  const { data: frontMatter, content: fileContent } = matter(fileName);

  const postContent = await markdownToHtml(fileContent || ``);

  return {
    props: {
      slug,
      frontMatter,
      postContent,
    },
  };
};

export default BlogPost;
