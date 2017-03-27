Meteor.startup(() => {
  const smtp = {
    username: 'r116radio@gmail.com',
    password: 'J#suschr1st2',
    server: 'smtp.gmail.com',
    port: 465
  };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
