// Є деякі рядки, які потрібно перевірити на вміст заборонених слів spam і sale, і повернути результат перевірки. Слова в рядку можуть бути у довільному регістрі, наприклад SPAM або sAlE. Якщо знайшли заборонене слово (spam або sale) то повертайте true. Якщо в рядку відсутні заборонені слова, повертайте false.
// Попорядку перевіряйте наступні рядки:

// "Latest technology news" - false
// "JavaScript weekly newsletter" - false
// "Get best sale offers now!" - true
// "Amazing SalE, only tonight!" - true
// "Trust me, this is not a spam message" - true
// "Get rid of sPaM emails. Our book in on sale!" - true

// function checkString(str){

//     let isSpam;
//     str = str.toLowerCase();

//     if(str.includes("spam") || str.includes("sale")){
//         isSpam = true
//     }
//     else{
//         isSpam = false
//     }
//     console.log(isSpam);
// }
// checkString("Latest technology news")
// checkString("Amazing SalE, only tonight!")

// function checkString(str){

//     let isSpam = false;
//     str = str.toLowerCase();

//     if(str.includes("spam") || str.includes("sale")){
//         isSpam = true
//     }
//     console.log(isSpam);
// }
// checkString("Latest technology news")
// checkString("Amazing SalE, only tonight!")

// function checkString(str){
//     str = str.toLowerCase();
//     let isSpam = str.includes("spam") || str.includes("sale");
//     console.log(isSpam);
// }
// checkString("Latest technology news")
// checkString("Amazing SalE, only tonight!")

// подивитись і цей зназок

// function checkString(str){
//     const isSpam =
//       str.toLowerCase().includes("spam") ||
//       str.toLowerCase().includes("sale");
//   }

// const available = 100;
// const ordered = 50;
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available < ordered) {
//     console.log = `Not enough goods in stock!`;
//   } else {
//     console.log = `Order is processed, our manager will contact you.`;
//   }
//   // Change code above this line
//   return message;
// }
// checkStorage;

// // Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach((orderedItems, item) => {
//     totalPrice += orderedItems;
//   });
//   // orderedItems.forEach(function (item) {
//   //   totalPrice += item;
//   // });

//   return totalPrice;
// }
// // Change code above this line

// разница между методами

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line

//   const totalAveragePlaytimePerGame = players.reduce((time, player) => {
//     return time + player.playtime;
//   }, 0);

// // Налаштування
// let myStr = "Jello World";

// // Змініть код лише під цим рядком
// myStr = "Hello world"; // Змініть цей рядок
// // Змініть код лише над цим рядком
// console.log(myStr);

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// // Змініть код лише під цим рядком
// const wordBlanks = myAdjective + myNoun + myVerb + myAdverb; // Змініть цей рядок
// // Змініть код лише над цим рядком
// console.log(wordBlanks);

// const varMas = 10
// console.log(Math.random() * varMas);

// console.log(Math.floor(Math.random() * varMas));

// console.log(Math.max (3, 9, 8, varMas));

// alert(Math.pow(2,2));

// function repetFunction (func, repet){
//     for (let i = 0; i < repet; i++){
//         func();
//     }
// }

// function geometricProgresion (a, b) {
//         return console.log(Math.pow(2,2));
// }

// repetFunction(geometricProgresion, 5);

// console.log(repetFunction(geometricProgresion, 5));

// function geometricProgression(a, r, n) {
//     if (n === 1) {
//       return a;
//     } else if (n === 0) {
//       return 1; // Возврат 1, так как нулевой член геометрической прогрессии всегда равен 1
//     } else {
//       return a * geometricProgression(a * r, r, n - 1);
//     }
//   }

//   // Пример использования функции
//   const firstTerm = 2; // Первый член прогрессии
//   const commonRatio = 2; // Знаменатель прогрессии
//   const termNumber = 5; // Номер члена прогрессии, который нужно найти

//   const result = geometricProgression(firstTerm, commonRatio, termNumber);
//   console.log(`Член геометрической прогрессии ${termNumber} равен ${result}`);

// function nextInLine(arr, item) {
//     // Змініть код лише під цим рядком
//     arr.push(item);
//     const removed = arr.shift();
//     return removed;

//     // Змініть код лише над цим рядком
//   }

//   // Налаштування
//   let testArr = [1, 2, 3, 4, 5];

//   // Відобразити код
//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));

// --------------------------------------Примеры функции case-------------------------------------------
// function caseInSwitch(val) {
//   let answer = "";
//   // Змініть код лише під цим рядком
//   switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//   }

//   // Змініть код лише над цим рядком
//   return answer;
// }

// caseInSwitch(1);

// function switchOfStuff(val) {
//   let answer = "";
//   // Змініть код лише під цим рядком
//   switch (val) {
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       answer = "bird";
//       break;
//     case "c":
//       answer = "cat";
//       break;
//     default:
//       answer = "stuff";
//       break;
//   }

//   // Змініть код лише над цим рядком
//   return answer;
// }

// switchOfStuff(1);

// function sequentialSizes(val) {
//   let answer = "";
//   // Змініть код лише під цим рядком
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "Low";
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = "Mid";
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "High";
//       break;
//   }

//   // Змініть код лише над цим рядком
//   return answer;
// }

// sequentialSizes(1);

// function chainToSwitch(val) {
//   let answer = "";
//   // Змініть код лише під цим рядком

//   // if (val === "bob") {
//   //   answer = "Marley";
//   // } else if (val === 42) {
//   //   answer = "The Answer";
//   // } else if (val === 1) {
//   //   answer = "There is no #1";
//   // } else if (val === 99) {
//   //   answer = "Missed me by this much!";
//   // } else if (val === 7) {
//   //   answer = "Ate Nine";
//   // }

//   switch (val) {
//     case 1:
//       answer = "There is no #1";
//       break;
//     case 7:
//       answer = "Ate Nine";
//       break;
//     case 42:
//       answer = "The Answer";
//       break;
//     case 99:
//       answer = "Missed me by this much!";
//       break;
//     case "bob":
//       answer = "Marley";
//       break;
//     default:
//       answer = "";
//       break;
//   }

//   // Змініть код лише над цим рядком
//   return answer;
// }

// chainToSwitch(7);

//------------------------------ Влаштовані класи Math працюють і в комбінаціях -------------------------

// console.log(Math.round(Math.sqrt(77)));

// function abTest(a, b) {
//     // Змініть код лише під цим рядком
//   if(a < 0 || b < 0) {
//     return undefined;
//   }

//     // Змініть код лише над цим рядком

//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//   }

//   console.log(abTest(2,2));

// console.log(Math.pow(Math.sqrt(2) + Math.sqrt(2), 2));

// console.log(Math.sqrt(2));

// -------------------------------------- Function --------------------------------------------

//----------------First Example-------------------------
// let count = 0;

// function cc(card) {
//   // Змініть код лише під цим рядком
// if(card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
//   count += 1;
//   // return `${count} Bet`;
// }else if(card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
//   count -= 1;
//   // return `${count} Hold`;
// }else if(card === 7 || card === 8 || card === 9){
//   count;
//   // return `${count} Hold`;
// }

// if(count <= 0){
//   return `${count} Hold`;
// }
// return `${count} Bet`;

//   // Змініть код лише над цим рядком
// }

// console.log(cc(2,3,7,'K','A'));
// console.log(cc(2),cc(3),cc(7),cc('K'),cc('A'));

// cc(2); cc(3); cc(7); cc('K'); cc('A');

//----------------------------Second Example------------------------------------

// let count = 0;

// function cc(card) {
//   // Змініть код лише під цим рядком

// // Змінна hightCard використовується для РЕГУЛЯРНОГО ВИРАЗУ (RegExp) (Потрібен для порівняня кожного елементу массиву зі значенням)
//   const hightCard = /[JQKA]/;

// if(card > 1 && 7 > card) {
//   count ++;
// }else if(card === 10 || hightCard.test(card)) {
//   count --;
// }
// if(count > 0){
//   return `${count} Bet`;
// }
// return `${count} Hold`;

//   // Змініть код лише над цим рядком
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// console.log(cc(2,3,7,'K','A'));
// console.log(cc(2),cc(3),cc(7),cc('K'),cc('A'));

//-------------------------------------Third Example (Switch - Case Function) --------------------------------------

// let count = 0;

// function cc(card) {
//   // Змініть код лише під цим рядком
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }

//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
//   // Змініть код лише над цим рядком
// }

// cc(2);
// cc(3);
// cc(7);
// cc("K");
// cc("A");

// console.log(cc(2, 3, 7, "K", "A"));
// console.log(cc(2), cc(3), cc(7), cc("K"), cc("A"));

// ---------------------------------------------Refacting Function-----------------------------------------------------

// // Налаштування
// function phoneticLookup(val) {
//     let result = "";

//     // Змініть код лише під цим рядком
//     // switch(val) {
//     //   case "alpha":
//     //     result = "Adams";
//     //     break;
//     //   case "bravo":
//     //     result = "Boston";
//     //     break;
//     //   case "charlie":
//     //     result = "Chicago";
//     //     break;
//     //   case "delta":
//     //     result = "Denver";
//     //     break;
//     //   case "echo":
//     //     result = "Easy";
//     //     break;
//     //   case "foxtrot":
//     //     result = "Frank";
//     // }
//     const lookup = {
//       alpha: "Adams",
//       bravo: "Boston",
//       charlie: "Chicago",
//       delta: "Denver",
//       echo: "Easy",
//       foxtrot: "Frank"
//     };

//   result = lookup[val];

//     // Змініть код лише над цим рядком
//     return result;
//   }

//   phoneticLookup("charlie");

// ----------------------------------------Objects Metod-----------------------------------------

// function checkObj(obj, checkProp) {
//     // Змініть код лише під цим рядком
//     if(obj.hasOwnProperty(checkProp)){
//   return obj[checkProp];
//     }
//     return "Not Found";
//     // Змініть код лише над цим рядком
//   }

//   console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));

// const myPlants = [
//     {
//       type: "flowers",
//       list: [
//         "rose",
//         "tulip",
//         "dandelion"
//       ]
//     },
//     {
//       type: "trees",
//       list: [
//         "fir",
//         "pine",
//         "birch"
//       ]
//     }
//   ];

//   const secondTree = myPlants[1].list[1];
//   console.log(secondTree);

//!============================ Three intresting example decision task ====================================

// const recordCollection = {           //? Об'єкт з об'єктами і масивами в середині!!!
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// function updateRecords(records, id, prop, value) {//?В функції добираємось до властивостей об'єктів через квадратні дужки бо ми не
//   if(value === ""){                               //?знаємо точно який саме об'єкт буде!!!
//     delete records[id][prop];
//   }else if (prop !== "tracks" && value !== ""){
//     records[id][prop] = value;
//   } else if(prop === "tracks" && value !== ""){
//     if(records[id].hasOwnProperty("tracks") === false){
//       records[id][prop] = [];
//     }
//     records[id][prop].push(value);
//   }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

// function updateRecords(records, id, prop, value) {
//   if (value === '') {
//     delete records[id][prop];
//   } else if (prop === "tracks") {
//     records[id][prop] = records[id][prop] || []; // shortcircuit evaluation
//     records[id][prop].push(value);
//   } else {
//     records[id][prop] = value;
//   }
//   return records;
// }

// function updateRecords(records, id, prop, value) {
//   // Access target album in record collection
//   const album = records[id];
//   // Update the album
//   if (value === "") {
//     delete album[prop];
//   } else if (prop !== "tracks") {
//     album[prop] = value;
//   } else {
//     album["tracks"] = album["tracks"] || [];
//     album["tracks"].push(value);
//   }
//   // Return the full collection
//   return records;
// }

//!======================================== Example Task ====================================
// const arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком
// for(let i = 0; i < arr.length; i++){    //?Множення всіх елементів массиву!!!
//   for(let k = 0; k < arr[i].length; k++){
//     console.log(arr[i][k]);
//     product = product * arr[i][k];
//   }
// }
//   // Змініть код лише над цим рядком
//   return product;
// }

// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

//!================================================ Example (Recursive function) ==========================================
// function sum(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }

// console.log(sum([1], 0));

