class AppController {

  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
}

  static getAllStudents(req, res, major) {
        if (!major) {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        const students = studentsData[major];

        if (!students) {
            return res.status(500).send('Invalid major. Must be CS or SWE');
        }

        const response = `Number of students in ${major}: ${students.length}. List: ${students.join(', ')}`;

        res.send(response);
    }
}

module.exports = AppController;