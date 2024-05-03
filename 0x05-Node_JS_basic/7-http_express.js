const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      else {
        let output = '';
        const lines = data.trim().split('\n').filter(line => line.trim() !== '');
        const students = lines.map(line => line.split(','));
        const hashtable = {};
        const totalStudents = students.length - 1;

        students.forEach(student => { 
          const field = student[3];
          if (!hashtable[field]) {
            hashtable[field] = [];
          }
          hashtable[field].push(student[0]);
        });
        output += `Number of students: ${totalStudents}\n`;
        for (const field in hashtable) {
          if (field != 'field') {
            const num = hashtable[field].length;
            output += `Number of students in ${field}: ${num}. List: ${hashtable[field].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((data) => {
      res.send(['This is the list of our students', data].join('\n'));
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    })
})
app.listen(1245);

module.exports = app;
