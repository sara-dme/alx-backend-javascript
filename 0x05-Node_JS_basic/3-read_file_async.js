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
                    const num = hashtable[field].length;
                    console.log(`Number of students in ${field}: ${num}. List: ${hashtable[field].join(', ')}`);
                }
                resolve(data);
                
        }

    });
});
}
module.exports = countStudents;