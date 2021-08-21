const activeText = function () {
  const pText = document.querySelector(".main-page__all-text");
  const btnOpen = document.querySelector(".main-page__read");

  btnOpen.onclick = function () {
    pText.classList.toggle("main-page__all-text--open");
    if (btnOpen.textContent == "Читать далее") {
        btnOpen.textContent = 'Скрыть';
    } else {
        btnOpen.textContent = "Читать далее"
    }
  };
};

activeText();
