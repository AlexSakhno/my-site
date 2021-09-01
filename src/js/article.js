const activeText = function () {
  const pText = document.querySelector(".main-page__all-text");
  const btnOpen = document.querySelector(".main-page__read");

  btnOpen.onclick = function () {
    pText.classList.toggle("main-page__all-text--open");
    if (btnOpen.textContent.trim() == "Читать далее") {
      btnOpen.textContent = "Скрыть";
      btnOpen.classList.toggle('main-page__read--reverse');
    } else {
      btnOpen.textContent = "Читать далее";
      btnOpen.classList.toggle('main-page__read--reverse');
    }
  };
};

activeText();
