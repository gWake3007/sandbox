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
//!===================================================== Example =========================================================
//?Синхронний та асинхронний код.
//?Асинхронний код ділиться на: Мікрозадачі та Макрозадачі.Спочатку виконуються Мікрозадачі. А тільки після Макрозадачі!
// console.log("A");  //?1. Синхронний код(Завжди виконується першим!)

// setTimeout(() => console.log("B"), 0);  //?4.Макрозадача!

// Promise.resolve("C").then((value) => console.log(value));   //?3.Мікрозадача!

// console.log("D");  //?2.
//?Приклади мікрозадач: Promise, Observer, addEventListener.
//?Приклади макрозадач: setTimeOut, setInterval, setImmediate, requestAnimationFrame.
//!=================================================== Example ==============================================================
//?Спочатку синхронний код, потім асинхронний:мікрозадачі(проміси),перший успішний а другим не успішний,далі макрозадачі.
// console.log("A"); //?1.

// setTimeout(() => console.log("B"), 0); //?5.

// Promise.reject("C")                       //?4.Тому що проміс D який нижче успішний.Тому він попереду.
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err));

// Promise.resolve("D").then((value) => console.log(value));     //?3.

// setTimeout(() => console.log("E"), 0);      //?6.

// console.log("F");      //?2.
//!=============================================== Example ( Promise ) ===================================================
//?Приклад звичайного промусу.
// const promise = new Promise((res, rej) => {
//   const rand = Math.random();
//   setTimeout(() => {
//     console.log(rand);
//     if (rand > 0.5) {
//       res("Виконано!");
//     } else {
//       rej("Відхилено!");
//     }
//   }, 1000);
// });

// console.log(promise); //?Завжди буде статус pending.Так як проміс не оброблений.
// //?Обробка промісу.
// promise
//   .then((res) => console.log("then: ", res))
//   .catch((err) => console.log("catch: ", err))
//   .finally(() => console.log("FINALLY!"));  //?Потрібен для того щоб по завершенню якоїсь дії зробити ще одну дії.
//?Наприклад: очищення полів тощо.
//!============================================ Example ( event loop ) =====================================================
//?Цикл подій.Перевіряємо код на сайті loupe для того щоб зрозуміти послідовність дій.Що за чим іде.
//?Сайт loupe - працює корректно коли пишеш код в ручну а не копіюєш!!!
// console.log("Start");

// function foo() {
//   boo();
//   console.log("foo");
// }

// function boo() {
//   console.log("boo");
// }

// console.log("End");

// foo();
//?Інший приклад з setTimeout().
// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 1500);
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();
//!=================================================== ( Task game ) ======================================================
//?Ігровий автомат)
const refs = {
  button: document.querySelector(".js-start"),
  container: document.querySelector(".js-container"),
};

refs.button.addEventListener("click", startGame);

function startGame(event) {
  const promise = [...refs.container.children].map(() => createPromise()); //?Робимо масив з item Div та через map створюємо
  //?масив промісів. Функцію опишемо окремо!
  Promise.allSettled(promise).then((items) => {
    //?Весь функціонал в одному then робимо.

    const isWinner = //?Виграшна комбанація всі однакові смайлики.Або чортики або з доларами.
      items.every((item) => item.status === "fulfilled") ||
      items.every((item) => item.status === "rejected");

    items.forEach((item, index) => {
      refs.container.children[index].textContent = ""; //?Очищаємо поля щоб при новому натисканні спочатку все почати.
      setTimeout(() => {
        refs.container.children[index].textContent = item.value || item.reason; //?В дітей контейнера(тобто в div) в їх
        //?контент записуємо або item.value - значення промісу fulfilled або item.reason - значення промісу rejected.

        if (index === items.length - 1) {
          //?Коли інденс дорівнює довжині всіх item тобто цикл дійшов до кінця.
          const instance = basicLightbox.create(    //?Використання бібліотеки для відкриття модалки з результатом.
            `<h1>${isWinner ? "Winner!" : "Lose!"}</h1>`
          );
          instance.show();   //?Команда для показу результату!
        }
      }, 1000 * (index + 1)); //?Щоб смайлик в першому квадраті з'явився через секунду а всі інші по черзі теж через секунду.
    });
  });
  //?Promise.allSettled - приймає масив промісів та повертає
  //?масив їх результатів.value - fulfilled || reason - reject.
}

function createPromise() {
  return new Promise((res, rej) => {
    const rand = Math.random();
    if (rand > 0.5) {
      res("🤑");
    } else {
      rej("😈");
    }
  });
}
