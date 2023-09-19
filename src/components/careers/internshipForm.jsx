import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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

const IntershipForm = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex w-full flex-row items-center justify-center space-x-4 py-2">
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
                  <h3 className="text-3xl font-semibold">Internship Form</h3>
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
                      <div className="flex flex-row py-3">
                        <div className="flex flex-col mr-5">
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

                        <div className="flex flex-col">
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
                      </div>

                      <div className="flex flex-row py-3">
                        <div className="flex flex-col mr-5">
                          <label
                            htmlFor="institution"
                            className="pb-2 text-base font-medium"
                          >
                            Current Company or Institution
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

                        <div className="flex flex-col">
                          <label
                            htmlFor="github_link"
                            className="pb-2 text-base font-medium"
                          >
                            Github
                          </label>
                          <Field
                            type="text"
                            name="github_link"
                            className="mb-1 w-full rounded border border-gray-300 px-4 py-2 font-asap text-base outline-none focus:border-black sm:text-lg"
                          />
                          <ErrorMessage
                            name="github_link"
                            component="span"
                            className="pt-1 text-sm text-red-500"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col py-3">
                        <label
                          htmlFor="availabilities"
                          className="pb-2 text-base font-medium"
                        >
                          Availability
                        </label>
                        <Field
                          type="text"
                          name="availabilities"
                          className="mb-1 w-full rounded border border-gray-300 px-4 py-2 font-asap text-base outline-none focus:border-black sm:text-lg"
                        />
                        <ErrorMessage
                          name="availabilities"
                          component="span"
                          className="pt-1 text-sm text-red-500"
                        />
                      </div>

                      <div className="flex flex-col py-3">
                        <label
                          htmlFor="resume_link"
                          className="pb-2 text-base font-medium"
                        >
                          Resume
                        </label>
                        <Field
                          type="file"
                          name="resume_link"
                          className="mb-1 w-full rounded border border-gray-300 px-4 py-2 font-asap text-base outline-none focus:border-black sm:text-lg"
                        />
                        <ErrorMessage
                          name="resume_link"
                          component="span"
                          className="pt-1 text-sm text-red-500"
                        />
                      </div>

                      <div className="flex flex-col py-3">
                        <label
                          htmlFor="brief_intro"
                          className="pb-2 text-base font-medium"
                        >
                          Tell us a little about yourself!
                        </label>
                        <Field
                          as="textarea"
                          name="brief_intro"
                          rows="4"
                          className="mb-1 w-full rounded border border-gray-300 px-4 py-2 font-asap text-base outline-none focus:border-black sm:text-lg"
                        />
                        <ErrorMessage
                          name="brief_intro"
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
  );
};

export default IntershipForm;
