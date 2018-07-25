window.onscroll = function(){
    if(document.documentElement.scrollTop > 10 || document.body.scrollTop > 10)
        document.getElementById('main-nav').className = 'main-nav fixed-top';
    else
        document.getElementById('main-nav').className = 'main-nav';
}