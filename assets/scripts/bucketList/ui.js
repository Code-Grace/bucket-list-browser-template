'use strict';

const showTasksTemplate = require('../templates/task-list.handlebars');

const success = () => console.log("success");

const failure = () => console.log("failure");

const getTaskSuccess = (data) => {

	// let tasks = data.tasks;
	//
	// $('.task-list').html('');
	//
	// tasks.forEach((task) => {
	// 	if (task.completed) {
	// 	$('.task-list').append( '<li>' + task.title + ' | ' + task.description + ' | ' + 'completed' + '<button id="delete" -data-id=' + task._id + '> delete</button>' + '</li>' );
	// 	} else {
	// 		$('.task-list').append( '<li>' + task.title + ' | ' + task.description + ' ' + '<button id="delete" -data-id=' + task._id + '> delete</button> <button id="update" -data-id=' + task._id + '>update</button>' + '</li>' );
	// 	}
	// });

	$('.task-list').html(showTasksTemplate(data));
};

module.exports = {
  success,
  failure,
  getTaskSuccess,
};
