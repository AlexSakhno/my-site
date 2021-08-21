const hiddenModal = function () {
    const btnClose = document.querySelector(".feedback-form__button--close ");
    const feedback = document.querySelector(".feedback-form");
    const overlay = document.querySelector(".overlay");
    const menu = document.querySelector(".menu");
  
    btnClose.addEventListener("click", function () {
      feedback.classList.add("feedback-form--hidden");
      overlay.classList.add("overlay--hidden");
      menu.classList.remove("menu--hidden");
    });
  };
  
  const visionModal = function () {
    const btnCall = document.querySelector(".button--chat");
    const feedback = document.querySelector(".feedback-form");
    const overlay = document.querySelector(".overlay");
    const menu = document.querySelector(".menu");
  
    btnCall.addEventListener("click", function () {
      feedback.classList.remove("feedback-form--hidden");
      menu.classList.add("menu--hidden");
      overlay.classList.remove("overlay--hidden");
    });
  };
  
  hiddenModal();
  visionModal();