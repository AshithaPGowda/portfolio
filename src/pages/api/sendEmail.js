import sgMail from '@sendgrid/mail';
import CONSTANT from '../sendgrid';

sgMail.setApiKey(CONSTANT.SENDGRID_API_KEY);  // Make sure your API key is in your environment variables

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("In backend API")
    const { name, email, message } = req.body;

    const msg = {
      to: 'ashithapgowdaapg@gmail.com',  // Change to your recipient email
      from: 'contact-me@ashithapgowda.com',  // Verified sender email from SendGrid
      subject: 'Contact Form Submission',
      text: "this is a test",
      html: `<strong>This is a text</strong>`,
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
