//!======================================================= Task number one ==========================================================
// const categories = document.getElementById("categories");
// const categoriesItems = categories.querySelectorAll(".item");
// console.log(`Number of categories: ${categories.querySelectorAll(".item").length}`)

// categoriesItems.forEach((categoriesItem) => {
//   const item = categoriesItem.querySelector("h2").textContent;
//   const subCategories = categoriesItem.querySelectorAll("li");
//   console.log(`Category: ${item}`);
//   console.log(`${subCategories.length}`);
// });
//!======================================================= Task number two ==========================================================
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const ulmarkup = document.getElementById("ingredients");

// ingredients.forEach((item) => {
//   const liElem = document.createElement("li");
//   liElem.classList.add("item");
//   liElem.textContent = item;
//   ulmarkup.after(liElem);
// });
//!==================================================== Task number three ============================================================
// const images = [
//     {
//       url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat",
//     },
//     {
//       url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//     },
//     {
//       url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running",
//     },
//   ];

//   const ulGallery = document.querySelector(".gallery");

//   const markup = images
//   .map(({url, alt}) => 
//   `<li><img src="${url}" alt="${alt}" width="300px" height="300px"></img></li>`
//   ).join("");

//   ulGallery.insertAdjacentHTML("beforeend", markup);

//   ulGallery.style.display = "flex";
//   ulGallery.style.flexDirection = "row-reverse";
//!================================================== Task number four =====================================================
// let counterValue = 0;
// const decrement = document.querySelector('button[data-action="decrement"]');
// const increment = document.querySelector('button[data-action="increment"]');
// const span = document.getElementById("value");

// decrement.addEventListener("click", minusValue);
// increment.addEventListener("click", plusValue);

// function minusValue() {
//     counterValue --;
//     span.textContent = counterValue;
// }

// function plusValue() {
//     counterValue ++;
//     span.textContent = counterValue;
// }
//!=================================================== Task number five ===========================================================
// const input = document.getElementById("name-input");
// const span = document.getElementById("name-output");

// input.addEventListener("input", inputName);

// function inputName(event) {
//     if(event.currentTarget.value === "") {
//         span.textContent = "Anonymous";
//     } else {
//         span.textContent = event.currentTarget.value;
//     }
// }
//!=============================================== Task number six ============================================================
// const inputValid = document.getElementById("validation-input");

// inputValid.addEventListener("blur", blurInput);

// function blurInput(e) {
//     if(e.currentTarget.value.length === Number(inputValid.dataset.length)) {
//         inputValid.classList.add("valid");
//         inputValid.classList.remove("invalid");
//     } else {
//         inputValid.classList.add("invalid");
//         inputValid.classList.remove("valid");
//     }
// }
//!============================================== Task number seven ==========================================================
const refs = {
    fontSize: document.getElementById("font-size-control"),
    span: document.getElementById("text"),
};

