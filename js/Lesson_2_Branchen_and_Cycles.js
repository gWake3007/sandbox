//  Example (if , else branch and Ternary Operator (Тернальний оператор -коротка функція з поверненням двух результатів true або false))
let message = "";

let userStatus = true;

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

message = userStatus ? "Admin is user!" : "Admin is not user!";

console.log(message);