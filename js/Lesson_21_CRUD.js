//!================================================ Example (POST) =========================================================
//?Отримуємо масив об'єктів posts з бек-Енду.
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));

//?Динамічно смінюємо шлях до одного з постів (posts)
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

//?Додаємо options з данними які в свою чергу додаємо до posts.method:"POST" - дає бек-Енду знати що треба створити новий post
// const postToAdd = {
//     author: "Mango",
//     body: "CRUD is awesome",
//   };

//   const options = {
//     method: "POST",
//     body: JSON.stringify(postToAdd),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };

//   fetch("https://jsonplaceholder.typicode.com/posts", options)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error));

//?Методи PUT & PATCH - оновлюють дані у вже існуючого ресурса(метод використовується в залежності від документаціїї бек-Енду)
//?Метод PATCH - замінює значення. Метод PUT - повністю замінює ресурс.
// const postToUpdate = {
//     id: 1,
//     body: "CRUD is really awesome",
//   };

//   const options = {
//     method: "PATCH",
//     body: JSON.stringify(postToUpdate),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };

//   fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log("ERROR" + error));

//?Метод DELETE - для видалення існуючих данних.
// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE",
// })
//   .then(() => console.log("Post deleted"))
//   .catch(error => console.log("Error:", error));
//!================================================= Practic ==============================================================
//?Діставання інформації про юзерів зі своєго бек-Енду(серверу).
const refs = {
  fetchBtn: document.querySelector(".fetch"),
  loader: document.querySelector(".loader"),
  list: document.querySelector(".list"),
  addUserBtn: document.querySelector(".add"),
  formWrapper: document.querySelector(".form-wrapper"),
};

refs.addUserBtn.style.display = "none";
refs.loader.style.display = "none";

const BASE_URL = "https://jsonplaceholder.typicode.com";

refs.fetchBtn.addEventListener("click", getUsers);

function getUsers() {
  refs.loader.style.display = "block"; //?Лоадер стиль block тому що заголовок та текс блокові елементи.
  fetch(`${BASE_URL}/posts`)
    .then((response) => response.json())
    .then((users) => {
      const markup = users
        .map(
          ({ title, body, id }) => `
        <li id="${id}">
        <p>Name:<span class="name">${title}</span></p>
        <p>Email:<span class="email">${body}</span></p>
        <button type="button" class="delete">Delete</button>
        <button type="button" class="edit">Edit</button>
        </li>
        `
        )
        .join("");
      refs.list.innerHTML = "";
      refs.list.insertAdjacentHTML("afterbegin", markup);
      refs.fetchBtn.style.display = "none";
      refs.addUserBtn.style.display = "inline"; //?Кнопка inline так як вона є блочним елементом.
      const delBtns = document.querySelectorAll(".delete");
      delBtns.forEach((btn) => btn.addEventListener("click", deleteUser));
      const editBtns = document.querySelectorAll(".edit");
      editBtns.forEach((btn) => btn.addEventListener("click", editUser));
    })
    .catch((error) => console.log(error))
    .finally(() => {
      refs.loader.style.display = "none"; //?По завершенню приховуємо лоадер!
    });
}

function deleteUser(event) {
  const id = event.target.parentNode.id; //?Добираємось через кнопку Delete до id батьківського елементу li.
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  event.target.textContent = "Deliting";
  fetch(`${BASE_URL}/posts/${id}`, options)
    .then(() => getUsers()) //?Заново викликаємо функцію getUserts() - щоб оновити дані з бек енду без видаленного юзеру.
    .catch((error) => console.log(error));
}

function editUser(event) {}
