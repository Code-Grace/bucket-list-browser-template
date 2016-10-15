'use strict';

const authEvents = require('./auth/events.js');
const bucketList = require('./bucketList/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  bucketList.addHandlers();
});
