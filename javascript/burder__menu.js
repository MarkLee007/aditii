$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger').toggleClass('active');
		$('.header__nav').toggleClass('open');
	});
});