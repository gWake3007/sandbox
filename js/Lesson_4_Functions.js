//!=================== Example (function) ============================

const bmi = calcBMI('88,3', '1.75');
console.log(bmi);

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

function calcBMI(weight, height) {
    weight = Number(weight.replace(",", "."));
    height = Number(height);
    const bmi = weight / height ** 2;
    return Number(bmi.toFixed(2));              // Зробили return щоб функція робила з консолю 4 строки
}