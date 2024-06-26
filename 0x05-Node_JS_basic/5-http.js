const http = require('http');
const fs = require('fs')

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      else {
        const lines = data.trim().split('\n').filter(line => line.trim() !== '');
        const students = lines.map(line => line.split(','));
        const hashtable = {};

        students.forEach(student => {
        const field = student[3];
        if (!hashtable[field]) {
          hashtable[field] = [];
        }
        hashtable[field].push(student[0]);
        });

        const output = [];
        let totalStudents = lines.length - 1;
        output.push('This is the list of our students');
        output.push(`Number of students: ${totalStudents}`);
        
        for (const field in hashtable) {
          if (field !== 'field') {
            const num = hashtable[field].length;
            totalStudents += num;
            output.push(`Number of students in ${field}: ${num}. List: ${hashtable[field].join(', ')}`);
          }
        }
        
        resolve(output.join('\n'));   
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    countStudents(process.argv[2].toString()).then((output) => {
      res.end(output);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(1245);
module.exports = app;
