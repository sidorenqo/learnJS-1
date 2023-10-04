/**
 * Пользователь хочет приобрести игру в магазине
 * Он может сделать это только если
 * - Его баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalanse)
 * - Он не забанен
 * - Игра не куплена
 * - Игра есть в продаже
 *
 * Напишите условие для покупки и выведите в консоль результат
 *
 */

const balance = 200;
const bonusBalanse = 100;
const isBanned = false;
const isExist = true;
const isSelling = true;

const canBuy =
  (balance >= 1000 || bonusBalanse >= 100) && !isBanned && isExist && isSelling;

console.log(`Пользователь может сделать покупку: ${canBuy ? "ДА" : "НЕТ"} `);
