/* Array.prototype.map()
+ поэлементно перебирает оригинальный массив
создает новый пустой массив = > return возвращает НОВЫЙ   массив ТАКОЙ же массив той же длины

*/

const numbers = [5, 10, 15, 20, 25];

numbers.mappedNumbers = numbers.map(function (element) {
  // обязательный только element
  console.log(element);
  // console.log(index);
  // console.log(array);
  return element * 2;
});
console.log(numbers); //оригинальная функция - она не мутировала
console.log(mappedNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]; // id - гарантированно индивидуальный

// получаем массив имен всех игроков

const playerNames = players.map(function (player) {
  // player - тот же element players - это массив в множественном числе, а его элемент - тоже слово в ед числе
  return player.name;
});

console.log(playerNames);
// увеличиваем кол-во поинтов каждого игрока
const updatedPlayers = players.map(function (player) {
  return {
    // возвращаем новый объект - для каждого игрока
    ...player,
    points: player.points + player.points * 0.1, // перезаписываем каждого игрока
  };
});
console.table(players); // оригинальные
console.table(updatedPlayers); // обнавленные

/* увеличиваем кол-во часов игрока по id */

const playerIdToUpdate = 'player-3'; // значение id которое нужно обновить
const updatedPlayers = players.map(function (player) {
  console.log(player.id);

  if (player.id === playerIdToUpdate) {
    // если id совпадает с тем что нужно обновить то на это место возвращаем старый распыленный
    return {
      ...player, // распыляем
      timePlayed: player.timePlayed + 50, // возвращаем новый объект, от предыдущего ещё + 50 добавляем
    };
  } // т.е. если совпало - вернули новый объект
  return player; // если не совпало вернули оригинал
});

console.log(updatedPlayers);
