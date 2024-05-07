const nodemailer = require('nodemailer');

async function sendEmail(mailOptions) {
    try {
        // Create a SMTP transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'thirangamicrosoft@gmail.com',
                pass: 'svxg mlqh bavo wtfh'
            }
        });

        // Send the email
        const info = await transporter.sendMail(mailOptions);

    } catch (error) {

        console.error('Error occurred while sending email:', error);
        throw error;
        
    }
}

module.exports = { sendEmail };
