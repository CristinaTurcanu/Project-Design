
$(function(){
	$(".toggles button").click(function(){
		var get_id = this.id;
		var get_current = $(".posts ." + get_id);

		$(".post").not(get_current).hide(200);
		get_current.show(500);
	});
	$("#all").click(function(){
		$(".post").show(500);
	});
});



$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:6
	});
});
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
	nav: true,
	});
});
if($(window).width() < 541){
	$(".owl-carousel").owlCarousel({
		items:3
	});
};