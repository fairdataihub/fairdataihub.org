import Head from 'next/head';

import Seo from '@/components/seo/seo';

export default function ContactUs() {
  return (
    <>
      <Head>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>

      <Seo
        templateTitle="Contact Us"
        templateDescription="Contact us for any questions, collobaration requests or comments about the Fair Data Innovations Hub"
        templateImage="https://fairdataihub.org/thumbnails/contact.png"
        templateUrl="https://fairdataihub.org/contact-us"
      />

      <div className="relative flex items-center justify-center bg-transparent bg-cover bg-no-repeat">
        <div className="area absolute bottom-0 z-0">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <section className="z-10 py-8">
          <div className="container mx-auto w-screen max-w-screen-md rounded-lg bg-gray-50 px-10 pb-8 pt-12 shadow-lg">
            <h2 className="pb-5 pt-3 text-center text-3xl font-semibold sm:text-4xl">
              Let us know if you have any feedback or want to collaborate
            </h2>

            <iframe
              data-tally-src="https://tally.so/embed/mRqBLd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="276"
              title="AI-READI Contact Form"
            />
          </div>
        </section>
      </div>
    </>
  );
}
