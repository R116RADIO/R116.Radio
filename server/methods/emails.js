/*  global ENUMS */
/* eslint quote-props: ["error", "as-needed"] */
/* eslint max-len: ["error", 150] */

// import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';
// import {SSR} from 'meteor/meteorhacks:ssr';
//
// export default function () {
//   Meteor.methods({
//     'emails.send'(to, subject, templateName, variableContent) {
//       this.unblock();
//       check(to, String);
//       check(subject, String);
//       check(templateName, String);
//       check(variableContent, Object);
//
//       Meteor.defer(function () {
//         Email.send({
//           from: 'admin@zigvy.com',
//           to,
//           subject,
//           html: SSR.render(templateName, variableContent)
//         });
//       });
//
//     }
//   });
// }
