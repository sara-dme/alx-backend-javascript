import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port);

export default app;