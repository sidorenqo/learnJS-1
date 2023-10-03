// Тернарный оператор

const bmwX3Price = 1000000;
// const fordFocusPrice = 10000;

const budget = 20000;

let message;

if (budget > bmwX3Price) {
  message = "BMW";
} else {
  message = "НЕХВАТАЕТ ДЕНЕГ!";
}

// // Для упрощения вводим тернарный оператор ?
// const str =  10 > 0 ? 'Больше нуля' : 'Меньше нуля'

// // Запись выше полностью равно этой:

// if (10 > 0) {
//   message = "Больше нуля";
// } else {
//   message = "Меньше нуля";
// }
// console.log(`Я хочу купить ${message} `);

console.log(
  `Я хочу купить ${budget > bmwX3Price} ? 'BMW' : "НЕХВАТАЕТ ДЕНЕГ!"`
);
