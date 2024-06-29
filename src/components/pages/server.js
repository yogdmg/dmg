const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Create uploads folder if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.post('/send-email', upload.single('attachment'), (req, res) => {
  const { email, subject, message } = req.body;
  const attachment = req.file;

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'psmaantest@gmail.com',
      pass: 'PIyushmaan4'
    }
  });

  let mailOptions = {
    from: 'psmaantest@gmail.com',
    to: email,
    subject: subject,
    text: message,
    attachments: [
      {
        filename: attachment.originalname,
        path: attachment.path
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});