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
//? Приклад в якій концепції працює слухач з концепцією this.
const mango = {
    username: "Mango",
    showUsername() {
      console.log(this);
      console.log(`My username is: ${this.username}`);
    },
  };
  
  const btn = document.querySelector(".js-btn");
  
  // ✅ Працює
  mango.showUsername();
  
  // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
  btn.addEventListener("click", mango.showUsername); // не працює
  
  // ✅ Не забувайте прив'язувати контекст методів об'єкта
  btn.addEventListener("click", mango.showUsername.bind(mango));