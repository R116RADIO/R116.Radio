export default {
  clearErrors({LocalState}) {
    LocalState.set('CONTACT_ERROR');
  },
  sendEmail({LocalState, Meteor}, to, subject, text, callback) {
    Meteor.call('emails.send', to, subject, text, (err) => {
      if (err)
        LocalState.set('CONTACT_ERROR', err.reason);
      return callback();
    });
  }
};
