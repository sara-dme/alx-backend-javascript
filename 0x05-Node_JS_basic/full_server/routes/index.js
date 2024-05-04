const express = require('express');
const router = express.Router();
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

    app.use('/', router);

    router.get('/', (req, res) => {
        AppController.getHomepage(req, res);
    });

    router.get('/students', StudentsController.getAllStudents);

    router.get('students/:major', (req, res) => {
        AppController.getAllStudentsByMajor(req, res, process.argv[2]);
    });

module.exports = router;