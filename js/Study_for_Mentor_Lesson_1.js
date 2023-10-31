//!=============================================== First Task (If else and prompt) ======================================================
// let question = prompt("Введіть будь ласка ваш емейл");
// console.log(question);

// if(question !== null){
//     if(question.includes("@") && question.includes(".")){  //Перевірка чи в полі prompt введенні знаки @ та .
//         console.log("Перевірка успішна!");
//     }else {
//         console.log("Перевірка не успішна");
//     }
// }

//!===================================== Second Task (String Method and if else) =========================================
// const firstString = "Vestibulum facilisis purus nec";
// const secondString = "Nunc sed turpis a felis in nunc fringilla";
// console.log(firstString);
// console.log(secondString);

// const changeFirstString = firstString.slice(0, 25);
// console.log(changeFirstString);
// console.log(changeFirstString + "...");

// const changeSecondString = secondString.slice(0, 25);    //Залишаємо 25 перших знаків.
// console.log(changeSecondString);
// console.log(changeSecondString + "...");       //До рядка додаємо в кінці три крапки.

// if(firstString.length > 25) {
//     console.log(firstString.slice(0, 25) + "..."); //Умова при якій якщо рядок довший за 25 символів то береться 25 символів і три крапки
// } else {
//     console.log(firstString);
// }

//!=================================== Third Task (Methods .toLowerCase and .includes ) ==================================
// function checkString(string) {            //Звичайна функція.
//   string = string.toLowerCase();
//   if (string.includes("spam") || string.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkStringShortCode(string) {     //Коротка функція.
//     string = string.toLowerCase();                       //Ставимо до нижнього регістру для порівняння.
//     let isSpam = string.includes("spam") || string.includes("sale"); //Порівнюємо. Якщо в строці є spam or sale то true якщо ні то false.
//     return isSpam;
//   }

// console.log(checkString("saedsdfvs"));
// console.log(checkStringShortCode("sale"));

//!============================================ Fourth Task ( Cycle While ) =============================
// function calcDays(depth) {
//     const speedDay = 7;
//     const speedNight = 2;
//     let totalDistance = 0;
//     let days = 0;
//     while(totalDistance < depth){     //Цикл while працює до тих пір поки не виконаються умова. По виконанню виходить з нього.
//         totalDistance += speedDay;
//         days += 1;
//         if(totalDistance < depth){
//             totalDistance -= speedNight;
//         }
//     }
//     console.log(days);
// }

// calcDays(42);
// calcDays(17);
// calcDays(18);

//!========================================= Fifth Task ( Swith Case ) ======================================================
// let trafficLight = prompt("Введіть будь ласка колір світлофора.");

// switch(trafficLight) {           //swith case тільки порівнює строгим порівнянням числа с числами і строки з строками!!!
//     case "green": console.log("GO!");
//     break;
//     case "yellow": console.log("READY!");
//     break;
//     case "red": console.log("STOP!");
//     break;
//     default: console.log("BE CAREFUL!");
// }

//!====================================== Sixth Task ( Cycle for ) ===============================
const min = 0;
const max = 50;
let total = 0;

function caclNumbers(min, max) {
  for (let i = min; i <= max; i += 1) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}

console.log(caclNumbers(min, max));
