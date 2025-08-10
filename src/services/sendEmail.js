const transporter = require('../config/emailConfig');

const sendBirthdayEmail = async (user) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Happy Birthday from the birthday Company! 🎉',
    html: `
      <h1>Happy Birthday, ${user.username}! </h1>
      <p>HBD, wish you a fantastic year ahead full of joy and success!</p>
      <p>Enjoy your special day!</p>
      <br/>
      <p>Best wishes,<br/>The Bday Team</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Birthday email sent to ${user.email}`);
  } catch (error) {
    console.error(`Error sending email to ${user.email}:`, error);
  }
};

module.exports = sendBirthdayEmail;
