import sgMail from '@sendgrid/mail';
import { CONSTANT } from '../../../sendgrid';

// Set API Key from environment variables first, fallback to CONSTANT
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || CONSTANT.SENDGRID_API_KEY;
const TEMPID_CONTACTME = process.env.TEMPID_CONTACTME || CONSTANT.TEMPID_CONTACTME;
const ME = process.env.ME || CONSTANT.ME;

sgMail.setApiKey(SENDGRID_API_KEY);

async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("In backend API");
    const { name, email, message } = req.body;

    const ackEmail = {
      to: email,
      from: 'contact-me@ashithapgowda.com',
      templateId: TEMPID_CONTACTME,
      dynamicTemplateData: {
        name: name,
        subject: `Hello! Thank You for Reaching Out!`,
      },
    };

    // Notification email to you
    const notifyEmail = {
      to: ME,
      from: 'contact-me@ashithapgowda.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      await sgMail.send([ackEmail, notifyEmail]);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export default handler;
