//!===================================================== First Task (Methods class) ===============================================
class User {
    #name;
    #surname;
    static counter = 0;                //?Статична властивість. Завжди залишаються на классі і ніде не розповсюджуються!
    static addUser() {                 //?Статичний метод.
        this.counter += 1;              //?Лічильник юзерів!
        console.log(`Кількість зареєстрованих користувачів ${this.counter}`);
    }
    constructor(name, surname, city){
        this.#name = name;
        this.#surname = surname;
        this.city = city;
        User.addUser();           //?Викликається одразу в конструкторі класу та звертаємось до нього за назвою классу!!!
    }
    getFullName(){
        console.log(`${this.#name} ${this.#surname}`);
    }
    changeName(newName) {           //?Приватна властивість зменюється тільки за допомогою методів(Для 6додаткових перевірок!)
        if(this.#name === newName || newName.length < 3) {
            return
        }
        this.#name = newName;
    }
}

// const user = new User("Петрик", "Петочкін");
// user.getFullName();
// user.changeName("afghj");
// user.getFullName();

class Student extends User {
    constructor(name,surname, year){
        super(name, surname);
        this.year = year;
    }
    getCourse(){
        const currentYear = new Date().getFullYear();
        const studiesYears = currentYear - this.year;
        if(studiesYears < 5){
            console.log(studiesYears);
        } else {
            console.log("Студен є випускником.");
        }
        
    }
}

const student = new Student("Петрик", "Петочкін", 2019);
student.getCourse();
student.getFullName();
student.changeName("Vasilii");
student.getFullName();
const student1 = new Student("Serhii", "Reshetniak", 2022);

// const currentDate = new Date();  //?Поточна дата з часовим поясом днем і часом.
// const formattedDate = currentDate.toLocaleString();  //?Поточна дата.
// console.log(formattedDate);
// console.log(currentDate);

// const currentYear = new Date().getFullYear();    //?Поточний рік.
// console.log(currentYear);

//!================================================== Example ( ) ================================================
