const isAdmin = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`);
console.log(`Обчный файл ${isAdmin || canWrite}`);
console.log(`Инвертируем права админа ${!isAdmin}`); // НЕ

const isEdited = true;
const isSuperAdmin = true;
console.log(
  `Файл с редактированием ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`
);

// Операторы с другими типами

console.log("Вася || Олег"); // Или выводит первое правдивое или последнее ложное
console.log("false || Олег"); // Или выводит первое правдивое или последнее ложное
console.log("Вася || false"); // Или выводит первое правдивое или последнее ложное

console.log("Вася" && "Олег"); // И вывоит последнее прадивое или первое ложное
console.log(false && "Олег"); // И вывоит последнее прадивое или первое ложное
console.log("Вася" && false); // И вывоит последнее прадивое или первое ложное

let a;
const userName = a || "Петя";
console.log(userName);

const itsAdmin = false;
const fileName = itsAdmin && "file.mp4";
console.log(fileName);
