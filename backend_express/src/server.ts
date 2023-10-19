// import dotenv from 'dotenv';
// import express from 'express';
// import { app } from './app';

// dotenv.config();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// app.listen(port, () => {
//   console.log(`Server express is running on port ${port}`);
// });

import http from 'http';
import dotenv from 'dotenv';
import express from 'express';
import socketio from 'socket.io';
import { corsOptions } from './utils/corsConfig';

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer, {
  cors: corsOptions,
});

io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);
});

httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// tentar com versão 2.2.0 do socket.io
