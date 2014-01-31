jQuery(document).ready(function($) {
    var left = $('a').width();
    var sizer = $('div.button-sizer');
    sizer.width(left);
    sizer.width(0);

    $('a').hoverIntent(function(){
        sizer.animate({
            width: left
        }, 300);
        $('a').animate({
            right: left
        }, 300);
    }, function() {
        sizer.animate({
            width: 0
        }, 300);
        $('a').animate({
            right: 0
        }, 300);
    }
    );
});

