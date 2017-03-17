/*  global ENUMS */
/* eslint max-len: ["error", { "ignoreRegExpLiterals": true }] */

GLOBAL = {
  checkEmail(email) {
    const patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return patt.test(email);
  }
};
