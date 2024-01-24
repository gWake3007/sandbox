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
// const refs = {
//     fontSizeControl: document.getElementById("font-size-control"),
//     span: document.getElementById("text"),
// };

// refs.span.style.fontSize = refs.fontSizeControl.value + `px`;
// refs.fontSizeControl.addEventListener("input", changeFontSize);

// function changeFontSize() {
//     refs.span.style.fontSize = refs.fontSizeControl.value + `px`;
// }
//!============================================ Task number eight ===========================================================
// const form = document.querySelector(".login-form");

// form.addEventListener("submit", submitForm);

// function submitForm(event) {
//   event.preventDefault();
//   const formCurrentTarget = event.currentTarget;
//   const email = this.elements.email.value;
//   const password = this.elements.password.value;
//   if (email === "" || password === "") {
//     alert(`Всі поля повинні бути заповнені.`);
//   } else {
//     const data = {
//         email: email,
//         password: password,
//     };
//     console.log(data);
//     formCurrentTarget.reset();
//   }
// }
//!====================================================== Task number nine ==========================================================
// const refs = {
//     span: document.querySelector(".color"),
//     button: document.querySelector(".change-color"),
//     body: document.querySelector("body"),
// };

// refs.button.addEventListener("click", clickColor);

// function clickColor(event) {
//     refs.body.style.backgroundColor = getRandomHexColor();
//     refs.span.textContent = getRandomHexColor();
// }

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }
//!========================================================== Task number ten =====================================================
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const refs = {
    controls: document.getElementById("controls"),
    input: document.querySelector("input[type=number]"),
    boxes: document.getElementById("boxes"),
    destroy: document.querySelector("button[data-destroy]"),
    create: document.querySelector("button[data-create]"),
  };

  refs.create.addEventListener("click", createBoxes);
  refs.destroy.addEventListener("click", destroyBoxes);

  function destroyBoxes () {
    refs.boxes.innerHTML = "";
  }

  function createBoxes() {
    const items = [];
    const inputValue = refs.input.value;
    const inputStep = refs.input.getAttribute("step");
    const inputMin = refs.input.getAttribute("min");
    const inputMax = refs.input.getAttribute("max");
    if(inputValue <= inputMax) {
        for(let i = inputMin; i <= inputValue; i++) {
            const color = getRandomHexColor();
            const item = document.createElement("div");
            const size = 10 + (i * inputStep) * 10;
            item.style.borderRadius = "5px";
            item.style.width = `${size}px`;
            item.style.height = `${size}px`;
            item.dataset.color = color;
            item.style.backgroundColor = color;
            items.push(item);
        }
    } else {
        alert("Не може бути більше ста боксів!");
    }
    return refs.boxes.append(...items);
  }
  //!================================================