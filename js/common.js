$(document).ready(function(){
  var hamburger = $('.hamburger');
  
  hamburger.click(function() {
  	hamburger.toggleClass('is-active');
  	$('.mobile-menu').toggleClass('mobile-menu-active');
  });

  // CATALOG 
  var carousel = $('.owl-carousel');
  var cat_number;
  var cat_name

  carousel.owlCarousel({
  	items: 1,
  	autoHeight: true,
    autoplay: false,
    margin: 10,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    autoplaySpeed: 2500,
  	onInitialized: setCatName,
  	onChanged: setCatName
  });

  function setCatName(event) {
  	cat_number = event.item.index;
  	cat_name = $('.fullwidth-menu ul li:eq(' + cat_number + ') a').html();
  	$('.catalog .content > h2').html(cat_name);

  	$('.fullwidth-menu ul li:eq(' + cat_number + ') a').toggleClass('accent-text-color'); 

  	for(var i = 0; i < event.item.count; i++) {
  		if(i !== cat_number) {
  			cat_name = $('.fullwidth-menu ul li:eq(' + i + ') a').removeClass();
  		}
  	}
  }

 	$('.fullwidth-menu ul li a').click(function(event) {
  	var cat_link = event.target.hash;
  	cat_number = cat_link.split('#cat')[1] - 1;

  	carousel.trigger('to.owl.carousel', cat_number);
 	});
});