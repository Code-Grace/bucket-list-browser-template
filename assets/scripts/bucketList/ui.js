'use strict';

const success = () => console.log("success");

const failure = () => console.log("failure");

const getTaskSuccess = (data) => console.log(data);

module.exports = {
  success,
  failure,
  getTaskSuccess,
};