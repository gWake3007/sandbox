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
  //!========================================= Example 
  //?