//!============================================= Three example task ===========================================
// // Налаштування
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// //!=========================================== Example (Cycle for of and method .hasOwnProperty) ======================
// function lookUpProfile(name, prop) {
//   // Змініть код лише під цим рядком
// for(const contact of contacts){
//   if(contact.firstName === name){
//     if(contact.hasOwnProperty(prop)){
//       return contact[prop];
//     } else{
//       return "No such property";
//     }
//   }
// }
// return "No such contact";
//   // Змініть код лише над цим рядком
// }

// console.log(lookUpProfile("Akira", "likes"));

// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Harry", "likes"));

// //!======================================== Example (Cycle for and method .hasOwnProperty) =================================
// function lookUpProfile(name, prop) {
//   for (let x = 0; x < contacts.length; x++) {
//     if (contacts[x].firstName === name) {
//       if (contacts[x].hasOwnProperty(prop)) {
//         return contacts[x][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

// //!=========================================== Example (Cycle for and method in) ========================
// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (prop in contacts[i]) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

//!============================================ Example (Math methods) ===========================
// function randomRange(myMin, myMax) {
//   let random = Math.random() * (myMax - myMin + 1) + myMin;
//   return Math.floor(random);
// }

// console.log(randomRange(1,10));

//!========================================== Example (Myltiple ternary operators) ===============================
// function checkSign(num) {     //?Функція з подвійним тернарним оператором яка перевіряє число відємне чи додатнє або 0.
//   return (num === 0) ? "zero"
//   : (num > 0) ? "positive"
//   : "negative";
//   }

//   console.log(checkSign(10));

//!======================================= Example (Recursive function) =====================================
// function countup(n) {  //?Рекурсія від меньшо до більшого.
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

// //? ================================ Example
//     function countdown(n){      //?Рекурсія від більшого до меньшого.Чотири методи як додавати елементи в масив в зворотньому порядку!!!
//     if (n < 1) {
//       return [];
//     } else {
//       const arr = countdown(n - 1);
//       arr.unshift(n);
//       return arr;
//     }
//   }

// console.log(countdown(5));

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const arr = countdown(n - 1);
//     arr.splice(0, 0, n);
//     return arr;
//   }
// }

// function countdown(n){
//   return n < 1 ? [] : [n].concat(countdown(n - 1));
// }

// function countdown(n){
//   return n < 1 ? [] : [n, ...countdown(n - 1)];
// }

//!================================= First example (Recursive function) =======================================
// function rangeOfNumbers(startNum, endNum) {  //?Числа в массив від мінімального до максимального(рекурсія)!!!
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }

// console.log(rangeOfNumbers(1,10));

// //? ========================== Second example ============================
// function rangeOfNumbers(startNum, endNum) {
//   return endNum < startNum
//     ? []
//     : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
// }

// //? ===================== Third example ====================================
// function rangeOfNumbers(startNum, endNum) {
//   return endNum < startNum
//     ? []
//     : [...rangeOfNumbers(startNum, endNum - 1), endNum];
// }

//!============================================== Example (Object freze) ==========================================
// let obj = {
//   name:"FreeCodeCamp",
//   review:"Awesome"
// };
// Object.freeze(obj);   //? .freeze() команда яка не дає можливість перезаписувати любі об'єкти.
// obj.review = "bad";
// obj.newProp = "Test";
// console.log(obj);

//!====================================== Example ( Pointer function ) =================================================
// const increment = (number, value = 1) => number + value; //?Приклад стрілочної функції з одним параметром за замовчуванням
// //?Якщо одного параметру немає то за замовчуванням там буде 1.
// console.log(increment(5, 2)); // returns 7
// console.log(increment(5)); // returns 6

//!======================================= Example (spread operator) ================================
// const sum = (...args) => {  //?Стрілочна функція яка може приймати будь яку кількість аргументів!
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

// console.log(sum(1,2,3,4,5));

//!======================================= Example (Destructorization function) =========================================================
// function removeFirstTwo(list) {
//   const [a, b, ...arr] = list;
//   list = arr;
//   console.log(list);
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

//!==================================== Example (Destructorization array function) =================================================
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// const half = (stats) => (stats.max + stats.min) / 2.0; //?Стрілочна функція до деструкторизації.
// console.log(half(stats));

// const halfDesctruct = ({max, min}) => (max + min) / 2.0; //?Після дестоукторизації (Залишаємо тільки самі назви значеннь об'єкта).
// console.log(halfDesctruct(stats));

//!========================================= Example (.class and method constructor) =====================================================
// //?Create objects!!!
// // Explicit constructor
// class SpaceShuttle {
//   constructor(targetPlanet) {
//     this.targetPlanet = targetPlanet;
//   }
//   takeOff() {
//     console.log("To " + this.targetPlanet + "!");
//   }
// }

// // Implicit constructor
// class Rocket {
//   launch() {
//     console.log("To the moon!");
//   }
// }

// const zeus = new SpaceShuttle('Jupiter');
// // prints To Jupiter! in console
// zeus.takeOff();

// const atlas = new Rocket();
// // prints To the moon! in console
// atlas.launch();

//!============================================ Example (Test) ================================================
// //?Вирішенне завдання (Потім розібрати)

// class Vegetable {
//   constructor(name) {
//     this.name = name;
//   }
//   names() {
//     return this.name;
//   }
// }

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Повинно показувати 'carrot'

//!=================================== Example ( ) ===================================
// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   // setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }
// const novel = new Book('anonymous');
// console.log(novel.writer);
// novel.writer = 'newAuthor';
// console.log(novel.writer);

//!================================================== Example
// // Змініть код лише під цим рядком
// class Thermostat {
//   constructor(thermos) {
//     this._thermos = thermos;
//   }
//   get temperature() {
//     return this._thermos;
//   }
//   set temperature(updateThermos) {
//     updateThermos = (5/9 * (this._thermos - 32));
//   }
// }
// // Змініть код лише над цим рядком

// const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
// let temp = thermos.temperature; // 24.44 градусів за Цельсієм
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 градусів за Цельсієм

// console.log(thermos.temperature);
// console.log(temp);

//!================================= Example
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName);
// makeMessage(customer.getFullName.bind(customer)); // Буде помилка у виклику функції

//!========================================== Example
// Змініть код лише під цим рядком
// class Thermostat {
//   constructor(temperature) {
//     this.temperature = temperature;
//   }
//   get thermos() {
//     return this.temperature;
//   }
//   set thermos(temp) {
//     this.temperature =  5/9 * (this.temperature - 32);
//   }
// }

//!==================================== First Example !!!!!!!!!!!!!!!!!!!!!
// class Thermostat {
//   constructor(fahrenheit) {
//     this._fahrenheit = fahrenheit;
//   }

//   get temperature() {
//     return (5 / 9) * (this._fahrenheit - 32);
//   }

//   set temperature(celsius) {
//     return this._fahrenheit = (celsius * 9.0) / 5 + 32;
//   }
// }
// // Змініть код лише над цим рядком

// const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
// let temp = thermos.temperature; // 24.44 градусів за Цельсієм
// console.log(temp);
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 градусів за Цельсієм

//?======================================= Second Example !!!!!!!!!!!!!!
// class Thermostat {
//   constructor(fahrenheit) {
//     this._celsius = (5 / 9) * (fahrenheit - 32);
//   }

//   get temperature() {
//     return this._celsius;
//   }

//   set temperature(celsius) {
//     return this._celsius = celsius;
//   }
// }
//?================================================= Third Example !!!!!!!!!!!!!!!!!!!!!
// class Thermostat {
//   constructor(fahrenheit) {
//     this._kelvin = (5 / 9) * (fahrenheit - 32) + 273.15;
//   }

//   get temperature() {
//     return this._kelvin - 273.15;
//   }

//   set temperature(celsius) {
//     return this._kelvin = celsius + 273.15;
//   }
// }

//!======================================= Example ( Method Then and Promise ) ===============================
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer налаштований правильно, щоб відобразити позитивну відповідь сервера
//   let responseFromServer = true;

//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
//   makeServerRequest.then(result => {
//     console.log(result);
//   })
// });

//!============================================== Example ( Method test() ) ============================================
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);  //?Повертає true or false. Знаходить сбіг чи ні.
// console.log(result);
//!================================================ Example(Method match) ===================================================
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);
// console.log(result);
// //? Метод для вилучення частинки строки що в душках після .match !!!
//!============================================= Example
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi;
// let result = quoteSample.match(vowelRegex);
// console.log(result);
//!============================================= Example
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou^0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);
//!================================================== Example (All methods match()) ============================
//?1.Користувачі можуть використовувати лише алфавітно-цифрові символи.
//?2.Числа повинні бути лише в кінці імені користувача. У кінці їх може бути нуль або більше. Ім’я користувача не може починатися з числа.
//?3.Літери в імені користувача можуть бути нижнього та верхнього регістру.
//?4.Імена користувачів повинні містити щонайменше два символи. Ім’я користувача з двох символів може містити лише літери алфавіту.

//?First example!!!
// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// let result = userCheck.test(username);
// console.log(result)

//? ^ - start of input
//? [a-z] - first character is a letter
//? [a-z]+ - following characters are letters
//? \d*$ - input ends with 0 or more digits
//? | - or
//? ^[a-z] - first character is a letter
//? \d\d+ - following characters are 2 or more digits
//? $ - end of input

//?Second example!!!
// let username = "JackOfAllTrades";
// const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
// let result = userCheck.test(username);
// console.log(result);

//? ^ - start of input
//? [a-z] - first character is a letter
//? [0-9]{2,} - ends with two or more numbers
//? | - or
//? [a-z]+ - has one or more letters next
//? \d* - and ends with zero or more numbers
//? $ - end of input
//? i - ignore case of input

//!=================================================== Example проверить отсюда!!!!!!!!!!
// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Змініть цей рядок
// let result = myRegex.test(myString); // Змініть цей рядок
// // Після проходження завдання поекспериментуйте з myString, щоб поглянути як працює групування
// console.log(result);

// Пройдено:Регулярний вираз myRegex має повернути true для рядка Franklin D. Roosevelt
// Пройдено:Регулярний вираз myRegex має повернути true для рядка Eleanor Roosevelt
// Пройдено:Регулярний вираз myRegex має повернути false для рядка Franklin Rosevelt
// Пройдено:Регулярний вираз myRegex має повернути false для рядка Frank Roosevelt
// Пройдено:Регулярний вираз myRegex має повернути false для рядка FranklinRoosevelt
// Пройдено:Регулярний вираз myRegex має повернути false для рядка EleanorRoosevelt
// Пройдено:Використайте .test(), щоб протестувати регулярний вираз.
// Пройдено:Результат має повернути true.

// //!============================================= Example
// Пройдено:Використайте .replace() для пошуку та заміни.
// Пройдено:Ваш регулярний вираз має замінити рядок one two three на рядок three two one
// Пройдено:Не змінюйте останній рядок.
// Пройдено:fixRegex має використати принаймні три групи захоплення.
// Пройдено:replaceText має використати підрядки в дужках (тобто n-ний підрядок $n відповідає n-ній групі захоплення).

// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);
// console.log(result);

//!============================================ Example
// function zeroArray(m, n) {
//   let newArray = [];
//   for (let i = 0; i < m; i++) {
//     let row = []; /* <-----  row has been declared inside the outer loop.
//      Now a new row will be initialised during each iteration of the outer loop allowing
//      for the desired matrix. */
//     for (let j = 0; j < n; j++) {
//       row.push(0);
//     }
//     newArray.push(row);
//   }
//   return newArray;
// }
// let matrix = zeroArray(3, 2);
// console.log(matrix);

// function zeroArray(m, n) {
//   // Створіть 2-D масив із m-рядків m та n-стовпчиків нулів
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < m; i++) {
//     // Додайте m-ий рядок до newArray

//     for (let j = 0; j < n; j++) {
//       // Додає n нулів до поточного рядка, щоб створити стовпчики
//       row.push(0);
//     }
//     // Штовхає поточний рядок, який тепер містить n нулів, до масиву
//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);

//!========================================== Example
// //? Як то працює??
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Змініть код лише під цим рядком
// newArr.splice(0,0,[...arr])
//     // Змініть код лише над цим рядком
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));

// //?Чому два рази додається масив??? ПОДИВИСЬ!!!

//!================================================ Example

