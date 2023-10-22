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

// for(const salarie of allSalaries){           //Значення найлегше перебирати циулом for of. Так як він для цього зроблений.
//     sum += salarie;
// }

// console.log(sum);

//!================================== Example (Array objects) ============================
const stones = [
    {name: "Смарагд", price: 1300, quantity: 4},
    {name: "Діамант", price: 2700, quantity: 3},
    {name: "Сапфір", price: 400, quantity: 7},
    {name: "Щебінь", price: 200, quantity: 2},
];


function calcTotalPrice(stones, stoneName){

}

console.log(calcTotalPrice(stones, "Смарагд"));