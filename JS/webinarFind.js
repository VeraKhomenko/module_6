/* Array.prototype.find()
+ поэлементно перебирает оригинальный массив
возвращает первый элемент удовлетворяющий условию поиска
*/
// ! ни когда не использлвать filter для того что бы найти один эл (вернет массив из одного эл, будет переберать до конца все эл), он создан для того что бы искатьМНОГО в коллекции
// find - ищет ОДИН эл и прекращает поиск/ если не нашел вернет undefined

const numbers = [5, 10, 15, 20, 25];
const number = numbers.find(function (n) {
  return n === 15;
});

// console.log(item);
// console.log(index);
// console.log(array);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// ищем игрока по id
const playerIdToFind = 'player-3';
const player = players.find(function (player) {
  return player.id === playerIdToFind;
});

console.log(player);
