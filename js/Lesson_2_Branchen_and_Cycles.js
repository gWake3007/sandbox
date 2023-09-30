//! //  Example (if , else branch and Ternary Operator (Тернальний оператор -коротка функція з поверненням двух результатів true або false))
// let message = "";

// let userStatus = false;

// if(userStatus){
//     message = "Admin is user!";
// } else {
//     message = "Admin is not user!";
// }

// if(userStatus === true) {
//     message = "Admin is user!";
// } else {
//     message = "Admin is not user!";
// }

// message = userStatus ? "Admin is user!" : "Admin is not user!";

// message = `Admin is ${userStatus ? "" : "not"} user!`;

// console.log(message);

//! //  ================================= Example (Cycle for)===================================================
// for(let i = 0; i <= 10; i++){                  //i++  спочатку повертає значення а потім збільшує
//     console.log(i);
// }

// for(let i = 0; i <= 10; i += 1){
//     console.log(i);
// }

// for(let i = 0; i <= 10; ++i){                 // ++i  спочатку збільшує а потім повертає значення
//     console.log(i);
// }

// for(let i = 1; i <= 10; i += 1){                     // Цикл в циклі
//     for(let k = 1; k <= 5; k +=1){
//         console.log(`i: ${i} | k ${k}`);
//     }
// }

// for(let i = 1; i <= 10; i +=1){
//     if(i % 2 === 0){                              //  Умова всі числа що діляться на 2 без остачі
//         console.log(i);
//     }
// }

// for(let i = 1; i <= 10; i +=1) {
//     if(i % 2 === 0){
//         continue;                             // Оператор який переводить цикл на наступню ітерацію як тільки ми його зустрічаєм
//     }
//     console.log(i);
// }

//! // ==================================== Example ( if else branches) ==========================
// const CORRECT_ANSWER = "ECMAScript";

// const userAndwer = prompt("Яка офіційна назва JavaScript?");

// if(CORRECT_ANSWER === userAndwer){
//     alert("Правильно");
// } else{
//     alert("Не знаєте? ECMASript!");
// }

// if (CORRECT_ANSWER.toLocaleLowerCase() === userAndwer.toLocaleLowerCase()) {
//!                                      //Итак, разница между ними заключается в учете локальных настроек и специфических
//!                                      //символов для языка при использовании .toLocaleLowerCase(), в то время как .toLowerCase()
//!                                      //просто выполняет преобразование в нижний регистр с учетом основного алфавита JavaScript.
//   alert("Правильно");
// } else {
//   alert("Не знаєте? ECMASript!");
// }

// const positiveNumber = 1;
// const negativeNumber = -1;
// const answerNumber = Number(prompt("Введіть сюди свій номер!"));

// if(positiveNumber <= answerNumber) {
//     alert("Позитивне число!");
// } else if(negativeNumber >= answerNumber) {
//     alert("Негативне число");
// } else {
//     alert("Нульове значення");
// }

// if(1 <= answerNumber) {
//     alert("Позитивне число!");
// } else if(-1 >= answerNumber) {
//     alert("Негативне число");
// } else if(0 === answerNumber){
//     alert("Нульове значення");
// } else {
//     alert("Це не число!");
// }

// if (Number.isNaN(answerNumber)) {
//   alert("Ви ввели не число");
// } else {
//   if (1 <= answerNumber) {
//     alert("Позитивне число!");
//   } else if (-1 >= answerNumber) {
//     alert("Негативне число");
//   } else {
//     alert("Нульове значення");
//   }
// }

//! // ======================= New example!================

// const a = 100;
// const b = 140;

// if(a > 100 && b > 100){
//     if(a > b){
//         console.log(a);
//     }else{
//         console.log(b);
//     }
// } else {
//     console.log(b + 512);
// }

// if(a > 100 && b > 100) {
//     console.log(Math.max(a, b));
// } else {
//     console.log(b + 512);
// }

// const result = a > 100 && b > 100 ? Math.max(a, b) : b + 512;         //Тернарний оператор

// console.log(result);

//! //================================ Example (switch case method) ======================
//! //============================= Refactoring function ===========================
// const daysUntilDeadlibe = 0;

// if(daysUntilDeadlibe === 0){
//     console.log("Сьогодні.");
// } else if (daysUntilDeadlibe === 1){
//     console.log("Завтра.");
// }else if (daysUntilDeadlibe === 2){
//     console.log("Післязавтра.");
// } else {
//     console.log("Дата у майбутньому.");
// }

// switch(daysUntilDeadlibe){
//     case 0: console.log("Сьогодні.");
//     break;
//     case 1: console.log("Завтра.");
//     break;
//     case 2: console.log("Післязавтра.");
//     break;
//     default: console.log("Дата у майбутньому.");
// }

//! //================================== Example (cycle for)=====================
// const max = 100;
// const min = 20;

// for(let i = min; i <= max; i += 5){                     // Тут тільки якщо мін і макс кратне 5 буде працювати
//     console.log(i);
// }

// for(let i = min; i <= max; i +=1){                       // Виведення числа кратного 5 від мінімального до максимального
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// for(let i = max; i >= min; i -=1){                       // Виведення числа кратного 5 від  максимального до мінімального
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// //!==================================Example scripts=================================

// const answerAdmin = prompt("Введіть своє ім'я");
// console.log("🚀 ~ file: Lesson_2_Branchen_and_Cycles.js:182 ~ answerAdmin:", answerAdmin)
// const adminName = "AdminSerui";

// if(answerAdmin === adminName){
//     const adminPass = prompt("Введіть свій пароль");      //Admin name
//     if(adminPass === "I am admin"){
//         console.log("Пароль вірний");             // Password
//     } else{
//         console.log("Пароль не вірний");    //Wrong password
//     }
// } else if (answerAdmin === ""){            // Canceled and nothing text
//     console.log("Скасовано!");
// } else {
//     console.log("Я вас не знаю");         //Wrong Login
// }



