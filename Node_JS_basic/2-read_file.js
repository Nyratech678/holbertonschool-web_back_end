const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').filter(line => line.trim());
    
    console.log(`Number of students: ${lines.length - 1}`);
    
    const students = {};
    for (let i = 1; i < lines.length; i++) {
      const [firstName, , , field] = lines[i].split(',');
      if (field) {
        if (!students[field]) students[field] = [];
        students[field].push(firstName);
      }
    }
    
    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};