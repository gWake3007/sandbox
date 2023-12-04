//!===================================================== First Task (Methods class) ===============================================
class User {
    #name;
    #surname;
    constructor(name, surname){
        this.#name = name;
        this.#surname = surname;
        this.city = city;
    }
    getFullName(){
        console.log(`${this.#name} ${this.#surname}`);
    }
}

// const user = new User();
// user.getFullName();

class Student extends User {
    constructor(name,surname, year){
        super(name, surname);
        this.year = year;
    }
    getCourse(){
        const currentYear = new Date().getFullYear();
        const studiesYears = currentYear - this.year;
        console.log(studiesYears);
    }
}

const student = new Student("Петрик", "Петочкін", 2019);
student.getCourse();
student.getFullName();

// const currentDate = new Date();  //?Поточна дата з часовим поясом днем і часом.
// const formattedDate = currentDate.toLocaleString();  //?Поточна дата.
// console.log(formattedDate);
// console.log(currentDate);

// const currentYear = new Date().getFullYear();    //?Поточний рік.
// console.log(currentYear);