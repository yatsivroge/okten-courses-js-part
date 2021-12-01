// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let mainHeader = document.getElementById('main_header');
mainHeader.innerText = "Frontend group";

// b) робить шириниу елементу ul 400px

let ulWidth = document.getElementsByTagName('ul');
for (const ulWidthElement of ulWidth) {
    ulWidthElement.style.width = '400px';
}


// c) робить шириниу всіх елементів з класом linkList шириною 50%

let widthLink = document.getElementsByClassName('linkList');
for (let element of widthLink) {
    element.style.color = 'red';
}


// d) отримує текст який зберігається в елементі з класом listElement2

let listElement = document.getElementsByClassName('listElement2');
for (const listElementElement of listElement) {
    console.log(listElementElement.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liElement = document.getElementsByTagName('li');
for (const liElemntElement of liElement) {
    liElemntElement.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let allA = document.getElementsByTagName('a');
for (const allAElement of allA) {
    allAElement.classList.add('anchor');
    if (allAElement.innerText === 'link3') {
        allAElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const allAElement of allA) {
    allAElement.classList.add(`element_${allAElement.innerText}`);
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let promtColor = prompt('Enter bc color');
// let subHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.backgroundColor = promtColor;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// for (const subHeaderElement of subHeader) {
//     if (subHeaderElement.innerText === 'content 2 segment'){
//         subHeaderElement.style.backgroundColor = promtColor;
//     }
// }



// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content1 = document.getElementsByClassName('content_1');
// for (const content1Element of content1) {
//     content1Element.innerText = prompt("enter text");
// }


// l) отримати елементи p та змінити їм padding на 20px

// let padding = document.getElementsByTagName('p');
// for (const paddingElement of padding) {
//     paddingElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let september = document.getElementsByClassName('text2');
for (const septemberElement of september) {
    septemberElement.innerText = 'sep-2021';
}





