/*  global ENUMS */
/* eslint quote-props: ["error", "as-needed"] */
/* eslint max-len: ["error", 150] */

import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Email} from 'meteor/email';
// import {SSR} from 'meteor/meteorhacks:ssr';

export default function () {
  Meteor.methods({
    'emails.send'(fromUser, subject, text) {
      this.unblock();
      check([fromUser, subject, text], [String]);
      const from = fromUser;
      const to = CONST.EMAIL.TO_ADMIN;
      const mailContent = `Email has been sent from ${fromUser}: \n ${text}`;

      Email.send({
        from,
        to,
        subject,
        text: mailContent
      });
    }
  });
}
