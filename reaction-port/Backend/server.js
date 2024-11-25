const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send-email", (req, res) => {
  const { name, request, email } = req.body;

  if (!name || !request || !email) {
    return res.status(400).send("All fields are required.");
  }

  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "dfreezy24@yahoo.com",
    subject: `Request from ${name}`,
    text: `Name: ${name}\nRequest: ${request}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully!");
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
