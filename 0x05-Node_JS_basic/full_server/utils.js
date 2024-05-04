const fs = require('fs');

function readDatabase(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8',(err, data) => {
            if (err) {
                reject(Error(err));
                return;
            } else {
                try {
                    const database = JSON.parse(data); 
                    resolve(database);
                } catch (error) {
                    reject(error);
                }
            }
            
        })
    })
}
export { readDatabase};