'use strict';

const authEvents = require('./auth/events.js');
const bucketList = require('./bucketList/events.js');
const nav = require('./ui/navUi.js');
const authUi = require('./ui/authFormUi.js');
const viewstates = require('./ui/viewstates.js');
const fillGauge = require('./liquidFillGauge');

// On document ready
$(() => {
  authEvents.addHandlers();
  bucketList.addHandlers();
  nav.navFunction(); 
  authUi.switchForm(); 
  viewstates.viewchange();

    $('#body').show();
    $('#msg').hide();
		$('.changePw').hide();


});
