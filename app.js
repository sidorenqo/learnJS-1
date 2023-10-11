// Деструктуризация массивов

const userData = ["Антон", 18, "Москва"];

function getData() {
  return ["Антон", 18, "Москва"];
}
// Запись без деструктуризации
// const userName = getData()[0];
// const age = getData()[1];
// const city = getData()[2];

const [userName, age, city] = getData();

console.log(userName, age, city);
