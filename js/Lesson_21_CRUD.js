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
//!================================================= Example 
//?
