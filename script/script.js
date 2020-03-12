/*------------------------------------------------------------------*/
/*Прокрутка наверх*/
$(function () {
    $('#up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 900);
        return false;
    });
});

jQuery(function (f) {
    var element = f('#up');
    f(window).scroll(function () {
        element['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](400);
    });
});