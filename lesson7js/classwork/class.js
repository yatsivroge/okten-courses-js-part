// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,year,made,speed,engine){
//     this.model = model;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     };
//     this.info = function () {
//             for (const key in this) {
//                 if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//             }
//         };
//     this.newMaxSpeed = function (newSpeed) {
//             this.speed = this.speed + newSpeed;
//         };
//     this.changeYear = function (newValue) {
//             this.year = newValue;
//         };
//     this.addDriver = function (driver) {
//             this.drive = driver;
//         };
// }


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model,year,made,speed,engine) {
    this.model = model;
    this.year = year;
    this.speed = speed;
    this.engine = engine;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    };
    info() {
            for (const key in this) {
                if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
            }
        };
    newMaxSpeed (newSpeed) {
            this.speed = this.speed + newSpeed;
        };
    changeYear(newValue) {
            this.year = newValue;
        };
    addDriver(driver) {
            this.drive = driver;
        };
}



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Princes{
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize =footSize;
    }
}

let arrayPrinces = [
    new Princes('Ariel',22,11),
    new Princes('Dakot',12,21),
    new Princes('Arrl',23,31),
    new Princes('Felix',26,41),
    new Princes('Artur',21,51),
    new Princes('Gerrr',277,61),
    new Princes('Ferrv',1,41),
    new Princes('VLlvlv',72,71),
    new Princes('glrb',2312,81),
    new Princes('Okten',435,91),
]


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, findShos) {
        this.name = name;
        this.age = age;
        this.findShose = findShos;
    }
}
const prince = new Prince('Andriy', 45, 46);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

const whatPrinces = (arrayPrinces, prince) => {
    for (const item of arrayPrinces) {
        if (item.footsize === prince.findShose) {
            return `your princes: ${item.name}`
        }
    }
};
console.log(whatPrinces(arrayPrinces, prince));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const findPrinces = arrayPrinces.find((item) => item.footSize === prince.findShose);
console.log(findPrinces);

