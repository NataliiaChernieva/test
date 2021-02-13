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

const n = 1235.5;
const str = n + '';// преобразует в строку 1способ
const str1 = n.toString();// преобразует в строку 2способ
const str2 = string(n);// преобразует в строку 3способ
console.log(str2);
let summ = 0;
let stringInv = '';

console.log(str.length);

for (let i = 0; i < str.length; i += 1){
    if (isNaN(str[i])) {
        console.log(str[i]);
        continue;
    }

    //console.log(str[i]);
    summ += Number(str[i]);
}
console.log(summ);

for (let i = str.length - 1; i >= 0; i -= 1) {
    stringInv += Number(str[i]);
}
console.log(stringInv);




///задача. Написать скрипт, который подсчитывает количество гласных в строке

const ctr = 'jhdhgfuieriybcbcxvaceuin';
let total = 0

for (let i = 0; i < str.length; i += 1){
    switch (str[i]){
        case 'a':
            total += 1;
            break;
        case 'e':
            total += 1;
            break;
        case 'i':
            total += 1;
            break;
        case 'o':
            total += 1;
            break;
        case 'u':
            total += 1;
            break;
    }
}

console.log('total :>> ', total);