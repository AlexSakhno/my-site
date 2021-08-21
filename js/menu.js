const activeMenu = function () {
  let itemMenu = document.getElementsByClassName("main-menu__item");
  let itemMenuActive = document.getElementsByClassName(
    "main-menu__item--active"
  );

  for (let i = 0; i < itemMenu.length; i++) {
    itemMenu[i].addEventListener("click", function () {
      let currentActive = itemMenuActive[0];
      if (currentActive) {
        currentActive.classList.remove("main-menu__item--active");
      }

      if (currentActive !== this) {
        this.classList.add("main-menu__item--active");
      }
    });
  }
};

const activeLang = function () {
  let linkLang = document.getElementsByClassName("footer-menu__link");
  let linkLangActive = document.getElementsByClassName(
    "footer-menu__link--active"
  );

  for (let i = 0; i < linkLang.length; i++) {
    linkLang[i].addEventListener("click", function () {
      let currentActive = linkLangActive[0];
      if (currentActive) {
        currentActive.classList.remove("footer-menu__link--active");
      }

      if (currentActive !== this) {
        this.classList.add("footer-menu__link--active");
      }
    });
  }
};

const hiddenMenu = function () {
  const btnClose = document.querySelector(".header-menu__button--close");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");

  btnClose.addEventListener("click", function () {
    menu.classList.add("menu--hidden");
    overlay.classList.add("overlay--hidden");
  });
};

const visionMenu = function () {
  const btnBurger = document.querySelector(".header-page__burger");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");

  btnBurger.addEventListener("click", function () {
    menu.classList.remove("menu--hidden");
    overlay.classList.remove("overlay--hidden");
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

activeMenu();
activeLang();
visionMenu();
hiddenMenu();
useMenu();
hiddenMenuOverlay();