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

//?Селектор арров
let menuArrows = document.querySelectorAll(".menu-arrow");
//?Перевіряє чи це мобільний пристрій чи ПК та при клікі якщо це мобільний пристрій додає класс active для css.
if (isMobile.any()) {
  document.body.classList.add("touch");
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

//?Меню бургер
const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".menu-body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    //?Клас lock відповідає за скрол сторінки при відкритому меню.Два класа active нижче за саме бургер меню.
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
    auditSubMenu(menuArrows, iconMenu);
  });
}

//?Всі лінки з классом і дата атрибутом.
const menuLinks = document.querySelectorAll(".menu-link[data-goto]");
const menuSubLinks = document.querySelectorAll(".menu-sub-link[data-goto]");

//?Лінк саб меню.
const menuSubList = document.querySelector(".menu-sub-list");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(event) {
    const menuLink = event.target;
    //?Перевіряємо чи є такий селектор з dataset-goto та потрібним нам класом.
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
      //?Перевіряємо чи натиснуто в бургер меню по навігації.Якщо так то закриваємо бургер меню і проскролює до цієї частини сторінки.
      checkOpenMobileMenu(iconMenu, menuBody);
      smoothSkroll(gotoBlockValue);
      //?Для відключення роботи посилання та корректної роботи скрипта!ВАЖЛИВО!!!
      event.preventDefault();
    }
  }
  //?Евент для кліків по саб меню.
  if (menuSubLinks.length > 0) {
    menuSubLinks.forEach((menuSubLink) => {
      menuSubLink.addEventListener("click", onMenuSubLinkClick);
    });

    //?Функція для навігації по вкладкі в бургер меню.ВАЖЛИВО!!!
    function onMenuSubLinkClick(event) {
      const menuSubLink = event.target;

      if (
        menuSubLink.dataset.goto &&
        document.querySelector(menuSubLink.dataset.goto)
      ) {
        //?Отримуємо селектор лінка на який натиснуто.
        const gotoBlockSub = document.querySelector(menuSubLink.dataset.goto);
        //?Отримуємо висоту елемента мінус висота хедера(Тому що хеддер в нас fixed та пересувається з контентом).
        const gotoBlockValue =
          gotoBlockSub.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector("header").offsetHeight;
          checkOpenMobileMenu(iconMenu, menuBody);
        smoothSkroll(gotoBlockValue);
        //?Для відключення роботи посилання та корректної роботи скрипта!ВАЖЛИВО!!!
        event.preventDefault();
      }
    }
  }
}

//?Плавний скрол до потрібного відділу сайту.
function smoothSkroll(gotoBlockValue) {
  return window.scrollTo({
    top: gotoBlockValue,
    behavior: "smooth",
  });
}

//?Функція для перевірки кількості стрілок(якщо їх більше однієї) і для закриття всіх саб меню при закритті меню, при переході по посиланні в меню чи саб меню.
function auditSubMenu(menuArrows, iconMenu) {
  if (menuArrows.length > 0) {
    for (let i = 0; menuArrows.length > i; i++) {
      const menuArrow = menuArrows[i];
      if (!iconMenu.classList.contains("active")) {
        console.log("audit");
        menuArrow.parentElement.classList.remove("active");
      }
    }
  }
}

//?Функція для перевірки чи натиснуто в бургер меню по навігації.Якщо так то закриваємо бургер меню.
function checkOpenMobileMenu(iconMenu, menuBody) {
    if (iconMenu.classList.contains("active")) {
        document.body.classList.remove("lock");
        iconMenu.classList.remove("active");
        menuBody.classList.remove("active");
        auditSubMenu(menuArrows, iconMenu);
      }
}