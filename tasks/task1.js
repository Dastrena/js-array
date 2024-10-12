//Функція filterAdults приймає масив об'єктів, що представлє людей (з полями name та age),
//вам потрібно написати код, який повертає новий масив, який містить лише тих людей, чий вік більше або дорівнює 18.
function filterAdults(people) {
  //Ваш код
  const result = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
      result[result.length] = people[i];
    }
  }
  return result;
}

module.exports = filterAdults;