'use strict';

const app = require('../app.js');

const signUp = function(data) {
  return $.ajax({
    url: app.host + '/post',
    method: 'POST',
    data: data,
  });
};

module.exports = {
  signUp,
};