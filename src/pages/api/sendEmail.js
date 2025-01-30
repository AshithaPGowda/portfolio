import sgMail from '@sendgrid/mail';
import CONSTANT from '../sendgrid';

sgMail.setApiKey(CONSTANT.SENDGRID_API_KEY);  // Make sure your API key is in your environment variables

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("In backend API")
    const { name, email, message } = req.body;

    const msg = {
      to: email,  // Change to your recipient email
      from: 'contact-me@ashithapgowda.com',  // Verified sender email from SendGrid
      templateId: CONSTANT.TEMPID_CONTACTME,  // Use the SendGrid dynamic template ID
      dynamicTemplateData: {
        name: name,
        subject: `Hello! Thank You for Reaching Out!`,
      },
    };

    try {
      await sgMail.send(msg);  // Send the email
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
