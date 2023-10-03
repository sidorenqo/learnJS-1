// SWITCH STATEMENT - позволяет избежать дублирование if

const role = "admin";

if (role === "manager") {
  console.log("Это менеджер!");
} else if (role === "admin") {
  console.log("Это администратор!");
} else if (role === "SEO") {
  console.log("Это СЕО компании!");
} else {
  console.log("Мы не знаем кто ты");
}

// Теперь запишем выражения выше с помощью SWITCH

switch (role) {
  case "manager": // 'role' === строго равно 'manager'
    console.log("Это менеджер!");
    break;
  case "admin":
    console.log("Это админ!");
    break;
  case "SEO":
    console.log("Это СЕО компании!");
    break;
  default:
    console.log("Мы не знаем кто ты");
}

// Объеденение в SWITCH

switch (role) {
  case "manager": // 'role' === строго равно 'manager'
  case "admin":
    console.log("Не руководитель!");
    break;
  case "SEO":
    console.log("Руководитель!");
    break;
  default:
    console.log("Мы не знаем кто ты");
}

// ЕЩЕ ПРИМЕР
const num = 1;

switch (true) {
  case num > 0: // true === num > 0
    console.log("Положительный");
    break;
  case num < 0:
    console.log("Отрицательный");
    break;
  default:
    console.log("нолЬ!");
}
