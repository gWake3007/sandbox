// //  Example (if , else branch and Ternary Operator (Тернальний оператор -коротка функція з поверненням двух результатів true або false))
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

// //  ================================= Example (Cycle for)===================================================
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

// // ==================================== Example ( if else branches) ==========================
// const CORRECT_ANSWER = "ECMAScript";

// const userAndwer = prompt("Яка офіційна назва JavaScript?");

// if(CORRECT_ANSWER === userAndwer){
//     alert("Правильно");
// } else{
//     alert("Не знаєте? ECMASript!");
// }

// if (CORRECT_ANSWER.toLocaleLowerCase() === userAndwer.toLocaleLowerCase()) {
//                                      //Итак, разница между ними заключается в учете локальных настроек и специфических
//                                      //символов для языка при использовании .toLocaleLowerCase(), в то время как .toLowerCase()
//                                      //просто выполняет преобразование в нижний регистр с учетом основного алфавита JavaScript.
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

const a = 90;
const b = 1;

if(a > 100 && b > 100){
    if(a > b){
        console.log(a);
    }else{
        console.log(b);
    }
} else {
    console.log(b + 512);
}