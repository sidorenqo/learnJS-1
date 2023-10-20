// FILTER() - оставляем в массиве только элементы которые удовлетворяют нашему условию. Возвращает новый масив
// Фильтрация данных ( показываем только положительные операции)

const operations = [100, -20, 7, -20, 50];

// const positiveOperations = [];
// for (const operation of operations) {   // Делаем методом for
//   if (operation > 0) {
//     positiveOperations.push(operation);
//   }
// }

// console.log(positiveOperations);

const positiveOperations = operations.filter((operation) => {
  return operation > 0;
});
console.log(positiveOperations);

const positiveRUBOperations = operations
  .filter((operation) => {
    return operation > 0;
  })
  .map((operation) => operation * 60);
console.log(positiveRUBOperations);
