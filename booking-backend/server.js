require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Gmail email address from .env
    pass: process.env.EMAIL_PASS // Gmail password from .env or app-specific password
  }
});

// Endpoint for contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  console.log(`Received contact form submission:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);

  // Construct email message for contact form
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Your email address where you want to receive messages
    subject: 'New Contact Form Submission',
    text: `
      You have received a new contact form submission:
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Contact form submitted successfully' });
    }
  });
});

// Endpoint for booking form submission
app.post('/api/bookings', (req, res) => {
  const { name, email, date, time, message } = req.body;
  
  console.log(`Received booking request:
    Name: ${name}
    Email: ${email}
    Date: ${date}
    Time: ${time}
    Message: ${message}`);

  // Construct email message for booking form
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Your email address where you want to receive booking requests
    subject: 'New Booking Request',
    text: `
      You have received a new booking request:
      Name: ${name}
      Email: ${email}
      Date: ${date}
      Time: ${time}
      Message: ${message}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Booking request submitted successfully' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
