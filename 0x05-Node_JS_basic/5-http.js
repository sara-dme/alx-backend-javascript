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
                const totalStudents = students.length;

                students.forEach(student => {
                    const field = student[3];
                    if (!hashtable[field]) {
                        hashtable[field] = [];
                    }
                    hashtable[field].push(student[0]);
                });
                console.log(`Number of students: ${totalStudents}`);
                for (const field in hashtable) {
                    if (field != 'field') {
                        const num = hashtable[field].length;
                        console.log(`Number of students in ${field}: ${num}. List: ${hashtable[field].join(', ')}`);
                    }
                }
                resolve(data);   
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
        res.write('This is the list of our students\n');
        countStudents(process.argv[2].toString()).then((output) => {
            const str = output.slice(0, -1);
            res.end(str);
        }).catch(() => {
            res.statusCode = 404;
            res.end('');
        });
    }
});

app.listen(1245);
module.exports = app;
