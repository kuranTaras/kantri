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
        $('.search1').addClass('open-search');
    })
})

$('.search1-close').on('click', function()  {
    $('#body-id').removeClass('body-scroll');
    $('.search1').removeClass('open-search');
})

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

$('.search1-cont-right').each(function() {
    $(this).on('click', () => {
        $('.search1-result').addClass('open-search-result');
    })
})

$('.search1-close').on('click', function()  {
    $('.search1-result').removeClass('open-search-result');
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
        // loop: true, 
        // autoplay: {
        //     delay: 3000, 
        //     disableOnInteraction: false 
        // }
      });
});

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".swiper-js3", {
        breakpoints: {
            320: {
            slidesPerView: 1.3,
            spaceBetween: 16
            },
            759: {
            slidesPerView: 2.3,
            spaceBetween: 20
            },
            1249: {
            slidesPerView: 3.3,
            spaceBetween: 38
            },
            1399: {
            slidesPerView: 4,
            spaceBetween: 38
            },
        },
        pagination: {
            el: ".swiper-pagination-3",
            type: "progressbar",
        },
      });
});

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

document.addEventListener('DOMContentLoaded', function () {
    Fancybox.bind('[data-fancybox="gallery"]', {
        // Custom options
    });
  });

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".swiper-js4", {
        breakpoints: {
            320: {
            slidesPerView: 2,
            spaceBetween: 16
            },
            500: {
            slidesPerView: 3,
            spaceBetween: 16
            },
            759: {
            slidesPerView: 4,
            spaceBetween: 16
            },
            999: {
            slidesPerView: 5,
            spaceBetween: 16
            },
            1249: {
            slidesPerView: 6,
            spaceBetween: 16
            },
            1399: {
            slidesPerView: 7,
            spaceBetween: 16
            },
        },
        pagination: {
            el: ".swiper-pagination-4",
            type: "progressbar",
        },
      });
});

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

$('.questions-modul').each(function (index) {
    $(this).on('click', () => {
        if ($('.questions-modul').eq(index).hasClass('active')) {
            $('.questions-text').slideUp()
            $('.questions-modul').removeClass('active')
        } else {
            $('.questions-text').slideUp()
            $('.questions-modul').removeClass('active')

            $('.questions-text').eq(index).slideDown()
            $('.questions-modul').eq(index).addClass('active')
        }
    })
})

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

document.addEventListener('DOMContentLoaded', function () {
    var mainSlides = document.querySelectorAll('.swiper-js5 .swiper-slide');
    var miniSlides = document.querySelectorAll('.swiper-js5-mini .swiper-slide');
    const miniContainer = document.querySelector('.swiper-js5-mini');
    const mainWrapper = document.querySelector('.swiper-js5');

    var mainSwiper;
    var miniSwiper;

    function getMainSlidesPerView() {
        var count = mainSlides.length;
        var width = window.innerWidth;

        if (count >= 3 && width >= 1250) return 3;
        if (count >= 2 && width >= 1000) return 2;
        return 1;
    }

    function getMiniSlidesPerView() {
        var count = miniSlides.length;
        if (count >= 3) return 3;
        if (count === 2) return 2;
        return 1;
    }

    function applySingleSlideStyle() {
        const isSingle = mainSlides.length === 1;
        const isWideScreen = window.innerWidth >= 1000;

        mainSlides.forEach(slide => {
            if (isSingle && isWideScreen) {
                slide.classList.add('single-slide-wide');
            } else {
                slide.classList.remove('single-slide-wide');
            }
        });
    }

    function initSwipers() {
        if (mainSwiper) mainSwiper.destroy(true, true);
        if (miniSwiper) miniSwiper.destroy(true, true);

        applySingleSlideStyle();

        mainSwiper = new Swiper(".swiper-js5", {
            slidesPerView: getMainSlidesPerView(),
            spaceBetween: 20,
            watchOverflow: true,
            navigation: {
                nextEl: ".carusel-btn5-next",
                prevEl: ".carusel-btn5-prev",
            },
            pagination: {
                el: ".swiper-pagination-5",
                type: "progressbar",
            },
        });

        if (miniSlides.length <= 1) {
            if (miniContainer) miniContainer.style.display = 'none';
            return;
        } else {
            if (miniContainer) miniContainer.style.display = '';
        }

        miniSwiper = new Swiper(".swiper-js5-mini", {
            slidesPerView: getMiniSlidesPerView(),
            spaceBetween: 10,
            watchOverflow: true,

            on: {
                slideChange: function () {
                    var activeIndex = this.activeIndex;
                    miniSlides.forEach(slide => slide.classList.remove('active'));
                    if (miniSlides[activeIndex]) {
                        miniSlides[activeIndex].classList.add('active');
                    }
                }
            }
        });

        mainSwiper.controller.control = miniSwiper;
        miniSwiper.controller.control = mainSwiper;

        miniSlides.forEach(function (slide, index) {
            slide.addEventListener('click', function () {
                mainSwiper.slideTo(index);
            });
        });
    }

    initSwipers();
    window.addEventListener('resize', () => {
        applySingleSlideStyle();
        initSwipers();
    });
});



// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".swiper-js6", {
        breakpoints: {
            320: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            760: {
                slidesPerView: 2,
                spaceBetween: 20
                },
            1000: {
                slidesPerView: 3,
                spaceBetween: 20
                },
        },
        pagination: {
            el: ".swiper-pagination-6",
            type: "progressbar",
        },
      });
});

// ----------------->   ----------------->   ----------------->   ----------------->   ----------------->   ----------------->

let swiper7Mini;
let swiper7;

function initSwiper7(count) {
    if (swiper7Mini) swiper7Mini.destroy(true, true);
    if (swiper7) swiper7.destroy(true, true);

    let slidesPerViewMini = 1;
    if (count >= 3) slidesPerViewMini = 3;
    else if (count === 2) slidesPerViewMini = 2;

    swiper7Mini = new Swiper('.swiper-js7-mini', {
        slidesPerView: slidesPerViewMini,
        spaceBetween: 10,
        watchSlidesProgress: true,
    });

    swiper7 = new Swiper('.swiper-js7', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.carusel-btn7-next',
            prevEl: '.carusel-btn7-prev',
        },
        thumbs: {
            swiper: count > 1 ? swiper7Mini : null
        }
    });
}

$('.reviews-popup-open').each(function () {
    $(this).on('click', function (e) {
        e.preventDefault();

        const block = $(this).closest('.reviews-block');
        const name = block.find('.reviews-block-top-name').text();
        const date = block.find('.reviews-block-top-data').text();
        const text = block.find('.reviews-block-text').data('long-text') || '';
        const imgs = block.find('.reviews-block_img');

        $('.reviews__popup-cont-name').text(name);
        $('.reviews__popup-cont-data').text(`Дата публікаці: ${date}`);
        $('.reviews__popup-cont-text').text(text);

        const bigWrapper = $('.swiper-js7 .swiper-wrapper');
        const miniWrapper = $('.swiper-js7-mini .swiper-wrapper');
        bigWrapper.empty();
        miniWrapper.empty();

        let hasValidImages = false;
        let imageCount = 0;

        imgs.each(function () {
            const src = $(this).attr('src');
            if (src && src.trim() !== '') {
                hasValidImages = true;
                imageCount++;

                const imgBig = `
                    <div class="carusel-info swiper-slide">
                        <img class="carusel-foto-img" src="${src}" alt="">
                    </div>`;
                bigWrapper.append(imgBig);
                miniWrapper.append(imgBig);
            }
        });

        if (hasValidImages) {
            $('.reviews__popup--cont').show();
            $('.reviews__popup-cont').css('width', 'calc(50% - 20px)');

            initSwiper7(imageCount);

        if (imageCount === 1) {
            $('.carusel_mini').css('display', 'none');
        } else {
            $('.carusel_mini').css('display', '');
        }
        } else {
            $('.reviews__popup--cont').hide();
            $('.reviews__popup-cont').css('width', '100%');
        }

        $('#body-id').addClass('body-scroll');
        $('.reviews-popup').addClass('open-reviews-popup');
    });
});

$('.reviews_popup-close').on('click', function () {
    $('#body-id').removeClass('body-scroll');
    $('.reviews-popup').removeClass('open-reviews-popup');
});
