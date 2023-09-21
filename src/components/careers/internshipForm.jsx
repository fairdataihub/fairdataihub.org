import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { DatePickerWithRange } from './dateRangePicker';

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
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="cursor-pointer rounded border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none">
        Apply
      </DialogTrigger>
      <DialogContent className="bg-white max-w-screen-lg">
        <DialogHeader>
          <DialogTitle>Internship Form</DialogTitle>
          <DialogDescription>
            <div>
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
                  console.log(values);
                  fetch(`/api/internship`, {
                    method: `POST`,
                    body: JSON.stringify(values),
                  })
                    .then(async (response) => {
                      const res = await response.json();
                      console.log(res);
                      if (res.success) {
                        console.log('success');
                        successNotify();
                        handleReset();
                      } else {
                        errorNotify();
                      }
                    })
                    .catch((_error) => {
                      console.log(_error);
                      errorNotify();
                    });

                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, dirty }) => (
                  <Form>
                    <div className="flex flex-row py-3 w-full">
                      <div className="flex flex-col w-full mr-4">
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

                      <div className="flex flex-col w-full">
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

                    <div className="flex flex-row py-3 w-full">
                      <div className="flex flex-col w-full mr-4">
                        <label
                          htmlFor="work_study_status"
                          className="pb-2 text-base font-medium"
                        >
                          Company or Institution
                        </label>
                        <Field
                          type="text"
                          name="work_study_status"
                          className="mb-1 w-full rounded border border-gray-300 px-4 py-2 font-asap text-base outline-none focus:border-black sm:text-lg"
                        />
                        <ErrorMessage
                          name="work_study_status"
                          component="span"
                          className="pt-1 text-sm text-red-500"
                        />
                      </div>

                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="github_link"
                          className="pb-2 text-base font-medium"
                        >
                          Github Link
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

                    <div className="flex flex-row py-3 w-full justify-between">
                      <div className="flex flex-col py-3 items-center lg:items-start w-full">
                        <label
                          htmlFor="availabilities"
                          className="pb-2 text-base font-medium"
                        >
                          Availability
                        </label>
                        <DatePickerWithRange
                          setDate={setDate}
                          className="w-full pr-4"
                          name="availabilities"
                        />
                        <ErrorMessage
                          name="availabilities"
                          component="span"
                          className="pt-1 text-sm text-red-500"
                        />
                      </div>

                      <div className="flex flex-col py-3 w-full">
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
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          handleReset();
                        }}
                        disabled={!dirty || isSubmitting}
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        disabled={isSubmitting}
                        data-umami-event="Internship Form Submit button"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
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
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default IntershipForm;
