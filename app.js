// Базовые арифметические операторы

const width = 10;
const height = 5;
const space = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2;
const volume = 2 ** 3; // 2*2*2
console.log(volume);

// Строки
const city = "Moskow";
const street = "Lenina";
console.log(city + ", " + street + " " + 5);

// Операторы присваивания
let age = 18 + 5;
age += 2; // age = age + 2;
age -= 3; // age = age - 2;
age *= 2; // age = age * 2;
age /= 2; // age = age / 2;

age++; // age = age + 1
age--; // age = age - 1

console.log(age);

// Операторы сравнения
const vasia = 20;

console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);
