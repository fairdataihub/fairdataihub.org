import { ErrorMessage, Field, Form, Formik } from 'formik';
import Head from 'next/head';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import LottieAnimation from '@/components/lotties';

import careerLottie from '../assets/lotties/careers.json';

const successNotify = () =>
  toast.success(` Your message was received! We will get back to you soon.`, {
    position: `bottom-right`,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const errorNotify = () =>
  toast.error(
    ` Something went wrong! Please try again later or send us an email at contact@fairdataihub.org`,
    {
      position: `bottom-right`,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    },
  );

export default function Careers() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Head>
        <title>Careers - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="Careers - Fair Data Innovations Hub"
        />
        <meta
          name="twitter:title"
          content="Careers - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/careers" />
        <meta property="og:url" content="https://fairdataihub.org/careers" />
        <meta name="twitter:url" content="https://fairdataihub.org/careers" />

        <meta name="description" content="View careers of fairdataihub.org" />
        <meta
          property="og:description"
          content="View careers of fairdataihub.org"
        />
        <meta
          name="twitter:description"
          content="View careers of fairdataihub.org"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
        <meta
          name="twitter:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
      </Head>

      <section className="mb-10">
        <div className="bg-[#f9f1f3] bg-cover bg-top bg-no-repeat md:bg-right-top 2xl:bg-contain">
          <div className="pt-12 sm:pt-16">
            <div className="careers-hero">
              <div className="mx-auto max-w-screen-lg px-6 py-8">
                <div className="items-center justify-center md:flex">
                  <div className="w-full p-2 lg:w-1/2 lg:max-w-lg">
                    <h1 className="w-full text-center text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
                      Join our wonderful team!
                    </h1>
                  </div>

                  <div className="mt-6 flex w-full items-center justify-center p-5 lg:mt-0 lg:w-1/2 lg:p-2">
                    <LottieAnimation
                      animationData={careerLottie}
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50">
          <div className="max-w-screen-lg flex flex-col mx-auto">
            <div className="px-6 sm:px-6 lg:px-6 lg:h-40 p-6">
              <div className="text-center lg:text-lg lg:text-left mx-12 ">
                <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
                  Open Positions
                </p>

                <p className="border-b-4 w-fit mb-2 mt-3 max-w-xs font-asap text-xl text-black sm:text-xl border-b-light-accent">
                  Discover Your FAIR Future Here
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-screen-lg flex flex-col mx-auto">
            <div className="bg-white px-6 sm:px-6 lg:px-6 lg:h-40 p-7">
              <div className="text-center lg:text-left lg:mx-12 flex flex-col items-center">
                <p className="font-asap text-lg h-32">
                  No open positions at the moment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50">
          <div className="max-w-screen-lg flex flex-col mx-auto">
            <div className="px-6 sm:px-6 lg:px-6 lg:h-40 p-6">
              <div className="text-center lg:text-lg lg:text-left mx-12 ">
                <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
                  Internship Opportunities
                </p>

                <p className="border-b-4 w-fit mb-2 mt-3 max-w-xs font-asap text-xl text-black sm:text-xl border-b-light-accent">
                  Dive into Internship Possibilities
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-screen-lg flex flex-col mx-auto">
            <div className="bg-white px-6 sm:px-6 lg:px-6 lg:h-40 p-7">
              <div className="text-center lg:text-left lg:mx-12 flex flex-col items-center">
                <p className="font-asap text-lg h-32">
                  We are always eager to welcome fresh perspectives. If
                  you&apos;re interested in interning with us, whether on-site
                  or remotely, please take a moment to complete the form below.
                  By joining our team, you&apos;ll have the chance to make a
                  meaningful impact on our projects, especially in the realm of
                  improving human health. In return, our experienced team is
                  committed to helping you expand and refine your knowledge in
                  software development best practices, web development, and
                  more.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-row items-center justify-center space-x-4 py-10">
              <button
                type="submit"
                onClick={() => {
                  console.log(`clicked`);
                  setShowModal(true);
                }}
                className="cursor-pointer rounded border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600"
                data-umami-event="Intership form link"
              >
                Apply
              </button>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-5 max-w-screen-lg">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Internship Form
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <Formik
                          initialValues={{
                            name: ``,
                            email: ``,
                            work_study_status: ``,
                            availabilities: ``,
                            github_link: ``,
                            resume_link: ``,
                            brief_intro: ``,
                          }}
                          validate={(values) => {
                            const errors = {};

                            if (!values.name) {
                              errors.name = `Required`;
                            }

                            if (!values.email) {
                              errors.email = `Required`;
                            } else if (
                              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email,
                              )
                            ) {
                              errors.email = `Invalid email address`;
                            }

                            if (!values.work_study_status) {
                              errors.work_study_status = `Required`;
                            }

                            if (!values.github_link) {
                              errors.github_link = `Required`;
                            }

                            if (!values.resume_link) {
                              errors.resume_link = `Required`;
                            }

                            if (!values.brief_intro) {
                              errors.brief_intro = `Required`;
                            }
                            return errors;
                          }}
                          onSubmit={(values, { setSubmitting }) => {
                            // post data to server

                            fetch(`/api/internship`, {
                              method: `POST`,
                              body: JSON.stringify(values),
                            })
                              .then(async (response) => {
                                const res = await response.json();
                                if (res.success) {
                                  successNotify();
                                  handleReset();
                                } else {
                                  errorNotify();
                                }
                              })
                              .catch((_error) => {
                                errorNotify();
                              });

                            setSubmitting(false);
                          }}
                        >
                          {({ isSubmitting, dirty, handleReset }) => (
                            <Form>
                              <div className="flex flex-col py-3">
                                <label
                                  htmlFor="name"
                                  className="pb-2 text-base font-medium"
                                >
                                  Your Name
                                </label>
                                <Field
                                  type="text"
                                  name="name"
                                  className="mb-1 w-full rounded border border-gray-300 px-4 py-2 font-asap text-base outline-none focus:border-black sm:text-lg"
                                />
                                <ErrorMessage
                                  name="name"
                                  component="span"
                                  className="pt-1 text-sm text-red-500"
                                />
                              </div>

                              <div className="flex flex-col py-3">
                                <label
                                  htmlFor="email"
                                  className="pb-2 text-base font-medium"
                                >
                                  Your Email Address
                                </label>
                                <Field
                                  type="email"
                                  name="email"
                                  className="mb-1 w-full rounded border border-gray-300 px-4 py-2 font-asap text-base outline-none focus:border-black sm:text-lg"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="span"
                                  className="pt-1 text-sm text-red-500"
                                />
                              </div>

                              <div className="flex flex-col py-3">
                                <label
                                  htmlFor="institution"
                                  className="pb-2 text-base font-medium"
                                >
                                  Your Company or Institution
                                </label>
                                <Field
                                  type="text"
                                  name="institution"
                                  className="mb-1 w-full rounded border border-gray-300 px-4 py-2 font-asap text-base outline-none focus:border-black sm:text-lg"
                                />
                                <ErrorMessage
                                  name="institution"
                                  component="span"
                                  className="pt-1 text-sm text-red-500"
                                />
                              </div>

                              <div className="flex flex-col py-3">
                                <label
                                  htmlFor="message"
                                  className="pb-2 text-base font-medium"
                                >
                                  Tell us more about what you have in mind
                                </label>
                                <Field
                                  as="textarea"
                                  name="message"
                                  rows="4"
                                  className="mb-1 w-full rounded border border-gray-300 px-4 py-2 font-asap text-base outline-none focus:border-black sm:text-lg"
                                />
                                <ErrorMessage
                                  name="message"
                                  component="span"
                                  className="pt-1 text-sm text-red-500"
                                />
                              </div>
                            </Form>
                          )}
                        </Formik>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
