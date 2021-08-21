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
      mySwiper = new Swiper(".swiper-container", {
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
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    };
  
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  };

  useSwiper();