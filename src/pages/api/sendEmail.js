import sgMail from '@sendgrid/mail';
import CONSTANT from '../sendgrid';

sgMail.setApiKey(CONSTANT.SENDGRID_API_KEY);  // Make sure your API key is in your environment variables

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("In backend API")
    const { name, email, message } = req.body;

    const ackEmail = {
      to: email,  
      from: 'contact-me@ashithapgowda.com',  
      templateId: CONSTANT.TEMPID_CONTACTME,  
      dynamicTemplateData: {
        name: name,
        subject: `Hello! Thank You for Reaching Out!`,
      },
    };
        // Notification email to you
        const notifyEmail = {
          to: CONSTANT.ME,
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
      await sgMail.send([ackEmail, notifyEmail]);  // Send the email
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
