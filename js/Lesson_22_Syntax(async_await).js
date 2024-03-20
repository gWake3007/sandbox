//!=================================== Example (fetch & then / catch promise & async || await) ============================
//?Запит на сервер.
// const fetchFriends = () => {
//     return fetch("my-api.com/me").then(token => {
//       console.log(token);
//     });
//   };
//?Запит профілю користувача.
// const fetchFriends = () => {
//     return fetch("my-api.com/me")
//       .then(token => {
//         return fetch(`my-api.com/profile?token=${token}`);
//       })
//       .then(user => {
//         console.log(user.id);
//       });
//   };
//?Так виглядає звичайний запит.
// const fetchFriends = () => {
//     return fetch("my-api.com/me")
//       .then(token => {
//         return fetch(`my-api.com/profile?token=${token}`);
//       })
//       .then(user => {
//         return fetch(`my-api.com/users/${user.id}/friends`);
//       });
//   };

//   fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error));
//?Теж саме але з використанням await & async.
// const fetchFriends = async () => {
//     const token = await fetch("my-api.com/me");
//     const user = await fetch(`my-api.com/profile?token=${token}`);
//     const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//     return friends;
//   };

//   fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error));
//!=============================================== Example (async & await) =================================================
//?async & await - спосіб написання асинхронної функції.Не блокують основний потік виконання програм та виглядає як синхронна функція.
// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
//   };

//   fetchUsers().then(users => console.log(users));
//!======================================= Example ( try {}(catch) or then().catch ) =========================================
//?Якщо результат промісу не обробляється в зовнішньому коді то він обробляється за допомогою try || catch.
// const fetchUsers = async () => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const users = await response.json();
//       console.log(users);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   fetchUsers();
//?Якщо результат промісу обробляється за межами функції то використовуємо then || catch.
//   const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
//   };

//   fetchUsers()
//     .then(users => console.log(users))
//     .catch(error => console.log(error));
//?Якщо результат однієї асинхронної функції використовується в другій асинхронній функції то обробляємо це методом try || catch.
// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
//   };

//   const doStuff = async () => {
//     try {
//       const users = await fetchUsers();
//       console.log(users);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   doStuff();
//!========================================== Example ( Many promises || Promise.all ) ======================================
//?Тут всі запити виконуються послідовно.
// const fetchUsers = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const firstResponse = await fetch(`${baseUrl}/users/1`);
//     const secondResponse = await fetch(`${baseUrl}/users/2`);
//     const thirdResponse = await fetch(`${baseUrl}/users/3`);

//     const firstUser = await firstResponse.json();
//     const secondUser = await secondResponse.json();
//     const thirdUser = await thirdResponse.json();

//     console.log(firstUser, secondUser, thirdUser);
//   };

//   fetchUsers();
//?Альтернатива попереднього коду.Тільки тут всі запити виконуються разом.ДАННИЙ ПРИКЛАД ВИКОРИСТОВУЄМО ТІЛЬКИ ТАМ ДЕ ЖОДЕН ІЗ ПРОМІСІВ НЕ ЗАЛЕЖИТЬ ОДИН ВІД ОДНОГО!!!Та використовуємо Promise.all.
//   const fetchUsers = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const userIds = [1, 2, 3];

//     // 1. Створюємо масив промісів
//     const arrayOfPromises = userIds.map(async userId => {
//       const response = await fetch(`${baseUrl}/users/${userId}`);
//       return response.json();
//     });

//     // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
//     const users = await Promise.all(arrayOfPromises);
//     console.log(users);
//   };

//   fetchUsers();
//!============================================ Example (AJAX-CODE) =====================================================
//?AJAX-CODE - приклад стандартного коду.
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", async () => {
//   try {
//     const users = await fetchUsers();
//     renderUserListItems(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// async function fetchUsers() {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const userIds = [1, 2, 3, 4, 5];

//   const arrayOfPromises = userIds.map(async (userId) => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   const users = await Promise.all(arrayOfPromises);
//   return users;
// }

