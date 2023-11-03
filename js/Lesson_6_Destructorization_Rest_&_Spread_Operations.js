//!====================================== Example (Destructorization function) ================================
// function calcBMI(weight, height) {
//     const numericWeight = Number(weight.replace(",", "."));//Переводимо числа зі строками в Number та замінюємо кому на крапку методом .replace
//     const numericHeight = Number(height.replace(",", "."));
//     return Number((numericWeight / numericHeight **2 ).toFixed(1));   //Методом .toFixed робимо тільки один знак після коми.
// }

// console.log(calcBMI('73.3', '178.1'));
// console.log(calcBMI('66.4', '164.2'));
// console.log(calcBMI('82.5', '172.1'));

// function calcBMI({weight, height}) {
//     const numericWeight = Number(weight.replace(",", "."));
//     const numericHeight = Number(height.replace(",", "."));
//     return Number((numericWeight / numericHeight **2 ).toFixed(1));
// }

// console.log(calcBMI({weight: '73.3', height:'178.1',}));
// console.log(calcBMI({weight: '66.4', height: '164.2',}));
// console.log(calcBMI({weight: '82.5', height: '172.1',}));

//!============================== Example (Destructorization (Refactoring) function) =====================================
// function printContactsInfo(names, phones) {
//     const nameList = names.split(",");  //Метод .split перетворює рядок на масив розбиваючі його знаком в дужках тобто комою (",")
//     const phoneList = phones.split(",");
//     for(let i = 0; i < nameList.length; i += 1){   //Перебираємо циклом масив назв.
//         console.log(`${nameList[i]}: ${phoneList[i]}`); //В шаблонний рядок додаємо назву і номер кожного(для номеру другий раз не перебираємо)
//     }
// }

// printContactsInfo("Jacob,William,Solomon,Artemis",
// "577346180,955505076,888888888,999999999");

// function printContactsInfo({names, phones}) {     //Така ж сама по розв'язанню задача!!!!!!!
//     const nameList = names.split(",");
//     const phoneList = phones.split(",");
//     for(let i = 0; i < nameList.length; i += 1){
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }

// printContactsInfo({names: "Jacob,William,Solomon,Artemis",
// phones: "577346180,955505076,888888888,999999999"});

//!======================================= Example ( Depp destructorization ) ====================================
// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport("Cyberdyne systems", 50, 150));

// function getBotReport({companyName, bots: {repair:repairBots, defence: defenceBots}}) { //Тут ми вказали що repair i defence аргументи
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;              // зі шаблонної строки.
//   }

// console.log(
//   getBotReport({
//     companyName: "Cyberdyne systems",
//     bots: {
//       repair: 50,
//       defence: 150,
//     },
//   })
// );

//!=========================================== Example (Destructorization work Java Script) =========================================
// const user = {
//     userName: "Sergey",
//     age: 32,
// };

// const {age} = user;   //Тут Java Script робить під капотом приклад нижче. Це і є деструкторизація.
// console.log(age);

// const myAge = user.age;
// console.log(myAge);

// const {userName: name} = user; //Тут так само змінюємо назву параметра userName на name.
// console.log(name);

// const name = user.userName;
// console.log(name);
//! ======================================= Example (Destructorization and spread operators ) ======================================
// function createContacts(partialContacts) {
//     return {list: "dafault",
//         ...partialContacts,  //... це spread оператор який розбиває об'єкт в параметрі на окремі частини.
//     id: generateId(),
//     createdAt: new Date(),   //Функція для роботи з датами в Java Script.
//     };
// }

// console.log(
//   createContacts({
//     name: "Serhii",
//     email: "gWake30071991@gmail.com",
//     list: "friends",
//   })
// );

// console.log(createContacts({ name: "Mango", email: "mango@mango.com" }));

// function generateId( ) {
//     return "_" + Math.random().toString(36).substr(2, 9);    //Функція для рандомного створення id.
// }

//!=================== Example ( Changed firsName and lastName for helped spread and rest operators) ==================================
// function transformUsername({ firstName, lastName, ...restProps }) {
//   //Тут ...restProps є rest збирає об'єкт в нову колекцію.
//   console.log(restProps); //Виводить в консоль об'єкт тільки без властивостей fistName and lastName!!!
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...restProps, //Тут параметр ...restProps стає уже spred оператором тому що він розподіляє колекцію елементів в другий об'єкт!!!ВАЖЛИВО!!!
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Serhii",
//     lastName: "Reshetniak",
//     email: "gWake30071991@gmail.com",
//     friendCount: 40,
//   })
// );

//!============================== Example (Comparison array for argymenst: Cycle for and includes methods) ===================
function findMathes(arr, ...arg) { //Цикл for of що перебирає значення з масиву з дрегими значеннями які даються тут як rest оператор. 
  console.log(arr);
  console.log(arg);
  const result = [];
  for (const num of arg) {
    if (arr.includes(num)) {
      result.push(num);
    }
  }
  return result;
}

console.log(findMathes([1, 2, 3, 4, 5], 1, 8, 11, 26, 117, 4));
