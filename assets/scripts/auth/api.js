'use strict';

const app = require('../app.js');

const signUp = function(data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

const signIn = function(data) {
  return $.ajax({
    url: app.host + '/post',
    method: 'POST',
    data: data,
  });
};

const signOut = (data) => {
  // let id = app.user.id;

  return $.ajax({
    // url: app.host + '/sign-out/' + id,
    url: app.host + '/delete',
    method: 'DELETE',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token,
    // },
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
};
