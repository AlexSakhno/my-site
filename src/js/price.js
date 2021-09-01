const useSwiperTech = function () {
    const breakpoint = window.matchMedia("(min-width:530px)");
  
    let mySwiperPrice;
  
    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (mySwiperPrice !== undefined) mySwiperPrice.destroy(true, true);
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };
  
    const enableSwiper = function () {
        mySwiperPrice = new Swiper(".price-slider__container", {
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
          el: ".price-slider__pagination",
          clickable: true,
        },
      });
    };
  
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  };
  
  useSwiperTech();