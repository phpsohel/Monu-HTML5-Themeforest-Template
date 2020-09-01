$(document).ready(function(){

// slick-slider

	// $('.slider-active').slick({
	//   infinite: true,
	//   slidesToShow: 1,
	//   slidesToScroll: 1
	// });
	$('#mean-menu-active').meanmenu({
		meanMenuContainer:'.mean-manu',
   		meanScreenWidth:"991",
	});

	$('.counter').counterUp({
		delay: 10,
    	time: 1000
	});

	// slider

	$('.testimonial-active').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay:true,
  adaptiveHeight: true
});



})