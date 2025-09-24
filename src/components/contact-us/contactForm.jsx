import { ErrorMessage, Field, Form, Formik } from 'formik';
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

const ContactForm = () => (
  <>
    <Formik
      initialValues={{
        name: ``,
        email: ``,
        institution: ``,
        message: ``,
      }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = `Required`;
        }

        if (!values.email) {
          errors.email = `Required`;
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = `Invalid email address`;
        }

        if (!values.institution) {
          errors.institution = `Required`;
        }

        if (!values.message) {
          errors.message = `Required`;
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // post data to server

        fetch(`/api/contact`, {
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
            <label htmlFor="name" className="pb-2 text-base font-medium">
              Your Name
            </label>

            <Field
              type="text"
              name="name"
              className="font-asap mb-1 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-black sm:text-lg"
            />

            <ErrorMessage
              name="name"
              component="span"
              className="pt-1 text-sm text-red-500"
            />
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="email" className="pb-2 text-base font-medium">
              Your Email Address
            </label>

            <Field
              type="email"
              name="email"
              className="font-asap mb-1 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-black sm:text-lg"
            />

            <ErrorMessage
              name="email"
              component="span"
              className="pt-1 text-sm text-red-500"
            />
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="institution" className="pb-2 text-base font-medium">
              Your Company or Institution
            </label>

            <Field
              type="text"
              name="institution"
              className="font-asap mb-1 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-black sm:text-lg"
            />

            <ErrorMessage
              name="institution"
              component="span"
              className="pt-1 text-sm text-red-500"
            />
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="message" className="pb-2 text-base font-medium">
              Tell us more about what you have in mind
            </label>

            <Field
              as="textarea"
              name="message"
              rows="4"
              className="font-asap mb-1 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-black sm:text-lg"
            />

            <ErrorMessage
              name="message"
              component="span"
              className="pt-1 text-sm text-red-500"
            />
          </div>

          <div className="flex w-full flex-row items-center justify-center space-x-4 py-5">
            <button
              type="button"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
              className="hidden cursor-pointer rounded border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:ring-pink-600 focus:outline-none"
            >
              Reset
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer rounded border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:ring-pink-600 focus:outline-none"
              data-umami-event="Contact Us Submit button"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>

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

export default ContactForm;
