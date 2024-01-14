//!========================================================== Example ======================================================================
//?Два стандартних приклада клікера кнопки. Другий більш читабельніший.
// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);
//!====================================================== Example ===========================================================================
//? Приклад того як можна на одного слухача навішати декілька подій.
// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);
//!==================================================== Example ==============================================================================
//?Концепція removeEventListener - яка прибирає слухача подій. Кпопка addListenerBtn додає слухача до btn і робить його активним а також
//?виводить в консоль підтвердження. Після чого btn працює. remove також виводить в консоль що з btn знятий слухач і знімає слухача з цієї
//?кнопки. Після чого по натисканню на неї нічого не відбувається.

// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });
//!=================================================== Example ( bind() ) ===================================================================
//? Приклад в якій концепції працює слухач з концепцією this. Для того щоб this працював зі слухачем чи якоюсь другою функцією
//?використовуємо метод bind().
// const mango = {
//     username: "Mango",
//     showUsername() {
//       console.log(this);
//       console.log(`My username is: ${this.username}`);
//     },
//   };

//   const btn = document.querySelector(".js-btn");

//   // ✅ Працює
//   mango.showUsername();

//   // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
//   btn.addEventListener("click", mango.showUsername); // не працює  //Тут буде undefined!!!

//   // ✅ Не забувайте прив'язувати контекст методів об'єкта
//   btn.addEventListener("click", mango.showUsername.bind(mango));
//!============================================== Example( event, event type , currentTarget ) ===============================================
// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);       //?Вказує на сам евент.
//   console.log("event type: ", event.type);    //?Вказує на тип евенту.
//   console.log("currentTarget: ", event.currentTarget);    //?Вказує на потойний таргет(елемент DOM дерева!!!)
// };

// button.addEventListener("click", handleClick);
//!=============================================== Example ( preventDefault ) ===========================================================
//?Робота з input через form. Добираємся до селектора форми. Потім через слухача та деструкторизацію до інпутів і виводимо введенні значення.
// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); //? preventDefault - потрібен для того щоб скасувати дії браузера за замовчкуванням(НЕ БАЖАНІ ДІЇ БРАУЗЕРА)
//   const {
//     elements: { username, password }     //?Спосіб деструкторизувати input в form. Звертається до назв input( NAME ) ВАЖЛИВО!!!
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });
//!===================================================== Example ( keydown , keyup) ========================================================
//? Відслідковування натискання і відтискання клавіши.
// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// console.log(clearLogBtn)

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }
//!======================================================== Example ( preventDefault && submit ) =====================================
//? submit - перезавантажує сторінку для того ми і використовуємо preventDefault() щоб скасувати цю дію.
//? На form пряцює ТІЛЬКИ подія "submit"!!!
// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;   //? Властивість elements містить посилання на всі властивості form що мають names(elements.login)
//   const password = form.elements.password.value; //? Тут приклад є elements.password. ВАЖЛИВО!!!

//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();            //? reset() - для очищення полів input що знаходяться в form після натискання і відправлення їх до консолі.
// }
//!===================================================== Example ( select ) ==============================================================
//?Функція для призначення тексту (або данних) з select до інших текстових тегів(в данному випадку!) або ж іншиї тегів не повязаних з ним.
//? "change" - існує лише для роботи з input!!!
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput);

// function setOutput(event) {
//   //?В функції ми добираємось до value - змінна в select в options. selectedIndex - її інденс.
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text; //?Ця змінна бере текс з option який знаходиться в данній value за її індексом.

//   // console.log(selectedOptionValue);
//   // console.log(selectedOptionIndex);
//   // console.log(selectedOptionText);
//   textOutput.textContent = selectedOptionText;        //?Тут до параграфів призначається text & value!!!
//   valueOutput.textContent = selectedOptionValue;
// }
//!=============================================== Example ( addEventListener && "input" ) =================================================
//? event "input" для зміни тексту в output в данному прикладі це класс тегу span. 
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });
//!=============================================== Example ( "focus" && "blur" ) ==========================================================
//?Концепція focus та blur пов'язана з data-action="set" & "remove".
// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// //?Команди focus та blur .
// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// //? Зміни в input які виконуються при focus та blur.
// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });
//!==================================== Example ( addEventListener() & preventDefault & options || onCapture (true or false)) ================
//? options || onCapture - третя властивість в addEventListener() - там завжди булеві значення.
// const btn = document.getElementById("btn");
// const link = document.getElementById("link");

// btn.addEventListener("click", () => {     //?Два альтернативних способи.
//   console.log("Hello!");
// });

// btn.addEventListener("click", clickButton);

// function clickButton() {
//   console.log("Hello!!!");
// }

// link.addEventListener("click", clickLink, {
//   capture: true,    //? true - спливаюча подія. false - подія на занурення.
//   once: true,       //? true - подія відбудеться тільки один раз. false - багато разів. ЗА ЗАМОВЧЕННЯМ ЗАВЖДИ FALSE.
//   passive: true,    //? true - заборона використання preventDefault(). false - дозвіл на використання. Також за замовченням false.
// });

// function clickLink(event) {//?Робимо так щоб при натисканні на посилання ми не переходили по ньому.event пишему тільки коли він нам потрібен.
//   event.preventDefault();
//   console.log(event);           //?Виведення в консоль інформацію про event.
// }
//!=============================================== Example ( window.addEventListener() ) ===============================================
//? key: - в залежності від розкладки(мови якою вводять)  && code: - в залежності від розкладки! && keycode: - Юнікод(але тільки з великої)
// window.addEventListener("keydown", clickWindow);  //?Використовуємо тільки "keydown" - тому що спрацьовує швидше!!!

// function clickWindow(event) {
//   console.log(event);
// }
//!============================ Example (form(preventDefault() & "submit" || "input" || "change") & target) ===============================
// const form = document.getElementById("form");

//?Робота з form. Та звертання до її елементів.
// form.addEventListener("submit", clickSubmit);  //? "submit" - перезавантажує сторінку для того і використовуємо preventDefault()

// function clickSubmit(event) {
//   event.preventDefault();
//   console.dir(form);
//   const firstName = form.elements.firstName.value;
//   const lastNames = form.elements.lastName.value;
//   const age = form.elements.age.value;
//   console.log(`Hello ${firstName} ${lastNames} you was born ${2023 - age}.`);
//   form.reset();
// }

//?Через form робимо обробник події на input. Спрацьовує на кожну зміну самого input.
// form.elements.firstName.addEventListener("input", onInput);

// function onInput(eve) {
//   console.log(eve.target.value);    //?Таким чином виводимо в консоль значення при кожній його змінні (додаванні чи видаленні!)
// }

// form.elements.firstName.addEventListener("change", onChange);   //?"change" - спрацьовує коли ми розфокусовуємось від input.

// function onChange(eve) {
//   console.log(eve.target.value);
// }
//!=============================================== Example 
//?
