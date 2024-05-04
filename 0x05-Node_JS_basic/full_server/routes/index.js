import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function controllerRouting(app) {
    const router = express.Router();
    app.use('/', router);

    router.get('/', (req, res) => {
        AppController.getHomepage(req, res);
    });

    router.get('/students', (req, res) => {
        AppController.getAllStudents(req, res, process.argv[2]);
    });

    router.get('/:major', (req, res) => {
        AppController.getAllStudentsByMajor(req, res, process.argv[2]);
    });
}

export default controllerRouting;