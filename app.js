const users = ["Аня", "Вика", "Катя"]; // Студены которые пришли на экзамент, по задаче нужно исключить одного и изменить на другого
console.log(users);
users[2] = "Кристина";
console.log(users);

// Добавление элемента в массив
const arrLenght = users.push("Никита"); // Добавляем значение в конец массива. Если нужно получить длину массива, мы можем положить ее в переменную
console.log(users);
console.log(arrLenght);

users.unshift("Вася"); // Добавляем значение в начало массива
console.log(users);

// Удаление пользователей из массива
users.pop();
console.log(users);
