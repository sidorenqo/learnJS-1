// Эталонное решение

function computeCredit(age, hasJob = false) {
  switch (true) {
    case age > 24 && hasJob:
      return 500;
    case age > 24:
      return 100;
    default:
      return 0;
  }
}
console.log(`Клиенту одобрен кредит в размере: ${computeCredit(29, true)} $`);

function canBuy(productPrice, age, money, hasJob = false) {
  const creditMoney = computeCredit(age, hasJob);
  return productPrice <= money + creditMoney;
}

console.log(`Можем продать макбук клиенту : ${canBuy(2000, 25, 1000)}`);
