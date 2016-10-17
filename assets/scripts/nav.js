'use strict';

$(document).ready(function() {

  let active1 = false;
  let active2 = false;
  let active3 = false;
  let active4 = false;

  $('#menu-toggle').on('click', function() {
    
    if (!active1) $(this).find('.home-menu-btn').css({'background-color': 'blue', 'transform': 'translate(0px,125px)'});
    else $(this).find('.home-menu-btn').css({'background-color': 'dimblue', 'transform': 'none'}); 
     if (!active2) $(this).find('.auth-menu-btn').css({'background-color': 'blue', 'transform': 'translate(60px,105px)'});
    else $(this).find('.auth-menu-btn').css({'background-color': 'darkblue', 'transform': 'none'});
      if (!active3) $(this).find('.stats-menu-btn').css({'background-color': 'blue', 'transform': 'translate(105px,60px)'});
    else $(this).find('.stats-menu-btn').css({'background-color': 'silver', 'transform': 'none'});
      if (!active4) $(this).find('.bucketlist-menu-btn').css({'background-color': 'blue', 'transform': 'translate(125px,0px)'});
    else $(this).find('.bucketlist-menu-btn').css({'background-color': 'silver', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
    });

    $('.home-menu-btn').on('click', function() {
      //add code here
    });

    $('.auth-menu-btn').on('click', function() {
      //add code here
    });

    $('.stats-menu-btn').on('click', function() {
      //add code here
    });

    $('.bucketlist-menu-btn').on('click', function() {
      //add code here
    });
});

