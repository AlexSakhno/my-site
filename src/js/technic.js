const contentTechnicUse = function () {
    const technicContentButton = document.querySelector(".section-technic__button");
    const technicImgButton = document.querySelector(".section-technic__opening-img");
    const technicContent = document.querySelector(".section-technic__content");
  
    const funcToggle = function () {
        technicContent.classList.toggle("section-technic__content--open");
      if (technicContentButton.textContent.trim() == "Показать все") {
        technicContentButton.textContent = "Скрыть";
        technicImgButton.classList.toggle('section-technic__opening-img--reverse');
      } else {
        technicContentButton.textContent = "Показать все";
        technicImgButton.classList.toggle('section-technic__opening-img--reverse');
      }
    };
  
    technicContentButton.onclick = function () {
      funcToggle();
    };
  };
  
  const useSwiperTech = function () {
    const breakpoint = window.matchMedia("(min-width:530px)");
  
    let mySwiperTech;
  
    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (mySwiperTech !== undefined) mySwiperTech.destroy(true, true);
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };
  
    const enableSwiper = function () {
      mySwiperTech = new Swiper(".technic-slider__container", {
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
          el: ".technic-slider__pagination",
          clickable: true,
        },
      });
    };
  
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  };
  
  useSwiperTech();
  contentTechnicUse();