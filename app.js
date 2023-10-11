// Модификация строк в массив и обратно.
// let roles = ["user", "admin", "manager", "superuser"];

// const url = "auth/user/admin";
// const res = url.split("/");
// console.log(res);

// console.log(roles.join("-"));

/**
 *  Дан список задач
 * const tasks = ['Задача 1']
 * Сделать функции: Добавление задачи в конец массива
 * Удаление задачи по названию
 * Перенос задачи в начало списка по названию
 * ВСЕГДА МЕНЯЕМ ИСХОДНЫЙ МАССИВ!
 */

const tasks = ["Задача 1"];

function addTasks(el) {
  tasks.push(el);
}

function delTasks(el) {
  const indexElement = tasks.indexOf(el);
  if (indexElement === -1) {
    return;
  }
  return tasks.splice(indexElement, 1);
}

function transferTasks(el) {
  const result = delTasks(el);
  if (!result) {
    return;
  }
  tasks.unshift(result[0]);
}

addTasks("Задача 2");
addTasks("Задача 3");
console.log(tasks);

delTasks("Задача 2");
console.log(tasks);

transferTasks("Задача 3");
console.log(tasks);
