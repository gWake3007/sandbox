import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) => `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`
  )
  .join("");

gallery.innerHTML = markup;

gallery.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  const clickTag = event.target;
  if (clickTag.tagName === "IMG") {
    const instance = basicLightbox.create(`
    <img
    src="${event.target.dataset.source}"
  />`);
    instance.show();
    document.body.addEventListener("keydown", pressEscape);
    function pressEscape(event) {
      if (event.code === "Escape") {
        instance.close();
      }
    }
  }
}
