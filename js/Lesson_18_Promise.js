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
//?Promise.resole() - 
//?Promise.reject() - 
