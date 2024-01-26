//!================================================= First example ===============================================================
//? Event "scroll" - спрацьовує при скролингу мишкою.
// const output = document.querySelector(".output");
// let scrollEventCounter = 0;

// document.addEventListener("scroll", () => {   //?Event на document тому що на сторінці скролинг відбувається!
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });
//!================================================= Second example ============================================================
//? Використання функцій бібліотеки Lodash!
// const result = _.add(2, 3); //?summ result
// console.log(result);

// const resultSlice = _.drop([1,2,3,4,5], 2); //? _.drop(...) - приклад методу slice в бібліотеці Lodash.
// console.log(resultSlice);

// const resultJoin = _.join(["a","b","c"], "*");
// console.log(resultJoin);

//? pull example - прибирає всі не потрібні значення з масиву.
// const arr = ["a","b","c","a","a","b","c"];
// console.log(arr);

// const resultPullArr = _.pull(arr, "a", "b");
// console.log(arr); //? _.pull(...) - мутує масив прибираючи зайві аргументи що ми вказали вище.
// console.log(resultPullArr); //?В результаті також буде вже мутований масив!

// const array = [1,2,3,4,5,6,7,1,2,3];
// console.log(array);

// const resultPullArray = _.pull(array, 1,2,3);
// console.log(array);  //? Обидва результати однакові як і в попередньому прикладі!
// console.log(resultPullArray);
//!=============================================== Third example ===============================================================
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(     //?_.throttle - потрібен для затримки спрацьовування функції(евенту).Щоб не спрацьовував надто часто.
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 100)   //? не частіше чим раз в 100 мілісекунд!
// );
//!============================================ Fourth example ================================================================
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const debouncedOutput = document.querySelector(".output.debounced");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   debounced: 0
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// document.addEventListener(  //? _.debounce - спрацьовую якщо перерва між евентом була у вказаному параметрі!
//   "scroll",
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)  //? Якщо в данному випадку "scroll" - зупиниться на 300мс(0,3 секунди) - то буде змінене значення на 1 в данному випадку.
// );
//!=============================================== Fifth example ===============================================================
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const trailingOutput = document.querySelector(".output.trailing");
// const leadingOutput = document.querySelector(".output.leading");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   trailing: 0,
//   leading: 0
// };

// //? Trailing debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.trailing += 1;
//     trailingOutput.textContent = eventCounter.trailing;
//   }, 300)
// );

// //? Leading debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       eventCounter.leading += 1;
//       leadingOutput.textContent = eventCounter.leading;
//     },
//     300,
//     { trailing: false, leading: true }    //?Example trailing & leading => debounce. Спрацьовування спочатку скролингу чи вкінці.
//   )
// );

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );
//!===================================================== First task from lesson ===================================================
// const cats = [
//   "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960",
//   "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960",
//   "https://images.pexels.com/photos/1440403/pexels-photo-1440403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960",
//   "https://images.pexels.com/photos/2817421/pexels-photo-2817421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960",
//   "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960",
//   "https://images.pexels.com/photos/3635550/pexels-photo-3635550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960",
//   "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960",
// ];

// const ulList = document.querySelector(".js-cats");

//? map() + join("");
// const markup = cats.map(url =>
//  `<li><img src="${url}" alt="cat" loading="lazy" width="300">
//  <p>This is a cat!</p></li>`
// ).join("");

//? reduce();
// const markup = cats.reduce(
//   (acc, url) => acc + `<li><img src="${url}" alt="cat" loading="lazy" width="300">
// <p>This is a cat!</p></li>`,
//   ""
// );

// ulList.insertAdjacentHTML("beforeend", markup);
//!================================================== Second task from lesson =====================================================
// const input = document.querySelector(".js-search");

// input.addEventListener("input", eventInput);
//? Throttle. ВАЖЛИВО!!! Бібліотека Lodash - з методами throttle & debounce в event погано реагує на currentTarget.Краще target!!!
// input.addEventListener("input", _.throttle(eventInput, 1000, {traling: true, leading: false,}));//?traling - виклик на початку.
//? leading - виклик в кінці по закінченню таймінгу в опції.

//? Debounce.
// input.addEventListener("input", _.debounce(eventInput, 1000, {traling: true, leading: true,}));

// function eventInput(event) {
//     console.log(event.target.value);
// }
//!================================================ Three task from lesson(Practical) ==============================================
const combination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const historyX = [];   //?Історія гравців X та O.
const historyO = [];
let player = "X";    //?Поточний гравець.

const content = document.querySelector(".content");

content.addEventListener("click", handleClick);

createMarkup();

function createMarkup() {
  let markup = "";
  for (let i = 1; i <= 9; i++) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  content.innerHTML = markup;
}

function handleClick(event) {
    if(event.target.textContent || event.target === event.currentTarget){ //?Умова в якій якщо textContent - не пустий або ми клікнули
        //? не по бордеру сомого content - тобто div в якому квадрати(промазали) то ми виходимо з функції! Miss click!
        return;
    }
    const id = Number(event.target.dataset.id);  //?dataset - завжди зберігає строку(str).Тому перетворюємо в Number!
    let isWinner = false;

    if(player === "X") {
        historyX.push(id);
        isWinner = historyX.length >= 3 ? checkWinner(historyX) : false; //?Перевірка на переможця починається коли є 3 крестика або нулика
    } else {
        historyO.push(id);
        isWinner = historyO.length >= 3 ? checkWinner(historyO) : false;
    }

    if(isWinner) {
        const instance = basicLightbox.create(`<div class="box"><h1>Player ${player} - is winner!</h1></box>`);
        instance.show();   //?Вище ми за допомогою бібліотеки створюємо модалку. А тут в рядку показуємо її.
        resetGame();   //?Після модалки у нас функція reset!
        return;
    }

    if(historyX.length === 5){  //?Модалка нічьї!
        const instance = basicLightbox.create(`<div class="box"><h1>No winner!</h1></box>`);
        instance.show();
        resetGame();
        return;
    }

    event.target.textContent = player;    //?Для заповненя поля div текст контентом зі змінної player тобто або крестиком або нуликом.
    player = player === "X" ? "O" : "X";  //?Тернарний оператор для зміни крестика на нулик і навпаки.
}

//?Метод some() - перебирає масив масивів і знаходить ті комбінації в яких хоч один елемент є в усторії X || O.
//?Метод every() & includes() - перебирає із тих варіантів що залишились і порівнює всі id(тобто номери клітинок). 
//? some() & every() - працює в данному випадку як два цикли for. Тобто цикл в циклі.
function checkWinner(history) {
    return combination.some(item => item.every(id => history.includes(id)));
}

function resetGame() {
    createMarkup();  //?Заново створюємо розмітку.
    player = "X";    //?Робимо X першим гравцем щоб наступня гра не починалася з O!!!
    historyX.splice(0);  //?Очищаємо мотодом splice(0) - всю історію(Так цей метод видаляє всі елементи з масиву).
    historyO.splice(0);
}