// function quickCheck(arr, elem) {
//   // Змініть код лише під цим рядком
// if(arr.indexOf(elem) === -1){
//   return false;
// } else {
//   return true;
// }
//   // Змініть код лише над цим рядком
// }

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// console.log(quickCheck([3, 5, 9, 125, 45, 2], 125))

//!================================================= Example (cycle for) =================================================
// //? Скрипт має повертати новий масив з масиваит в яких немає elem!!!
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Змініть код лише під цим рядком
//   for(let i = 0; i < arr.length; i++) {
//     if(!arr[i].includes(elem)) {
//       newArr.push(arr[i]);
//     }
//   }
//   // Змініть код лише над цим рядком
//   return newArr;
// }

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

//!=============================================== Example (Object methods) =========================================
// const foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28
// };
// //?Додавання властивостей до об'єкта !
// // Змініть код лише під цим рядком
// foods.bananas = 13;
// foods['grapes'] = 35;
// const straw = 'strawberries';
// foods[straw] = 27
// // Змініть код лише над цим рядком

// console.log(foods);

//!===================================== Example ( Object methods .hasOwnProperty() & in ) ==============
// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(userObj) {
//   // Змініть код лише під цим рядком
//   // let result = "Alan" in userObj && "Jeff" in userObj   //? Method in
//   // && "Sarah" in userObj && "Ryan" in userObj;
// let result = userObj.hasOwnProperty("Alan") && userObj.hasOwnProperty("Jeff") //? Method .hasOwnProperty
//  && userObj.hasOwnProperty("Sarah") && userObj.hasOwnProperty("Ryan");
//  return result;
//   // Змініть код лише над цим рядком
// }

// console.log(isEveryoneHere(users));
//!================================================ Example (Objects and Cycle for in) ====================================
// const users = {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

// function countOnline(allUsers) {
//   // Змініть код лише під цим рядком
// let summTrue = 0;
// for(const user in allUsers) {
//   // console.log(allUsers[user].online);
//   if(allUsers[user].online === true){
//     summTrue += 1;
//   }
// }
// return summTrue;
//   // Змініть код лише над цим рядком
// }

// console.log(countOnline(users));
//!============================================================= Example ( Method Object.keys() ) ==============
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function getArrayOfUsers(obj) {
//   // Змініть код лише під цим рядком
// return Object.keys(obj);
//   // Змініть код лише над цим рядком
// }

// console.log(getArrayOfUsers(users));
//!=========================================================== Example (Push item for Object) =================================
// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// function addFriend(userObj, friend) {
//   // Змініть код лише під цим рядком
// userObj.data.friends.push(friend);
// return userObj.data.friends;
//   // Змініть код лише над цим рядком
// }

// console.log(addFriend(user, 'Pete'));
//!================================================== Example ====================================
//?Метод reverse() працює лише на масивах для того ми строку спочатку розбиваємо , потім перевертаємо і знову об'єднуємо.
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));
//!=================================================== Example ( Factorial ) =======================================================
// function factorialize(num) {
//   if(num === 0 || num === 1){
//     return 1;
//   }else {
//     return num * factorialize(num -1);
//   }
// }

// console.log(factorialize(5));
// //? Факторіал це добуток всіх чисел від найменьшого до данного. Тобто: 1*2*3*4*5 = 120
//!======================================================== Example (Method split and Cycle for) =============================
//?Функція для виводу кількості букв в найдовшому слові в реченні
// function findLongestWordLength(str) {
//   let maxLength = 0;
//   const words = str.split(" ");
//   for(let i = 0; i < words.length; i++){
//     console.log(words[i]);
//     if(words[i].length > maxLength){
//       maxLength = words[i].length;
//     }
//   }
//   return maxLength;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//!=================================================== Example (Cycle for) ============================
//?Тут ми повертаємо масив з самою великою цифрою(костильний метод але працює!!!)
// function largestOfFour(arr) {
//   let result = 0;
//   let resultt = [];
//   for(let i = 0; arr.length > i; i++) {
//     for(let k = 0; arr[i].length > k; k++) {
//       console.log(arr[i][k]);
//       if(result < arr[i][k]){
//         resultt.pop(arr[i]);
//         resultt.push(arr[i]);
//       }
//     }
//   }
//   return resultt;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//!=================================== First Example (Double cycle for and meyhod push) ===========================
// function largestOfFour(arr) {
//   let result = [];
//   for(let i = 0; arr.length > i; i++) {
//     let currentElement = arr[i][0];        //? Змінні створюємо завжди перед циклами чи розгалудженнями де їх будемо використовувати
//     for(let k = 0; arr[i].length > k; k++) {
//       if(currentElement < arr[i][k]){
//         currentElement = arr[i][k];
//         console.log(currentElement);     //? Запитати чому тут 6 цифр виводиться в консолі
//       }
//     }
//     result[i] =  currentElement;    //? Ініціазація найбільшої цифри з кожного насиву
//   }
//   return result;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

//?1.Створіть змінну для зберігання результатів у вигляді масиву.
//?2.Створіть зовнішній цикл для перебору зовнішнього масиву.
//?3.Створіть другу змінну, яка міститиме найбільше число, і ініціалізуйте її першим числом.
//? Це має бути поза внутрішнім циклом, тому його не буде перепризначено, доки ми не знайдемо більше число.
//?4.Створіть зазначений внутрішній цикл для роботи з підмасивами.
//?5.Перевірте, чи є елемент підмасиву більшим за поточне найбільше число, що зберігається. Якщо так, то оновіть число в змінній.
//?6.Після внутрішнього циклу збережіть найбільше число у відповідній позиції всередині масиву результатів.
//?7.І, нарешті, повертаємо зазначений масив.
//!================================== Second Example (Methods map , reduce and Ternary operator) ============================
// function largestOfFour(arr) {
//   return arr.map(function(group) {  //?Методом map масив масивів розбиваємо на частини. На масиви.
//     // console.log(group);
//     return group.reduce(function(prev, current) {   //? prev попереднє значення. current поточне значення
//       // console.log(prev);
//       // console.log(current);
//       return current > prev ? current : prev;    //?Порівняння попереднього значення з поточним.
//     });
//   });
// }
//!================================== Third Example (map() && bind() ) ========================================================
// function largestOfFour(arr) {
//   return arr.map(Function.apply.bind(Math.max, null));
// }
// //!================================== Fourth Example ()
// function largestOfFour(arr, finalArr = []) {
//   return !arr.length
//     ? finalArr
//     : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
// }

// //! Ці два приклади розібрати!!!!!!!!!!!!!

//!=================================== Example ( Method slice or method endsWith() ) ===============================
// function confirmEnding(str, target) {
// const result = str.slice(-target.length) === target;
//   return result;
// }
//?Функція для порівняння строки і таргету чи останні елементи співпадають
// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
// console.log(confirmEnding("Connor", "n"));
// console.log(confirmEnding("Congratulation", "on"));

// function confirmEnding(str, target) {
//   const result = str.endsWith(target);
//   return result;
// }

//!========================================= Example (Methods repeat() or Cycle for or newArray + join) ==================
// function repeatStringNumTimes(str, num) {
//   return str.repeat(num);
// }

// console.log(repeatStringNumTimes("abc", 3));

// function repeatStringNumTimes(str, num) {
//   let result = "";
//   for(let i = 0; i < num; i++) {//? Повторюємо цикл for стільки разів скільки у нас вказано в num. За кожним разом додаємо цілу str
//     console.log(str[i]);
//     result += str;
//   }
//   return result;
// }

// function repeatStringNumTimes(str, num) {
//   let result = new Array(num + 1).join(str);   //?Створюємо новий масив. Далі в дужках до num додаємо 1 для того щоб був ундекс 3.
//   //? Так як в нас починає лічити з 0. Далі 3 рази перетворюємо новий масив з str в строку. Та повертаємо результат.
//   return result;
// }

//!========================================= Example
// function truncateString(str, num) {     //?Дуже костильний варіант але працює(Перемудрив) ТАК НЕ ПИСАТИ!!!
//   if(str.length > num) {
//     let result = str.split("").slice(0, num);
//     result.push("...");
//     return console.log(result.join(""));
//   } else {
//     return console.log(result = str);
//   }
// }
//? Задача була якщо num меньше ніж довжина str то скорочуємо запис і додаємо вкінці три крапки. Якщо ні то виводимо цілий рядок.
// truncateString("A-tisket a-tasket A green and yellow basket", 8);
// truncateString("Peter Piper picked a peck of pickled peppers", 11);
// truncateString("A-", 1);
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

// function truncateString(str, num) {   //?Звичайна функція з порівнянням
//   let result = "";
//   if(str.length > num) {
//     result = str.slice(0, num) + "...";
//   } else {
//     result = str;
//   }
//   return console.log(result);
// }

// function truncateString(str, num) {    //?Вирішення тернарним оператором
//   return str.length > num ? str.slice(0, num) + "..." : str;
// }

//!====================================== Example (Cycle for and if or method find() or if else and slice) =======================
// function findElement(arr, func) {
//   let num = 0;
//   for(let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if(func(num)) {
//       return num;
//     }
//   }
//   return undefined;
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));//?Якщо стрілочна функція повертає true то повертає той num з масиву який підходить

// function findElement(arr, func) {   //? Метод find() повертає перший елемент що підходить за критеріями
//   return arr.find(func);
// }

// function findElement(arr, func) {
//     console.log(arr[0]);  //?Консоль виводить всі елементи з масиву до того поки не знайде підходящий
//   if (arr.length > 0 && !func(arr[0])) {//? В умові вказано якщо довжина масиву більша за 0(тобто 1 елемент) і якщо перший елемент не true
//     return findElement(arr.slice(1), func); //?То повертаємо всі масиви по 1 елементу і порівнюємо їх
//   } else {
//     return arr[0];   //? Якщо ні то поверне undefined як результат вкладеної функції
//   }
// }

//!============================================== Example (check boolean) =================================
// function booWho(bool) {
//     if(bool === true || bool === false) {
//         return true;
//     } else {
//         return false;
//     }
//   }

//   console.log(booWho(null));
//   console.log(booWho(true));

//   function booWho(bool) {
//     if(typeof bool === "boolean") {    //?Метод typeof - перевірка типу данних!
//         return true;
//     } else {
//         return false;
//     }
//   }

//!========================================= Example (Callback methods split("") && .map() && toUpperCase() && join(""))
// function titleCase(str) {
//     return result = str.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(" ");
//   }

//   console.log(titleCase("I'm a little tea pot"));
//   console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
//   console.log(titleCase("sHoRt AnD sToUt"));

//!========================= Example (Cycle for in && split("") && join(" ") && slice() && toUpperCase() && toLowerCase())=======
// function titleCase(str) {   //?Методом split(" ") перетворює строку в масив розбиваючи його роздільником всередині методу.
//   const newTitle = str.split(" ");
//   const updatedTitle = [];
//   for (let st in newTitle) {   //? Циклом for in добираємось до індексів кожного слова.Далі слово з нулевим індексом робимо з великої літери.
//     updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase(); //?А всі інші слова вирізаємо методом slice(1)
//   }           //?Та робимо з малої букви.
//   return updatedTitle.join(" "); //?Вкінці все повертаємо назад у рядом з розділювачем мотодом join("")
// }
//!================= Example (Methods map() and replace() and others...) ==================================
// function titleCase(str) {
//     return str
//       .toLowerCase()
//       .split(" ")
//       .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))  //?replace() метод з рядками для їхньої заміни
//       .join(" ");
//   }
//!================================================== Example (splice and slice) ==================================
// function frankenSplice(arr1, arr2, n) {
//     const newArr1 = arr1.slice();
//     const newArr2 = arr2.slice();
//     newArr2.splice(n,0, ...newArr1);     //?Перший елемент це n - індекс з якого починає вставляти newArr1,другий 0 каже що нічого видаляти
//     console.log(newArr2);        //?не потрібно.А третій це копія масиву для того щоб був один масив а не масив в масиві!!!
//   }

//   frankenSplice([1, 2, 3], [4, 5, 6], 1);
//   frankenSplice([1, 2, 3], [4, 5], 1);
//   frankenSplice([1, 2], ["a", "b"], 1);
//   frankenSplice([1, 2, 3, 4], [], 0);

