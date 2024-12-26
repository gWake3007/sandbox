// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message =
//   "You ordered droids worth totalPrice credits. Delivery (+'deliveryFee' credits) is included in total price.";
// console.log(message);

// Change code below this line
// function add(a, b, c) {
//   console.log("Addition result equals ${a+b+c}");
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
//?geometricProgression
function geometricProgression(num, howToProgress) {
  let result = num;
  for (let i = 1; i < howToProgress; i++) {
    result = result * 2;
    // console.log(result);
  }
  console.log(result);
}

geometricProgression(1, 31);
