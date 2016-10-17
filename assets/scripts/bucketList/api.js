'use strict';

const app = require('../app.js');

const getList = function () {
  return $.ajax({
  url: app.host + '/get',
  method: 'GET',
  // headers: {
  //   Authorization: 'Token token=' + app.user.token,
  //   },
  });
};

const createItem = function () {
  return $.ajax({
  url: app.host + '/post',
  method: 'POST',
  headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
	getList,
	createItem,
};