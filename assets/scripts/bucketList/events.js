'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onGetTasks = () => {
	api.getList()
	.done(ui.getTaskSuccess)
	.fail(ui.failure);
};

const onCreateTask = (event) => {
	event.preventDefault();
	let data = getFormFields(event.target);
	api.createTask(data)
	.done(ui.success)
	.fail(ui.failure);
};

const addHandlers = () => {
  $('.get-tasks').on('click', onGetTasks);
  $('.create-task-form').on('submit', onCreateTask);
};

module.exports = {
  addHandlers,
};