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
    const {
      name,
      email,
      work_study_status,
      availabilities,
      github_link,
      resume_link,
      brief_intro,
    } = JSON.parse(req.body);

    const ourmsg = {
      to: `fairdataihub@gmail.com`,
      from: `sendgrid@fairdataihub.org`,
      subject: `A new internship application was filled!`,
      html: `<p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Current Company or Institution: ${work_study_status}</p>
      <p>Github: ${github_link}</p>
      <p>Resume: ${resume_link}</p>
      <p>Availabilities: ${availabilities}</p>
      <p>Brief Introduction: ${brief_intro}</p>`,
    };

    const usermsg = {
      to: email,
      from: `contact@fairdataihub.org`,
      subject: `Hi there!`,
      html: `<strong>Thank you for your interest in collaborating with us. We will be in touch with you soon.</strong>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Current Company or Institution: ${work_study_status}</p>
      <p>Github: ${github_link}</p>
      <p>Resume: ${resume_link}</p>
      <p>Availabilities: ${availabilities}</p>
      <p>Brief Introduction: ${brief_intro}</p>`,
    };

    // function sendError(error: Error) {
    //   console.error(error);
    //   const response = { success: false };
    //   res.status(400).json(response);
    // }

    console.log(`Sending email`);
    // console.log(`ourmsg: `, ourmsg);
    console.log(ourmsg);
    console.log(`user message below`);
    console.log(usermsg);
    res.status(200).json({ success: true });
    //   sgMail
    //     .send(ourmsg)
    //     .then(() => {
    //       sgMail
    //         .send(usermsg)
    //         .then(() => {
    //           console.log(`Email sent`);
    //           const response = { success: true };
    //           res.status(200).json(response);
    //         })
    //         .catch((error: any) => {
    //           sendError(error);
    //         });
    //     })
    //     .catch((error: any) => {
    //       sendError(error);
    //     });
  }
}
