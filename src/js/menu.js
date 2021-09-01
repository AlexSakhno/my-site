const hiddenMenu = function () {
  const btnClose = document.querySelector(".header-menu__button--close");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");

  btnClose.addEventListener("click", function () {
    menu.classList.add("menu--hidden");
    overlay.classList.add("overlay--hidden");

    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  });
};

const visionMenu = function () {
  const btnBurger = document.querySelector(".header-page__burger");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");

  btnBurger.addEventListener("click", function () {
    menu.classList.remove("menu--hidden");
    overlay.classList.remove("overlay--hidden");

    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
  });
};

const hiddenMenuOverlay = function () {
  const breakpoint = window.matchMedia("(min-width:1120px)");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");
  const feedBack = document.querySelector(".feedback-form");
  const orderCall = document.querySelector(".order-call");

  overlay.addEventListener("click", function () {
    if (breakpoint.matches === true) {
      menu.classList.remove("menu--hidden");
    } else {
      menu.classList.add("menu--hidden");
    }
    feedBack.classList.add("feedback-form--hidden");
    orderCall.classList.add("order-call--hidden");
    overlay.classList.add("overlay--hidden");

    const scrollY = document.body.style.top;
  });
};

const useMenu = function () {
  const breakpoint = window.matchMedia("(min-width:1120px)");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      menu.classList.remove("menu--hidden");
    } else if (breakpoint.matches === false) {
      menu.classList.add("menu--hidden");
      overlay.classList.add("overlay--hidden");
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

visionMenu();
hiddenMenu();
useMenu();
hiddenMenuOverlay();
