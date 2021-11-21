// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function less(a , b , c ){
//     if(a < b && a < c){
//         console.log(a);
//     }
//     else if(b < a && b < c){
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }
//
// less(10 , 20 , 5);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(a , b , c ){
//     if(a > b && a > c){
//         console.log(a);
//     }
//     else if(b > a && b > c){
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }
//
// max(10 , 20 , 5);


// - створити функцію яка повертає найбільше число з масиву
// let arr = [ 21 , 44, 1 ,6, 7];
// function max(param){
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
// let arr = [ 21 , 44, 1 ,6, 7];
// function min(param){
//     let paramet = param[0]
//     for(let i = 0; i <param.length; i++ ){
//         if(param[i] < paramet){
//             paramet = param[i];
//         }
//     }
//     console.log(paramet);
// }
// min(arr);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const newAr = [12,32,5,3,6];
// function sum(paramet){
//     let arrSum = 0;
//     for (let i = 0; i <paramet.length; i++){
//         arrSum += paramet[i];
//     }
//     return(arrSum);
// }
// console.log(sum(newAr));



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const newAr = [12,32,5,3,6];
// function avereg(param){
//     let arrAv = 0;
//     for (let i = 0; i <param.length; i++){
//         arrAv += param[i];
//     }
//     arrAv = arrAv/param.length;
//     console.log(arrAv);
// }
// avereg(newAr);


// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function numbers(arg){
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
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function rand(arg){
//     let randomNumber =  Math.round(Math.random()*100);
//     for (let i = 0; i<arg.length; i++){
//         arg[i] = randomNumber;
//     }
//     return arg;
// }
//
// let arrr = [212,2];
// console.log(rand(arrr));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function rand(numbers, length){
//     let randomNumber = [];
//     for (let i = 0; i<numbers; i++){
//         randomNumber.push(Math.round(Math.random()*length));
//     }
//     return randomNumber;
// }
//
//
// console.log(rand(10,50));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function revers(arg){
//     newRevers = [];
//     for (let i = arg.length - 1; i >= 0; i--){
//         newRevers.push(arg[i]);
//     }
//     return newRevers;
// }
//
// let arr = [3,5,7,8];
// console.log(revers(arr));



