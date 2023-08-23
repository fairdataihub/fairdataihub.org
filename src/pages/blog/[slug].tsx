import Giscus from '@giscus/react';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';

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
    imageAuthor: string;
    imageAuthorLink: string;
    tags: string[];
    subtitle: string;
    category: string;
  };
  postContent: string;
}

// The page for each post
const BlogPost: React.FC<PostProps> = ({ slug, frontMatter, postContent }) => {
  const {
    title,
    authors,
    date,
    heroImage,
    imageAuthor,
    imageAuthorLink,
    category,
    subtitle,
    tags,
  } = frontMatter;

  const copyLinkToClipboard = () => {
    navigator.clipboard
      .writeText(`https://fairdataihub.org/blog/${slug}`)
      .then(() => {
        toast.success(`Copied to clipboard succesfully.`, {
          position: `bottom-right`,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((_error) => {
        toast.error(`Failed to copy to clipboard.`, {
          position: `bottom-right`,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
          name="twitter:title"
          content={`${title} - Blog | Fair Data Innovations Hub`}
        />

        <link rel="canonical" href={`https://fairdataihub.org/blog/${slug}`} />
        <meta
          property="og:url"
          content={`https://fairdataihub.org/blog/${slug}`}
        />
        <meta
          name="twitter:url"
          content={`https://fairdataihub.org/blog/${slug}`}
        />

        <meta name="description" content={subtitle} />
        <meta property="og:description" content={subtitle} />
        <meta name="twitter:description" content={subtitle} />

        <meta
          property="og:image"
          content={`https://og.fairdataihub.org/api/ogimage?app=fairdataihub&title=${encodeURIComponent(
            title,
          )}&description=${encodeURIComponent(subtitle)}`}
        />
        <meta
          name="twitter:image"
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
        <div className="text-url left-0 top-0 mx-4 my-4 cursor-pointer py-1 text-[14px] font-semibold hover:underline sm:absolute sm:text-base">
          <div className="flex items-center justify-center">
            <Icon icon="eva:arrow-ios-back-fill" /> All Blog Posts
          </div>
        </div>
      </Link>

      <div className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 py-5 sm:px-10 sm:py-20">
        <div className="group relative mb-10 h-full w-full before:absolute before:bottom-0 before:z-10 before:block before:h-full before:w-full before:bg-gradient-to-r  before:from-pink-400 before:to-fuchsia-700 before:opacity-60 before:content-['']">
          <div className="relative h-auto min-h-[200px] w-full sm:min-h-[300px] md:min-h-[450px]">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="h-full w-full object-cover object-top md:object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {imageAuthorLink && (
            <a
              href={imageAuthorLink}
              aria-label="Image author"
              target="_blank"
              rel="noopener"
              className="absolute bottom-1 right-1 z-20 flex flex-row justify-center opacity-0 transition-all group-hover:opacity-100"
            >
              <div className="glass-container flex items-center justify-center rounded-md px-1 py-[2px] text-slate-700 transition-all hover:text-black">
                <Icon icon="ic:baseline-photo-camera-front" />
                {` `}
                <span className="ml-1 text-xs">{imageAuthor}</span>
              </div>
            </a>
          )}
        </div>
        <div className=" ">
          <Link href={`/category/${category}`} passHref>
            <h3 className="mb-2 cursor-pointer text-lg font-bold text-accent hover:underline">
              {category}
            </h3>
          </Link>
          <h3 className="mb-3 text-base font-medium text-slate-500">
            {dayjs(date).format(`dddd, MMMM D, YYYY`)}
          </h3>

          <hr className="my-4 border-dashed border-slate-200" />

          <h1 className="text-5xl font-extrabold text-slate-700">{title}</h1>

          <ul className="flex flex-wrap pb-3 pt-6 text-sm leading-6 ">
            {authors.map((author) => (
              <li key={author} className="my-2 mr-5 flex items-center">
                <Image
                  src={authorsJSON[author].avatar}
                  alt="profile picture"
                  width={50}
                  height={50}
                  priority={true}
                  className=" flex items-center rounded-full"
                />

                <div className="ml-3 flex flex-col justify-center">
                  <span className="text-base font-medium ">
                    {authorsJSON[author].name}
                  </span>
                  <a
                    href={`https://twitter.com/` + authorsJSON[author].social}
                    className="text-sm font-medium text-accent"
                    data-umami-event="Blog Author Social Media"
                    data-umami-eventvalue={authorsJSON[author].social}
                    target="_blank"
                    rel="noopener"
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
              rel="noopener"
              className="mx-2 text-slate-500 transition-all hover:text-accent"
              data-umami-event="Share article"
              data-umami-event-type="Twitter"
              aria-label="Share on Twitter"
            >
              <Icon icon="akar-icons:twitter-fill" width="20" height="20" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://fairdataihub.org/blog/${slug}"`}
              target="_blank"
              rel="noopener"
              className="mx-2 text-slate-500 transition-all hover:text-accent"
              data-umami-event="Share article"
              data-umami-event-type="Facebook"
              aria-label="Share on Facebook"
            >
              <Icon icon="akar-icons:facebook-fill" width="20" height="20" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://fairdataihub.org/blog/${slug}`}
              target="_blank"
              rel="noopener"
              className="mx-2 text-slate-500 transition-all hover:text-accent"
              data-umami-event="Share article"
              data-umami-event-type="LinkedIn"
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
              className="mx-2 cursor-pointer text-slate-500 transition-all hover:text-accent"
              data-umami-event="Share article"
              data-umami-event-type="Copy URL"
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
  const slug = params?.slug;

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
