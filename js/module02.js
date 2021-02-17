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
