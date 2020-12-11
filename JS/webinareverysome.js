const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

/* Array.prototype.every()
+ поэлементно перебирает оригинальный массив
возвращает true если все эл массива удовлетваряют условию

*/
const isAllOnline = players.every(function (player) {
  return player.online; // вернет true если  ВСЕ элементы будут сообветствовать условию
});

console.log('isAllOnline: ', isAllOnline);

const averagedInPlayTime = players.every(function (player) {
  return player.timePlayed > 100;
});
console.log('averagedInPlayTime: ', averagedInPlayTime);

/* Array.prototype.some()
+ поэлементно перебирает оригинальный массив
возвращает true если хотя бы один эл массива удовлетваряют условию

*/

const isAllOnline = players.some(function (player) {
  return player.online; // вернет true если хотя бы ОДИН элементы будут сообветствовать условию
});

console.log('isAllOnline: ', isAllOnline);
