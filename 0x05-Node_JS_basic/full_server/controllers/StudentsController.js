import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase('../../database.csv');
      const fields = Object.keys(database).sort((a, b) => a.localeCompare(b, 'en'));

      let resText = 'This is the list of our students\n';

      fields.forEach(field => {
        const studentsInField = database[field];
        const numStudents = studentsInField.length;
        const studentList = studentsInField.join(', ');
        resText += `Number of students in ${field}: ${numStudents}. List: ${studentList}\n`;
      });

            res.status(200).send(resText);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }



      
         
    static async getAllStudentsByMajor(req, res, DATABASE) {
      const { major } = req.params;
      if (major !== 'CS' && major !== 'SWE') {
        res.send(500, 'Major parameter must be CS or SWE');
      } else {
        try {
          const database = await readDatabase('../../database.csv');
          const students = database[major];
          res.send(200, `List: ${students.join(', ')}`);
        }catch (error) {
          res.send(500, 'Cannot load the database');
        }
      }
    }
}

export default StudentsController;