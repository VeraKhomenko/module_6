/* Array.prototype.reduse()
+ поэлементно перебирает оригинальный массив
- возвращает что угодно
заменяет что угодно, использовать с умом
reduse - взять много и сократить; используются для суммирования чего-то
 и сreduseить в один
reduse - можно вызывать только на массивах - это объект
*/

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce(function (accumulator, number) {
  // accumulator - получает наш total, общие значения
  // аргументом в reduce можно передать начальное значение
  // index, array не нужны зачастую
  //   console.log('accumulator: ', accumulator);
  //   console.log(number);
  //   console.log(index);
  //   console.log(array);
  return accumulator + number; // то что мы вернум из этой функции то и будет на следующей итерации значением аккомулятора
}, 0); // просто начальное значение может быть любое

// схема как получаются значения в аккомуляторе  return accumulator + number; =>
// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25
// console.log(total);

// считаем общую зп =>

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
// reduse - можно вызывать только на массивах - это объект - создаем =>
const values = Object.values(salary); //возьмем все значения
console.log(values);
const totalSalary = values.reduce(function (acc, value) {
  return acc + value;
});
console.log(totalSalary);
// const values = Object.values(salary).reduce(function (acc, value) { // сщкращенный вариант
//   return acc + value;
// });

//считаем общее кол-во часов

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
const totalTimePlayed = players.reduce(function (time, player) {
  // time - это acc
  return time + player.timePlayed;
}, 0); // то с чего начинается time
console.log(totalTimePlayed);

// считаем общую сумму товаров корзины с учетом price * quantity

const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];
const totalAmount = cart.reduce(function (total, item) {
  return total + item.price * item.quantity;
}, 0);
console.log(totalAmount);

//собираем все теги из твитов

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
const allTags = tweets.reduce(function (tags, tweet) {
  tags.push(...tweet.tags); // распЫляем
  return tags;
}, []);
console.log(allTags);

// грязная версия - мутирует акк

// ведем статистику тегов
// задача - если в acc есть tag, то его нужно сделать +1, если нет то нужно его записать и поставить единичку
// используем метод hasOwnProperty
const tagsStats = allTags.reduce(function (acc, tag) {
  // у нас есть функция с acc, tag начинаться будет с пустого объекта
  console.log('TAG: ', tag);
  console.log('ACC: ', acc);

  if (acc.hasOwnProperty(tag)) {
    console.log('такое св-во есть, увеличиваем значение');

    acc[tag] += 1;

    return acc;
  }
  console.log('такого св-ва нет, добавляем на объект');

  acc[tag] = 1;

  // рефакторинг верхних 6 строк =>

  acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;
  return acc;

  console.log(tag); // tag как ключ в нем хранятся - tags, нужно плюсовать кол-во
}, {});

// чистая версия, каждый раз создает нав объект - ! МЕДЛЕННО
// const tagsStats = allTags.reduce(function (acc, tag) {
//   return {
//     ...acc,
//     [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;
//   };
// }, {});

console.log(tagsStats);
// на выходе хотим получить общее кол-во тегов, объект статистики
/* {
  html: 3,
nodejs: 3,
js: 2
} */

// reduce своими руками =>

// Array.prototype.reduce = function (callback, initialValue = this[0]) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i += 1) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }

//   return accumulator;
// };
