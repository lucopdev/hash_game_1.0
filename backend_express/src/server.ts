import dotenv from 'dotenv';
const express = require('express');

import { app } from './app';
import { corsOptions } from './utils/corsConfig';
const http = require('http').createServer(app);

dotenv.config();
const port = process.env.PORT || 3000;

const io = require('socket.io')(http, {
  cors: corsOptions,
});

http.listen(port, () => {
  console.log(`server running on port ${port}`);
  io.on('connection', (socket: any) => {
    socket.on('makeMove', (move: any) => {
      console.log(`User make move ${socket.id}`);
      io.emit('recivedMove', move)
    });

    socket.on('message', (message: any) => {
      console.log(`User send message ${socket.id}`);
      io.emit('recivedMessage', message);
    });
  });
});
