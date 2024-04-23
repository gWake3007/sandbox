const refs = {
  body: document.querySelector("body"),
  list: document.querySelector(".list"),
  backdrop: document.querySelector(".backdrop"),
  closeModal: document.querySelector(".close-modal"),
  modal: document.querySelector(".modal"),
  modalImg: document.querySelector(".modal-img"),
  modalTitle: document.querySelector(".modal-title"),
  modalText: document.querySelector(".modal-text"),
  modalInfo: document.querySelector(".modal-info"),
};

const guard = document.querySelector(".js-guard");

let options = {
  root: null,
  rootMargin: "100px",
};

let observer = new IntersectionObserver(callback, options);

let page = 1;

const URL = "https://rickandmortyapi.com/api/character/";

async function fetchCarts() {
  return await fetch(`${URL}?page=${page}`).then((resp) => resp.json());
}

fetch(URL)
  .then((resp) => resp.json())
  .then((resp) => console.log(resp.results));

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
  .then((resp) => {
    refs.list.insertAdjacentHTML("beforeend", createMarcup(resp.results));
    if (resp.info.pages > page) {
      observer.observe(guard);
    }
    openModal(resp.results);
  })
  .catch((err) => console.log(err));

  refs.closeModal.addEventListener("click", closeModal);

  function closeModal() {
    refs.backdrop.classList.remove("is-open");
    refs.body.style.overflow = "visible";
    unlook = false;
  }

  document.addEventListener("keydown", function (e) {
    if(e.which === 27) {
      closeModal();
    }
  });

  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        page += 1;
        fetchCarts()
          .then((resp) => {
            refs.list.insertAdjacentHTML("beforeend", createMarcup(resp.results));
            openModal(resp.results);
            if (resp.info.pages === page) {
              observer.unobserve(guard);
            }
           
          })
          .catch((err) => console.log(err));
      }
    });
  }

  function openModal(results) {
    const links = document.querySelectorAll(".cart-a");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = Number(event.currentTarget.id);
        for (let i = 0; i < results.length; i++) {
          if (id === results[i].id) {
            //?Зверни увагу. Із за циклу фор ми можемо зробити поглиблену деструкторизацію!!!
            const { id, image, location: {name}, status, gender } = results[i];
            refs.modal.id = id;
            refs.modalImg.src = image;
            refs.modalTitle.textContent = name;
            refs.modalText.textContent = gender;
            refs.modalInfo.textContent = status;
//?Заборона на прокручування при відкритті та закритті модального вікна.
            const scrollPosition = window.pageYOffset;
            window.scrollTo(0, scrollPosition);

            refs.backdrop.classList.add("is-open");
            refs.body.style.overflow = "hidden";
            unlook = true;
            return;
          }
        }
      });
    });
  }
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
