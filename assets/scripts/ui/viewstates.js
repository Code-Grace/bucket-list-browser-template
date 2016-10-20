'use strict';

const bucketlist = require('../bucketList/events.js');

const viewchange = function () {
  $('.home-menu-btn').on('click', function() {
    $('.active-view').addClass('inactive-view');
    $('.active-view').removeClass('active-view');
    $('.homepage').removeClass('inactive-view');
    $('.homepage').addClass('active-view');
  });

  $('.auth-menu-btn').on('click', function() {
    $('.active-view').addClass('inactive-view');
    $('.active-view').removeClass('active-view');
    $('.auth-forms').removeClass('inactive-view');
    $('.auth-forms').addClass('active-view');
  });

  $('.stats-menu-btn').on('click', function() {
    $('.active-view').addClass('inactive-view');
    $('.active-view').removeClass('active-view');
    $('div.data').removeClass('inactive-view');
    $('div.data').addClass('active-view');
  });

  $('.bucketlist-menu-btn').on('click', function() {
    bucketlist.onGetTasks();
    $('.active-view').addClass('inactive-view');
    $('.active-view').removeClass('active-view');
    $('.tasks').removeClass('inactive-view');
    $('.tasks').addClass('active-view');
  });
};

module.exports = {
  viewchange
};
