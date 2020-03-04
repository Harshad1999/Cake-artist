$(document).ready(function() {
	$(window).scroll(function() { 
		if ($(document).scrollTop() > 50) { 
			$(".navbars").css("background-color", "#FA9BC1"); 
		} else {
			$(".navbars").css("background-color", "transparent");
		}
	});
	$('.toggle').click(function() {
		$('nav').toggleClass('menu')
	});
});