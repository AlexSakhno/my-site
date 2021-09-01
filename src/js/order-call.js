const hiddenModal = function () {
  const btnClose = document.querySelector(".order-call__button--close ");
  const orderCall = document.querySelector(".order-call");
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".menu");

  const breakpoint = window.matchMedia("(min-width:1120px)");

  btnClose.addEventListener("click", function () {
    if (breakpoint.matches === true) {
      menu.classList.remove("menu--hidden");
    }
    orderCall.classList.add("order-call--hidden");
    overlay.classList.add("overlay--hidden");

    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  });
};

const visionModal = function () {
  const btnCall = document.querySelectorAll(".button--call");
  const orderCall = document.querySelector(".order-call");
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".menu");
  const inputName = document.querySelector(".order-call__tel");

  for (let i = 0; i < btnCall.length; i++) {
    btnCall[i].addEventListener("click", function () {
      orderCall.classList.remove("order-call--hidden");
      menu.classList.add("menu--hidden");
      overlay.classList.remove("overlay--hidden");
      inputName.focus();

      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    });
  }
};

hiddenModal();
visionModal();
