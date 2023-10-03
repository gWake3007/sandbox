// //! ========================= Example ( Arrays and Method arrays) ===================
// const genres = ["Jazz", "Blues"];
// genres.push("Rock N Roll");         //Додавання елемента в кінець масива

// console.log(genres);
// console.log(genres[0]);             //Виведення першого елемента масива
// console.log(genres[genres.length-1]);    // Виведення останнього елемента масиву в незалежності від того скільки елементів він має
// console.log(genres.shift());      //Вирізання першого елемента масиву 
// console.log(genres.unshift("Country", "Reggae"));   //Додавання елемента(тів) в початок масиву

const values = "8 10";
const arr = values.split(" ");     //Метод розбивающий елементи масиву на окремі
console.log(values);
console.log(arr);
const a = Number(arr[0]);              // Але для кращого розуміння ми їх перетворюємо в Number (числа)
const b = arr[1];                    // Білий колір строка ( String ) а синій число ( Number )
console.log(a);
console.log(b);
console.log(a * b);           // У всіх випадках окрім додавання JS сам перетворюватиме їх в Number
console.log(a + b);          // Тут строка ( String ) позначенна білим кольором тому що b це також строка ( А в додаванні JS не змінює її на число)

//!================================Example