const express = require('express');
const r = express.Router();
const c = require('../controllers/authController');
const userValidator = require('../middlewares/userValidator');

// Register
r.get('/auth/register', c.registerG);
r.post('/auth/register', userValidator, c.registerP);

//Login
r.get('/auth/login', c.loginG);
r.post('/auth/login', c.loginP);

module.exports = r;