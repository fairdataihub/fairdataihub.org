import Head from 'next/head';

import Hero from '@/components/fairshare/hero';
import About from '@/components/fairshare/about';
import Impact from '@/components/fairshare/impact';
import Info from '@/components/fairshare/info';
import Timeline from '@/components/fairshare/timeline';
import Publications from '@/components/fairshare/publications';

export default function FAIRshare() {
  return (
    <div>
      <Head>
        <title>FAIRshare - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="FAIRshare - Fair Data Innovations Hub"
        />
        <meta
          property="twitter:title"
          content="FAIRshare - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/fairshare" />
        <meta property="og:url" content="https://fairdataihub.org/fairshare" />
        <meta
          property="twitter:url"
          content="https://fairdataihub.org/fairshare"
        />

        <meta
          name="description"
          content="FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their biomedical data and shoftware according to applicable FAIR guidelines"
        />
        <meta
          property="og:description"
          content="FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their biomedical data and shoftware according to applicable FAIR guidelines"
        />
        <meta
          property="twitter:description"
          content="FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their biomedical data and shoftware according to applicable FAIR guidelines"
        />

        <meta
          property="og:image"
          content="https://i.ibb.co/svDc3xk/image.png"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/svDc3xk/image.png"
        />
      </Head>

      <main>
        <section className="bg-white py-10 pt-16">
          <Hero />
        </section>
        <section className="bg-gray-50 py-10 pt-16">
          <About />
        </section>
        <section className="bg-white py-10 pt-16">
          <Impact />
        </section>
        <section className="bg-gray-50 py-10 pt-16">
          <Info />
        </section>
        <section className="bg-white py-10 pt-16">
          <Timeline />
        </section>
        <section className="bg-white py-10 ">
          <Publications />
        </section>
      </main>
    </div>
  );
}
