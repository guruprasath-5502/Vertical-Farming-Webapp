require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilio = require('twilio')(accountSid, authToken);

exports.temperature = async (req, res) => {
  try {
    const msgId = await twilio.messages.create({
      body: 'temperature is high',
      from: '+14173743786',
      to: '+919344528262',
    });
    console.log(msgId);

    return res
      .status(200)
      .json({ message: 'Message sent successfully', status: true });
  } catch (error) {
    console.log(error);
  }
};

exports.waterLevel = async (req, res) => {
  try {
    const msgId = await twilio.messages.create({
      body: 'Water Level is low',
      from: '+14173743786',
      to: '+919344528262',
    });

    console.log(msgId);

    return res
      .status(200)
      .json({ message: 'Message sent successfully', status: true });
  } catch (error) {
    console.log(error);
  }
};
