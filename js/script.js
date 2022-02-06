$(document).ready(function () {
    //aos
    AOS.init({
        once: true //aos 한번만 실행하도록하기
    });

    // gotop
    let goTop = $('.gotop');
    goTop.click(function () {
        $('html,body').animate({
            scrollTop: 0
        });
    });
    $(window).scroll(function () {
        let goY = $(window).scrollTop();

        if (goY > 1400) {

            // fixed 하지 않게 한다.
            goTop.addClass('gotop-absolute');

        } else if (goY > 200) {

            // 안보이는 것을 보이게 한다.
            goTop.addClass('gotop-active');

        } else {
            // 모두 리셋한다.
            goTop.removeClass('gotop-active');
            goTop.removeClass('gotop-absolute');
        }
    })


    //  스크롤
    $(window).scroll(function () {
        let goY = $(window).scrollTop();
        if (goY > 0) {
            $('.head-fixed').addClass('head-fixed-on')
            $('.mainmenu').addClass('head-txt-on')
            $('.login').addClass('head-txt-on')
             $('.noran-logo').addClass('noran-logo-on')
             $('.index').addClass('index-on')
        } else {
            $(".head-fixed").removeClass('head-fixed-on')
            $('.mainmenu').removeClass('head-txt-on')
            $('.login').removeClass('head-txt-on')
            $('.noran-logo').removeClass('noran-logo-on')
            $('.index').removeClass('index-on')
        }
    })
    $('.gnb-menu li').mouseenter(function () {
        $(this).find('.menu-list').show();
        $('.mainmenu').addClass('head-txt-on')
    });
    $('.gnb-menu li').mouseleave(function () {
        $(this).find('.menu-list').hide();
    });
    $('.gnb-menu').mouseenter(function () {
        $('.head-gnb').addClass('h-gnb-on')
        $('.mainmenu').addClass('head-txt-on');
        $('.login').addClass('head-txt-on')
        $('.noran-logo').addClass('noran-logo-on')
        $('.index').addClass('index-on')
    });
    $('.gnb-menu').mouseleave(function () {
        $('.head-gnb').removeClass('h-gnb-on')
        $('.mainmenu').removeClass('head-txt-on');
        $('.login').removeClass('head-txt-on')
        $('.noran-logo').removeClass('noran-logo-on')
        $('.index').removeClass('index-on')
    });

    $(window).scroll(function () {
        let goY = $(window).scrollTop();
        if (goY > 800) {
            $('.head-fixed').css('margin-top','-500px');
        } else {
            $('.head-fixed').css('margin-top','0');
        }
    })




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
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,

        pagination: {
            el: ".slide-sw-pg",
            clickable: true,
        },

    });

    //메인슬라이드 swiper 슬라이드 토글 기능
    let slide_sw_bt = $('.slide-sw-bt');
    slide_sw_bt.click(function () {
        // 클래스 있는지 파악한다.
        let temp = $(this).hasClass('slide-sw-bt-play');

        // 상황에 따라서 기능 재작동 결정
        if (temp != true) {
            slide_sw.autoplay.stop();
        } else {
            slide_sw.autoplay.start();
        }

        $(this).toggleClass('slide-sw-bt-play');

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
        navigation: {
            nextEl: ".footer-next",
            prevEl: ".footer-prev",
        },
        speed: 500,
    });
    //메인슬라이드 swiper 슬라이드 토글 기능
    let footer_sw_bt = $('.footer-sw-bt');
    footer_sw_bt.click(function () {
        // 클래스 있는지 파악한다.
        let temp = $(this).hasClass('footer-sw-bt-play');

        // 상황에 따라서 기능 재작동 결정
        if (temp != true) {
            footer_sw.autoplay.stop();
        } else {
            footer_sw.autoplay.start();
        }

        $(this).toggleClass('slide-sw-bt-play');

    });
    // footer
    $('.family-site').click(function () {
        $('.family-site-btn').toggleClass('family-site-on')
        $('.family-site-menu').slideToggle();
    });


});