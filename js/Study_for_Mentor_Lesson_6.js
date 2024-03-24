//!============================================ Task pagination =========================================================
//?Пагінація елементів бек-Енду з Rik&MortyApi!!!По натисканню на кнопку Load More далі відбувається пагінація.
// const URL = "https://rickandmortyapi.com/api/character/";

// const list = document.querySelector(".list-rik-morty");
// let page = 1;

// function serviceCharacter() {
//   return fetch(`${URL}?page=${page}`).then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.status);
//     }
//     return resp.json();
//   });
// }

// serviceCharacter()
//   .then((data) => {
//     console.log(data);
//     createMarkup(data.results);
//     if (data.info.pages > 1) {
//       btn_loadMore.hidden = false;
//     }
//   })
//   .catch((err) => console.log(err));

// function createMarkup(data) {
//   const markup = data
//     .map(
//       ({ image, name }) => `<li class="item-rik-morty">
//         <img src="${image}" alt="${name}" class="img-rik-morty">
//         <h2 class="title-rik-morty">${name}</h2>
//         </li>`
//     )
//     .join("");
//   list.insertAdjacentHTML("beforeend", markup);
// }

// const btn_loadMore = document.querySelector(".loan-more-js");
// btn_loadMore.addEventListener("click", loadMore);

// function loadMore() {
//   page += 1;
//   serviceCharacter()
//     .then((data) => {
//       createMarkup(data.results);
//       if (data.info.pages === page) {
//         btn_loadMore.hidden = true;
//       }
//     })
//     .catch((err) => console.log(err));
// }
//?Пагінація через infiniti - skroll(Безкінечний - скрол)
const URL = "https://rickandmortyapi.com/api/character/";

const list = document.querySelector(".list-rik-morty");
let page = 1;

//?Intersection Observer API.
//?Якщо слідкуємо за всім viewport.
//?За яку відстань до кінця контенту завантажувати наступній з бек-Енду.
let options = {
  root: null,
  rootMargin: "300px",
};

const guard = document.querySelector(".js-guard"); //?Контроллер для Intersection Observer API.Коли закінчується pages з бек-Енду.
let observer = new IntersectionObserver(callback, options);

function serviceCharacter() {
  return fetch(`${URL}?page=${page}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}

function createMarkup(data) {
  return data
    .map(
      ({ image, name }) => `<li class="item-rik-morty">
        <img src="${image}" alt="${name}" class="img-rik-morty">
        <h2 class="title-rik-morty">${name}</h2>
        </li>`
    )
    .join("");
}

serviceCharacter()
  .then((data) => {
    console.log(data);
    list.insertAdjacentHTML("beforeend", createMarkup(data.results));
    if (data.info.pages > page) {
      //?Умова для роботи гварда.Який контролює коли закінчатся pages у бек-Енді.
      observer.observe(guard);
    }
  })
  .catch((err) => console.log(err));

//?Звичайний скролинг.
// window.addEventListener("scroll", infinitiSkroll);

// function infinitiSkroll() {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     page += 1;
//     serviceCharacter()
//       .then((data) => {
//         console.log(data);
//         createMarkup(data.results);
//         if (data.info.pages === page) {
//           window.removeEventListener("scroll", infinitiSkroll);
//         }
//       })
//       .catch((err) => console.log(err));
//   }
// }
//?Intersection Observer API.Приклад функції.
function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      page += 1;
      serviceCharacter()
        .then((data) => {
          list.insertAdjacentHTML("beforeend", createMarkup(data.results));
          if (data.info.pages === page) {
            observer.unobserve(guard);
          }
        })
        .catch((err) => console.log(err));
    }
  });
}
