(function ($) {
	$(document).ready(function () {

		// toggle header menu
		$(".toggle-menu").click(function () {
			$(this).toggleClass("on");
			$(".hidden-menu").slideToggle();
			return false;
		});



		$('#cntr-1').click(function () {
			$('#tab-1').fadeIn(300).siblings().fadeOut(300);
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('#cntr-2').click(function () {
			$('#tab-2').fadeIn(300).siblings().fadeOut(300);
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('#cntr-3').click(function () {
			$('#tab-3').fadeIn(300).siblings().fadeOut(300);
			$(this).addClass('active').siblings().removeClass('active');
		});





	});
})(jQuery);