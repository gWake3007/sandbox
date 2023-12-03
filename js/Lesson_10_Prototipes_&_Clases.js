//!==================================================== Example (Method class ) ==============================================
// class Rectangle {     //! Назва классу завжди з ВЕЛИКОЇ БУКВИ(class потрібен для створення об'єкта)
//     static angle = 90;  //?static -так створюється статична властивість. Але прототипи не наслідують її. Вона є тільки в класі.
//     #angelNumber;      //? Через # створюється приватна властивість. Приватну прототипи бачать!!!
//     constructor(height, weight, color = "white"){    //?Колір за замовчуванням білий(якщо в параметрах не буде вказаний)
//         console.log(height,weight,color);
//         this.height = height;
//         this.weight = weight;
//         this.color = color;
//         this.name = "Rectangle";
//         this.#angelNumber = 4;    //? Можна використовувати тільки всередині классу Rectangle!!!
//     }
//     sayHello(){
//         console.log(`Hello, I am ${this.name}. My color is ${this.color}!`);
//     }
//     calculateArea(){
//         return this.weight * this.height;
//     }
//     sumOfAllAngles(){
//         return Rectangle.angle * this.#angelNumber;
//     }
//     //! getters and setters існують для того щоб перезаписувати і читати приватні властивості!!!!
//     get angelNumber(){    //? Таким чином ми добераємось до приватної властивості(Тут мі її імітуємо.Щоб було як до неї звернутися)
//         return this.#angelNumber;   //?Імітація створення публічної властивості із приватної!!!
//     }
//     set angelNumber(newAngelNumber){     //?Сеттер дозволяє перезаписувати приватні властивості та додатково додавати умови перезапису!
//         this.#angelNumber = newAngelNumber;  //? Тут можна додати додаткові умови if else щоб якщо є не потрібний варіант щоб не перезаписувати
//     }
// }
// //!======================================== Follow (Наслідування) =============================================
// class Square extends Rectangle{               //? extends команда для наслідування классів.
//     constructor(length, color = "white"){
//         super(length,length,color);  //? super команда для доступу до конструктора наслідування классу.В дужках властивості конструктора.
//         //! ВАЖЛИВО! ПЕРШИЙ legnth це height другий length це weight.
//         this.name = "Square";      //?Переіменовуємо ім'я об'єкта наслідуємого классу.
//     }
// }

// const square = new Square(10, "purple");
// console.log(square);
// square.sayHello();      //? Тут ми викликаємо функцію sayHello яка наслідується з класу Rectangle та використовує вже ім'я Square!
// console.log(square.calculateArea());

// const rectangle = new Rectangle(5,10, "blue");//?Екземпляр класу Rectangle. new для створення пустого об'єкта а Rectangle для передачі аргументів
// //? в конструкторі new буде this!!!
// console.log(rectangle);  //?В консолі видно що rectangle екземпляр класу Rectangle!!!

// rectangle.sayHello();
// console.log(rectangle.calculateArea());

// const rectangle2 = new Rectangle(2,9, "red");

// rectangle2.sayHello();
// console.log(rectangle2.calculateArea());
// console.dir(Rectangle);  //? console.dir - вивід чого завгодно як об'єкт. Rectangle це вивід в консоль самого класу. І тут є статична
// //? властивість angle!!!!

// console.log(Object.values(rectangle2));  //?Статичний метод прототипу rectangle2!!!
// console.log(rectangle.sumOfAllAngles()); //? Вивести в консоль прототипу ми можемо функцію с приватними властивостями. Але доступу
// //?до самої властивості у нас немає!!!!!!!!!

// console.log(rectangle.angelNumber); //? Тут 4 - старе значення.
// rectangle.angelNumber = 77;
// console.log(rectangle.angelNumber);  //?Тут ми вже читаємо приватну властивість!!! Тут 77 - бо перезаписана.

//!===================================== Example ( method class (isOpen (true or false))) ===================================
// class Toggle {
//     constructor({isOpen} = {isOpen: false}) {//?Тут ми деструктуризовали значення щоб він приймав об'єкт та значення замовчуванням false.
//         this.on = isOpen;
//     }
//     // constructor(settings) {             //?Альтернативний приклад конструктора .
//     //     this.on = settings?.isOpen || false;//? Оператор ?. знаходить властивість isOpen і за замовчуванням повертає false.Якщо ні то undefined
//     // }

//     toggle(){
//         this.on = !this.on   //?Умова для змінни isOpen false на true або true на false!!!
//     }
// }

// const firstToggle = new Toggle({isOpen: true});
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

//!================================================ Example (Destructorization) ===========================================
// function sayHello({ name, lastName, age }) {  //?Різниця деструкторизації функції в тому що тут параметр звертається до назви.
//   console.log(name);      //?Якщо без деструкторизації то до місця розтащування!!!Важливо!!!Для цього і потрібен об'єкт параметрів!

//   sayHello({
//     lastName: "Reshetniak",
//     age: 32,
//     name: "Serhii",
//   });
// }

//!=================================================== Example (classes) ===========================
class User {
    constructor ({name, lastName, age, familyStatus, language, hobbyes}){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.familyStatus = familyStatus;
        this.language = language;
        this.hobbyes = hobbyes;
    }
}
//?Принцип деструкторизації в тому що ми до властивості звертаємося по її назві а не по індексу(тобто де вона розташована)
const user =  new User({name:"Serhii", lastName:"Reshetniak", age:32, familyStatus:"free", language:"Ukrainian", hobbyes:"IT"});
console.log(user);
console.log(User);