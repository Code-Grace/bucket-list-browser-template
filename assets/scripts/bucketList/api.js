'use strict';

const app = require('../app.js');

const getList = function () {
  return $.ajax({
  url: app.host + '/get',
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};

const createTask = function (data) {
  console.log(data);
  return $.ajax({
  url: app.host + '/tasks',
  method: 'POST',
  headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
	getList,
	createTask,
};