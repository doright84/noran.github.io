$(document).ready(function () {
    //aos
    AOS.init({
        once: true //aos 한번만 실행하도록하기
    })
    //  스크롤
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.head-fixed').addClass('head-fixed-on')
            $('.mainmenu').addClass('head-txt-on')
            $('.login').addClass('head-txt-on')
            $('.noran-logo').addClass('noran-logo-on')
        } else {
            $(".head-fixed").removeClass('head-fixed-on')
            $('.mainmenu').removeClass('head-txt-on')
            $('.login').removeClass('head-txt-on')
            $('.noran-logo').removeClass('noran-logo-on')
        }
    })
    $('.gnb-menu li').mouseenter(function () {
        $(this).find('.menu-list').show();
    });
    $('.gnb-menu li').mouseleave(function () {
        $(this).find('.menu-list').hide();
    });






    //fix 메뉴 위로가는 swiper
    let h_top_sw = new Swiper('.h-top-sw-container', {
        loop: true,
        direction: 'vertical',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 500,
    });

    // 메인슬라이드 swiper
    let slide_sw = new Swiper('.slide-sw-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 500,
    });

    //footer-top
    let footer_sw = new Swiper('.footer-sw-container', {
        loop: true,
        slidesPerView: 5,
        slidesPerGroup: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        speed: 500,
    });
    // footer
    $('.family-site').click(function () {
        $('.family-site-btn').toggleClass('family-site-on')
        $('.family-site-menu').slideToggle();
    });


});