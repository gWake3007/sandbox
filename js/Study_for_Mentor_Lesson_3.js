//!===================================================== First Task (Methods class) ===============================================
// class User {
//     #name;
//     #surname;
//     static counter = 0;                //?Статична властивість. Завжди залишаються на классі і ніде не розповсюджуються!
//     static addUser() {                 //?Статичний метод.
//         this.counter += 1;              //?Лічильник юзерів!
//         console.log(`Кількість зареєстрованих користувачів ${this.counter}`);
//     }
//     constructor(name, surname, city){
//         this.#name = name;
//         this.#surname = surname;
//         this.city = city;
//         User.addUser();           //?Викликається одразу в конструкторі класу та звертаємось до нього за назвою классу!!!
//     }
//     getFullName(){
//         console.log(`${this.#name} ${this.#surname}`);
//     }
//     changeName(newName) {           //?Приватна властивість зменюється тільки за допомогою методів(Для 6додаткових перевірок!)
//         if(this.#name === newName || newName.length < 3) {
//             return
//         }
//         this.#name = newName;
//     }
// }

// const user = new User("Петрик", "Петочкін");
// user.getFullName();
// user.changeName("afghj");
// user.getFullName();

// class Student extends User {
//     constructor(name,surname, year){
//         super(name, surname);
//         this.year = year;
//     }
//     getCourse(){
//         const currentYear = new Date().getFullYear();
//         const studiesYears = currentYear - this.year;
//         if(studiesYears < 5){
//             console.log(studiesYears);
//         } else {
//             console.log("Студен є випускником.");
//         }

//     }
// }

// const student = new Student("Петрик", "Петочкін", 2019);
// student.getCourse();
// student.getFullName();
// student.changeName("Vasilii");
// student.getFullName();
// const student1 = new Student("Serhii", "Reshetniak", 2022);

// const currentDate = new Date();  //?Поточна дата з часовим поясом днем і часом.
// const formattedDate = currentDate.toLocaleString();  //?Поточна дата.
// console.log(formattedDate);
// console.log(currentDate);

// const currentYear = new Date().getFullYear();    //?Поточний рік.
// console.log(currentYear);

//!================================================== Example (Cycle for) ================================================
// const data = [1,2,3,4,5,6,7,8];  //Треба щоб массив виглядав так [[1,2],[3,4],[5,6],[7,8]]
// function foo(arr, size) {
//     const dataSort = [];
//     for(let i = 0; i < arr.length; i += size) {   //?Додаємо довжину як крок циклу щоб не переберати зайвий раз.
//         const copy = arr.slice(i, i + size); //? Вирізаємо від початкового індексу ітерації до цього індексу + довжика(тобто від 0 до 4 не включно)
//         console.log(copy);
//         dataSort.push(copy);
//     }
//     return dataSort;
// }

// console.log(foo(data, 3));
//!================================================= Example (Method filter and Cycle for) =============================
// function fooFilter(arr) {   //?Функція для виведення повторювальних елементів в массиві(Для унікальних елементів змінюємо умову на ===)
//     const newArr = arr.filter((item, index) => arr.indexOf(item) !== index);
//     return newArr;
// }

// const mass = [1, 2, 3, 4, 5, 6, 6, 7, 8];
// console.log(fooFilter(mass));

// function fooFor(arr) {
//   const uniqueElement = [];
//   for (let i = 1; i < arr.length; i++) {
//     let currentElement = arr[0];
//     if(currentElement === arr[i] ) {
//         uniqueElement.push(arr[i]);
//     } else {
//         currentElement = arr[i + 1];
//     }
    
//   }
//   return uniqueElement;
// }

// console.log(fooFor(mass));
