const form = document.querySelector(".form");
//?Беремо селектори всіх інпутів.
const inputs = document.querySelectorAll(".input-form");

form.addEventListener("submit", submitAndValidationForm);

function validation(form) {
  function removeErorr(input) {
    const parent = input.parentNode;
    if (parent.classList.contains("erorr")) {
      parent.querySelector(".erorr-label").remove();
      parent.classList.remove("erorr");
    }
  }
  function createError(input, text) {
    const parent = input.parentNode;
    parent.classList.add("erorr");
    //?Створюємо label який і буде показувати помилку!
    const erorrLabel = document.createElement("label");
    erorrLabel.classList.add("erorr-label");
    if (erorrLabel.textContent !== "Поле пусте") {
      erorrLabel.textContent = text;
    }
    parent.append(erorrLabel);
  }
  let result = true;
  //?За допомогою forEach перебираємо всі inputs.
  // inputs.forEach((input) => {
  //     console.log(input);
  // })
  //?Другий спосіб за допомогою якого можна дістатися до інпутів.
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    removeErorr(input);
    if (input.value == "") {
      createError(input, "Поле пусте");
      result = false;
    }
  });
  //?Третій спосіб якщо в інпутах форми є властивість name то через деструкторизацію!
  // const {firstName, lastName, surName} = form.elements;
  return result;
}

function submitAndValidationForm(event) {
  event.preventDefault();

  if (validation(this)) {
    console.log("success");
  }
}
