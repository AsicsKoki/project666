jQuery(document).ready(function($) {
    var left = $('a').width();
    var sizer = $('div.button-sizer');
    sizer.width(left);
    sizer.width(0);

    $('a.nav-button').hoverIntent(function(){
        $(this).siblings("div.button-sizer").animate({
            width: left
        }, 300);
        $(this).animate({
            right: left
        }, 300);
    }, function() {
        $(this).siblings("div.button-sizer").animate({
            width: 0
        }, 300);
        $(this).animate({
            right: 0
        }, 300);
    }
    );
});