// function renderUserListItems(users) {
//   const markup = users
//     .map(
//       (user) => `<li class="item">
//         <p><b>Name</b>: ${user.name}</p>
//         <p><b>Email</b>: ${user.email}</p>
//         <p><b>Company</b>: ${user.company.name}</p>
//       </li>`
//     )
//     .join("");
//   userList.innerHTML = markup;
// }
//!===================================== Example (Construction async/await) ============================================
//?Послідовні запити.
//?Конструкція async/await. Приклади через звичайний fetch в порівнянні з async/await.
// function serviceCountry() {
//   const URL = "https://restcountries.com/v3.1/name/Ukraine";
//   return fetch(URL)
//     .then((resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     })
//     .then(console.log);
// }

// serviceCountry().catch(console.log);
//?Приклад через AXIOS libraty.
// function serviceCountry() {
//   const URL = "https://restcountries.com/v3.1/name/Ukraine";
//   return axios.get(URL);
// }

// serviceCountry()
//   .then(({ data }) => console.log(data))
//   .catch((error) => console.log("AXIOS ERROR:", error));
//?ASYNC FETCH Example!
// async function serviceCountry() {
//   //?Вказуємо що функція асинхронна.
//   const URL = "https://restcountries.com/v3.1/name/Ukraine";
//   try {      //?Коректна обробка промісу з async/await через try/catch!
//     const resp = await fetch(URL); //?await - завжди повертає результат промісу.
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     const data = await resp.json(); //?Для більш корректної роботи треба дочекатися цей проміс тому ставимо await!!!
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("TRY_CATCH:", error);
//   }
// }

// serviceCountry();
//?ASYNC AXIOS Example!
// async function serviceCountry() {
//   const URL = "https://restcountries.com/v3.1/name/Ukraine";
//   try {
//     const { data } = await axios.get(URL); //?Тут також деструкторизуємо одразу щоб не отримувати зайвої інформації.А одразу дату!
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("TRY_CATACH_AXIOS:", error);
//   }
// }

// serviceCountry();
//!===================================== Example ( sequential and parallel queries ) ======================================
//?Послідовні та паралельні запити приклади!!!
//?Послідовні!
// async function serviceCountry() {
//   const rest1 = await axios.get("https://restcountries.com/v3.1/name/Ukraine");
//   const rest2 = await axios.get("https://restcountries.com/v3.1/name/France");
//   const rest3 = await axios.get("https://restcountries.com/v3.1/name/Poland");
//   console.log(rest1);
//   console.log(rest2);
//   console.log(rest3);
// }

// serviceCountry();
//?Паралельні!
// async function serviceCountry() {
//   const countries = ["Ukraine", "France", "Poland"];
//   const respPromises = countries.map(async (country) => {
//     const response = await axios(
//       `https://restcountries.com/v3.1/name/${country}`
//     );
//     console.log(response);
//     return response;
//   });
//   console.log(respPromises);
// }

// serviceCountry();
//!====================================================== Practical Task ===============================================
//?
// const bek = "https://restcountries.com/";
// const bekWeather = "https://weatherapi.com/docs/";
const countries = ["Ukraine", "Poland", "Spain", "Canada", "France", "Italia"];
const capitals = serviceCountry(countries);

//?Функція для створення масиву столиць тих країн що у нас в масиві.
async function serviceCountry(countries) {
  const respPromises = countries.map(async (country) => {
    const { data } = await axios(
      `https://restcountries.com/v3.1/name/${country}`
    );
    // console.log(data[0].capital[0]); //?Показуємо столиці країн.
    return data[0].capital[0];
  });
  // console.log(respPromises); //?Масив промісів fulfilled.Вже видно результат але це масив промісів.
  const data = await Promise.allSettled(respPromises);
  // console.log(data); //?Отримуємо масив промісів.
  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value);
}

// serviceCountry(countries).then(console.log);
//?
async function serviceWeather(capitals) {
  const API_KEY = "77b507ce40a34620ab9105443242003";
  const BASE_URL = "http://api.weatherapi.com/v1";
  const END_POINT = "/current.json";

  const response = capitals.map(async (country) => {
    const { data } = await axios(
      `${BASE_URL}${END_POINT}?key=${API_KEY}&q=${country}`
    );
    console.log(data);
    return data;
  });

  const data = await Promise.allSettled(response);
  console.log(data);
  return data.filter(({ status }) => status === "fulfilled");
}

serviceWeather(capitals);
