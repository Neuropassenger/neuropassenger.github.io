$(document).ready(function(){
  var hamburger = $('.hamburger');
  
  hamburger.click(function() {
  	hamburger.toggleClass('is-active');
  	$('.mobile-menu').toggleClass('mobile-menu-active');
  });

  $('.owl-carousel').owlCarousel({
  	items: 1
  });
});