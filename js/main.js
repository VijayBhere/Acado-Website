window.onscroll = function(){
	if(document.documentElement.scrollTop > 10 || document.body.scrollTop > 10)
		$('#main-nav').addClass('fixed-top');
	else
		$('#main-nav').removeClass('fixed-top');
}

var showMobileMenu = function(){
	$('#floating-menu').addClass('active');
}

var hideMobileMenu = function(){
	$('#floating-menu').removeClass('active');
}