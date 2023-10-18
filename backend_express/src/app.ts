import express from 'express';
import { Application } from 'express';
import UserController from './controller/UserController';

const app: Application = express();
app.use(express.json());

// app.register(cors, {
//   origin: true,
// });

app.get('/', (_req, res) => {
  res.send({ API: 'up!' });
});

app.get('/api/users', UserController.getAllUsers);
app.post('/api/users', UserController.createUser);
// .get('/matches', MatchesController);

export { app };
