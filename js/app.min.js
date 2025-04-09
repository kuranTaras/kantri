function animateNumbers(element, targetNumber, duration) {
    let currentNumber = 0;
    const increment = targetNumber / (duration / 16);

    const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            clearInterval(interval);
            element.text(targetNumber);
        } else {
            element.text(Math.round(currentNumber));
        }
    }, 16);
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.animated) {
            const $el = $(entry.target);
            const target = parseInt($el.data('target'), 10) || 0;
            const duration = parseInt($el.data('duration'), 10) || 2000;

            animateNumbers($el, target, duration);
            entry.target.animated = true;
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    threshold: 1
});

$('.about--block-info-js').each((_, element) => {
    observer.observe(element);
});

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
        $('.head').addClass('background');
        $('.header-logo').addClass('logo-none');
        $('.header-logo-black').addClass('logo-flex');
        $('.header_number').addClass('text-color-red');
        $('.header-number-graf').addClass('text-color-grey');
        $('.header-nav-link').addClass('text-color-black');
        $('.language-header-text2').addClass('text-color-black');
        $('.header__block_search-text').addClass('text-color-black');
        $('.header__block_search-svg path').addClass('fill-svg');
        $('.header-social-svg path').addClass('fill-svg');
        $('.header__block_search-open path').addClass('fill-svg');

    } else {
        $('.head').removeClass('background');
        $('.header-logo').removeClass('logo-none');
        $('.header-logo-black').removeClass('logo-flex');
        $('.header_number').removeClass('text-color-red');
        $('.header-number-graf').removeClass('text-color-grey');
        $('.header-nav-link').removeClass('text-color-black');
        $('.language-header-text2').removeClass('text-color-black');
        $('.header__block_search-text').removeClass('text-color-black');
        $('.header__block_search-svg path').removeClass('fill-svg');
        $('.header-social-svg path').removeClass('fill-svg');
        $('.header__block_search-open path').removeClass('fill-svg');
    }
});

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

$('.header__block__search').each(function() {
    $(this).on('click', () => {
        $('#body-id').addClass('body-scroll');
        $('.search').addClass('open-search');
    })
})

$('.search-close').on('click', function()  {
    $('#body-id').removeClass('body-scroll');
    $('.search').removeClass('open-search');
})

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

$('.search-cont-right').each(function() {
    $(this).on('click', () => {
        $('.search-result').addClass('open-search-result');
    })
})

$('.search-close').on('click', function()  {
    $('.search-result').removeClass('open-search-result');
})

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

$('.burger-arrow').each(function (index) {
    $(this).on('click', () => {
        if ($('.burger-menu-block').eq(index).hasClass('active')) {
            $('.burger-menu__block').slideUp()
            $('.burger-menu-block').removeClass('active')
        } else {
            $('.burger-menu__block').slideUp()
            $('.burger-menu-block').removeClass('active')

            $('.burger-menu__block').eq(index).slideDown()
            $('.burger-menu-block').eq(index).addClass('active')
        }
    })
})

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

$('.burger-language-block').each(function (index) {
    $(this).on('click', () => {
        if ($('.burger-language-block').eq(index).hasClass('active')) {
            $('.burger-language_block').slideUp()
            $('.burger-language-block').removeClass('active')
        } else {
            $('.burger-language_block').slideUp()
            $('.burger-language-block').removeClass('active')

            $('.burger-language_block').eq(index).slideDown()
            $('.burger-language-block').eq(index).addClass('active')
        }
    })
})

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

$('.header__block_search-open').on('click', function()  {
    $('#body-id').addClass('body-scroll');
    $('.burger').addClass('burger-open');
})

$('.burger-close').each(function() {
    $(this).on('click', () => {
        $('#body-id').removeClass('body-scroll');
        $('.burger').removeClass('burger-open');
    })
})

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".swiper-js", {
        breakpoints: {
            320: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 20
                },
        },
        navigation: {
            nextEl: ".carusel-btn-next",
            prevEl: ".carusel-btn-prev",
        },
        pagination: {
            el: ".swiper-pagination-1",
            type: "progressbar",
        },
        loop: true, 
        // autoplay: {
        //     delay: 3000, 
        //     disableOnInteraction: false 
        // }
      });
});

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".swiper-js2", {
        breakpoints: {
            320: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            999: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            1249: {
            slidesPerView: 3,
            spaceBetween: 24
            },
        },
        // navigation: {
        //     nextEl: ".carusel-btn-next",
        //     prevEl: ".carusel-btn-prev",
        // },
        pagination: {
            el: ".swiper-pagination-2",
            type: "progressbar",
        },
        loop: true, 
        // autoplay: {
        //     delay: 3000, 
        //     disableOnInteraction: false 
        // }
      });
});