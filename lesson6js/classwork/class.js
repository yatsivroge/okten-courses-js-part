// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд


// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// const validation = (str) => {
//     return str.replace('..',' ').replace('---',' ').replace('__',' ');
// }
//
// console.log(validation(n3));



// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


// const random = () => {
//     let randomArray = [];
//     for (let i = 0; i <= 100; i++){
//         randomArray.push(Math.floor(Math.random() * 100));
//     }
//     return randomArray
// }

// let sortArray = random();
// sortArray = sortArray.sort();
// console.log(sortArray);


// let filterArray  = sortArray.filter( numbers => numbers%2 === 0);
// console.log(filterArray);


// let stringNumber = random();
// stringNumber.map( number => number.toString());
// console.log(stringNumber);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11,21,3];
// const sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         array.sort((a, b) => {
//             return a - b;
//         })
//     } else if (direction === 'descending') {
//         array.sort((a, b) => {
//             return a - b;
//         }).reverse();
//     } else {
//         console.log('Error');
//     }
//     return array;
// }
// console.log(sortNums(nums, 'descending'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sortOBject = coursesAndDurationArray.sort()
//
// console.log(sortOBject);


//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

const cutString = (str, n) => {
    
}