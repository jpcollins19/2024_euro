const sendgrid = require("@sendgrid/mail");
const app = require("express").Router();
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (incomingMsg) => {
  const { email, name, tempPW, pwResetURL } = incomingMsg;

  const finalMessage = {
    to: email,
    from: process.env.SENDGRID_FROM_ADDRESS,
    templateId: "d-b933afbbc42c4793a7cf5235953b84d0",
    dynamicTemplateData: {
      name,
      tempPW,
      pwResetURL,
    },
  };

  await sendgrid
    .send(finalMessage)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error.response.body);
    });
};

app.post("/api/send-email", async (req, res, next) => {
  try {
    await sendEmail(req.body);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
