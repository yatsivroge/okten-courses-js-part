// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area (side1, side2 ) {
//     let result = side1 * side1 + side2 * side2;
//     return result;
// }
//
// console.log(area(2, 4));



// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle( radius ) {
//     const p = 3.14;
//     let res = p * radius * radius;
//     return res;
// }
//
// console.log(circle(4));



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylindr( height, radius) {
//     const p = 3.14;
//     let s = 2 * p * height * radius;
//     return s;
// }
// console.log(cylindr(2, 3));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1331, 232 , 'sdfsdf']
//
// function arr(param) {
//     for (let i = 0 ; i < param.length; i++){
//         console.log(param[i]);
//     }
// }
//
// arr(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraf( text ) {
//     document.write(`<p> ${text} </p>`);
// }
//
// paragraf('sadlaldwqlqwdllq');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list( text ) {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// }
//
// list('asdwqdkqwkdqwkd');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list( text, amount ) {
//     document.write(`<ul></ul>`)
//     for (let i = 0; i < amount; i++) {
//         document.write(`<li>${text}</li>`);
//     }
// }
//
// list('asdwqdkqwkdqwkd', 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrayPrim = [ 2, true, 'lol', 5 ,'keke'];
//
// function listMaker( param ) {
//     for(let i = 0; i < param.length; i++) {
//         document.write(`<ul><li>${param[i]}</li></ul>`);
//     }
// }
// listMaker( arrayPrim);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arrayObject = [ { id: 12, name:'rostyk', age: 21 },
//     {id: 2, name:'vasya', age: 22},
//     {id: 1, name:'maks', age: 25}];
//
// function objectWrite( param ) {
//     for (let i = 0; i < param.length; i++){
//         document.write(`${param[i].id} <br>`);
//         document.write(`${param[i].name} <br>`);
//         document.write(`${param[i].age} <br>`);
//     }
// }
//
// objectWrite(arrayObject);






