import readDatabase from '.../utils';

class StudentsController {
    static getAllStudents(req, res, DATABASE) {
        readDatabase(DATABASE)
        .then((fields) => {
          const students = [];
          let msg;
          students.push('This is the list of our students');
          for (const k of Object.keys(fields)) {
            msg = `Number of students in ${k}: ${
                fields[k].length}
                . List: ${fields[k].join(', ')}`;
                students.push(msg);
          }
          res.send(200, `${students.join('/n')}`);
        })
        .catch(() => {
            res.send(500, 'Cannot load the databas');
        });
    }

    static getAllStudentsByMajor(req, res, DATABASE) {
      const { major } = req.params;
      if (major !== 'CS' && major !== 'SWE') {
        res.send(500, 'Major parameter must be CS or SWE');
      } else {
        readDatabase(DATABASE)
        .then((fields) => {
            const students = fields[major];
            res.send(200, `List: ${students.join(', ')}`);
        })
        .catch(() => res.send(500, 'Cannot load the database'));
      }
    }
}

export default StudentsController;