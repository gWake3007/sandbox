//!================================================= First example ===============================================================
//? Event "scroll" - спрацьовує при скролингу мишкою.
// const output = document.querySelector(".output");
// let scrollEventCounter = 0;

// document.addEventListener("scroll", () => {   //?Event на document тому що на сторінці скролинг відбувається!
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });
//!================================================= Second example ============================================================
//? Використання функцій бібліотеки Lodash!
// const result = _.add(2, 3); //?summ result
// console.log(result);

// const resultSlice = _.drop([1,2,3,4,5], 2); //? _.drop(...) - приклад методу slice в бібліотеці Lodash.
// console.log(resultSlice);

// const resultJoin = _.join(["a","b","c"], "*");
// console.log(resultJoin);

//? pull example - прибирає всі не потрібні значення з масиву.
// const arr = ["a","b","c","a","a","b","c"];
// console.log(arr);

// const resultPullArr = _.pull(arr, "a", "b");
// console.log(arr); //? _.pull(...) - мутує масив прибираючи зайві аргументи що ми вказали вище.
// console.log(resultPullArr); //?В результаті також буде вже мутований масив!

// const array = [1,2,3,4,5,6,7,1,2,3];
// console.log(array);

// const resultPullArray = _.pull(array, 1,2,3);
// console.log(array);  //? Обидва результати однакові як і в попередньому прикладі!
// console.log(resultPullArray);
//!=============================================== Third example ===============================================================
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(     //?_.throttle - потрібен для затримки спрацьовування функції(евенту).Щоб не спрацьовував надто часто.
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 100)   //? не частіше чим раз в 100 мілісекунд!
// );
//!============================================ Fourth example ================================================================
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const debouncedOutput = document.querySelector(".output.debounced");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   debounced: 0
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// document.addEventListener(  //? _.debounce - спрацьовую якщо перерва між евентом була у вказаному параметрі!
//   "scroll",
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)  //? Якщо в данному випадку "scroll" - зупиниться на 300мс(0,3 секунди) - то буде змінене значення на 1 в данному випадку.
// );
//!=============================================== Fifth example ===============================================================
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const trailingOutput = document.querySelector(".output.trailing");
// const leadingOutput = document.querySelector(".output.leading");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   trailing: 0,
//   leading: 0
// };

// // Trailing debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.trailing += 1;
//     trailingOutput.textContent = eventCounter.trailing;
//   }, 300)
// );

// // Leading debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       eventCounter.leading += 1;
//       leadingOutput.textContent = eventCounter.leading;
//     },
//     300,
//     { trailing: false, leading: true }    //?Example trailing & leading => debounce. Спрацьовування спочатку скролингу чи вкінці.
//   )
// );

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );
//!===================================================== 
