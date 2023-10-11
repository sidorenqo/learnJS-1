// SLICE SPLISE CONCAT REVERS

let roles = ["user", "admin", "manager", "superuser"];

// SLICE Не модифицирует исходный массив. В качестве первого аргумента принимает начальный индекс, в качестве второго (если он есть) - конечный.
const res = roles.slice(2); // Взят второй элемент, массив отрезан до конца, присвоен результату выполнения
console.log(res);

const res2 = roles.slice(2, 3); // В качестве начального элемента взят 2 второй элемент, в качестве последнего третьего элемента, НО НЕ ВКЛЮЧАЯ ЕГО
console.log(res2);

const res3 = roles.slice(-1); // БЕРЕТ ПОСЛЕДНИЙ ЭЛЕМЕНТ МАССИВА в зависимости от числа которое указано в методе ( например если указано -2, то возьмет последние 2 елемента)
console.log(res3);

const res4 = roles.slice(1, -2); // Первая цифра - считаем сначала, вторая сконца
console.log(res4);

// SPLICE - Модифицирует исходный массив. В качестве первого аргумента принимает начальный индекс, в качестве второго (если он есть) - длину массива.
roles = ["user", "admin", "manager", "superuser"];

const res5 = roles.splice(2); // Изменяет длину начального массива, модифицирует массив
console.log(res5);

const res6 = roles.splice(2, 2); // Со второго элемента берем 2 элемента
console.log(res6);

// REVERSE - переварачивает массив. Модифицирует исходный массив

roles = ["user", "admin", "manager", "superuser"];

const res8 = roles.reverse();
console.log(res8);

// CONCAT - соединение 2х массивов
roles = ["user", "admin", "manager", "superuser"];
const newRoles = ["sysadmin", "developer"];
const res9 = roles.concat(newRoles);
console.log(res9);
