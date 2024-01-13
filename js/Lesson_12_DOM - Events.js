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
//!===================================================== Example
//?
const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}
