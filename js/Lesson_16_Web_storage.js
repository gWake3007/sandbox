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
//!============================================= Example (JSON.stringify) ==================================================
//?За допомогою команди JSON.stringify - переводимо об'єкт в JSON формат в якому всі ключі та значення стають рялками
//?Окрім bollean(true || false) та number!
// const dog = {
//     name: "Mango",
//     age: 3,
//     isHappy: true,
//   };
  
//   const dogJSON = JSON.stringify(dog);
//   console.log(dogJSON);
//!======================================= Example (JSON.stringify is not work a function) ==============================
//?Також дуже важливо. В данному випадку буде переведенно в JSON формат тільки об'єкт без вбудованого методу.
//?Тому що функції не можна передавати в JSON ні в якому форматі!!!
// const dog = {
//     name: "Mango",
//     age: 3,
//     isHappy: true,
//     bark() {
//       console.log("Woof!");
//     },
//   };
  
//   const dogJSON = JSON.stringify(dog);
//   console.log(dogJSON);
//!================================================== Example (JSON.parse) ==============================================
//?Команда JSON.parse - потрібна для того щоб розпарсити рядок з JSON в валідне Java Script значення.
//?В данному випадку перетворює його в об'єкт. Тому і можливо достукатись до любого його значення.
// const json = '{"name":"Mango","age":3,"isHappy":true}';

// const dog = JSON.parse(json);
// console.log(dog);
// console.log(dog.name);
//!======================================= Example ( Error parse && try catch() ) ======================================
// const data = JSON.parse("Well, this is awkward"); //?Помилка парсингу.
// console.log("❌ You won't see this log");

// try {
//     const data = JSON.parse("Well, this is awkward");
//   } catch (error) {
//     console.log(error.name);  //?Назва помилки.
//     console.log(error.message);  //?Сама помилка(Її опис).
//   }
  
//   console.log("✅ This is fine, we handled parse error in try...catch");//?Цей консоль виводиться тому що спрацював try catch
//?Тут помилка в тому що не валідний JSON.Ключ (username) не огорнутий в лапки. Тобто не є рядком.
//   try {
//     const data = JSON.parse('{username: "Mango"}');
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message); 
//   }
  
//   console.log("✅ This is fine, we handled parse error in try...catch");
//!=================================== Example ( localeStorage , setItem & clear() ) ========================================
//?Запис до локального сховища.
// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("sidebar", "expanded");
// localStorage.setItem("notification-level", "mute");

// localStorage.clear();      //?Видалення всіх данних з локального сховища.
//!===================================== Example ( localeStorage & JSON.stringify ) ======================================
//?Якщо в lkocalkeStorage треба зберегти щось окрім рядка (наприклад об'єкт) то треба його перетворити в рядок.
// const settings = {
//     theme: "dark",
//     isAuthenticated: true,
//     options: [1, 2, 3],
//   };
  
//   localStorage.setItem("settings", JSON.stringify(settings));
//!===================================== Example ( reading localeStorage (Methods getItem)) ==============================
//?Читання інформації з локального сховища.
// localStorage.setItem("ui-theme", "dark");

// const theme = localStorage.getItem("ui-theme");
// console.log(theme);
//!========== Example ( localeStorage & Methods JSON.stringify & JSON.parse & setItem & getItem & try, catch() ) =========
//?Два приклади для пояснення для чого коли ми використовуємо JSON.strigify та JSON.parse ловити помилку методом
//? try , catch(). В данному випадку все працює. Так як там валідний Java Script.Та все написано без помилок.
// const settings = {
//     theme: "dark",
//     isAuthenticated: true,
//     options: [1, 2, 3],
//   };
  
//   localStorage.setItem("settings", JSON.stringify(settings));
  
//   const savedSettings = localStorage.getItem("settings");
//   const parsedSettings = JSON.parse(savedSettings);
//   console.log(parsedSettings);
  //?Тут ми спеціально не переводимо об'єкт settings в рядок за допомогою команди JSON.stringify що призводить до помилки.
  //?Цю помилку ми ловимо за допомогою try, catch(). Якщо б не було б помилки то код би нормально далі працював.
  //?ВАЖЛИВО!!! try, catch() ЗАВЖДИ ВИКОРИСТОВУВАТИ З JSON.parse!!!!!!!!!!!!!
//   const settings = {
//     theme: "dark",
//     isAuthenticated: true,
//     options: [1, 2, 3],
//   };
  
//   localStorage.setItem("settings", settings);
//   try{
//     const savedSettings = localStorage.getItem("settings");
//     const parsedSettings = JSON.parse(savedSettings);
//   } catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//   }
//   console.log(parsedSettings);
//!================================= Example ( localStorage Methods: removeItem() || clear() ) =============================
//?Різниця між методами removeItem() та clear() полягає в тому що localStorage.clear() - чистить його повністью.
//?А метод localStorage.removeItem() - саме ті дані клч яких ми вказуємо!
// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme"));

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme"));
//!================================= Example ( Example localStorage.removeItem() ) ========================================
//?Приклад як можна використовувати методи localStorage в event input.Те що вводимо в input з'являється в localStorage.
// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });
//!========================================== Example ( Service: localStorage ) ============================================
//?Методи написані для збереження та завантаження данних з localStorage.
// const save = (key, value) => {
//     try {
//       const serializedState = JSON.stringify(value);
//       localStorage.setItem(key, serializedState);
//     } catch (error) {
//       console.error("Set state error: ", error.message);
//     }
//   };
  
//   const load = key => {
//     try {
//       const serializedState = localStorage.getItem(key);
//       return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//       console.error("Get state error: ", error.message);
//     }
//   };


  
//   export default {
//     save,
//     load,
//   };

