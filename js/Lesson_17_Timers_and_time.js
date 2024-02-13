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
//!=============================================== Example ( Create current date ) ========================================
//?Дату можна встановлювати в ручну.
// const teamMeetingDate = new Date("March 16, 2030");
// console.log(teamMeetingDate);

// const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
// console.log(preciseTeamMeetingDate);

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date);
//!======================================= Example ( Methods Date getters & setters ) =====================================
//?Методи для роботи з датами. Геттери для читання та Сеттери для записування.
//?Адаптований час дол часового поясу користувача.
// const date = new Date();
// console.log("Date: ", date);

// // Повертає день місяця від 1 до 31
// console.log("getDate(): ", date.getDate());

// // Повертає день тижня від 0 до 6
// console.log("getDay(): ", date.getDay());

// // Повертає місяць від 0 до 11
// console.log("getMonth(): ", date.getMonth());

// // Повертає рік з 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Повертає години
// console.log("getHours(): ", date.getHours());

// // Повертає хвилини
// console.log("getMinutes(): ", date.getMinutes());

// // Повертає секунди
// console.log("getSeconds(): ", date.getSeconds());

// // Повертає мілісекунди
// console.log("getMilliseconds(): ", date.getMilliseconds());
//?Геттери в форматі UTC(Coordinated Universal Time).Не адаптований час до часового поясу користувача.
// const date = new Date();
// console.log("Date: ", date);

// // Повертає день місяця від 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// // Повертає день тижня від 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// // Повертає місяць від 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// // Повертає рік з 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// // Повертає години
// console.log("getUTCHours(): ", date.getUTCHours());

// // Повертає хвилини
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// // Повертає секунди
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// // Повертає мілісекунди
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());
//?Всі ті ж самі методи що і вище але починаються із set.
// const date = new Date("March 16, 2030 14:25:00");

// date.setMinutes(50);

// date.setFullYear(2040, 4, 8);
//!=================================== Example ( Methods toString() & toDateString() & toTimeString() ) ====================
//?Приклади методів для переводу часу або тільки дати в рядок. Або ж повної дати.
const date = new Date("March 16, 2030 14:25:00");

date.toString();

date.toTimeString();

date.toLocaleTimeString();

date.toUTCString();

date.toDateString();

date.toISOString();

date.toLocaleString();

date.getTime();
//!====================================== Example 
//?