//   function frankenSplice(arr1, arr2, n) {   //?Приклад зі spread оператором(копіями масивів) Дуже спрощений!!
//     return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
//   }
//!================================================== Example (Cycle for or callback filter()) ===============================
// function bouncer(arr) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i]) filteredArr.push(arr[i]);
//     }
//     return filteredArr;
//   }

// console.log(bouncer([7, "ate", "", false, 9]));

// function bouncer(arr) {    //?Фільтер перевіряє чи кожний елемент булевий та повертає ті елементи що true.
//   return arr.filter(Boolean);
// }
//!========================================== First Example ( push() && sort() && indexOf()) ==================================
// function getIndexToIns(arr, num) {
//   arr.push(num);           //?Тут до масиву пушимо аргумент num щоб пізніше дізнатися його місце в масиві.
//   arr.sort(function(a, b){       //?Потрібен return a - b щоб сортувати цифри не 1 12 22 3 а як мають бути від найменьшого до найбільшого.
//     return a - b;
//   });
//   return arr.indexOf(num);       //? Індексом дізнаємося його місце в масиві.
// }

// console.log(getIndexToIns([40, 60], 50));
// console.log(getIndexToIns([], 1));
// console.log(getIndexToIns([2, 20, 10], 19));
//!======================================= Second Example (Cycle for(BubleSort) && push() && indexOf() ) =====================
// function getIndexToIns(arr, num) {
//   arr.push(num);
//   for(let i = 0; i < arr.length - 1; i++) {
//     for(let k = 0; k < arr.length - 1 - i; k++) {
//       if(arr[k] > arr[k + 1]) {
//         const temp = arr[k];    //? Змінна для тимчасового збереження значення. Для циклу щоб не втрачати значення та замінювати його.
//         arr[k] = arr[k + 1];
//         arr[k + 1] = temp;
//       }
//     }
//   }
//   return arr.indexOf(num);
// }
//!============================================= My Example (Methods join(" ") && toLowerCase() && split() and Cycle for) ==============
// //?Перевіряємо чи всі букви з першого слова масиву є в другому слові масиву.
// function mutation(arr) {
//   const mass = arr.join(" ").toLowerCase().split(" ");
//   const firstWord = mass[0];
//   const secondWord = mass[1];
//   for(const itemWord of secondWord) {
//     if(!firstWord.includes(itemWord)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
// console.log(mutation(["Alien", "line"]));
// console.log(mutation(["floor", "for"]));
// console.log(mutation(["ate", "date"]));
// console.log(mutation(["Noel", "Ole"]));

//!======================================== Another First Example (Cycle for) =================================================
// //? Тут дуже спрощенно ми одразу в змінні зберігаємо значення в нижньому регісті. Так само перебираємо друге слово циклом.
// function mutation(arr) {
//   const test = arr[1].toLowerCase();
//   const target = arr[0].toLowerCase();
//   for (let i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;   //?Тут така умова тому що якщо indexOf не знаходить значення то повертає -1
//   }
//   return true;
// }
//!==================================== Another Second Example ( ) ========================================================
// //?Тут ми також одразу беремо значення по індексам без змінних і переводимо в нижній регістр а також використовуємо split("")
// //? Для з'єднання в масив для колл бек функції every() що працює з масивами та перевіряє всі його елементи на співпадіння(true or false)
// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split("")
//     .every(function(letter) {
//       return arr[0].toLowerCase().indexOf(letter) !== -1; //?Тут ми перший елемент масиву виводимо в нижній регістр та перевіряємо
//     }); //? з другим елементом який вже входить як аргумент letter . Та якщо не дорівнює результат -1 то true.
// }
//!================================ First Example (Cycle for and Method slice() ) ===========================================
// function chunkArrayInGroups(arr, size) {
//   const result = [];
//   for(let i = 0;i < arr.length; i += size) {
//     result.push(arr.slice(i, i+size));
//   }
//   return result;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

//? ======================================= Second Example ( Cycle while and Method Splice() ) ==============================
// function chunkArrayInGroups(arr, size) {
//   result = [];
//   while(arr.length > 0) {
//     result.push(arr.splice(0, size));
//   }
//   return result;
// }

//!====================================== (Cycle for in and Method Push() && hasOwnProperty() ) =========================================
//?Ця функція це class і нижче написаний метод який додає властивості нового об'єкта с конструктора в масив.
// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let duck = new Bird("Donald");
// let canary = new Bird("Tweety");

// let ownProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }
// console.log(ownProps);
//!=================================================== Example (class && prototype ) ========================================
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.numLegs = 2;   //?Звертаємося до prototype классу Dog щоб додати туди властивість. Яка автоматично переходить і до beagle!
// let beagle = new Dog("Snoopy");
// console.log(beagle);          //?В цьому випадку показує тільки ім'я пса.
// console.log(beagle.numLegs);  //?Тут ми отримуємо доступ до властивості numLegs!
//!================================================== Example (Class and take property) =======================================
// //?Ця функція додає загальні властивості в ownProps та властивості prototype в prototypeProps!
// function Bird(name) {
//   this.name = name;  //own property
// }

// Bird.prototype.numLegs = 2; // prototype property

// let duck = new Bird("Donald");

// let ownProps = [];
// let prototypeProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// console.log(ownProps);
// console.log(prototypeProps);
//!================================================== Example (Method isPrototypeOf() ) ======================================
// function Dog(name) {
//   this.name = name;
// }
//?Метод для того щоб перевірити чи beagle є прототипом від Dog
// let beagle = new Dog("Snoopy");
// console.log(Dog.prototype.isPrototypeOf(beagle));
//!============================================== Example (Class prototype && instanceof) ===========================================
// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype = {
//   constructor: Cat,
// };

// function Bear(name) {
//   this.name = name;
// }

// Bear.prototype = {
//   constructor: Bear,
// };

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
// Bear.prototype = Object.create(Animal.prototype);   //?Тут прототип Bear успадковує властивості Animal.prototype !!!
// Animal.prototype.eat();
// let cat = Object.create(Animal.prototype); //?Тут ми створюємо прототипи звірів які беруть всі властивості Animal.prototype(Не Cat & Bear)!!
// let dog = Bear("Baddy");          //? Цей прототип іде від классу Bear!!!
// let bear = new Bear("Barry");
// bear.eat();
// cat.eat();
// console.log(bear instanceof Animal);    //? Ці два приклади будуть true тому що вонм ідуть від прототипа Animal.prototype !!!!
// console.log(cat instanceof Animal);
// console.log(dog instanceof Animal); //?Тут false тому що він іде від классу Bear.

// console.log(bear);
// console.log(Bear.prototype);
// Bear.prototype.constructor = Bear;   //?Перевірка хто чий прототип. Різниця в консолях вище і нижче!!!
// console.log(Bear.prototype);
//!=================================== Example (Changing the inheriting method) ===================================
//?Зміна успадковуючого метода!!!

// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// Penguin.prototype.fly = function() {
//   return "Alas, this is a flightless bird.";
// }

// let penguin = new Penguin();
// console.log(penguin.fly());   //?Замість I am flying! Виводить Alas, this is a flightless bird. Тому що penguin одразу шукає метод у Penguin
// //? А потім тільки у Bird!
//!============================================ Example (Method Mixine) ==============================
//?Метод який дозволяє наслідувати другим об'єктам чи классам функції чи додаткові обробники тощо...
// let bird = {
//   name: "Donald",
//   numLegs: 2
// };

// let boat = {
//   name: "Warrior",
//   type: "race-boat"
// };

// const glideMixin = function(obj) {
//   obj.glide = function() {
//     console.log("Move smoothly");
//   }
// };
// glideMixin(bird);
// glideMixin(boat);

// bird.glide();
// boat.glide();
//!===================================== Example ( Private property ) ==============================================
//?Приватна властивість. Альтернатива оголшенню приватної властивості через знак #
// function Bird() {
//   let weight = 15;

//   this.getWeight = function () {
//     return weight;
//   };
// }

// let bird = new Bird();
// bird.getWeight();
//!============================= Example ( IIFE - The expression of an immediately called function ) ======================================
//?(Вираз негайно викликаної функції). Позначається двома дужками в кінці а огортається дужками функція.
// (function () {
//   console.log("A cozy nest is ready");
// })();

// function message () {        //?Це звичайна функція з назвою.
//   console.log("a cozy nest is ready");
// }
// message();       //?Тут ми її викликаємо.

//!============================================== Example (IIFE two Mixines) ======================================================
//?Два міксина. Та нижче негайне їх поєднання.
// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };
//?Вираз негайного поєднання міксинів.
// let funModule = (function () {
//   return {
//     isCuteMixin: function(obj) {
//       obj.isCute = function() {
//         return true;
//       };
//     },
//     singMixin: function(obj) {
//       obj.sing = function() {
//         console.log("Singing to an awesome tune");
//       };
//     }
//   }
// })();
//!=================================================== Example (Objects .this and method splice() ) ========================================
// вкладки – це масив заголовків до кожного сайту, відкритого у вікні
// const Window = function(tabs) {
//   this.tabs = tabs; // Ми зберігаємо записи про масив всередині об'єкта
// };

// // Коли ви об'єднуєте два вікна в одне
// Window.prototype.join = function(otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // Коли ви відкриєте нову вкладку в кінці
// Window.prototype.tabOpen = function(tab) {
//   this.tabs.push('new tab'); // Давайте поки відкриємо нову вкладку
//   return this;
// };

// // Коли ви закриєте вкладку
// Window.prototype.tabClose = function(index) {

//   const tabsBeforeIndex = this.tabs.splice(0, index); // Отримайте вкладки перед вкладкою
//   const tabsAfterIndex = this.tabs.splice(1); // Отримайте вкладки після вкладки
// console.log(tabsBeforeIndex);
// console.log(tabsAfterIndex);
//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // З'єднайте їх разом
// // console.log(this.tabs);

//   return this;
//  };

// // Давайте створимо три вікна браузера
// const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Ваша поштова скринька, диск та інші робочі сторінки
// const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Соціальні сторінки
// const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Розважальні сайти

// // Тепер виконайте закриття, відкриття вкладки та інші операції
// const finalTabs = socialWindow
//   .tabOpen() // Відкрийте нову вкладку для мемів з котами
//   .join(videoWindow.tabClose(2)) // Закрийте третю вкладку у вікні відео та приєднайтеся
//   .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);
// //?Зверни увагу як працює метод splice() з одним аргументом. Він вирізає від цього індекса і до кінця!!!
// const arrr = ['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp'];
// console.log(arrr);
// const arr1 = arrr.splice(1);
// console.log(arr1);

//!========================================= Example (Remove && add item) ======================================================
//? Заміна змінних без мутування глобальної змінної
// const bookList = [
//   "The Hound of the Baskervilles",
//   "On The Electrodynamics of Moving Bodies",
//   "Philosophiæ Naturalis Principia Mathematica",
//   "Disquisitiones Arithmeticae",
// ];

// //? Для додавання книг до массиву.
// function add(bookList,bookName) {
//   const item = [...bookList];
//   item.push(bookName);
//   return item;
// }

// //?Для заберання потрібної нам книги з массиву.
// function remove(bookList,bookName) {
//   const itemm = [...bookList];
//   const book_index = itemm.indexOf(bookName);
//   if (book_index >= 0) {
//     itemm.splice(book_index, 1);
//     return itemm;
//   }
// }
// console.log(add(bookList, "A Brief History of Time"));
// console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
// console.log(remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"));
// console.log(bookList);  //?Тут ми бачимо що основний масив не мутується.
//!===================================== Example (Cycle for and callback map() && filter() && reduce() ) =====================================
//?Переробимо функцію з циклу for
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];
// //?
// function getRating(watchList) {
//   const filteredWatchList = watchList.filter(item => (item.Director) === "Christopher Nolan").map(item => {
//     return Number(item.imdbRating);
//   });
//   let averageRating = filteredWatchList.reduce((accum, item, index, array) => { //? reduce - накопичує рейтинги.
//     accum += item;
//     return accum;
//   }, 0);
// averageRating = averageRating / filteredWatchList.length;   //? Тут ми ділимо загальну сумму рейтингу на довжину всіх елементів рейтингу.
//   return averageRating;                //? Та отримуємо середній рейтинг.
// }
// console.log(getRating(watchList));

