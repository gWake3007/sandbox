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
//? My answer first time is so good!
// const nums = [-4, -1, 0, 3, 10];
// const nums = [-7, -3, 2, 3, 11];

// function sortedSquares(nums) {
//   return nums.map((num) => num * num).sort((a, b) => a - b);
// }

// console.log(sortedSquares(nums));

//?======================================================== Task 4 ===============================================================
// const arr = [1, 0, 2, 3, 0, 4, 5, 0];

//?Second my answer. This is good result!Greeting you!
// function duplicateZeros(arr) {
//   for (let i = 0; arr.length > i; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i + 1, 0, 0);
//       i++;
//       arr.pop();
//     }
//   }
//   return arr;
// }

//?My answer not good. Because needed return arr. Not new variable result...
// function duplicateZeros(arr) {
//   let iteration = arr.length;
//   const result = [];
//   for (let i = 0; iteration > i; i++) {
//     if (arr[i] === 0) {
//       result.push(0, 0);
//       iteration--;
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(duplicateZeros(arr));
//?============================================== Task 5 ======================================================================
// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;

//?First resolve... Is wrong. Needed return nums1!
// function merge(nums1, m, nums2, n) {
//   const result = [...nums1.slice(0, m), ...nums2.slice(0, n)];
//   return result.sort((a, b) => a - b);
// }

//?Second resolve changed and sorted array nums1.
// function merge(nums1, m, nums2, n) {
//   nums1.splice(m);
//   nums1.push(...nums2.slice(0, n));
//   return nums1.sort((a, b) => a - b);
// }

// console.log(merge(nums1, m, nums2, n));

//?====================================================== Task 6 =======================================================
// const nums = [3, 2, 2, 3];
// const val = 3;

// const nums = [0, 1, 2, 2, 3, 0, 4, 2];
// const val = 2;

//?My answer. Wrong again!!! WTF?
// function removeElement(nums, val) {
//   for (let i = 0; nums.length > i; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       i--;
//       nums.push("_");
//     }
//   }
//   return nums;
// }

//?Not my answer!
// function removeElement(nums, val) {
//   let k = 0; // Лічильник для кількості елементів, які не рівні `val`

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i]; // Переміщаємо значення, яке не рівне `val`, у початок масиву
//       k++;
//     }
//   }
//   console.log(nums);
//   return k; // Повертаємо кількість елементів, які не рівні `val`
// }
// console.log(removeElement(nums, val));

//?========================================================== Task 7 =====================================================
// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const nums = [1, 1, 2];

// function removeDuplicates(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     // Перевіряємо, чи поточний елемент вже зустрічався
//     if (nums.indexOf(nums[i]) !== i) {
//       nums.splice(i, 1); // Видаляємо дубль
//       i--; // Повертаємо індекс назад після видалення
//     }
//   }
//   return nums.length;
// }

// console.log(removeDuplicates(nums));

//?====================================================== Task 8 ==========================================================
// const arr = [10, 2, 5, 3];
// const arr = [3, 1, 7, 11];

// //?Not my resolve.
// function checkIfExist(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] === 2 * arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(checkIfExist(arr));

//?===================================================== Task 9 =============================================================
// const arr = [2, 1];
// const arr = [3, 5, 5];
// const arr = [0, 3, 2, 1];

//?Use to cycle while
// function validMountainArray(arr) {
//   if (arr.length < 3) return false;

//   let i = 0;

//   // Рухаємося вгору
//   while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
//     i++;
//   }

//   // Перевіряємо, чи вершина не знаходиться на початку або в кінці
//   if (i === 0 || i === arr.length - 1) {
//     return false;
//   }

//   // Рухаємося вниз
//   while (i + 1 < arr.length && arr[i] > arr[i + 1]) {
//     i++;
//   }

//   // Якщо ми дійшли до кінця масиву, то це гірський масив
//   return i === arr.length - 1;
// }

//?Use to cycle for
// function validMountainArray(arr) {
//   if (arr.length < 3) return false;

//   let increasing = false;
//   let decreasing = false;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1]) return false; // Рівні значення

//     if (arr[i] > arr[i - 1]) {
//       if (decreasing) return false; // Якщо спуск почався, а потім знову підйом
//       increasing = true;
//     } else if (arr[i] < arr[i - 1]) {
//       if (!increasing) return false; // Якщо спуск почався без підйому
//       decreasing = true;
//     }
//   }

//   return increasing && decreasing; // Потрібно, щоб був і підйом, і спуск
// }

// console.log(validMountainArray(arr));

//?======================================================= Task 10 ========================================================
// const arr = [17, 18, 5, 4, 6, 1];
// const arr = [400];

// function replaceElements(arr) {
//   let length = arr.length;
//   let maxSoFar = -1; // Максимальне значення справа, початково -1

//   for (let i = length - 1; i >= 0; i--) {
//     let currentNumber = arr[i]; // Поточний елемент
//     arr[i] = maxSoFar; // Замінюємо його на максимальне значення
//     maxSoFar = Math.max(maxSoFar, currentNumber); // Оновлюємо максимальне значення
//   }
//   return arr;
// }

// function replaceElements(arr) {
//     let n = arr.length;
//     let rightMax = new Array(n).fill(-1);

//     for (let i = n - 2; i >= 0; i--) {
//         rightMax[i] = Math.max(rightMax[i + 1], arr[i + 1]);
//     }

//     return rightMax;
// }

// function replaceElements(arr) {
//     return arr.map((_, i) => i < arr.length - 1 ? Math.max(...arr.slice(i + 1)) : -1);
// }
// console.log(replaceElements(arr));

//?=================================================== Task 11 =============================================================
