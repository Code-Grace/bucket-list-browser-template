'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onGetTasks = () => {
	api.getList()
	.done(ui.getTaskSuccess)
	.fail(ui.failure);
};

const onShowTask = (event) => {
	event.preventDefault();
	let data = getFormFields(event.target);
	console.log(data);
	api.showTask(data)
	.done(ui.showTaskSuccess)
	.fail(ui.failure);
};

const onCreateTask = (event) => {
	event.preventDefault();
	let data = getFormFields(event.target);
	api.createTask(data)
	.done(ui.success)
	.fail(ui.failure);
};

const onDeleteTask = function (event) {
	
	let taskId = $(event.target).attr('-data-id');
	
	api.deleteTask(taskId)
	  .done(onGetTasks)
	  .fail(ui.failure);

};

const onUpdateTask = function () {
	let taskId = $(this).attr('-data-id');
	
	api.updateTask(taskId)
	  .done(onGetTasks)
	  .fail(ui.failure);
};

const addHandlers = () => {
  $('.get-tasks-btn').on('click', onGetTasks);
  $('.create-task-form').on('submit', onCreateTask);
  $('.show-task').on('submit', onShowTask);
  $('body').on('click', '#delete', onDeleteTask);
  $('body').on('click', '#update', onUpdateTask);
};

module.exports = {
  addHandlers,
  onGetTasks,
};