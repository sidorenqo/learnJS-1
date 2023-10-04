// УСЛОВИЕ В ФУНКЦИИ

function canAccessWebsite(age) {
  if (age < 18) {
    return false;
  } // При использовании в функции, мы опускаем else. Т.к. после return функция прекращает работу
  return true;
}

console.log(canAccessWebsite(18));

// Перепишем эту функцию в стрелочную

const canAccessWebsite2 = (age) => (age < 18 ? false : true); // Тернарный оператор и true/false можно не писать
console.log(canAccessWebsite2(22));
