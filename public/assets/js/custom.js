// CUSTOM JS
//
// $(document).ready(function() {
// 	var scroll_start = 0;
// 	var startchange = $("#toggle-nav");
// 	var offset = startchange.offset();
// 	if (startchange.length) {
// 		$(document).scroll(function() {
// 			scroll_start = $(this).scrollTop();
// 			if (scroll_start <= 10) {
// 				$(".u-header").css("background-color", "transparent");
// 			} else {
// 				$(".u-header").css("background-color", "#fff");
// 			}
// 		});
// 	}
// });

$(document).ready(function() {
	$("#testimonial-slider").owlCarousel({
		items: 3,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [979, 2],
		itemsTablet: [768, 2],
		itemsMobile: [650, 1],
		pagination: false,
		navigation: true,
		navigationText: ["", ""],
		autoPlay: true
	});
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$(document).ready(function() {
	$(".setsize").each(function() {
		$(this).height($(this).width());
	});
});
$(window).on("resize", function() {
	$(".setsize").each(function() {
		$(this).height($(this).width());
	});
});
