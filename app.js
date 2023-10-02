// Преобразование типов

const age = "18";
console.log(Number(age) + 5); // Если знак + JS приводит все к строкам
console.log(age - 3); // Если знак минус, деление, умножение  - привидит к числу
const userName = "Вася";
console.log(Number(userName) + 5); // Получаем NAN так как получено не число!
console.log(String(4) + 7); // Результат 47, конвертировали в строку
console.log(Boolean("") + 10); // преобразование в булевое значение
console.log(true + 2); // Получаем 3, т.к. значение тру конвертируется в еденицу

const a = 2 + "10";
console.log(a - 10);

// Всегда получаем false!

console.log(Boolean(0)); //false
console.log(Boolean("")); //false
let z;
console.log(Boolean()); // z не задана (undefiend), соотвественно получаем false
console.log(Boolean(null)); //false
console.log(Boolean(Number("string"))); // false т.к получаем NaN
