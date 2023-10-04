// //! ========================= Example ( Arrays and Method arrays) ===================
// const genres = ["Jazz", "Blues"];
// genres.push("Rock N Roll");         //Додавання елемента в кінець масива

// console.log(genres);
// console.log(genres[0]);             //Виведення першого елемента масива
// console.log(genres[genres.length-1]);    // Виведення останнього елемента масиву в незалежності від того скільки елементів він має
// console.log(genres.shift());      //Вирізання першого елемента масиву 
// console.log(genres.unshift("Country", "Reggae"));   //Додавання елемента(тів) в початок масиву

// const values = "8 10";
// const arr = values.split(" ");     //Метод розбивающий елементи масиву на окремі
// console.log(values);
// console.log(arr);
// const a = Number(arr[0]);              // Але для кращого розуміння ми їх перетворюємо в Number (числа)
// const b = arr[1];                    // Білий колір строка ( String ) а синій число ( Number )
// console.log(a);
// console.log(b);
// console.log(a * b);           // У всіх випадках окрім додавання JS сам перетворюватиме їх в Number
// console.log(a + b);          // Тут строка ( String ) позначенна білим кольором тому що b це також строка ( А в додаванні JS не змінює її на число)

// const str = "1234567894321";
// const varMass = str.split("");
// console.log(varMass);
// console.log(str);

//!================================Example (Cycle for) ==========================
// const fruits = ["apple", "lemon", "orange", "avocado", "grapefruit"];

// console.log(fruits.length);
// for(let i = 0; i < fruits.length; i += 1) {              // Перебір фруктів циклом for 
//     console.log(fruits[i]);
//     console.log(i);
// }

// for(let i = 0; i <= fruits.length -1; i += 1) {              // Перебір фруктів циклом for другий спосіб
//     console.log(fruits[i]);
//     console.log(i);
// }

// for(let i = 0; i <= fruits.length -1; i += 1) {              
//     console.log(`${i + 1}: ${fruits[i]}`);                    // Цикл який робить перебір фруктів починаючи с 1 до 5 а не ( з 0 до 4 )
// }

//!================================= Example (Cycle for of ) =====================================
// const fruits = ["apple", "lemon", "orange", "avocado", "grapefruit"];

// for(const fruit of fruits) {
//     console.log(fruit);                           // Перебирає тільки значення і зберігає їх в const(в данному випадку fruit)
// }

//!=========================== Example (Cycle for in ) ==========================================
// const fruits = ["apple", "lemon", "orange", "avocado", "grapefruit"];

// for(const i in fruits){
//     console.log(typeof(i));             //і Індекс це строка! ЗАПАМ'ЯТАЙ!
//     console.log(i);                         //Перебирає тільки індекси елемента і зберігає їх в const(в данному випадку i)
// }

// for(const i in fruits) {
//     console.log(`${Number(i) + 1}: ${fruits[i]}`)        // Як через for in зробити перелік фруктів від 1 до 5
// }

// for(let i in fruits) {
//     i = Number(i);                                  // Алтернатива попереднього скрипта (але i не const a let, і переводимо в Number раніше)
//     console.log(`${i + 1}: ${fruits[i]}`);
// }

//!================================ Example (Cycle for in + Method array split) ================================
const names = "John,Max,Jacob,William";
const phones = "566355123,765478960,980657436,743657385";

const namesArr = names.split(",");              // Тут ми методом split розділюємо массив на окремі частини
const phonesArr = phones.split(",");

console.log(namesArr);
console.log(phonesArr);
console.log(names);
console.log(phones);

for(const i in namesArr) {
    console.log(`${namesArr[i]}: ${phonesArr[i]}`);                 //По індексам виводимо разом номер та ім'я 
}

//!=========================== Example (Method trim) ============================

const myName = "         Serhii        Reshetniak        ";
console.log(myName.trim());                    // Прибирає зайві пробіли с початку і в кінці. НЕ МІЖ СЛОВАМИ!!!
console.log(myName);