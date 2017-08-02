$(function() {

	$('.owl-carousel').owlCarousel({
		Default: 1,
    loop:true,
    nav:true,
    autoHeight:true,
    mouseDrag: false,
    touchDrag: false,
    margin: 0,
    dots: true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        }
    }
	})

});
