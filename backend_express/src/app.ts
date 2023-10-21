import express from 'express';
import { Application } from 'express';
import UserController from './controller/UserController';
import LoginController from './controller/LoginController';
import AuthController from './controller/AuthController';
// import cors from './utils/corsConfig';
import cors from 'cors';
import corsConfig from './utils/corsConfig';

const app: Application = express();
app.use(express.json());

app.use(corsConfig);

app.get('/', (_req, res) => {
  res.send({ API: 'up!' });
});

app.post('/register', UserController.createUser);
app.post('/login', LoginController.postLogin);
app.post('/api/auth', AuthController.tokenComparison);
app.get('/api/users', UserController.getAllUsers);

export { app };
