//!================================================= First Task ==========================================================
//?Задача черги до каси.Дається масив і параметр.МАСИВ це числа(покупці) кожне число значить скільки покупець проведе часу
//?на касі.Другий параметр це ЧИСЛО кількість касс. ПОТРІБНО Рівномірно розставити покупців по касам в форматі об'єкта.
//?Ключ об'єкта це номер касси а числа з масиву це покупці(значення об'єкту).

// function fn(arr, count) {
//   const obj = {};
//   for (let i = 1; i <= count; i++) {
//     obj[i] = 0;
//   }
//   arr.forEach((item) => {
//     const values = Object.values(obj);  //?Метод для считування всіх ключів данного об'єкту.
//     const min = Math.min(...values);    //?Знаходимо найменьше значення із усіх ключів з об'єкту.
//     const idx = values.indexOf(min) + 1;//?Шукаємо індекс найменьшого значення в об'єкті(+1 тому що каса починається с 1 каси)
//     obj[idx] += item; //?Підставляємо значення.По методам вище вже знаємо де меньше число і його індекс.Та по індексу додаємо.
//   });
//   return obj;
// }

// console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));
//!==================================================== Second Task ======================================================
//?Create: To do list!
const form = document.querySelector(".js-form");
const list = document.querySelector(".js-list");
const arr = JSON.parse(localStorage.getItem("CardKey")) ?? [];
const id = Math.random().toString(36).substring(2);

form.addEventListener("submit", submitList);

function submitList(event) {
  event.preventDefault();
  //   const { title, text } = event.currentTarget.elements; //?За допомогою деструкторизації ми добираємося до input та textarea.7
  //   //?title, text - це name в данних полів форми.Тобто добираємося через name але робимо деструкторизацію.
  //   const markup = `<li class="cart">
  //   <h3 class="titleMarkup">${title.value}</h3>
  //   <p class="textMarkup">${text.value}</p>
  //   </li>`;
  const titleH = event.target.elements.title.value; //?Розіб'ємо в такий спосіб щоб
  const textP = event.target.elements.text.value;

  const markup = `<li data-id="${id}" class="cart">
  <h3 class="titleMarkup">${titleH}</h3>
  <p class="textMarkup">${textP}</p><button type="button" class="js-remove">Remove</button>
  </li>`;

  list.insertAdjacentHTML("afterbegin", markup);

  const obj = {
    titleH,
    textP,
    id,
  };

  arr.push(obj);

  localStorage.setItem("CardKey", JSON.stringify(arr));

  event.target.elements.title.value = "";
  event.target.elements.text.value = "";
}

function markup(array) {
  return array
    .map(
      (
        { titleH, textP, id, completed } //?Тут тернарним оператором додаємо клас з CSS("complite")
      ) =>
        `<li data-id="${id}" class="cart ${completed ? "complite" : ""}">
  <h3 class="titleMarkup">${titleH}</h3>
  <p class="textMarkup">${textP}</p><button type="button" class="js-remove">Remove</button>
  </li>`
    )
    .join("");
}

list.insertAdjacentHTML("afterbegin", markup(arr));

list.addEventListener("click", onClick);

function onClick(event) {
  if (event.target === event.currentTarget) return; //?Якщо таргет кліку дорівнює форма то виходимо з функції.
  const item = event.target.closest("li"); //?Добераємося до дітей ul list через команду closest().
  if (event.target.classList.contains("js-remove")) {//?Метод contains() - перевіряє чи містить таргер цей класс.
    item.remove();                                   //?Якщо так то видаляє цей item тобто li(картку) та виходить із функції
    return;
  }
  item.classList.add("complite"); //?Додаємо класс .complite стилі на який вже написані.7
  const findItem = arr.find(({ id }) => id === item.dataset.id); //?знаходимо саме той id картки на яку клікнули(виконана)
  findItem.completed = true; //?Позначаємо що вона виконана(Самойстійно створенна властивість БУЛЕВУ!)
  localStorage.setItem("CardKey", JSON.stringify(arr)); //?Та переписуємо значення картки в якій змінене значення на виконана.
}

// const randomId = Math.random().toString(36).substring(2);  //?Змінна для рандомного ID.