// const filteredWatchList = watchList.filter(item => (item.Director) === "Christopher Nolan").map(item => {
//   return Number(item.imdbRating);
// });
// console.log(filteredWatchList);   //?Для перевірки що повертає ця змінна. Масив рейтингім з Christopher Nolan!!!
//?Метод filter() щоб дістати ті ж самі елементи тільки вже з рейтингом 8.0 або вище!А методом map() вже виводимо потрібні поля об'єктів
// const filteredList = watchList.filter(item => Number(item.imdbRating) >= 8).map(item => {
//   return {title:item.Title, rating:item.imdbRating};
// });

// console.log(filteredList);

//?Два альтернативні скрипта для отримання двух значеннь з масиву об'єктів

// const ratings = [];
// for (let i = 0; i < watchList.length; i++) {
//   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
// }
//?ЗВЕРНИ УВАГУ!!! Як можна через map() дістати більше одного значення!!!
// const ratings = watchList.map(item => {
//  return {title:item.Title, rating:item.imdbRating};
// });

// console.log(JSON.stringify(ratings));
//!============================================ Example (Alternative method map() => Cycle for & forEach) ================================
//?Альтернатива написання методу map() звичайним циклом for.
// Array.prototype.myMap = function(callback) {
//   const newArray = [];
//   for(let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i],i,this));  //?Тут ми прописуємо всі три аргумента методу map(Сам елемент,індекс цього елементу,массив)
//   }
//   return newArray;
// };
//?Альтернативне написання методу map() через forEach
// Array.prototype.myMap = function (callback) {
//   const newArray = [];
//   this.forEach((element, index, originalArr) =>
//     newArray.push(callback(element, index, originalArr))
//   );
//   return newArray;
// };
//?Альтернативний метод .map() вже фактично написаний в консолі.
// console.log([23, 65, 98, 5, 13].myMap(item => item * 2));
// console.log(["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()));
// console.log([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]));
//!================================================== Example (Alternative methods filter() ) ======================================
//?Альтернатива методу filter() циклом for і розгалудженням з умовою колбеку.
// Array.prototype.myFilter = function(callback) {
//   const newArray = [];
//   for(let i = 0; i < this.length; i ++) {
//     if(callback(this[i], i, this)){
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// };

//! ЦЕ ТРЕБА ДОПИСАТИ!!!!!!!!!!!!ЯКЩО Є СПОСОБИ111111111111111111111111111111111111111111111111111111111111111111111111111111111111

//?Альтернатива методу filter() методом forEach.
// Array.prototype.myFilter = function(callback) {
//   const newArray = [];
//   this.forEach((item, index, array) => {
//  callback(item, index, array) ?
//   newArray.push(item)
// });
//   return newArray;
// };

// console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));
// console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"));
// console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index));
//!============================================== Example (Method splice function) =================================================
//?Розбір методу slice в функції. Повертає копію масиву не змінюючи оригінал. Та бере елементи від першого індексу до другого НЕ ВКЛЮЧНО!!!
// function sliceArray(anim, beginSlice, endSlice) {
// const newArray = anim.slice(beginSlice, endSlice);
// return newArray;
// }

// const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
// console.log(sliceArray(inputAnim, 1, 3));
//!============================================ Example (Method concat) ========================================================
//?Склеювання двух масивів без мутації оригинальниї маствів(без їхньої зміни)
// function nonMutatingConcat(original, attach) {
// const newArr = original.concat(attach);
// return newArr;
// }
// const first = [1, 2, 3];
// const second = [4, 5];
// console.log(nonMutatingConcat(first, second));
//!=============================================== Example ( reduce() ) =============================================================
// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];
//?В цьому прикладі ми рахуємо загальну кількість віку. sum - це акумулятор куди додаються числа(його початкове значення в кінці 0)
//? user - це кожен об'єкт масиву. user.age - це значення поля age в кожному об'єкті тобто вік(число яке додається на кожній ітерації)
// const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
// console.log(sumOfAges);
//? obj - це значення акумулятора який вказано вкінці як пустий об'єкт {}.obj[user.name] - це значення ім'я юзерів поставленне замість назви.
//? user.age - це значення age. Тобто виходить John: 34 і так далі.
// const usersObj = users.reduce((obj, user) => {
//   obj[user.name] = user.age;
//   return obj;
// }, {});
// console.log(usersObj);

//!=============================================== Example ( map() && filter() || reduce() ) ===================================
//? Методи filter() та map()
// const squareList = arr => {
//   const result = arr.filter(item => item > 0 && Number.isInteger(item)).map(item => {//?Number.isInteger() перевіряє чи це ціле число
//     return item * item;
//   })
//   return result;
// };
//? Метод reduce()
// const squareList = arr => {
//   return arr.reduce((accum, item) => {
//     return Number.isInteger(item) && item > 0  //?Тернарний оператор фільтрує дві умови.
//     ? accum.concat(item * item)              //?Якщо так то виводить до акумулятора(тобто масива) це число в квадраті(методом concat() додає)
//     : accum;                                //? Якщо ні то просто акумулятор не змінюється.
//   }, []);
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);
//! ================================================ Example ( sort() ) ======================================
// function reverseAlpha(arr) {
//   return arr.sort(function(a, b) {
//     return a === b ? 0 : a > b ? 1 : -1;     //? Метод sort() та подвійний тернарний оператор. Якщо умова a < b то сортування буде навпаки.
//   });
// }

// function reverseAlpha(arr) {
//   return arr.sort(function(a, b) {
//     return a.localeCompare(b); //?Новіший метод через localeCompare(). Якщо навпаки поставити в умові a та b то буде сортування навпаки.
//   });
// }

// console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));

//!======================================== Example ( sort() & [...arr] || concat() || slice() ) ============================================
// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {    //? [...arr] - Спред оператор щоб не змінювати оригінальний масив методом sort()
// return [...arr].sort((a,b) => a - b);
// }

// function nonMutatingSort(arr) {
//   return arr.slice().sort((a,b) => a - b);     //? Метод slice() щоб зробити копію масиву і також не змінювати оригінальний масив.
//   }

// function nonMutatingSort(arr) {
//   return arr.concat().sort((a,b) => a - b);     //? Метод concat() щоб зробити копію масиву і також не змінювати оригінальний масив.
//   }
// console.log(nonMutatingSort(globalArray));
// console.log(globalArray);
//!======================================= Example ( split() && replace() || replaceAll() ) ============================================
//? Робота методу replace() - замінює перший елемент з вказаному в аргументі на інший або всі якщо це replaceAll(). Працює на РЯДКАХ!!!
// const names = "It's, test!string!have.extra&punctuation%marks*"
// console.log(names.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' '));//?Тут обидва приклади працюють однаково тому що g - глобальний знак.
// console.log(names.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ')); //?Замінює всі елементи глобально!!!

// const itLanguage = "HTML.html, CSS.html, JS.html";
// console.log(itLanguage.replaceAll("html", "js")); //? Тут замінює всі елементи на вказаний.
// console.log(itLanguage.replace("html", "js"));    //? Тут тільки перший елемент!!!
//? Функція для заміни всіх розділових знаків пробілами та переробки str в массив.
// function splitify(str) {
//   return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").split(" ");
// }
//? Більш проста альтернатива з одним методом.
// function splitify(str) {
//   return str.split(/\W/);
// }

// console.log(splitify("Hello World,I-am code"));
//!================================================== Example ( join() ) =========================================================
//? Завдання без методу replace() - замість знаків пунктуації (в данному випадку - ) поставити пробіли.
// function sentensify(str) {
// return str.split(/\W/).join(" ");//? Переводимо str в масив і прибираємо знаки пунктуації ставлячи замість них пробіли.І повертаємо в str
// }

// console.log(sentensify("May-the-force-be-with-you"));
//!========================= Example ( split() && join() && toLowerCase() && trim() && filter() && reduce() ) ==============================
//?В задачі треба замість пробілів між словами зробити - але на початку і в кінці не повинно бути пробілів та не повинно бути замість
//? двох пробілів двух тире(МАЄ БУТИ ОДНЕ!!!) і всі слова в нижньому регістрі.

//?Перший спосіб.Розділяємо пробілом і робимо масив.reduce() - фильтрує та повертає елементи БЕЗ ПРОБІЛУ!
//?Повертаємо str та ставимо між словами розділювач ("-"). Переводимо в нижній регістр.
// function urlSlug(title) {
//   const splitReduce =  title.split(" ").reduce((accum, item) => {
//     return item !== "" ? accum.concat(item) : accum;
//   }, []);
//   return splitReduce.join("-").toLowerCase();
// }

//?Переводимо в нижній регістр.trim() - прибирає всі пробіли с початку і вкінці.
//?split() - з знаками прибирає всі пробіли розділювачі пробіли. А join("-") - додає між словами тире та повертає з масиву в str.
// function urlSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .split(/\s+/)
//     .join("-");
// }

//?split(" ") розділяє пробілом всі елементи та переводить в масив.filter() - відфільтровує пробіли (в массиві вони позначаються так "")
//?join("-") додає між словами розділювач тире та переводимо в str.Та в кінці переводимо всі слова в нижній регістр.
// function urlSlug(title) {
//   return title
//     .split(" ")
//     .filter(substr => substr !== "")
//     .join("-")
//     .toLowerCase();
// }
// console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
// console.log(urlSlug(" Winter Is  Coming"));

//!============================================ Example (Method every() && some() ) =======================================================
//? Метод every() - перевіряє чи всі елементи масиву відповідають умові. Повертає true або false.
// function checkPositiveEvery(arr) {
// return arr.every(item => item >= 0);
// }
// console.log(checkPositiveEvery([1, 2, 3, -4, 5]));

//?Метод some() - перевіряє чи хоча б один з елементів масиву відповідає умові. Також повертає true або false.
// function checkPositiveSome(arr) {
//   return arr.some(item => item >= 0);
// }
// console.log(checkPositiveSome([1, 2, 3, -4, 5]));

//!================================================ Example ( Currying function ) ====================================================
//?Найпростіший приклад каррінгу в функції. Корисна для того якщо ми не можемо отримати всі аргументи одночасно.
//?Наприклад коли якісь аргументи не доступні зараз. А будуть доступні пізніше. Можна виклик функції зберегти в змінній.
// function add(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }

// const add = x => y => z => x + y + z;
// console.log(add(10)(20)(30));
//!================================= Example (Math.min && max && abs && Cycle for && sort() && ternarnui operator) =======================
//? Функція для підрахунку суми всіх чисел в діапазоні тих що надається в масиві.
//?Вирішення через Math та цикл for.
// function sumAll(arr) {
//   let max = Math.max(arr[0], arr[1]);//?Дві змінні яким надається значення обох значень і за домогою Math дізнаємося мінімальне та максимальне.
//   let min = Math.min(arr[0], arr[1]);
//   let sumBetween = 0;                //?Накопичувач результату.
//   for (let i = min; i <= max; i++) { //?Цикл для підсумування результату.
//     sumBetween += i;
//   }
//   return sumBetween;
// }

//?Метод з використанням Math.abs() - відстань між. Значення відємне чи додатнє до 0.
// const sumAll = arr => {
//   const startNum = arr[0];
//   const endNum = arr[1];

//   const numCount = Math.abs(startNum - endNum) + 1;
// //?За допомогою формули дізнаємось сумму чисел в цьому діапазоні.
//   const sum = ((startNum + endNum) * numCount) / 2;
//   return sum;
// };

//?Такий же метод як і найперший але коротший без двух лишніх змінних!
// function sumAll(arr) {
//   let sumBetween = 0;
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sumBetween += i;
//   }
//   return sumBetween;
// }

//?За допомогою метода sort() та тернарного оператора.
// function sumAll(arr) {
//   const [first, last] = [...arr].sort((a, b) => a - b);//?sort() на кожній ітерації додає меньшому елементу + 1 та додає елемент в результат
//   return first !== last
//     ? first + sumAll([first + 1, last])
//     : first;
// }
// console.log(sumAll([1, 4]));
//!========== Example (Cycle for & Methods indexOf() & includes() & concat() & filter() & forEach() & new Set(add,delete,has)) ==============
//?Задача в якій треба вивести унікальні елементи (не повторювальні) з обох масивів(порівняти масиви)
//?Робимо функцію в функції щоб викликати її з першим масивом на другий і навпаки(якщо перший масив довший чи другий щоб працювала корректно)
// function diffArray(arr1, arr2) {
//   const newArr = [];
//   function onlyInFirst(first, second) {
//     for (let i = 0; i < first.length; i++) {
//       if (second.indexOf(first[i]) === -1) {  //?Тут indexOf перевіряє чи є елемент в другому масиві якщо ні (-1) то пушимо унікальний елемент
//         newArr.push(first[i]);
//       }
//     }
//   }
//   onlyInFirst(arr1, arr2);
//   onlyInFirst(arr2, arr1);
//   return newArr;
// }

