'use strict';

const app = require('../app.js');

const success = (data) => console.log(data);

const failure = () => console.log("failure");

const signInSuccess = (data) => {
	app.user = data.user;
	$('.sign-out-btn').show();
  $('.changePw').show();
};

const signOutSuccess = () => {
	$('.sign-out-btn').hide();
  $('.active-view').addClass('inactive-view');
  $('.active-view').removeClass('active-view');
  $('.homepage').removeClass('inactive-view');
  $('.homepage').addClass('active-view');
  $('.changePw').hide();
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
};
