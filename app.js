// ФУНКЦИИ ВНУТРИ ФУНКЦИЙ

// На примере задачи: Мы служба доставки придумали стартап в котором люди могут обмениваться подарками. Цена за доставку будет меняться в зависимости от веса и дальности доставки

const KG_IN_USD = 7; // Стоимость одного кг веса при доставке
const KM_IN_USD = 5; // Стоимость одного километра пути при доставке

function calculateW(present) {
  // расчитывает стоимость по весу, параметр вес
  return present * KG_IN_USD; // возвращаем вес умноженный на 7 долларов
}

function calculateKm(distance) {
  // расчитывает стоимость по весу, параметр вес
  return distance * KM_IN_USD; // возвращаем вес умноженный на 7 долларов
}

function getExchangePrice(present1, present2, distance) {
  // Функция считает стоимость доставки, параметры -  вес подарок 1, вес подарок 2, расстояние
  /** ТУТ Запись, если бы мы не использовали дополнительные функции!
 *const price1 = present1 * KG_IN_USD;
  const price2 = present2 * KG_IN_USD;
  const distancePrice = distance * KM_IN_USD;
  return price1 + price2 + distancePrice;
 */
  const price1 = calculateW(present1);
  const price2 = calculateW(present2);
  const distancePrice = calculateKm(distance);
  return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(2, 8, 25));
