// //  Example (if , else branch and Ternary Operator (Тернальний оператор -коротка функція з поверненням двух результатів true або false))
// let message = "";

// let userStatus = false;

// if(userStatus){
//     message = "Admin is user!";
// } else {
//     message = "Admin is not user!";
// }


// if(userStatus === true) {
//     message = "Admin is user!";
// } else {
//     message = "Admin is not user!";
// }

// message = userStatus ? "Admin is user!" : "Admin is not user!";

// message = `Admin is ${userStatus ? "" : "not"} user!`;

// console.log(message);

// //  ================================= Example (Cycle for)===================================================
// for(let i = 0; i <= 10; i++){                  //i++  спочатку повертає значення а потім збільшує
//     console.log(i);
// }

// for(let i = 0; i <= 10; i += 1){
//     console.log(i);
// }

// for(let i = 0; i <= 10; ++i){                 // ++i  спочатку збільшує а потім повертає значення
//     console.log(i);
// }

for(let i = 1; i <= 10; i += 1){                     // Цикл в циклі
    for(let k = 1; k <= 5; k +=1){
        console.log(`i: ${i} | k ${k}`);
    }
}