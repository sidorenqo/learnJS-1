const secretNumber = "7";

if (Number(secretNumber) === 7) {
  // Строгое сравнение
  console.log("угадал строго"); // Нужно привести результат к числу ЯВНО, иначе в консоль ничего не выведется
}

if (secretNumber == 7) {
  // Нестрогое сравнение. Хорошее правило НЕ ИСПОЛЬЗОВАТЬ!
  console.log("угадал не строго");
}

const q = Number(prompt("Введите число"));
if (q === 7) {
  console.log("!");
}
