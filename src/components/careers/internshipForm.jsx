import { uploadDirect } from '@uploadcare/upload-client';
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
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    work_study_status: '',
    availability: '',
    github_link: '',
    resume_link: '',
    brief_intro: '',
  });

  // Callback function to receive data from the child component.
  const handleDateRangeChange = (newDateRange) => {
    const formattedFrom = newDateRange?.from?.toLocaleDateString();
    const formattedTo = newDateRange?.to?.toLocaleDateString();
    const formattedDateRange = `${formattedFrom} - ${formattedTo}`;
    setFormValues({
      ...formValues,
      availability: formattedDateRange,
    });
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen} modal={false}>
        <DialogTrigger className="cursor-pointer rounded border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none">
          Apply
        </DialogTrigger>

        <DialogContent className="max-w-screen-lg bg-white">
          <DialogHeader>
            <DialogTitle>
              <span className="text-left text-xl font-extrabold text-stone-900">
                Internship Form
              </span>
            </DialogTitle>

            <DialogDescription>
              <Formik
                initialValues={formValues}
                validate={(values) => {
                  const errors = {};
                  values.availability = formValues.availability;

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

                  if (
                    !values.availability ||
                    values.availability.includes(`undefined`)
                  ) {
                    errors.availability = `Required`;
                  }

                  if (!values.resume_link) {
                    errors.resume_link = `Required`;
                  }

                  if (!values.brief_intro) {
                    errors.brief_intro = `Required`;
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  // post data to server
                  values.availability = formValues.availability;

                  const result = await uploadDirect(values.resume_link, {
                    publicKey: process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY,
                    store: 'auto',
                  });

                  values.resume_link = result.cdnUrl;

                  console.log(result);

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
                        setOpen(false);
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
                    <div className="flex w-full flex-row py-3">
                      <div className="mr-4 flex w-full flex-col">
                        <label
                          htmlFor="name"
                          className="required-field pb-2 text-base font-medium"
                        >
                          Your Name
                        </label>

                        <Field
                          type="text"
                          name="name"
                          placeholder="Me Myself"
                          className="font-asap mb-1 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-black sm:text-lg"
                        />

                        <ErrorMessage
                          name="name"
                          component="span"
                          className="pt-1 text-sm text-red-500"
                        />
                      </div>

                      <div className="flex w-full flex-col">
                        <label
                          htmlFor="email"
                          className="required-field pb-2 text-base font-medium"
                        >
                          Your Email Address
                        </label>

                        <Field
                          type="email"
                          name="email"
                          placeholder="me@fairdataihub.org"
                          className="mb-1w -full font-asap rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-black sm:text-lg"
                        />

                        <ErrorMessage
                          name="email"
                          component="span"
                          className="pt-1 text-sm text-red-500"
                        />
                      </div>
                    </div>

                    <div className="flex w-full flex-row py-3">
                      <div className="mr-4 flex w-full flex-col">
                        <label
                          htmlFor="work_study_status"
                          className="required-field pb-2 text-base font-medium"
                        >
                          Company or Institution
                        </label>

                        <Field
                          type="text"
                          name="work_study_status"
                          placeholder="FAIR Data Innovations Hub"
                          className="font-asap mb-1 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-black sm:text-lg"
                        />

                        <ErrorMessage
                          name="work_study_status"
                          component="span"
                          className="pt-1 text-sm text-red-500"
                        />
                      </div>

                      <div className="flex w-full flex-col">
                        <label
                          htmlFor="github_link"
                          className="pb-2 text-base font-medium"
                        >
                          Your GitHub profile URL
                        </label>

                        <Field
                          type="text"
                          name="github_link"
                          placeholder="https://github.com/fairdataihub"
                          className="font-asap mb-1 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-black sm:text-lg"
                        />

                        <ErrorMessage
                          name="github_link"
                          component="span"
                          className="pt-1 text-sm text-red-500"
                        />
                      </div>
                    </div>

                    <div className="flex w-full flex-row justify-between py-3">
                      <div className="flex w-full flex-col items-center py-3 lg:items-start">
                        <label
                          htmlFor="availability"
                          className="required-field pb-2 text-base font-medium"
                        >
                          Availability
                        </label>

                        <DatePickerWithRange
                          className="w-full pr-4"
                          onDateRangeChange={handleDateRangeChange}
                          selectedDateRange={formValues.availability}
                        />

                        <ErrorMessage
                          name="availability"
                          component="span"
                          className="pt-1 text-sm text-red-500"
                        />
                      </div>

                      <div className="flex w-full flex-col py-3">
                        <label
                          htmlFor="resume_link"
                          className="required-field pb-2 text-base font-medium"
                        >
                          Resume
                        </label>

                        <Field
                          type="file"
                          name="resume_link"
                          className="font-asap mb-1 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-black sm:text-lg"
                        >
                          {({ field, form }) => {
                            return (
                              <input
                                type="file"
                                onChange={(event) => {
                                  form.setFieldValue(
                                    field.name,
                                    event.currentTarget.files[0],
                                  );
                                }}
                                className="font-asap mb-1 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-black sm:text-lg"
                              />
                            );
                          }}
                        </Field>

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
                        className="required-field pb-2 text-base font-medium"
                      >
                        Tell us a little about yourself!
                      </label>

                      <Field
                        as="textarea"
                        name="brief_intro"
                        rows="4"
                        placeholder="I am a student at FAIR Data Innovations Hub..."
                        className="font-asap mb-1 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-black sm:text-lg"
                      />

                      <ErrorMessage
                        name="brief_intro"
                        component="span"
                        className="pt-1 text-sm text-red-500"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-3 rounded-b border-t border-solid border-slate-200 pt-3">
                      <button
                        className="w-max rounded-md border-none bg-white px-5 py-3 text-center text-base font-semibold ring-2 ring-pink-100 ring-offset-2 transition duration-200 ease-in-out hover:ring-pink-600 focus:ring-pink-600"
                        type="button"
                        onClick={() => {
                          setOpen(false);
                        }}
                        disabled={isSubmitting}
                      >
                        Close
                      </button>

                      <button
                        type="submit"
                        className="w-max rounded-md border-none bg-black px-5 py-3 text-center text-base font-semibold text-white ring-2 ring-transparent ring-offset-2 transition duration-200 ease-in-out hover:ring-pink-600 focus:ring-pink-600"
                        disabled={isSubmitting}
                        data-umami-event="Home page link"
                        data-umami-event-value="Team"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

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
  );
};

export default IntershipForm;
