// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"
// -- замініть текст параграфа з id 'content' на будь-який інший
let getContent = document.getElementById("content");
getContent.innerText = 'any text';


// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'rules' на будь-який інший
let getRules = document.getElementById("rules");
getRules.innerText = 'any text';


// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let all = document.querySelectorAll('p, div, ul, li');
for (const allElement of all) {
    allElement.style.backgroundColor = 'red';
    allElement.style.color = 'blue';
}



// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rules = document.getElementById('rules');
console.log(rules);



// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules = document.getElementsByClassName('fc_rules');
for (let fcRule of fcRules) {
    fcRule.style.color = 'red';
}


