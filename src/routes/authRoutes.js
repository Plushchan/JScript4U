const express = require('express');
const r = express.Router();
const c = require('../controllers/authController');

// Register
r.get('/auth/register', c.registerG);
r.post('/auth/register', c.registerP);

//Login


module.exports = r;