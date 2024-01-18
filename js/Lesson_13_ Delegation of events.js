//!==================================================== Example ================================================================
//?Приклад сприття. При натисканні по Descendant - в консоль виводяться всі кліки. При Child - два кліки. І тільки при Parent виводиться сам.
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   console.log("Parent click handler");
// });

// child.addEventListener("click", () => {
//   console.log("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   console.log("Descendant click handler");
// });
//!==================================================== Example (event.target && event.currentTarget) =====================================
//?event.curremtTarget-посилання на елемент на якому подія(тобто parent).event.target-посилання на поточний елемент на якому спрацював евент.
// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });
//!=============================== Example ( stopPropagation() stopImmediatePropagation() ) ==================================================
//? stopPropagation() - команда для призупинення спливання. При кліку на Descendant - alert виводить тільки один месседж.
//? Але при кліку на Child два alert. Свій та parent. І при кліку на parent тільки один свій тому що він найвище.
//? stopImmediatePropagation() - повне зупинення спливання на поточному елементі.Навіть якщо на ньому декілька подій.
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });
//!==================================================== Example ()
//?Функція в якій завжди 60 різних випадкових кольорів. В які при натисканні на колір показує його код кольору.
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }
//!========================================== Example ( querySelectorAll() & stopPropogation() ) =============================================
//? Приклад занурення та сплиття в alert! По замочкування всі addEventListener - завжди працюють на сплиття.
// const allElements = document.querySelectorAll("*");  //? * - пряуює як для css так і для js на всі елементи!

// console.log(allElements);

// for(const element of allElements) {
//     element.addEventListener("click", () => alert(`Занурення: ${element.tagName}`), true); //?За замовчуванням false.При зміні інший напрямок
//     element.addEventListener("click", () => alert(`Сплиття: ${element.tagName}`));
// }

// document.getElementsByTagName("p")[0].addEventListener("click", (event) => {
//     event.stopPropagation();  //?Тут ми за тегом добираємось до першого параграфу(він в нас один) і зупиняємо сплиття.
// }); //?Якщо тут ставимо true то зупиняємо занурення.
//!================================================== Example (target & currentTarget) ===================================================
// const body = document.querySelector("body");

// body.addEventListener("click", onClick);

// function onClick(event) {
//     console.log(event.target);  //?Посилання на елемент який викликав функцію.
//     console.log(event.currentTarget); //?Посилання на елемент який перед .addEventListener(). Тобто body.
// }
//!====================================================== Task: two Example ===================================================================
//?Моє написання.
// const form = document.getElementById("form");
// const price = document.getElementById("price");
// const amount = document.getElementById("amount");
// const quantity = document.getElementById("quantity");
// const total = document.getElementById("total");

// quantity.addEventListener("input", changeQuantity);

// function changeQuantity(event) {
//     amount.textContent = event.currentTarget.value;
// }

// form.addEventListener("input", totalPrice);

// function totalPrice(event) {
//     const quantityKG = form.elements.quantity.value;
//     const priceForKG = form.elements.price.value;
//     const totalResult = parseFloat((quantityKG * priceForKG).toFixed(2));   //?toFixed(2) робить так щоб після крапки не було більше двуї чисел
//     total.textContent = `${totalResult} грн`;      //?Але toFixed() переводить число у рядок. А parseFloat() перетворює назад в число.
// }
//?Варіант викладача.
const refs = {
   form: document.getElementById("form"),
   amount: document.getElementById("amount"),
   total: document.getElementById("total"),
};

const data = {                       //?Тут зберігаємо результат і вилічуємо його.
    price: 0,
    amount: 0,
    calcTotalPrice() {
        return (this.price * this.amount).toFixed(2);
    },
}

setRange();
fillData();           //?Щоб за замовчкуванням при перезавантаженні був вже результат.Тобто 50 грн!
displayTotal();

refs.form.addEventListener("input", onInput);

function onInput({target}) {    //?Робимо деструкторизацію щоб одразу писати target.name а не event.target.name.Так як нам потрібен target!
    if(target.name === "quantity") {
        refs.amount.textContent = target.value;
    }
    fillData();
    displayTotal();
}

function fillData() {
    data.price = refs.form.elements.price.value;
    data.amount = refs.form.elements.quantity.value;
}

function displayTotal() {
    refs.total.textContent = `${data.calcTotalPrice()} грн.`;
}

function setRange() {
    refs.amount.textContent = refs.form.elements.quantity.value;
}
//!=========================================================== Example 
