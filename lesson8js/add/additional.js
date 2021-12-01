//
// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

const allClass = function () {
    let classes = [];
    let findClas = document.querySelectorAll('*');
    for (let i =0; i<findClas.length; i++){
        classes.push(findClas[i]);
    }
    return classes;
}
console.log(allClass());