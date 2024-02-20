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

form.addEventListener("submit", submitList);

function submitList(event) {
  event.preventDefault();
  const { title, text } = event.currentTarget.elements; //?За допомогою деструкторизації ми добираємося до input та textarea.7
  //?title, text - це name в данних полів форми.Тобто добираємося через name але робимо деструкторизацію.
  const markup = `<li>
  <h3>${title.value}</h3>
  <p>${text.value}</p>
  </li>`;
  list.insertAdjacentHTML("beforeend", markup);
}
