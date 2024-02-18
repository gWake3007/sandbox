//!============================= Example ( Promise (resolve, rejected) & Method .then() ) ==================================
//?Приклад промісу з умовою. З таймером на 2 секунди.Але без .then() тому не виводиться в консоль!
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });
//?Той же самий приклад промісу але вже з .then() тобто з показуванням результату позитивного чи негативного.
//?В залежності від змінної isSuccess. true або false.
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function"); //?При змінній true виводиться у консоль.
//     } else {
//       reject("Error! Error passed to reject function");   //?При змінній false виводиться у консоль.
//     }
//   }, 2000);
// });

// console.log("Before promise.then()");

// promise.then(
//   value => {
//     console.log("onResolve call inside promise.then()");  //?При змінній true виводиться у консоль.
//     console.log(value);
//   },
//   error => {
//     console.log("onReject call inside promise.then()");   //?При змінній false виводиться у консоль.
//     console.log(error);
//   }
// );

// console.log("After promise.then()");
//!========================================= Example ( Promise & Method catch() ) ==========================================
//?В промусах для стану reject(помилки) використовується метод .catch() для відловлювання помилок!
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);     //?Вивід в консоль помилки в стані reject.
//   });
//!========================================= Example ( Promise & Method finaly() ) ========================================
//?finaly() - корисний якщо треба уникнути дублювання коду.Тобто щоб код з промісу і then() не виконувався двічі.
//?Але тут не можливо визначити обіцянка буде виконана чи відхиленна.Код буде виконаний у любому разі.
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => console.log(value))
//   .catch(error => console.log(error))
//   .finally(() => console.log("Promise settled"));
//!========================================= Example ( Chain of promises ) ==============================================
//?Ланцюжок промісів.
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5);
//     }, 2000);
//   });

//   promise
//     .then(value => {
//       console.log(value); // 5
//       return value * 2;
//     })
//     .then(value => {
//       console.log(value); // 10
//       return value * 3;
//     })
//     .then(value => {
//       console.log(value); // 30
//     })
//     .catch(error => {       //?Обробка помилки в кінці тому що при помилці в будь якій частині .catch() її обробить.
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("Final task");
//     });
//!============================================ Example ( Promiscification ) ==========================================
//?Промісифікація - перетворення функції з колбеками щоб вона не повертала колбеки а повертала проміс.
//?Розгорнутий тип функції з промісами.
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// const onFetchSuccess = (user) => {
//   console.log(user);
// };

// const onFetchError = (error) => {
//   console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);
//?Більш коротший і правильніший спосіб написання промісів! Результат той же самий.
// const fetchUserFromServer = username => {
//     return new Promise((resolve, reject) => {
//       console.log(`Fetching data for ${username}`);
  
//       setTimeout(() => {
//         const isSuccess = true;
  
//         if (isSuccess) {
//           resolve("success value");
//         } else {
//           reject("error");
//         }
//       }, 2000);
//     });
//   };
  
//   fetchUserFromServer("Mango")
//     .then(user => console.log(user))
//     .catch(error => console.error(error));
//!============================================= Example ( Promise.all() ) =============================================
//?Promise.all() - приймає масив із промісів і повертає успішний результат(resolved) у разі якщо всі проміси були успішні.
//?Та переходить у стан rejected якщо хоча б один із промісів не виконаний.
// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(text), delay);
//     });
//   };
  
//   const promiseA = makePromise("promiseA value", 1000);
//   const promiseB = makePromise("promiseB value", 3000);
  
//   Promise.all([promiseA, promiseB])
//     .then(value => console.log(value)) //?["promiseA value", "promiseB value"] виводятся в консоль через 3 секунди.
//     .catch(error => console.log(error));
//!======================================== Example ( Promise.race() ) =================================================
//?Promise.race() - Виводить стан resolved(виконаний) чи rejected(не виконаний) коли виконаний перший проміс з масиву.
// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(text), delay);
//     });
//   };
  
//   const promiseA = makePromise("promiseA value", 1000);  //?Буде викликаний цей проміс так як він швидше.
//   const promiseB = makePromise("promiseB value", 3000);
  
//   Promise.race([promiseA, promiseB])
//     .then(value => console.log(value)) //? "promiseA value"
//     .catch(error => console.log(error));
//!==================================== Example ( Promise.resole() && Promise.reject() ) ==================================
//?Promise.resole() або Promise.reject() - статичні методи промісів що одразу успішно виконуються чи відхиляються.
//?В яких не можна вказати delay(затримку)!
// new Promise(resolve => resolve("success value")).then(value =>
//     console.log(value)
//   );
  
//   Promise.resolve("success value").then(value => console.log(value));
  
//   new Promise((resolve, reject) => reject("error")).catch(error =>
//     console.error(error)
//   );
  
//   Promise.reject("error").catch(error => console.error(error));
//?Ці методи потрібні коли вже є початкове значення і треба побудувати ланцюжок промісів!
// const makeGreeting = guestName => {
//     if (guestName === "" || guestName === undefined) {
//       return {
//         success: false,
//         message: "Guest name must not be empty",
//       };
//     }
  
//     return {
//       success: true,
//       message: `Welcome ${guestName}`,
//     };
//   };
  
//   const result = makeGreeting("Mango");
  
//   if (result.success) {
//     console.log(result.message);
//   } else {
//     console.error(result.message);
//   }
//?Тут відпадає потреба перевіряти результат у зовнішньому коді.
// const makeGreeting = (guestName, onSuccess, onError) => {
//     if (guestName === "" || guestName === undefined) {
//       return onError("Guest name must not be empty");
//     }
//     onSuccess(`Welcome ${guestName}`);
//   };
  
//   makeGreeting(
//     "Mango",
//     greeting => console.log(greeting),
//     error => console.error(error)
//   );
//?Повне усунення від залежності від зовнішнього коду.
// const makeGreeting = guestName => {
//     if (guestName === "" || guestName === undefined) {
//       return Promise.reject("Guest name must not be empty");
//     }
  
//     Promise.resolve(`Welcome ${guestName}`);
//   };
  
//   makeGreeting("Mango")
//     .then(greeting => console.log(greeting))
//     .catch(error => console.error(error));
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
