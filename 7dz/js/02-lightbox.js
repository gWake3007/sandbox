import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`,
  ""
);

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();
    const galleryA = new SimpleLightbox (".gallery a", {
        captions: true,
        captionDelay: 250,
        captionPosition: 'bottom',
        captionsData: 'alt',
    });
}
