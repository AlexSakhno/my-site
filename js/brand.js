const contentBrandUse = function () {
  const brandContentButton = document.querySelector(".section-brand__button");
  const brandImgButton = document.querySelector(".section-brand__opening-img");
  const brandContent = document.querySelector(".section-brand__content");

  const funcToggle = function () {
    brandContent.classList.toggle("section-brand__content--open");
    if (brandContentButton.textContent.trim() == "Показать все") {
      brandContentButton.textContent = "Скрыть";
      brandImgButton.classList.toggle('section-brand__opening-img--reverse');
    } else {
      brandContentButton.textContent = "Показать все";
      brandImgButton.classList.toggle('section-brand__opening-img--reverse');
    }
  };

  brandContentButton.onclick = function () {
    funcToggle();
  };
};

contentBrandUse();
