import { createMarkup } from "./teamplates/product.js";  //?Тут імпортуємо функцію розмітки.
import instruments from "./products.json" assert { type: "json" };
 //?Імпортуємо масив об'єктів з json файлі(без ексорту тому що це json!). А також вказуємо командою assert що це файл json!
 //? instruments - це теж саме що const для файла у самому Java Script щоб він сприймався як масив.Щоб з ним працювати.

const refs = {
    productsList: document.getElementById("products-container-id"),
    product: document.getElementById("js-product"),
    button: document.getElementById("js-add"),
};

const PRODUCTS_LS_KEY = "checkout";

refs.productsList.insertAdjacentHTML("beforeend", createMarkup(instruments));

refs.productsList.addEventListener("click", onClick);

function onClick(event) {
    console.log(event.target.id);
}