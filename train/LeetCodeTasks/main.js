const nums = [1, 0, 1, 1, 1];

function findMaxConsecutiveOnes(nums) {
  let howMuchNumber = 0;
  const numbers = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      numbers.push(nums[i]);
    } else {
      if (!howMuchNumber <= numbers.length) {
        howMuchNumber = numbers.length;
        numbers.splice(0, numbers.length);
      } else {
      }
    }
  }
  return howMuchNumber;
}

// findMaxConsecutiveOnes(nums);
console.log(findMaxConsecutiveOnes(nums));

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }
