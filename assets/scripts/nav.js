'use strict';

$(document).ready(function() {

  let active1 = false;
  let active2 = false;
  let active3 = false;
  let active4 = false;
  let active5 = false; 

  $('.menu-toggle').on('click', function() {
    
    if (!active4) $(this).find('.mask2').css({'transform': 'rotate(-90deg)'});
    else $(this).find('.mask2').css({'transform': 'none'});
      if (!active1) $(this).find('.home-menu-btn').css({'transform': 'translate(0px,125px)'});
    else $(this).find('.home-menu-btn').css({'background-color': 'dimblue', 'transform': 'none'}); 
     if (!active2) $(this).find('.auth-menu-btn').css({'transform': 'translate(50px,105px)'});
    else $(this).find('.auth-menu-btn').css({'transform': 'none'});
      if (!active3) $(this).find('.stats-menu-btn').css({'transform': 'translate(95px,60px)'});
    else $(this).find('.stats-menu-btn').css({'transform': 'none'});
      if (!active4) $(this).find('.bucketlist-menu-btn').css({'transform': 'translate(115px,0px)'});
    else $(this).find('.bucketlist-menu-btn').css({'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
    });
});

