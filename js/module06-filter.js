// //////////////FIND
// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === '002');
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

// ////////////////// EVERY //// SOME
// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// // some вернет true если хотябы одного фрукта будет больше чем 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true


// // //////////////////  REDUCE
// ///////

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдем по всем элементам коллекции и прибавим значения свойства likes
// // к аккумулятору, начальное значение которого укажем 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32



// // Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// // для подсчета лайков из коллекции
// const countLikes = tweets =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(countLikes(tweets)); // 32


// ////соберем в массив все теги, которые встречаются в постах.

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// //После того, как мы собрали все теги из постов, хорошо бы было посчитать количество уникальных тегов в массиве.

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);


///////////////////////SORT
/////
/////
/////Отсортируем массив наших пользователей по возрастанию дней онлайн активности.

// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];

// const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

// console.log(users.sort(sortByActiveDays));

/////Задание 9/44
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   const newArray = [];
//   numbers.forEach(number => {
      
//     if (number % 2 === 0) {
//       newArray.push(number+ value);
//     } else{
    
//     newArray.push(number);}
    
      
//   })
//   return newArray;
//     // Пиши код выше этой строки
// }
  

/////Задание 16/44
  // const books = [
  //   {
  //     title: 'Последнее королевство',
  //     author: 'Бернард Корнуэлл',
  //     genres: ['приключения', 'историческое']
  //   },
  //   {
  //     title: 'На берегу спокойных вод',
  //     author: 'Роберт Шекли',
  //     genres: ['фантастика', 'мистика']
  //   },
  //   {
  //     title: 'Красна как кровь',
  //     author: 'Ли Танит',
  //     genres: ['ужасы', 'мистика', 'приключения']
  //   }
  // ];
  // // Пиши код ниже этой строки
  // const allGenres = books.flatMap(book=>book.genres);
  // const uniqueGenres = allGenres.filter((genres,index)=>allGenres.indexOf(genres)===index);

// const users=  [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ]


//возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.(Зад13/44)
const getUserNames = users => users.map(user => user.name);

//возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.(Зад14/44)
const getUserEmails = users => users.map(user => user.email);

//возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.(Зад18/44)
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
//console.log( getUsersWithEyeColor(users, 'brown'))

//возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.(Зад19/44)
const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age > minAge && user.age < maxAge);
//console.log(getUsersWithAge(users, 25, 35));

//возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.(Зад20/44)
const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));
  
//Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей 
//всех пользователей(свойство friends).У нескольких пользователей могут быть
//одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.(Задание 21/44)
  const getFriends = (users) => {
  const allFriends=users.flatMap(user=>user.friends);
  const uniqueallFriends = allFriends.filter((friend, index) => allFriends.indexOf(friend) === index);
  
  return uniqueallFriends;
    
};

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных
// пользователей, значение свойства isActive которых true.(Задание 22/44)
const getActiveUsers = (users) => users.filter(user => user.isActive);
const getInactiveUsers = (users) => users.filter(user => !user.isActive);// не активные пользователи зад23/44


 ////////////////////////Задание 25/44
 //возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
const getUserWithEmail = (users, email) => users.find(user => user.email === email);

//Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны 
//(свойство isActive) и возвращала true или false.(зад27/44)
const isEveryUserActive = (users) => users.every(user=>user.isActive);

//проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.(зад29/44)
const isAnyUserActive = users => users.some(user=>user.isActive);

//считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.(зад32/44)
const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);

//считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.(зад33/44)
const getTotalFriendCount = users => users.reduce((total, user) => total + user.friends.length, 0);

//Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный 
//по возрастанию их баланса(свойство balance).(зад38/44)
const sortByAscendingBalance = users => users.sort((firstUser,secondUser)=>firstUser.balance-secondUser.balance);

//возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).(зад39/44)
const sortByDescendingFriendCount = users => [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);

//возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.(зад40/44)
const sortByName = users => [...users].sort((firstUser,secondUser)=>firstUser.name.localeCompare(secondUser.name));

//возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).(зад42/44)
const getNamesSortedByFriendCount = users =>
  [...users]
    .sort((firstUser,secondUser)=>firstUser.friends.length-secondUser.friends.length)
    .map(user => user.name);


//возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .(зад43/44)
const getSortedFriends = users =>
  users
    .flatMap(user => user.friends)
    .filter((friend, index) => users.flatMap(user => user.friends).indexOf(friend) === index)
    .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend));

//console.log(getSortedFriends(users));

//возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.(зад44/44)
const getTotalBalanceByGender = (users, gender) =>
users
.filter(user=>user.gender===gender)
.reduce((total,user)=>total+user.balance,0);


//////////Задание 31/44 
//Нашему сервису необходимо рассчитать среднее время проведённое в одной игре
//для каждого игрока, и получить общую сумму этих времён.Рассчитать время для каждого из игроков, 
///можно разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((total,player)=> total+player.playtime/player.gamesPlayed,0);

//////////Задание 36/44 
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
  
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

 //////////Задание 37/44  
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook,secondBook)=>firstBook.author.localeCompare(secondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook,secondBook)=>secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook,secondBook)=>firstBook.rating-secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);
// console.log(sortedByAuthorName);



//////////Задание 41/44 
//Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
//рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book=>book.author)
//   .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));
// console.log(names);


//ДОПОЛНИТЕЛЬНЫЕ ЗАДАЧИ
const users = [
  { name: "Игорь", sex: "male", age: 29 },
  { name: "Михаил", sex: "male", age: 21 },
  { name: "Ирина", sex: "female", age: 25 },
  { name: "Олег", sex: "male", age: 14 },
  { name: "Марина", sex: "female", age: 23 },
  { name: "Оксана", sex: "female", age: 17 },
  { name: "Алексей", sex: "male", age: 8 },
  { name: "Антон", sex: "male", age: 47 },
  { name: "Валерия", sex: "female", age: 50 },
  { name: "Екатерина", sex: "female", age: 12 }
];

/* 
  1. В массиве users отфильтровать пользователей по возрасту так чтобы получить всех выше 18 лет.
     Найти самого младшего из них и в консоль написать сообщение: User самый молодой и ему/ей years лет
     !!!Важно понимать пол пользователя и определить в сообщении "ему" или "ей"
*/
const getYoungUser = users =>
  users
    .filter(user => user.age > 18)
    .sort((firstUser, secondUser) => firstUser.age - secondUser.age)
    .find(user => user.age > 18);
  //   .reduce((result, user) => {
  //     if (user.sex === "male") {
  //       result = `${user.name} самый молодой и ему ${user.age} лет `;
  //     } else {
  //       result = `${user.name} самая молодая и ей ${user.age} лет `;
  //     }
  //   }, "");
  
  // return result;
//};
    
    
    
//
  
console.log(getYoungUser(users));

  //2. В массиве users отфильтровать всех по полу, сначала female потом male 
const getUsersSexFemale = users => users.filter(user => user.sex === "female");
const getUsersSexMale = users => users.filter(user => user.sex === "male");

const getUsersByGender = (users,sex) => users.filter(user => user.sex === sex);
//console.log(getUsersByGender(users,"male"));

/* 
  3. В массиве users найти пользователя по имени Марина
*/
const findName = (users, name) => users.find(user => user.name === name);
//console.log(findName (users, "Марина"));

/* 
  4. Пробежаться по массиву users, если пользователь мужчина добавить 10 лет к возрасту, 
  если женщина снять 5 лет
  !!! Важно проверять что возраст не отрицательное число :)
*/

const getUserAge = users => users.map(user => {
  if (user.sex === "male") {
    if (user.age > 0) {
      user.age += 10;
    }
  } else{
      if(user.age>0){
        user.age -= 5;
      }
    }  
  return user;  
  }
  
)

//console.log(getUserAge(users));