const URL = "https://rickandmortyapi.com/api/character/";

const list = document.querySelector(".list-rik-morty");
const btn_loadMore = document.querySelector(".loan-more-js");
let page = 1;

function serviceCharacter() {
  return fetch(`${URL}?page=${page}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}

serviceCharacter()
  .then((data) => {
    console.log(data);
    createMarkup(data.results);
    if (data.info.pages > 1) {
      btn_loadMore.hidden = false;
    }
  })
  .catch((err) => console.log(err));

function createMarkup(data) {
  const markup = data
    .map(
      ({ image, name }) => `<li class="item-rik-morty">
    <img src="${image}" alt="${name}" class="img-rik-morty">
    <h2 class="title-rik-morty">${name}</h2>
</li>`
    )
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}

btn_loadMore.addEventListener("click", loadMore);

function loadMore() {
  page += 1;
  serviceCharacter()
    .then((data) => {
      createMarkup(data.results);
      if(data.info.pages === page) {
        btn_loadMore.hidden = true;
      }
    })
    .catch((err) => console.log(err));
}
