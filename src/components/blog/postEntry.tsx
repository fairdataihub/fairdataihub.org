import dayjs from 'dayjs';
import Link from 'next/link';

interface PostEntryProps {
  title: string;
  timeToRead: number;
  date: string;
  slug: string;
  subtitle: string;
  tags: string[];
  category: string;
}

const postEntry: React.FC<PostEntryProps> = ({
  title,
  timeToRead,
  date,
  slug,
  subtitle,
  tags,
  category,
}) => {
  return (
    <article key={title} className="mb-2 flex w-full flex-col md:flex-row">
      {/* Left panel */}
      <div className="hidden w-full flex-col px-2 py-3 md:flex md:w-3/12 md:px-7 md:py-5">
        <h3 className="mb-1 mt-1 text-base font-medium text-slate-600">
          {dayjs(date).format(`MMMM D, YYYY`)}
        </h3>

        {category !== `` && (
          <Link href={`/category/${category}`} passHref>
            <h4 className="text-url mb-1 cursor-pointer text-base font-semibold hover:underline">
              {category}
            </h4>
          </Link>
        )}

        <span className="text-sm text-gray-600">{timeToRead} min read</span>
      </div>

      <div className="flex flex-col rounded-lg px-2 py-7 transition-all hover:bg-stone-100 hover:shadow-sm md:w-8/12 md:px-7 md:py-5">
        {category !== `` && (
          <Link href={`/category/${category}`} passHref>
            <h3
              className="text-url mb-1 cursor-pointer text-base font-semibold hover:underline md:hidden"
              data-umami-event="Blog"
              data-umami-event-action="Category"
              data-umami-event-value={category}
            >
              {category}
            </h3>
          </Link>
        )}

        <div className="mb-1 flex flex-row items-center justify-between md:hidden">
          <h4 className="text-base font-medium text-slate-600">
            {dayjs(date).format(`MMMM D, YYYY`)}
          </h4>

          <span className="text-sm text-gray-600">{timeToRead} min read</span>
        </div>

        <hr className="my-1 border-dashed border-slate-200 md:hidden" />

        <Link href={`/blog/${slug}`} passHref>
          <h2 className="text-url mb-1 mt-4 cursor-pointer text-2xl font-semibold hover:underline md:mt-0 md:text-xl">
            {title}
          </h2>
        </Link>

        <p className="mb-3 mt-2">{subtitle}</p>

        <div className="flex w-full flex-col justify-between md:flex-row">
          <div className="mb-2 flex flex-row flex-wrap items-center text-sm md:mb-0">
            <h3 className="mr-2 text-sm font-bold">Tags: </h3>
            {tags.map((tag) => (
              <Link href={`/tags/${tag}`} key={tag} className="my-2">
                <span
                  className="mr-2 cursor-pointer rounded-lg border border-slate-300 px-1 py-1 transition-all hover:border-light-accent hover:text-accent"
                  data-umami-event="Blog"
                  data-umami-event-action="Tag"
                  data-umami-event-value={tag}
                >
                  {tag}
                </span>
              </Link>
            ))}
          </div>
          <Link href={`/blog/${slug}`} passHref>
            <span className="text-url w-max cursor-pointer text-base hover:underline">
              Read more →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default postEntry;
