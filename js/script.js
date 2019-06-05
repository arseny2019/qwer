$(document).ready(function(){
    $('.slider').slick({
        speed: 1000,
        prevArrow: $('.slider__arrow_prev'),
        nextArrow: $('.slider__arrow_next')
    });

    $('.registration').click(function () {
        $('body').addClass('scroll-hidden');
        $('.darkness').fadeIn(300);
        $('.modal').fadeIn(300);
    })

    $('.modal__button').click(function () {
        $('.darkness').fadeOut(300);
        $('.modal').fadeOut(300);
    })

    if($('.darkness').click(function () {
        $('.modal__button').click();
    }));


});