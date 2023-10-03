/**
 * Вася положил 12000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
 * Вывесли в консоль, сможет ли он купить дом за 13500$ через 2 года после снятия вклада. И остаток после покупки.
 *
 *
 * формалула сложного процента:
 * Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
 */

const totalMoney = 12000;
const percentagePerMonth = 0.07; // Приводим к числу
// console.log(percentagePerMonth);

const moneyWithInsert = totalMoney * (1 + percentagePerMonth / 12) ** 24;
// console.log(moneyWithInsert)
const priceNewHouse = 13500;

if (moneyWithInsert >= priceNewHouse) {
  console.log(
    `Вася сможет купить себе новый дом, так как заработает ${moneyWithInsert} $`
  );
} else {
  console.log(
    `Вася не купит новый дом. Он заработает всего ${moneyWithInsert}`
  );
}
