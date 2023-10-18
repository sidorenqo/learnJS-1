// function power(pow) {
//   return function (num) {
//     return num ** pow;
//   };
// }

// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));

// // Мы исполнили функцию с аргументом 2. И в powerOfTwo положили результат. Результатом является еще одна функция.

// // Еслии в будующем нам понадобится возводить число уже в треью степень, мы легко может переделать выражение:

// const powerOfTree = power(3);
// console.log(powerOfTree(5));

// // Можем сделать более короткую запись: (например мы хотим возвеси 4 в 5 степень)

// console.log(power(5)(4));

const power = (pow) => (num) => num ** pow;
const powerOfTwo = power(2);
console.log(powerOfTwo(5));

const powerOfThree = power(3);
console.log(powerOfThree(5));

console.log(power(5)(4));
