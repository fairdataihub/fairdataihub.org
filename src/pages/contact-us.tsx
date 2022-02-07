import Head from 'next/head';

import ContactForm from '@/components/contact-us/ContactForm';

export default function ContactUs() {
  return (
    <div>
      <Head>
        <title>Contact Us - Fair Data Innovations Hub</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
      </Head>

      <main>
        <div className="relative flex items-center justify-center bg-transparent bg-cover bg-no-repeat sm:h-screen">
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
            <div className="container mx-auto w-screen max-w-screen-md rounded-lg bg-gray-50 px-10 py-12 shadow-lg">
              <h2 className="pt-3 pb-5 text-center text-4xl font-semibold">
                Let us know if you have any feedback or want to collaborate
              </h2>

              <ContactForm />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
