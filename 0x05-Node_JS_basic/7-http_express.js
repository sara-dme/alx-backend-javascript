const express = require('express');
const fs = require('fs').promises;

const app = express();

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then(data => {
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
        const output = [];

        output.push(`Number of students: ${totalStudents}`);
        for (const field in hashtable) {
          if (field != 'field') {
            const num = hashtable[field].length;
            output.push(`Number of students in ${field}: ${num}. List: ${hashtable[field].join(', ')}`);
          }
        }
        return output.join('\n');
      })
      .catch(error => {
        throw new Error('Cannot load the database');
      });
  }

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`)
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});
app.listen(1245);

module.exports = countStudents;
