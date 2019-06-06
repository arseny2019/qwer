$(document).ready(function () {
    $('.slider').slick({
        speed: 1000,
        prevArrow: $('.slider__arrow_prev'),
        nextArrow: $('.slider__arrow_next')
    });

    $('.registration').click(function () {
        $('body').addClass('scroll-hidden');
        $('.darkness').fadeIn(300);
        $('.modal').fadeIn(300);
    });

    $('.modal__button').click(function () {
        $('.darkness').fadeOut(300);
        $('.modal').fadeOut(300);
    });

    $('.darkness').click(function () {
        $('.modal__button').click();
    });

    $('.link').on('mousedown', function () {
        var obj = $(this).children($('line'));
        obj.animate({
                width: "0"
            }, 500
        )
    });
    $(document).on('mouseup', function () {
        $('.line').css({
            "width": "100%"
        })
    });

    $('.burger').click(function () {
        $(this).toggleClass('burger_active');
        if ($(this).hasClass('burger_active')) {
            $('.mobile-menu').removeClass('mobile-menu_hidden');
        } else {
            $('.mobile-menu').addClass('mobile-menu_hidden');
        }
    });


});