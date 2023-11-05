//!===================================== First task (Cycle for of ) ============================================
// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   slizerin: [
//     { name: "Draco", points: 17 },
//     { name: "Goyl", points: 14 },
//     { name: "Crabbe", points: 5 },
//   ],

//   getUsers(faculty) {//?Функція в об'єкті для того щоб дібратися до назви факультету(Робимо для того якщо до об'єкту будуть додавати школи)
//     console.log(this.hasOwnProperty(faculty));//?Метод для перевірки наявность факультету(який визиваємо нихче!!!)
//     console.log(faculty in this);  //?Метод  key in object. faculty це key а this це object(в данному випадку hogvarts)
//     console.log(this.faculty);//?В першому випадку ми отримуємо undefined тому що через крапку звертаємось до конкретної властивості.
//     console.log(this[faculty]);//?Через квадратні дужки ми звертаємось до властивості якої ще не знаємо. Тому в консолі показує об'єкт.
//     if(!(faculty in this)){
//         return console.log("Такого факультету не існує!");
//     }else{
//         const names = []; //?Накопичувач для імен. Так як нам треба повернути массив імен учнів.
//         for(const {name} of this[faculty]){  //?Після const назва кожного item який перебираємо але ми одразу встановлюємо що це буде ім'я.
//             console.log(name);
//             names.push(name);
//         }
//         console.log(names);
//     }
//   },

//   getPoints(faculty){
//     if(!(this[faculty])){
//         return console.log("Такого факультету не існує!");
//     }else{
//         const allPoints = [];
//         let summPoints = 0;
//         for(const {points} of this[faculty]){  //?Так само як і в попередньому прикладі через деструкторизацію звертеємось до points одразу
//             allPoints.push(points);  //?Тут маств об'єктів значеннь points цієї школи.
//             summPoints += points;  //?Тут загальна кількість points підсумованна.
//         }
//         console.log(allPoints);
//         console.log(summPoints);
//     }
//   }
// };

// hogvarts.getUsers("griffindor");
// hogvarts.getPoints("slizerin");

// console.log(hogvarts);

// function studentsNames(schools) {
//   for (const school of schools) {
//     console.log(school.name);
//   }
// }

// studentsNames(hogvarts.slizerin);
// studentsNames(hogvarts.griffindor);
//!========================================= Second task (Cycle for of, arrow and objects ) ================================================
// const students2 = [
//   {
//     name: "Den",
//     language: "html",
//   },
//   {
//     name: "Petro",
//     language: "css",
//   },
//   {
//     name: "Egor",
//     language: "js",
//   },
//   {
//     name: "Max",
//     language: "html",
//   },
//   {
//     name: "Olga",
//     language: "css",
//   },
//   {
//     name: "Kate",
//     language: "js",
//   },
//   {
//     name: "Ivan",
//     language: "html",
//   },
// ];

// function getStudents(students, languages) {
//     const studentName = [];
//     for(const student of students){
//         if(student.language === languages){
//             studentName.push(student.name);
//             console.log(student.language);
//         }
//     }
//     return studentName;
// }

// console.log(getStudents(students2, "js"));
//!========================================= Third task (Cycle for of and Template string ) ============================================
// const workes = [
//   {
//     name: "Alex",
//     salary: 2500,
//     mounth: 12,
//   },
//   {
//     name: "Dima",
//     salary: 2300,
//     mounth: 9,
//   },
//   {
//     name: "Sergey",
//     salary: 45000,
//     mounth: 34,
//   },
//   {
//     name: "Oleg",
//     salary: 1500,
//     mounth: 36,
//   },
// ];

// function summSalaryWorkes(workes, name){
//     for(const worker of workes){
//         if(worker.name === name){
//             return `All salaryes ${worker.name} ${worker.salary * worker.mounth}`;
//         }
//     }
// }

// console.log(summSalaryWorkes(workes, "Alex"));

// function summSalaryAllWorkes(workes) {
//     let allSalaries = 0;
//     for(const worker of workes) {
//         allSalaries += worker.salary * worker.mounth;
//     }
//     return allSalaries;
// }

// console.log(summSalaryAllWorkes(workes));

//!=========================================== Fourth task (for of and arrow method includes ) =============================================
const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
  {
    name: "Oleksii",
    books: ["Bible", "Harry Potter", "War and Peace", "Romeo and Juliet"],
    age: 26,
  },
];

// function friendsName(friends, booksss){  //? Функція яка повертає імена друзів у яких є ця книжка.
//     const names = [];
//     for(const friend of friends) {
//         if(friend.books.includes(booksss)){
//             names.push(friend.name);
//             console.log(friend.name);
//         }
//     }
//     console.log(String(names)); //? Таким чином замість маству з іменами нам виводяться імена через кому!!!
//     console.log(names.join(", ")); //? Або таким чином. Тому що тут можна додати і пробіл(або щось інше)!!!
// }

// friendsName(friends, "Bible");

// function usersWhoHaveTheParametrsAge(friends) {  //?Функція яка підсумовує загальну кількість років друзів.
//     let ageAllFriends = 0;
//     for(const friend of friends) {
//         if(friend.age !== undefined){
//             ageAllFriends += friend.age;
//         }
//     }
//     return ageAllFriends;
// }

// console.log(usersWhoHaveTheParametrsAge(friends));

function usersAges(friends) {
  //?Другий спосіб вирішення завдання але тут середній вік друзів вираховуємо. А по іншому умова в if!!!
  let friendsCounter = 0;
  let agesSumm = 0;
  for (const friend of friends) {
    if ("age" in friend) {
      agesSumm += friend.age;
      friendsCounter += 1; //?Додаємо і вік в загальну кількість і кількість друзів в другу змінну.
    }
  }
  console.log(parseInt(agesSumm / friendsCounter));  //? Округлення до цілого числа
  return agesSumm / friendsCounter; //? Середній вік друзів.
}

console.log(usersAges(friends));
