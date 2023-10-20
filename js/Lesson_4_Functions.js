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

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);      //Методом Math.floor робимо так щоб ділення було без остачі
//     const minutes = totalMinutes % 60;               // % Оператор який залишає остачу від ділення 
//     const formatedHours = String(hours).padStart(2, 0);
//     const formatedMinutes = String(minutes).padStart(2, 0);  // Дві константи з методами створили для того щоб перевести результат в шаблон
//     console.log(String(hours).padStart(2, 0), String(minutes).padStart(2, 0)); //В цей консоль виведенний результат(Але без двокрапки)
//     return `${formatedHours}:${formatedMinutes}`;
// }
//!============================ Example (Method padStart and padEnd) ==================================
// const padStarted = "1";
// const padStartedTwo = "11";
// console.log(padStarted.padStart(2, 0));            //Принцип роботи метода padStart перше число це кількість знаків яких має бути
// console.log(padStartedTwo.padStart(2, 0));//А друга цифра це той елемент що додається якщо не вистачає знаків(в іншому випадку нічого не відбувається)
// console.log(padStarted.padStart(2, "a"));//Можна додавати будь який елемент(Також слід пам'ятати що цей метод правює тільки на string!!!)

// const padEnded = "1";
// const padEndedTwo = "11";
// console.log(padEnded.padEnd(2, "b"));
// console.log(padEnded.padEnd(2, 0));
// console.log(padEndedTwo.padEnd(2, 0)); //Так само як і у padStart тільки навпаки. Додає в кінці string!!!!!!!!!!

//!================================ Example (Functions - three tasks) =============================================

// //? addCourse(name) - Додає курс до кінця колекції
// //? removeCourse(name) - Видаляє курс із колекції
// //? updateCourse(oldName, newName) - Змінює ім'я курсу


// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses);
// addCourse('CSS');

// function addCourse(course) {
//     if(courses.includes(course)){
//         console.log(`Ви вже маєте ${course} курс`);
//     }
//     else{
//         courses.push(course);
//     }
// }

// removeCourse('React');
// console.log(courses);
// removeCourse('Vue');

// //!========================== First Example Function ========================================
// function removeCourse(course) {
//     if(!courses.includes(course)) {               //Умова навпаки. Якщо course не має в масиві то виконується перва умова!
//         console.log(`Курсу ${course} не існує`);
//     }
//     else {
//         const index = courses.indexOf(course);  //Метод indexOf робимо для виявлення індексу елемента що треба вирізати методом splice.
//         courses.splice(index, 1);    //Перший аргумент це індекс того елемента що треба вирізати, а другий це скільки елементів вирізати.
//     }
// }

// //!=============================== Second Example Function ==================================================
// function removeCourse(course) {
//     const index = courses.indexOf(course);    //Якщо метод indexOf не знаходить елемент то він завжди повертає -1!!!
//     if(index === -1){
//         console.log(`Курсу ${course} не існує`);
//     } else {
//         courses.splice(index, 1);
//     } 
// }

// updateCourse("Express", "NestJS");
// console.log(courses);
// updateCourse("Vue", "Angular");

// function updateCourse(oldCourse, newCourse) {
//     const index = courses.indexOf(oldCourse);
//     if(index === -1){
//         console.log(`Курсу ${oldCourse} не існує`);
//     } else {
//         courses.splice(index, 1, newCourse);   //Зміна назви елементу спрайсом!
//         // courses[index] = newCourse;// Зміна назви елементу через присвоєння (courses - массив, index - індекс елемента, newCourse - нова назва)
//     } 
// }

//!======================================= Example (Filter Numbers) ========================================
// const numbers = [1,11,16,44,89];
// const value = 5;

// console.log(numbers.filter((itm) => itm > value));//Приклад роботи методу filter!!! itm(може бути любою назвою)Метод нагадує Тернарний оператор

// console.log(returnNumbers(numbers, 5));
// console.log(numbers);
// console.log(returnNumbers(numbers, 11));

// function returnNumbers (numbers, value) {         //Функція перебору чисел!!!!
//     const result = [];
//     for(const number of numbers){
//         if(number > value) result.push(number);
//     }
//     return result;
// }

//!======================================== Example (Two decision(вирішення) cycle for of and cycle for) ===========================
// const prides = [11,12,66,456,742];

// function calculateTotalPrideMethodForOf(orders) {
//     let total = 0;
//     for(const order of orders) {
//         total += order;
//     }
//     return total;
// }

// console.log(calculateTotalPrideMethodForOf(prides));

// function calculateTotalPrideMethodFor(orders) {
//     let total = 0;
//     for(let i = 0; i < orders.length; i += 1) {//Заміна циклу for of який проходить по кожному елементу масиву і додає їх в змінну total
//         total += orders[i];
//     }
//     return total;
// }

// console.log(calculateTotalPrideMethodFor(prides));

//!================================= Example (min Numbers in arr) ===================================================
// const numbers = [1,43,12,564353,345,764,0,-1454645];

// function minNumbers(number) {
//     let min = numbers[0];
//     for(let i = 0; i <= number.length; i += 1) {
//         if(i > number[i]){
//             min = number[i];
//         }
//     }
//     return min;
// }

// console.log(minNumbers(numbers));

// function minNumbersCycleForOf(number) {
//     let min = number[0];
//     for(const arr of number) {    //number в циклі приймає массив numbers. arr в циклі це один елемент массиву numbers.
//         if(arr < min){
//             min = arr;
//         }
//     }
//     return min;
// }

// console.log(minNumbersCycleForOf(numbers));

//!=============================== Example (min Numbers an arr within an arr ) =============================================
// const numberss = [[1,2,3],[4534353,222,566],[[[[[[[5]]]]]]],[[[3,[[[5]]]]]]];
// console.log(numberss);
// function minNumbersArrWithinArr(number) {
//     number = number.flat(Infinity);//В методі flat в дужках пишеться скільки рівнів вкладеності треба зробити в 1 массив(Infiniti - безкінечність)
//     console.log(number); //Принцип роботи методу flat
//     let min = number[0];//Обовязково слід пам'ятати тут ми беремо перший елемент number(тому що в функції можуть бути інші массиви чи аргументи)
//     for(const arr of number) { 
//         if(arr < min){
//             min = arr;
//         }
//     }
//     return min;
// }

// console.log(minNumbersArrWithinArr(numberss));

//!================================ First Interesting Example ===========================================
// let str = "";

// for (let i = 0; i < 4; i += 1){            //Перші два цикли відповідають за перші 4 рядки зірочок від меньшого до більшого
//     for(let k = 0; k < i + 1; k += 1){     //Перший цикл це кількість рядків а другий це кількість зірок
//         str += "*";
//     }
//     str += "\n";
// }

// for (let i = 3; i >= 0; i -= 1){          //Другий цикл відповідає за зменьшення кількості зірок від більшого до меньшого
//     for(let k = 0; k < i + 1; k += 1){
//         str += "*";
//     }
//     str += "\n"; // це перехід на інший рядок на кожній ітерації циклу(щоб всі зірки не були в один рядок - це кінець першого циклу!!!)
// }

// console.log(str);

//!=============================== Second Interesting Example ============================================
let row = "";

for(let i = 0; i < 10; i += 1) {
    for(let j = 0; j < 10; j += 1){
        if(j === i || j + i == 9 || j === 0 || i == 0 || j === 9 || i === 9){
            row += "#";
        }
        else {
            row += " ";
        }
    }
    console.log(row);
    row = "";
}