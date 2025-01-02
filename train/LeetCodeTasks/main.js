//? ============================================== Task 1 ===========================================================
// const nums = [1, 1, 0, 1, 1, 1, 1, 1];

// function findMaxConsecutiveOnes(nums) {
//   let maxCount = 0; // Максимальна кількість послідовних одиниць
//   let currentCount = 0; // Поточна кількість послідовних одиниць

//   for (let num of nums) {
//     if (num === 1) {
//       currentCount++; // Збільшуємо лічильник, якщо знаходимо 1
//       maxCount = Math.max(maxCount, currentCount); // Оновлюємо максимальне значення
//     } else {
//       currentCount = 0; // Скидаємо лічильник, якщо знаходимо 0
//     }
//   }

//   return maxCount; // Повертаємо максимальну кількість послідовних одиниць
// }

//?My resolve... Not good. And wrong...
// function findMaxConsecutiveOnes(nums) {
//   let howMuchNumber = 0;
//   const numbers = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       if (howMuchNumber <= numbers.length) {
//         howMuchNumber = numbers.length;
//         console.log(howMuchNumber);
//         numbers.splice(0, numbers.length);
//       }
//     } else {
//       numbers.push(nums[i]);
//       if (nums.length === i + 1 && numbers.length > howMuchNumber) {
//         howMuchNumber = numbers.length;
//       }
//     }
//   }
//   return howMuchNumber;
// }

// console.log(findMaxConsecutiveOnes(nums));

//? =============================================== Task 2 ==========================================================
// const nums = [12, 345, 2, 6, 7896];
// const nums = [555, 901, 482, 1771];

// function findNumbers(nums) {
//   let count = 0; // Лічильник чисел з парною кількістю цифр

//   for (let i = 0; i < nums.length; i++) {
//     const numLength = nums[i].toString().length; // Перетворюємо число на рядок і отримуємо кількість цифр
//     if (numLength % 2 === 0) {
//       // Перевіряємо, чи кількість цифр є парною
//       count++;
//     }
//   }
//   return count; // Повертаємо кількість чисел з парною кількістю цифр
// }

//? My resolve. Not work but how ?...
// function findNumbers(nums) {
//   let result = 0;
//   for (let i = 0; nums.length > i; i++) {
//     if (nums[i] % 2 === 0 && nums[i].toString().length > 1) {
//       result++;
//     }
//   }
//   return result;
// }

// console.log(findNumbers(nums));

//?======================================================= Task 3 ===============================================================
