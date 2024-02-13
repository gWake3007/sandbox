//!============================================= First Task && Second Task ==================================================
// const instruments = [
//   {
//     id: 1,
//     img: "https://static.dnipro-m.ua/cache/products/1754/catalog_origin_310979.jpg",
//     name: "Молоток",
//     price: 150,
//   },
//   {
//     id: 2,
//     img: "https://static.dnipro-m.ua/cache/products/5728/catalog_origin_300445.jpg",
//     name: "Перфоратор",
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: "https://static.dnipro-m.ua/cache/products/4601/catalog_origin_299741.jpg",
//     name: "Рівень",
//     price: 2000,
//   },
// ];

// const list = document.querySelector(".js-instrument-list");  //?Селектор ul (ліста) куди все додається і стилі на нього!
// list.style.listStyle = "none";
// list.style.display = "flex";
// list.style.flexDirection = "column";
// list.style.gap = "30px";

// const markup = instruments.reduce(  //?Створення розмітки чепрез reduce()
//   (acc, { id, img, name, price }) =>
//     acc +
//     `<li id="${id}">
// <img src="${img}" alt="${name}" width="300px"/>
// <p>${name}</p>
// <p>${price}</p>
// </li>`,
//   ""
// );
// list.insertAdjacentHTML("beforeend", markup);

// function createMarkup(arr) {        //?Функція для створення розмітки через map() + join("").
//   const markup = arr
//     .map(
//       ({ id, img, name, price }) => `<li id="${id}">
//      <img src="${img}" alt="${name}" width = "300px"/>
//      <h2>${name}</h2>
//     <h3>${price}</h3>
//      </li>`
//     ).join("");
//   list.innerHTML = markup;   //?Використовуємо іннер для нашої другої функції щоб перемальовувати розмітку.Щоб був той товар
//   //?що введенний в інпуті.
// //   list.insertAdjacentHTML("beforeend", markup);
// }

//?Так вже не пишемо!Пишеться через шаблонні рядки!
// function createMarkup(arr) {
//     const markup = arr.map(({id, img, name, price}) => {
//         const li = document.createElement("li");
//         const image = document.createElement("img");
//         const h2 = document.createElement("h2");
//         const h3 = document.createElement("h3");
//         image.src = img;
//         image.alt = name;
//         image.width = 300;
//         h2.textContent = name;
//         h3.textContent = price;
//         li.setAttribute("data-id",id);
//         li.append(image,h2,h3);
//         return li;
//     });
//     list.append(...markup);   //?Потрібно щоб додавався не об'єктами. Для корректного додавання!
// }

// createMarkup(instruments);         //?Це якщо нам треба звичайна розмітка.

// const form = document.querySelector(".js-form");

// form.addEventListener("submit", searchProduct);

// function searchProduct(event) {
//   event.preventDefault();
//   const inputValue = event.currentTarget.elements.product.value;
//   const resultFilter = instruments.filter(
//     ({ name }) => {   //?Тут через деструкторизацію дістаємось до назви самого інструмента!
//       return name.toLowerCase().includes(inputValue.trim().toLowerCase());
//     } //?За допомогою фільтра проходимо чи є в інпуті назва або
//   ); //?частина назви нашого товару(метод trim()- щоб ігнорувати пробіли спочатку і в кінці та лов кейс для одного регістру)
//   createMarkup(resultFilter);
//   event.currentTarget.reset();  //?Прибераємо після натискання назву з інпуту.
// }
//!===================================================== Third Task ======================================================
const translations = [
  { original: "hello", translation: "привіт" },
  { original: "flower", translation: "квітка" },
  { original: "apple", translation: "яблуко" },
];

const refs = {
  list: document.querySelector(".list"),
  English: document.querySelector(".js-English"),
  Ukrainian: document.querySelector(".js-Ukrainian"),
};

function getEnglishVersion() {
  //?forEach() - перебираємо дітей ul(list) та підставляємо значення оригінальних назв.
  [...refs.list.children].forEach((item, index) => {
    item.textContent = translations[index].original;
    item.classList.remove("active");//?Погана практика додавання чогось на кожній ітерації а не за один раз(для завдання треба)
  });
  refs.English.disabled = true;    //?Вимикаємо кнопку яку натиснули і вмикаємо протилежну і навпаки.Щоб обидві не були активні
  refs.Ukrainian.disabled = false;
}

function getTranslationWord() {
    [...refs.list.children].forEach((item, index) => {
        item.textContent = translations[index].translation;
        item.classList.add("active");
    });
    refs.Ukrainian.disabled = true;
    refs.English.disabled = false;
}

refs.English.addEventListener("click", getEnglishVersion);
refs.Ukrainian.addEventListener("click", getTranslationWord);
