import Head from 'next/head';

import Hero from '@/components/sodaforcovid/hero';
import About from '@/components/sodaforcovid/about';
import Impact from '@/components/sodaforcovid/impact';
import Info from '@/components/sodaforcovid/info';
import Timeline from '@/components/sodaforcovid/timeline';
import Publications from '@/components/sodaforcovid/publications';

export default function SodaForCovid() {
  return (
    <div>
      <Head>
        <title>SODA for COVID-19 Research - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="SODA for COVID-19 Research - Fair Data Innovations Hub"
        />
        <meta
          property="twitter:title"
          content="SODA for COVID-19 Research - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/sodaforcovid" />
        <meta
          property="og:url"
          content="https://fairdataihub.org/sodaforcovid"
        />
        <meta
          property="twitter:url"
          content="https://fairdataihub.org/sodaforcovid"
        />

        <meta
          name="description"
          content="SODA (Sofware to Organize Data Automatically) for COVID-19 Research is a cross-platform desktop software that allows researchers to easily organize and share their COVID-19 related genomics, immunology, and other general research data according to applicable FAIR guidelines"
        />
        <meta
          property="og:description"
          content="SODA (Sofware to Organize Data Automatically) for COVID-19 Research is a cross-platform desktop software that allows researchers to easily organize and share their COVID-19 related genomics, immunology, and other general research data according to applicable FAIR guidelines"
        />
        <meta
          property="twitter:description"
          content="SODA (Sofware to Organize Data Automatically) for COVID-19 Research is a cross-platform desktop software that allows researchers to easily organize and share their COVID-19 related genomics, immunology, and other general research data according to applicable FAIR guidelines"
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
