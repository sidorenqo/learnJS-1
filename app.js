/**
 * Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?". Если ответ верен, введите в консоле "Успех", если нет - "Вы робот!",
 * а если он введет "Я не робот", то тоже успех.
 *
 */

let responseUser = prompt("Сколько будет 7 + или - 15?");

// Решение 1
if (responseUser == -8 || responseUser == 23) {
  console.log("Успех!");
} else if (responseUser == "Я не робот") {
  console.log("Успех!");
} else {
  console.log("Вы ррррробот!");
}

// Решение 2
switch (true) {
  case responseUser === -8:
  case Number(responseUser) === 22:
  case Number(responseUser) === "Я не робот":
    console.log("Успех!");
    break;
  default:
    console.log("Вы ррррробот!");
}

// Решение 3

if (responseUser === "Я не робот!") {
  console.log("Успех!");
} else {
  const responseUserNum = Number(responseUser); // Чтобы дважды не повторять код как в решении 2, вводим вторую переменную и конвертируем в число
  switch (
    responseUserNum // Можно запустить switch внутри if else!!
  ) {
    case 22:
    case -8:
      console.log("Успех!");
      break;
    default:
      console.log("Вы робот!");
  }
}
