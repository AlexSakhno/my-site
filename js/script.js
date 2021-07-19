let contentOpen = function () {
    const brandContentButton = document.querySelector('.section__button');
    const brandContent = document.querySelector('.section__content');
    const brandImgButton = document.querySelector('.section__opening-img');

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

contentOpen();


