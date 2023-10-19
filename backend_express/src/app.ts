import cors from 'cors';
import express from 'express';
import { Application } from 'express';
import UserController from './controller/UserController';
import LoginController from './controller/LoginController';
import AuthController from './controller/AuthController';

const app: Application = express();
app.use(express.json());

app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (_req, res) => {
  res.send({ API: 'up!' });
});

app.get('/api/users', UserController.getAllUsers);
app.post('/api/register', UserController.createUser);
app.post('/api/login', LoginController.postLogin);
app.post('/api/auth', AuthController.tokenComparison);

export { app };
