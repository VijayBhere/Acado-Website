window.onscroll = function(){
	var headerElement = document.getElementById('main-nav');
	
	if(document.documentElement.scrollTop > 10 || document.body.scrollTop > 10){
		if(headerElement.className.indexOf('fixed-top') == -1)
			headerElement.className = headerElement.className + ' fixed-top';
	}
	else
		headerElement.className = headerElement.className.replace('fixed-top', '');
}

var showMobileMenu = function(){
	document.getElementById('floating-menu').className = 'floating-menu active';
}

var hideMobileMenu = function(){
	document.getElementById('floating-menu').className = 'floating-menu';
}