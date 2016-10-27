'use strict';

const app = require('../app.js');

const signUp = function(data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: "POST",
    data: data,
  });
};

const signOut = () => {
  let id = app.user._id;

  return $.ajax({
    url: app.host + '/sign-out/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePw = (data) => {
  let id = app.user._id;

  return $.ajax({
    url: app.host + '/change-password/' + id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePw,
};
