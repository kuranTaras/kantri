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