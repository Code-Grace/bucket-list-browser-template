'use strict';

const app = require('../app.js');

const success = (data) => console.log(data);

const failure = () => console.log("failure");

const signInSuccess = (data) => {
	app.user = data.user;
	$('.sign-out-btn').show();
};

const signOutSuccess = () => {
	$('.sign-out-btn').hide();
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
};
