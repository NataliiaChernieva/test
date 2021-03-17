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

const users = [
  { name: 'Mango', daysActive: 15 },
  { name: 'Poly', daysActive: 4 },
  { name: 'Ajax', daysActive: 27 },
  { name: 'Chelsey', daysActive: 2 },
];

const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

console.log(users.sort(sortByActiveDays));
