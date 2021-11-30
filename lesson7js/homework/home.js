//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// const userContainer = [
//     new User(1,'roman','pewp','werre@gmail.com',1213313),
//     new User(2,'vasya','qwerrq','vasya@gmail.com',20007),
//     new User(3,'maks','pddsfewp','maks@gmail.com',434545678),
//     new User(4,'vadim','gdfg','vadim@gmail.com',55566677),
//     new User(5,'kolya','oooiiu','kolae@gmail.com',11112222333),
//     new User(6,'olya','werwer','olya@gmail.com',345790),
//     new User(7,'vika','werrwer','vika@gmail.com',875356),
//     new User(8,'dima','rbbgb','dima@gmail.com',654333),
//     new User(9,'rostyslav','zxzx','ro@gmail.com',96764444),
//     new User(10,'nikolay','assqs','wqe@gmail.com',213547)
// ]




// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterArray = userContainer.filter( (obj) => {
//     if (obj.id % 2 === 0){
//         return obj;
//     } else { console.log('error')}
// })
// console.log(filterArray)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// userContainer.sort((a, b) => a.id - b.id);
// console.log(userContainer)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }




// створити пустий масив, наповнити його 10 об'єктами Client

// let clientArray = [
//     new Client(1,'ira','bib', 'le@leel', 211212, [21,'ele','eee']),
//     new Client(2,'kika','biqwfb', 'cle@leel', 23312, [219,'wele','eee']),
//     new Client(3,'iggor','bfwib', 'frle@leel', 2777212, [821,'elrwe','erwee']),
//     new Client(4,'kolya','bbbib', 'dle@leel', 21009, [281,'ele','eee']),
//     new Client(5,'maks','bikkb', 'vdfle@leel', 216712, [217,'ele','eee']),
//     new Client(6,'max','bllib', 'lgre@leel', 2112197, [216,'ele','eeetrtr']),
//     new Client(7,'sriha','qwbib', 'lnhhe@leel', 211799712, [251,'ele','eeedg']),
//     new Client(8,'grisha','bsfib', 'lemk@leel', 21999666, [241,'ggdele','dveee']),
//     new Client(9,'petya','bicb', 'kkole@leel', 214443, [213,'edfle','eevde']),
//     new Client(10,'vasya','bibggg', 'leqqqq@leel', 2223412, [211,'elerevd','evdee']),
// ]



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// clientArray.sort((a, b) => a.order[0] - b.order[0]);
// console.log(clientArray)