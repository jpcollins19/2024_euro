const sendgrid = require("@sendgrid/mail");
const app = require("express").Router();
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (user) => {
  const { email, name, websiteUpdatedEmailSubject, websiteUpdatedEmailBody } =
    user;

  const finalMessage = {
    to: email,
    from: process.env.SENDGRID_FROM_ADDRESS,
    templateId: "d-0988188deb654f37ae3ff9812c908bd9",
    dynamicTemplateData: {
      name,
      websiteUpdatedEmailSubject,
      websiteUpdatedEmailBody,
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

app.post("/api/send-website-updated-email", async (req, res, next) => {
  try {
    await sendEmail(req.body);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
