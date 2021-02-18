//1. Порсчитать общую стоимость покупок в корзине
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1){
//     console.log(cart[i]);
//     total += cart[i];
// }
// console.log('total :>> ', total);

//второй вариант
// for (const value of cart) {
//     total += value;
// 


// //2. Подсчитать сумму всех четных чисел в масиве
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
//     if (numbers[i] % 2 === 0) {
//         console.log('Четное:', numbers[i]);
//         total += numbers[i];
//     }
// }
// console.log('Сумма четных:', total);

//второй вариант
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const number of numbers) {
//    if (number % 2 === 0) {
//        console.log('Четное:', number);
//        //console.log(`${number} - Четное`);
//         total += number;
//     } 
// }
// console.log('Сумма четных:', total);

//третий способ
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (const number of numbers) {
//    if (number % 2 !== 0) {
//        console.log('Эту итерацию надо пропустить', number);
//        continue;        
//     }

//     console.log('Четное:', number);
//     total += number;
// }
// console.log('Сумма четных:', total);


//  Задача 3. напиши скрипт поиска логина. 
// - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
//  * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
//  *
//  * - Сначала через for
//  * - Потом через for...of
//  * - Логика break
//  * - Метод includes() с тернарным оператором

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';

// for (let i = 0; i < logins.length; i += 1){
//        const login = logins[i];
//     console.log(login);
    
//     if (login !== loginToFind) {
//         message= `Пользователь ${loginToFind} не найден.`;    
//     } else {
//        message= `Пользователь ${loginToFind} найден.`;     
//     }
// }
//     console.log(message);


//второй способ
// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];

//     console.log("Логин:", login);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;   
//         break;
//     } 

//     message = `Пользователь ${loginToFind} не найден.`;
// }    
//     console.log(message);

//третий способ
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];

//     console.log("Логин:", login);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;   
//         break;
//     } 
// }    
//     console.log(message);

//4 способ
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (const login of logins) {
//     console.log("Логин:", login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;   
//         break;
//     } 
// }    
// console.log(message);
    
//5 способ
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';

// console.log(logins.includes(loginToFind));

// 6способ
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';


// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} найден.`;
//     console.log(message);


// Задача 4. Напиши скрипт поиска самого маленького b самого большого числа в массиве,
//при условии что числа уникальные (не повторяются).
 
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// let bigestNumber= numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log('smallestNumber:', smallestNumber);

// for (const number of numbers) {
//     if (number > bigestNumber) {
//         bigestNumber = number;
//     }
// }
// console.log('bigestNumber:', bigestNumber);

// задача 5. Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
//Элементов может быть произвольное кол-во.
//Пусть элементы массива  в строке будут разделены запятой.
//- Сначала через for
// - Потом через join()

//onst friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']; 

//let string = '';
// for (const friend of friends) {
//     string += friend + ",";
// }
// string = string.slice(0, string.length - 1);
// console.log(string);//чтоб обрезать последнюю запятую

// второй способ
// const string = friends.join(',');
// console.log(string);

//Задача 6. Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
//Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

//  console.log(letters);

// for (const letter of letters) {
//    console.log(letter);

//     // //первый способ
//     // if (letter === letter.toLowerCase()) {
//     //     console.log('Эта буква в нижнем регистре!!! -', letter);
//     //     invertedString += letter.toUpperCase();
//     // } else {
//     //     console.log('Эта буква в верхнем регистре!!! -', letter);
//     //     invertedString += letter.toLowerCase();
//     // }

//     //второй способ
//     const isEqual = letter === letter.toLowerCase();// проверяет равны ли переменные
//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString: ', invertedString);

//задача 7.Делаем slug в URL из названия статьи (например на dev.to)
//Заголовок статьи состоит только из букв и пробелов
//- Нормализируем строку
//- Разбиваем по словам
//- Сшиваем в строку с разделителями
//
// Должно получиться top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// // console.log(words);

// const slug = world.join('-');
// //console.log(slug);

// //второй вариант через вызовы
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);


// задача 8. Напиши скрипт который считает сумму элементов двух массивов.

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

//задача 9.Работем с коллекцией карточек в trello
//- Метод splice()
//- Удалить
//- Добавить
//- Обновить
//

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);

// //Удаление (по индексу), метод indexOf()
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 3);

// console.table(cards);

// // Добавление (по индексу)
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

/*
 * Обновление (по индексу)
 */
const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(index, 1, 'Обновленная карточка-4');

console.table(cards);



