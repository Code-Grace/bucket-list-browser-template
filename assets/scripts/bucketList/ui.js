'use strict';

const success = () => console.log("success");

const failure = () => console.log("failure");

const getTaskSuccess = (data) => {
	
	let tasks = data.tasks;

	tasks.forEach((task) => {
		console.log(task.title + ' ' + task.description);
		$('.task-list').append( '<li>' + task.title + ' ' + task.description + ' ' + task.completed + '<button id="delete" -data-id=' + task.id + '> delete</button> <button id="update" -data-id=' + task.id + '>update</button>' + '</li>' );
	});
};

module.exports = {
  success,
  failure,
  getTaskSuccess,
};