const accountSid = process.env.WHATSAPP_ID;
const authToken = process.env.WHATSAPP_SECRET_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.whatsappNotif = async (message, to) => {
  try {
    const result = await client.messages.create({
      body: message,
      from: 'whatsapp:+14155238886',
      to: `whatsapp:+${to}`,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
