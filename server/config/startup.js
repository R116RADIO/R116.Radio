Meteor.startup(() => {
  process.env.MAIL_URL = 'smtp://SMTP_Injection:56579affb5f4f31786363a49cc8ecd120737a4bc@smtp.sparkpostmail.com:587';
});