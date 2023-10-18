"use strict";
const express = require('express');
const { UserController } = require('./controller/index');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send({ API: 'up' });
});
app.get('/api/users', UserController.getAllUsers);
app.post('/users', UserController.createUser);
// .get('/matches', MatchesController);
module.exports = app;
