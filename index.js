const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const senderMail = process.env.SENDER_EMAIL;
const password = process.env.EMAIL_PASS;
const origins = process.env.ALLOWED_ORIGINS;

if (origins === "all") {
  app.use(cors());
} else {
  const corsOptions = {
    origin: origins.split(","),
  };
  app.use(cors(corsOptions));
}

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: senderMail,
    pass: password,
  },
});

app.post("/sendMail", async (req, res) => {
  const { receiverMail, subject, body } = req.body;
  if (!receiverMail || !subject || !body) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const mail = {
    from: senderMail,
    to: receiverMail,
    subject: subject,
    html: body,
  };

  try {
    const info = await transporter.sendMail(mail);
    console.log("Email sent: " + info.response);
    res.status(201).json({ message: "Mail sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(5050, () => {
  console.log(`Server is running on port 5050`);
});
