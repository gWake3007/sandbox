function createMarkup(arr) {
  return arr
    .map(
      ({
        id,
        img,
        name,
        price,
        description,
      }) => `<li data-id="${id}" class="product-card" id="js-product">
  <img src="${img}" alt="${name}" class="product-img">
  <h2 class="product-title">${name}</h2>
  <p class="product-description">${description}</p>
  <p class="product-price">${price} грн</p>
  <button class="product-add-btn" type="button" id="js-add">Add to basket</button>
</li>`
    )
    .join("");
}

export {createMarkup};//?Експортуємо функцію для створення розмітки.(Структуруємо наш проєкт щоб не робити все в одному файлі)