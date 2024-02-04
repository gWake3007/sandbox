import { createMarkup } from "./teamplates/product.js";  //?Тут імпортуємо функцію розмітки.
import instruments from "./products.json" assert { type: "json" };
 //?Імпортуємо масив об'єктів з json файлі(без ексорту тому що це json!). А також вказуємо командою assert що це файл json!
 //? instruments - це теж саме що const для файла у самому Java Script щоб він сприймався як масив.Щоб з ним працювати.

const refs = {
    productsList: document.getElementById("products-container-id"),
};

const PRODUCTS_LS_KEY = "checkout";

refs.productsList.insertAdjacentHTML("beforeend", createMarkup(instruments));

refs.productsList.addEventListener("click", onClick);

function onClick(event) {
    if(event.target.id !== "js-add"){
        return;
    } 
    const product = event.target.closest("#js-product");//? closest("") - шукає найблищий елементвищого рівня.
    const productId = Number(product.dataset.id);
    const currentProduct = instruments.find(({id}) => id === productId);
    const productsLocal = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY)) ?? []; 
    //?Для читання з localStorage данних(якщо null то нічого немає) то оператором нулевого злиття ?? створюємо пустий масив.
    const checkOutProductId = productsLocal.findIndex(({id}) => id === productId);
    //?Зробленно для того щоб не додаватии один і той самий товар багато разів. А тільки змінювалась кількість.
    if(checkOutProductId === -1) {   //?Умова якщо цього товару немає.
        currentProduct.quantity = 1; //?В самому продукті(так як ми стукаємось до нього по айді додаємо властивість кількість)
        productsLocal.push(currentProduct);  //?То до масива пушимо поточний продукт.
    } else {
        productsLocal[checkOutProductId].quantity += 1;  //?Якщо вже є цей товар то тільки додаємо кількість.
    }
    localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify(productsLocal));
}