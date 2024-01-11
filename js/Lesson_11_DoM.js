//! Приклад додавання до уже існуючого ДОМ дерева
// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("afterbegin", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
//!============================================= First task =============================================================================
// const textByID = document.getElementById("text");      //?Дві альтернативи як достукатись до елемента в ДОМ.
// console.log(textByID);
// const textSelector = document.querySelector("#text");
// console.log(textSelector);
// console.dir(textSelector);                         //?У вигляді об'єкта.
// textByID.textContent = "Change text for textContent";    //?Зміна тексту через Js.
// textByID.style.backgroundColor = "Orange";               //?Зміна стилів через Js.
// textByID.classList.add("text");                          //?Додає всі зміни в html тезі style.
// text.remove();                                        //?Видалення параграфу з id text!!!
// textByID.innerHTML = "";//?Альтернативний спосіб видалення(Можна так робити якщо в ul чи div де є елементи але цей метод або видаляє чи замінює)

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const listId = document.getElementById("technologiesList");
// console.log(listId);

// const markupMap = technologies              //?Створювання елементів li через map + join
//   .map((technology) => `<li class="item-technology">${technology}</li>`)
//   .join("");
// listId.insertAdjacentHTML("afterbegin", markupMap);   //?Додавання цієї розмітки в ul в HTML документі.

// const markupReduce = technologies.reduce((accum, item) => accum + `<li class="item-technology">${item}</li>`, "");

// listId.insertAdjacentHTML("afterbegin", markupReduce);

// const pElement = document.createElement("p"); //?Створюємо параграф всередині Java Script
// pElement.className = "paragraph";  //?Додаємо класс цьому параграфу.
// pElement.textContent = "Я створений параграф всередині Java Script!";

// technologiesList.append(pElement);    //?Додаємо до нашого ul цей створений параграф!
//! Третій спосіб створення ul && li з технологіями.
// const ulElement = document.createElement("ul");     //? Створюємо ul через Java Script.

// for(const technology of technologies) {    //?Перебираємо масив з технологіями.
//     const liElement = document.createElement("li");  //?Створюємо лішки.
//     liElement.textContent = technology;    //?Додаємо тект технології в кожну лішку.
//     ulElement.appendChild(liElement);      //?Додаємо лішки в створений ul.
// }

// document.body.appendChild(ulElement);//? Додаємо ul зі всіма li до body. innerHTML НЕ ВИКОРИСТОВУЄМО бо в html немає ul а ми його створили в JS.
//! Четвертий спосіб також без ul в html документі!!!
// const markup = technologies.map(technologie => `<li>${technologie}</li>`).join("");
// console.log(markup);

// document.body.insertAdjacentHTML("beforeend", `<ul>${markup}</ul>`); //? Можна одразу тут додати ul і в нього всі li елементи.
//!==================================================== Second Task ============================================================
const colors = [
  { label: "red", color: "#FF0000" },
  { label: "green", color: "#00FF00" },
  { label: "blue", color: "#0000FF" },
  { label: "yellow", color: "#FFFF00" },
];

