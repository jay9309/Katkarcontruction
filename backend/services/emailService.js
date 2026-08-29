const nodemailer = require("nodemailer");

const gmailUser = process.env.EMAIL_USER;
const gmailPassword = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: gmailUser,
        pass: gmailPassword
    }
});

const verifyGmailCredentials = async () => {
    try {
        await transporter.verify();
        return true;
    } catch (error) {
        console.error("Gmail SMTP verification failed:", error.message);
        return false;
    }
};


const sendContractorEmail = async (enquiry) => {

    await transporter.sendMail({

        from: process.env.EMAIL_USER,

        to: process.env.CONTRACTOR_EMAIL,

        subject: "New Enquiry - Katkar Constructions",

        html: `
            <h2>New Customer Enquiry</h2>

            <p><strong>Name:</strong> ${enquiry.name}</p>

            <p><strong>Email:</strong> ${enquiry.email}</p>

            <p><strong>Phone:</strong> ${enquiry.phone}</p>

            <p><strong>Message:</strong></p>

            <p>${enquiry.message}</p>
        `
    });
};


const sendCustomerThankYou = async (enquiry) => {

    await transporter.sendMail({

        from: process.env.EMAIL_USER,

        to: enquiry.email,

        subject: "Thank You for Contacting Katkar Constructions",

        html: `
            <h2>Thank You, ${enquiry.name}</h2>

            <p>
                Thank you for your interest in
                Katkar Constructions.
            </p>

            <p>
                We have successfully received your enquiry.
            </p>

            <p>
                Our team will contact you shortly.
            </p>

            <br>

            <p>
                Regards,<br>
                <strong>Katkar Constructions</strong>
            </p>
        `
    });
};


module.exports = {
    sendContractorEmail,
    sendCustomerThankYou,
    verifyGmailCredentials
};