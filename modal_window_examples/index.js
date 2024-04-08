const refs = {
  body: document.querySelector("body"),
  list: document.querySelector(".list"),
  backdrop: document.querySelector(".backdrop"),
  modal: document.querySelector(".modal"),
  modalImg: document.querySelector(".modal-img"),
  modalTitle: document.querySelector(".modal-title"),
  modalText: document.querySelector(".modal-text"),
  modalInfo: document.querySelector(".modal-info"),
};

const URL = "https://rickandmortyapi.com/api/character";

async function fetchCarts() {
  return await fetch(URL);
}

// fetch(URL)
//   .then((resp) => resp.json())
//   .then((resp) => console.log(resp.results));

function createMarcup(arr) {
  return arr
    .map(
      ({ id, image, name }) => `<li class="cart">
    <a href="#" class="cart-a" id="${id}">
        <img class="cart-img" src="${image}" alt="${name}" width="300px">
        <h2 class="cart-title">${name}</h2>
    </a>
</li>`
    )
    .join("");
}

fetchCarts()
  .then((resp) => resp.json())
  .then((resp) => {
    refs.list.insertAdjacentHTML("beforeend", createMarcup(resp.results));
    const links = document.querySelectorAll(".cart-a");
    console.log(links);
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const id = Number(event.currentTarget.id);

        for (let i = 0; i < resp.results.length; i++) {
          if (id === resp.results[i].id) {
            console.log(resp.results[i]);
            refs.modalImg.src = 
          }
        }
      });
    });
  })
  .catch((err) => console.log(err));

//!========================================= ( Dont work ) ===========================================
// const URL = "https://rickandmortyapi.com/api/character";

// const list = document.querySelector(".list");
// const body = document.body;

// const option = {
//   root: null,
//   rootMargin: "300px",
// };

// async function fetchCarts() {
//   return await fetch(URL);
// }

// fetch(URL)
//   .then((resp) => resp.json())
//   .then((resp) => console.log(resp.results));

// function createMarcup(arr) {
//   return arr
//     .map(
//       ({ id, image, name }) => `<li class="cart">
//     <a href="#" class="cart-a" id="${id}">
//         <img class="cart-img" src="${image}" alt="${name}" width="300px">
//         <h2 class="cart-title">${name}</h2>
//     </a>
// </li>`
//     )
//     .join("");
// }

// fetchCarts()
//   .then((resp) => resp.json())
//   .then((resp) => {
//     list.insertAdjacentHTML("beforeend", createMarcup(resp.results));
//     const links = document.querySelectorAll(".cart-a");

//     links.forEach((link) => {
//       link.addEventListener("click", (event) => {
//         const id = Number(event.currentTarget.id);

//         for (let i = 0; i < resp.results.length; i++) {
//           if (id === resp.results[i].id) {
//             console.log(resp.results[i]);
//             body.insertAdjacentHTML(
//               "afterbegin",
//               createModalWindow(resp.results[i])
//             );
//             const backdrop = document.querySelector(".backdrop");
//             console.log(backdrop);
//             if(backdrop.classList.contains("backdrop")) {
//                 console.log(backdrop.classList.contains("backdrop"));
//                 backdrop.classlist.toggle("is-open");
//             }

//           }

//         }

//         body.classList.add("modal-open");
//       });

//     });

//   })
//   .catch((err) => console.log(err));

// function createModalWindow(obj) {
//   const { id, image, name, status, gender } = obj;
//   const markup = `<div class="backdrop">
//     <div class="modal " id="${id}">
// <img class="modal-img" src="${image}" alt="${name}">
// <h2 class="modal-title">${name}</h2>
// <p class="modal-text">${gender}</p>
// <p class="modal-info">${status}</p>
// </div>
// </div>`;
//   return markup;

// }
