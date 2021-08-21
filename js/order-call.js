const hiddenModal = function () {
  const btnClose = document.querySelector(".order-call__button--close ");
  const orderCall = document.querySelector(".order-call");
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".menu");

  btnClose.addEventListener("click", function () {
    orderCall.classList.add("order-call--hidden");
    overlay.classList.remove("overlay--hidden");
    menu.classList.remove("menu--hidden");
  });
};

const visionModal= function () {
  const btnCall = document.querySelector(".button--call");
  const orderCall = document.querySelector(".order-call");
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".menu");

  btnCall.addEventListener("click", function () {
    orderCall.classList.remove("order-call--hidden");
    menu.classList.add("menu--hidden");
    overlay.classList.remove("overlay--hidden");
  });
};

hiddenModal();
visionModal();