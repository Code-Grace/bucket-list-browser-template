'use strict';

const showTasksTemplate = require('../templates/task-list.handlebars');

const success = () => console.log("success");

const failure = () => console.log("failure");

const getTaskSuccess = (data) => {

	let tasks = data.tasks;

	$('.task-list').html('');

	tasks.forEach((task) => {
		if (task.completed) {
		$('.task-list').append( '<li style="color: white;">' + task.title + ' | ' + task.description + ' | ' + 'completed' + '<button style="color: black;" id="delete" -data-id=' + task._id + '> delete</button> | ' + task._id + '</li>' );
		} else {
			$('.task-list').append( '<li style="color: white;">' + task.title + ' | ' + task.description + ' ' + '<button style="color: black;" id="delete" -data-id=' + task._id + '> delete</button> <button style="color: black;" id="update" -data-id=' + task._id + '>  update</button> | ' + task._id + '</li>' );
		}
	});

	// $('.task-list').html(showTasksTemplate(data));
};

const showTaskSuccess = (data) => {
	let task = data.tasks;
	$('.show').html('');
	$('.show').append( '<li style="color: white;">' + task.title + ' | ' + task.description + ' | ' + task._id + '</li>' );
};

module.exports = {
  success,
  failure,
  getTaskSuccess,
  showTaskSuccess,
};
