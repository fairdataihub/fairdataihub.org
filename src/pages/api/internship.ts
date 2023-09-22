import { IncomingWebhook } from '@slack/webhook';
import type { NextApiRequest, NextApiResponse } from 'next';

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
      availability,
      github_link,
      resume_link,
      brief_intro,
    } = JSON.parse(req.body);

    const url = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;
    const webhook = new IncomingWebhook(url || ``);

    (async () => {
      try {
        await webhook.send({
          text: `A new internship application was filled! 🥳`,
          attachments: [
            {
              color: `#36a64f`,
              fields: [
                {
                  title: `Name`,
                  value: `${name}`,
                  short: true,
                },
                {
                  title: `Email`,
                  value: `${email}`,
                  short: true,
                },
                {
                  title: `Current Company or Institution`,
                  value: `${work_study_status}`,
                  short: true,
                },
                {
                  title: `Github`,
                  value: `${github_link}`,
                  short: true,
                },
                {
                  title: `Resume`,
                  value: `${resume_link}`,
                  short: true,
                },
                {
                  title: `Availability`,
                  value: `${availability}`,
                  short: true,
                },
                {
                  title: `Brief Introduction`,
                  value: `${brief_intro}`,
                  short: true,
                },
              ],
            },
          ],
        });
        res.status(200).json({ success: true });
      } catch (error) {
        const response = { success: false };
        res.status(400).json(response);
      }
    })();
  }
}
