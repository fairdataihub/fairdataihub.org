import type { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require(`@sendgrid/mail`);

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

type Data = {
  success: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === `POST`) {
    const { name, email, institution, message } = JSON.parse(req.body);

    const ourmsg = {
      to: `fairdataihub@gmail.com`,
      from: `sendgrid@fairdataihub.org`,
      subject: `A new request has arrived!`,
      html: `<p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Institution: ${institution}</p>
      <p>Message: ${message}</p>`,
    };

    const usermsg = {
      to: email,
      from: `contact@fairdataihub.org`,
      subject: `Hi there!`,
      html: `<strong>Thank you for contacting us. We will be in touch with you soon.</strong>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Institution: ${institution}</p>
      <p>Message: ${message}</p>`,
    };

    function sendError(error: Error) {
      console.error(error);
      const response = { success: false };
      res.status(400).json(response);
    }

    sgMail
      .send(ourmsg)
      .then(() => {
        sgMail
          .send(usermsg)
          .then(() => {
            console.log(`Email sent`);
            const response = { success: true };
            res.status(200).json(response);
          })
          .catch((error: any) => {
            sendError(error);
          });
      })
      .catch((error: any) => {
        sendError(error);
      });
  }
}
