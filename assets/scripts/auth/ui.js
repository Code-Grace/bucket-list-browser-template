'use strict';

const success = () => console.log("success");

const failure = () => console.log("failure");

const signInSuccess = (data) => {
	app.id = data.id;
	console.log(app.id);
};

module.exports = {
  success,
  failure,
  signInSuccess,
};