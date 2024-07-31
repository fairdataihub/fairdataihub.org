import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: `Fair Data Innovations Hub`,
  siteName: `FAIR Data Innovations Hub`,
  description: `FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings`,
  url: `https://fairdataihub.org`,
  type: `website`,
  image: `https://fairdataihub.org/thumbnails/index.png`,
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  templateDescription?: string;
  templateImage?: string;
  templateUrl?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta[`title`] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  meta[`description`] = props.templateDescription || meta.description;

  meta[`url`] = props.templateUrl || meta.url;

  meta[`image`] =
    `https://kalai.fairdataihub.org/api/generate?app=fairdataihub&title=${encodeURIComponent(
      meta.title,
    )}&org=fairdataihub&description=${encodeURIComponent(meta.description)}`;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />

      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fairdataihub" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta
            name="author"
            property="article:author"
            content="FAIR Data Innovations Hub"
          />
        </>
      )}
    </Head>
  );
}
