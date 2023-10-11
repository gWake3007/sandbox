//!=================== Example (function) ============================

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi);

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(",", "."));    // Методом replace заміна коми на крапку(тому що розділювач в числі не може бути кома)
//     height = Number(height);
//     console.log(weight);
//     console.log(height);
//     const bmi = weight / height ** 2;       //Перший варіант піднесення до степення висоти
//     const bmii = weight / Math.pow(height, 2);   //Другий варіант піднесення до степення висоти
//     const bmiii = weight / (height * height);   // Третій варіант помножити на себе(Тільки першою дією зробити множення)
//     console.log(bmi);
//     console.log(Number(bmii.toFixed(2)));   // Для цього з методом toFixed перетворюємо на Number
//     console.log(bmiii.toFixed(1));     //Округлюємо до дробового числа з однією цифрою після крапки(Але toFixed перетворює на рядок)
//     console.log(typeof bmi);
//     console.log(typeof bmiii);          //Перевірка типу данних
// }

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(",", "."));
//     height = Number(height);
//     const bmi = weight / height ** 2;
//     return Number(bmi.toFixed(2));              // Зробили return щоб функція робила з консолю 4 строки
// }

//!===================== Example (Порівняння в функціях) =============================

// console.log(min(5,3));
// console.log(min(0,-1));
// console.log(min(14.01,16.3));

// function min(a, b) {                 //Function порівняння чисел
//     if(a < b) {
//         return a;
//     }else {
//         return b;
//     }
// } 

// function min(a, b) {
//     return a < b ? a : b;             //Function (тернарний оператор)
// }

// function min(a, b) {
//     return Math.min(a, b);            //Function методом Math
// }

//!============================== Example  (Функція обчислення площі) ========================

// function getRectArea(dimensions) {                  //Приклад функція з одним аргументом який треба обчислити
//     const arr = dimensions.split(" ");              //Спліт для розділення елементів
//     const a = Number(arr[0]);                       //Number тому що аргумент - строка
//     const b = Number(arr[1]);
//     return a * b;
// }

// console.log(getRectArea("8 11"));

//!============================= Example (Interesting functions - middle number!) ========================

// console.log(calAvarage(1, 13, 55));
// console.log(calAvarage(3, 77, 45, 65));
// console.log(calAvarage(2, 44, 11, 67, 86));

// function calAvarage () {                    //Те ж саме що і одне слово аргумент
//     console.log(arguments);                 //arguments це псевдомасиви в java script
//     const length = arguments.length;
//     let total = 0;
//     for(const num of arguments) {
//         total += num;
//         console.log(total);                 //Консоль на кожній ітерації циклу(кожному додаванні)
//     }
//     console.log(total);                     //Одразу загальна сума
//     return total / length;            //Середне значення сумми всіх чисел
// }

//!============================ Example (Function Timer) =============================

console.log(formatTime(70));
console.log(formatTime(450));
console.log(formatTime(1441));

function formatTime(totalMinutes) {
    const hours = totalMinutes / 60;
    const minutes = totalMinutes / 60;
}