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