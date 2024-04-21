"use strict";

//?Скрипт для того щоб розуміти на чому відкрита веб сторінка(мобільний телефон чи ПК).
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

//?Перевіряє чи це мобільний пристрій чи ПК та при клікі якщо це мобільний пристрій додає класс active для css.
if (isMobile.any()) {
  document.body.classList.add("touch");
  let menuArrows = document.querySelectorAll(".menu-arrow");
  if (menuArrows.length > 0) {
    for (let i = 0; menuArrows.length > i; i++) {
      const menuArrow = menuArrows[i];
      menuArrow.addEventListener("click", function (event) {
        menuArrow.parentElement.classList.toggle("active");
      });
    }
  }
} else {
  document.body.classList.add("pc");
}

//?Всі лінки з классом і дата атрибутом.
const menuLinks = document.querySelectorAll(".menu-link[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(event) {
    const menuLink = event.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      //?Отримуємо селектор лінка на який натиснуто.
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      //?Отримуємо висоту елемента мінус висота хедера(Тому що хеддер в нас fixed та пересувається з контентом).
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      //?Для відключення роботи посилання та корректної роботи скрипта!ВАЖЛИВО!!!
      event.preventDefault();
    }
  }
}
