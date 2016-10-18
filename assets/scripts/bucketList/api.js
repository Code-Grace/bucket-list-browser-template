'use strict';

const app = require('../app.js');

const getList = function () {
  return $.ajax({
  url: app.host + '/tasks',
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};

const createTask = function (data) {
  return $.ajax({
  url: app.host + '/tasks',
  method: 'POST',
  headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  data: data,
  });
};

module.exports = {
	getList,
	createTask,
};