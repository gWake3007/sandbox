import { createMarkup } from "../teamplates/checkOutProduct.js"; //?Це імпорт checkOut розмітки.

const refs = {
  totalPrice: document.getElementById("totalPrice"),
  clearBtn: document.getElementById("clearBtn"),
  checkOutList: document.getElementById("checkOutList"),
};

const PRODUCTS_LS_KEY = "checkout";

const productsLocal = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY)) ?? []; 
let totalCost = 0;

if(productsLocal.length !== 0) {  //?Умова якщо localStorage не пустий.Тобто довжина не дорівнює 0.
    refs.clearBtn.hidden = false;  //?То артрибут у кнопки hidden дорувнює false.Тобто він пропадає.І ми бачимо кнопку.
    totalCost = productsLocal.reduce((sum, {price, quantity}) => sum + price * quantity, 0);
}

refs.totalPrice.textContent = totalCost !== 0 ? `Total cost ${totalCost} UAN` : "Your card is empty!";

refs.checkOutList.insertAdjacentHTML("beforeend", createMarkup(productsLocal));

refs.clearBtn.addEventListener("click", clearCard);

function clearCard() {
    localStorage.removeItem(PRODUCTS_LS_KEY);  //?Видаляємо товари із localeStorage.
    refs.totalPrice.textContent = "Your card is empty!";  //?Повертаємо строку що товарів немає.
    refs.clearBtn.hidden = true;    //?Ховаємо кнопку.
    refs.checkOutList.innerHTML = "";   //?Видаляємо картки.
    window.location.href = "../index.html";  //?Переходимо за посиланням на головну сторінку.
}