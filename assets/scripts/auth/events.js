'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const bucketList = require('../bucketList/events.js');
const fillGauge = require('../liquidFillGauge.js');

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess, fillGauge.fillGauge)
  .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const onChangePw = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePw(data)
    .done(ui.success)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.user-forms-pw').on('submit', onChangePw);
  $('.sign-out-btn').on('click', onSignOut); 
};

module.exports = {
  addHandlers,
};