//?Методи concat() - для об'єднання масивів в один, filter() - для фільтрації унікальних елементів і повернення їх в масив колбеком.
// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

//?Метод new Set має свої методи has для перевірки че є цей елемент в масиві, delete для видалення та add для додавання до масиву в forEach
// function diffArray(arr1, arr2) {
//   const difference = new Set(arr1);
//   arr2.forEach((ele) =>
//     difference.has(ele) ? difference.delete(ele) : difference.add(ele)
//   );
//   return Array.from(difference);
// }
//!ВАЖЛИВО!!! При методі reduce() якщо з умовою(тернарним оператором то push() не працює треба використовувати concat() ПАМ'ЯТАЙ!!!)
// function diffArray(arr1, arr2) {
//   return arr1.concat(arr2).reduce((accum, item) => {
//     return !arr1.includes(item) || !arr2.includes(item)
//       ? accum.concat(item)
//       : accum;
//   }, []);
// }
// console.log(diffArray([1,2,3,4,5,6],[7,8,9]));
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//!============================== Example (Cycle for && speed operator [...arr] && Methods includes() && push() ) ==========================
//? Завдання в якому треба повернути новий масив з тими елементами яких в масиві яких немає в аргументах.
// function destroyer(arr, ...arr1) {
//   const newArr = [];
//   for(let i = 0; i < arr.length; i ++) {
//     if(!arr1.includes(arr[i])){
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//!============================================== First Example (Double Cycle for && for in) ===============================================
//?Задача на співпадіння ключа та значення в source з масиву об'єктів source і якщо всі ключі та значення є в масиві то повертає масив з цим
//?об'єктом навіть якщо в ньому є ще якісь додаткові значення.
// function whatIsInAName(collection, source) {
//   const collectionMatches = [];//?Створюємо змінну з масивом щоб якщо не буде співпадіння поверне його або буде пушити співпадіння в нього.
//   for (let i = 0; i < collection.length; i++) { //?За допомогою for перебираємо колекцію масив об'єктів.
//     let foundMismatch = false; //?Тут початкове значення співпадіння є false.
//     // console.log(collection[i]); - Тут можемо побачити всі об'єкти.
//     for (const sourceProp in source) { //?За допомогою циклу for in перебираємо об'єкт що знахожиться в source.
//       // console.log(source[sourceProp]); //?Таким чином ми добераємось до самого значення об'єкта в sourse.
//       // console.log(source); //? Тут об'єкт {last: "Capulet"} або любий інший.
//       // console.log(sourceProp); //? Тут три рази в нас показує індекс last(Якщо б в масиві об'єктів було б більше об'єктів то ту б кількисть)
//       // console.log(collection[i][sourceProp]); //?Тут в нас одразу значення всіх елементів з об'єктів з ключом last:
//       if (collection[i][sourceProp] !== source[sourceProp]) {  //?Далі робимо якщо не дорівнює то змінюємо це значення на true.
//         foundMismatch = true;
//       }
//     }
//     if (!foundMismatch) {   //?Тут при протилежності цього значення пушим до масиву саме ту колекцію де співпадіння.Перед виходом с 1 циклу
//       collectionMatches.push(collection[i]);
//     }
// //?Це ми робимо для того що в нас подвійний цикл.І якщо би в другому циклі в умові ми просто поставили дорівнює то інколи в результаті
// //?де по два співпадіння і ключа і значення цей об'єкт пушився би по 2 рази. Так як цикл в циклі повторював би перевірку.
//   }
//   return collectionMatches;
// }
//?Цю функцію написати через for та for of не можливо. Тому що тут ми перебираємо об'єкти

//!======================================== Second Example ( filter() && Cycle for and Object.keys) ===========================================
// function whatIsInAName(collection, source) {
//   const sourceKeys = Object.keys(source);  //?Створюємо змінну зі значенням індексу об'єкта з яким порівнюємо значення.
// // console.log(sourceKeys);
//   return collection.filter(obj => { //?Фільтром перебираємо масив об'єктів.
//     for (let i = 0; i < sourceKeys.length; i++) { //?Циклом for перебираємо індекси об'єкта в source з яким порівнюємо індекси та значення
//       // console.log(source[sourceKeys[i]]); //?Самі значення.
//       // console.log(obj[sourceKeys[i]]);
//       if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {  //?Порівняння значень кожного об'єкта в масиві зі значеннями в об'єкті.
//         return false;
//       }
//     }
//     return true;
//   });
// }
//?Метод filter() повертає масив з тим значенням яке true якщо таке є або ж пустий масив. В if ставимо умову строге нерівно для того щоб
//?повернути false але якщо все ж таки ми знайшли збіги в значеннях то true. Бо якщо в подвійному циклі (в нашому випадку filter() та for)
//?Одразу повернути дорівнює та true то там де true по два ключа та два значення будуть будлюватися об'єкти.Тобто буде не коректно працювати.
//!================================== Third Example ( Methods Object.keys && filter() && every() ) ===================================
// function whatIsInAName(collection, source) {
//   const sourceKeys = Object.keys(source);
//   return collection
//     .filter(obj => sourceKeys
//       .every(key => obj[key] === source[key]));
// }
//?Самий короткий але і складний в розумінні спосіб. Метод filter() якщо true поверне з колекції ті об'єкти чи об'єкт який підходить.
//?Методом every() перевіряємо в умові ті об'єкти що підходять. ВАЖЛИВО every() - повертає true або false що і потрібно для filter() !!!

// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, bat: 2 }
//   )
// );

// console.log(
//   whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
//     apple: 1,
//   })
// );

// console.log(
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" },
//     ],
//     { last: "Capulet" }
//   )
// );
//!======================================== Example ( replace() && split() && join() toLowerCase() ) ==================================
//?Умова задачі треба розділити всі слова тире та прибрати зайві розділові знаки та перевести в нижній регістр(десь не було пробілів між словами)
// function spinalCase(str) {
//   const result = str.replace(/([a-z])([A-Z])/g, '$1 $2');  //?Перший replace() - ставить пробіли між словами без пробілів таких як AllThe
//   return result.replace(/[_ -\s]/g, "-").toLowerCase();  //?Другий прибирає розділові знаки та ставить між ними тире.Та в нижній регістр.
// }

// function spinalCase(str) {
//   return str
//     .split(/\s|_|(?=[A-Z])/)//?Переводимо рядок в масив прибираючі всі розділові знаки та розділяючи слова що з великої літери
//     .join("-")  //?Розділюємо слова тире(-) та переводимо їх в рядок а потім і в нижній регістр.
//     .toLowerCase();
// }

// function spinalCase(str) {
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2"); //? replace() додає пробіли між словами такими як AllThe тобто між двома словами без пробілу
//   return str
//     .toLowerCase() //?переводимо рядок в нижній регістр.
//     .split(/(?:_| )+/)  //? переводимо рядок в масив та прибираємо розділові знаки(пробіли включно)
//     .join("-");         //? Та повертаємо масив в рядок та розділюємо елементи рядка тире(-)
// }

// console.log(spinalCase('This Is Spinal Tap'));
// console.log(spinalCase("thisIsSpinalTap"));
// console.log(spinalCase("The_Andy_Griffith_Show"));
// console.log(spinalCase("Teletubbies say Eh-oh"));
// console.log(spinalCase("AllThe-small Things"));
//!======================================== Example (Recursive function of Fibonacci numbers ) =============================================
//?Рекурсивна функція чисел Фінабачі.Числа Фібаначі це кожне число починаючі з третього дорівнює сумі двух попередніх.
//?Тобто: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 і так далі.
//?Тут використовується стрілочна функція з рекурсією(функція яка викликає сама ж себе)
// const fib = (e) => {
//   if(e <= 1) {
//     return e;
//   } else {
//     return fib(e - 1) + fib(e - 2);
//   }
// };
// console.log(fib(11));
//!======================================= Example ( How function is fasts? ) ========================================================
//?Яка функція швидше? Як перевірити? Так можна тестувати різні частини коду але результат кожен раз буде різний.
// console.time("timer_1");
// for (let i = 0; i < 10000; i++) {
// }
// console.timeEnd("timer_1");

// console.time("timer_2");
// let i = 0;
// while (i < 10000) {
//   i++
// }
// console.timeEnd("timer_2");
//!=========================== Example ( Math, replace() , indexOf() , includes() , slice, concat() ) ===================================
//?Задача в якій потрібно якщо рядок починається з голосних в кінці додати "way" а якщо з приголосних то початок приголосних(до першої голосної)
//? додати в кінець та потім додати закінчення "ay".
//! First Example:
// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/; //?Дві змінних для збереження значень голосних.
//   let myConsonants = str.match(consonantRegex); //?Та приголосних від початку до першої голосної.
//   return myConsonants !== null   //?За допомогою тернарного оператора і змінних повертаємо результат.
//     ? str
//         .replace(consonantRegex, "")
//         .concat(myConsonants)
//         .concat("ay")
//     : str.concat("way");
// }

// console.log(translatePigLatin("consonats"));
//! Second Example:
// function translatePigLatin(str) {
//   // Create variables to be used
//   let pigLatin = "";
//   let regex = /[aeiou]/gi;

//   // Check if the first character is a vowel
//   if (str[0].match(regex)) {
//     pigLatin = str + "way";
//   } else if (str.match(regex) === null) {
//     // Check if the string contains only consonants
//     pigLatin = str + "ay";
//   } else {
//     // Find how many consonants before the first vowel.
//     let vowelIndice = str.indexOf(str.match(regex)[0]);

//     // Take the string from the first vowel to the last char
//     // then add the consonants that were previously omitted and add the ending.
//     pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
//   }

//   return pigLatin;
// }
//! Third Example:
// function translatePigLatin(str) {
//   if (str.match(/^[aeiou]/)) return str + "way";

//   const consonantCluster = str.match(/^[^aeiou]+/)[0];
//   return str.substring(consonantCluster.length) + consonantCluster + "ay";
// }
//! Fourth Example:
// function translatePigLatin(str) {
//   return str
//     .replace(/^[aeiou]\w*/, "$&way")
//     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
// }
//! Fifth Example:
// function translatePigLatin(str, charPos = 0) {
//   return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
//     ? str + (charPos === 0 ? 'way' : 'ay')
//     : charPos === str.length
//       ? str + 'ay'
//       : translatePigLatin(str.slice(1) + str[0], charPos + 1);
// }
//!=============================================== Example ( toUpper || LowerCase() && slice() && replace() ) =============================
//?Функція для заміни слів. Але якщо слово в реченні з великої букви то і замінювати його потрібно х великої і навпаки.
// function myReplace(str, before, after) {
//   if(before[0] === before[0].toUpperCase()){
//     const toUpperAfter = after[0].toUpperCase() + after.slice(1);
//     return str.replace(before, toUpperAfter);
//   } else {
//     const toLowerAfter = after[0].toLowerCase() + after.slice(1);
//     return str.replace(before, toLowerAfter);
//   }
// }

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// console.log(myReplace("I think we should look up there", "up", "Down"));
//!======================================================= Example ===========================================================================
//?Задача в якій треба до кожної літери рядка додати пару AT & CG та помістити їх в масив а той масив в ще один основний масив.
//?Виглядати має так str = "GCG" result = [[G,C], [C,G],[G,C]];
//!First Example: з if та if else умовами та циклом for.
// function pairElement(str) {
//   const result = [];
//   const arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "A") {
//       const arrA = ["A", "T"];
//       result.push(arrA);
//     } else if (arr[i] === "T") {
//       const arrT = ["T", "A"];
//       result.push(arrT);
//     } else if (arr[i] === "C") {
//       const arrC = ["C", "G"];
//       result.push(arrC);
//     } else if (arr[i] === "G") {
//       const arrG = ["G", "C"];
//       result.push(arrG);
//     }
//   }
//   return result;
// }
//!Second Example: Тут в змінній робимо фонкцію зі свіч кейсом яка створює при різних значеннях відповідні масиви.Та проходимо циклом for.
//!Замість char в світч кейс в циклі значення str[i] і від відповідного значення пушиться потрібний масив.Функція в функції.
// function pairElement(str) {
//   const matchWithBasePair = function(char) {
//     switch (char) {
//       case "A":
//         return ["A", "T"];
//       case "T":
//         return ["T", "A"];
//       case "C":
//         return ["C", "G"];
//       case "G":
//         return ["G", "C"];
//     }
//   };
//   const pairs = [];
//   for (let i = 0; i < str.length; i++) {
//     pairs.push(matchWithBasePair(str[i]));
//   }
//   return pairs;
// }
//!Third Example:Створюємо об'єкт pairs з індексами протилежними значенням.Далі колбек функція split("") для переведення в масив для map()
//!Через map додаємо масив з протилежним значенням.І також map повертає колбек в вигляді масиву тому всі масиви ідуть в другий масив.
// function pairElement(str) {
//   const pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C"
//   };
//   return str
//     .split("")
//     .map(x => [x, pairs[x]]);
// }

