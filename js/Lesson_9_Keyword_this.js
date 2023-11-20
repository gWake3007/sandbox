//!================================================ Example (Method .this and find()) ====================================
// const chopChop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2800, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find((stone) => stone.name === stoneName);//?Методом find знаходимо потрібний нам об'єкт.this це наш об'єкт
//     return currentStone.price * currentStone.quantity;   //? Через return повертаємо ціну перемноженну на кількість.
//   },
// };

// console.log(chopChop.calcTotalPrice("Emerald"));
// console.log(chopChop.calcTotalPrice("Diamond"));
// console.log(chopChop.calcTotalPrice("Sapphire"));
// console.log(chopChop.calcTotalPrice("Ruby"));

//!============================================= Example (Method this) ===============================
// const phoneBook = {  //?Звичайний рефакторінг коду
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),     //? this посилається на об'єкт phoneBook тому що знизу коли викликається метод .add
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phoneBook.add({                   //? Об'єкт стоїть phoneBook.
//         name: "Mango",
//         email:"mango@mail.com",
//         list: "friends",
//     });

// phoneBook.add({               //? Використання методу два рази.
//         name: "Poly",
//         email:"poly@hotmail.com",
//     });

//     console.log(phoneBook.contacts);   //?Вивід у консоль двух об'єктів так як два рази викликався метод!!!

//!=================================================== Example (Object methods and this ) ==========================================
// calculator = {
//     read(a = 0, b = 0){    //? a та b значення за замовчуванням якщо не буде присвоєно значення то буде 0.
//         this.a = a;
//         this.b = b;
//     },
//     add(){
//         return this.a + this.b;
//     },
//     mult(){
//         return this.a * this.b;
//     },
// };

// calculator.read(10, 22);

// console.log(calculator);

// console.log(calculator.add());   //? щоб при додаванні чи множенні не було NaN а значення a та b не були undefined!
// console.log(calculator.mult());

// calculators = {
//   read(a, b) {
//     this.a = a || 0;    //? Або можна так поставити значення за замовчкуванням!
//     this.b = b || 0;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculators.read(10, 22);

// console.log(calculators);

// console.log(calculators.add());
// console.log(calculators.mult());

//!============================================= Example ( reduce and this ) ==============================================
// function sumAll (arr) {
//     return [...arr, ...this].reduce((sum, el) => sum + el, 0);  //?тут об'єднуємо два масиви в один і додаємо за допомогою reduce()
// }

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// console.log(sumAll.apply(arr1, [arr2]));  //? apply() потрібен для того щоб вказати контекст і викликати функцію на місці.
