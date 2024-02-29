//!======================================== Example ( {JSON} placeholder ) ================================================
//?Приклад публічного REST API - який надає колекцію несправжніх користувачів(для прикладу як це працює "https://jsonplaceholder.typicode.com/users")
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//!======================================= Example ( {JSON} placeholder users ) ===========================================
//?"https://jsonplaceholder.typicode.com/users" - откримуємо список несправжніх юзерів з бек-енду.
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     // Response handling
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });
//?РОЗІБРАТИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!========================================== Example ( add users from back-End ) ========================================
//?Додавання не існуючих юзерів та їх данні з "https://jsonplaceholder.typicode.com/users" на сторінку.
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))      //?В успушному виконанні додавання розмітки з бек-Енду(Юзерів та інформацію)
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {    //?Функція повертає проміс. Тому вище в самому івенті ми додаємо ланцюжки методів then та catch.
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUsers(users) {   //?Сама функція створення і додавання розмітки.
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }
//!========================================== Example ( add not all users from back-End ) ================================
//?Додавання не всіх юзерів з бек енду.В адресі там вказано через _ та & що буде тільки 7 юзерів з бек-Енду.Але слід пам'ятати що за допомогою цих розділових знаків і в такий спосіб вказується тільки в цьому бек-Енду. В інших по іншому!
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch(
//     "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }
//!============================================ Example ( URLSearchParams ) ==================================================
//?URLSearchParams - Екземпляр класу який створює об'єкт з параметрами для REST API.
//?Зроблено для зручності щоб не вписувати ці параметри в одному рядку.
// const searchParams = new URLSearchParams({
//     _limit: 5,
//     _sort: "name",
//   });

//   console.log(searchParams.toString());   //?Не треба параметри перетворювати в рядок.

//   const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`; //?В шаблонній строці вони самі самі перетворюються на рядок і додається між ними роздільник &.
//   console.log(url);
//!=========================================== Example ( Headers ) ======================================================
//? Headers - обєкт класу для додавання, видалення та зміни заголовків.
// const headers = new Headers({
//     "Content-Type": "application/json",
//     "X-Custom-Header": "custom value",
//   });

//   headers.append("Content-Type", "text/bash");
//   headers.append("X-Custom-Header", "custom value");
//   headers.has("Content-Type"); // true
//   headers.get("Content-Type"); // "text/bash"
//   headers.set("Content-Type", "application/json");
//   headers.delete("X-Custom-Header");
//?Зараз вже використовують тількі в такий спосіб. Приклад вище застарілий.
//   const headers = {
//     "Content-Type": "application/json",
//     "X-Custom-Header": "custom value",
//   };

//   fetch("https://jsonplaceholder.typicode.com/users", {
//     headers: {
//       Accept: "application/json",
//     },
//   }).then(response => {
//     console.log(response);
//   });
//!=============================== Example (call for REST API (Example fetch)) ==============================================
//?Приклад fetch по нашому посиланню з бек-Енду.
// const promiseFetch = fetch("https://rickandmortyapi.com/api/character");
// console.log(promiseFetch); //?fetch() - завжди передає проміс(асинхронна операція)Тут статус pending(очікування)
// fetch("https://rickandmortyapi.com/api/character")
//   .then((Response) => Response.json())
//   .then((Response) => console.log(Response)); //?В данному прикладі в консолі вже буде результат промісу з яким вже можна працювати.Також дуже важливий момент ми на об'єкті Response викликали МЕТОД json().Не плутати з форматом JSON!!!
// fetch("https://rickandmortyapi.com/api/character1") //?тут спеціально зробленна помилка в шляху(в кінці 1)
//   .then((Response) => {
//     console.log(Response);
//     if (!Response.ok) {
//       //?ok це значення що відповідає за успішне чи не успішне виконання промісу(булеве значення)
//       throw new Error("Примусово закидуємо значення у catch"); //?throw - потрібен для того щоб програма одразу перейшла до обробників try... catch.(САМОСТІЙНО СТВОРЮЄМО ПОМИЛКУ!)
//     }
//     return Response.json();
//   })
//   .then((Response) => console.log(Response))
//   .catch((error) => console.error(error, "1"));
//!============================================= Task Practical ===========================================================
//?Програма для відображення прогнозу погоди.
// https://www.weatherapi.com/docs/
function serviceWeather(city, days) {
  const FORECAST_URL = "http://api.weatherapi.com/v1/forecast.json";
  const API_KEY = "66f9e81543404d02beb160521230808";
  const params = new URLSearchParams({
    //?Об'єкт параметрів.
    key: API_KEY, //?Ключ.
    q: city, //?q - це місто в якому ми хочемо дізнатись погоду.
    days, //?Скороченна властивість.Тобто параметр одразу береться з аргементу функції!
    lang: "uk", //?Мова Українська.
  });
  return fetch(`${FORECAST_URL}?${params}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText); //?statusText - Описує статус якщо викликається якась помилка.
    }
    return res.json();
  }); //?До URL додаємо параметри і між ними ? який ставлять перед параметрами.
}

serviceWeather("Kiev", 3)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
