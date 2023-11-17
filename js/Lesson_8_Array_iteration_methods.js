//!=========================================== Example (Methods filter and find) =================================================
// const arr = [1, 2, 3, 4, 5];

// const resultFilter = arr.filter((item) => item > 3);
// console.log(resultFilter);

// const resultFind = arr.find((item) => item > 1); //?Повертає перший елемент в масиві що підходить по умові або undefined!!!
// console.log(resultFind);
// const resultFind1 = arr.find((item) => item === 6);
// console.log(resultFind1);

// const mass = [1, 2, 3, 4, 5];
// const resultMap = mass.map((item) => item * item);
// console.log(resultMap);
// console.log(mass);
//!=============================
// const object = [
//   { name: "Sergey", status: "Admin" },
//   { name: "Mavrodiy", status: "user" },
//   { name: "Vadim", status: "user" },
//   { name: "Olia", status: "Admin" },
// ];

// const adminUser = object.find(user => user.status === "Admin");  //?Знаходить та повертає ПЕРШИЙ елемент чи об'єкт чи масив що підходить!
// console.log(adminUser);

// const adminIndex = object.findIndex(user => user.status === "Admin");  //?Знаходить та повертає ПЕРШИЙ index чи об'єкт чи масив що підходить!
// console.log(adminIndex);  //?Якщо такого елемента не буде то поверне -1 !!! ВАЖЛИВО!!!
//!====================================== Example ( every , some ) ========================================
// const arr = [5,15,55,155,180];

// const checkEvery = arr.every(item => item % 5 === 0);  //?Якщо ділиться на 5 без остачі(УМОВА!!!) Повертає true або false!(Всі елементи)
// console.log(checkEvery);

// const mass = [5,10,11,643,6456,734];
// const checkSome = mass.some(item => item % 5 === 0);  //?Якщо ділиться на 5 без остачі(УМОВА!!!) Повертає true або false!(Хоча б один елемент)
// console.log(checkSome);
//!======================================================== Example (Method Sort and reduce) ==========================
// const array = [11, 435, -1, 0, 34, 6554, -55];
// //?Мутує масив метод sort()

// array.sort((a, b) => a - b); //?Метод сортування масиву за зростанням!
// console.log(array);
// array.sort((a, b) => b - a); //? Метод сортування за спаданням!
// console.log(array);

// const strings = ["a", "b", "s", "f", "j", "e", "j", "d", "s", "G", "A"];

// strings.sort((a, b) => a.localeCompare(b)); //?Сортування string відбувається ТІЛЬКИ!!! через localeCompare!!!
// console.log(strings);
// strings.sort((a, b) => b.localeCompare(a)); //? Сортування в зворотньому порядку!!!
// console.log(strings);

// //?Метод reduce(callback, initialValue) використовується для послідовної обробки кожного
// //?елемента масиву із збереженням проміжного результату, як акумулятор.(НЕ МУТУЄ МАССИВ!!!)Для reduce ЗАВЖДИ ТРЕБА НОВА ЗМІННА!!!
// const arr = [1,2,3,4,5,6,7,8,9];

// const summ = arr.reduce((acumuliator, el) => el + acumuliator, 0);   //?0 це початкове значення акумулятора(Як let накопичувач)
// console.log(summ);

// const summ1 = arr.reduce((acumuliator, el) => el + acumuliator);   //?Якщо немає початкового значення акумулятора то перший елемент
// //?масиву стає акумулятором а другий елемент стає першим елементов(Таким чином виходить на одну ітерацію меньше)
// //?Першу ітерацію ми тут пропустили ( Але значення в данному випадку таке ж як і в попередньому прикладі )
// console.log(summ1);

//!=========================================== Example( Method Map )  ===================================================================
cars = [
  {
    make: "Honda",
    model: "C-RV",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const getModels = cars => cars.map((car) => car.model);   //?Приклад працювання методу map!!!
// console.log(getModels(cars));

// const getModelsDestructorization = cars => cars.map(({model}) => model); //? Деструкторизація!!!
// console.table(getModelsDestructorization(cars));      //?Виведення в консоль таблиці!!!

// const makeCarsWithDiscount = (cars, discount) => cars.map((car) => ({ ...car, price: car.price - (car.price * discount) }));
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));  //?Рахуємо скидку в %
// console.table(cars);  //?Перевірка чи метод не мутував массив!!!

//!=========================================== Example (Method filter) ====================================================
// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);
// console.log(getCarsWithType(cars, "suv"));
// console.log(getCarsWithType(cars, "sedan"));

//!========================================= Example ( Method find ) ================================================
// const getCarsByModel = (cars, model) => cars.find((car) => car.model === model);  //?Повертає перший елемент який знайде!
// console.log(getCarsByModel(cars, "F-150"));  //?Знаходить конкретну модель машини і повертає об'єкт з нею!!!
// console.log(getCarsByModel(cars, "CX-9"));

//!===================================== Example ( Method sort and localeCompare and Switch case) ============================================
// const sortByDescendingPrice = cars => [...cars].sort((carFirst, carSecond) => carSecond.price - carFirst.price);
// console.table(sortByDescendingPrice(cars)); //?Метод sort мутує масив. Для того і використовуємо перед методос spred оператор(копіюємо!)

// const sortByModel = (cars, order) =>  //?Сортування назв моделей по алфавіту і в зворотньому порядку!
//   [...cars].sort((a, b) =>
//     order === "asc"
//       : a.model.localeCompare(b.model)       //?За допомогою тернарного оператору перевіряємо в якому порядку сортувати назви!!!
//       ? b.model.localeCompare(a.model)
//   );

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

// const sortByModelSwitch = (cars, order) =>   //?Та ж сама функція зі switch case!
//   [...cars].sort((a, b) => {
//     switch (order) {
//       case "asc":
//         return b.model.localeCompare(a.model);
//       case "desc":
//         return a.model.localeCompare(b.model);
//     }
//   });

// console.table(sortByModelSwitch(cars, "asc"));
// console.table(sortByModelSwitch(cars, "desc"));

//!=================================================== Exanple ( Method reduce ) ===========================================
// const getTotalAmount = cars => cars.reduce((acc,car) => acc + car.amount, 0);
// console.log(getTotalAmount(cars));

//!============================================== Example ( Fiter and map  ) =====================================
// const getModelsOnSale = cars => cars.filter(car => car.onSale).map(car => car.model); //?filter проходить по тих авто що на розпродажі
//?А map виводить масив назв тих авто!!!
// console.table(getModelsOnSale(cars));

//!========================================== Example (filter and sort) ===========================================
// const getSorterCarsOnSale = cars => cars.filter(car => car.onSale).sort((a, b) => a.price - b.price);//?Для sort не треба робити копію
// //? масиву тому що fiter робить копію!!!
// console.table(getSorterCarsOnSale(cars));

//!============================================= Example ( Method filter and indefOf ) ==================================
// const friends = ["Sharon pace", "Briana Decker", "Sharon pace"];
// const uniqueFriends = friends.filter((friend, index, array) => array.indexOf(friend) === index);
// //?friend - один елемент масиву; index - індекс елементу масиву; array - масив friends;Виконуємо на кожному елементі масиву перевірку
// //? та повертаємо УНІКАЛЬНІ ЕЛЕМЕНТИ МАСИВУ(ті що не повторюються!)
// console.log(uniqueFriends);

//!============================================ Example (Method frat) =========================================
const courses = [[["Фізика", "Математика"]], ["Біологія"], "Зарубіжна література", "Хімія"];
console.log(courses.flat(1));