import { hello, greating } from "./node-tut/index.js";

console.log(hello());
console.log(greating());









//!=============================================== Command npm =========================================================
//?pwd - шлях до поточної директорії.
//?ls - список усіх резурсів у директорії(крім .gitignore & .prettierrc прихованих файлів(ті що починаються із крапки!)).
//?ls -la - список усіх ресурсів з ПРИХОВАНИМИ!!!
//?(cd (шлях наприклад cd node-tut)) - перехід до іншої директорії.
//?cd .. - перехід до папки вище.(вихід з поточної папки!)
//?cd . - перехід до поточної папки(в якій ти знаходишься якщо робив щось із файлами в цій папці і тд.)
//?cd node_modules/validator - перехід до більш вкладеної папки(за допомогою написання шляху).
//?cd ../../ - вихід з двух папок(або при потребі більше то треба більше ../)
//?(clear || CTRL + L) - очищення терміналу.
//?touch name- створення файлу.Example (touch index.html)Example (touch node-tut/name.css) - для створення у певній папці
//?mkdir - створення нової директорії(нової папки)Example (mkdir new || mkder new/neww) - папка та папка в папці.
//?mv - (перрейменування||переміщення)Example mv index.html neindex.html(будучи в поточній папці переіменовуємо!)
//?mv - Example mv index.html ./new/index.html(в такий спосіб переміщуємо(можна відразу і переіменувати)ВАЖЛИВО!!!)
//?Переміщуємо тільки в папку нижче!!!Тобто папка new знаходиться в папці node-tut.
//?rm - видалення.Example rm ./node-tut/new/index.html || якщо знаходишься в поточній папці то тільки імя файлу.
//?rm (назва папки з файлами чи без не важливо) -r -Спосіб в який видаляють папку(Можна зі шляхом!Якщо не знаходишься в ній)
//?(назва команди) --help - інформація про команду.
//?node -v - показує версію node.js яка встановленна на компютері.
//?node --help - команди в node.js!
//?node (шлях до файлу) - для запуску файлу в node.js(без браузера).Example node ./node-tut/index.js виводить console.log()
//?npm init - ініціалізація проєкту.(створення файлу package.json) в поточній папці!
//?npm init -y - ініціалізація проєкту де все за замовчуванням(не треба вводити чи просто проклацувати enter!)
//?npm i || npm instal (назва пакетів) - встановлення пакетів данних.
//?npm ununstal (назва пакетів) - для видалення.

//?npm run build - (запускаємо build з файлу package.json) додаткова інформація в документації бібліотеки(ПРИКЛАД!!!)
//? "scripts": { "build": "babel ./node-tut -d lib"}, - build - команда яку запускаємо за допомогою npm run
//? babel - бібліотека.    ./node-tut - шлях до файлу який треба оптимізувати і більш простіший код(ТЕ ЩО РОБИТЬ БІБЛІОТЕКА)
//? -d - показує що оптимізований код має зберігатися в іншій директорії(папці) створюється ця папка.
//? lib - назва цієї папки.
//?git init - зв'язуємо Гіт хаб до цього вказавши назву своего репозиторію в файлі package.json
//?npm start - старт лайв серверу.
//?npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно і виведе список доступних оновлень
//?npm update - оновить всі пакети до максимально дозволеної версії
//?npm cache clean - команда для очищення кешу в .npm (її треба чистити не частіше чим декілька разів на рік).
//?