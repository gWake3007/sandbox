//? popupLinks - всі лінки по натисканню на які буде відкриття модального вікна.
const popupLinks = document.querySelectorAll(".popup-link");

const body = document.querySelector("body");

//? lockPadding - всі елементи на яких є класс при відкритті модлального вікна прибирають падінг.
const lockPadding = document.querySelectorAll(".look-padding");

//?змінна яка дозволяє відкритися модалці(під час виконання скрипту вона змінюється для контролю поведінки).Тобто захист від подвійних натискань.
let unlock = true;

//?Тайм аут 800 мілісекунд так як в css ми маємо анімацію теж 0.8s.
const timeout = 800;

//?Перевіряємо чи є на сторінці хоч одне посилання на модалку.Якщо є то циклом пробігаємось по всім посиланням та додаємо на них всіх Евент.
if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", function (e) {
      //?Тут з посилання href забираємо # та беремо по цій назві елемент у якого такий же id. Щоб далі використати його для відкриття.
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

//? popupCloseIcon - забирає всі селектори для закриття модалок(тобто їх може бути стільки завгодно).
const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i];
    //?Тут ми також додаємо Евент по кліку на всі елементи які мають класс close-popup.Далі використовуємо функцію popupClose але також використовуємо closest - який знаходить найближчий батьківський елемент з класом(в данному випадку popup)
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
    //?Перша перевірка чи unlock нам дозволяє відкрити модалку і чи є на сторінці currentPopup.
  if (currentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    //?Якщо є селектор popupActive з вже відкритою модалкою то вона закриважться. Якщо ні то блокується скрол(для модалки яку відкриємо і далі додамо класс open).
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add("open");
    currentPopup.addEventListener("click", function (e) {
        //?Перевірка якщо наш таргет не popup-content тобто якщо ми клікаємо не по модалці(тобто по backdrop) то вона закривається.
      if (!e.target.closest(".popup-content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

//?Функція закриття модалки.А також ще одна перевірка doUnlock для того якщо ми одну модалку відкриваємо в іншій(щоб і далі блокувався скрол).bodyUnLock - відповідає за те щоб не розблоковувати скрол в body.
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

//?lockPaddingValue - тут ми вираховуємо різницю між вікном window та видимою частиною вьюпорту(потрібно щоб отримати ширину скролу в браузері).
function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  //?В самому циклі та нижче ми робимо так щоб різниця падінгів overflow(самого скролу) яку ми вилічили вище змінювалась у елемента і у нашого body. А також до нашого body додавався класс lock. Це зробленно щоб ця різниця не зміщувала весь контент на сторінці а також саму модалку. І нижче описанний timeout а також transition в css 0.8 секунд.Щоб все плавно працювало.
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  //?Це потрібно щоб за час відкриття або закриття модального вікна не було повторювальних натисканнь.
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = "0px";
      }
    }

    //?Тут забираємо у body класс lock, а також повертаємо паддінги у body та елемента(тобто на сторінці з поверненням overflow). Тут timeout потрібен щоб не зміщувалася сама модалка при закритті ізза того що одразу з'являється overflow.
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

//?Так як евент keydown використовує властивість keyCode або key то ми і порівнюємо which Евенту "keydown" з числом 27 яке є кодом числа Esc.which - визначає шлях до виконуваного файлу програми.
document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

//?Дві функції поліфіли для властивостей closest & matches(Поліфіли це функції які підлаштовують параметри під старі версії браузерів)
(function () {
  //?Перевіряємо підтримку
  if (!Element.prototype.closest) {
    //?Реалізація
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

(function () {
  //?Перевіряємо підтримку
  if (!Element.prototype.matches) {
    //?Визначити властивість
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();
