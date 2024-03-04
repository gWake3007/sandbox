//!========================================== Example ( Pagination ) ======================================================
//?Pagination - потрібна для того щоб не діставати одразу всю інформацію з бек-Енду а роботи це порціями(для зручності)
// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");

// //?async - асинхронна функція.
// fetchPostsBtn.addEventListener("click", async () => {
//   try {
//     const posts = await fetchPosts(); //?await - функція чекає результату fetchPosts() і тільки після того виконується далі.
//     renderPosts(posts);
//   } catch (error) {
//     console.log(error);
//   }
// });

// //?В цій функції вказано що ліміт постів які приходять з бек-Енду 5.В кожному бек-Енді вказується це по різному в залежності від документації!
// async function fetchPosts() {
//   // Change the number of items in the group here
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts?_limit=5"
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p>${body}</p>
//         </li>`;
//     })
//     .join("");
//   postList.innerHTML = markup;
// }
//!================================================= Example ( Pagination + params ) =======================================
//?Параметри пагінації. Від зміни параметрів залежить які файли з бек-Енду ми візьмемо і відмалюємо на сторінці.
// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");

// fetchPostsBtn.addEventListener("click", async () => {
//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: 5,
//     // Change the group number here
//     _page: 3
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   postList.innerHTML = markup;
// }
//!=================================================== Example =============================================================
//?Динамічна зміна параметрів.Тобто при кожному вдалому запиті до змінної page яка є параметром fetch додається значення а також йде перевірка і кнопка змінюється і з'являється внизу з написом "Fetch more posts"(тобто додати ще інформації з бек-Енду)
// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");

// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let perPage = 10;

// fetchPostsBtn.addEventListener("click", async () => {
//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     // Increase the group number
//     page += 1;

//     // Replace button text after first request
//     if (page > 1) {
//       fetchPostsBtn.textContent = "Fetch more posts";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: perPage,
//     _page: page
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   postList.insertAdjacentHTML("beforeend", markup);
// }
//!================================================= Practical_task =====================================================
//?Фільмотека.
//?Перші три константи це все посилання на API з ключем. Перше це базове посилання.Друге це саме найпопулярніші за останній тиждень.Та третє це ключ.
//?https://developer.themoviedb.org/reference/trending-movies

function serviceMovies() {
  const BASE_URL = "https://api.themoviedb.org/3";
  const END_POINT = "/trending/movie/week";
  const API_KEY = "855f3dbd969e0d1c7572829bc43de5d4";

  const params = new URLSearchParams({
    api_key: API_KEY,
    page: 1,
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

serviceMovies().then(data => console.log(data));
