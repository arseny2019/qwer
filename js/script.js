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
    })

    $('.burger').click(function () {
        $('.burger').toggleClass('burger_active');
        if ($('.burger').hasClass('burger_active')) {
            $('.header__mobile-menu').removeClass('header__mobile-menu_hidden');
            console.log('open')

        } else {
            $('.header__mobile-menu').addClass('header__mobile-menu_hidden');
            console.log('close')
        }
    });


});