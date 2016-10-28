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

const updateTask = function (id) {
  
  let data = {
    'tasks': {
      'completed': true,
    },
  };

  return $.ajax({
  url: app.host + '/tasks/' + id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  data: data,
  });
};

const deleteTask = function (id) {
  return $.ajax({
  url: app.host + '/tasks/' + id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};

const showTask = function (data) {
  let id = data.tasks._id;
  return $.ajax({
  url: app.host + '/tasks/' + id,
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
	getList,
	createTask,
  updateTask,
  deleteTask,
  showTask,
};