// console.log(pairElement("CTCTA"));
// console.log(pairElement("TTGAG"));
// console.log(pairElement("ATCGA"));
// console.log(pairElement("GCG"));
//!=================================== Example (Cycle for and if else || split() and forEach && if else) ==================================
//?Команда charCodeAt() повертає юні код.Який потрібен для порівняння в умові.String.fromCharCode() перетворює юні код в букву.
// function fearNotLetter(str) {
//   for (let i = 0; i < str.length; i++) {
//     const charCode = str.charCodeAt(i);
//     if (charCode !== str.charCodeAt(0) + i) {
//       return String.fromCharCode(charCode - 1);
//     }
//   }
//   return undefined;
// }
//?Другий приклад випішується через forEach з порівняннями перед цим str переводимо в масив для методу.
// function fearNotLetter(str) {
//   let currCharCode = str.charCodeAt(0);
//   let missing = undefined;
//   str
//     .split("")
//     .forEach(letter => {
//       if (letter.charCodeAt(0) === currCharCode) {
//         currCharCode++;
//       } else {
//         missing = String.fromCharCode(currCharCode);
//       }
//     });
//   return missing;
// }

// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
//!====================================== Example (Cycle for && includes() && push() && concat() ) ======================================
//?Одразу за дапомогою деструкроризації та методу concat() вне залежності від того скільки масивів об'єднуємо масиви в один масив.
//?А далі проходимо циклом по масиву і пушимо унікальні масиви в пустий масив та повертаємо його.
// function uniteUnique(item,...arr) {
//   const mass = item.concat(...arr);
//   const uniqueItem = [];
//   for(let i = 0; i < mass.length; i++) {
//     const currentItem = mass[i];
//     if(!uniqueItem.includes(currentItem)){
//       uniqueItem.push(currentItem);
//     }
//   }
//   return uniqueItem;
// }
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// console.log([1,2,3,4,5,6]);
//!===================== Example ( replace() || replaceAll() && split() & join() & Cycle for & switch case & map() ) =======================
//?Задача з заміною символів на альтернативні які є в HTML файлі.Тобто & на &amp; < на &lt; > на &gt; ' на &apos; " на &quot;.
//? First Example: Це мій костильний варіант коду.
// function convertHTML(str) {
//   return str.replaceAll("&", "&amp;")
//   .replaceAll("<", "&lt;")
//   .replaceAll(">", "&gt;")
//   .replaceAll("'", "&apos;")
//   .replaceAll('"', "&quot;");
// }
//? Second Example: Альтернатива моєму варіантові.
// function convertHTML(str) {
//   const htmlEntities = {      //?Створюємо об'єкт з ключами тих елементів які треба замінити зі значеннями на які треба замінити.
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;"
//   };
//   return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);//?повертаємо стрілочну функцію в середині replace() яка вказує на те
//   //? що заміна елементів буде по ключам значень об'єкта на їх значень.
// }
//? Third Example: Так само створюємо об'єкт значень. Потім колбеком переводимо в масив для map() фільтруємо через нього та повертаємо у рядок
// function convertHTML(str) {
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;"
//   };
//   return str
//     .split("")
//     .map(entity => htmlEntities[entity] || entity)
//     .join("");
// }
//? Fourth Example: Один з найпростіших способів переведення в масив, далі цикл for та switch case і повертаємо назад в рядок.
// function convertHTML(str) {
//   let temp = str.split("");
//   for (let i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case "<":
//         temp[i] = "&lt;";
//         break;
//       case "&":
//         temp[i] = "&amp;";
//         break;
//       case ">":
//         temp[i] = "&gt;";
//         break;
//       case '"':
//         temp[i] = "&quot;";
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;
//     }
//   }
//   temp = temp.join("");
//   return temp;
// }
// console.log(convertHTML("Dolce & Gabbana"));
// console.log(convertHTML('Stuff in "quotation marks"'));
// console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// console.log(convertHTML("<>"));
//!============================================= Example ( Fibonacci numbers summ ) ========================================================
//? Задача на сумму всіх непарних чисел фібоначі.Вирішення циклом while та порівнянням.
// function sumFibs(num) {
//   let prevNumber = 0;
//   let currNumber = 1;
//   let result = 0;
//   while (currNumber <= num) {
//     if (currNumber % 2 !== 0) {  //?Умова для чисел які непарні.
//       result += currNumber;
//     }
//     currNumber += prevNumber;
//     prevNumber = currNumber - prevNumber;
//   }
//   return result;
// }
// console.log(sumFibs(4));
//!============================================ Example (Cycle for & Double function & every() & reduce() ) ===============================
//? Задача в якій треба повернути сумму всіх простих чисел від любого данного аргумента!!!
//?Подвійний цикл for та функція в функції з порівняннями.
// function sumPrimes(num) {
//   function isPrime(num) {     //? Функція є формулою альтернативного підрахунку сумми натуральних чисел.ПО ФОРМУЛІ З КВАДРАТНИМ КОРЕНЕМ.
//     const sqrt = Math.sqrt(num);  //? Math.sqrt - повертає квадратний корень із num.
//     for (let i = 2; i <= sqrt; i++) {
//       console.log(i);
//       if (num % i === 0)
//         return false;
//     }
//     return true;
//   }
//   let sum = 0;
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i))
//       sum += i;
//   }
//   return sum;
// }
//?Цикл for та метод every() для виведення сумми чисел в масив та потім підсумування через метод reduce().
// function sumPrimes(num) {
//   let primes = [];
//   for (let i = 2; i <= num; i++) {   //?Вирішення по іншій формулі.
//     if (primes.every((prime) => i % prime !== 0))
//       primes.push(i);
//     console.log(i);
//     console.log(primes);
//   }
//   return primes.reduce((sum, prime) => sum + prime, 0);   //?Підсумування всіх чисел.
// }
// console.log(sumPrimes(977));
// console.log(sumPrimes(10));
//!================================================= Example (sort() && Double Cycle for && Double if else ) ==============================
//?Задача в якій треба знайти число яке кратне всіх числам в проміжку чисел масиву(Тобто число яке ділиться від найменьшого до найбільшого)
// function smallestCommons(arr) {
//   const [min, max] = arr.sort((a, b) => a - b); //?Через метод sort() та деструкторизацію знаходимо найменьше та найбільше число в масиві.
//   const numberDivisors = max - min + 1; //?Кількість чисел в проміжку яким треба знайти кратне(Для перевірки в подальшому)
//   let upperBound = 1; //?Властивість яка перемножує всі числа в проміжку далі в циклі.Дане число завжди буде більше за те що нам потрібно.
//   for (let i = min; i <= max; i++) {
//     upperBound *= i;
//   }
//   for (let multiple = max; multiple <= upperBound; multiple += max) { //? Тут ми використовуємо його для циклу. Щоб знайти наше число.
//     let divisorCount = 0;
//     for (let i = min; i <= max; i++) {//?Подвійний цикл та подвійна перевірка щоб точно перевірити що дане число ділиться на всі числа без остачі
//       if (multiple % i === 0) {
//         divisorCount += 1;
//       }
//     }
//     if (divisorCount === numberDivisors) {
//       return multiple;
//     }
//   }
// }

// console.log(smallestCommons([1, 5]));
// console.log(smallestCommons([2, 10]));
// console.log(smallestCommons([23, 18]));
//!=================================================== Example (Cycle for && splice()) ====================================================
//?Поверни масив з елементами з першого параметру які підходять по перевірці другого параметру(функції як true).
// function dropElements(arr, func) {
//   let result = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(func(arr[i]) === true) {
//       result = arr.splice(arr.indexOf(arr[i]));
//     }
//   }
//   return result;
// }

// console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
// console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
//!========================= Example (reduce() & concat() & Array.isArray() || forEach & concat() & push() Array.isArray() ) ================
//?Розгладження масиву різних рівнів вкладеності без використання flat() && flatMap().
//? Array.isArray - вбудованна функція яка повертає чи елемент є масивом.Якщо так то повертає true.
//? Через метод reduce() + concat() так як в цьому методі push() НЕ ВИКОРИСТОВУЄТЬСЯ. А також Array.isArray.Функція перезапускає саму себе
//? Поки не дійде до самого елементу і не помістить його до акумулятору.
// function steamrollArray(arr) {
//   return arr.reduce((acc, item) => Array.isArray(item) ? acc.concat(steamrollArray(item)) : acc.concat(item), []);
// }
//?Вирішення також рекурсією та forEach.
// function steamrollArray(arr) {
//   let result = [];
//   arr.forEach(element => {
//     if(Array.isArray(element)) {
//       result = result.concat(steamrollArray(element));
//     } else {
//       result.push(element);
//     }
//   });
//   return result;
// }
// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([1, {}, [3, [[4]]]]));
//!===================================================== Example ========================================================================
//?Функція для перетворення бінарних рядків в слова.
//? First Example: Cycle for & split() & join()
// function binaryAgent(str) {
//   let biString = str.split(" ");
//   let uniString = [];
//   for (var i = 0; i < biString.length; i++) {
//     uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
//   }
//   return uniString.join("");
// }
//? Second Example: Double Cycle for & Math.pow() - піднесення до степення & String.fromCharCode() - для повернення символів з юні коду.
// function binaryAgent(str) {
//   str = str.split(" ");
//   let power;
//   let decValue = 0;
//   let sentence = "";
//   for (var s = 0; s < str.length; s++) {
//     for (var t = 0; t < str[s].length; t++) {
//       if (str[s][t] == 1) {
//         power = Math.pow(2, +str[s].length - t - 1);
//         decValue += power;
//       }
//     }
//     sentence += String.fromCharCode(decValue);
//     decValue = 0;
//   }
//   return sentence;
// }
//? Third Example: String.fromCharCode() && split("") && map() && parseInt()
// function binaryAgent(str) {
//   return String.fromCharCode(
//     ...str.split(" ").map(function(char) {
//       return parseInt(char, 2);
//     })
//   );
// }

// console.log(
//   binaryAgent(
//     "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
//   )
// );

