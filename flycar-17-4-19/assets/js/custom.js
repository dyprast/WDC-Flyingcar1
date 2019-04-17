$(document).ready(function() {
	$('#burger').click(function() {
		$('.nav-mid ul').slideToggle(400)
	});	
	$("#toTop").click(function (){
		$('html, body').animate({
			scrollTop: $("#header").offset().top
		}, 1000);
	});
	$(".nav-link").click(function (e){
		e.preventDefault();
		var section = $(this).attr('data-section');
		$('html, body').animate({
			scrollTop: $(section).offset().top
		}, 1000);
	});
	$(".scroll-link").click(function (e){
		e.preventDefault();
		var section = $(this).attr('data-section');
		$('html, body').animate({
			scrollTop: $(section).offset().top
		}, 1000);
	});
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('#toTop').addClass('fixed');
		} else {
			$('#toTop').removeClass('fixed');
		}
	});
});