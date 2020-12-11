/* Array.prototype.filter()
+ поэлементно перебирает оригинальный массив

создает новый пустой массив = > return возвращает в НОВЫЙ   массив элементы кот-ые удовлетворяют условию

*/

const numbers = [5, 10, 15, 20, 25];

numbers.filteredNumbers = numbers.filter(function (number) {
  return number > 15;
});
console.log(numbers); //оригинальная функция - она не мутировала
console.log(filteredNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// получаем массив всех игроков онлайн

const onlinePlayers = player.filter(function (player) {
  return player.online;
});
console.table(onlinePlayers);

//получаем массив всех игроков офлайн

const onlinePlayers = player.filter(function (player) {
  return !player.online;
});
console.table(offlinePlayers);

// получаем список хардкор игроков с временем больше  поинтов каждого игрока

const hardcorePlayers = player.filter(function (player) {
  return player.timePlayed > 250;
});
console.table(hardcorePlayers);
