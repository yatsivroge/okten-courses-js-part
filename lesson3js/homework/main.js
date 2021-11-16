// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [10,2,14,6,7];
// let strings = ['asfsaf','ros','dart','lolo','kdfkkef'];
// let mix = [ 'string', 22 , true , false , 44 ];
// console.log(numbers);
// console.log(strings);
// console.log(mix);



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let empty = [];
// empty[0] = 'string';
// empty[1] = 'number';
// empty[2] = 'boolean'

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i =0; i < 10; i++){
//     document.write('<div>10 divs</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i=0; i < 10; i++){
//     document.write(`<div>${i}10 divs</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

//  let h1 = 1;
// while (h1 <= 20) {
//     document.write(`<h1>20 h1</h1>`);
//     h1++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// while (h1 <= 20) {
//     document.write(`<h1>${h1}h1</h1>`);
//     h1++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let ten = [11,22,33,2,4,5,6,7,8,8];
// for (let i = 0; i<ten.length; i++){
//     console.log(ten[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let tenS = ['css','dfe','efefw','wefwf','wqr','wqrr','erfer','rtyyr','tryyr','wett'];
// for (let i = 0; i<tenS.length; i++){
//     console.log(tenS[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let any = ['weeq',22,55,'lol', true, false, 77, [22,33], 'arr', 25];
// for ( let i = 0; i < any.length; i++) {
//     console.log(any[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let anyB = [true, 44 ,66, 32 , 'arrrr', 'shit', ['lolo',223] , false , false, 33];
// for (let i = 0; i< anyB.length; i++) {
//     if (typeof anyB[i] === 'boolean'){
//         console.log(anyB[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let anyN = [false, 44 ,66, 32 , 'arwrrrr', 'shit', false , 66 , false, 33];
// for (let i = 0; i< anyN.length; i++) {
//     if (typeof anyN[i] === 'number'){
//         console.log(anyN[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let anyS = ['sss ' , 'xxxx' , 33 , true , false , 66 , 'ggdf' , 'lol' , false, 1];
// for (let i = 0; i < anyS.length; i++) {
//     if (typeof anyS[i] === 'string') {
//         console.log(anyS[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let index = [];
// index[0] = 10;
// index[1] = 'lol';
// index[2] = true;
// index[3] = false;
// index[4] = 'adkkafk';
// index[5] = 'af;sf;a';
// index[6] = 12;
// index[7] = 110;
// index[8] = 142;
// index[9] = 'nnnnum';
// index[10] = true;
// for (let i = 0; i<index.length; i++){
//     console.log(index[i]);
// }




// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let j = 0; j < 10; j++) {
//     console.log(j);
//     document.write(j);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let k = 0; k < 100; k++) {
//     console.log(k);
//     document.write(k);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let h = 0; h < 100; h+=2) {
//     console.log(h);
//     document.write(h);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let p = 0; p < 100; p++) {
//     if (p % 2 == 0) {
//         console.log(p);
//         document.write(p);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let n = 0; n < 100; n++) {
//     if (n % 2 == 1) {
//         console.log(n);
//         document.write(n);
//     }
// }
