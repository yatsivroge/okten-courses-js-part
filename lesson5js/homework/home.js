// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// const s = (a,b) => a * b;
// console.log(s(2,4));




// - створити функцію яка обчислює та повертає площу кола

// const circle = r => {
//     const P = 3.14;
//     return r**2 * P;
// }
// console.log(circle(2));


// - створити функцію яка обчислює та повертає площу циліндру

// const cylindr = ( r, h) => {
//     const P = 3.14;
//     return 2 * P * r * h;
// }
// console.log(cylindr(2,4));


// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [12,234,4,2];
//
// const arrayList = arg => {
//     for (const argElement of arg) {
//         console.log(argElement);
//     }
// }
// arrayList(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// const parag = text => {
//     document.write(`<p>${text}</p>`);
// }
//
// parag('waewqe');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const list = text => {
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++ ){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('My name is Rostyk');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const list = (text, count) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++ ){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('My name is Rostyk', 10);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const listAr = [12,'sdfs',23,' erwerwer'];
//
// const list = (array) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++ ){
//        document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`<ul>`);
// }
//
// list(listAr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let objectA = [{id:1, name:'maks', age:22},{id:2, name:'vasya', age:23},{id:3, name:'kolya', age:20}]
//
// let objWrite = obj => {
//     for (let i = 0; i < obj.length; i++) {
//         document.write(`<div>${obj[i].id} ${obj[i].name} ${obj[i].age}</div>`);
//     }
// }
// objWrite(objectA);