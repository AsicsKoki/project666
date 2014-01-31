jQuery(document).ready(function($) {
    $("div#right").scroll(function () {
        $('section.textSection').each(function () {
            if (($(this).offset().top - $("div#right").scrollTop()) < 20) {
                $(this).stop().fadeTo(100, 0);
            } else {
                $(this).stop().fadeTo('fast', 1);
            }
        });
    });
});
