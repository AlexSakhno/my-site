const hiddenModal = function () {
  const btnClose = document.querySelector(".feedback-form__button--close ");
  const feedback = document.querySelector(".feedback-form");
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".menu");

  const breakpoint = window.matchMedia("(min-width:1120px)");

  btnClose.addEventListener("click", function () {
    if (breakpoint.matches === true) {
      menu.classList.remove("menu--hidden");
    }
    feedback.classList.add("feedback-form--hidden");
    overlay.classList.add("overlay--hidden");

    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  });
};

const visionModal = function () {
  const btnChat = document.querySelectorAll(".button--chat");
  const feedback = document.querySelector(".feedback-form");
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".menu");
  const inputName = document.querySelector(".feedback-form__name");

  for (let i = 0; i < btnChat.length; i++) {
    btnChat[i].addEventListener("click", function () {
      feedback.classList.remove("feedback-form--hidden");
      inputName.focus();
      menu.classList.add("menu--hidden");
      overlay.classList.remove("overlay--hidden");

      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    });
  }
};

hiddenModal();
visionModal();
