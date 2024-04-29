const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter(line => line.trim() !== ''); // Filter out empty lines
        const students = lines.map(line => line.split(','));
        
        // Counting students in each field
        const fields = {};
        students.forEach(student => {
          const field = student[3];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student[0]);
        });

        const totalStudents = students.length;
        console.log(`Number of students: ${totalStudents}`);
        
        // Logging number of students in each field
        for (const field in fields) {
          const numStudentsInField = fields[field].length;
          console.log(`Number of students in ${field}: ${numStudentsInField}. List: ${fields[field].join(', ')}`);
        }
        
        resolve();
      }
    });
  });
}

// Example usage:
countStudents('database.csv')
  .catch(error => console.error(error.message));
