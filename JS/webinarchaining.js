// цепочки вызовов - chaining м. делать на любой сущности - объект, массив т.д.

const numbers = [1, 5, 2, 4, 3];
const greaterTenTwo = numbers.filter(function (num) {
  return num > 2;
});

//console.log(greaterTenTwo);

const multByTwo = greaterTenTwo.map(function (num) {
  return num * 3;
});
//console.log(multByTwo);

const sorted = multByTwo.sort(function (a, b) {
  return a - b;
});
//console.log(sorted);
// вызываем операцию на рез-те предыдущей

const res = numbers
  .filter(function (num) {
    return num > 2;
  })
  .map(function (num) {
    return num * 3;
  })
  .sort(function (a, b) {
    return a - b;
  });
//console.log(res);
// и стрелочный вариант
// const res = numbers
//   .filter(num => num > 2)
//   .map(num => num * 3)
//   .sort((a, b) => a - b);
// console.log(res);

// сщртируем тех кто онлайн по рангу, оригиальный не  изменился

const players = [
  { id: 'id-1', tag: 'Mango', timePlayed: 310, isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', timePlayed: 470, isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', timePlayed: 230, isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', timePlayed: 150, isOnline: true, rank: 400 },
];

// получаем массив всех игроков онлайн

const onlineAndSorted = players
  .filter(function (player) {
    return player.isOnline;
  })
  .sort(function (prevPlayer, nextPlayer) {
    return prevPlayer.rank - nextPlayer.rank;
  });

console.table(onlineAndSorted);
