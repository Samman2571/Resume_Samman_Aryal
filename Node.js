const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (if needed)
app.use(express.static('public'));

// POST endpoint to handle form submissions
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Nodemailer setup
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Email message options
    let mailOptions = {
        from: process.env.EMAIL_USER, // Sender's email (your Gmail)
        to: 'sammanaryal8@gmail.com', // Your email where you want to receive messages
        subject: 'Message from Contact Form',
        text: `You have received a message from ${name} (${email}):\n\n${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });

    // Response to client
    res.send('Message sent');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
