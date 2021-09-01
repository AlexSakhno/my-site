const activeMenu = function () {
  let itemMenu = document.getElementsByClassName("main-menu__item");
  let itemMenuActive = document.getElementsByClassName("main-menu__item--active");

  for (let i = 0; i < itemMenu.length; i++) {
    itemMenu[i].addEventListener("click", function () {
      let currentActive = itemMenuActive[0];
      if (currentActive) {
        currentActive.classList.remove("main-menu__item--active");
      }

      if (currentActive !== "") {
        itemMenu[i].classList.add("main-menu__item--active");
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

      if (currentActive !== "") {
        linkLang[i].classList.add("footer-menu__link--active");
      }
    });
  }
};

const activeItem = function () {
  let linkItem= document.getElementsByClassName("main-page__item");
  let linkItemActive = document.getElementsByClassName(
    "main-page__item--active"
  );

  for (let i = 0; i < linkItem.length; i++) {
    linkItem[i].addEventListener("click", function () {
      let currentActive = linkItemActive[0];
      if (currentActive) {
        currentActive.classList.remove("main-page__item--active");
      }

      if (currentActive !== "") {
        linkItem[i].classList.add("main-page__item--active");
      }
    });
  }
};

activeMenu();
activeLang();
activeItem();