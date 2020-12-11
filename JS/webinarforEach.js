/* Array.prototype.forEach()
+ поэлементно перебирает оригинальный массив
- ни чего не возвращает
заменяет классический  for, если не нужно передавать цикл 
*/

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (element, index, array) {
  // обязательный только element
  console.log(element);
  console.log(index);
  console.log(array);
});

/*------------------------------------------------------*/
