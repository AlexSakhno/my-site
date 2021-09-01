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

const useSwiper = function () {
  const breakpoint = window.matchMedia("(min-width:530px)");

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
    mySwiper = new Swiper(".brand-slider__container", {
      loop: false,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 0,
      grabCursor: true,
      keyboard: {
        enable: false,
        onlyInViewport: false,
      },
      pagination: {
        el: ".brand-slider__pagination",
        clickable: true,
      },
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

useSwiper();
contentBrandUse();
