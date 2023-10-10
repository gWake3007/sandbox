//! //====================Example (indexOf)
// const userName = "serui";
// console.log(userName.indexOf("u"));
// console.log("serui".indexOf("u"));

//! //====================Example (Math.abs)
// const apple = 49;
// const lemon = 147;

// const total = apple + lemon;
// const diff = apple - lemon;
// const diffMathAbs = Math.abs(apple - lemon);
// console.log(total);
// console.log(diff);
// console.log(diffMathAbs);

//! //============ Example (Combinate Operators)
// let people = 50;
// // people = people + 30; //first example
// people += 30;  // second example (Priority) Work for all operators + - / * 
// console.log(people);

//! //============ Example (Math Classes)
// const valueFirst = 32.3;
// const valueSecond = 32.5;
// const valueThird = 32.8;

// console.log(Math.floor(valueFirst));   // Takes a minimal value
// console.log(Math.floor(valueSecond));
// console.log(Math.floor(valueThird));

// console.log(Math.ceil(valueFirst));   //Takes a maximal value
// console.log(Math.ceil(valueSecond));
// console.log(Math.ceil(valueThird));

// console.log(Math.round(valueFirst));   // Takes a middle value (0.5 = 1, 0.4 = 0, 0.6 = 1)
// console.log(Math.round(valueSecond));
// console.log(Math.round(valueThird));

//! //============ Example (Rounding numbers)
// const rounding = 32.222222222222;
// console.log(rounding.toFixed(3));     // toFixed always chenge value in the string!!!
// console.log(rounding);
// console.log(Number(rounding.toFixed(3)));    // Change string value for Number!!!

//! //============ Example (Template Strings)
// const apples = 49;
// const cherry = 11;
// const text = "In general";
// const allTextAndFruitsQuantity = `${text} you should ${apples + cherry} fruits!`;
// console.log(allTextAndFruitsQuantity);

//! //=============== Example (Method Replace)
// let height = "1.78";
// let weight = "73,2";

// weight = weight.replace(",", ".");
// const bmi = weight / height;

// console.log(Number(height), weight);
// console.log(height, weight);
// console.log(bmi);

// let myName = "#Serui#///";
// myName = myName.replaceAll("/", "");
// console.log(myName);

// let userName = "Jhon Davinchi11111";
// console.log(userName.replaceAll("1", ""));

//! // ========= Example (exponentiation) - піднесення до степенння
// let summ = 32;
// summ = summ * summ;
// summ = summ ** 2;
// summ = Math.pow(summ, 2);

// console.log(summ);

//! //============ Example (CharCode) Спеціальний код кожного символу
// console.log("Serui" .charCodeAt(1));
// console.log("Serui" .charCodeAt(5));

// console.log("s" .charCodeAt(0));
// console.log("S" .charCodeAt(0));
// console.log("s" > "S");     // Порівняння строк відбувається за юні кодом!

