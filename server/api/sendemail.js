import emailjs from "emailjs-com";

async function sendEmail() {
  emailjs
    .send(
      process.env.VUE_APP_SERVICE_ID,
      process.env.VUE_APP_TEMPLATE_ID,
      {
        name: "test name",
        email: "s@g.com",
        message: "test message",
        institute: "test institute",
      },
      process.env.VUE_APP_USER_ID
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);

        // Reset form field
        // that.name = "";
        // that.email = "";
        // that.message = "";
        // that.formInstitute = "";
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}

export default async (req, res) => {
  await sendEmail();

  return {
    someData: true,
  };
};
