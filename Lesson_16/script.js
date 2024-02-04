import instruments from "./products.json" assert { type: "json" };
 //?Імпортуємо масив об'єктів з json файлі(без ексорту тому що це json!). А також вказуємо командою assert що це файл json!
 //? instruments - це теж саме що const для файла у самому Java Script щоб він сприймався як масив.Щоб з ним працювати.
console.log(instruments);

const refs = {
    productsList: document.getElementById("products-container-id"),
};

const PRODUCTS_LS_KEY = "checkout";

