'use strict';

// const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onGetList = () => {
	api.getList()
	.done(ui.success)
	.fail(ui.failure);
};

const onCreateItem = (event) => {
	event.preventDefault();
	api.createItem()
	.done(ui.success)
	.fail(ui.failure);
};

const addHandlers = () => {
  $('.get-list-items').on('click', onGetList);
  $('.new-item-form').on('submit', onCreateItem);
};

module.exports = {
  addHandlers,
  onGetList
};