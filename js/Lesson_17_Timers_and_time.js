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
// const date = new Date("March 16, 2030 14:25:00");

// console.log(date.toString());

// console.log(date.toTimeString());

// console.log(date.toLocaleTimeString());

// console.log(date.toUTCString());

// console.log(date.toDateString());

// console.log(date.toISOString());

// console.log(date.toLocaleString());

// console.log(date.getTime());
//!============================ Example ( setInterval() && clearInterval() && setTimeout() ) ===============================
//?setInterval() && clearInterval() && setTimeout()- приклад як ці методи працюють разом!
//?В данному прикладі в консолі будуть два виводи Tick! Тому що інтервал спрацьовує кожні 2 секунди.
//?А тайм аут спрацьовує через 5 секунд та видаляє інтервал. Тому йому вдається спрацьовати 2 рази.
// const timerID = setInterval(() => {
//   console.log("Tick!");
// }, 2000);

// setTimeout(() => {
//   clearInterval(timerID);
// }, 5000);
//!===================================== Example ( Cycle for && setTimeout() ) ===========================================
//?Приклад асинхронного коду в циклі for. Вивід буде 1 > 2 > 3.
// for(let i = 3; i > 0; i--) {
//   const delay = i * 1000;
//   setTimeout(() => console.log(i), delay);
// }
//!================================= Example ( setTimeout() && clearTimeout() ) =========================================
//?setTimeout() - Функція яка спрацьовує через 2 секунди.
//?clearTimeout() - Очещення цієї функції.
// const id = setTimeout(() => {
//   console.log("TimeIsOver!");
// }, 2000);

// clearTimeout(id);   //?Якщо ця команда не закоментована то і функція вище не спрацьовує!
//!====================================== Example ( setTimeout() parametrs ) =============================================
//?setTimeout() - ця функція може приймати не тільки параметр часу через який треба спрацювати а і інші параметри.
// const id = setTimeout(
//   (name, country) => {
//     console.log(`Hello my name is ${name}, I'm from ${country}!`);
//   },
//   3000,
//   "Sergey",
//   "Ukraine"
// );
//?Може приймати будь яку кількість параметрів.
//!================================= Example ( setInterval() && clearInterval() ) ========================================
//?setInterval() - Спрацьовує через вказаний інтервал часу!
//?clearInterval() - Очещує функцію інтервал з данним аргументом.
// const id = setInterval(() => {
//   console.log("setInterval");
// }, 2000);

// clearInterval(id); //?Як і в попередньому прикладі якщо ця функція розкоментована то інтервал не працює!
//!========================== Example ( setInterval() && clearInterval() && parametrs ) =================================
//?setInterval() - Так само як і випадку вище в Інтервалі теж є параметри.
//?І також можна видалити інтервал.(При бажанні через якийсь проміжок часу).
// const id = setInterval(
//   (name, country) => {
//     console.log(`Hello my name is ${name}, I'm from ${country}!`);
//   },
//   3000,
//   "Sergey",
//   "Ukraine"
// );

// clearInterval(id);
//!==================================== Example ( An example with advertising ) =========================================
//?Приклад з рекламою.
// const refs = {
//   content: document.querySelector(".js-content"),
//   text: document.querySelector(".js-text"),
// };

// let count = 10;
// refs.text.textContent = `Залишилось ${count} секунд!`;  //?Щоб відлік почало показувати з 10 секунд!
// const id = setInterval(() => {
//   count -= 1;
//   refs.text.textContent = `Залишилось ${count} секунд!`;  //?Тут працює антервал який показує відлік до зникання реклами.
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
//   refs.content.style.display = "none";
// }, 1000 * count);
//!=========================================== Example ( Class Date ) ==================================================
//?Клас дата - для створення дати.
// const currentDate = new Date();
// const targetDate = new Date("Sep 05 2024");

// console.log(targetDate - currentDate); //?В кончолі буде результат в мілісекундах.Тому що JS перетворює цей класс в число.
//!=================================================== Task clock ========================================================
//?Задача (Створення годинника механічного і цифрового з поточною датою)
const refs = {
  day: document.querySelector(".date-day"),
  date: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  clock: document.querySelector(".digital-clock"),
  seconds: document.querySelector(".clock-seconds_arrow"),
  minutes: document.querySelector(".clock-minutes_arrow"),
  hours: document.querySelector(".clock-hours_arrow"),
};

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
];

const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

setInterval(() => {
  const currentDate = new Date();                       //?Створюємо змінну з поточною датою.
  const day = currentDate.getDay();                     //?День тижня(від 0 до 6).
  const date = currentDate.getDate();                   //?День місяця(Число від 1 до 31).
  const month = currentDate.getMonth();                 //?Місяць(від 0 до 11).
  const year = currentDate.getFullYear();               //?Поточний рік.
  const time = currentDate.toLocaleTimeString("uk-UA"); //?Поточний час в любій місцевості по коду(В форматі рядка).

  refs.day.textContent = arrDay[day];
  refs.date.textContent = date;
  refs.month.textContent = namesOfMonth[month];
  refs.year.textContent = year;
  refs.clock.textContent = `Поточний час: ${time}`;

  const hours = currentDate.getHours();                 //?Поточна година.
  const minutes = currentDate.getMinutes();             //?Поточна хвилина.
  const seconds = currentDate.getSeconds();             //?Поточна секунда.

  const secondsDeg = (360/60) * seconds;                        //?Вираховуємо стрілочку секунд.
  const minutesDeg = (360/60) * minutes;                        //?Вираховуємо стрілочку хвилин.
  const hoursDeg = (360/30) * hours + (360 / 12 / 60) * minutes;//?Вираховуємо стрілочку годин(корректно в залежності від хв)

  refs.seconds.style.transform = `rotate(${secondsDeg}deg)`;  //?В стилі додаємо зміни.
  refs.minutes.style.transform = `rotate(${minutesDeg}deg)`;
  refs.hours.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);

