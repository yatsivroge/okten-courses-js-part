// - Знайти та вивести довижину настипних стрінгових значень

// let hello = 'hello world';
// let lorem ='lorem ipsum';
// let js ='javascript is cool';
// console.log(hello.length);
// console.log(lorem.length);
// console.log(js.length);



// - Перевести до великого регістру наступні стрінгові значення
// let hello = 'hello world';
// let lorem ='lorem ipsum';
// let js ='javascript is cool';
// console.log(hello.toUpperCase());
// console.log(lorem.toUpperCase());
// console.log(js.toUpperCase());




// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let hello ='HELLO WORLD';
// let lorem ='LOREM IPSUM';
// let js ='JAVASCRIPT IS COOL';
// console.log(hello.toLowerCase());
// console.log(lorem.toLowerCase());
// console.log(js.toLowerCase());



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// console.log(str.trim());



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// let str = 'Каждый охотник желает знать';
// const stringToArr = arg => arg.split(' ');
//
// console.log(stringToArr(str));




// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// const delete_characters = (str, length) => {
//      return str.substr(0, index);
// };
//
// console.log(delete_characters(str,10));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let insert_dash = (str) => {
//     let splitJoin = str.split(' ').join('-').toUpperCase();
//     return splitJoin;
// }
// let string = "HTML JavaScript PHP";
// console.log(insert_dash(string));




// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let firstWord = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1)
// };
// console.log(firstWord('hello world'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalizeFirst = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// console.log(capitalizeFirst('my name is Rostyslav'));


