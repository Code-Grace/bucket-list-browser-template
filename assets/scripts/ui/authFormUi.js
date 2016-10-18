'use strict';

const switchForm = () => {
	$('.auth-tabs > li').on('click', function() {
   $('.active').removeClass('active');
   $(this).addClass('active');

   if($('.active').html() === 'Sign in') {
      $('#sign-up-form').removeClass('active-form').addClass('inactive-form');
      $('#sign-in-form').removeClass('inactive-form').addClass('active-form');
   }
   else {
      $('#sign-in-form').removeClass('active-form').addClass('inactive-form');
      $('#sign-up-form').removeClass('inactive-form').addClass('active-form');
   }
 });
};

module.exports = {
	switchForm,
}