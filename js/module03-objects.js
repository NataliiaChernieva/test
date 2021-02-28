// //..........................Задание 7/41
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment.area= 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Ямайка';
// apartment.location.city = 'Кингстон';


// //.......................Задание 10/41 
//Перебери объект apartment используя цикл for...in и запиши в массив keys
//все его ключи, а в массив values все значения его свойств.

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);

// }
// console.log('keys :>> ', keys);
// console.log('values :>> ', values);



// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
//   genres: ['историческая проза', 'приключения'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }


// //...........................Задание 11/41
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if(apartment.hasOwnProperty(key)){
//      keys.push(key);
//      values.push(apartment[key]);
// }
// }

// //...........................Задание 12/41
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   for(const obj in object){
//   if(object.hasOwnProperty(obj)){
//      propCount+=1;
//      }
//   }
//   // Пиши код выше этой строки
//   return propCount;
// }


// // //...........................Задание 13/41
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);

// for(const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);


// // // //...........................Задание 14/41
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }

// //второрй способ
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
// propCount=Object.keys(object).length
//   return propCount;
//   // Пиши код выше этой строки
// }

// // // // //...........................Задание 16/41
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const allSalaries = Object.values(salaries);
// for(const salary of allSalaries){
//    totalSalary+=salary;
// }
//   // Пиши код выше этой строки
//   return totalSalary;
// }

// // // // //...........................Задание 17/41
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for(const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);}

// // // // //...........................Задание 18/41
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   let result =null;
//   for(const product of products){
//     if(productName==product.name){
//        result=product.price;
//     } 
//   }
//   return result;
//     // Пиши код выше этой строки
// }

// // // // //...........................Задание 19/41
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Пиши код ниже этой строки

//     let result=[];
//     let keys;
//     for(const product of products){
//         keys = Object.keys(product);

//         for(const key of keys){
//             if(key===propName){
//                 result.push(product[key]);

//             }        
//         }       

//     }
//     return result; 
//     // Пиши код выше этой строки
// }



// const products = [
//   {
//     name: "apple",
//     price: 25,
//   },
//   {
//     name: "ball",
//     price: 252,
//   },
//   {
//     name: "clock",
//     price: 125,
//   },
//   {
//     name: "hause",
//     price: 258,
//   },
// ];

// const getPropValue = function (prop) {
//   const foods = [];
//   const prices = [];

//   for (const product of products) {
//     if (product.name) {
//       foods.push(product.name);
//       prices.push(product.price);
//     }
//   }

//   return {foods, prices}
// };


// const getPropValue = function (prop) {
//   const total = [];

//   for (const product of products) {
//     if (product[prop]) {
//       total.push(product[prop]);
//     }
//   }

//   return total;
// };

// console.log(getPropValue("color"));



// // // // //...........................Задание 20/41
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let total=0;
// for(const product of products){
//      if(product.name===productName){
//         total= product.price*product.quantity;          
//      }        
//  }       

// return total; 
//   // Пиши код выше этой строки
// }

// // // // //...........................Задание 23/41
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday: highYesterday, today:highToday,tomorrow: highTomorrow,icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;


// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// // // // //...........................Задание 26/41
// function calculateMeanTemperature(forecast) {

//     const { today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
//   // Пиши код выше этой строки

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


 // // // // //...........................Задание 30/41
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   let text;
//   const object={category,priority,text,};
//   const newObject={...object,...data,completed,};

//   return newObject;

//   // Пиши код выше этой строки
// }

// // // // //...........................Задание 31/41
// function add(...args) {
//   let total=0;
//   for(const arg of args){
//   total+=arg;}
//   return total;
//   // Пиши код выше этой строки
// }

// // // // //...........................Задание 32/41
// function addOverNum(value,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg>value){
//     total += arg;
//   }
//   }

//   return total;
//   // Пиши код выше этой строки
// }



//https://prnt.sc/106v0hi

// // // // //...........................Задание 35/41
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//         const bookIndex = this.books.indexOf(oldName); 
//         console.log(bookIndex);
//        this.books.splice(bookIndex, 1, newName);

//     return this.books;
// 	 // Пиши код выше этой строки
//   },
// };

// // // // //...........................Задание 41/41
// const atTheOldToad = {
//   potions: [
//     { name: "Зелье скорости", price: 460 },
//     { name: "Дыхание дракона", price: 780 },
//     { name: "Каменная кожа", price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion({ name, price }) {
//     for (const potion of this.potions) {
//       if (potion.name === name) {
//         return `Зелье ${name} уже есть в инвентаре!`;
//       }
//     }
//     this.potions.push({// this.potions.push({ name, price});
//       name: name,
//       price: price,
//     });
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         return this.potions.splice(i, 1);
//       }
//     }
//     console.log(`Зелья ${potionName} нет в инвентаре!`);
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//         return this.potions;
//       }
//     }
//     console.log(`Зелья ${oldName} нет в инвентаре!`);
//   },
// }
