//!======================================= Example (synchronous & asynchronous code) =======================================
// //?Синхронне виконання коду(послідовне)
// console.log("First log");
// console.log("Second log");
// console.log("Third log");
// //?Асинхронне виконання коду(змішане або тоді коли программа завершить данний код(не послідовне))
// console.log("First log");
// setTimeout(() => {
//     console.log("Second log");
// }, 2000);
// console.log("Third log");
//!=========================================== Example ( setTimeout() - function ) ==========================================
//?setTimeout() - Функція для запланованного запуску функції через деякий час!
// const button = document.querySelector("button");

// const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log("I love async JS!");   //? Функція яка викликається через 2 секунди після натискання!
//   }, 2000);

//   console.log(timerId);   //?timerId - це номер кліку
// };

// button.addEventListener("click", onClick);
//!============================================= Example ( clearTimeout() ) =================================================
//? clearTimeout() - команда для скасування відкладеного виклику функції setTimeout().
// const greet = () => {
//     console.log("Hello!");
//   };
  
//   const timerId = setTimeout(greet, 3000);

//   timerId;            //?Тут функція викличется через 3 секунди!
  
//   clearTimeout(timerId);   //?В данному випадку відкладена функція не викличется.
  //!===================================== Example ( setInterval() & clearInterval() ) ======================================
  //?setInterval() - інтервал з яким виконується функція(багато разів).clearInterval() - зупиняємо виконання інтервалу.
//   const startBtn = document.querySelector(".js-start");
//   const stopBtn = document.querySelector(".js-stop");
//   let timerId = null;
  
//   startBtn.addEventListener("click", () => {
//     timerId = setInterval(() => {
//       console.log(`I love async JS!  ${Math.random()}`); //?Запуск інтервального в 1 секунду консоля функції.
//     }, 1000);
//   });
  
  
//   stopBtn.addEventListener("click", () => {
//     clearInterval(timerId);
//     console.log(`Interval with id ${timerId} has stopped!`);   //?Зупинення цього консолю і вивід тексту про це!
//   });
  //!======================================== Example ( Method Date ) =================================================
  //?new Date() - встроєна функція створення класу дати в рядковому форматі(поточний час і дата на момент створення)
//   const date = new Date();

//   console.log(date);
  
//   console.log(date.toString());
//!=========================================== Example ( Method getTime() ) =========================================== 
//?getTime() - повертає число в мілісекундах від 1970 року!
// console.log(new Date(0));  //?Дата з 1970 року.

// console.log(new Date(15000));   //?Дата з 1970 року плюс 15 секунд.

// const date = new Date();
// console.log(date.getTime());   //?Кількість мілісекунд від 1970 року.
//!=============================================== Example 
//?
