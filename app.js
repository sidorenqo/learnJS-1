// МЕТОД MAP() - Итерируется по массиву. Преобразовает исходный массив

const transactionsInUsd = [10, -7, 10, 100]; // Считаем транзакции сначала методжом for

const transactionInRub = [];

for (const transaction of transactionsInUsd) {
  transactionInRub.push(transaction * 60);
}

// console.log(transactionInRub) // В рублях
// console.log(transactionsInUsd)

// делаем методом MAP

const transactionInRub2 = transactionsInUsd.map((transaction, i) => {
  return transaction * 60;
});

console.log(transactionInRub2); // В рублях
console.log(transactionsInUsd);
