const roles = ["user", "admin", "manager"];

const elIndex = roles.indexOf("admin"); // indexOf перебирает массив, находит нужный элемент и возвращает его. Если одинаковых элементов два, то возвращает только первый элемент.
console.log(elIndex);

const elIndex2 = roles.indexOf("superUser"); // Если элемент не найден возвращает -1
console.log(elIndex2);

if (roles.indexOf("admin") >= 0) {
  // Таким способом можем проверить есть ли у пользователя доступ к сайту. Используется редко.
  console.log("Доступ есть");
}

console.log(roles.includes("admin")); // Поиск по массиву, возвращает true / false
console.log(roles.includes("superadmin")); // Поиск по массиву, возвращает true / false

if (roles.includes("admin")) {
  console.log("Доступ есть");
}
