//!==================================================== localStorage ===================================================
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// localStorage.setItem(LS_KEY , JSON.stringify(names));     //?Звертаємось до localStorage.
// //?Командою setItem - записуємо туди значення. LS_KEY та names - переведенний в формат JSON(командою JSON.sytingify)
// //?setItem(key,value) - для запису завжди беремо ключ та значення. value - або строка або валідний JSON!

// const value = localStorage.getItem(LS_KEY); //?Звертаємось до ключа LS_KEY щоб отримати value з localStorage
// console.log(value);   //?Якщо просто виведемо данні з localStorage то вони будуть у вигляді строкт.
// console.log(JSON.parse(value));  //?Щоб повернути масив з localStorage треба за допомогою JSON.parse-розпарсити їх до масиву.

// localStorage.clear(); //?Команда для очищення абсолютно всього з localStorage(Увага!!!Використовується в крайніх випадках)

//!============================ Example ( Why needed always useche method stringyfy? ) =====================================
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// localStorage.setItem(LS_KEY, names); //?Передаємо в localStorage значення і ключ. Але значення не переводимо JSON.stringify

// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(JSON.parse(value));  //?В данному випадку буде помилка. Це не валідний JSON.

//!=========== Example (localStorage cannot store functions in any of their interpritations) ========================
//?localStorage - не зберігає функції.НІЯК!!!
// const LS_KEY = "my function";

// function add(a,b){
//     return a + b;
// }

// localStorage.setItem(LS_KEY, JSON.stringify(add));  //?Отримуємо undefined.Тому що localStorage не приймає функції!
// console.log(localStorage.getItem(LS_KEY));

// const calculator = {
//     a: 5,
//     b: 2,
//     add() {
//         return this.a + this.b
//     }
// }

// localStorage.setItem(LS_KEY, JSON.stringify(calculator)); //?localStorage повністю ігнорує метод в об'єкті.
// //?Запасуючи тільки об'єкт в форматі рядка.
// console.log(localStorage.getItem(LS_KEY));
//!========================================== Example ( try & catch() ) ===================================================
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// localStorage.setItem(LS_KEY, names);

// const value = localStorage.getItem(LS_KEY);
// console.log(value);

// try{
//     console.log(JSON.parse(value));   //?Тут ми помістили парс value в try який виводив помилку.Та якщо catch ловить цю
// } catch(error) {     
//     console.log(error);                 //?Тут ми показуємо саму помилку в консолі.З подальшою роботою скрипта!
//     console.log("This is Error!");      //?помилку то виводить в консоль "This is Error!"
// }

// console.log("audit");  //?Консоль з перевіркою.Якби не було try & catch() то помилка не дала би скрипту працювати!
//!================================================= Example Task =======================================================
