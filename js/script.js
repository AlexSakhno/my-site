const useSwiper = function () {
    const breakpoint = window.matchMedia('(min-width:530px)');

    let mySwiper;

    const breakpointChecker = function () {
        if (breakpoint.matches === true) {
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            return;
        } else if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };

    const enableSwiper = function () {
        mySwiper = new Swiper('.swiper-container', {
            loop: false,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 0,
            grabCursor: true,
            keyboard: {
                enable: false,
                onlyInViewport: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
};

const contentUse = function () {
    const brandContentButton = document.querySelector('.section__button');
    const brandImgButton = document.querySelector('.section__opening-img');
    const brandContent = document.querySelector('.section__content');

    const addClass = function () {
        brandContent.classList.add('section__content--open');
        brandImgButton.classList.add('section__opening-img--reverse');
        brandContentButton.textContent = 'Скрыть';
    }

    const removeClass = function () {
        brandContent.classList.remove('section__content--open');
        brandImgButton.classList.remove('section__opening-img--reverse');
        brandContentButton.textContent = 'Показать все';
    }

    brandContentButton.addEventListener('click', function () {
        if (brandContentButton.textContent === 'Показать все') {
            addClass();
        } else {
            removeClass();
        }
    });

};

contentUse();
useSwiper();