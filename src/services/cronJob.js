const cron = require('node-cron');
const User = require('../models/User');
const sendBirthdayEmail = require('./sendEmail');

const runBirthdayCron = () => {
  cron.schedule('0 7 * * *', async () => {
    console.log('Running birthday email cron job at 7am');

    try {
      const today = new Date();
      const month = today.getMonth() + 1;
      const day = today.getDate();

      // Find users whose birthday is today (month and day only)
      const users = await User.find();

      const birthdayUsers = users.filter((user) => {
        const dob = new Date(user.dob);
        return dob.getDate() === day && dob.getMonth() + 1 === month;
      });

      for (const user of birthdayUsers) {
        await sendBirthdayEmail(user);
      }

      if (birthdayUsers.length === 0) {
        console.log('No birthdays today.');
      }
    } catch (error) {
      console.error('Error in birthday cron job:', error);
    }
  }, {
    timezone: 'Africa/Harare'  
  });
};

module.exports = runBirthdayCron;
