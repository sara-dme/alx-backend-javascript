const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    const hashtable = {};

    for (const line of lines) {
      const fields = line.split(',');
      const field = fields[fields.length - 1].trim();

      if (!hashtable[field]) {
        hashtable[field] = [];
      }
      hashtable[field].push(fields[0]);
    }
    console.log('Number of students:', (lines.length - 1));
    for (const [field, students] of Object.entries(hashtable)) {
      if (field != 'field') {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
