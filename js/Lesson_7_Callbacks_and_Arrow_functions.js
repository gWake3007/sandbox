//!================================== Example (callback function) ======================================================
// function foo(callback) {
//     console.log("Функція вищого порядку");  //?В нас в консолі показує одразу цей рядок.
//     callback();  //?А тут показує рядок (Колбек функція).Назва коллбека така ж як і назва параметру(не обовязково callback як у прикладі)
// }

// function boo(){
//     console.log("Колбек функція");
// }

// foo(boo);                //?Коллбеків може бути скільки завгодно!

//!========================== Example ( function declaration and expresion and arrow function) ==========================================
// //?function declaration
// function totalDeclar(a, b){  //?Звичайна функція!
//     return a + b;
// }
// console.log(totalDeclar(1,4));

// //?arrow funcion
// const totalArrow = (a, b) => a + b;   //?Стрілочна функція!
// console.log(totalArrow(4,6));

// //?function exapresion
// const totalExpres = function (a, b) {   //?Функціональний вираз!
//     return a + b;
// }
// console.log(totalExpres(5,10));

//!============================================= Example (Cycle forEach and cycle for) ==============================
// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

//!========================================= Example (Cycle forEach) ================================================
const cars = ["BMW", "Audi", "Mecedes", "Infiniti", "Ford", "Mazda"];

for(let i = 0; i < cars.length; i++){   //?Приклад нумерації автомобілів з массиву циклом for!
    console.log(`${i + 1}: ${cars[i]}`);
}

cars.forEach((car,i,cars) =>{ //? forEach приймає в якості аргумента коллбек функцію.Та він завжди доходить до кінця.Його не можна призупинити.
    console.log(`${i + 1}: ${car}`);
});

cars.forEach((car,i) =>{   //?Те ж саме що і попередня.
    console.log(`${i + 1}: ${car}`);
});
//! Якщо вам треба щоб на якійсь ітерації масиву функція чи цикл зупинялись то forEach не підходить бо він іде завжди до кінця!!!

//!========================================= Example ( ) ==================================================