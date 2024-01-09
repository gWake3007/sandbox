//! Приклад додавання до уже існуючого ДОМ дерева
// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("afterbegin", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
//!============================================= First task =============================================================================
const textByID = document.getElementById("text");      //?Дві альтернативи як достукатись до елемента в ДОМ.
console.log(textByID);
const textSelector = document.querySelector("#text");
console.log(textSelector);
console.dir(textSelector);                         //?У вигляді об'єкта.
textByID.textContent = "Change text for textContent";    //?Зміна тексту через Js.
textByID.style.backgroundColor = "Orange";               //?Зміна стилів через Js.
textByID.classList.add("text");                          //?Додає всі зміни в html тезі style.
