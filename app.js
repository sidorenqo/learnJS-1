const role1 = "admin";
const role2 = "user";
const role3 = "superUser";

const roles = ["admin", "user", "superUser"];
const userInfo = ["Аня", 25];

console.log(roles);

console.log(roles[3]);

console.log(roles.length);
console.log(roles.length - 1); // Получение последнего элемента

console.log(roles.at(0)); // Современный синтаксис получения последнего элемента
console.log(roles.at(0)); // Например получение последнего элемента выглядит так

// Что может быть элементом массива
const usersAge = [2040 - 2023, 20 - "6", 10 > 0 ? 5 : 0];
console.log(usersAge);

// Альтернативный способ создания массива

const usersNames = new Array("Вася", "Петя", "Катя");
console.log(usersNames);
