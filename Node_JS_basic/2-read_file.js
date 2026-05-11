const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    const students = {};

    console.log(`Number of students: ${lines.length - 1}`);

    for (let index = 1; index < lines.length; index += 1) {
      const [firstName, , , field] = lines[index].split(',');

      if (!students[field]) {
        students[field] = [];
      }

      students[field].push(firstName);
    }

    Object.keys(students).sort().forEach((field) => {
      console.log(
        `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`,
      );
    });
  } catch (_err) {
    throw new Error('Cannot load the database');
  }
};