// console.log(
//   binaryAgent(
//     "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
//   )
// );
//!================================ Example ( every() & hasOwnProperty() & Cycle for & Boolean ) =========================================
//?counter - лічільник який фіксує усі true.Далы в циклі є умова яка перевіряє наявність цієї властивості і чи вона true.
//?Далі іде результат всіх перевірок. І якщо всі true то повертає true. Якщо хоч одна false то повертає false.
// function truthCheck(collection, pre) {
//   let counter = 0;
//   for (let c in collection) {
//     if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
//       counter++;
//     }
//   }
//   return counter == collection.length;
// }
//?Також метод every() але більш зрозуміліше написаний завдяки додатковим умовам в другому return!!!
// function truthCheck(collection, pre) {
//   return collection.every(function (element) {
//     return element.hasOwnProperty(pre) && Boolean(element[pre]);
//   });
// }
//?Метод every() повертає true якщо всі елементи колбек функції відповідають умові. Або false якщо хоча б один елемент не відповідає умові.
// function truthCheck(collection, pre) {
//   return collection.every(obj => obj[pre]);
// }
// console.log(
//   truthCheck(
//     [
//       { name: "Quincy", role: "Founder", isBot: false },
//       { name: "Naomi", role: "", isBot: false },
//       { name: "Camperbot", role: "Bot", isBot: true },
//     ],
//     "isBot"
//   )
// );
// console.log(truthCheck(
//   [
//     { name: "Quincy", role: "Founder", isBot: false },
//     { name: "Naomi", role: "", isBot: false },
//     { name: "Camperbot", role: "Bot", isBot: true },
//   ],
//   "name"
// ));
//!========================================================== Example =====================================================================
//?Функція яка додає два аргументи. Якщо вказано лише один аргумент, то повернітаємо функцію, яка очікує один аргумент і повертає суму.
//?Firts Example: Розбивання аргументів. Та тільки if з return.
// function addTogether() {
//   const [first, second] = arguments;
//   if (typeof (first) === "number") {
//     if (typeof (second) === "number") return first + second;
//     if (arguments.length === 1) return (second) => addTogether(first, second);
//   }
// }
//? Second Example: Так же розбивають деструкторизацією аргументи. І в більш зрозуміліший спосіб розписані всі умови.
// function addTogether() {
//   const [first, second] = arguments;
//   if (typeof(first) !== "number") {
//     return undefined;
//   }
//   else if (arguments.length === 1) {
//     function addSecond(second) {
//       if (typeof(second) !== "number") {
//         return undefined;
//       }
//       else {
//         return first + second;
//       }
//     }
//     return addSecond;
//   }
//   else if (typeof(second) !== "number") {
//     return undefined;
//   }
//   else {
//     return first + second;
//   }
// }
//? Third Example: Більш зрозуміліший приклад за перший. Але робить фактично те ж саме.
// function addTogether() {
//   const [first, second] = arguments;
//   function addSecond(second) {
//     if (typeof (second) === "number") return first + second;
//   }
//   if (typeof (first) === "number") {
//     if (arguments.length === 1) return addSecond;
//     if (arguments.length === 2) return addSecond(second);
//   }
// }

// console.log(addTogether(2,3));
// console.log(addTogether(5));
// console.log(addTogether("2", 3));
//!======================================================== Example (Create Class(Object)) =================================================
// const Person = function(first, last) {
//   let firstName = first;
//   let lastName = last;
//   this.getFullName = function() {
//     return `${firstName} ${lastName}`;
//   };
//   this.setFullName = function(first, last) {
//     firstName = first;
//     lastName = last;
//   };
//   this.getFirstName = function() {
//     return `${firstName}`;
//   };
//   this.setFirstName = function(first) {
//     firstName = first;
//   };
//   this.getLastName = function() {
//     return `${lastName}`;
//   };
//   this.setLastName = function(last) {
//     lastName = last;
//   };
// };

// const person = new Person('Haskell', 'Curry');
// console.log(person.getFullName());
//!======================================================= Example ======================================================================
//?Поверніть новий масив, який трансформує середню висоту елементів у їхні орбітальні періоди (у секундах).
// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   const a = 2 * Math.PI;
//   const newArr = [];

//   const getOrbPeriod = function(obj) {
//     const c = Math.pow(earthRadius + obj.avgAlt, 3);
//     const b = Math.sqrt(c / GM);
//     const orbPeriod = Math.round(a * b);
//     return {name: obj.name, orbitalPeriod: orbPeriod};
//   };
//   for (let elem in arr) {
//     newArr.push(getOrbPeriod(arr[elem]));
//   }
//   return newArr;
// }

// console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
// console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
//!=============================== Example ( replace() & toLOwerCase() & split() & join() & reverse() ) =====================================
//?Перевірка чи строка читається в дві сторони без абетко-цифрових символів.
// function palindrome(str) {
//   const replaceStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("").reverse().join("");
//   if(str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === replaceStr) {
//     return true;
//   }
//   return false;
// }

// console.log(palindrome("eye"));
// console.log(palindrome("A man, a plan, a canal. Panama"));
// console.log(palindrome("0_0 (: /-\ :) 0-0"));
// console.log(palindrome("five|\_/|four"));
//!====================================== Example (Cycle for && Object && Math.pow || Switch case) ===========================================
//? Функція для переведення звичайних цифр в Римські числа.Math.pow(піднесення до степеня)
// function convertToRoman(num) {
// 	const arabicToRoman = {1: "I", 2: "II", 3: "III",  4 : "IV", 5: "V", 6: "VI", 7 : "VII", 8 : "VIII", 9 : "IX",
// 10 : "X", 20 : "XX", 30 : "XXX", 40 : "XL", 50 : "L", 60 : "LX", 70 : "LXX", 80 : "LXXX", 90 : "XC",
// 100 : "C", 200 : "CC", 300 : "CCC", 400 : "CD", 500 : "D", 600 : "DC", 700 : "DCC", 800 : "DCCC", 900 : "CM",
// 1000: "M", 2000: "MM", 3000: "MMM"};

//   const digits = String(+num).split("");  //?Розділення числа в масив на різні числа.
//   console.log(digits);
//   let result = '';
//   for(let i = 0; i < digits.length; i++){
//     let lookupKey = digits[i]*Math.pow(10,digits.length-i-1); //? Розділення числа на десятки та одиниці(сотні та тисячі якщо є)
//     console.log(lookupKey);
//     if(arabicToRoman[lookupKey]){    //?Умова яка шукає потрібний нам результат в об'єкті та додає його в результат.
//       result +=  arabicToRoman[lookupKey];
//     }
//   }
//   return result;
// }
//? Вирішення switch case. Тут прохожимось абсолютно по всіх варіантах рішення.
// function convertToRoman(num) {
//   let str = "";
//   str += num;
//   let result = [];
//   let res1 = "";
//   let res2 = "";
//   let res3 = "";
//   let res4 = "";
//   if (str.length == 0) {
//     result = [];
//   } else if (str.length > 0) {
//     switch (str[str.length - 1]) {
//       case "1":
//         res1 = "I";
//         break;
//       case "2":
//         res1 = "II";
//         break;
//       case "3":
//         res1 = "III";
//         break;
//       case "4":
//         res1 = "IV";
//         break;
//       case "5":
//         res1 = "V";
//         break;
//       case "6":
//         res1 = "VI";
//         break;
//       case "7":
//         res1 = "VII";
//         break;
//       case "8":
//         res1 = "VIII";
//         break;
//       case "9":
//         res1 = "IX";
//         break;
//     }
//     switch (str[str.length - 2]) {
//       case "1":
//         res2 = "X";
//         break;
//       case "2":
//         res2 = "XX";
//         break;
//       case "3":
//         res2 = "XXX";
//         break;
//       case "4":
//         res2 = "XL";
//         break;
//       case "5":
//         res2 = "L";
//         break;
//       case "6":
//         res2 = "LX";
//         break;
//       case "7":
//         res2 = "LXX";
//         break;
//       case "8":
//         res2 = "LXXX";
//         break;
//       case "9":
//         res2 = "XC";
//         break;
//     }
//     switch (str[str.length - 3]) {
//       case "1":
//         res3 = "C";
//         break;
//       case "2":
//         res3 = "CC";
//         break;
//       case "3":
//         res3 = "CCC";
//         break;
//       case "4":
//         res3 = "CD";
//         break;
//       case "5":
//         res3 = "D";
//         break;
//       case "6":
//         res3 = "DC";
//         break;
//       case "7":
//         res3 = "DCC";
//         break;
//       case "8":
//         res3 = "DCCC";
//         break;
//       case "9":
//         res3 = "CM";
//         break;
//     }
//     switch (str[str.length - 4]) {
//       case "1":
//         res4 = "M";
//         break;
//       case "2":
//         res4 = "MM";
//         break;
//       case "3":
//         res4 = "MMM";
//         break;
//     }
//   }
//   result.push(res4, res3, res2, res1);
//   return result.join("");
// }

// console.log(convertToRoman(39999));
// console.log(convertToRoman(1000));
// console.log(convertToRoman(36));
//!===================== Example ( Cycle for & .charCodeAt() & String.fromCharCode|() & branches & replace() ) ===========================
//?Функція яка використовує шифр цезаря ROT13 - тобто зміщує всі букви на 13 місць вперед.Але не чіпає розділові знаки.
// function rot13(str) {
//   let newstrarray = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) + 13 <= 90) { //?Ці умови використовуються для того щоб перевірити чи символи є буквами.
//       newstrarray = newstrarray + String.fromCharCode(str.charCodeAt(i) + 13);
//     } else if (str.charCodeAt(i) + 13 > 90) {
//       let newchar = str.charCodeAt(i) + 13 - 90 + 64;
//       newstrarray = newstrarray + String.fromCharCode(newchar);
//     } else {
//       newstrarray = newstrarray + str[i];
//     }
//   }
//   str = newstrarray;
//   return str;
// }
//?Цей приклад треба зрозуміти!!! replace() зі своїми розрахунками.
// function rot13(str) { // LBH QVQ VG!
//   return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
// }

// console.log(rot13("SERR CVMMN!"));
// console.log(rot13("SERR YBIR?"));
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// console.log(rot13("SERR PBQR PNZC"));

// const originalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// console.log(originalAlphabet.charCodeAt(26));   //?Принцип роботи команди .charCodeAt() всередині індекс елемента!!!
//!======================================================= Example ==========================================================================
//?Приклад валідатора мобільних номерів телефону за допомогою патернів.
// function telephoneCheck(str) {
//   let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
//     rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

//   if (rex1.test(str)) {
//     return true;
//   } else {
//     return rex2.test(str) ? true : false;
//   }
// }

// console.log(telephoneCheck("555-555-5555"));
//!======================================================= Example =========================================================================
//?Задача касовий апарат: З поясненям.
function checkCashRegister(price, cash, cid) {
  //all money values are multiplied by 100 to deal with precision errors involved with decimals 
  const denomination = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1,];

  function transaction(price, cash, cid) {
    let changeNeeded = (cash - price) * 100;
    //money will be pushed to the second value in each array
    let moneyProvided = [
    ["ONE HUNDRED", 0], 
    ["TWENTY", 0], 
    ["TEN", 0], 
    ["FIVE", 0], 
    ["ONE", 0], 
    ["QUARTER", 0], 
    ["DIME", 0], 
    ["NICKEL", 0], 
    ["PENNY", 0],
  ];
  //take the cid, reverse it (like in Roman Numerals exercise), multiply values by 100
  let availCash = [...cid].reverse().map(el => [el[0], el[1] * 100]);
  //get the total sum of all cash and divide by 100
  let sumOfCash = availCash.reduce((a, b) => (a + b[1]),0) / 100;
  //if sumOfCash is exact change needed return
  if (sumOfCash === changeNeeded / 100) {
    return {status: "CLOSED", change: [...cid]};
  }
  //else, run this function
  else for (let i = 0; i < availCash.length; i++) {
    //if denomination values are less than changeNeeded and availableCash values are greater than 0, run the while loop
      while (denomination[i] <= changeNeeded && availCash[i][1] > 0) {
        //1. moneyProvided array is increased by denomination value
        moneyProvided[i][1] += denomination[i];
        //2. changeNeeded is decreased by same denomination value
        changeNeeded -= denomination[i];
        //3. availCash is also decreased by same denomination value
        availCash[i][1] -= denomination[i];
      }
    };
    
   //clean up the moneyProvided array by
    let change = moneyProvided
    //1. resetting the money values by dividing by 100
    .map(el => [el[0], el[1] / 100])
    //2. filtering out all non-empty dollar and value arrays
    .filter(el => el[1] !== 0);
    //calculate the total of the change array
    let changeTotal = change.reduce((a, b) => (a + b[1]),0);
    //if the total change is less than the change needed
    if (changeTotal < changeNeeded) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    return {status: "OPEN", change};
  }

  //this is where the transaction function is called
  let answer = transaction(price, cash, cid);
  //here the final answer is provided if the 2 if statements don't catch it first
  return answer;
};
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

//!============================================= Example ============================================================
//?Функція геометричної прогресії.
function math(num, repet) {
  let result = [];
  result.push(num);
  for(let i = 1; i < repet; i++) {
      result.push(result[result.length -1] * 2);
  }
  return result;
}

console.log(math(2, 10));