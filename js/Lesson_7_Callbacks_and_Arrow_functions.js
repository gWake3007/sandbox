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
// const cars = ["BMW", "Audi", "Mecedes", "Infiniti", "Ford", "Mazda"];

// for(let i = 0; i < cars.length; i++){   //?Приклад нумерації автомобілів з массиву циклом for!
//     console.log(`${i + 1}: ${cars[i]}`);
// }

// cars.forEach((car,i,cars) =>{ //? forEach приймає в якості аргумента коллбек функцію.Та він завжди доходить до кінця.Його не можна призупинити.
//     console.log(`${i + 1}: ${car}`);
// });

// cars.forEach((car,i) =>{   //?Те ж саме що і попередня.
//     console.log(`${i + 1}: ${car}`);
// });

// const callback = (car, i) => {  //?Якщо не написано третього параметру то значить що ми його не будемо використовувати(можна з 1 параметром)
//     console.log(`${i + 1}: ${car}`);
// };
// cars.forEach(callback);         //?Теж саме що і попередні приклади.
// //! Якщо вам треба щоб на якійсь ітерації масиву функція чи цикл зупинялись то forEach не підходить бо він іде завжди до кінця!!!

//!=================================== Example (callback function and arrow function) ===============================================
// function createProduct(obj, callback) {
//   const newObject = { ...obj, id: Date.now() }; //? Date.now час від 1970 року до тепер(В мілісекундах)Тут ми створюємо новий такий самий obj
//   callback(newObject);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice({ amount, price }) {
//   console.log(amount * price);
// }

// const product = {
//     name: "chese",
//     amount: 20,
//     price: 100,
// };

// createProduct(product, logProduct);    //?Тут ми виводимо в консоль новий об'єкт.
// createProduct(product, logTotalPrice); //?Тут ми виводимо в консоль добуток килькості на вартість. ДВА РІЗНИХ КОЛЛБЕКИ!!!

// function createProductArrow(obj, callback) {
//     const newObject = { ...obj, id: Date.now() };
//     callback(newObject);
//   }

//   const logProductArrow = product => console.log(product);     //?Дві коллбек стрілочні функції. Аналогічні тим що вище.
//   const logTotalPriceArrow = ({amount, price}) => console.log(amount * price);

//   createProductArrow(product, logProductArrow);
//   createProductArrow(product, logTotalPriceArrow);

//!======================================= Example (Working Methods Under the Hood!) ==============================================
// //?Робота методів під капотом!
// const mass = [1,2,3,4,5];

// function each(array, callback) {   //?Принцип роботи методу map під капотом.
//     const newMass = [];
//     for(let i = 0; i < array.length; i ++){     //?Теж саме можна зробити і циклом for of!!!
//         const newElem = callback(array[i]);    //?Створили новий елемент в const і одразу викликаємо на ньому коллбек!
//         console.log(newElem);
//         newMass.push(newElem);
//     }
//     return newMass;
// }

// function pow(item) {
//     return item * item;
// }

// console.log(each(mass, pow));
// console.log(each(mass, (newElem) => newElem * newElem)); //?Стрілочна функція в консолі. Аналогічна функції pow.

//!============================================== Example (forEach) ============================================
// const array = [1,2,3,4,5,6,7,8,9];

// let sum = 0; //?Накопичувач елементів масиву(тобто цифер)

// array.forEach((el) => (sum += el));  //? forEach зроблений стрілочною функцією накопичує всі елементи масиву.
// console.log(sum / array.length); //?В консолі ми одразу знаходимо середнє число масиву поділивши сумму на довжину масиву.

//!============================================ Example (two callbacks) ====================================================
const pizzaPalace = {
    
}