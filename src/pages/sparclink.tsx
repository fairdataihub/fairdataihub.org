import Head from 'next/head';

import About from '@/components/sparclink/about';
import Hero from '@/components/sparclink/hero';
import Info from '@/components/sparclink/info';
import Publications from '@/components/sparclink/publications';

export default function SparcLink() {
  return (
    <>
      <Head>
        <title>SPARClink - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="SPARClink - Fair Data Innovations Hub"
        />
        <meta
          name="twitter:title"
          content="SPARClink - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/sparclink" />
        <meta property="og:url" content="https://fairdataihub.org/sparclink" />
        <meta name="twitter:url" content="https://fairdataihub.org/sparclink" />

        <meta
          name="description"
          content="SPARClink provides a system that queries all external publications using open source tools and platforms to create interactable visualizations that showcases the impact that SPARC has on the overall scientific research community"
        />
        <meta
          property="og:description"
          content="SPARClink provides a system that queries all external publications using open source tools and platforms to create interactable visualizations that showcases the impact that SPARC has on the overall scientific research community"
        />
        <meta
          name="twitter:description"
          content="SPARClink provides a system that queries all external publications using open source tools and platforms to create interactable visualizations that showcases the impact that SPARC has on the overall scientific research community"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/sparclink.png"
        />
        <meta
          name="twitter:image"
          content="https://fairdataihub.org/thumbnails/sparclink.png"
        />
      </Head>

      <section className="bg-gray-50 py-10 pt-16">
        <Hero />
      </section>

      <section className="bg-white py-10">
        <About />
      </section>

      <section className="bg-gray-50 py-10 ">
        <Info />
      </section>

      <section className="bg-white py-10 ">
        <Publications />
      </section>
    </>
  );
}
