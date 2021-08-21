const contentTechnicUse = function () {
    const technicContentButton = document.querySelector(".section-technic__button");
    const technicImgButton = document.querySelector(".section-technic__opening-img");
    const technicContent = document.querySelector(".section-technic__content");
  
    const funcToggle = function () {
        technicContent.classList.toggle("section-technic__content--open");
      if (technicContentButton.textContent.trim() == "Показать все") {
        technicContentButton.textContent = "Скрыть";
        technicImgButton.classList.toggle('section-technic__opening-img--reverse');
      } else {
        technicContentButton.textContent = "Показать все";
        technicImgButton.classList.toggle('section-technic__opening-img--reverse');
      }
    };
  
    technicContentButton.onclick = function () {
      funcToggle();
    };
  };
  
  contentTechnicUse();