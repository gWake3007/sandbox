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
const phoneBook = {  //?Звичайний рефакторінг коду
  contacts: [],
  add(contact) {
    const newContact = {
      list: "default",
      ...contact,
      id: this.generateId(),     //? this посилається на об'єкт phoneBook тому що знизу коли викликається метод .add 
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
  },
  generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

phoneBook.add({                   //? Об'єкт стоїть phoneBook.
        name: "Mango",
        email:"mango@mail.com",
        list: "friends",
    });

phoneBook.add({               //? Використання методу два рази.
        name: "Poly",
        email:"poly@hotmail.com",
    });

    console.log(phoneBook.contacts);   //?Вивід у консоль двух об'єктів так як два рази викликався метод!!!