const enableSwiper = function () {
    var mySwiper = undefined;
    const swiperVisible = document.querySelector('.swiper-container');
    function initSwiper() {
        var screenWidth = window.innerWidth;
        if ((screenWidth < (375)) && (mySwiper == undefined)) {
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
            swiperVisible.classList.remove('swiper-container--none');
        } else if ((screenWidth > 375) && (mySwiper != undefined)) {
            mySwiper.destroy();
            mySwiper = undefined;
            swiperVisible.classList.add('swiper-container--none');
        }
    }

    window.addEventListener('resize', function () {
        initSwiper();
    });
}();

const contentUse = function () {
    const brandContentButton = document.querySelector('.section__button');
    const brandImgButton = document.querySelector('.section__opening-img');
    const brandContent = document.querySelector('.section__content');

    brandContentButton.addEventListener('click', function () {
        if (brandContentButton.textContent === 'Показать все') {
            brandContent.classList.add('section__content--open');
            brandImgButton.classList.add('section__opening-img--reverse');
            brandContentButton.textContent = 'Скрыть';
        } else {
            brandContent.classList.remove('section__content--open');
            brandImgButton.classList.remove('section__opening-img--reverse');
            brandContentButton.textContent = 'Показать все';
        }
    });

};



contentUse();