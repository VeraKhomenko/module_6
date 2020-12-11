/* Array.prototype.sort() МЕТОД 
сортирует и ИЗМЕНЯЕТ оригинальный массив
не используется часто

*/

const numbers = [1, 9, 6, 2, 3];
// numbers.sort(function (prev, next) {
//   return prev - next; // по возростанию
// });
// console.log(numbers);

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort(function (prev, next) {
//   return next - prev; // по убыванию
// });
// console.log(numbers);

const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log(letters);

// как создать копию массива чтоб не сортировать оригинальный
//const copy = numbers.splice(); //- splice метод создает клон -  укстаревший способ
const copy = [...numbers].sort(); // распылили в новый массив и его рассортировали

// console.log(numbers); // оригинальный
// console.log(copy); // клон

// кастомная сложных типов сортируем массив объектов

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// players.sort(function (prevPlayer, nextPlayer) {
const sortedByTopPlayers = [...players].sort(function (prevPlayer, nextPlayer) {
  // по возрастанию значения св-в
  //return prevPlayer.timePlayed - nextPlayer.timePlayed;

  // по убіванию
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
});

console.table(players);

console.table(sortedByTopPlayers);
const sortedByWorstPlayers = [...players].sort(function (
  prevPlayer,
  nextPlayer,
) {
  // по возрастанию значения св-в
  //return prevPlayer.timePlayed - nextPlayer.timePlayed;

  // по убіванию
  return prevPlayer.timePlayed - nextPlayer.timePlayed;
});

console.table(sortedByWorstPlayers);
