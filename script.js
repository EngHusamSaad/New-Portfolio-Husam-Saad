(function ($) {

    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero-text').text();
        var typed = new Typed('.hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 50,
            backSpeed: 20,
            smartBackspace: true,
            loop: true
        });
    }

    $(".experience-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);

function playmusic()
{
    var audio = document.getElementById('backgroundMusic');
    audio.play();

}


