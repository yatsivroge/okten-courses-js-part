// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const min = (a , b ,c ) => {
//     if (a < b && a < c){
//         return a;
//     } else if(b < a && b < c){
//         return b;
//     } else {
//         return c;
//     }
//
// }
// console.log(min(5,4, 32));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// const max = (a , b ,c ) => {
//     if (a > b && a > c){
//         return a;
//     } else if(b > a && b > c){
//         return b;
//     } else {
//         return c;
//     }
//
// }
// console.log(max(5,4, 32));

// - створити функцію яка повертає найбільше число з масиву
// let arr = [ 21 , 44, 1 ,6, 7];
// const max = param => {
//     let paramet = param[0]
//     for(let i = 0; i <param.length; i++ ){
//         if(param[i] > paramet){
//             paramet = param[i];
//         }
//     }
//     console.log(paramet);
// }
// max(arr);





// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrl = [1,2,3,4]
// const arraySum = array => {
//     let sum = [];
//     for (let i = 0; i<array.length; i++){
//        array[i] += array[i];
//     }
//     return array;
//  }
// console.log(arraySum(arrl));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const newAr = [12,32,5,3,6];
// const avereg = param => {
//     let arrAv = 0;
//     for (let i = 0; i <param.length; i++){
//         arrAv += param[i];
//     }
//     arrAv = arrAv/param.length;
//     console.log(arrAv);
// }
// avereg(newAr);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const numbers = arg =>{
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i<arg.length; i++){
//         if (i < max){
//             max = i;
//         } else if (i > min ){
//             min = i;
//         }
//         console.log(max);
//         return min;
//     }
// }
// numbers(12,134,345,21,1,7);
// - створити функцію яка заповнює масив рандомними числами
// let arrr = [212,2];
// const rand = arg => {
//     let randomNumber =  Math.round(Math.random()*100);
//     for (let i = 0; i<arg.length; i++){
//         arg[i] = randomNumber;
//     }
//     return arg;
// }
//
//
// console.log(rand(arrr));



// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// const rand = (numbers, length) => {
//     let randomNumber = [];
//     for (let i = 0; i<numbers.length; i++){
//         randomNumber.push(Math.round(Math.random()*length));
//     }
//     return randomNumber;
// }



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arraY = [12,212, 'sdsfdsf', '12ds'];
//
// const revers = array => {
//     let newArray = [];
//     for (let i = array.length - 1, j = 0;   i >= 0; i--, j++){
//        newArray[j] = array[i]
//     }
//     return newArray;
// }
//
// console.log(revers(arraY));