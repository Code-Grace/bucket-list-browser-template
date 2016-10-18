'use strict';

const app = require('../app.js');

const success = () => console.log("success");

const failure = () => console.log("failure");

const signInSuccess = (data) => {
	app.user = data.user;
};

module.exports = {
  success,
  failure,
  signInSuccess,
};
