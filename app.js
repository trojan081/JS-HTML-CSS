'use strict';
// --------------------------------------------------------IF ELSE ?---------------------------------
// let age = prompt ('Сколько Вам лет?', '');
// let message = (age < 3) ? 'Привет, малыш!' :
//     (age < 18) ? 'Какой прекрасный день!' :
//     (age < 100) ? 'Здравствуйте!' : 'Какой необычный возраст!' ;
// alert (message);

// let age = prompt ('Your age?', '');
// if (age < 3) {
//     message = 'Hi, baby!'
// } else if (age < 18) {
//     message = 'What a nice day!'
// } else if (age < 100) {
//     message = 'Good day, sir!'
// } else {
//     message = 'What an unusual age, sir!'
// };
// alert (message);

// let name = prompt ('Whats the "official" name of JavaScript?', '');
//     if (name == 'ECMAScript') {
//         message = 'Correct!' // или сразу alert ('Correct!')
//     } else {
//         message = 'Oh, you don`t know? It`s ECMAScript!' // или сразу alert ('....')
//     };
// alert (message);

// let num = prompt ('Введите число', '');
// if (num > 0) {
//     alert (1)
// } else if (num == 0) {
//     alert (0)
// } else {alert (-1)}

// let result;
// result = (a + b < 4) ? 'Мало' : 'Много';

// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор')? 'Здравствуйте' :
// (login == '') ? 'Нет логина' : '';

//------------------------------------------------------------|| && !---------------------------------
// let age = prompt ('Your age?', '');
// alert (!(age >= 14 && age <= 90));

// let login = prompt ('Введите логин', '');
// if (login == 'Админ') {
//     let password = prompt ('Введите пароль', '');
//     if (password == 'Я главный') { 
//         alert ('Здравствуйте!');
//     } else if (password == null) { 
//         alert ('Отменено');
//     } else alert ('Неверный пароль');
// }
// else if (login == null) alert ('Отменено');
// else alert ('Я вас не знаю');
//
//  ------------------------------------------------------for while------------------------------------
// for (let i=2; i <= 10; i++) {
//     if (!i%2) continue;
// alert (i);
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
// while (i < 3) {
//     alert (`number ${i}!` );
//     i++;
// }
// let num;
// do num = prompt ('Введите число больше 100', '')
// while (num <= 100 && num);
//----------------------------------------------------------------switch--------------------------------
// const number = +prompt ('Введите число от 0 до 3', '');
// switch (number) {
//     case 0:
//         alert ('Ваше число - 0');
//         break;
//     case 1:
//         alert ('Ваше число - 1');
//         break;
//     case 2:
//     case 3:
//         alert ('Ваше число - 2, а может и 3...');
//         break;
//     default:
//         alert ('Кажется, вы что-то перепутали...');
// }