//!==================================================== Example (Method class ) ==============================================
class Rectangle {     //! Назва классу завжди з ВЕЛИКОЇ БУКВИ(class потрібен для створення об'єкта)
    static angle = 90;  //?static -так створюється статична властивість. Але прототипи не наслідують її. Вона є тільки в класі.
    #angelNumber;      //? Через # створюється приватна властивість. Приватну прототипи бачать!!!
    constructor(height, weight, color = "white"){    //?Колір за замовчуванням білий(якщо в параметрах не буде вказаний)
        console.log(height,weight,color);
        this.height = height;
        this.weight = weight;
        this.color = color;
        this.name = "Rectangle";
        this.#angelNumber = 4;    //? Можна використовувати тільки всередині классу Rectangle!!!
    }
    sayHello(){
        console.log(`Hello, I am ${this.name}. My color is ${this.color}!`);
    }
    calculateArea(){
        return this.weight * this.height;
    }
    sumOfAllAngles(){
        return Rectangle.angle * this.#angelNumber;
    }
    //! getters and setters існують для того щоб перезаписувати і читати приватні властивості!!!!
    get angelNumber(){    //? Таким чином ми добераємось до приватної властивості(Тут мі її імітуємо.Щоб було як до неї звернутися)
        return this.#angelNumber;   //?Імітація створення публічної властивості із приватної!!!
    }
    set angelNumber(newAngelNumber){     //?Сеттер дозволяє перезаписувати приватні властивості та додатково додавати умови перезапису!
        this.#angelNumber = newAngelNumber;  //? Тут можна додати додаткові умови if else щоб якщо є не потрібний варіант щоб не перезаписувати
    }
}

const rectangle = new Rectangle(5,10, "blue");//?Екземпляр класу Rectangle. new для створення пустого об'єкта а Rectangle для передачі аргументів
//? в конструкторі new буде this!!! 
console.log(rectangle);  //?В консолі видно що rectangle екземпляр класу Rectangle!!!

rectangle.sayHello();
console.log(rectangle.calculateArea());

const rectangle2 = new Rectangle(2,9, "red");

rectangle2.sayHello();
console.log(rectangle2.calculateArea());
console.dir(Rectangle);  //? console.dir - вивід чого завгодно як об'єкт. Rectangle це вивід в консоль самого класу. І тут є статична
//? властивість angle!!!!

console.log(Object.values(rectangle2));  //?Статичний метод прототипу rectangle2!!!
console.log(rectangle.sumOfAllAngles()); //? Вивести в консоль прототипу ми можемо функцію с приватними властивостями. Але доступу
//?до самої властивості у нас немає!!!!!!!!!

console.log(rectangle.angelNumber); //? Тут 4 - старе значення.
rectangle.angelNumber = 77;
console.log(rectangle.angelNumber);  //?Тут ми вже читаємо приватну властивість!!! Тут 77 - бо перезаписана.


