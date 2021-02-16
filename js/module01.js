//Написать скрипт, который запрашивает 2 числа, начало и конец диапазона, и в результате выдаёт сумму всех нечетных чисел в этом диапазоне.
// const min = 2;
// const max = 17;
// let total = 0;

// for (let i = min; i <= max; i += 1){
//     if (i % 2 !== 0) {
//         total += i;

//     }
// }

// console.log(total);

// Дано произвольное целое число n. Написать программу, которая
// разбивает число n на цифры и выводит их на экран;
// подсчитывает сколько цифр в числе n;
// находит сумму цифр числа n;
// меняет порядок цифр числа n на обратный.
// Пример: ввожу число 123
// цифр в числе = 3
// сумма = 6(это значение получили следующим образом 1+2+3)
// обратный порядок = 321

// const n = 1235.5;
// const str = n + '';// преобразует в строку 1способ
// const str1 = n.toString();// преобразует в строку 2способ
// const str2 = String(n);// преобразует в строку 3способ
// console.log(str);

// let summ = 0;
// let stringInv = '';

// console.log('Длина строки:', str.length);

// for (let i = 0; i < str.length; i += 1){
//     if (isNaN(str[i])) {
//         console.log(str[i]);
//         continue;
//     }

//     console.log(str[i]);
//     summ += Number(str[i]);
// }
// console.log('Сумма элементов строки:',summ);

// for (let i = str.length - 1; i >= 0; i -= 1) {
//     stringInv += str[i];
// }
// console.log(stringInv);




///задача. Написать скрипт, который подсчитывает количество гласных в строке

// const str = 'jhdhgfuieriybcbcxvaceuin';
// let total = 0

// for (let i = 0; i < str.length; i += 1){
//     switch (str[i]){
//         case 'a':
//             console.log(str[i]);
//             total += 1;
//             break;
//         case 'e':
//             console.log(str[i]);
//             total += 1;
//             break;
//         case 'i':
//             console.log(str[i]);
//             total += 1;
//             break;
//         case 'o':
//             console.log(str[i]);
//             total += 1;
//             break;
//         case 'u':
//             console.log(str[i]);
//             total += 1;
//             break;
//     }
// }

// console.log('total :>> ', total);



//Определить площадь круга с радиусом 10

// const rad = 10;
// let circle = Math.PI * Math.pow(rad, 2);
// console.log('circle :>> ', circle);

//сравнивание
// console.log('G' < 'g');//true
// console.log('object :>> ', object);


//Задача
// const input = prompt('Какое официальное название JS?');
// if (input === 'ECMAScript') {
//     alert('Верно');
// } else {
//     alert("Не знаэте? ECMAScript");
// }

//Написать программу, которая получит от пользователя число(кол-во минут)
//и выведет на екран строку в формате часов и минут

// let global = 61;
// let hours = Math.floor(70 / 60);
// let minutes = global % 60;
// let hours2 = String(hours).padStart(2, 0);
// let minutes2 = String(minutes).padStart(2, 0);
// console.log(`${hours2}:${minutes2}`);

//Напишите цикл который предлагает ввести число больше 100 через prompt
// если посетительт ввел другое число- просит ввести еще раз....
// Цыкл должен спрашивать число пока посетитель не введет число больше 100
//либо не нажмет  кно пку отмена в prompt.
// предполагается, что посетитель вводит только числа
//предусматривать обработку нечисловых строк не нужно

// let check = false;
// do {
//     const input = prompt('Введите число больше 100'); 
//     if (input) {
//         if (input > 100) {
//         check = false;
//         } else {
//         check = true;
//         }
//     } else {
//         check = false;
//     }
    
// } while(input>100)


// Напиши код, который будет спрашивать логин с пом промпт и логировать результат
//в консоль браузера. если посетитель вводит "Админ", то промпт запрашивает пароль.
// если ничего не введено или нажата кнопка ESC - вывести строку "отменено".
// в противном случае вывести строку "я вас не знаю".
// Пароль проверять так: если введен пароль "Я главный", то вывести строку
//"Здравствуйте!" иначе выводить строку "Не верный пароль".


// const login = prompt("Введите логин")
// console.log(login);
// switch (login) {
//     case "Админ":
//         let password = prompt("Введите пароль");
//         if (password === "Я главный") {
//             console.log("Здравствуйте!");
//         } else {
//            console.log("Не верный пароль"); 
//         }
//         break;
//     case  null:
//         console.log('Отменено');
//         break;

//     default: 
//     console.log('Я вас не знаю');
// }

//6. Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel,
//  и каждый раз добавляет введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 
let total = 0;
let input
do {
    input = prompt("Введите число");
    if (input) {
        total += Number(input);
        console.log(total);
    } else {
        alert(total);
    }
} while(input)
