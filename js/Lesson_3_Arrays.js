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
// const names = "John,Max,Jacob,William";
// const phones = "566355123,765478960,980657436,743657385";

// const namesArr = names.split(",");              // Тут ми методом split розділюємо массив на окремі частини
// const phonesArr = phones.split(",");

// console.log(namesArr);
// console.log(phonesArr);
// console.log(names);
// console.log(phones);

// for(const i in namesArr) {                          //Також якщо тут поставити phoneArr то нічого не зміниться
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);                 //По індексам виводимо разом номер та ім'я 
// }                          // Перебираємо масив namesArr а в шаблонній вписуємо інжекс(i) з обох масивів так як у них однакові індекси

// for(let i = 0; i < namesArr.length; i +=1){
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);           //Такий самий перебір тільки через цикл for
// }

//!=========================== Example (Method trim) ============================

// const myName = "         Serhii        Reshetniak        ";
// console.log(myName.trim());                    // Прибирає зайві пробіли с початку і в кінці. НЕ МІЖ СЛОВАМИ!!!
// console.log(myName);

//!=============================== Example (Method Arr) ==================================

// const string = "         Welcom to the future         ";

// console.log(string);

// const wordArr = string.trim().split(" ");       //trim прибирає зайві пробіли с початку і вкінці а split розділює на різні массиви


// wordArr.splice(0, 1);
// wordArr.splice(-1, 1);     //Видалення першого і останнього елементів двума splice!

// console.log(wordArr);
// console.log(wordArr.join(" "));                 //Повернення з масиву в строку елементів

// wordArr.shift();         //Вирізання першого елемента 
// wordArr.pop();          //Вирізання останнього елемента 

// console.log(wordArr);
// console.log(wordArr.join(" "));

//!=========================== Example (Method reverse) ==============================

// const string = "Welcom to the future";

// const reversedString = string.split("").reverse().join("");   //Строку перетворили на масив, перевернули літери, та повернули в строку

// console.log(reversedString);         //Метод reverse працює тільки для массиву. Для того і робимо з методами split and join!!!

//!============================= Example (Search min numberd in Array (Cycle for)) ===========================

// const numbers = [3,111,66,1,15,17,19,643];
// let min = numbers[0];

// for(const number of numbers){
//     if(number < min){                  //Умова для постійного оновлення числа з масива на меньше число поки цикл не знайде найменьше
//         min = number;
//     }
// }
// console.log(min);

//!============================= Example 

