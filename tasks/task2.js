const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції
function getTopScoringStudents(students) {
  let result = [];

  students.forEach(student => {
    if (student.score > 80) {
      result.push(student.name);
    }
  });

  return result;
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  let totalAge = 0;

  for (const student of students) {
    totalAge += student.age;
  }

  const average = totalAge / students.length;
  console.log(average);
  return average;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  return students.concat(student);
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  let result = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      result.push(students[i]);
    }
  }

  return result;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };
