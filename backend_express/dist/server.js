"use strict";
require('dotenv').config();
const app = require('./app');
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
