// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let divElement = document.createElement('div');
//
// divElement.style.color = 'red';
// divElement.style.fontSize  = '20px';
// divElement.style.padding = '50px';
//
// document.body.appendChild(divElement);
//
// divElement.innerText = 'jsadjff';
//
// divElement.classList.add('wrap','collapse', 'apha', 'beta');
//
// let cloneDiv = divElement.cloneNode(true);
// document.body.appendChild(cloneDiv);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main','Products','About us','Contacts'];
//
// let ulElem = document.getElementsByClassName("menu")[0];
// for (const arrayItem of array) {
//     let liElem = document.createElement('li');
//     ulElem.appendChild(liElem);
//     liElem.innerText = arrayItem;
// }



//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesElement of coursesAndDurationArray) {
//     let block = document.createElement('div');
//     document.body.appendChild(block);
//     block.innerText = coursesElement.title + ' ' + coursesElement.monthDuration;
// }


//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesElement of coursesAndDurationArray) {
    let block = document.createElement('div');
    document.body.appendChild(block);
    block.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    block.appendChild(h1);
    h1.innerText = coursesElement.title

    let p = document.createElement('p');
    p.classList.add('description');
    block.appendChild(p);
    p.innerText = coursesElement.monthDuration;
}
