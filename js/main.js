window.onscroll = function(){
    if(document.documentElement.scrollTop > 10 || document.body.scrollTop > 10)
        document.getElementById('main-nav').className = 'main-nav fixed-top';
    else
        document.getElementById('main-nav').className = 'main-nav';
}

var showMobileMenu = function(){
    document.getElementById('floating-menu').className = 'floating-menu active';
}

var hideMobileMenu = function(){
    document.getElementById('floating-menu').className = 'floating-menu';
}