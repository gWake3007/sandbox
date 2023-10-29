//!============================ Example (Objects.keys and Cycle for of) =================================
// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true,
// };

// console.log(user);

// user.mood = "happy";  // user["mood"] = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const objec = Object.keys(user);  // Робимо масив з об'єкта де в нас консоль нижче показує ключі об'єкта.
// console.log(objec);

// for(const key of objec){      //Тільки так можна перебрати об'єкт. Попередньо зробивши з нього массив.
//     console.log(key);
//     console.log(`${key}: ${user[key]}`);    // ${user[key]} Пишемо замість user.name або user["age"] і так далі...
// }

//!============================== Example (Object.values and Cycle for of) ================================
// const salaries = {
//     John: 120,
//     Ann: 130,
//     Pete: 160,
// };

// const allSalaries = Object.values(salaries);       //Це массив значення об'єкта.
// console.log(allSalaries);
// let sum = 0;

// for(const salarie of allSalaries){           //Значення найлегше перебирати циклом for of. Так як він для цього зроблений.
//     sum += salarie;
// }

// console.log(sum);

//!================================== Example (Array objects) ============================
// const stones = [
//     {name: "Смарагд", price: 1300, quantity: 4},
//     {name: "Діамант", price: 2700, quantity: 3},
//     {name: "Сапфір", price: 400, quantity: 7},
//     {name: "Щебінь", price: 200, quantity: 2},
// ];

// function calcTotalPrice(stones, stoneName){      //Function all prices stones.
//     for(const stone of stones){
//         console.log(stone);
//         if(stone.name === stoneName){        //Скрипт зробленний так щоб він робив доки не знайде камінь або до кінця.
//            return stone.price * stone.quantity;
//         }
//     }
//     return 0;
// };

// console.log(calcTotalPrice(stones, "Щебінь"));

//!================================= Example (Methods works in the Objects and use methods .this!!!) ==============
// const TRANSACTIONS = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// const account = {
//     //Поточний баланс рахунку
//     balance: 0,

//     //Історія транзакцій
//     transactions: [],

//     //Метод створює та повертає об'єкт транзакції. Приймає суму та тип транзакції.
//     createTransaction(amount, type){
//         return {                       //Раннє повернення тому що більш ніяких дій не відбувається окрім створення!!!   
//             amount,
//             type,
//             id: this.transactions.length,
//             currentBalance: this.balance,
//         };
//     },

//     //Метод що відповідає за додавання сумми до балансу. Приймає суму транзакції. 
//     //Викликає createTransaction для створення об'єкта транзакції.
//     //Після чого додає його до історії транзакції.
//     deposit(amount){
//         this.balance += amount;
//         const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);  //В параметрах цієї функції другим є тип транзакції.
//         this.transactions.push(transaction);     //До історії транзнакції додаємо нашу транзакцію.
//     },

//     //Метод що відповідає за знаття сумми з балансу. - Приймає суму транзакції.
//     //Викликає createTransaction для створення об'єкта транзакції. - Після чого додає його до історії транзакції.
//     //Якщо amount більше ніж поточний баланс, виводить повідомлення про те, що вивід такої сумми не можливий,
//     //Не достатньо коштів.
//     withdraw(amount) {
//         const balanceAlert = Math.abs(this.balance - amount); //За допомогою Math.abs перетворюємо відємне значення на звичайне для alert.
//         if(this.balance >= amount){
//             this.balance -= amount;
//             const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
//             this.transactions.push(transaction);
//         }else{
//             alert(`Не достатньо коштів. Не достатньо ${balanceAlert}`);
//         }
//     },

//     //Метод повертає поточний баланс.
//     getBalance(){
//         return this.balance;
//     },

//     //Метод шукає та повертає об'єкт транзакції по id.
//     getTransactionDetails(id){               //В циклі for of перебираємо массиви транзакцій щоб далі порівняти їх по id.
//         for(const transaction of this.transactions){
//             if(transaction.id === id){
//                 return transaction;        //Якщо id співпадає то повертається об'єкт поточної транзакції.
//             }
//         }
//         return {};  //Тут return на виході з циклу з пустим об'єктом для того якщо не має об'єкта с таким id то повертаємо пустий.
//     },
//     //Метод повертає кількість коштів. Певного типу транзакції з усією історією транзакцій.
//     getTransactionTotal(type){
//         let sumTransactions = 0;
//         for(const transaction of this.transactions) {
//             if(transaction.type === type) {
//                 sumTransactions += transaction.amount;  //Додаємо суму операцій.
//             }
//         }
//         return sumTransactions;    //По виході з циклу повертає сумму транзакцій данного типу.
//     },
// };

// console.log(account);
// account.deposit(1500);        //this це об'єкт який викликає функцію.account стає this в середині метожу deposit!!!ВАЖЛИВО!!!
// console.log(account);        // В момент виклику this отримує своє значення!!!
// account.deposit(800);

// account.withdraw(1000);
// console.log(account);
// console.log(account.getBalance(account));     //Виклик та повернення поточного балансу.
// console.log(account.getTransactionTotal('withdraw'));
// console.log(account.getTransactionTotal('deposit'));
// console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));  //Або значення в консолі або через константу.
// console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));

//!============================================ Example 
const animal = {
    legs: 4,
  };
  const dog = Object.create(animal);
  dog.name = "Манго";
  
  console.log(dog); // {name: 'Манго'}
  console.log(dog.name); // 'Манго'
  console.log(dog.legs); // 4

  // ❌ Повертає true для всіх властивостей
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Повертає true тільки для власних властивостей
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false