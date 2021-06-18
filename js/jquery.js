$(function () {
	$("#header").load("/module/header.html");
	$("#footer").load("/module/footer.html");
});


$(window).on('scroll', function () {
	if (70 < jQuery(this).scrollTop()) {
		jQuery('#header').addClass('js-bg');
	} else {
		jQuery('#header').removeClass('js-bg');
	}
})
