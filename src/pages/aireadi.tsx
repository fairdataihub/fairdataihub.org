import Head from 'next/head';

import About from '@/components/aireadi/about';
import Hero from '@/components/aireadi/hero';
import Impact from '@/components/aireadi/impact';
import Info from '@/components/aireadi/info';
import Publications from '@/components/aireadi/publications';
import Timeline from '@/components/aireadi/timeline';

export default function Aireadi() {
  return (
    <div>
      <Head>
        <title>AI-READI - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="AI-READI - Fair Data Innovations Hub"
        />
        <meta
          name="twitter:title"
          content="AI-READI - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/aireadi" />
        <meta property="og:url" content="https://fairdataihub.org/aireadi" />
        <meta name="twitter:url" content="https://fairdataihub.org/aireadi" />

        <meta
          name="description"
          content="The AI-READI project seeks to create a flagship AI-ready and ethically-sourced dataset to provide critical insights into type 2 diabetes mellitus (T2DM), including salutogenic pathways to return to health"
        />
        <meta
          property="og:description"
          content="The AI-READI project seeks to create a flagship AI-ready and ethically-sourced dataset to provide critical insights into type 2 diabetes mellitus (T2DM), including salutogenic pathways to return to health"
        />
        <meta
          name="twitter:description"
          content="The AI-READI project seeks to create a flagship AI-ready and ethically-sourced dataset to provide critical insights into type 2 diabetes mellitus (T2DM), including salutogenic pathways to return to health"
        />

        <meta
          property="og:image"
          content="https://og.fairdataihub.org/api/ogimage?app=fairdataihub&title=AI-READI&description=Generating%20a%20flagship%20AI-ready%20and%20ethically-sourced%20dataset%20to%20boost%20future%20AI-driven%20discoveries%20in%20type%202%20diabetes%20mellitus"
        />
        <meta
          name="twitter:image"
          content="https://og.fairdataihub.org/api/ogimage?app=fairdataihub&title=AI-READI&description=Generating%20a%20flagship%20AI-ready%20and%20ethically-sourced%20dataset%20to%20boost%20future%20AI-driven%20discoveries%20in%20type%202%20diabetes%20mellitus"
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
